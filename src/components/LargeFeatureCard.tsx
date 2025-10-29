import React from 'react';
import { Link } from 'react-router-dom';
import ImageSync, { safeIconContent, safeTextContent } from './ImageSync';

interface LargeFeatureCardProps {
  title: string;
  description: string;
  icon?: string;
  featureImage?: {
    url: string;
    title?: string;
  };
  image?: string; // fallback
  link?: string;
  linkText?: string;
  category?: string;
  gradient?: string;
  style?: React.CSSProperties;
  imageHeight?: string;
}

/**
 * Large Feature Card Component - Displays prominent feature images instead of small icons
 * 
 * Features:
 * - Large 240px height images for better visibility
 * - Overlay with floating icon and category badge
 * - Hover animations and smooth transitions
 * - Supports Contentstack file objects
 * - Responsive design
 */
const LargeFeatureCard: React.FC<LargeFeatureCardProps> = ({
  title,
  description,
  icon,
  featureImage,
  image,
  link,
  linkText = 'Learn More →',
  category = 'Feature',
  gradient,
  style = {},
  imageHeight = '240px'
}) => {
  const cardStyle: React.CSSProperties = {
    background: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '1px solid #f0f0f0',
    cursor: link ? 'pointer' : 'default',
    ...style
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
    e.currentTarget.style.boxShadow = '0 25px 50px rgba(106, 27, 154, 0.2)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Large Feature Image */}
      <div style={{ 
        position: 'relative', 
        height: imageHeight, 
        overflow: 'hidden',
        background: gradient || 'linear-gradient(135deg, #f8f9fa 0%, #e8eaf6 100%)'
      }}>
        <ImageSync
          src={featureImage || image}
          alt={safeTextContent(title, 'Feature Image')}
          fallbackSrc="/images/logo.png"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        
        {/* Overlay with Icon (if provided) */}
        {icon && (
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8em',
            boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
            backdropFilter: 'blur(10px)',
            transition: 'transform 0.3s ease'
          }}>
            {safeIconContent(icon, '🚀')}
          </div>
        )}
        
        {/* Category Badge */}
        {category && (
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.8em',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            boxShadow: '0 4px 15px rgba(106, 27, 154, 0.3)'
          }}>
            {category}
          </div>
        )}
        
        {/* Gradient Overlay for Better Text Readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)',
          pointerEvents: 'none'
        }} />
      </div>

      {/* Content */}
      <div style={{ padding: '30px' }}>
        <h3 style={{
          fontSize: '1.5em',
          fontWeight: 'bold',
          marginBottom: '15px',
          color: '#333',
          lineHeight: 1.3
        }}>
          {safeTextContent(title, 'Feature Title')}
        </h3>
        
        <p style={{
          color: '#666',
          lineHeight: 1.6,
          marginBottom: '25px',
          fontSize: '1em'
        }}>
          {safeTextContent(description, 'Feature description')}
        </p>
        
        {/* Action Link */}
        {link && (
          <Link 
            to={link} 
            style={{
              color: '#6a1b9a',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontSize: '1em',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#8e24aa';
              const arrow = e.currentTarget.querySelector('span');
              if (arrow) (arrow as HTMLElement).style.transform = 'translateX(5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#6a1b9a';
              const arrow = e.currentTarget.querySelector('span');
              if (arrow) (arrow as HTMLElement).style.transform = 'translateX(0)';
            }}
          >
            {linkText} <span style={{ transition: 'transform 0.3s ease' }}>→</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default LargeFeatureCard;

// Grid component for consistent layouts
export const LargeFeatureGrid: React.FC<{
  children: React.ReactNode;
  columns?: number;
  gap?: string;
  style?: React.CSSProperties;
}> = ({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  columns = 3,
  gap = '40px',
  style = {}
}) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(350px, 1fr))`,
    gap,
    ...style
  }}>
    {children}
  </div>
);
