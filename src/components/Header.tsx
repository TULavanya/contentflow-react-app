import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContentstack } from '../context/ContentstackContext';
import { safeTextContent } from './ImageSync';

const Header: React.FC = () => {
  const { fetchContent } = useContentstack();
  const [headerData, setHeaderData] = useState<any>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await fetchContent('header');
        console.log(' Header data from Contentstack:', data);
        if (data && data.length > 0) {
          setHeaderData(data[0]);
        }
      } catch (error) {
        console.error('Error loading header content:', error);
      }
    };
    loadContent();
  }, [fetchContent]);

    return (
      <>
      <style>
        {`
        @keyframes headerGlow {
          0%, 100% { 
            box-shadow: 0 8px 32px rgba(75, 46, 131, 0.3), 0 4px 16px rgba(106, 27, 154, 0.2), 0 2px 8px rgba(75, 46, 131, 0.15);
            filter: hue-rotate(0deg);
          }
          25% { 
            box-shadow: 0 10px 40px rgba(106, 27, 154, 0.35), 0 6px 20px rgba(75, 46, 131, 0.25), 0 3px 10px rgba(106, 27, 154, 0.2);
            filter: hue-rotate(5deg);
          }
          50% { 
            box-shadow: 0 12px 48px rgba(106, 27, 154, 0.4), 0 8px 24px rgba(75, 46, 131, 0.3), 0 4px 12px rgba(106, 27, 154, 0.25);
            filter: hue-rotate(10deg);
          }
          75% { 
            box-shadow: 0 10px 40px rgba(75, 46, 131, 0.35), 0 6px 20px rgba(106, 27, 154, 0.25), 0 3px 10px rgba(75, 46, 131, 0.2);
            filter: hue-rotate(5deg);
          }
        }
          
          @keyframes navHover {
            0% { transform: translateY(0); }
            100% { transform: translateY(-1px) scale(1.02); }
          }
        `}
      </style>
        {/* Top Utility Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #6a1b9a 0%, #8e24aa 100%)',
        color: 'white',
        padding: '8px 0',
        fontSize: '0.85em',
        boxShadow: '0 2px 10px rgba(106, 27, 154, 0.2)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          height: '30px',
          padding: '0 12px 0 8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ opacity: 0.95 }}>
            Notice something different? <a href="#" style={{ color: '#ffffff', textDecoration: 'underline', fontWeight: 'bold' }}>We're showing off our exciting new brand</a>
            </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.9, transition: 'opacity 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}>Docs</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.9, transition: 'opacity 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}>Login</a>
            </div>
          </div>
        </div>

        {/* Main Navigation Header */}
      <header style={{
        background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
        borderBottom: '4px solid transparent',
        borderImage: 'linear-gradient(90deg, #6a1b9a, #8e24aa) 1',
        boxShadow: '0 8px 32px rgba(75, 46, 131, 0.3), 0 4px 16px rgba(106, 27, 154, 0.2), 0 2px 8px rgba(75, 46, 131, 0.15)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(15px) saturate(1.8)',
        animation: 'headerGlow 6s ease-in-out infinite'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 8px 0 8px',
          height: '70px'
        }}>
          {/* Enhanced Logo with Fallback */}
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            textDecoration: 'none',
            fontSize: '1.3em',
            fontWeight: 'bold',
            color: '#333',
            flexShrink: 0
          }}>
            <div style={{
              width: '35px',
              height: '35px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #8e24aa 0%, #ab47bc 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.2em',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(106, 27, 154, 0.3)',
              transition: 'all 0.3s ease'
            }}>
              C
            </div>
            <img 
              src="/logo.png" 
              alt={safeTextContent(headerData?.logo?.logo_alt_text, 'ContentFlow Logo')} 
              style={{
                width: '32px',
                height: '32px',
                objectFit: 'contain',
                position: 'absolute',
                opacity: 0
              }}
              onLoad={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.opacity = '1';
                target.style.position = 'static';
                const fallback = target.previousElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'none';
              }}
              onError={() => {
                console.log('Logo image failed to load, using fallback');
              }}
            />
          <span style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 30%, #ffffff 60%, #e8eaf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            filter: 'drop-shadow(0 1px 3px rgba(255,255,255,0.8))'
          }}>
            {safeTextContent(headerData?.logo?.company_name, 'ContentFlow')}
          </span>
            </Link>

          {/* Navigation */}
          <nav style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            marginLeft: '16px',
            marginRight: '24px'
          }}>
            <ul style={{
              display: 'flex',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              gap: '20px',
              alignItems: 'center'
            }}>
            <li><Link to="/platform" style={{ textDecoration: 'none', color: 'white', fontWeight: '700', textShadow: '0 1px 3px rgba(0,0,0,0.3)', padding: '8px 12px', borderRadius: '8px', transition: 'all 0.3s ease', fontSize: '0.95em' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.opacity = '0.8'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = '1'; }}>Platform</Link></li>
            <li><Link to="/company" style={{ textDecoration: 'none', color: 'white', fontWeight: '700', textShadow: '0 1px 3px rgba(0,0,0,0.3)', padding: '8px 12px', borderRadius: '8px', transition: 'all 0.3s ease', fontSize: '0.95em' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.opacity = '0.8'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = '1'; }}>Company</Link></li>
            <li><Link to="/blogs" style={{ textDecoration: 'none', color: 'white', fontWeight: '700', textShadow: '0 1px 3px rgba(0,0,0,0.3)', padding: '8px 12px', borderRadius: '8px', transition: 'all 0.3s ease', fontSize: '0.95em' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.opacity = '0.8'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = '1'; }}>Blogs</Link></li>
            <li><Link to="/academy" style={{ textDecoration: 'none', color: 'white', fontWeight: '700', textShadow: '0 1px 3px rgba(0,0,0,0.3)', padding: '8px 12px', borderRadius: '8px', transition: 'all 0.3s ease', fontSize: '0.95em' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.opacity = '0.8'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = '1'; }}>Academy</Link></li>
            <li><Link to="/plans" style={{ textDecoration: 'none', color: 'white', fontWeight: '700', textShadow: '0 1px 3px rgba(0,0,0,0.3)', padding: '8px 12px', borderRadius: '8px', transition: 'all 0.3s ease', fontSize: '0.95em' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.opacity = '0.8'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = '1'; }}>Plans</Link></li>
            <li><Link to="/partners" style={{ textDecoration: 'none', color: 'white', fontWeight: '700', textShadow: '0 1px 3px rgba(0,0,0,0.3)', padding: '8px 12px', borderRadius: '8px', transition: 'all 0.3s ease', fontSize: '0.95em' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.opacity = '0.8'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = '1'; }}>Partners</Link></li>
            <li><Link to="/careers" style={{ textDecoration: 'none', color: 'white', fontWeight: '700', textShadow: '0 1px 3px rgba(0,0,0,0.3)', padding: '8px 12px', borderRadius: '8px', transition: 'all 0.3s ease', fontSize: '0.95em' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.opacity = '0.8'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = '1'; }}>Careers</Link></li>
            <li><Link to="/contact" style={{ textDecoration: 'none', color: 'white', fontWeight: '700', textShadow: '0 1px 3px rgba(0,0,0,0.3)', padding: '8px 12px', borderRadius: '8px', transition: 'all 0.3s ease', fontSize: '0.95em' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.opacity = '0.8'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = '1'; }}>Contact</Link></li>
              </ul>
            </nav>

          {/* Header Actions */}
          <div style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
            flexShrink: 0
          }}>
          <Link to="/talk" style={{
            background: 'rgba(255, 255, 255, 0.9)',
            color: '#6a1b9a',
            padding: '10px 20px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: 'bold',
            border: 'none',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            transition: 'all 0.4s ease'
          }} 
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.textShadow = '0 1px 3px rgba(0,0,0,0.3)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
            e.currentTarget.style.color = '#6a1b9a';
            e.currentTarget.style.textShadow = '0 1px 2px rgba(0,0,0,0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >Talk to Sales</Link>
          <Link to="/start" style={{
            background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: 'bold',
            border: 'none',
            textShadow: '0 1px 3px rgba(0,0,0,0.3)',
            transition: 'all 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
            e.currentTarget.style.color = '#6a1b9a';
            e.currentTarget.style.textShadow = '0 1px 2px rgba(0,0,0,0.1)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.textShadow = '0 1px 3px rgba(0,0,0,0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >Start Free</Link>
          </div>
        </div>
      </header>
    </>
    );
};

export default Header;


