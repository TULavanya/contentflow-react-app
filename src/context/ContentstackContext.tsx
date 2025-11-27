import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import ContentstackLivePreview from '@contentstack/live-preview-utils';
import contentstackConfig from '../config/contentstack.config';

// Alternative approach: Use REST API directly instead of SDK
interface ContentstackContextType {
  stack: any;
  fetchContent: (contentType: string, options?: any) => Promise<any>;
  isConnected: boolean;
  error: string | null;
}

const ContentstackContext = createContext<ContentstackContextType | null>(null);

interface ContentstackProviderProps {
  children: ReactNode;
}

// Initialize stack immediately (synchronously)
const initializeStack = () => {
  // Check if Contentstack is disabled
  if (!contentstackConfig.enabled) {
    console.log('🔌 Contentstack is DISABLED - using fallback content only');
    console.log('💡 To enable: Set VITE_CONTENTSTACK_ENABLED=true in .env');
    return null;
  }

  console.log('🚀 Initializing Contentstack REST API...');
  console.log('🔑 API Key:', contentstackConfig.apiKey ? `${contentstackConfig.apiKey.substring(0, 10)}...` : '❌ MISSING');
  console.log('🎫 Delivery Token:', contentstackConfig.deliveryToken ? `${contentstackConfig.deliveryToken.substring(0, 10)}...` : '❌ MISSING');
  console.log('🌍 Environment:', contentstackConfig.environment);
  console.log('📍 Region:', contentstackConfig.region);
  
  // Create a simple stack object for REST API calls
  const stackInstance = {
    apiKey: contentstackConfig.apiKey,
    deliveryToken: contentstackConfig.deliveryToken,
    environment: contentstackConfig.environment,
    region: contentstackConfig.region,
    host: contentstackConfig.host || 'cdn.contentstack.io'
  };

  console.log('✅ Contentstack REST API initialized successfully!');
  console.log('✅ Stack object created:', stackInstance);
  
  return stackInstance;
};

