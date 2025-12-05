import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContentstack } from '../context/ContentstackContext';
import SEOHead from '../components/SEOHead';
import LoadingSpinner from '../components/LoadingSpinner';
import LargeFeatureCard, { LargeFeatureGrid } from '../components/LargeFeatureCard';
import ImageSync, { safeTextContent, safeIconContent } from '../components/ImageSync';

const Partners: React.FC = () => {
  const { fetchContent } = useContentstack();
  const [partnersData, setPartnersData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      try {
        const data = await fetchContent('partners_page');
        console.log('Partners page data:', data);
        setPartnersData(data);
      } catch (error) {
        console.error('Error loading partners content:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadContent();
  }, [fetchContent]);

  // Show loading spinner while fetching data
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Note: Page will render with fallback content if Contentstack data is not available

  // Use Contentstack data (with fallback for backward compatibility)
  const partnerCategories = partnersData?.partner_categories || [
    {
      title: 'Technology Partners',
      description: 'Integration with leading technology platforms',
      partners: [
        { name: 'Salesforce', type: 'CRM', icon: '️' },
        { name: 'HubSpot', type: 'Marketing', icon: '' },
        { name: 'Shopify', type: 'E-commerce', icon: '' },
        { name: 'Stripe', type: 'Payments', icon: '' },
        { name: 'Google Analytics', type: 'Analytics', icon: '' },
        { name: 'Segment', type: 'CDP', icon: '' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Deployed on world-class infrastructure',
      partners: [
        { name: 'AWS', type: 'Cloud', icon: '️' },
        { name: 'Azure', type: 'Cloud', icon: '️' },
        { name: 'Google Cloud', type: 'Cloud', icon: '️' },
        { name: 'Vercel', type: 'Hosting', icon: '' },
        { name: 'Netlify', type: 'Hosting', icon: '' },
        { name: 'Cloudflare', type: 'CDN', icon: '' }
      ]
    },
    {
      title: 'Developer Tools',
      description: 'Seamless integration with your workflow',
      partners: [
        { name: 'GitHub', type: 'Version Control', icon: '' },
        { name: 'GitLab', type: 'Version Control', icon: '' },
        { name: 'Jira', type: 'Project Management', icon: '' },
        { name: 'Slack', type: 'Communication', icon: '' },
        { name: 'Figma', type: 'Design', icon: '' },
        { name: 'Postman', type: 'API Testing', icon: '' }
      ]
    },
    {
      title: 'Agency Partners',
      description: 'Certified agencies to help you succeed',
      partners: [
        { name: 'Digital Excellence', type: 'Full Service', icon: '' },
        { name: 'CreativeWorks', type: 'Design', icon: '' },
        { name: 'TechBuild', type: 'Development', icon: '' },
        { name: 'Strategy Plus', type: 'Consulting', icon: '' },
        { name: 'Growth Labs', type: 'Marketing', icon: '' },
        { name: 'Innovate Co', type: 'Full Service', icon: '' }
      ]
    }
  ];

  const partnerBenefits = partnersData?.partner_benefits || [
    {
      icon: '',
      title: 'Co-Marketing Opportunities',
      description: 'Joint marketing initiatives, case studies, and co-branded content to showcase your expertise and grow together.',
      feature_image: {
        url: '/images/Partnership.jpg',
        title: 'Partnership Marketing Collaboration'
      }
    },
    {
      icon: '',
      title: 'Training & Certification Program',
      description: 'Comprehensive partner training programs, certifications, and dedicated support resources for your team.',
      feature_image: {
        url: '/images/Innovation.jpg',
        title: 'Professional Training and Development'
      }
    },
    {
      icon: '',
      title: 'Revenue Sharing Program',
      description: 'Competitive commission structure with attractive revenue opportunities and performance-based incentives.',
      feature_image: {
        url: '/images/Customer Analytics.jpg',
        title: 'Revenue Growth and Analytics'
      }
    },
    {
      icon: '️',
      title: 'Technical Support & Resources',
      description: 'Dedicated technical support, integration assistance, and early access to new features and capabilities.',
      feature_image: {
        url: '/images/Automation.png',
        title: 'Technical Support and Development'
      }
    },
    {
      icon: '',
      title: 'Lead Generation & Growth',
      description: 'Access to qualified leads from our customer base and growth opportunities in new markets.',
      feature_image: {
        url: '/images/Analytics.jpg',
        title: 'Partnership Growth Strategy'
      }
    },
    {
      icon: '',
      title: 'Partner Recognition & Awards',
      description: 'Featured placement in our partner directory, marketing materials, and exclusive recognition events for achievements.',
      feature_image: {
        url: '/images/Scalable.jpg',
        title: 'Awards and Recognition Ceremony'
      }
    }
  ];

  return (
    <div className="partners-page">
      <SEOHead seoData={partnersData?.seo_metadata} />
      
      {/* Hero Section */}
      <section className="hero-section" style={{
        background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 50%, #ab47bc 100%)'
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="animated-title">{safeTextContent(partnersData?.hero_section?.hero_title, 'Partner with ContentFlow')}</h1>
          <p className="animated-subtitle">
            {safeTextContent(partnersData?.hero_section?.hero_subtitle, 'Join our ecosystem of technology partners, agencies, and integrations to deliver exceptional value to customers worldwide.')}
          </p>
          <div className="hero-buttons">
            <Link to="#become-partner" className="btn start">Become a Partner</Link>
            <Link to="#explore" className="btn talk">Explore Integrations</Link>
          </div>
        </div>
      </section>

      {/* Partner Ecosystem */}
      <section style={{ padding: '100px 20px', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontSize: '2.5em', 
              marginBottom: '20px',
        background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'fadeInUp 0.8s ease-out'
            }}>
              {safeTextContent(partnersData?.partner_ecosystem?.section_title, 'A Thriving Ecosystem')}
          </h2>
            <p style={{ 
              fontSize: '1.2em', 
              color: '#666', 
              maxWidth: '800px', 
              margin: '0 auto',
              animation: 'fadeInUp 1s ease-out'
            }}>
              {safeTextContent(partnersData?.partner_ecosystem?.section_description, 'Connect ContentFlow with 500+ tools and services. Our partner ecosystem enables you to build powerful, integrated solutions.')}
            </p>
          </div>

          {/* Scrolling Partner Marquee */}
          <style>{`
            @keyframes scrollPartners {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .partners-logo-track {
              display: flex;
              animation: scrollPartners 20s linear infinite;
              width: fit-content;
            }
            .partners-logo-track:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div style={{
            overflow: 'hidden',
            marginBottom: '60px',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}>
            <div className="partners-logo-track">
              {/* First set of partners */}
              {(partnersData?.partner_ecosystem?.marquee_brands || ['Salesforce', 'Shopify', 'AWS', 'HubSpot', 'Stripe', 'GitHub', 
              'Vercel', 'Slack', 'Figma', 'Google Cloud', 'Azure', 'Netlify',
              'MongoDB', 'Segment', 'Cloudflare', 'GitLab']).map((name: string, index: number) => (
                <div key={`partner-${index}`} style={{
                  padding: '0 40px',
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#000',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: '200px',
                  justifyContent: 'center'
                }}>
                  {name}
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {(partnersData?.partner_ecosystem?.marquee_brands || ['Salesforce', 'Shopify', 'AWS', 'HubSpot', 'Stripe', 'GitHub', 
              'Vercel', 'Slack', 'Figma', 'Google Cloud', 'Azure', 'Netlify',
              'MongoDB', 'Segment', 'Cloudflare', 'GitLab']).map((name: string, index: number) => (
                <div key={`partner-dup-${index}`} style={{
                  padding: '0 40px',
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#000',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: '200px',
                  justifyContent: 'center'
                }}>
                  {name}
                </div>
              ))}
            </div>
          </div>
                
          <div style={{ textAlign: 'center' }}>
            <Link to="/platform" className="btn talk" style={{ animation: 'pulse 2s ease-in-out infinite' }}>
              View All Integrations
            </Link>
          </div>
                </div>
      </section>

      {/* Partner Categories */}
      <section id="explore" style={{ padding: '100px 20px', background: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5em', marginBottom: '60px' }}>
            Partner Categories
          </h2>

          {(partnersData?.partner_categories || partnerCategories).map((category: any, index: number) => (
            <div key={index} style={{ marginBottom: '60px' }}>
              <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                  <h3 style={{ 
                    fontSize: '1.5em', 
                  marginBottom: '8px',
                  color: '#6a1b9a',
                    fontWeight: 'bold'
                }}>{category.category_title || category.title}</h3>
                <p style={{ fontSize: '0.95em', color: '#666' }}>{category.category_description || category.description}</p>
                </div>
                
                <div style={{
                  display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {category.partners.map((partner: any, idx: number) => (
                  <div key={idx} style={{ 
                    display: 'inline-flex',
                  alignItems: 'center',
                    gap: '10px',
                    background: 'white',
                    padding: '12px 20px',
                    borderRadius: '25px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    border: '2px solid #e8eaf6',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(106, 27, 154, 0.15)';
                    e.currentTarget.style.borderColor = '#6a1b9a';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                    e.currentTarget.style.borderColor = '#e8eaf6';
                  }}>
                    <ImageSync
                      src={partner.icon}
                      alt={safeTextContent(partner.partner_name || partner.name, 'Partner Logo')}
                      fallbackSrc="/images/logo.png"
                      style={{
                        width: '50px',
                        height: '50px',
                        objectFit: 'contain',
                        borderRadius: '8px'
                      }}
                    />
                    <div>
                      <h4 style={{ fontSize: '1em', marginBottom: '2px', fontWeight: 'bold' }}>{safeTextContent(partner.partner_name || partner.name, 'Partner Name')}</h4>
                      <p style={{ color: '#6a1b9a', fontSize: '0.8em', margin: 0 }}>
                        {safeTextContent(partner.partner_type || partner.type, 'Partner Type')}
                      </p>
                    </div>
                </div>
                ))}
              </div>
            </div>
          ))}
                </div>
      </section>

      {/* Become a Partner */}
      <section id="become-partner" style={{ padding: '100px 20px', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5em', marginBottom: '20px' }}>
              {safeTextContent(partnersData?.partner_benefits?.section_title, 'Why Partner with Us?')}
            </h2>
            <p style={{ fontSize: '1.2em', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
              {safeTextContent(partnersData?.partner_benefits?.section_description, 'Join our partner program and unlock exclusive benefits to grow your business.')}
                  </p>
                </div>
                
                <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}>
            {(partnersData?.partner_benefits?.benefits || partnerBenefits).map((benefit: any, index: number) => (
              <Link
                key={index}
                to="/contact"
                style={{
                  textDecoration: 'none',
                  height: '400px',
                  borderRadius: '25px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  color: 'white',
                  transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
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
                }}
              >
                {/* Background Image */}
                <img
                  src={benefit.feature_image?.url || benefit.icon?.url || benefit.feature_image || benefit.icon}
                  alt={safeTextContent(benefit.benefit_title || benefit.title, 'Partner Benefit')}
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
                    console.error('Benefit image failed to load');
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Bottom Gradient Overlay */}
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
                    {safeTextContent(benefit.benefit_title || benefit.title, 'Partner Benefit')}
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
                    {safeTextContent(benefit.benefit_description || benefit.description, 'Description')}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/contact" className="btn start" style={{ fontSize: '1.1em' }}>
              Apply to Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section style={{ 
        padding: '120px 20px', 
        background: 'linear-gradient(180deg, #f8f9fa 0%, #e8eaf6 50%, #f8f9fa 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Background */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(106, 27, 154, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 12s ease-in-out infinite',
          pointerEvents: 'none'
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '3.5em', 
            marginBottom: '25px',
              background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 50%, #ab47bc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'fadeInUp 0.8s ease-out',
            fontWeight: '800',
            letterSpacing: '-1px'
          }}>
            Partner Program Tiers
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.3em',
            color: '#666',
            marginBottom: '80px',
            maxWidth: '700px',
            margin: '0 auto 80px',
            lineHeight: '1.6',
            animation: 'fadeInUp 1s ease-out'
          }}>
            Choose the partnership level that fits your business goals
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            maxWidth: '1300px',
            margin: '0 auto'
          }}>
            {/* Silver Partner */}
            <div style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
              padding: '45px 35px',
              borderRadius: '25px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
              border: '2px solid rgba(192, 192, 192, 0.3)',
              textAlign: 'center',
              transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              animation: 'fadeInUp 0.6s ease-out 0.1s both',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-15px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(192, 192, 192, 0.25)';
              e.currentTarget.style.borderColor = '#c0c0c0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)';
              e.currentTarget.style.borderColor = 'rgba(192, 192, 192, 0.3)';
            }}>
              {/* Background Accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '5px',
                background: 'linear-gradient(90deg, #c0c0c0 0%, #d3d3d3 100%)'
              }}></div>
              
              <div style={{ 
                fontSize: '4.5em', 
                marginBottom: '20px', 
                animation: 'float 3s ease-in-out infinite',
                filter: 'drop-shadow(0 5px 15px rgba(192, 192, 192, 0.3))'
              }}></div>
              
              <h3 style={{ 
                fontSize: '2em', 
                marginBottom: '20px',
                fontWeight: '700',
                color: '#333'
              }}>Silver Partner</h3>
              
              <ul style={{ 
                textAlign: 'left', 
                color: '#666', 
                lineHeight: 2.2, 
                listStyle: 'none', 
                paddingLeft: 0,
                fontSize: '1.05em'
              }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ color: '#c0c0c0', fontSize: '1.2em' }}></span> Partner directory listing
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ color: '#c0c0c0', fontSize: '1.2em' }}></span> Basic training access
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ color: '#c0c0c0', fontSize: '1.2em' }}></span> 10% revenue share
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#c0c0c0', fontSize: '1.2em' }}></span> Email support
                </li>
              </ul>
            </div>

            {/* Gold Partner - Popular */}
            <div style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #fff9e6 100%)',
              padding: '45px 35px',
              borderRadius: '25px',
              boxShadow: '0 15px 50px rgba(106, 27, 154, 0.25)',
              border: '3px solid #6a1b9a',
              textAlign: 'center',
              position: 'relative',
              transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              animation: 'fadeInUp 0.6s ease-out 0.2s both',
              transform: 'scale(1.05)',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-15px) scale(1.08)';
              e.currentTarget.style.boxShadow = '0 25px 60px rgba(106, 27, 154, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 15px 50px rgba(106, 27, 154, 0.25)';
            }}>
              {/* Popular Badge */}
              <div style={{
                position: 'absolute',
                top: '-18px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                color: 'white',
                padding: '12px 30px',
                borderRadius: '30px',
                fontSize: '0.95em',
                fontWeight: 'bold',
                animation: 'pulse 2s ease-in-out infinite',
                boxShadow: '0 8px 25px rgba(106, 27, 154, 0.4)',
                border: '3px solid white',
                zIndex: 10
              }}>
                Popular
              </div>
              
              {/* Background Accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '5px',
                background: 'linear-gradient(90deg, #ffd700 0%, #ffed4e 100%)'
              }}></div>
              
              <div style={{ 
                fontSize: '4.5em', 
                marginBottom: '20px', 
                animation: 'float 3s ease-in-out infinite 0.3s',
                filter: 'drop-shadow(0 5px 15px rgba(255, 215, 0, 0.4))'
              }}></div>
              <h3 style={{ 
                fontSize: '2em', 
                marginBottom: '20px',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Gold Partner</h3>
              
              <ul style={{ 
                textAlign: 'left', 
                color: '#666', 
                lineHeight: 2.2, 
                listStyle: 'none', 
                paddingLeft: 0,
                fontSize: '1.05em'
              }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ color: '#6a1b9a', fontSize: '1.2em' }}></span> Featured directory placement
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ color: '#6a1b9a', fontSize: '1.2em' }}></span> Advanced training & certification
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ color: '#6a1b9a', fontSize: '1.2em' }}></span> 15% revenue share</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ color: '#6a1b9a', fontSize: '1.2em' }}></span> Priority support (4hr response)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#6a1b9a', fontSize: '1.2em' }}></span> Co-marketing opportunities
                </li>
              </ul>
            </div>

            {/* Platinum Partner */}
            <div style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #fff5e6 100%)',
              padding: '45px 35px',
              borderRadius: '25px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            textAlign: 'center',
              transition: 'all 0.3s ease',
              animation: 'fadeInUp 0.6s ease-out 0.4s both'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            }}>
              <div style={{ fontSize: '3em', marginBottom: '15px', animation: 'float 3s ease-in-out infinite 1s' }}></div>
              <h3 style={{ fontSize: '1.8em', marginBottom: '15px' }}>Platinum Partner</h3>
              <ul style={{ textAlign: 'left', color: '#666', lineHeight: 2, listStyle: 'none', paddingLeft: 0 }}>
                <li> Premium directory placement</li>
                <li> Exclusive training programs</li>
                <li> 20% revenue share</li>
                <li> Dedicated partner manager</li>
                <li> Lead generation program</li>
                <li> Early access to features</li>
            </ul>
              </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section style={{ padding: '100px 20px', background: 'white' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5em', marginBottom: '60px' }}>
            Partner Success Stories
          </h2>

          <div style={{
          display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            <div className="testimonial-card">
              <div className="rating"></div>
              <div className="testimonial-content">
                <p>"Partnering with ContentFlow has been transformational for our agency. We've doubled our revenue and landed enterprise clients we never thought possible."</p>
              </div>
              <div className="testimonial-author">
                <img src="/images/Todd.jpg" alt="Agency Partner" />
                <div>
                  <strong>Mark Thompson</strong>
                  <span>CEO, Digital Excellence</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="rating"></div>
              <div className="testimonial-content">
                <p>"The technical support and training have been outstanding. ContentFlow truly invests in their partners' success."</p>
              </div>
              <div className="testimonial-author">
                <img src="/images/Renee.jpg" alt="Agency Partner" />
                <div>
                  <strong>Lisa Chen</strong>
                  <span>Founder, CreativeWorks</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="rating"></div>
              <div className="testimonial-content">
                <p>"The revenue sharing model is generous and the lead quality is exceptional. Best partnership decision we've made."</p>
              </div>
              <div className="testimonial-author">
                <img src="/images/Conor.jpg" alt="Agency Partner" />
                <div>
                  <strong>David Rodriguez</strong>
                  <span>Director, TechBuild Solutions</span>
                </div>
              </div>
            </div>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Partner with Us?</h2>
          <p>Join our growing ecosystem and unlock new opportunities for your business.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn start">Apply Now</Link>
            <Link to="/platform" className="btn talk">Explore Integrations</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
