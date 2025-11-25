import React from 'react';
import { getFeatureImage } from '../utils/imageAssets';
import ImageSync from './ImageSync';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string | { url: string; title?: string };
  image?: string;
  link?: string;
  linkText?: string;
  gradient?: string;
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  onClick?: () => void;
  children?: React.ReactNode;
}

/**
 * Enhanced Feature Card Component
 * 
 * Features:
 * - Automatic image selection based on title
 * - Fallback to Contentstack images
 * - Consistent styling across all pages
 * - Hover effects and animations
 * - Multiple size variants
 */
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  image,
  link,
  linkText = 'Learn more',
  gradient,
  size = 'medium',
  style = {},
  onClick,
  children
}) => {
  // Get the best image for this feature
  const getImageSrc = (): string => {
    // Priority order: explicit image, icon with URL, icon string, auto-generated
    if (image) return image;
    if (icon && typeof icon === 'object' && icon.url) return icon.url;
    if (icon && typeof icon === 'string' && icon.startsWith('http')) return icon;
    return getFeatureImage(title);
  };

  // Size configurations
  const sizeConfig = {
    small: {
      padding: '20px',
      iconSize: '50px',
      titleSize: '1.2em',
      descSize: '0.9em'
    },
    medium: {
      padding: '30px',
      iconSize: '70px',
      titleSize: '1.4em',
      descSize: '1em'
    },
    large: {
      padding: '40px',
      iconSize: '90px',
      titleSize: '1.6em',
      descSize: '1.1em'
    }
  };

  const config = sizeConfig[size];

  const cardStyle: React.CSSProperties = {
    background: gradient || 'white',
    borderRadius: '20px',
    padding: config.padding,
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    border: '1px solid #f0f0f0',
    textAlign: 'center',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: onClick || link ? 'pointer' : 'default',
    position: 'relative',
    overflow: 'hidden',
    ...style
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
    e.currentTarget.style.boxShadow = '0 20px 40px rgba(106, 27, 154, 0.15)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      window.open(link.startsWith('/') ? link : `/${link}`, '_self');
    }
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100px',
        height: '100px',
        background: 'linear-gradient(135deg, rgba(106, 27, 154, 0.05) 0%, rgba(142, 36, 170, 0.08) 100%)',
        borderRadius: '50%',
        transform: 'translate(50%, -50%)',
        zIndex: 0
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Feature Image/Icon */}
        <div style={{ 
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {(icon && typeof icon === 'string' && !icon.startsWith('http') && icon.length <= 3) ? (
            // Emoji icon
            <div style={{
              fontSize: config.iconSize,
              lineHeight: 1,
              background: 'linear-gradient(135deg, #f8f9fa 0%, #e8eaf6 100%)',
              borderRadius: '50%',
              width: config.iconSize,
              height: config.iconSize,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 5px 15px rgba(106, 27, 154, 0.1)'
            }}>
              {icon}
            </div>
          ) : (
            // Image icon
            <ImageSync
              src={getImageSrc()}
              alt={title}
              fallbackSrc={getFeatureImage(title)}
              style={{
                width: config.iconSize,
                height: config.iconSize,
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 8px 20px rgba(106, 27, 154, 0.15)',
                border: '3px solid white'
              }}
            />
          )}
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: config.titleSize,
          fontWeight: 'bold',
          marginBottom: '15px',
          color: '#333',
          lineHeight: 1.3
        }}>
          {title}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: config.descSize,
          color: '#666',
          lineHeight: 1.6,
          marginBottom: '20px'
        }}>
          {description}
        </p>

        {/* Children (for custom content) */}
        {children}

        {/* Link */}
        {(link || onClick) && (
          <div style={{
            marginTop: '20px',
            color: '#2563eb',
            fontWeight: 'bold',
            fontSize: '0.95em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            transition: 'color 0.3s ease'
          }}>
            {linkText}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;

// Specialized variants
export const FeatureCardSmall: React.FC<FeatureCardProps> = (props) => (
  <FeatureCard {...props} size="small" />
);

export const FeatureCardLarge: React.FC<FeatureCardProps> = (props) => (
  <FeatureCard {...props} size="large" />
);

// Grid wrapper for consistent layouts
export const FeatureGrid: React.FC<{
  children: React.ReactNode;
  columns?: number;
  gap?: string;
  style?: React.CSSProperties;
}> = ({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  columns = 3,
  gap = '30px',
  style = {}
}) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(${300}px, 1fr))`,
    gap,
    ...style
  }}>
    {children}
  </div>
);
