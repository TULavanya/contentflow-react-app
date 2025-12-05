import React, { useState, useEffect } from 'react';

interface ContentstackFile {
  uid?: string;
  _version?: number;
  title?: string;
  parent_uid?: string;
  created_by?: string;
  updated_by?: string;
  created_at?: string;
  updated_at?: string;
  content_type?: string;
  file_size?: number;
  filename?: string;
  ACL?: any;
  is_dir?: boolean;
  tags?: string[];
  publish_details?: any;
  url: string;
}

interface ImageSyncProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src?: string | { url?: string; title?: string; filename?: string } | ContentstackFile | null;
  fallbackSrc?: string;
  alt: string;
  onLoad?: () => void;
  onError?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * ImageSync Component - Handles Contentstack images, external URLs, and fallbacks
 * 
 * Features:
 * - Automatically handles Contentstack file objects vs direct URLs
 * - Provides fallback images for broken links
 * - Loading states and error handling
 * - Works with both local and external images
 */
const ImageSync: React.FC<ImageSyncProps> = ({
  src,
  fallbackSrc,
  alt,
  onLoad,
  onError,
  className = '',
  style = {},
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  // Default fallback image using local logo
  const defaultFallback = '/images/logo.png';

  useEffect(() => {
    setIsLoading(true);

    // Handle different src types
    let resolvedSrc = '';

    if (!src) {
      // No src provided, use fallback immediately
      resolvedSrc = fallbackSrc || defaultFallback;
    } else if (typeof src === 'string' && src.trim() !== '') {
      const trimmedSrc = src.trim();
      
      // Check if it's a Contentstack asset UID (starts with "blt")
      if (trimmedSrc.startsWith('blt') && !trimmedSrc.includes('/') && !trimmedSrc.includes('http')) {
        // It's an asset UID, construct the full Contentstack asset URL
        const apiKey = import.meta.env.VITE_CONTENTSTACK_API_KEY || 'bltc8715766359fd200';
        resolvedSrc = `https://assets.contentstack.io/v3/assets/${apiKey}/${trimmedSrc}`;
      } else {
        // Direct URL string (non-empty)
        resolvedSrc = trimmedSrc;
      }
    } else if (typeof src === 'object' && src?.url && typeof src.url === 'string' && src.url.trim() !== '') {
      // Contentstack file object with valid URL
      resolvedSrc = src.url.trim();
    } else {
      // Unknown format or empty string, use fallback
      resolvedSrc = fallbackSrc || defaultFallback;
    }

    // Ensure we have a valid URL
    if (!resolvedSrc || resolvedSrc.trim() === '') {
      resolvedSrc = defaultFallback;
    }

    console.log('️ ImageSync setting src:', {
      originalSrc: src,
      resolvedSrc,
      fallbackSrc,
      defaultFallback
    });

    setImageSrc(resolvedSrc);
  }, [src, fallbackSrc]);

  const handleLoad = () => {
    setIsLoading(false);
    console.log(' ImageSync - Image loaded successfully:', imageSrc);
    onLoad?.();
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(false);
    
    console.error(' ImageSync - Image failed to load:', {
      attemptedSrc: imageSrc,
      fallbackSrc,
      defaultFallback,
      error: e,
      imgElement: e.currentTarget
    });
    
    // Try fallback if we haven't already
    if (imageSrc !== fallbackSrc && fallbackSrc) {
      console.warn(' Trying fallbackSrc:', fallbackSrc);
      setImageSrc(fallbackSrc);
      return;
    }
    
    // Use default fallback
    if (imageSrc !== defaultFallback) {
      console.warn(' Trying defaultFallback:', defaultFallback);
      setImageSrc(defaultFallback);
      return;
    }
    
    console.error(' All image loading attempts failed!');
    onError?.();
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f5f5f5',
            borderRadius: style.borderRadius || '0',
            ...style
          }}
        >
          <div
            style={{
              width: '20px',
              height: '20px',
              border: '2px solid #2563eb',
              borderTop: '2px solid transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}
          />
        </div>
      )}
      
      {imageSrc && (
        <img
          {...props}
          src={imageSrc}
          alt={alt}
          className={className}
          style={{
            ...style,
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.3s ease'
          }}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      
      {/* Add CSS for loading spinner */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ImageSync;

// Export utility functions for manual image URL handling
export const getImageUrl = (src: string | { url?: string } | ContentstackFile | null | undefined, fallback?: string): string => {
  if (!src) return fallback || '';
  
  if (typeof src === 'string') {
    const trimmedSrc = src.trim();
    // Check if it's a Contentstack asset UID (starts with "blt")
    if (trimmedSrc.startsWith('blt') && !trimmedSrc.includes('/') && !trimmedSrc.includes('http')) {
      const apiKey = import.meta.env.VITE_CONTENTSTACK_API_KEY || 'bltc8715766359fd200';
      return `https://assets.contentstack.io/v3/assets/${apiKey}/${trimmedSrc}`;
    }
    return trimmedSrc;
  }
  
  if (typeof src === 'object' && src.url) return src.url;
  return fallback || '';
};

export const isContentstackImage = (src: any): src is { url: string; title?: string; filename?: string } => {
  return typeof src === 'object' && src !== null && typeof src.url === 'string';
};

// Safe utility to extract text content from any potential object
export const safeTextContent = (content: any, fallback: string = ''): string => {
  // Handle null/undefined
  if (content === null || content === undefined) return fallback;
  
  // Handle primitives
  if (typeof content === 'string') return content.trim();
  if (typeof content === 'number') return content.toString();
  if (typeof content === 'boolean') return content.toString();
  
  // Handle arrays - join them or take first element
  if (Array.isArray(content)) {
    if (content.length === 0) return fallback;
    if (content.length === 1) return safeTextContent(content[0], fallback);
    // For multiple elements, recursively process each and join
    const processedItems = content.map(item => safeTextContent(item, '')).filter(Boolean);
    return processedItems.length > 0 ? processedItems.join(', ') : fallback;
  }
  
  // If it's an object, try to extract meaningful text
  if (typeof content === 'object') {
    // Try common text properties in order of priority
    if (content.title && typeof content.title === 'string') return content.title.trim();
    if (content.text && typeof content.text === 'string') return content.text.trim();
    if (content.content && typeof content.content === 'string') return content.content.trim();
    if (content.name && typeof content.name === 'string') return content.name.trim();
    if (content.label && typeof content.label === 'string') return content.label.trim();
    if (content.value && typeof content.value === 'string') return content.value.trim();
    // If it's a Contentstack file, return filename or fallback
    if (content.filename && typeof content.filename === 'string') return content.filename.trim();
    // Try to extract from nested objects
    if (content.title && typeof content.title === 'object') return safeTextContent(content.title, fallback);
    if (content.text && typeof content.text === 'object') return safeTextContent(content.text, fallback);
    // Return fallback for any other objects to prevent rendering errors
    return fallback;
  }
  
  return fallback;
};

// Safe utility to extract icon content (emoji or icon URL)
export const safeIconContent = (icon: any, fallback: string = ''): string => {
  if (icon === null || icon === undefined) return fallback;
  if (typeof icon === 'string') return icon.trim();
  
  // Handle arrays - take first element
  if (Array.isArray(icon) && icon.length > 0) {
    return safeIconContent(icon[0], fallback);
  }
  
  // If it's a Contentstack icon object, try to extract icon or URL
  if (typeof icon === 'object') {
    if (icon.icon && typeof icon.icon === 'string') return icon.icon.trim();
    if (icon.emoji && typeof icon.emoji === 'string') return icon.emoji.trim();
    if (icon.url && typeof icon.url === 'string') return icon.url.trim();
    if (icon.value && typeof icon.value === 'string') return icon.value.trim();
  }
  
  return fallback;
};
