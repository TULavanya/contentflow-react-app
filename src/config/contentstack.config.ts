/**
 * Contentstack Configuration
 * 
 * IMPORTANT: Add your Contentstack credentials here
 * You can also use environment variables by creating a .env file:
 * 
 * VITE_CONTENTSTACK_API_KEY=bltc8715766359fd200
 * VITE_CONTENTSTACK_DELIVERY_TOKEN=cs8bc0fd9b19dee044b3c7c2c7
 * VITE_CONTENTSTACK_PREVIEW_TOKEN=csd02a07e6dd335fcfd9527d72
 * VITE_CONTENTSTACK_ENVIRONMENT=development
 * VITE_CONTENTSTACK_REGION=us
 */

// Stack configuration for Live Preview
export const stackConfig = {
  apiKey: import.meta.env.VITE_CONTENTSTACK_API_KEY || 'bltc8715766359fd200',
  deliveryToken: import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN || 'cs8bc0fd9b19dee044b3c7c2c7',
  environment: import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT || 'development',
  region: (import.meta.env.VITE_CONTENTSTACK_REGION || 'us') as 'us' | 'eu' | 'azure-na' | 'azure-eu' | 'gcp-na',
  branch: import.meta.env.VITE_CONTENTSTACK_BRANCH || 'main'
};

export const contentstackConfig = {
  enabled: import.meta.env.VITE_CONTENTSTACK_ENABLED !== 'false', // Can be disabled
  apiKey: stackConfig.apiKey,
  deliveryToken: stackConfig.deliveryToken,
  environment: stackConfig.environment,
  region: stackConfig.region,
  branch: stackConfig.branch,
  host: import.meta.env.VITE_CONTENTSTACK_HOST || 'rest-preview.contentstack.com',
  // Enable live preview for editors (ENABLED by default!)
  livePreview: {
    enable: import.meta.env.VITE_CONTENTSTACK_LIVE_PREVIEW !== 'false', // Enabled by default
    preview_token: import.meta.env.VITE_CONTENTSTACK_PREVIEW_TOKEN || 'cs2fecf14e41118cc21e6edb57',
    host: import.meta.env.VITE_CONTENTSTACK_LIVE_PREVIEW_HOST || 'rest-preview.contentstack.com',
    ssr: false, // Set to true if using SSR
    mode: 'builder' // Set to 'builder' for Visual Builder, 'preview' for Live Preview only
  }
};

export default contentstackConfig;

