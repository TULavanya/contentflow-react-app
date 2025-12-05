import React, { createContext, useContext, ReactNode, useState } from 'react';
import Contentstack from 'contentstack';
import contentstackConfig, { stackConfig } from '../config/contentstack.config';

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

// Initialize Contentstack Stack
const initializeStack = () => {
  // Check if Contentstack is disabled
  if (!contentstackConfig.enabled) {
    console.log('Contentstack is DISABLED - using fallback content only');
    console.log('To enable: Set VITE_CONTENTSTACK_ENABLED=true in .env');
    return null;
  }

  console.log('Initializing Contentstack Delivery SDK...');
  console.log('API Key:', stackConfig.apiKey ? `${stackConfig.apiKey.substring(0, 10)}...` : 'MISSING');
  console.log('Delivery Token:', stackConfig.deliveryToken ? `${stackConfig.deliveryToken.substring(0, 10)}...` : 'MISSING');
  console.log('Environment:', stackConfig.environment);
  console.log('Region:', stackConfig.region);
  
  try {
    // Initialize Contentstack Stack
    const Stack = Contentstack.Stack({
      api_key: stackConfig.apiKey,
      delivery_token: stackConfig.deliveryToken,
      environment: stackConfig.environment,
      region: stackConfig.region as any
    });

    console.log('Contentstack Delivery SDK initialized successfully!');
    
    return Stack;
  } catch (error) {
    console.error('Failed to initialize Contentstack Stack:', error);
    return null;
  }
};

export const ContentstackProvider: React.FC<ContentstackProviderProps> = ({ children }) => {
  // Initialize Stack synchronously on first render
  const [stack] = useState<any>(() => initializeStack());
  const [isConnected, setIsConnected] = useState(contentstackConfig.enabled);
  const [error, setError] = useState<string | null>(null);

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

export default ContentstackContext;

