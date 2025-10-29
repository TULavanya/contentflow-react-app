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
        console.log('🚀 Platform page data:', data);
        console.log('🔍 Platform features:', data?.platform_features);
        console.log('🔍 Page header:', data?.page_header);
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
        <section className="hero-section">
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

          {/* Enhanced Large Capability Cards */}
          <LargeFeatureGrid gap="40px" style={{ marginBottom: '80px' }}>
            {(platformData?.platform_features || [
              {
                feature_name: 'Composable Architecture',
                feature_description: 'Build with best-of-breed tools and microservices. Scale infinitely with our modular, API-first platform that adapts to your needs.',
                feature_image: {
                  url: '/images/headless-cms-content-hub-diagram.png',
                  title: 'Modern Cloud Architecture'
                }
              },
              {
                feature_name: 'Visual Content Studio',
                feature_description: 'Intuitive content creation with real-time preview and collaborative editing capabilities that empower your team.',
                feature_image: {
                  url: '/images/Visual-Builder-4.gif',
                  title: 'Creative Design Workspace'
                }
              },
              {
                feature_name: 'Automated Workflows',
                feature_description: 'Streamline your content operations with intelligent automation and approval processes that save time and reduce errors.',
                feature_image: {
                  url: '/images/Workflow Automation.jpg',
                  title: 'Business Process Automation'
                }
              },
              {
                feature_name: 'Advanced Analytics',
                feature_description: 'Deep insights into content performance with AI-powered recommendations and comprehensive reporting dashboards.',
                feature_image: {
                  url: '/images/Analytics.jpg',
                  title: 'Platform Analytics Dashboard'
                }
              },
              {
                feature_name: 'Developer Experience',
                feature_description: 'Powerful APIs, SDKs, and tools designed to accelerate development and deployment for technical teams.',
                feature_image: {
                  url: '/images/Coding_Thumbnail_Kickstart_NextJS.jpg',
                  title: 'Developer Programming Environment'
                }
              },
              {
                feature_name: 'AI & Personalization',
                feature_description: 'Leverage machine learning to deliver personalized experiences at scale with intelligent content recommendations.',
                feature_image: {
                  url: '/images/AI-Powered Agents.png',
                  title: 'Artificial Intelligence and Machine Learning'
                }
              }
            ]).slice(0, 6).map((feature: any, index: number) => {
              const icons = ['🏗️', '🎨', '🔄', '📊', '⚙️', '🤖'];
              const categories = ['Architecture', 'Content', 'Automation', 'Analytics', 'Development', 'AI/ML'];
              
              return (
                <LargeFeatureCard
                  key={index}
                  title={safeTextContent(feature.feature_name, 'Platform Feature')}
                  description={safeTextContent(feature.feature_description, 'Explore this powerful capability')}
                  icon={safeIconContent(icons[index], '🚀')}
                  featureImage={feature.feature_icon || feature.feature_image}
                  link="/start"
                  linkText="Try This Feature →"
                  category={categories[index]}
                  imageHeight="280px"
                />
              );
            })}
          </LargeFeatureGrid>
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
                    linkText="Get Started →"
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
          <div className="marquee-container" style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'relative',
            width: '100%',
            padding: '20px 0',
            marginBottom: '50px'
          }}>
            <div className="marquee-content" style={{
              display: 'inline-block',
              paddingLeft: '100%',
            }}>
              {[...['Salesforce', 'HubSpot', 'Shopify', 'Stripe', 'Google Analytics', 'Segment', 
              'Slack', 'Jira', 'GitHub', 'Vercel', 'AWS', 'Azure'], 
              ...['Salesforce', 'HubSpot', 'Shopify', 'Stripe', 'Google Analytics', 'Segment', 
              'Slack', 'Jira', 'GitHub', 'Vercel', 'AWS', 'Azure']].map((tool, index) => (
              <div key={index} style={{
                display: 'inline-block',
              background: 'white',
                padding: '30px 40px',
                borderRadius: '15px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
            fontWeight: 'bold',
                color: '#333',
            fontSize: '1.1em',
                border: '2px solid #e8eaf6',
                marginRight: '30px',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) rotate(2deg)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(106, 27, 154, 0.2)';
                e.currentTarget.style.borderColor = '#6a1b9a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = '#e8eaf6';
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
              View All 500+ Integrations →
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
