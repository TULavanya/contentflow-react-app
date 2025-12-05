/**
 * Contentstack Configuration
 * 
 * IMPORTANT: Add your Contentstack credentials here
 * You can also use environment variables by creating a .env file:
 * 
 * VITE_CONTENTSTACK_API_KEY=bltb980f01f88e6f47a
 * VITE_CONTENTSTACK_DELIVERY_TOKEN=cs2ebc2ab8482ab9d4ece88123
 * VITE_CONTENTSTACK_ENVIRONMENT=development
 * VITE_CONTENTSTACK_REGION=us
 */

export const stackConfig = {
  apiKey: import.meta.env.VITE_CONTENTSTACK_API_KEY || 'bltb980f01f88e6f47a',
  deliveryToken: import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN || 'cs2ebc2ab8482ab9d4ece88123',
  environment: import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT || 'development',
  region: (import.meta.env.VITE_CONTENTSTACK_REGION || 'us') as 'us' | 'eu' | 'azure-na' | 'azure-eu' | 'gcp-na'
};

export const contentstackConfig = {
  enabled: import.meta.env.VITE_CONTENTSTACK_ENABLED !== 'false',
  apiKey: stackConfig.apiKey,
  deliveryToken: stackConfig.deliveryToken,
  environment: stackConfig.environment,
  region: stackConfig.region
};

export default contentstackConfig;

