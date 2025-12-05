import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContentstack, onEntryChange } from '../context/ContentstackContext';
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
        console.log('Academy page data:', data);
        setAcademyData(data);
      } catch (error) {
        console.error('Error loading academy content:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadContent();
    
    // Listen for Live Preview content changes
    onEntryChange(() => {
      console.log('Academy content changed - reloading...');
      loadContent();
    });}, [fetchContent]);

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
      <section className="hero-section" style={{
        background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 50%, #ab47bc 100%)'
      }}>
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
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {((academyData?.course_categories && academyData.course_categories.length > 0) ? academyData.course_categories : [
              { 
                icon: '', 
                title: 'Getting Started', 
                description: 'Learn the basics of ContentFlow and set up your first project', 
                count: '12 courses',
                feature_image: {
                  url: '/images/Coding_Thumbnail_Kickstart_NextJS.jpg',
                  title: 'Educational Learning Environment'
                }
              },
              { 
                icon: '', 
                title: 'Platform Fundamentals', 
                description: 'Deep dive into core concepts, APIs, and architecture', 
                count: '18 Courses',
                feature_image: {
                  url: '/images/About_Content_Models.png',
                  title: 'API and Platform Architecture'
                }
              },
              { 
                icon: '', 
                title: 'Content Modeling', 
                description: 'Master content types, schemas, and data structures', 
                count: '8 Courses',
                feature_image: {
                  url: '/images/headless-cms-diagram.png',
                  title: 'Content Design and Architecture'
                }
              },
              { 
                icon: '', 
                title: 'Launch Foundations', 
                description: 'Automating descriptions in ContentFlow with AI', 
                count: '15 Courses',
                feature_image: {
                  url: '/images/Workflow Automation.jpg',
                  title: 'Integration and Automation'
                }
              },
              { 
                icon: '', 
                title: 'Personalize Foundations', 
                description: 'Analytics & Reporting to track your success', 
                count: '10 courses',
                feature_image: {
                  url: '/images/Analytics.jpg',
                  title: 'Learning Analytics and Progress'
                }
              },
              { 
                icon: '', 
                title: 'Automate with Contentstack', 
                description: 'Understanding Journey Orchestration with Flows', 
                count: '6 courses',
                feature_image: {
                  url: '/images/Security.jpg',
                  title: 'Cybersecurity and Data Protection'
                }
              }
            ]).map((category: any, index: number) => {
              const gradients = [
                ['#1a1a1a', '#2d2d2d'],      // Black/Dark Gray
                ['#6a1b9a', '#8e24aa'],      // Purple
                ['#6a1b9a', '#8e24aa'],      // Purple
                ['#1e3a5f', '#2c5282'],      // Dark Navy Blue
                ['#1e3a5f', '#2c5282'],      // Dark Navy Blue
                ['#6a1b9a', '#8e24aa']       // Purple
              ];
              return (
              <a
                key={index}
                href="#course-categories"
                style={{
                  textDecoration: 'none',
                  height: '380px',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  color: 'white',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 12px 35px rgba(0,0,0,0.15)',
                  background: `linear-gradient(135deg, ${gradients[index % 6][0]} 0%, ${gradients[index % 6][1]} 100%)`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.boxShadow = '0 20px 45px rgba(106, 27, 154, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.15)';
                }}
              >
                {/* Decorative Pattern Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05) 0%, transparent 50%)',
                  pointerEvents: 'none',
                  zIndex: 1
                }}></div>
                
                {/* Course Count Badge - Top Left */}
                <div style={{
                  position: 'absolute',
                  top: '25px',
                  left: '25px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  color: '#6a1b9a',
                  padding: '8px 18px',
                  borderRadius: '25px',
                  fontSize: '0.85em',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  zIndex: 3
                }}>
                  {category.count}
                </div>
                
                {/* Image Container - Center */}
                <div style={{
                  position: 'relative',
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '80px 30px 30px 30px',
                  zIndex: 2
                }}>
                  <img
                    src={category.feature_image?.url || category.icon?.url || category.feature_image || category.icon}
                    alt={safeTextContent(category.title, 'Course Category')}
                    style={{
                      maxWidth: '70%',
                      maxHeight: '140px',
                      objectFit: 'contain',
                      filter: 'brightness(1.1) contrast(1.1)',
                      opacity: 0.85
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                
                {/* Content - Bottom */}
                <div style={{
                  position: 'relative',
                  zIndex: 3,
                  padding: '30px',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, transparent 100%)'
                }}>
                  <h3 style={{ 
                    fontSize: '1.7em', 
                    fontWeight: '800',
                    marginBottom: '12px',
                    color: 'white',
                    lineHeight: 1.2,
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                  }}>
                    {safeTextContent(category.title, 'Course Category')}
                  </h3>
                  <p style={{ 
                    fontSize: '1.05em', 
                    lineHeight: 1.5,
                    color: 'rgba(255, 255, 255, 0.95)',
                    margin: 0,
                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
                  }}>
                    {safeTextContent(category.description, 'Description')}
                  </p>
                </div>
              </a>
              );
            })}
          </div>
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
            gap: '50px',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Video Thumbnail with Play Button */}
            <div style={{
              position: 'relative',
              height: '380px',
              borderRadius: '30px',
              background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(106, 27, 154, 0.35)',
              transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              cursor: 'pointer',
              animation: 'fadeInLeft 1s ease-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03) translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 25px 70px rgba(106, 27, 154, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(106, 27, 154, 0.35)';
            }}>
              {/* TV Icon Background */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '12em',
                opacity: 0.15,
                animation: 'float 4s ease-in-out infinite'
              }}>
                
              </div>
              
              {/* Content */}
              <div style={{
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
                padding: '40px'
              }}>
                {/* Play Button */}
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '30px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  animation: 'pulse 2s ease-in-out infinite'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.15)';
                  e.currentTarget.style.background = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                }}>
                  <div style={{
                    width: 0,
                    height: 0,
                    borderLeft: '30px solid #6a1b9a',
                    borderTop: '20px solid transparent',
                    borderBottom: '20px solid transparent',
                    marginLeft: '8px'
                  }}></div>
                </div>
                
                {/* Tutorial Info Badge */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  padding: '15px 30px',
                  borderRadius: '50px',
                  color: 'white',
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  border: '2px solid rgba(255, 255, 255, 0.3)'
                }}>
                   Click to Watch Tutorial
                </div>
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
                  Duration: {academyData?.featured_tutorial?.duration || '45 minutes'}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Instructor: {academyData?.featured_tutorial?.instructor || 'Sarah Johnson'}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Rating: {safeTextContent(academyData?.featured_tutorial?.rating, '4.8')}/5 ({safeTextContent(academyData?.featured_tutorial?.views, '2,341')} views)
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

      {/* Learning Resources - Case Studies & Guides */}
      <section style={{ 
        padding: '100px 20px', 
        background: 'white'
      }}>
        <div className="container">
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.8em', 
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'fadeInUp 0.8s ease-out',
            fontWeight: '700'
          }}>
            Learning Resources
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.2em',
            color: '#666',
            marginBottom: '60px',
            animation: 'fadeInUp 1s ease-out'
          }}>
            Deep-dive into specific features and real-world use cases
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '35px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {[
              { 
                category: 'Case Study',
                title: 'Understanding Timeline',
                description: '"Timeline" is a feature for content managers that allows you to preview how your website will appear on specific dates and times in the future',
                link: '#',
                icon: '',
                image: '/images/About_Content_Models.png'
              },
              { 
                category: 'Best Practices',
                title: 'Content Modeling Strategy',
                description: 'Learn how to design flexible, scalable content models that grow with your business needs',
                link: '#',
                icon: '',
                image: '/images/headless-cms-content-hub-diagram.png'
              },
              { 
                category: 'Tutorial',
                title: 'API Integration Guide',
                description: 'Master our REST API and SDKs to build powerful integrations with your existing tools',
                link: '#',
                icon: '',
                image: '/images/headless-cms-diagram.png'
              }
            ].map((resource, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                border: '2px solid rgba(106, 27, 154, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(106, 27, 154, 0.2)';
                e.currentTarget.style.borderColor = '#6a1b9a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'rgba(106, 27, 154, 0.08)';
              }}>
                {/* Image Container */}
                <div style={{
                  position: 'relative',
                  height: '220px',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)'
                }}>
                  <ImageSync
                    src={resource.image}
                    alt={resource.title}
                    fallbackSrc="/images/logo.png"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                  {/* Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, transparent 0%, rgba(106, 27, 154, 0.7) 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '20px'
                  }}>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      color: '#6a1b9a',
                      padding: '8px 20px',
                      borderRadius: '20px',
                      fontSize: '0.85em',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {resource.category}
                    </div>
                  </div>
                  {/* Icon Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    width: '60px',
                    height: '60px',
                    background: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2em',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.2)'
                  }}>
                    {resource.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div style={{ padding: '30px' }}>
                  <h3 style={{
                    fontSize: '1.5em',
                    marginBottom: '15px',
                    color: '#1a1a1a',
                    fontWeight: '700',
                    lineHeight: '1.3'
                  }}>
                    {resource.title}
                  </h3>
                  <p style={{
                    color: '#666',
                    lineHeight: '1.7',
                    marginBottom: '25px',
                    fontSize: '1.05em'
                  }}>
                    {resource.description}
                  </p>
                  <a 
                    href={resource.link}
                    style={{
                      color: '#6a1b9a',
                      fontWeight: 'bold',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '1.05em',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.gap = '12px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.gap = '8px';
                    }}
                  >
                    Read Case Study
                    <span style={{ fontSize: '1.2em' }}>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Showcase */}
      <section style={{ 
        padding: '120px 20px', 
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f4ff 50%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Background Elements */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(106, 27, 154, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite',
          pointerEvents: 'none'
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '3.2em', 
            marginBottom: '25px',
              background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 50%, #ab47bc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'fadeInUp 0.8s ease-out',
            fontWeight: '800',
            letterSpacing: '-1px'
          }}>
            Academy in Action
            </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.3em',
            color: '#666',
            marginBottom: '70px',
            maxWidth: '650px',
            margin: '0 auto 70px',
            lineHeight: '1.6',
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
              <h3 style={{ fontSize: '2.5em', marginBottom: '25px', lineHeight: 1.2, fontWeight: '700' }}>
                From Novice to Expert
              </h3>
              <p style={{ fontSize: '1.15em', color: '#666', marginBottom: '40px', lineHeight: 1.7 }}>
                Watch how our academy transformed Sarah's career from a content coordinator to a certified ContentFlow architect. Learn about the hands-on projects, real-world scenarios, and expert mentorship that make our program unique.
              </p>
            <div style={{
              display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '25px',
                marginBottom: '40px'
              }}>
                {[
                  { value: '94%', label: 'Certification Pass Rate', icon: '', delay: 0 },
                  { value: '85%', label: 'Career Advancement', icon: '', delay: 0.1 },
                  { value: '50K+', label: 'Students Trained', icon: '', delay: 0.2 }
                ].map((stat, index) => (
                  <div key={index} style={{ 
                    textAlign: 'center',
                    background: 'white',
                    padding: '25px 15px',
                    borderRadius: '20px',
                    boxShadow: '0 5px 20px rgba(106, 27, 154, 0.1)',
                    border: '2px solid rgba(106, 27, 154, 0.08)',
                    transition: 'all 0.3s ease',
                    animation: `fadeInUp 0.6s ease-out ${stat.delay}s both`,
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(106, 27, 154, 0.2)';
                    e.currentTarget.style.borderColor = '#6a1b9a';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(106, 27, 154, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(106, 27, 154, 0.08)';
                  }}>
                    <div style={{ 
                      fontSize: '3.2em', 
                      fontWeight: '800', 
                      background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '10px',
                      letterSpacing: '-1px'
                    }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.9em', color: '#666', fontWeight: '600', lineHeight: '1.4' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/company" className="btn start" style={{
                animation: 'pulse 2s ease-in-out infinite',
                fontSize: '1.15em',
                padding: '16px 40px',
                textDecoration: 'none'
              }}>
                View Success Stories
              </Link>
            </div>
            
            {/* Enhanced Graduation Cap Animation */}
            <div style={{
              position: 'relative',
              height: '500px',
              borderRadius: '30px',
              background: 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 50%, #8e24aa 100%)',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(106, 27, 154, 0.35)',
              transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              cursor: 'pointer',
              animation: 'fadeInRight 1s ease-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03) rotate(2deg)';
              e.currentTarget.style.boxShadow = '0 25px 70px rgba(106, 27, 154, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(106, 27, 154, 0.35)';
            }}>
              {/* Decorative Background Circles */}
              <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 6s ease-in-out infinite'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '15%',
                right: '15%',
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 8s ease-in-out infinite reverse'
              }}></div>
              
              {/* Graduation Cap */}
              <div style={{
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1
              }}>
                <div style={{ 
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  animation: 'float 4s ease-in-out infinite',
                  filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))'
                }}>
                  Certificate
                </div>
                
                {/* Success Badge */}
                <div style={{
                  marginTop: '30px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  padding: '18px 35px',
                  borderRadius: '50px',
                  color: 'white',
                  fontSize: '1.2em',
                  fontWeight: 'bold',
                  border: '3px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  animation: 'pulse 2.5s ease-in-out infinite'
                }}>
                   Excellence in Learning
                </div>
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
                    {safeTextContent(item.link?.title, 'Learn More')}
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
              <Link to="/contact" className="btn talk" style={{ textDecoration: 'none' }}>Contact Support</Link>
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
