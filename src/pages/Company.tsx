import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useContentstack } from '../context/ContentstackContext';
import SEOHead from '../components/SEOHead';
import LoadingSpinner from '../components/LoadingSpinner';
import ImageSync, { safeTextContent, safeIconContent } from '../components/ImageSync';

// Counter animation hook
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useCounter = (end: number, duration: number = 2000, suffix: string = '') => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const timer = setInterval(() => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress === 1) {
              clearInterval(timer);
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return { count, ref, suffix };
};

const Company: React.FC = () => {
  const { fetchContent } = useContentstack();
  const [companyData, setCompanyData] = useState<any>(null);
  const [selectedLeaderIndex, setSelectedLeaderIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Use only Contentstack data - no fallbacks
  const leaders = companyData?.leadership_team?.team_members || [];
  
  const goToPrevious = () => {
    setSelectedLeaderIndex((prev) => 
      prev === null ? null : (prev - 1 + leaders.length) % leaders.length
    );
  };
  
  const goToNext = () => {
    setSelectedLeaderIndex((prev) => 
      prev === null ? null : (prev + 1) % leaders.length
    );
  };
  
  const closeModal = () => setSelectedLeaderIndex(null);

  // Keyboard navigation
  useEffect(() => {
    if (selectedLeaderIndex === null) return;
    
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedLeaderIndex]);

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      try {
        const data = await fetchContent('company_page');
        console.log('🏢 Company page data:', data);
        setCompanyData(data);
      } catch (error) {
        console.error('Error loading company content:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadContent();
  }, [fetchContent]);

  // Fallback data for milestones
  const milestones = [
    { year: '2018', event: 'ContentFlow Founded', description: 'Started with a vision to revolutionize digital experiences', icon: '' },
    { year: '2019', event: 'Series A Funding', description: '$15M raised to accelerate product development', icon: '' },
    { year: '2020', event: '100 Customers', description: 'Reached our first major customer milestone', icon: '' },
    { year: '2021', event: 'Series B Funding', description: '$50M raised, valued at $250M', icon: '' },
    { year: '2022', event: 'Global Expansion', description: 'Opened offices in London, Berlin, and Singapore', icon: '' },
    { year: '2023', event: 'AI Launch', description: 'Introduced AI-powered content intelligence', icon: '' },
    { year: '2024', event: 'Series C Funding', description: '$100M raised, valued at $1B (Unicorn status)', icon: '' },
    { year: '2025', event: 'AI Agents', description: 'Launched revolutionary AI agent platform', icon: '' }
  ];

  const awards = [
    { title: 'Best DXP Platform', org: 'Gartner', year: '2024', gradient: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)' },
    { title: 'Leader in Headless CMS', org: 'Forrester', year: '2024', gradient: 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)' },
    { title: 'Top 50 Startups', org: 'Forbes', year: '2023', gradient: 'linear-gradient(135deg, #8e24aa 0%, #ab47bc 100%)' },
    { title: 'Best Workplace', org: 'Glassdoor', year: '2024', gradient: 'linear-gradient(135deg, #ab47bc 0%, #ba68c8 100%)' }
  ];

  // Show loading spinner while fetching data
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="company-page">
      <SEOHead seoData={companyData?.seo_metadata} />
      
      {/* Leadership Carousel Modal */}
      {selectedLeaderIndex !== null && leaders[selectedLeaderIndex] && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            animation: 'fadeIn 0.3s ease-out'
          }}
          onClick={closeModal}
        >
            <div
            style={{
              background: 'white',
              borderRadius: '25px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
              animation: 'slideUp 0.4s ease-out',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                border: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                color: 'white',
                fontSize: '1.5em',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 1
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(90deg) scale(1.1)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(106, 27, 154, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              ×
            </button>

            {/* Modal Content */}
            <div style={{ padding: '50px 40px 40px' }}>
              {/* Profile Section */}
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                
                {/* Navigation Arrows - Top Position */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '20px',
                  marginBottom: '30px'
                }}>
                  {/* Left Arrow */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPrevious();
                    }}
                    style={{
                      background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                      border: 'none',
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      color: 'white',
                      fontSize: '1.8em',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 5px 20px rgba(106, 27, 154, 0.4)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(106, 27, 154, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 5px 20px rgba(106, 27, 154, 0.4)';
                    }}
                  >
                    ‹
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNext();
                    }}
                    style={{
                      background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                      border: 'none',
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      color: 'white',
                      fontSize: '1.8em',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 5px 20px rgba(106, 27, 154, 0.4)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(106, 27, 154, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 5px 20px rgba(106, 27, 154, 0.4)';
                    }}
                  >
                    ›
                  </button>
                </div>

                <div style={{ 
                  display: 'inline-block',
                  position: 'relative',
                  marginBottom: '20px'
                }}>
                  <img 
                    src={leaders[selectedLeaderIndex].photo?.url || leaders[selectedLeaderIndex].photo || leaders[selectedLeaderIndex].image}
                    alt={leaders[selectedLeaderIndex].name}
                    style={{
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%',
                      border: '5px solid #6a1b9a',
                      objectFit: 'cover',
                      boxShadow: '0 10px 30px rgba(106, 27, 154, 0.3)'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '5px',
                    right: '5px',
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                    borderRadius: '50%',
                    border: '3px solid white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2em'
                  }}>
                    ✓
                  </div>
                </div>

                <h2 style={{
                  fontSize: '2em',
                  marginBottom: '10px',
                  background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {leaders[selectedLeaderIndex].name}
                </h2>

                <p style={{
                  fontSize: '1.2em',
                  color: '#6a1b9a',
                  fontWeight: 'bold',
                  marginBottom: '20px'
                }}>
                  {leaders[selectedLeaderIndex].role}
                </p>

                {/* LinkedIn Button */}
                {leaders[selectedLeaderIndex].linkedin_url && (
                  <a
                    href={leaders[selectedLeaderIndex].linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      background: '#0077b5',
                      color: 'white',
                      padding: '12px 30px',
                      borderRadius: '30px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(0, 119, 181, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 119, 181, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 119, 181, 0.3)';
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                )}
              </div>

              {/* Bio Section */}
              {leaders[selectedLeaderIndex].bio && (
                <div style={{
                  background: 'linear-gradient(135deg, #f5f5f5 0%, #e8eaf6 100%)',
                  padding: '30px',
                  borderRadius: '15px',
                  marginTop: '30px'
                }}>
                  <h3 style={{
                    fontSize: '1.3em',
                    marginBottom: '15px',
                    color: '#6a1b9a',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span>📝</span> Bio
                  </h3>
                  <p style={{
                    lineHeight: '1.8',
                    color: '#555',
                    fontSize: '1.05em'
                  }}>
                    {leaders[selectedLeaderIndex].bio}
                  </p>
                </div>
              )}
            </div>

            <style dangerouslySetInnerHTML={{
              __html: `
                @keyframes fadeIn {
                  from { opacity: 0; }
                  to { opacity: 1; }
                }
                @keyframes slideUp {
                  from { 
                    opacity: 0;
                    transform: translateY(50px) scale(0.95);
                  }
                  to { 
                    opacity: 1;
                    transform: translateY(0) scale(1);
                  }
                }
              `
            }} />
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="hero-section" style={{
        background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 50%, #ab47bc 100%)'
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="animated-title">
            {safeTextContent(companyData?.hero_section?.hero_title, 'Empowering Digital Innovation')}
          </h1>
          <p className="animated-subtitle">
            {safeTextContent(companyData?.hero_section?.hero_subtitle, "We're on a mission to help every organization deliver exceptional digital experiences that drive real business results.")}
          </p>
          <div className="hero-buttons">
            <a href="#story" className="btn start">Our Story</a>
            <Link to="/careers" className="btn talk">Join Our Team</Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{
        padding: '100px 20px', 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e8eaf6 100%)',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ 
              fontSize: '2.5em', 
              marginBottom: '30px',
              background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'fadeInUp 0.8s ease-out'
            }}>
              {safeTextContent(companyData?.mission_section?.section_title, 'Our Mission')}
          </h2>
            <p style={{ 
              fontSize: '1.4em', 
              color: '#333', 
              lineHeight: 1.8, 
              marginBottom: '60px',
              animation: 'fadeInUp 1s ease-out'
            }}>
              {safeTextContent(companyData?.mission_section?.mission_statement, 'To empower every organization—from startups to Fortune 500 companies—with the tools, technology, and intelligence they need to create digital experiences that truly resonate with their audiences.')}
            </p>

          <div style={{
            display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              marginTop: '60px'
          }}>
            {(companyData?.mission_section?.values || [
                { icon: '', value_title: 'Customer First', value_text: 'Every decision we make starts with how it benefits our customers.', gradient: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)' },
                { icon: '', value_title: 'Innovation', value_text: 'We push boundaries and embrace new technologies to stay ahead.', gradient: 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)' },
                { icon: '', value_title: 'Partnership', value_text: 'We succeed when our customers succeed. Their growth is our growth.', gradient: 'linear-gradient(135deg, #8e24aa 0%, #ab47bc 100%)' }
              ]).map((item: any, index: number) => (
              <div key={index} style={{
                height: '400px',
                borderRadius: '25px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                color: 'white',
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                animation: `fadeInUp 0.6s ease-out ${0.1 * (index + 1)}s both`,
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
                border: '3px solid white',
                backgroundColor: '#f5f5f5'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
              }}>
                {/* Background Image from Contentstack */}
                <img
                  src={item.icon?.url || item.icon}
                  alt={safeTextContent(item.value_title || item.title, 'Company Value')}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 1
                  }}
                  onError={(e) => {
                    console.error('Value image failed to load:', item.icon);
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Bottom Gradient Overlay for Text Readability */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '70%',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 70%, transparent 100%)',
                  zIndex: 2
                }}></div>
                
                {/* Content */}
                <div style={{
                  position: 'relative',
                  zIndex: 3,
                  padding: '30px',
                  width: '100%',
                  textAlign: 'center'
                }}>
                  <p style={{ 
                    fontSize: '2.2em', 
                    fontWeight: '800',
                    marginBottom: '15px',
                    textShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                    color: 'white'
                  }}>
                    {safeTextContent(item.value_title || item.title, 'Company Value')}
                  </p>
                  <p style={{ 
                    fontSize: '1.15em', 
                    textAlign: 'center', 
                    opacity: 0.95,
                    lineHeight: 1.6,
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    margin: 0
                  }}>
                    {safeTextContent(item.value_text || item.text, 'Value description')}
                  </p>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section id="story" style={{ 
        padding: '120px 20px', 
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f4ff 50%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Background Elements */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(106, 27, 154, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite',
          pointerEvents: 'none'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '8%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(142, 36, 170, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 12s ease-in-out infinite reverse',
          pointerEvents: 'none'
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ 
              fontSize: '3.5em', 
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 50%, #ab47bc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'fadeInUp 0.8s ease-out',
              fontWeight: '800',
              letterSpacing: '-1px'
            }}>
              {safeTextContent(companyData?.company_timeline?.section_title, 'Our Journey')}
            </h2>
            <p style={{
              fontSize: '1.35em',
              color: '#666',
              maxWidth: '750px',
              margin: '0 auto',
              lineHeight: '1.7',
              animation: 'fadeInUp 1s ease-out'
            }}>
              {safeTextContent(companyData?.company_timeline?.section_subtitle, 'From startup to unicorn - Our story of innovation and growth')}
            </p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
            {/* Vertical Timeline Line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '4px',
              background: 'linear-gradient(180deg, #6a1b9a 0%, #8e24aa 50%, #d946ef 100%)',
              transform: 'translateX(-50%)',
              borderRadius: '10px',
              boxShadow: '0 0 20px rgba(106, 27, 154, 0.3)'
            }}></div>

            {(companyData?.company_timeline?.milestones || milestones).map((milestone: any, index: number) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                marginBottom: '45px',
                position: 'relative',
                animation: `fadeIn${index % 2 === 0 ? 'Left' : 'Right'} 0.8s ease-out ${index * 0.15}s both`
              }}>
                <div 
                  className="journey-card"
                  style={{ 
                    width: '45%',
                    background: 'linear-gradient(135deg, #ffffff 0%, #faf8ff 100%)',
                    padding: '28px',
                    borderRadius: '20px',
                    boxShadow: '0 8px 30px rgba(106, 27, 154, 0.12)',
                    border: '2px solid rgba(106, 27, 154, 0.1)',
                    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.08) translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(106, 27, 154, 0.25)';
                    e.currentTarget.style.borderColor = '#6a1b9a';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #f3e8ff 100%)';
                    
                    // Show content
                    const content = e.currentTarget.querySelector('.journey-content') as HTMLElement;
                    if (content) {
                      content.style.maxHeight = '500px';
                      content.style.opacity = '1';
                      content.style.marginTop = '20px';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(106, 27, 154, 0.12)';
                    e.currentTarget.style.borderColor = 'rgba(106, 27, 154, 0.1)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #faf8ff 100%)';
                    
                    // Hide content
                    const content = e.currentTarget.querySelector('.journey-content') as HTMLElement;
                    if (content) {
                      content.style.maxHeight = '0';
                      content.style.opacity = '0';
                      content.style.marginTop = '0';
                    }
                  }}
                >
                  {/* Decorative Corner Accent */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, rgba(106, 27, 154, 0.08) 0%, transparent 100%)',
                    borderRadius: '20px 0 50% 0'
                  }}></div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {/* Icon Circle */}
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2em',
                      boxShadow: '0 5px 15px rgba(106, 27, 154, 0.3)',
                      flexShrink: 0
                    }}>
                      {safeIconContent(milestone.icon, '📅')}
                    </div>
                    
                    <div>
                      <div style={{ 
                        fontSize: '2em',
                        background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontWeight: '800',
                        letterSpacing: '-0.5px',
                        lineHeight: '1'
                      }}>
                        {safeTextContent(milestone.year, '2024')}
                      </div>
                    </div>
                  </div>
                  
                  {/* Expandable content */}
                  <div 
                    className="journey-content"
                    style={{ 
                      maxHeight: '0',
                      opacity: '0',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      marginTop: '0',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    <h3 style={{ 
                      fontSize: '1.4em', 
                      marginBottom: '12px', 
                      color: '#1a1a1a', 
                      fontWeight: '700',
                      lineHeight: '1.3'
                    }}>
                      {milestone.event_title || milestone.event}
                    </h3>
                    <p style={{ 
                      color: '#666', 
                      lineHeight: 1.7, 
                      fontSize: '1.05em'
                    }}>
                      {milestone.event_description || milestone.description}
                    </p>
                  </div>
            </div>

                {/* Enhanced Timeline Dot */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '30px',
                  transform: 'translateX(-50%)',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                  boxShadow: '0 0 0 8px rgba(106, 27, 154, 0.15), 0 0 20px rgba(106, 27, 154, 0.3)',
                  zIndex: 2,
                  animation: `pulse 3s ease-in-out infinite ${index * 0.5}s`,
                  border: '4px solid white'
                }}></div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section style={{ 
        padding: '100px 20px',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e8eaf6 100%)'
      }}>
        <div className="container">
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5em', 
            marginBottom: '20px', 
            background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'fadeInUp 0.8s ease-out'
              }}>
            {safeTextContent(companyData?.leadership_team?.section_title, 'Leadership Team')}
          </h2>
          <p style={{ 
            textAlign: 'center', 
            fontSize: '1.2em', 
            color: '#666', 
            marginBottom: '60px', 
            animation: 'fadeInUp 1s ease-out'
          }}>
            {safeTextContent(companyData?.leadership_team?.section_description, 'Meet the experienced leaders driving ContentFlow forward')}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {(companyData?.leadership_team?.team_members || []).map((leader: any, index: number) => (
              <div key={index} style={{ 
                textAlign: 'center',
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}>
                <div style={{
                  position: 'relative',
                  display: 'inline-block',
                  marginBottom: '20px'
                }}>
                  <ImageSync 
                    src={leader.photo?.url || leader.photo || leader.image?.url || leader.image || leader.leader_photo?.url || leader.leader_photo}
                    fallbackSrc="/images/logo.png"
                    alt={safeTextContent(leader.name, 'Leader')}
                    style={{
                      width: '180px',
                      height: '180px',
                      borderRadius: '50%',
                      border: '5px solid white',
                      boxShadow: '0 8px 25px rgba(106, 27, 154, 0.2)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      objectFit: 'cover'
                    }}
                    onClick={() => setSelectedLeaderIndex(index)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                      e.currentTarget.style.boxShadow = '0 12px 35px rgba(106, 27, 154, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(106, 27, 154, 0.2)';
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '5px',
                    right: '5px',
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                    borderRadius: '50%',
                    border: '3px solid white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2em'
                  }}>
                    ✓
                  </div>
                </div>
                <h3 style={{ fontSize: '1.3em', marginBottom: '5px', color: '#333' }}>
                  {safeTextContent(leader.name, 'Leader Name')}
                </h3>
                <p style={{ 
                  background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 'bold'
                }}>
                  {safeTextContent(leader.role, 'Position')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section style={{ padding: '100px 20px', background: 'white' }}>
        <div className="container">
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5em', 
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            {safeTextContent(companyData?.awards_and_recognition?.section_title, 'Awards & Recognition')}
          </h2>
          {companyData?.awards_and_recognition?.section_description && (
            <p style={{
              textAlign: 'center',
              fontSize: '1.1em',
              color: '#666',
              marginBottom: '60px',
              maxWidth: '800px',
              margin: '0 auto 60px'
            }}>
              {companyData.awards_and_recognition.section_description}
            </p>
          )}

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {(() => {
              // Flatten all awards from all categories
              const allAwards = companyData?.awards_and_recognition?.award_categories?.flatMap(
                (cat: any) => cat.awards || []
              ) || awards;
              return allAwards.slice(0, 6).map((award: any, index: number) => (
              <div key={index} style={{
                background: 'white',
                padding: '40px 30px',
                borderRadius: '20px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                textAlign: 'center',
                border: '2px solid #e8eaf6',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) rotate(-2deg)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(106, 27, 154, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 20px',
                  background: award.gradient,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5em',
                  animation: 'float 3s ease-in-out infinite',
                  animationDelay: `${index * 0.3}s`
                }}>
                  🏆
                </div>
                <h3 style={{ fontSize: '1.3em', marginBottom: '10px', color: '#333' }}>
                  {safeTextContent(award.award_title || award.title, 'Award Title')}
                </h3>
                <p style={{ color: '#666' }}>
                  {safeTextContent(award.organization || award.org, 'Organization')} • {safeTextContent(award.year, '2024')}
                </p>
                {award.award_description && (
                  <p style={{ 
                    color: '#666', 
                    fontSize: '0.85em',
                    marginTop: '10px'
                  }}>
                    {safeTextContent(award.award_description, 'Award description')}
                  </p>
                )}
              </div>
            ));
            })()}
          </div>
        </div>
      </section>

      {/* By the Numbers - Animated Counters */}
      <AnimatedNumbers />

      {/* Social Responsibility */}
      <section style={{ 
        padding: '100px 20px', 
        background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: '2.5em', marginBottom: '30px', animation: 'fadeInUp 0.8s ease-out' }}>
              Committed to Making a Difference
            </h2>
            <p style={{ fontSize: '1.2em', lineHeight: 1.8, opacity: 0.9, marginBottom: '40px', animation: 'fadeInUp 1s ease-out' }}>
              We believe in using our platform and resources to create positive change. Through our 
              social impact programs, we provide free access to nonprofits, support diversity in tech, 
              and contribute to environmental sustainability initiatives.
            </p>
            <Link to="/contact" className="btn" style={{ 
              background: 'white', 
              color: '#6a1b9a',
              animation: 'pulse 2s ease-in-out infinite'
            }}>
              Learn About Our Impact
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Join Us on Our Journey</h2>
          <p>Whether as a customer, partner, or team member—let's build the future together.</p>
          <div className="cta-buttons">
            <Link to="/careers" className="btn start">Explore Careers</Link>
            <Link to="/talk" className="btn talk">Become a Customer</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Animated Numbers Component
const AnimatedNumbers: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({ customers: 0, apiCalls: 0, countries: 0, teamMembers: 0, uptime: 0, rating: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate all counters
          const duration = 2000;
          const startTime = Date.now();
          const targets = { customers: 500, apiCalls: 50, countries: 150, teamMembers: 200, uptime: 99.9, rating: 4.8 };
          
          const timer = setInterval(() => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            
            setCounts({
              customers: Math.floor(progress * targets.customers),
              apiCalls: Math.floor(progress * targets.apiCalls),
              countries: Math.floor(progress * targets.countries),
              teamMembers: Math.floor(progress * targets.teamMembers),
              uptime: progress * targets.uptime,
              rating: progress * targets.rating
            });
            
            if (progress === 1) {
              clearInterval(timer);
            }
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} style={{ 
      padding: '100px 20px', 
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e8eaf6 100%)'
    }}>
      <div className="container">
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: '2.5em', 
          marginBottom: '60px',
          background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'fadeInUp 0.8s ease-out'
        }}>
          ContentFlow by the Numbers
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {[
            { count: counts.customers, suffix: '+', label: 'Enterprise Customers', gradient: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)' },
            { count: counts.apiCalls, suffix: 'B+', label: 'API Calls Monthly', gradient: 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)' },
            { count: counts.countries, suffix: '+', label: 'Countries Served', gradient: 'linear-gradient(135deg, #8e24aa 0%, #ab47bc 100%)' },
            { count: counts.teamMembers, suffix: '+', label: 'Team Members', gradient: 'linear-gradient(135deg, #ab47bc 0%, #ba68c8 100%)' },
            { count: counts.uptime.toFixed(1), suffix: '%', label: 'Uptime SLA', gradient: 'linear-gradient(135deg, #ba68c8 0%, #ce93d8 100%)' },
            { count: counts.rating.toFixed(1), suffix: '★', label: 'Customer Rating', gradient: 'linear-gradient(135deg, #ce93d8 0%, #e1bee7 100%)' }
          ].map((stat, index) => (
            <div key={index} style={{ 
              textAlign: 'center',
              background: 'white',
              padding: '40px 20px',
              borderRadius: '20px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(106, 27, 154, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
            }}>
              <div style={{ 
                fontSize: '3.5em', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                background: stat.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {safeTextContent(stat.count, '100')}{safeTextContent(stat.suffix, '+')}
              </div>
              <p style={{ fontSize: '1.1em', color: '#666' }}>{safeTextContent(stat.label, 'Statistic')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Company;
