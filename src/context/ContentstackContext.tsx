import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import ContentstackLivePreview from '@contentstack/live-preview-utils';
import Contentstack from 'contentstack';
import contentstackConfig, { stackConfig } from '../config/contentstack.config';
import { getLivePreviewHostByRegion, getHostByRegion } from '../utils/utils';

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

// Initialize Live Preview Stack
const initializeLivePreviewStack = () => {
  // Environment Variables
  const {
    VITE_CONTENTSTACK_API_KEY,
    VITE_CONTENTSTACK_DELIVERY_TOKEN,
    VITE_CONTENTSTACK_ENVIRONMENT,
    VITE_CONTENTSTACK_REGION,
    VITE_CONTENTSTACK_PREVIEW_TOKEN
  } = import.meta.env;

  // Check if Contentstack is disabled
  if (!contentstackConfig.enabled) {
    console.log('Contentstack is DISABLED - using fallback content only');
    console.log('To enable: Set VITE_CONTENTSTACK_ENABLED=true in .env');
    return null;
  }

  console.log('Initializing Contentstack Stack for Live Preview...');
  console.log('API Key:', stackConfig.apiKey ? `${stackConfig.apiKey.substring(0, 10)}...` : 'MISSING');
  console.log('Delivery Token:', stackConfig.deliveryToken ? `${stackConfig.deliveryToken.substring(0, 10)}...` : 'MISSING');
  console.log('Preview Token:', contentstackConfig.livePreview.preview_token ? `${contentstackConfig.livePreview.preview_token.substring(0, 10)}...` : 'MISSING');
  console.log('Environment:', stackConfig.environment);
  console.log('Region:', stackConfig.region);
  console.log('Branch:', stackConfig.branch);
  console.log('API Host:', contentstackConfig.host);
  
  try {
    // Map region to uppercase format for utility functions
    const region = (VITE_CONTENTSTACK_REGION || stackConfig.region).toUpperCase().replace(/-/g, '_');
    
    // Initialize Contentstack Stack with Live Preview configuration
    const Stack = Contentstack.Stack({
      api_key: VITE_CONTENTSTACK_API_KEY as string,
      delivery_token: VITE_CONTENTSTACK_DELIVERY_TOKEN as string,
      environment: VITE_CONTENTSTACK_ENVIRONMENT as string,
      region: stackConfig.region as any,
      live_preview: {
        enable: true,
        host: getLivePreviewHostByRegion(region),
        preview_token: VITE_CONTENTSTACK_PREVIEW_TOKEN as string
      }
    });

    console.log('Contentstack Stack initialized successfully!');
    console.log('Live Preview configured in Stack');
    console.log('Live Preview Host:', getLivePreviewHostByRegion(region));
    
    return Stack;
  } catch (error) {
    console.error('Failed to initialize Contentstack Stack:', error);
    return null;
  }
};