export const ContentstackProvider: React.FC<ContentstackProviderProps> = ({ children }) => {
  // Initialize stack synchronously on first render
  const [stack] = useState<any>(() => initializeStack());
  const [isConnected, setIsConnected] = useState(contentstackConfig.enabled);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {

      // Initialize Live Preview if enabled
      if (contentstackConfig.livePreview.enable) {
        const mode = contentstackConfig.livePreview.mode || 'builder';
        console.log(`🔴 Initializing ${mode === 'builder' ? 'Visual Builder' : 'Live Preview'}...`);
        try {
          ContentstackLivePreview.init({
            clientUrlParams: {
              host: contentstackConfig.livePreview.host,
            },
            stackDetails: {
              apiKey: contentstackConfig.apiKey,
              environment: contentstackConfig.environment,
              preview_token: contentstackConfig.livePreview.preview_token, // Required for Visual Builder
            },
            mode: mode, // 'builder' for Visual Builder, 'preview' for Live Preview only
            ssr: contentstackConfig.livePreview.ssr || false,
            enable: true,
          } as any);
          console.log(`✅ ${mode === 'builder' ? 'Visual Builder' : 'Live Preview'} initialized successfully!`);
          console.log('👁️ Editors can now see changes in real-time!');
        } catch (livePreviewError) {
          console.warn('⚠️ Live Preview initialization failed (non-critical):', livePreviewError);
          console.log('📝 Website will work normally without Live Preview');
        }
      } else {
        console.log('⚪ Live Preview is disabled');
      }
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      console.error('❌ Failed to initialize Contentstack:', errorMessage);
      setError(errorMessage);
      setIsConnected(false);
    }
  }, []);

  // Fetch content using REST API
  const fetchContent = async (contentType: string, options: any = {}) => {
    // Return null if Contentstack is disabled
    if (!contentstackConfig.enabled) {
      console.log(`🔌 Contentstack disabled - using fallback content for ${contentType}`);
      return null;
    }

    if (!stack) {
      console.error('❌ Stack is not initialized - this should not happen!');
      return null;
    }

    try {
      console.log(`📥 Fetching ${contentType} using REST API...`);
      console.log('📦 Using stack:', { 
        apiKey: stack.apiKey?.substring(0, 10) + '...', 
        environment: stack.environment, 
        region: stack.region 
      });
      
      // Build API URL based on region
      const regionMap: Record<string, string> = {
        'us': 'cdn.contentstack.io',
        'eu': 'eu-cdn.contentstack.io',
        'azure-na': 'azure-na-cdn.contentstack.io',
        'azure-eu': 'azure-eu-cdn.contentstack.io',
        'gcp-na': 'gcp-na-cdn.contentstack.io'
      };
      
      const host = regionMap[contentstackConfig.region] || 'cdn.contentstack.io';
      const baseUrl = `https://${host}/v3`;
      
      // Build query parameters
      const params = new URLSearchParams({
        environment: contentstackConfig.environment,
        ...(options.locale && { locale: options.locale }),
        ...(options.include_count && { include_count: 'true' }),
        ...(options.limit && { limit: options.limit.toString() })
      });
      
      // Include references - use options.include if provided, otherwise use defaults
      if (!options.skipReferences) {
        const referencesToInclude = options.include || ['testimonials', 'featured_case_studies', 'author', 'featured_blog_posts'];
        referencesToInclude.forEach((ref: string) => {
          params.append('include[]', ref);
        });
      }

      // Add query filters if any
      if (options.query) {
        params.append('query', JSON.stringify(options.query));
      }

      // Determine if fetching single entry or multiple
      const endpoint = options.entryUid 
        ? `/content_types/${contentType}/entries/${options.entryUid}?${params}`
        : `/content_types/${contentType}/entries?${params}`;

      const url = `${baseUrl}${endpoint}`;
      
      console.log('🌐 API URL:', url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'api_key': contentstackConfig.apiKey,
          'access_token': contentstackConfig.deliveryToken,
          'Content-Type': 'application/json'
        },
        cache: 'no-store' // Force fresh data, no caching
      });

      if (!response.ok) {
        if (response.status === 422) {
          // Content type doesn't exist yet - this is expected before setup
          console.warn(`⚠️ Content type "${contentType}" not found in Contentstack (HTTP 422)`);
          console.log(`💡 Create the "${contentType}" content type in Contentstack to enable dynamic content`);
          return null; // Return null to use fallback content
        }
        
        if (response.status === 401) {
          console.error(`🔒 Authentication failed (HTTP 401) - Check your API key and delivery token`);
          return null;
        }
        
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      console.log(`✅ Successfully fetched ${contentType}:`, data);

      // Extract entry/entries from response
      let result;
      
      if (options.entryUid) {
        // Single entry by UID
        result = data.entry;
      } else if (options.allEntries) {
        // All entries
        result = data.entries || [];
        console.log(`📦 Retrieved ${result.length} entries for ${contentType}`);
      } else {
        // First entry only (default behavior)
        result = data.entries && data.entries.length > 0 ? data.entries[0] : null;
      }

      if (!result || (Array.isArray(result) && result.length === 0)) {
        console.info(`ℹ️ No entries found for "${contentType}" - using fallback content`);
        console.log(`💡 Create and publish an entry in Contentstack to see dynamic content`);
        return null;
      }

      // Enable live preview data updates if available
      if (result && contentstackConfig.livePreview.enable) {
        console.log('👁️ Live Preview is enabled for:', contentType);
        console.log('📝 Entry data will be updated in real-time when edited');
        
        // Process data with Live Preview Utils to add edit tags metadata ($)
        try {
          const liveData = ContentstackLivePreview.setLiveEditingDataForEntry(result, contentType);
          console.log('✅ Edit tags metadata added to entry data');
          return liveData;
        } catch (liveError) {
          console.warn('⚠️ Could not add edit tags metadata (non-critical):', liveError);
          return result;
        }
      }

      return result;
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      
      // Don't log scary errors for expected 422 responses
      if (!errorMessage.includes('HTTP 422')) {
        console.error(`❌ Error fetching ${contentType}:`, errorMessage);
        console.error('Full error:', err);
      }
      
      return null; // Return null to use fallback content
    }
  };

  const value: ContentstackContextType = {
    stack,
    fetchContent,
    isConnected,
    error
  };

  return (
    <ContentstackContext.Provider value={value}>
      {children}
    </ContentstackContext.Provider>
  );
};

export const useContentstack = () => {
  const context = useContext(ContentstackContext);
  if (!context) {
    throw new Error('useContentstack must be used within ContentstackProvider');
  }
  return context;
};

export default ContentstackContext;

