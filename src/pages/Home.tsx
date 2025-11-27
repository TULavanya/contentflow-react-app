import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContentstack } from '../context/ContentstackContext';
import SEOHead from '../components/SEOHead';
import LoadingSpinner from '../components/LoadingSpinner';
import ImageSync, { safeTextContent, safeIconContent } from '../components/ImageSync';

const Home: React.FC = () => {
  const { fetchContent } = useContentstack();
  const [homeData, setHomeData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      try {
        const data = await fetchContent('home_page');
        console.log('Home page data:', data);
        
        if (data) {
          console.log('✅ CONTENTSTACK DATA RECEIVED:');
          console.log('');
          console.log('🔎 CHECKING EXPECTED FIELD UIDs:');
          console.log('  hero_title:', data.hero_title);
          console.log('  hero_subtitle:', data.hero_subtitle);
          console.log('  hero_stats:', data.hero_stats);
          console.log('  trusted_brands:', data.trusted_brands, '← MARQUEE DATA');
          console.log('  features:', data.features);
          console.log('  cta_primary:', data.cta_primary);
          console.log('  cta_secondary:', data.cta_secondary);
          console.log('');
          console.log('🔑 ALL FIELD UIDs IN YOUR CONTENTSTACK ENTRY:');
          console.log(Object.keys(data).filter(key => !key.startsWith('_') && key !== 'uid' && key !== 'locale' && key !== 'created_by' && key !== 'updated_by'));
          console.log('');
          console.log('💡 If any field shows "undefined", check field UIDs in Contentstack');
          console.log('📦 RAW DATA:', JSON.stringify(data, null, 2));
          
          // Count how many fields are actually filled
          const filledFields = [
            data.hero_title,
            data.hero_subtitle,
            data.hero_stats,
            data.trusted_brands,
            data.features,
            data.cta_primary,
            data.cta_secondary
          ].filter(field => field !== undefined && field !== null);
          
          console.log(`\nSTATUS: ${filledFields.length}/7 fields have data`);
          
          if (filledFields.length === 0) {
            console.warn('⚠️ DATA FETCHED BUT ALL FIELDS ARE EMPTY!');
            console.log('🔧 FIX: Check that field UIDs in Contentstack match:');
            console.log('   - hero_title, hero_subtitle, hero_stats, trusted_brands, features, cta_primary, cta_secondary');
          }
        } else {
          console.warn('No data received - using fallback content');
          console.log('Create and publish a home_page entry in Contentstack');
        }
        
        setHomeData(data);
      } catch (error) {
        console.error('Error loading home content:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, [fetchContent]);

  // Use only Contentstack data - no fallbacks
  const brandLogos = homeData?.trusted_brands || [];

  // Fallback testimonials data
  const testimonials = homeData?.testimonials || [
    {
      testimonial_text: 'ContentFlow has transformed how we manage and deliver content across all our channels. The results have been phenomenal.',
      customer_name: 'Sarah Johnson',
      customer_title: 'VP of Digital Marketing',
      customer_company: 'TechCorp',
      customer_photo: '/images/Renee.jpg'
    },
    {
      testimonial_text: 'The flexibility and power of ContentFlow allowed us to launch our global platform in record time. Truly exceptional.',
      customer_name: 'Michael Chen',
      customer_title: 'Chief Technology Officer',
      customer_company: 'GlobalRetail Inc',
      customer_photo: '/images/Conor.jpg'
    },
    {
      testimonial_text: 'We\'ve seen a 300% increase in content velocity and our team couldn\'t be happier. ContentFlow is a game-changer.',
      customer_name: 'Emily Rodriguez',
      customer_title: 'Head of Content',
      customer_company: 'MediaFlow',
      customer_photo: '/images/Jessica.png'
    }
  ];

  // Fallback insights/resources data
  const insightsResources = homeData?.insights_section?.resource_items || [
    {
      title: 'The Complete Guide to Headless CMS',
      description: 'Learn how headless CMS architecture can transform your digital experiences and accelerate time-to-market.',
      resource_type: 'GUIDE',
      icon: '/images/Ebook.svg',
      resource_link: { href: '/blogs', title: 'Download Guide' }
    },
    {
      title: '2024 Digital Experience Trends',
      description: 'Discover the top trends shaping the future of digital experiences and customer engagement.',
      resource_type: 'REPORT',
      icon: '/images/Research.webp',
      resource_link: { href: '/blogs', title: 'Read Report' }
    },
    {
      title: 'AI-Powered Personalization Deep Dive',
      description: 'Explore how AI and machine learning are revolutionizing content personalization at scale.',
      resource_type: 'RESEARCH',
      icon: '/images/AI Personalization.jpg',
      resource_link: { href: '/blogs', title: 'Learn More' }
    }
  ];

  // Show loading spinner while fetching data
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="home-page">
      {/* SEO Meta Tags */}
      <SEOHead seoData={homeData?.seo_metadata} />
      
      {/* Hero Section */}
      <section className="hero-section" style={{
        background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 50%, #ab47bc 100%)',
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="animated-title" {...(homeData?.$?.hero_section?.hero_title || homeData?.$?.hero_title || {})}>
            {safeTextContent(homeData?.hero_section?.hero_title || homeData?.hero_title, 'The World\'s Best Digital Experiences Start Here')}
          </h1>
          <p className="animated-subtitle" {...(homeData?.$?.hero_section?.hero_subtitle || homeData?.$?.hero_subtitle || {})}>
            {safeTextContent(homeData?.hero_section?.hero_subtitle || homeData?.hero_subtitle, 'Unlock your future with intelligent agents, AI-powered automation, and advanced workflows—all in one platform.')}
          </p>
          <div className="hero-stats">
            {((homeData?.hero_section?.hero_stats && homeData.hero_section.hero_stats.length > 0) 
              ? homeData.hero_section.hero_stats 
              : (homeData?.hero_stats && homeData.hero_stats.length > 0)
              ? homeData.hero_stats
              : [
                { value: '500+', label: 'Enterprise Clients' },
                { value: '150+', label: 'Countries Worldwide' },
                { value: '99.9%', label: 'Uptime Guarantee' }
              ]).map((stat: any, index: number) => (
              <div key={index} className="stat animated-stat">
                <strong>{safeTextContent(stat.value, '')}</strong>
                <span>{safeTextContent(stat.label, '')}</span>
            </div>
            ))}
          </div>
          <div className="hero-buttons">
            <Link to="/start" className="btn start">
              {safeTextContent(homeData?.hero_section?.cta_primary?.title || homeData?.cta_primary?.title || homeData?.cta_primary, 'Start Free Trial')}
              </Link>
            <Link to="/talk" className="btn talk">
              {safeTextContent(homeData?.hero_section?.cta_secondary?.title || homeData?.cta_secondary?.title || homeData?.cta_secondary, 'Request a Demo')}
              </Link>
          </div>
        </div>
        {(() => {
          const videoUrl = homeData?.hero_section?.background_video_url || "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99806-large.mp4";
          
          // Check if it's a YouTube URL
          const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
          
          if (isYouTube) {
            // Convert YouTube URL to embed format
            let videoId = '';
            if (videoUrl.includes('youtu.be/')) {
              videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
            } else if (videoUrl.includes('youtube.com/watch?v=')) {
              videoId = videoUrl.split('v=')[1].split('&')[0];
            }
            
            const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`;
            
            return (
              <iframe
                className="hero-video"
                src={embedUrl}
                title="Hero Background Video"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                style={{
                  pointerEvents: 'none',
                  width: '177.77777778vh',
                  minWidth: '100%',
                  height: '56.25vw',
                  minHeight: '100%'
                }}
              />
            );
          }
          
          // Regular video file (MP4, etc.)
          return (
            <video autoPlay muted loop className="hero-video">
              <source src={videoUrl} type="video/mp4" />
            </video>
          );
        })()}
      </section>

      {/* Trusted By Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e8eaf6 100%)', 
        padding: '80px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <h3 style={{ 
        textAlign: 'center',
            color: '#6a1b9a', 
            marginBottom: '50px', 
            fontSize: '1.4em',
            fontWeight: 'bold',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            animation: 'fadeInUp 1s ease-out'
          }}>
            Trusted by industry leaders worldwide
          </h3>
          
          {/* Scrolling Brand Logos Marquee */}
          <style>{`
            @keyframes scrollHome {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .home-logo-track {
              display: flex;
              animation: scrollHome 20s linear infinite;
              width: fit-content;
            }
            .home-logo-track:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div style={{
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}>
            <div className="home-logo-track">
              {/* First set of logos */}
              {(brandLogos.length > 0 ? brandLogos : ['ASICS', 'Walmart', 'Mattel', 'Crocs', 'Alaska Airlines', 'MongoDB', 
              'Glassdoor', 'TopGolf', 'Callaway', 'Steve Madden']).map((brand: any, index: number) => (
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
                  {safeTextContent(brand, '')}
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {(brandLogos.length > 0 ? brandLogos : ['ASICS', 'Walmart', 'Mattel', 'Crocs', 'Alaska Airlines', 'MongoDB', 
              'Glassdoor', 'TopGolf', 'Callaway', 'Steve Madden']).map((brand: any, index: number) => (
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
                  {safeTextContent(brand, '')}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section style={{ padding: '100px 20px', background: 'white' }}>
          <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 80px' }}>
            <h2 style={{ fontSize: '3em', marginBottom: '20px', color: '#333' }}>
              {safeTextContent(homeData?.platform_section?.section_heading, 'Our Platform')}
            </h2>
            <p style={{ fontSize: '1.3em', color: '#666', lineHeight: 1.6 }}>
              {safeTextContent(homeData?.platform_section?.section_description, 'ContentFlow Edge combines the power of a headless CMS with real-time customer analytics to improve the way you understand your audiences and deliver content to them.')}
            </p>
            <div style={{ marginTop: '40px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link 
                to={homeData?.platform_section?.primary_button?.href || '/platform'} 
                className="btn start"
              >
                    {safeTextContent(homeData?.platform_section?.primary_button?.title, 'Explore Our Platform')}
              </Link>
              <Link 
                to={homeData?.platform_section?.secondary_button?.href || '/start'} 
                className="btn talk"
              >
                {safeTextContent(homeData?.platform_section?.secondary_button?.title, 'Try for Free')}
              </Link>
            </div>
          </div>

          {/* Enhanced Feature Cards with Full Background Images */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            marginTop: '60px'
          }}>
            {(homeData?.features || []).map((feature: any, index: number) => (
              <Link
                key={index}
                to="/platform"
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
                {/* Background Image from Contentstack */}
                <img
                  src={feature.icon?.url || feature.feature_image?.url || feature.image?.url || feature.icon || feature.feature_image || feature.image}
                  alt={safeTextContent(feature.title, 'Feature')}
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
                    console.error('Feature image failed to load:', feature.icon || feature.feature_image);
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
                    {safeTextContent(feature.title, 'Feature')}
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
                    {safeTextContent(feature.description, 'Description')}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="testimonials-section">
        <div className="container">
          <h2>Powering Brand Breakthroughs</h2>
          <div className="testimonials-grid">
            {testimonials.slice(0, 3).map((testimonial: any, index: number) => (
              <div key={index} className="testimonial-card">
                <div className="rating">
                  ★★★★★
                </div>
              <div className="testimonial-content">
                  <p>"{safeTextContent(testimonial.testimonial_text, 'Customer testimonial')}"</p>
              </div>
              <div className="testimonial-author">
                  <ImageSync
                    src={testimonial.customer_photo} 
                    alt={safeTextContent(testimonial.customer_name, 'Customer Photo')}
                    fallbackSrc="/images/logo.png"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                <div>
                    <strong>{safeTextContent(testimonial.customer_name, 'Customer Name')}</strong>
                    <span>{safeTextContent(testimonial.customer_title, 'Title')}, {safeTextContent(testimonial.customer_company, 'Company')}</span>
                </div>
              </div>
            </div>
            ))}
              </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/company" className="btn start">View All Customer Stories</Link>
                </div>
              </div>
      </section>

      {/* Latest Insights */}
      <section style={{ 
        padding: '100px 20px', 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e8eaf6 100%)',
        position: 'relative'
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
            {safeTextContent(homeData?.insights_section?.section_heading, 'Our Latest Insights')}
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.1em',
            color: '#666',
            marginBottom: '60px',
            animation: 'fadeInUp 1s ease-out'
          }}>
            {safeTextContent(homeData?.insights_section?.section_subtitle, 'Explore our latest research, guides, and industry reports')}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {insightsResources.map((resource: any, index: number) => (
              <div key={index} className="post-card">
                <div style={{
                  height: '200px',
                  borderRadius: '12px 12px 0 0',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <ImageSync
                    src={resource.icon || resource.resource_image}
                    alt={safeTextContent(resource.title, 'Resource Image')}
                    fallbackSrc="/images/logo.png"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  {/* Overlay with resource type badge */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
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
                    {safeTextContent(resource.resource_type, 'RESOURCE')}
            </div>
                  {/* Gradient overlay for better text readability */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
                    pointerEvents: 'none'
                  }} />
              </div>
                <div style={{ padding: '30px' }}>
                  <h3 style={{ margin: '0 0 15px 0', fontSize: '1.4em' }}>
                    {safeTextContent(resource.title, 'Resource Title')}
                  </h3>
                  <p style={{ color: '#666', lineHeight: 1.6 }}>
                    {safeTextContent(resource.description, 'Resource description')}
                  </p>
                  <Link 
                    to={resource.resource_link?.href || '/blogs'} 
                    style={{ color: '#6a1b9a', fontWeight: 'bold', textDecoration: 'none', marginTop: '15px', display: 'inline-block' }}
                  >
                    {safeTextContent(resource.resource_link?.title, 'Read More')}
                  </Link>
                </div>
              </div>
            ))}
            </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link 
              to={homeData?.insights_section?.view_all_link?.href || '/blogs'} 
              className="btn talk"
            >
              {safeTextContent(homeData?.insights_section?.view_all_link?.title, 'View All Resources')}
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ 
        padding: '120px 20px', 
        background: 'linear-gradient(135deg, #4b2e83 0%, #6a1b9a 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '4px solid rgba(255, 255, 255, 0.2)',
        borderBottom: '4px solid rgba(255, 255, 255, 0.2)'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '8%',
          width: '120px',
          height: '120px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '10%',
          width: '80px',
          height: '80px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: '100px',
          height: '100px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite'
        }}></div>
        
        {/* Floating Emojis */}
        <div style={{
          position: 'absolute',
          top: '25%',
          right: '20%',
          fontSize: '2em',
          animation: 'float 7s ease-in-out infinite',
          opacity: 0.7
        }}>🚀</div>
        <div style={{
          position: 'absolute',
          bottom: '30%',
          right: '25%',
          fontSize: '1.8em',
          animation: 'float 9s ease-in-out infinite reverse',
          opacity: 0.6,
          display: 'none'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '40%',
          left: '25%',
          fontSize: '2.2em',
          animation: 'float 8s ease-in-out infinite',
          opacity: 0.8
        }}>💫</div>
        <div style={{
          position: 'absolute',
          bottom: '40%',
          left: '30%',
          fontSize: '1.9em',
          animation: 'float 6s ease-in-out infinite reverse',
          opacity: 0.7
        }}>🌟</div>

        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ 
            fontSize: '3.2em', 
            marginBottom: '25px',
            color: 'white',
            fontWeight: 'bold',
            textShadow: '0 4px 20px rgba(0,0,0,0.3), 0 2px 10px rgba(0,0,0,0.2)',
            animation: 'fadeInUp 0.8s ease-out',
            letterSpacing: '-1px'
          }}>
            Reimagine What's Possible
          </h2>
          <p style={{
            fontSize: '1.3em',
            color: 'rgba(255,255,255,0.95)',
            marginBottom: '50px',
            animation: 'fadeInUp 1s ease-out',
            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
            fontWeight: '500',
            maxWidth: '700px',
            margin: '0 auto 50px auto'
          }}>
            🌈 Because with ContentFlow, it is possible. And we'll help you get there. 🌈
          </p>
          <div style={{
            display: 'flex',
            gap: '25px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeInUp 1.2s ease-out'
          }}>
            <Link to="/talk" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              color: '#6a1b9a',
              padding: '18px 36px',
              borderRadius: '35px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1em',
              transition: 'all 0.4s ease',
              boxShadow: '0 6px 25px rgba(0,0,0,0.2)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255,255,255,0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 35px rgba(0,0,0,0.3)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 25px rgba(0,0,0,0.2)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
            }}
            >🎯 Request a Demo</Link>
            <Link to="/start" style={{
              background: 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 50%, #8e24aa 100%)',
              color: 'white',
              padding: '18px 36px',
              borderRadius: '35px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1em',
              boxShadow: '0 6px 25px rgba(74, 20, 140, 0.4)',
              transition: 'all 0.4s ease',
              textShadow: '0 1px 3px rgba(0,0,0,0.3)',
              border: '2px solid rgba(255,255,255,0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 35px rgba(74, 20, 140, 0.6)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #311b92 0%, #4a148c 50%, #6a1b9a 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 25px rgba(74, 20, 140, 0.4)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 50%, #8e24aa 100%)';
            }}
            >🚀 Start Free Trial</Link>
          </div>
        </div>
        
        {/* Animation keyframes */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-20px) rotate(5deg); }
            50% { transform: translateY(-15px) rotate(-3deg); }
            75% { transform: translateY(-25px) rotate(3deg); }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default Home;
