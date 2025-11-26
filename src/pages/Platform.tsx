import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContentstack } from '../context/ContentstackContext';
import SEOHead from '../components/SEOHead';
import LoadingSpinner from '../components/LoadingSpinner';
import LargeFeatureCard, { LargeFeatureGrid } from '../components/LargeFeatureCard';
import { safeTextContent, safeIconContent } from '../components/ImageSync';

const Platform: React.FC = () => {
  const { fetchContent } = useContentstack();
  const [platformData, setPlatformData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      try {
        const data = await fetchContent('platform_page');
        console.log('Platform page data:', data);
        console.log('Platform features:', data?.platform_features);
        console.log('Page header:', data?.page_header);
        setPlatformData(data);
      } catch (error) {
        console.error('❌ Error loading platform content:', error);
        setPlatformData(null); // Ensure data is null on error
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

  // Add safety check for missing data
  if (!platformData) {
    return (
      <div style={{ 
        minHeight: '60vh', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2em', color: '#333', marginBottom: '20px' }}>
          📄 Page Content Not Available
        </h2>
        <p style={{ color: '#666', marginBottom: '30px', maxWidth: '600px' }}>
          The Platform page content hasn't been published in Contentstack yet. Please publish the 'platform_page' entry in your Contentstack dashboard.
        </p>
        <Link to="/" className="btn start">
          🏠 Go to Homepage
        </Link>
      </div>
    );
  }

  // Wrap entire render in try-catch for maximum safety
  try {
    return (
      <div className="platform-page">
        <SEOHead seoData={platformData?.seo_metadata} />
        
        {/* Hero Section */}
        <section className="hero-section" style={{
          background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 50%, #ab47bc 100%)'
        }}>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="animated-title">
              {safeTextContent(platformData?.page_header?.page_title, 'The Platform Built for Tomorrow')}
            </h1>
            <p className="animated-subtitle">
              {safeTextContent(platformData?.page_header?.page_subtitle?.[0], 'A composable DXP that scales with your ambitions. Headless CMS, personalization, automation, and AI-powered agents—all in one unified platform.')}
            </p>
            <div className="hero-buttons">
              <Link to="/start" className="btn start">Start Free Trial</Link>
              <Link to="/talk" className="btn talk">Request a Demo</Link>
            </div>
          </div>
        </section>

      {/* Platform Capabilities */}
      <section style={{ padding: '100px 20px', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '3em', marginBottom: '20px' }}>
              {safeTextContent(platformData?.platform_capabilities?.section_title, 'Everything You Need to Win')}
            </h2>
            <p style={{ fontSize: '1.2em', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
              {safeTextContent(platformData?.platform_capabilities?.section_description, 'ContentFlow brings together all the tools you need to create, manage, and deliver exceptional digital experiences.')}
            </p>
        </div>

          {/* Enhanced Feature Cards with Full Background Images */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            marginBottom: '80px'
          }}>
            {(platformData?.platform_features || [
              {
                feature_name: 'Headless CMS',
                feature_description: 'API-first content management that gives you complete control over your tech stack. Build for any channel, any device, any framework.',
                feature_image: {
                  url: '/images/headless-cms-content-hub-diagram.png',
                  title: 'Modern Cloud Architecture'
                }
              },
              {
                feature_name: 'Visual Experience Composer',
                feature_description: 'Design stunning experiences without code. Drag, drop, and deploy pages in minutes—no developer required.',
                feature_image: {
                  url: '/images/Visual-Builder-4.gif',
                  title: 'Creative Design Workspace'
                }
              },
              {
                feature_name: 'Personalization Engine',
                feature_description: 'Deliver the right content to the right audience at the right time. Leverage AI and data to create hyper-personalized experiences.',
                feature_image: {
                  url: '/images/Omni.png',
                  title: 'Business Process Automation'
                }
              },
              {
                feature_name: 'Customer Data Platform',
                feature_description: 'Unify customer data from all touchpoints. Get a single view of your customers and activate that data across every channel.',
                feature_image: {
                  url: '/images/Customer Data Platform.png',
                  title: 'Platform Analytics Dashboard'
                }
              },
              {
                feature_name: 'Workflow Automation',
                feature_description: 'Streamline operations with intelligent workflows. Automate content approvals, publishing, and notifications.',
                feature_image: {
                  url: '/images/Workflow Automation.jpg',
                  title: 'Developer Programming Environment'
                }
              },
              {
                feature_name: 'AI-Powered Agents',
                feature_description: 'Intelligent agents that understand your brand and assist with content creation, optimization, and insights.',
                feature_image: {
                  url: '/images/AI-Powered Agents.png',
                  title: 'Artificial Intelligence and Machine Learning'
                }
              }
            ]).slice(0, 6).map((feature: any, index: number) => (
              <div
                key={index}
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
                  src={feature.feature_image?.url || feature.feature_icon?.url || feature.feature_image || feature.feature_icon}
                  alt={safeTextContent(feature.feature_name, 'Platform Feature')}
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
                    {safeTextContent(feature.feature_name, 'Platform Feature')}
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
                    {safeTextContent(feature.feature_description, 'Explore this powerful capability')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section style={{ 
        padding: '100px 20px', 
        background: 'linear-gradient(135deg, #4b2e83 0%, #6a1b9a 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '4px solid rgba(255, 255, 255, 0.2)',
        borderBottom: '4px solid rgba(255, 255, 255, 0.2)'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '100px',
          height: '100px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '8%',
          width: '80px',
          height: '80px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '50%',
          animation: 'float 4s ease-in-out infinite reverse'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: '60px',
          height: '60px',
          background: 'rgba(255,255,255,0.12)',
          borderRadius: '50%',
          animation: 'float 5s ease-in-out infinite'
        }}></div>
        
        {/* Floating Emoji Decorations */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '20%',
          fontSize: '3em',
          animation: 'float 7s ease-in-out infinite',
          opacity: 0.7
        }}>⚡</div>
        <div style={{
          position: 'absolute',
          bottom: '30%',
          right: '5%',
          fontSize: '2.5em',
          animation: 'float 5s ease-in-out infinite reverse',
          opacity: 0.6
        }}>🚀</div>
        <div style={{
          position: 'absolute',
          top: '70%',
          left: '8%',
          fontSize: '2.8em',
          animation: 'float 6s ease-in-out infinite',
          opacity: 0.65
        }}>🔒</div>
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '25%',
          fontSize: '2.2em',
          animation: 'float 8s ease-in-out infinite reverse',
          opacity: 0.5
        }}>🌍</div>
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '30%',
          fontSize: '2.6em',
          animation: 'float 4.5s ease-in-out infinite',
          opacity: 0.55
        }}>📈</div>
          <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ 
              textAlign: 'center', 
              fontSize: '2.8em', 
              marginBottom: '20px',
              color: 'white',
              fontWeight: 'bold',
              textShadow: '0 4px 20px rgba(0,0,0,0.3), 0 2px 10px rgba(0,0,0,0.2)',
              animation: 'fadeInUp 0.8s ease-out',
              letterSpacing: '-0.5px'
            }}>
              ⚡ Built for Performance, Scale, and Security 🚀
            </h2>
            <p style={{
              textAlign: 'center',
              fontSize: '1.2em',
              color: 'rgba(255,255,255,0.95)',
              marginBottom: '60px',
              animation: 'fadeInUp 1s ease-out',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
              fontWeight: '500'
            }}>
              🌟 Enterprise-grade infrastructure trusted by global brands worldwide 🌟
            </p>
            
            <LargeFeatureGrid gap="40px">
              {[
                { 
                  icon: '⚡', 
                  title: 'Lightning Fast Performance', 
                  text: 'Global CDN with 150+ edge locations delivering <50ms response times. Optimized for speed and performance worldwide.',
                  feature_image: {
                    url: '/images/Lightning fast.jpg',
                    title: 'High-Speed Network Infrastructure'
                  }
                },
                { 
                  icon: '📈', 
                  title: 'Infinitely Scalable Architecture', 
                  text: 'Auto-scaling cloud infrastructure that seamlessly handles billions of API calls and traffic spikes per month.',
                  feature_image: {
                    url: '/images/Scalable.jpg',
                    title: 'Scalable Cloud Computing'
                  }
                },
                { 
                  icon: '🔒', 
                  title: 'Enterprise-Grade Security', 
                  text: 'SOC 2 Type II certified with GDPR & CCPA compliance. 99.9% uptime SLA and advanced threat protection.',
                  feature_image: {
                    url: '/images/Security.jpg',
                    title: 'Cybersecurity and Data Protection'
                  }
                },
                { 
                  icon: '🌍', 
                  title: 'Global Reach & Localization', 
                  text: 'Multi-region deployment with advanced localization support for 100+ languages and international markets.',
                  feature_image: {
                    url: '/images/Global.jpg',
                    title: 'Global Network and Connectivity'
                  }
                }
              ].map((item, index) => {
                const categories = ['Performance', 'Scalability', 'Security', 'Global'];
                return (
                  <LargeFeatureCard
                    key={index}
                    title={safeTextContent(item.title, 'Infrastructure Feature')}
                    description={safeTextContent(item.text, 'Technical excellence feature')}
                    icon={safeIconContent(item.icon, '⚡')}
                    featureImage={item.feature_image}
                    link="/start"
                    linkText="Get Started"
                    category={categories[index]}
                    imageHeight="260px"
                  />
                );
              })}
            </LargeFeatureGrid>
            </div>
          </div>
        </section>

      {/* Integration Ecosystem */}
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
              Integrates with Your Entire Stack
          </h2>
            <p style={{ 
              fontSize: '1.2em', 
              color: '#666', 
              maxWidth: '700px', 
              margin: '0 auto',
              animation: 'fadeInUp 1s ease-out'
            }}>
              Connect ContentFlow with 500+ tools and services. From e-commerce to analytics, marketing automation to developer tools.
            </p>
            </div>

          {/* Scrolling Integration Marquee */}
          <style>{`
            @keyframes scrollPlatform {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .platform-logo-track {
              display: flex;
              animation: scrollPlatform 20s linear infinite;
              width: fit-content;
            }
            .platform-logo-track:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div style={{
            overflow: 'hidden',
            marginBottom: '50px',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}>
            <div className="platform-logo-track">
              {/* First set of integrations */}
              {['Salesforce', 'HubSpot', 'Shopify', 'Stripe', 'Google Analytics', 'Segment', 
              'Slack', 'Jira', 'GitHub', 'Vercel', 'AWS', 'Azure'].map((tool: string, index: number) => (
                <div key={`integration-${index}`} style={{
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
                  {safeTextContent(tool, 'Integration')}
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {['Salesforce', 'HubSpot', 'Shopify', 'Stripe', 'Google Analytics', 'Segment', 
              'Slack', 'Jira', 'GitHub', 'Vercel', 'AWS', 'Azure'].map((tool: string, index: number) => (
                <div key={`integration-dup-${index}`} style={{
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
                  {safeTextContent(tool, 'Integration')}
                </div>
              ))}
            </div>
            </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/partners" className="btn talk" style={{
              animation: 'pulse 2s ease-in-out infinite'
            }}>
              View All 500+ Integrations
              </Link>
          </div>
        </div>
      </section>

      {/* Developer Experience */}
      <section style={{ padding: '100px 20px', background: '#1a1a1a', color: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5em', marginBottom: '30px' }}>
              Built by Developers, for Developers
          </h2>
            <p style={{ fontSize: '1.2em', opacity: 0.9, marginBottom: '40px', lineHeight: 1.6 }}>
              Comprehensive SDKs, detailed documentation, and a thriving developer community. Get up and running in minutes, not weeks.
            </p>
          
            <div style={{
              background: '#2a2a2a',
              padding: '40px',
              borderRadius: '12px',
              textAlign: 'left',
              marginBottom: '40px',
              fontFamily: 'monospace'
            }}>
              <pre style={{ margin: 0, color: '#4ec9b0', fontSize: '1.1em' }}>
{`npm install @contentflow/sdk

import { ContentFlow } from '@contentflow/sdk';

const stack = new ContentFlow({
  apiKey: 'your-api-key',
  environment: 'production'
});

const content = await stack.getEntry('homepage');`}
              </pre>
            </div>

            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/academy" className="btn start">View Documentation</Link>
              <Link to="/start" className="btn" style={{ background: 'transparent', border: '2px solid white' }}>
                Get API Key
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Build Something Amazing?</h2>
          <p>Join thousands of companies using ContentFlow to power their digital experiences.</p>
          <div className="cta-buttons">
            <Link to="/start" className="btn start">Start Free Trial</Link>
            <Link to="/talk" className="btn talk">Talk to Sales</Link>
          </div>
        </div>
      </section>
      </div>
    );
  } catch (error) {
    console.error('🚨 CRITICAL: Platform page render error:', error);
    return (
      <div style={{ 
        minHeight: '60vh', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2em', color: '#e53935', marginBottom: '20px' }}>
          ⚠️ Page Rendering Error
        </h2>
        <p style={{ color: '#666', marginBottom: '20px', maxWidth: '600px' }}>
          An error occurred while rendering the Platform page. Please check the browser console for details.
        </p>
        <p style={{ color: '#999', fontSize: '0.9em', marginBottom: '30px', fontFamily: 'monospace' }}>
          Error: {error instanceof Error ? error.message : 'Unknown error'}
        </p>
        <Link to="/" className="btn start">
          🏠 Go to Homepage
        </Link>
      </div>
    );
  }
};

export default Platform;