export const ContentstackProvider: React.FC<ContentstackProviderProps> = ({ children }) => {
  // Initialize Live Preview Stack synchronously on first render
  const [stack] = useState<any>(() => initializeLivePreviewStack());
  const [isConnected, setIsConnected] = useState(contentstackConfig.enabled);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      console.log('=== ContentstackProvider useEffect Running ===');
      console.log('Live Preview Stack instance:', stack ? 'Initialized' : 'NULL');
      console.log('Live Preview enabled:', contentstackConfig.livePreview.enable);

      // Initialize Live Preview if enabled
      if (contentstackConfig.livePreview.enable && stack) {
        // Get region for host configuration
        const region = (import.meta.env.VITE_CONTENTSTACK_REGION || stackConfig.region).toUpperCase().replace(/-/g, '_');
        
        console.log('Initializing Live Preview Utils...');
        console.log('Configuration:');
        console.log('  - API Key:', stackConfig.apiKey ? `${stackConfig.apiKey.substring(0, 10)}...` : 'MISSING');
        console.log('  - Environment:', stackConfig.environment);
        console.log('  - Branch:', stackConfig.branch);
        console.log('  - Region:', region);
        console.log('  - Preview Token:', contentstackConfig.livePreview.preview_token ? `${contentstackConfig.livePreview.preview_token.substring(0, 10)}...` : 'MISSING');
        console.log('  - App Host:', getHostByRegion(region));
        
        try {
          ContentstackLivePreview.init({
            enable: true,
            ssr: false,
            stackSdk: stack,
            editButton: { enable: true },
            stackDetails: {
              apiKey: stackConfig.apiKey,
              environment: stackConfig.environment,
              branch: stackConfig.branch || "main"
            },
            clientUrlParams: {
              protocol: "https",
              host: getHostByRegion(region),
              port: 443,
            }
          });
          console.log('Live Preview initialized successfully!');
          console.log('Edit button enabled for Visual Builder!');
          console.log('Editors can now see changes in real-time!');
        } catch (livePreviewError) {
          console.warn('Live Preview initialization failed (non-critical):', livePreviewError);
          console.log('Website will work normally without Live Preview');
          console.error('Full error:', livePreviewError);
        }
      } else {
        console.log('Live Preview is disabled or Stack not initialized');
      }
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      console.error('Failed to initialize Contentstack:', errorMessage);
      setError(errorMessage);
      setIsConnected(false);
    }
  }, [stack]);

  // Fetch content using Delivery SDK
  const fetchContent = async (contentType: string, options: any = {}) => {
    // Return null if Contentstack is disabled
    if (!contentstackConfig.enabled) {
      console.log(`Contentstack disabled - using fallback content for ${contentType}`);
      return null;
    }

    if (!stack) {
      console.error('Stack is not initialized - this should not happen!');
      return null;
    }

    try {
      console.log(`Fetching ${contentType} using Delivery SDK...`);
      
      let result;
      
      if (options.entryUid) {
        // Fetch specific entry by UID
        const entry = await stack.ContentType(contentType)
          .Entry(options.entryUid)
          .toJSON()
          .fetch();
        result = entry.entry || entry;
        console.log(`Successfully fetched entry:`, result);
      } else {
        // Create Query for multiple entries
        const Query = stack.ContentType(contentType).Query();
        
        // Add locale if specified
        if (options.locale) {
          Query.locale(options.locale);
        }
        
        // Include references
        if (!options.skipReferences) {
          const referencesToInclude = options.include || ['testimonials', 'featured_case_studies', 'author', 'featured_blog_posts'];
          referencesToInclude.forEach((ref: string) => {
            Query.includeReference(ref);
          });
        }
        
        // Add query filters if any
        if (options.query) {
          Object.entries(options.query).forEach(([key, value]) => {
            Query.where(key, value as any);
          });
        }
        
        // Fetch entries
        const response = await Query.toJSON().find();
        
        if (options.allEntries) {
          // Return all entries
          result = response[0] || [];
          console.log(`Retrieved ${result.length} entries for ${contentType}`);
        } else {
          // Return first entry (default behavior)
          result = response[0] && response[0].length > 0 ? response[0][0] : null;
          console.log(`Successfully fetched ${contentType}:`, result);
        }
      }

      if (!result || (Array.isArray(result) && result.length === 0)) {
        console.info(`No entries found for "${contentType}" - using fallback content`);
        console.log(`Create and publish an entry in Contentstack to see dynamic content`);
        return null;
      }

      // Enable live preview data updates if available
      if (result && contentstackConfig.livePreview.enable) {
        console.log('Live Preview is enabled for:', contentType);
        console.log('Entry data will be updated in real-time when edited');
        console.log('Edit tags metadata automatically handled by Delivery SDK');
        // Edit tags ($) are automatically added by the SDK when live_preview is configured
      }

      return result;
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      
      // Don't log scary errors for expected 422 responses
      if (!errorMessage.includes('HTTP 422')) {
        console.error(`Error fetching ${contentType}:`, errorMessage);
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

export const onEntryChange = ContentstackLivePreview.onEntryChange;

export default ContentstackContext;

