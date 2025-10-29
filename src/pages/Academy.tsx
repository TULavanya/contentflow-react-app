import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContentstack } from '../context/ContentstackContext';
import SEOHead from '../components/SEOHead';
import LoadingSpinner from '../components/LoadingSpinner';
import LargeFeatureCard, { LargeFeatureGrid } from '../components/LargeFeatureCard';
import ImageSync, { safeTextContent } from '../components/ImageSync';

const Academy: React.FC = () => {
  const { fetchContent } = useContentstack();
  const [academyData, setAcademyData] = useState<any>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      try {
        const data = await fetchContent('academy_page');
        console.log('🎓 Academy page data:', data);
        setAcademyData(data);
      } catch (error) {
        console.error('Error loading academy content:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadContent();
  }, [fetchContent]);

  // Use only Contentstack data - no fallbacks
  const faqs = academyData?.faqs || [];

  // Show loading spinner while fetching data
  if (isLoading) {
    return <LoadingSpinner />;
  }

    return (
      <div className="academy-page">
      <SEOHead seoData={academyData?.seo_metadata} />
      
        {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="animated-title">
            {academyData?.hero_section?.hero_title || 'Master ContentFlow'}
          </h1>
          <p className="animated-subtitle">
            {academyData?.hero_section?.hero_subtitle || 'Unlock the full potential of our composable DXP platform with expert-led courses, hands-on tutorials, and comprehensive documentation.'}
          </p>
          <div className="hero-buttons">
            <a href="#course-categories" className="btn start">Start Learning</a>
            <Link to="/contact" className="btn talk">Get Support</Link>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section id="course-categories" style={{ padding: '100px 20px', background: 'white' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5em', marginBottom: '60px' }}>
            {safeTextContent(academyData?.course_categories_section?.section_title, 'Explore Our Courses')}
          </h2>
          <LargeFeatureGrid gap="40px">
            {((academyData?.course_categories && academyData.course_categories.length > 0) ? academyData.course_categories : [
              { 
                icon: '🚀', 
                title: 'Getting Started', 
                description: 'Learn the basics of ContentFlow and set up your first project with step-by-step guidance and hands-on tutorials.', 
                count: '12 courses',
                feature_image: {
                  url: '/images/Coding_Thumbnail_Kickstart_NextJS.jpg',
                  title: 'Educational Learning Environment'
                }
              },
              { 
                icon: '⚙️', 
                title: 'Platform Fundamentals', 
                description: 'Deep dive into core concepts, APIs, and architecture patterns for building scalable, enterprise-grade solutions.', 
                count: '18 courses',
                feature_image: {
                  url: '/images/About_Content_Models.png',
                  title: 'API and Platform Architecture'
                }
              },
              { 
                icon: '🎨', 
                title: 'Content Modeling', 
                description: 'Master content types, schemas, and data structures for flexible, future-proof content management systems.', 
                count: '8 courses',
                feature_image: {
                  url: '/images/headless-cms-diagram.png',
                  title: 'Content Design and Architecture'
                }
              },
              { 
                icon: '🔄', 
                title: 'Integrations & Workflows', 
                description: 'Connect ContentFlow with your favorite tools and platforms. Automate complex business processes seamlessly.', 
                count: '15 courses',
                feature_image: {
                  url: '/images/Workflow Automation.jpg',
                  title: 'Integration and Automation'
                }
              },
              { 
                icon: '📊', 
                title: 'Analytics & Personalization', 
                description: 'Leverage data insights and create personalized experiences that convert visitors into customers.', 
                count: '10 courses',
                feature_image: {
                  url: '/images/Analytics.jpg',
                  title: 'Learning Analytics and Progress'
                }
              },
              { 
                icon: '🛡️', 
                title: 'Security & Best Practices', 
                description: 'Learn security fundamentals and development best practices for secure, compliant enterprise applications.', 
                count: '6 courses',
                feature_image: {
                  url: '/images/Security.jpg',
                  title: 'Cybersecurity and Data Protection'
                }
              }
            ]).map((category: any, index: number) => {
              const categories = ['Beginner', 'Advanced', 'Design', 'Integration', 'Analytics', 'Security'];
              return (
                <div key={index} style={{ position: 'relative' }}>
                  <LargeFeatureCard
                    title={category.title}
                    description={category.description}
                    featureImage={category.icon || category.feature_image}
                    link="#course-categories"
                    linkText={`Start Learning (${category.count}) →`}
                    category={categories[index]}
                    imageHeight="260px"
                  />
                  {/* Course Count Badge - Positioned Over Image */}
            <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    color: '#6a1b9a',
                    padding: '10px 18px',
                    borderRadius: '25px',
              fontSize: '0.9em',
                    fontWeight: 'bold',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(106, 27, 154, 0.3)',
                    zIndex: 10
                  }}>
                    {category.count}
                  </div>
                </div>
              );
            })}
          </LargeFeatureGrid>
            </div>
      </section>

      {/* Featured Tutorial Section */}
      <section style={{ 
        padding: '100px 20px', 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e8eaf6 100%)'
      }}>
        <div className="container">
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2em', 
            marginBottom: '15px',
            background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            {academyData?.featured_tutorial?.title || 'Featured Tutorial'}
          </h2>
            <p style={{
            textAlign: 'center',
            fontSize: '1em',
            color: '#666',
              marginBottom: '40px',
            animation: 'fadeInUp 1s ease-out'
          }}>
            {academyData?.featured_tutorial?.description || ''}
            Start your journey with our most popular tutorial
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{
              height: '320px',
              borderRadius: '25px',
              background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '7em',
              color: 'white',
              boxShadow: '0 15px 40px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.4s ease',
              cursor: 'pointer',
              animation: 'fadeInLeft 1s ease-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) rotate(-3deg)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(102, 126, 234, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.4)';
            }}>
              <div style={{ animation: 'float 3s ease-in-out infinite' }}>
                📺
              </div>
            </div>
            <div style={{ animation: 'fadeInRight 1s ease-out' }}>
              <h3 style={{ fontSize: '2.2em', marginBottom: '20px', lineHeight: 1.2 }}>
                {academyData?.featured_tutorial?.title || 'Building Your First ContentFlow App'}
              </h3>
              <p style={{ fontSize: '1.1em', color: '#666', marginBottom: '25px', lineHeight: 1.6 }}>
                {academyData?.featured_tutorial?.description || 'In this comprehensive tutorial, you\'ll learn how to set up your development environment, create your first content types, and build a complete application from scratch.'}
              </p>
              <div style={{ 
                display: 'flex', 
                gap: '25px', 
                marginBottom: '30px', 
                flexWrap: 'wrap',
                color: '#666',
                fontSize: '1.05em'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '1.3em' }}>⏱️</span> {academyData?.featured_tutorial?.duration || '45 minutes'}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '1.3em' }}>👤</span> {academyData?.featured_tutorial?.instructor || 'Sarah Johnson'}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '1.3em' }}>⭐</span> {safeTextContent(academyData?.featured_tutorial?.rating, '4.8')}/5 ({safeTextContent(academyData?.featured_tutorial?.views, '2,341')} views)
                </span>
              </div>
              <Link to="#" className="btn start" style={{
                fontSize: '1.1em',
                animation: 'pulse 2s ease-in-out infinite'
              }}>
                Watch Full Tutorial
              </Link>
            </div>
            </div>
          </div>
        </section>

      {/* Academy Showcase */}
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
            Academy in Action
            </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.1em',
            color: '#666',
            marginBottom: '60px',
            animation: 'fadeInUp 1s ease-out'
          }}>
            Real stories, real results from our community
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{ animation: 'fadeInLeft 1s ease-out' }}>
              <h3 style={{ fontSize: '2.2em', marginBottom: '20px', lineHeight: 1.2 }}>
                From Novice to Expert
              </h3>
              <p style={{ fontSize: '1.1em', color: '#666', marginBottom: '30px', lineHeight: 1.6 }}>
                Watch how our academy transformed Sarah's career from a content coordinator to a certified ContentFlow architect. Learn about the hands-on projects, real-world scenarios, and expert mentorship that make our program unique.
              </p>
            <div style={{
              display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '30px',
                marginBottom: '30px'
              }}>
                {[
                  { value: '94%', label: 'Certification Pass Rate', delay: 0 },
                  { value: '85%', label: 'Career Advancement', delay: 0.1 },
                  { value: '50K+', label: 'Students Trained', delay: 0.2 }
                ].map((stat, index) => (
                  <div key={index} style={{ 
                    textAlign: 'center',
                    animation: `fadeInUp 0.6s ease-out ${stat.delay}s both`
                  }}>
                    <div style={{ 
                      fontSize: '2.8em', 
                      fontWeight: 'bold', 
                      background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '8px'
                    }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.95em', color: '#666', fontWeight: '500' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/company" className="btn start" style={{
                animation: 'pulse 2s ease-in-out infinite'
              }}>
                View Success Stories
              </Link>
            </div>
            <div style={{
              height: '450px',
              borderRadius: '25px',
              background: 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '8em',
              color: 'white',
              boxShadow: '0 15px 40px rgba(240, 147, 251, 0.4)',
              transition: 'all 0.4s ease',
              cursor: 'pointer',
              animation: 'fadeInRight 1s ease-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) rotate(3deg)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(240, 147, 251, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(240, 147, 251, 0.4)';
            }}>
              <div style={{ animation: 'float 3s ease-in-out infinite' }}>
                🎓
              </div>
            </div>
            </div>
          </div>
        </section>

      {/* Interactive Demos & Guides */}
      <section style={{ 
        padding: '100px 20px', 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e8eaf6 100%)'
      }}>
        <div className="container">
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2em', 
            marginBottom: '15px',
            background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            {safeTextContent(academyData?.interactive_demos?.section_title, 'Interactive Demos & Guides')}
          </h2>
          <p style={{
        textAlign: 'center',
            fontSize: '1em',
            color: '#666',
            marginBottom: '40px',
            animation: 'fadeInUp 1s ease-out'
          }}>
            {safeTextContent(academyData?.interactive_demos?.section_description, 'Hands-on learning experiences to accelerate your skills')}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {(academyData?.interactive_demos_and_guides?.demo_items || []).map((item: any, index: number) => (
              <div key={index} className="post-card">
                <div style={{
                  height: '200px',
                  borderRadius: '12px 12px 0 0',
                  overflow: 'hidden'
                }}>
                  <ImageSync
                    src={item.icon}
                    alt={safeTextContent(item.title, 'Demo')}
                    fallbackSrc="/images/logo.png"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div style={{ padding: '30px' }}>
                  <span style={{ 
                    color: '#6a1b9a', 
                    fontSize: '0.85em', 
                    fontWeight: 'bold',
                    letterSpacing: '1px'
                  }}>
                    {safeTextContent(item.category, 'Guide')}
                  </span>
                  <h3 style={{ margin: '15px 0', fontSize: '1.4em' }}>
                    {safeTextContent(item.title, 'Interactive Demo')}
                  </h3>
                  <p style={{ color: '#666', lineHeight: 1.6, marginBottom: '20px' }}>
                    {safeTextContent(item.description, 'Learn more about this feature')}
                  </p>
                  <a 
                    href={item.link?.href || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#6a1b9a', fontWeight: 'bold', textDecoration: 'none' }}
                  >
                    {safeTextContent(item.link?.title, 'Learn More')} →
                  </a>
        </div>
      </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
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
            Frequently Asked Questions
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.1em',
            color: '#666',
            marginBottom: '60px',
            animation: 'fadeInUp 1s ease-out'
          }}>
            Everything you need to know about our academy
          </p>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq: any, index: number) => (
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
              <Link to="/contact" className="btn talk">Contact Support →</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Master ContentFlow?</h2>
          <p>Start learning today with our comprehensive courses and tutorials.</p>
          <div className="cta-buttons">
            <Link to="/start" className="btn start">Start Free Trial</Link>
            <Link to="/contact" className="btn talk">Get Support</Link>
          </div>
        </div>
      </section>
      </div>
    );
};

export default Academy;
