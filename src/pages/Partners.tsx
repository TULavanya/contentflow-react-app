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
        console.log('🤝 Partners page data:', data);
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
        { name: 'Salesforce', type: 'CRM', icon: '☁️' },
        { name: 'HubSpot', type: 'Marketing', icon: '🎯' },
        { name: 'Shopify', type: 'E-commerce', icon: '🛒' },
        { name: 'Stripe', type: 'Payments', icon: '💳' },
        { name: 'Google Analytics', type: 'Analytics', icon: '📊' },
        { name: 'Segment', type: 'CDP', icon: '🔄' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Deployed on world-class infrastructure',
      partners: [
        { name: 'AWS', type: 'Cloud', icon: '☁️' },
        { name: 'Azure', type: 'Cloud', icon: '☁️' },
        { name: 'Google Cloud', type: 'Cloud', icon: '☁️' },
        { name: 'Vercel', type: 'Hosting', icon: '▲' },
        { name: 'Netlify', type: 'Hosting', icon: '🌐' },
        { name: 'Cloudflare', type: 'CDN', icon: '🔒' }
      ]
    },
    {
      title: 'Developer Tools',
      description: 'Seamless integration with your workflow',
      partners: [
        { name: 'GitHub', type: 'Version Control', icon: '🐙' },
        { name: 'GitLab', type: 'Version Control', icon: '🦊' },
        { name: 'Jira', type: 'Project Management', icon: '📋' },
        { name: 'Slack', type: 'Communication', icon: '💬' },
        { name: 'Figma', type: 'Design', icon: '🎨' },
        { name: 'Postman', type: 'API Testing', icon: '📮' }
      ]
    },
    {
      title: 'Agency Partners',
      description: 'Certified agencies to help you succeed',
      partners: [
        { name: 'Digital Excellence', type: 'Full Service', icon: '⭐' },
        { name: 'CreativeWorks', type: 'Design', icon: '🎨' },
        { name: 'TechBuild', type: 'Development', icon: '💻' },
        { name: 'Strategy Plus', type: 'Consulting', icon: '📈' },
        { name: 'Growth Labs', type: 'Marketing', icon: '📊' },
        { name: 'Innovate Co', type: 'Full Service', icon: '🚀' }
      ]
    }
  ];

  const partnerBenefits = partnersData?.partner_benefits || [
    {
      icon: '🤝',
      title: 'Co-Marketing Opportunities',
      description: 'Joint marketing initiatives, case studies, and co-branded content to showcase your expertise and grow together.',
      feature_image: {
        url: '/images/Partnership.jpg',
        title: 'Partnership Marketing Collaboration'
      }
    },
    {
      icon: '🎓',
      title: 'Training & Certification Program',
      description: 'Comprehensive partner training programs, certifications, and dedicated support resources for your team.',
      feature_image: {
        url: '/images/Innovation.jpg',
        title: 'Professional Training and Development'
      }
    },
    {
      icon: '💰',
      title: 'Revenue Sharing Program',
      description: 'Competitive commission structure with attractive revenue opportunities and performance-based incentives.',
      feature_image: {
        url: '/images/Customer Analytics.jpg',
        title: 'Revenue Growth and Analytics'
      }
    },
    {
      icon: '🛠️',
      title: 'Technical Support & Resources',
      description: 'Dedicated technical support, integration assistance, and early access to new features and capabilities.',
      feature_image: {
        url: '/images/Automation.png',
        title: 'Technical Support and Development'
      }
    },
    {
      icon: '📈',
      title: 'Lead Generation & Growth',
      description: 'Access to qualified leads from our customer base and growth opportunities in new markets.',
      feature_image: {
        url: '/images/Analytics.jpg',
        title: 'Partnership Growth Strategy'
      }
    },
    {
      icon: '🏆',
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
      <section className="hero-section">
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
          <div className="marquee-container" style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'relative',
            width: '100%',
            padding: '20px 0',
            marginBottom: '60px'
          }}>
            <div className="marquee-content" style={{
              display: 'inline-block',
              paddingLeft: '100%',
            }}>
              {[...(partnersData?.partner_ecosystem?.marquee_brands || ['Salesforce', 'Shopify', 'AWS', 'HubSpot', 'Stripe', 'GitHub', 
              'Vercel', 'Slack', 'Figma', 'Google Cloud', 'Azure', 'Netlify',
              'MongoDB', 'Segment', 'Cloudflare', 'GitLab']),
              ...(partnersData?.partner_ecosystem?.marquee_brands || ['Salesforce', 'Shopify', 'AWS', 'HubSpot', 'Stripe', 'GitHub', 
              'Vercel', 'Slack', 'Figma', 'Google Cloud', 'Azure', 'Netlify',
              'MongoDB', 'Segment', 'Cloudflare', 'GitLab'])].map((name, index) => (
              <div key={index} style={{
                display: 'inline-block',
                background: 'white',
                padding: '30px 40px',
                borderRadius: '12px',
                border: '2px solid #e8eaf6',
                fontWeight: 'bold',
                color: '#333',
                fontSize: '1.1em',
                boxShadow: '0 4px 15px rgba(106, 27, 154, 0.1)',
                marginRight: '30px',
                  cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(106, 27, 154, 0.2)';
                e.currentTarget.style.borderColor = '#6a1b9a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(106, 27, 154, 0.1)';
                e.currentTarget.style.borderColor = '#e8eaf6';
              }}>
                {name}
              </div>
              ))}
            </div>
                </div>
                
          <div style={{ textAlign: 'center' }}>
            <Link to="/platform" className="btn talk" style={{ animation: 'pulse 2s ease-in-out infinite' }}>
              View All Integrations →
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
                
                <LargeFeatureGrid gap="40px" style={{ marginBottom: '60px' }}>
            {(partnersData?.partner_benefits?.benefits || partnerBenefits).map((benefit: any, index: number) => {
              const categories = ['Partnership', 'Training', 'Revenue', 'Support', 'Growth', 'Recognition'];
              return (
                <LargeFeatureCard
                  key={index}
                  title={benefit.benefit_title || benefit.title}
                  description={benefit.benefit_description || benefit.description}
                  featureImage={benefit.icon || benefit.feature_image}
                  link="/contact"
                  linkText="Become a Partner →"
                  category={categories[index]}
                  imageHeight="260px"
                />
              );
            })}
          </LargeFeatureGrid>

          <div style={{ textAlign: 'center' }}>
            <Link to="/contact" className="btn start" style={{ fontSize: '1.1em' }}>
              Apply to Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section style={{ padding: '100px 20px', background: '#f8f9fa' }}>
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
            Partner Program Tiers
          </h2>
        <p style={{
            textAlign: 'center',
            fontSize: '1.1em',
            color: '#666',
            marginBottom: '60px',
            animation: 'fadeInUp 1s ease-out'
          }}>
            Choose the partnership level that fits your business goals
          </p>

          <div style={{
          display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            textAlign: 'center',
              transition: 'all 0.3s ease',
              animation: 'fadeInUp 0.6s ease-out 0.2s both'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            }}>
              <div style={{ fontSize: '3em', marginBottom: '15px', animation: 'float 3s ease-in-out infinite' }}>🥉</div>
              <h3 style={{ fontSize: '1.8em', marginBottom: '15px' }}>Silver Partner</h3>
              <ul style={{ textAlign: 'left', color: '#666', lineHeight: 2, listStyle: 'none', paddingLeft: 0 }}>
                <li>✓ Partner directory listing</li>
                <li>✓ Basic training access</li>
                <li>✓ 10% revenue share</li>
                <li>✓ Email support</li>
            </ul>
          </div>

            <div style={{
                background: 'white',
              padding: '40px',
                borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(106, 27, 154, 0.2)',
              border: '3px solid #6a1b9a',
            textAlign: 'center',
              position: 'relative',
              transition: 'all 0.3s ease',
              animation: 'fadeInUp 0.6s ease-out 0.3s both'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(106, 27, 154, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(106, 27, 154, 0.2)';
            }}>
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#6a1b9a',
                color: 'white',
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: '0.9em',
          fontWeight: 'bold',
                animation: 'pulse 2s ease-in-out infinite'
              }}>
                Popular
              </div>
              <div style={{ fontSize: '3em', marginBottom: '15px', animation: 'float 3s ease-in-out infinite 0.5s' }}>🥈</div>
              <h3 style={{ fontSize: '1.8em', marginBottom: '15px', color: '#6a1b9a' }}>Gold Partner</h3>
              <ul style={{ textAlign: 'left', color: '#666', lineHeight: 2, listStyle: 'none', paddingLeft: 0 }}>
                <li>✓ Featured directory placement</li>
                <li>✓ Advanced training & certification</li>
                <li>✓ 15% revenue share</li>
                <li>✓ Priority support</li>
                <li>✓ Co-marketing opportunities</li>
            </ul>
          </div>

            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '15px',
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
              <div style={{ fontSize: '3em', marginBottom: '15px', animation: 'float 3s ease-in-out infinite 1s' }}>🥇</div>
              <h3 style={{ fontSize: '1.8em', marginBottom: '15px' }}>Platinum Partner</h3>
              <ul style={{ textAlign: 'left', color: '#666', lineHeight: 2, listStyle: 'none', paddingLeft: 0 }}>
                <li>✓ Premium directory placement</li>
                <li>✓ Exclusive training programs</li>
                <li>✓ 20% revenue share</li>
                <li>✓ Dedicated partner manager</li>
                <li>✓ Lead generation program</li>
                <li>✓ Early access to features</li>
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
              <div className="rating">⭐⭐⭐⭐⭐</div>
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
              <div className="rating">⭐⭐⭐⭐⭐</div>
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
              <div className="rating">⭐⭐⭐⭐⭐</div>
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
