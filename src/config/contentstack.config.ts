/**
 * Contentstack Configuration
 * 
 * IMPORTANT: Add your Contentstack credentials here
 * You can also use environment variables by creating a .env file:
 * 
 * VITE_CONTENTSTACK_API_KEY=your_api_key
 * VITE_CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token
 * VITE_CONTENTSTACK_PREVIEW_TOKEN=your_preview_token
 * VITE_CONTENTSTACK_ENVIRONMENT=development
 * VITE_CONTENTSTACK_REGION=us
 */

export const stackConfig = {
  apiKey: import.meta.env.VITE_CONTENTSTACK_API_KEY || '',
  deliveryToken: import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN || '',
  environment: import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT || 'development',
  region: (import.meta.env.VITE_CONTENTSTACK_REGION || 'us') as 'us' | 'eu' | 'azure-na' | 'azure-eu' | 'gcp-na'
};

export const contentstackConfig = {
  enabled: import.meta.env.VITE_CONTENTSTACK_ENABLED !== 'false',
  apiKey: stackConfig.apiKey,
  deliveryToken: stackConfig.deliveryToken,
  environment: stackConfig.environment,
  region: stackConfig.region,
  previewToken: import.meta.env.VITE_CONTENTSTACK_PREVIEW_TOKEN || ''
};

export default contentstackConfig;

