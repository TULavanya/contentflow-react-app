import React, { useState, useEffect } from 'react';
import { getImageUrl } from './ImageSync';

interface BackgroundImageProps {
  src?: string | { url?: string; title?: string; filename?: string } | null;
  fallbackSrc?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  overlay?: {
    color?: string;
    opacity?: number;
    gradient?: string;
  };
  loading?: boolean;
}

/**
 * BackgroundImage Component - Handles background images with Contentstack support
 * 
 * Features:
 * - Works with Contentstack file objects and direct URLs
 * - Provides fallback backgrounds
 * - Optional overlay effects
 * - Loading states
 * - Responsive background properties
 */
const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  fallbackSrc,
  children,
  className = '',
  style = {},
  overlay,
  loading = false
}) => {
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hasError, setHasError] = useState(false);

  // Default fallback background
  const defaultFallback = 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)';

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);

    const resolvedSrc = getImageUrl(src, fallbackSrc);
    
    if (resolvedSrc) {
      // Preload the image to check if it works
      const img = new Image();
      img.onload = () => {
        setBackgroundImage(`url("${resolvedSrc}")`);
        setIsLoading(false);
        setHasError(false);
      };
      img.onerror = () => {
        // Try fallback
        if (fallbackSrc && resolvedSrc !== fallbackSrc) {
          const fallbackImg = new Image();
          fallbackImg.onload = () => {
            setBackgroundImage(`url("${fallbackSrc}")`);
            setIsLoading(false);
            setHasError(false);
          };
          fallbackImg.onerror = () => {
            setBackgroundImage(defaultFallback);
            setIsLoading(false);
            setHasError(true);
          };
          fallbackImg.src = fallbackSrc;
        } else {
          setBackgroundImage(defaultFallback);
          setIsLoading(false);
          setHasError(true);
        }
      };
      img.src = resolvedSrc;
    } else {
      // No source, use default fallback
      setBackgroundImage(defaultFallback);
      setIsLoading(false);
    }
  }, [src, fallbackSrc]);

  const backgroundStyle: React.CSSProperties = {
    ...style,
    backgroundImage: isLoading ? defaultFallback : backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: style.backgroundAttachment || 'scroll',
    position: 'relative',
    ...style
  };

  // Create overlay style if provided
  const overlayStyle: React.CSSProperties = overlay ? {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: overlay.gradient || `rgba(${overlay.color || '0,0,0'}, ${overlay.opacity || 0.5})`,
    zIndex: 1
  } : {};

  const contentStyle: React.CSSProperties = overlay ? {
    position: 'relative',
    zIndex: 2
  } : {};

  return (
    <div className={className} style={backgroundStyle}>
      {overlay && <div style={overlayStyle} />}
      
      {(isLoading || loading) && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(106, 27, 154, 0.1)',
          zIndex: 10
        }}>
          <div style={{
            padding: '20px',
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#2563eb',
            fontWeight: 'bold'
          }}>
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
            Loading background...
          </div>
        </div>
      )}
      
      <div style={contentStyle}>
        {children}
      </div>
      
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

export default BackgroundImage;

// Utility hook for background image URLs
export const useBackgroundImage = (src: string | { url?: string } | null | undefined, fallback?: string) => {
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const resolvedSrc = getImageUrl(src, fallback);
    
    if (resolvedSrc) {
      const img = new Image();
      img.onload = () => {
        setBackgroundImage(`url("${resolvedSrc}")`);
        setIsLoading(false);
        setHasError(false);
      };
      img.onerror = () => {
        setBackgroundImage('linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)');
        setIsLoading(false);
        setHasError(true);
      };
      img.src = resolvedSrc;
    } else {
      setBackgroundImage('linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)');
      setIsLoading(false);
    }
  }, [src, fallback]);

  return { backgroundImage, isLoading, hasError };
};
