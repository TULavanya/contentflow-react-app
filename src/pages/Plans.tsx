import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContentstack, onEntryChange } from '../context/ContentstackContext';
import SEOHead from '../components/SEOHead';
import LoadingSpinner from '../components/LoadingSpinner';
import ImageSync, { safeTextContent, safeIconContent } from '../components/ImageSync';

const Plans: React.FC = () => {
  const { fetchContent } = useContentstack();
  const [plansData, setPlansData] = useState<any>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('cms');

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      try {
        const data = await fetchContent('plans_page');
        console.log('=== PLANS PAGE DEBUG ===');
        console.log('Full data received:', data);
        console.log('Data sections:');
        console.log('  - hero_section:', data?.hero_section);
        console.log('  - customer_logos:', data?.customer_logos);
        console.log('  - customer_success:', data?.customer_success);
        console.log('  - pricing_plans:', data?.pricing_plans);
        console.log('  - feature_comparison:', data?.feature_comparison);
        console.log('  - pricing_faqs:', data?.pricing_faqs);
        
        if (!data) {
          console.error(' NO DATA RECEIVED - Entry might not exist or not published');
        }
        
        // Debug detailed comparison images
        if (data?.detailed_comparison?.categories) {
          console.log('\n Detailed Comparison Categories Debug:');
          data.detailed_comparison.categories.forEach((cat: any, idx: number) => {
            console.log(`\nCategory ${idx + 1}:`);
            console.log('  Title:', cat.title);
            console.log('  Icon exists:', !!cat.icon);
            console.log('  Icon structure:', JSON.stringify(cat.icon, null, 2));
            console.log('  Icon URL:', cat.icon?.url || 'NO URL');
          });
        }
        
        // Debug customer success testimonial
        if (data?.customer_success?.testimonial) {
          console.log('\n Customer Success Testimonial Debug:');
          console.log('  Testimonial array:', data.customer_success.testimonial);
          if (data.customer_success.testimonial[0]) {
            console.log('  First testimonial:', data.customer_success.testimonial[0]);
            console.log('  Category:', data.customer_success.testimonial[0].category);
            console.log('  Category icon:', data.customer_success.testimonial[0].category_icon);
          }
        }
        
        // Debug product tabs
        if (data?.headless_cms || data?.realtime_cdp || data?.adaptive_dxp) {
          console.log('\n Product Tabs Debug:');
          ['headless_cms', 'realtime_cdp', 'adaptive_dxp'].forEach(tab => {
            if (data[tab]) {
              console.log(`\n${tab}:`);
              console.log('  Title:', data[tab].title);
              console.log('  Hero image exists:', !!data[tab].hero_image);
              console.log('  Hero image URL:', data[tab].hero_image?.url || 'NO URL');
            }
          });
        }
        
        setPlansData(data);
      } catch (error) {
        console.error('Error loading plans content:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadContent();
    
    // Listen for Live Preview content changes
    onEntryChange(() => {
      console.log('Plans content changed - reloading...');
      loadContent();
    });}, [fetchContent]);

  // Show loading spinner while fetching data
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="plans-page">
      <SEOHead seoData={plansData?.seo_metadata} />
      
      {/* Hero Section - Modern Design */}
      <section style={{
        padding: '100px 20px 80px',
        background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 50%, #ab47bc 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 15s ease-in-out infinite 2s'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '25px',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '25px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            Contentstack Edge
          </div>
          
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '800',
            marginBottom: '25px',
            lineHeight: '1.1',
            letterSpacing: '-1px',
            animation: 'fadeInUp 0.6s ease-out'
          }}>
            {safeTextContent(plansData?.hero_section?.hero_title, 'We have the right solution for you')}
          </h1>
          
          <p style={{
            fontSize: '1.4rem',
            opacity: 0.95,
            maxWidth: '900px',
            margin: '0 auto 40px',
            lineHeight: '1.6',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            {safeTextContent(plansData?.hero_section?.hero_subtitle, 'From Headless CMS to Web Personalization to Omnichannel Personalization, the world\'s best digital experiences run on Contentstack')}
          </p>

          <Link 
            to="/talk"
            style={{
              display: 'inline-block',
              padding: '16px 40px',
              background: 'white',
              color: '#6a1b9a',
              borderRadius: '50px',
              fontWeight: '700',
              fontSize: '1.1rem',
              textDecoration: 'none',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              animation: 'fadeInUp 1s ease-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
            }}
          >
            Contact us
          </Link>
        </div>
      </section>

      {/* Product Tabs Section */}
      <section style={{ 
        padding: '80px 20px',
        background: 'white'
      }}>
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Tab Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0',
            marginBottom: '60px',
            borderBottom: '2px solid #e0e0e0'
          }}>
            {[
              { id: 'cms', label: 'Headless CMS' },
              { id: 'cdp', label: 'Real-time CDP' },
              { id: 'dxp', label: 'Adaptive DXP' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '20px 40px',
                  background: 'none',
                  border: 'none',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: activeTab === tab.id ? '#6a1b9a' : '#666',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  borderBottom: activeTab === tab.id ? '3px solid #6a1b9a' : '3px solid transparent'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.color = '#8e24aa';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.color = '#666';
                  }
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e8eaf6 100%)',
            borderRadius: '30px',
            padding: '60px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
            border: '2px solid rgba(106, 27, 154, 0.1)'
          }}>
            {activeTab === 'cms' && (
              <div style={{ animation: 'fadeInUp 0.5s ease-out' }}>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: '#1a1a1a'
                }}>
                  Headless CMS
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  marginBottom: '40px'
                }}>
                  AI-driven automated content management for the enterprise
                </p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '40px'
                }}>
                  {/* Capabilities */}
                  <div>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      marginBottom: '25px',
                      color: '#6a1b9a'
                    }}>
                      Contentstack Edge — CMS
                    </h3>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      marginBottom: '20px',
                      color: '#333'
                    }}>
                      Capabilities
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {[
                        'Headless CMS',
                        'Personalization engine',
                        'Real-time data activation',
                        'No-code agents & automations',
                        'Brand-aware AI',
                        'AI writing assistant',
                        'Visual building/editing',
                        'Timeline previewing',
                        'Granular permissions',
                        'Custom workflows',
                        'Integrated app & front-end hosting'
                      ].map((feature, index) => (
                        <li key={index} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          marginBottom: '12px',
                          fontSize: '1.05rem',
                          color: '#333'
                        }}>
                          <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '24px',
                            height: '24px',
                            background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                            borderRadius: '50%',
                            color: 'white',
                            fontSize: '0.8rem',
                            fontWeight: 'bold'
                          }}>
                            
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Platform & Support */}
                  <div>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      marginBottom: '20px',
                      color: '#333'
                    }}>
                      Platform
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
                      {[
                        'API-first architecture',
                        'Global CDN',
                        'Enterprise security',
                        'Scalable infrastructure',
                        '99.9% uptime SLA'
                      ].map((feature, index) => (
                        <li key={index} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          marginBottom: '12px',
                          fontSize: '1.05rem',
                          color: '#333'
                        }}>
                          <span style={{ color: '#6a1b9a', fontWeight: 'bold' }}>→</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      marginBottom: '20px',
                      color: '#333'
                    }}>
                      Support
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {[
                        '24/7 enterprise support',
                        'Dedicated success manager',
                        'Priority response times',
                        'Training & onboarding'
                      ].map((feature, index) => (
                        <li key={index} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          marginBottom: '12px',
                          fontSize: '1.05rem',
                          color: '#333'
                        }}>
                          <span style={{ color: '#6a1b9a', fontWeight: 'bold' }}>→</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTAs */}
                <div style={{
                  display: 'flex',
                  gap: '20px',
                  marginTop: '50px',
            flexWrap: 'wrap'
          }}>
                  <Link
                    to="/talk"
                    style={{
                      padding: '16px 40px',
                      background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                      color: 'white',
                      borderRadius: '50px',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      textDecoration: 'none',
                      boxShadow: '0 8px 25px rgba(106, 27, 154, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(106, 27, 154, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(106, 27, 154, 0.3)';
                    }}
                  >
                    Request demo
                  </Link>
                  <Link
                    to="/start"
                    style={{
                      padding: '16px 40px',
                      background: 'white',
                      color: '#6a1b9a',
                      border: '2px solid #6a1b9a',
                      borderRadius: '50px',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#6a1b9a';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.color = '#6a1b9a';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Start free
                  </Link>
              </div>
              </div>
            )}

            {activeTab === 'cdp' && (
              <div style={{ animation: 'fadeInUp 0.5s ease-out' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '60px',
                  alignItems: 'center'
                }}>
                  {/* Image */}
                  <div style={{
                    height: '400px',
                    borderRadius: '25px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
                  }}>
                    <ImageSync
                      src="/images/Customer Data Platform.png"
                      alt="Real-time CDP"
                      fallbackSrc="/images/Customer Analytics.jpg"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '15px', color: '#1a1a1a' }}>
                      Real-time CDP
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px', lineHeight: '1.7' }}>
                      Unify customer data across all touchpoints for personalized experiences in real-time. Our Customer Data Platform helps you understand your customers better and deliver exceptional experiences at scale.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                      {['Unified customer profiles', 'Real-time data activation', 'Behavioral analytics', 'Segmentation engine'].map((feature, idx) => (
                        <li key={idx} style={{ marginBottom: '12px', paddingLeft: '30px', position: 'relative', fontSize: '1.05rem', color: '#333' }}>
                          <span style={{ position: 'absolute', left: 0, color: '#6a1b9a', fontWeight: 'bold' }}>→</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/talk" style={{
                      display: 'inline-block',
                      padding: '16px 40px',
                      background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                      color: 'white',
                      borderRadius: '50px',
                      fontWeight: '700',
                      textDecoration: 'none',
                      boxShadow: '0 8px 25px rgba(106, 27, 154, 0.3)'
                    }}>
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'dxp' && (
              <div style={{ animation: 'fadeInUp 0.5s ease-out' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '60px',
                  alignItems: 'center'
                }}>
                  {/* Content */}
                  <div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '15px', color: '#1a1a1a' }}>
                      Adaptive DXP
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px', lineHeight: '1.7' }}>
                      Complete digital experience platform that adapts to your customers' needs. Deliver personalized experiences across all channels with our composable architecture.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                      {['Omnichannel orchestration', 'AI-powered personalization', 'Composable architecture', 'Experience analytics'].map((feature, idx) => (
                        <li key={idx} style={{ marginBottom: '12px', paddingLeft: '30px', position: 'relative', fontSize: '1.05rem', color: '#333' }}>
                          <span style={{ position: 'absolute', left: 0, color: '#6a1b9a', fontWeight: 'bold' }}>→</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/talk" style={{
                      display: 'inline-block',
                      padding: '16px 40px',
                      background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                      color: 'white',
                      borderRadius: '50px',
                      fontWeight: '700',
                      textDecoration: 'none',
                      boxShadow: '0 8px 25px rgba(106, 27, 154, 0.3)'
                    }}>
                      Learn More
                    </Link>
                  </div>
                  
                  {/* Image */}
                  <div style={{
                    height: '400px',
                    borderRadius: '25px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
                  }}>
                    <ImageSync
                      src="/images/Omni.png"
                      alt="Adaptive DXP"
                      fallbackSrc="/images/Personalized.jpg"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Customer Logos Section */}
      {plansData?.customer_logos && plansData.customer_logos.length > 0 && (
        <section style={{
          padding: '60px 20px',
          background: '#f8f9fa',
          overflow: 'hidden'
        }}>
          <div className="container">
            <style>{`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .logo-track {
                display: flex;
                animation: scroll 20s linear infinite;
                width: fit-content;
              }
              .logo-track:hover {
                animation-play-state: paused;
              }
            `}</style>
            
            <div style={{ 
              overflow: 'hidden',
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}>
              <div className="logo-track">
                {/* First set of logos */}
                {plansData.customer_logos.map((logo: any, index: number) => (
                  <div key={`logo-${index}`} style={{
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
                    {logo.logo_name || logo}
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {plansData.customer_logos.map((logo: any, index: number) => (
                  <div key={`logo-dup-${index}`} style={{
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
                    {logo.logo_name || logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Customer Success Section */}
      {plansData?.customer_success && (plansData.customer_success.success_stats?.length > 0 || (plansData.customer_success.testimonial && plansData.customer_success.testimonial.length > 0)) && (
      <section style={{ 
        padding: '100px 20px', 
          background: 'white'
      }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
              fontSize: '3rem',
              fontWeight: '800',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {safeTextContent(plansData.customer_success.section_title, 'Customer success')}
            </h2>
            <p style={{
              textAlign: 'center',
              fontSize: '1.3rem',
              color: '#666',
              marginBottom: '60px'
            }}>
              {safeTextContent(plansData.customer_success.section_subtitle, 'Measurable success that makes a difference')}
            </p>
            {plansData.customer_success.section_description && (
              <p style={{
                textAlign: 'center',
                fontSize: '1.1rem',
                color: '#666',
                marginBottom: '60px'
              }}>
                {plansData.customer_success.section_description}
              </p>
            )}

            {plansData.customer_success.success_stats && plansData.customer_success.success_stats.length > 0 && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px',
                marginBottom: '80px'
              }}>
                {plansData.customer_success.success_stats.map((stat: any, index: number) => (
                  <div key={index} style={{
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e8eaf6 100%)',
                    padding: '50px 40px',
                    borderRadius: '25px',
                    textAlign: 'center',
                    border: '2px solid rgba(106, 27, 154, 0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(106, 27, 154, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    <div style={{
                      fontSize: '4rem',
                      fontWeight: '800',
            background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
                      marginBottom: '15px'
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: '#333'
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Debug Panel for Testimonial */}
            {/* Testimonial */}
            {plansData.customer_success.testimonial && plansData.customer_success.testimonial.length > 0 && plansData.customer_success.testimonial[0].quote && (
              <div style={{
                background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                padding: '60px',
                borderRadius: '30px',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '200px',
                  height: '200px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '50%'
                }}></div>
                
                <div style={{
                  position: 'relative',
                  zIndex: 1,
                  maxWidth: '900px',
                  margin: '0 auto'
                }}>
                  {plansData.customer_success.testimonial[0].category && (
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      marginBottom: '15px',
                      opacity: 0.9,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      {plansData.customer_success.testimonial[0].category_icon && (
                        <span style={{
                          width: '40px',
                          height: '40px',
                          background: 'rgba(255,255,255,0.2)',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden',
                          padding: '8px'
                        }}>
                          <img 
                            src={plansData.customer_success.testimonial[0].category_icon?.url || plansData.customer_success.testimonial[0].category_icon}
                            alt={plansData.customer_success.testimonial[0].category}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain'
                            }}
                            onError={(e) => {
                              console.error('Testimonial icon failed to load');
                              e.currentTarget.parentElement!.innerHTML = plansData.customer_success.testimonial[0].category.substring(0, 1);
                            }}
                          />
                        </span>
                      )}
                      {plansData.customer_success.testimonial[0].category}
                    </div>
                  )}
                  <p style={{
                    fontSize: '1.5rem',
                    lineHeight: '1.7',
                    marginBottom: '30px',
                    fontStyle: 'italic'
                  }}>
                    <div dangerouslySetInnerHTML={{ __html: plansData.customer_success.testimonial[0].quote }} />
                  </p>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '1.2rem' }}>
                      {plansData.customer_success.testimonial[0].author_name}
                    </div>
                    <div style={{ opacity: 0.9 }}>
                      {plansData.customer_success.testimonial[0].author_title} • {plansData.customer_success.testimonial[0].company}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Pricing Plans */}
      <section style={{ 
        padding: '120px 20px', 
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e8eaf6 50%, #f5e6ff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Shapes */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(106, 27, 154, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
          pointerEvents: 'none'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(142, 36, 170, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite reverse',
          pointerEvents: 'none'
        }}></div>
        
        <div style={{ maxWidth: '1300px', margin: 'auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <h2 style={{
              fontSize: '3.2em',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 50%, #ab47bc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'fadeInUp 0.8s ease-out',
              fontWeight: '800',
              letterSpacing: '-1px'
          }}>
            {safeTextContent(plansData?.pricing_plans?.section_title, 'Choose Your Plan')}
          </h2>
            <p style={{
              fontSize: '1.3em',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto',
              animation: 'fadeInUp 1s ease-out'
            }}>
              Flexible pricing designed to scale with your business needs
            </p>
          </div>
          <div style={{
          display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
              {(plansData?.pricing_plans?.plans || []).map((plan: any, index: number) => {
                // Define color gradients for each plan
                const planColors = [
                  { badge: 'linear-gradient(135deg, #7c4dff 0%, #9575cd 100%)', name: 'S' }, // Starter - Purple
                  { badge: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)', name: 'P' }, // Professional - Deep Purple
                  { badge: 'linear-gradient(135deg, #7c4dff 0%, #9575cd 100%)', name: 'E' }  // Enterprise - Purple
                ];
                const planColor = planColors[index] || planColors[0];
                
                return (
              <div key={index} style={{
                background: plan.is_popular 
                  ? 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)'
                  : 'rgba(255, 255, 255, 0.85)',
                padding: '45px 35px',
                borderRadius: '30px',
                boxShadow: plan.is_popular 
                  ? '0 20px 60px rgba(106, 27, 154, 0.25), 0 0 0 1px rgba(106, 27, 154, 0.1)' 
                  : '0 10px 30px rgba(0,0,0,0.08)',
                border: plan.is_popular ? '3px solid transparent' : '2px solid rgba(106, 27, 154, 0.15)',
                borderImage: plan.is_popular ? 'linear-gradient(135deg, #6a1b9a, #8e24aa) 1' : 'none',
                position: 'relative',
                textAlign: 'center',
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`,
                transform: plan.is_popular ? 'scale(1.08) translateY(-10px)' : 'scale(1)',
                backdropFilter: 'blur(10px)',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = plan.is_popular ? 'scale(1.1) translateY(-15px) rotateY(2deg)' : 'translateY(-12px) scale(1.03) rotateY(1deg)';
                e.currentTarget.style.boxShadow = '0 25px 70px rgba(106, 27, 154, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = plan.is_popular ? 'scale(1.08) translateY(-10px) rotateY(0deg)' : 'translateY(0) scale(1) rotateY(0deg)';
                e.currentTarget.style.boxShadow = plan.is_popular 
                  ? '0 20px 60px rgba(106, 27, 154, 0.25), 0 0 0 1px rgba(106, 27, 154, 0.1)' 
                  : '0 10px 30px rgba(0,0,0,0.08)';
              }}>
              {/* Animated Background Gradient */}
              {plan.is_popular && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: planColor.badge,
                  opacity: 0.03,
                  borderRadius: '30px',
                  pointerEvents: 'none',
                  zIndex: 0
                }}></div>
              )}
              
              {plan.is_popular && (
                <div style={{
                  position: 'absolute',
                  top: '-18px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: planColor.badge,
                  color: 'white',
                  padding: '12px 30px',
                  borderRadius: '30px',
                  fontSize: '0.95em',
                  fontWeight: 'bold',
                  boxShadow: '0 8px 25px rgba(106, 27, 154, 0.4)',
                  animation: 'pulse 2s ease-in-out infinite',
                  zIndex: 10,
                  border: '3px solid white'
                }}>
                  Most Popular
                  </div>
                )}
                
                <div style={{
                width: '90px',
                height: '90px',
                margin: '20px auto 25px',
                background: planColor.badge,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold',
                color: 'white',
                animation: 'float 4s ease-in-out infinite',
                boxShadow: `0 10px 30px ${index === 2 ? 'rgba(236, 64, 122, 0.3)' : 'rgba(106, 27, 154, 0.3)'}`,
                position: 'relative',
                zIndex: 1
              }}>
                {planColor.name}
                </div>

                <h3 style={{ 
                  fontSize: '2.2em', 
                  marginBottom: '15px', 
                  color: '#1a1a1a',
                  fontWeight: '700',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {plan.plan_name}
                </h3>
                
                <div style={{ marginBottom: '25px', position: 'relative', zIndex: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'center',
                    gap: '8px'
                  }}>
                  <span style={{ 
                      fontSize: '4em', 
                      fontWeight: '800',
                      lineHeight: '1',
                    background: planColor.badge,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                      display: 'inline-block',
                      letterSpacing: '-2px'
                  }}>
                    {plan.plan_price}
                  </span>
                    <span style={{ 
                      fontSize: '1.15em', 
                      color: '#888',
                      fontWeight: '500'
                    }}>
                      {plan.billing_period}
                    </span>
                  </div>
                </div>
                
                <p style={{ 
                  color: '#666', 
                  marginBottom: '35px', 
                  fontSize: '1.1em',
                  lineHeight: '1.6',
                  position: 'relative',
                  zIndex: 1,
                  minHeight: '50px'
                }}>
                  {plan.plan_description}
                </p>
              
                <ul style={{
                listStyle: 'none', 
                padding: 0, 
                  marginBottom: '35px',
                  textAlign: 'left',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {plan.features.map((feature: any, idx: number) => (
                    <li key={idx} style={{
                      marginBottom: '15px',
                      paddingLeft: '35px',
                      position: 'relative',
                      color: '#444',
                      fontSize: '1em',
                      lineHeight: '1.5',
                      animation: `fadeInLeft 0.5s ease-out ${0.6 + (idx * 0.08)}s both`,
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.paddingLeft = '40px';
                      e.currentTarget.style.color = '#6a1b9a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.paddingLeft = '35px';
                      e.currentTarget.style.color = '#444';
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '2px',
                        width: '24px',
                        height: '24px',
                        background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '0.75em',
                        boxShadow: '0 2px 8px rgba(106, 27, 154, 0.3)'
                      }}></span>
                      {feature.feature_text}
                  </li>
                ))}
              </ul>
              
                <Link to="/start" style={{
                  background: plan.is_popular 
                    ? planColor.badge
                    : 'transparent',
                  color: plan.is_popular ? 'white' : '#6a1b9a',
                  border: plan.is_popular ? 'none' : '3px solid #6a1b9a',
                  padding: '18px 35px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '700',
                  display: 'inline-block',
                  width: '100%',
                  textAlign: 'center',
                  fontSize: '1.1em',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  boxShadow: plan.is_popular ? `0 8px 25px ${index === 2 ? 'rgba(236, 64, 122, 0.35)' : 'rgba(106, 27, 154, 0.35)'}` : '0 4px 15px rgba(0,0,0,0.1)',
                  position: 'relative',
                  zIndex: 1,
                  overflow: 'hidden',
                  letterSpacing: '0.5px'
                }}
                onMouseEnter={(e) => {
                  if (plan.is_popular) {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                    e.currentTarget.style.boxShadow = `0 12px 35px ${index === 2 ? 'rgba(236, 64, 122, 0.45)' : 'rgba(106, 27, 154, 0.45)'}`;
                  } else {
                    e.currentTarget.style.background = planColor.badge;
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                    e.currentTarget.style.boxShadow = `0 10px 30px ${index === 2 ? 'rgba(236, 64, 122, 0.4)' : 'rgba(106, 27, 154, 0.4)'}`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.is_popular) {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = plan.is_popular ? `0 8px 25px ${index === 2 ? 'rgba(236, 64, 122, 0.35)' : 'rgba(106, 27, 154, 0.35)'}` : '0 4px 15px rgba(0,0,0,0.1)';
                  } else {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#6a1b9a';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                  }
                }}>
                  {plan.cta_button_text}
                </Link>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ 
        padding: '120px 20px', 
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(106, 27, 154, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 12s ease-in-out infinite',
          pointerEvents: 'none'
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ 
              fontSize: '3em', 
              marginBottom: '25px',
              background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'fadeInUp 0.8s ease-out',
              fontWeight: '800',
              letterSpacing: '-1px'
            }}>
              {safeTextContent(plansData?.detailed_comparison?.section_title, 'Detailed Feature Comparison')}
          </h2>
          <p style={{
              fontSize: '1.25em',
            color: '#666',
              maxWidth: '650px',
              margin: '0 auto',
              lineHeight: '1.6',
              animation: 'fadeInUp 1s ease-out'
          }}>
              {safeTextContent(plansData?.detailed_comparison?.section_subtitle, 'See exactly what\'s included in each plan')}
          </p>
          </div>

          {/* Split Card Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '35px',
            maxWidth: '1300px',
            margin: '0 auto'
          }}>
            {(plansData?.detailed_comparison?.categories || []).map((category: any, index: number) => {
              const cardColors = [
                '#2563eb',  // Blue
                '#6a1b9a',  // Purple
                '#dc2626',  // Red
                '#0891b2',  // Cyan
                '#7c3aed',  // Violet
                '#059669'   // Green
              ];
              const cardColor = cardColors[index % 6];
              
              return (
              <div key={index} style={{
                height: '320px',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                animation: `fadeInUp 0.8s ease-out ${index * 0.12}s both`,
                cursor: 'pointer',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                backgroundColor: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(106, 27, 154, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
              }}>
                {/* Left Side - Colored Image Panel (40%) */}
                <div style={{
                  width: '40%',
                  position: 'relative',
                  overflow: 'hidden',
                  background: cardColor
                }}>
                  <img
                    src={category.icon?.url || category.icon}
                    alt={safeTextContent(category.title, 'Category')}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      maxWidth: '80%',
                      maxHeight: '80%',
                      objectFit: 'contain',
                      opacity: 0.9,
                      filter: 'brightness(1.1)'
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Decorative overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 70%)',
                    pointerEvents: 'none'
                  }}></div>
                </div>
                
                {/* Right Side - White Text Panel (60%) */}
                <div style={{
                  width: '60%',
                  padding: '35px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  backgroundColor: 'white'
                }}>
                  <h3 style={{ 
                    fontSize: '1.8em', 
                    fontWeight: '700',
                    marginBottom: '20px',
                    color: '#1a1a1a',
                    lineHeight: 1.2
                  }}>
                    {safeTextContent(category.title, 'Category')}
                  </h3>
                  
                  <p style={{
                    fontSize: '1.05em',
                    lineHeight: 1.65,
                    color: '#666',
                    margin: 0
                  }}>
                    {(category.feature || []).slice(0, 3).join('. ')}.
                  </p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section style={{ 
        padding: '100px 20px', 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e8eaf6 100%)'
      }}>
        <div style={{ maxWidth: '800px', margin: 'auto' }}>
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
            {safeTextContent(plansData?.pricing_faqs?.section_title, 'Frequently Asked Questions')}
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.1em',
            color: '#666',
            marginBottom: '60px',
            animation: 'fadeInUp 1s ease-out'
          }}>
            {safeTextContent(plansData?.pricing_faqs?.section_description, 'Everything you need to know about our pricing')}
          </p>

          <div>
            {(plansData?.pricing_faqs?.faq_items || []).map((faq: any, index: number) => (
              <div key={index} style={{
                marginBottom: '20px',
                border: '2px solid #e8eaf6',
                borderRadius: '15px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  style={{
                    width: '100%',
                    padding: '25px 30px',
                    background: openFaq === index ? 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)' : 'white',
                    color: openFaq === index ? 'white' : '#333',
                    border: 'none',
                    textAlign: 'left',
              cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1.1em',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (openFaq !== index) {
                      e.currentTarget.style.background = '#f8f9fa';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (openFaq !== index) {
                      e.currentTarget.style.background = 'white';
                    }
                  }}
                >
                  <span>{faq.question}</span>
                  <span style={{
                    fontSize: '1.5em',
                    transition: 'transform 0.3s ease',
                    transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
              <div style={{ 
                  maxHeight: openFaq === index ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease'
            }}>
              <div style={{ 
                    padding: '25px 30px',
                    background: '#f8f9fa',
                    color: '#666',
                    lineHeight: 1.7,
                    fontSize: '1.05em'
                  }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
            </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p style={{ fontSize: '1.1em', color: '#666', marginBottom: '20px' }}>
              Still have questions?
            </p>
            <Link to="/contact" className="btn talk" style={{ textDecoration: 'none' }}>Contact Support</Link>
            </div>
            </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Start your free 30-day trial today. No credit card required.</p>
          <div className="cta-buttons">
            <Link to="/start" className="btn start">Start Free Trial</Link>
            <Link to="/talk" className="btn talk">Talk to Sales</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
