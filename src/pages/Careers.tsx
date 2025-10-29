import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContentstack } from '../context/ContentstackContext';
import SEOHead from '../components/SEOHead';
import LoadingSpinner from '../components/LoadingSpinner';
import LargeFeatureCard, { LargeFeatureGrid } from '../components/LargeFeatureCard';
import ImageSync, { safeTextContent, safeIconContent } from '../components/ImageSync';

const Careers: React.FC = () => {
  const { fetchContent } = useContentstack();
  const [careersData, setCareersData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      try {
        const data = await fetchContent('careers_page');
        console.log('💼 Careers page data:', data);
        setCareersData(data);
      } catch (error) {
        console.error('Error loading careers content:', error);
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
  const jobOpenings = careersData?.job_openings || [
    {
      title: 'Senior Full Stack Engineer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      description: 'Build scalable systems that power digital experiences for millions of users worldwide.'
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote / New York',
      type: 'Full-time',
      description: 'Craft beautiful, intuitive interfaces that delight users and solve complex problems.'
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote / London',
      type: 'Full-time',
      description: 'Help our customers succeed with strategic guidance and hands-on support.'
    },
    {
      title: 'AI/ML Engineer',
      department: 'Engineering',
      location: 'Remote / Berlin',
      type: 'Full-time',
      description: 'Develop intelligent agents and ML models that transform content management.'
    },
    {
      title: 'Content Marketing Manager',
      department: 'Marketing',
      location: 'Remote / Austin',
      type: 'Full-time',
      description: 'Tell our story through compelling content that educates and inspires our audience.'
    },
    {
      title: 'Developer Advocate',
      department: 'Developer Relations',
      location: 'Remote',
      type: 'Full-time',
      description: 'Empower developers worldwide through education, community building, and advocacy.'
    }
  ];

  const perks = [
    { 
      icon: '🏥', 
      title: 'Health & Wellness Benefits', 
      description: 'Comprehensive health, dental, and vision coverage plus wellness programs to keep you at your best.',
      feature_image: {
        url: '/images/Customer First.jpg',
        title: 'Health and Wellness Programs'
      }
    },
    { 
      icon: '🌴', 
      title: 'Unlimited PTO Policy', 
      description: 'Take the time you need to recharge and stay fresh. We trust our team to manage their time responsibly.',
      feature_image: {
        url: '/images/Lightning fast.jpg',
        title: 'Vacation and Time Off'
      }
    },
    { 
      icon: '💼', 
      title: '401(k) Retirement Matching', 
      description: 'We match up to 6% of your contributions to help secure your financial future and retirement goals.',
      feature_image: {
        url: '/images/Customer Analytics.jpg',
        title: 'Financial Planning and Investment'
      }
    },
    { 
      icon: '🏠', 
      title: 'Remote-First Culture', 
      description: 'Work from anywhere with flexible hours. We believe in work-life balance and trust in our team.',
      feature_image: {
        url: '/images/Global.jpg',
        title: 'Remote Work and Flexibility'
      }
    },
    { 
      icon: '📚', 
      title: 'Learning & Development Budget', 
      description: '$2,000/year for courses, conferences, books, and certifications to advance your skills and career.',
      feature_image: {
        url: '/images/Innovation.jpg',
        title: 'Professional Development and Growth'
      }
    },
    { 
      icon: '🖥️', 
      title: 'Premium Equipment & Setup', 
      description: 'Top-of-the-line laptop, monitor, and complete home office setup to maximize your productivity.',
      feature_image: {
        url: '/images/Coding_Thumbnail_Kickstart_NextJS.jpg',
        title: 'Modern Office Equipment'
      }
    },
    { 
      icon: '👶', 
      title: 'Parental Leave Program', 
      description: '16 weeks paid parental leave for all parents, plus flexible return-to-work options and support.',
      feature_image: {
        url: '/images/Partnership.jpg',
        title: 'Family and Parental Support'
      }
    },
    { 
      icon: '🎉', 
      title: 'Team Events & Culture', 
      description: 'Regular virtual and in-person team gatherings, celebrations, and culture-building activities.',
      feature_image: {
        url: '/images/Scalable.jpg',
        title: 'Team Building and Events'
      }
    }
  ];

  return (
    <div className="careers-page">
      <SEOHead seoData={careersData?.seo_metadata} />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="animated-title">
            {careersData?.hero_section?.hero_title || 'Build Your Career at ContentFlow'}
          </h1>
          <p className="animated-subtitle">
            {careersData?.hero_section?.hero_subtitle || 'Join a team of talented, passionate people building the future of digital experiences.'}
          </p>
          <div className="hero-stats">
            {(careersData?.hero_section?.hero_stats || [
              { stat_value: '200+', stat_label: 'Team Members' },
              { stat_value: '15+', stat_label: 'Countries' },
              { stat_value: '4.8★', stat_label: 'Glassdoor Rating' }
            ]).map((stat: any, index: number) => (
              <div key={index} className="stat animated-stat">
                <strong>{safeTextContent(stat.stat_value, '100+')}</strong>
                <span>{safeTextContent(stat.stat_label, 'Statistic')}</span>
              </div>
            ))}
          </div>
          <div className="hero-buttons">
            <Link to="#openings" className="btn start">View Open Positions</Link>
            <Link to="#culture" className="btn talk">Learn About Our Culture</Link>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
            {careersData?.company_values?.section_title || 'Our Values'}
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.1em',
            color: '#666',
            marginBottom: '60px',
            animation: 'fadeInUp 1s ease-out'
          }}>
            {careersData?.company_values?.section_subtitle || 'The principles that guide everything we do'}
          </p>
          
          <div style={{
              display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px'
          }}>
            {(careersData?.company_values?.values || []).map((value: any, index: number) => (
              <div key={index} className="feature-card" style={{ 
                textAlign: 'center',
                animation: `fadeInUp 0.6s ease-out ${0.1 * (index + 1)}s both`
              }}>
                <div style={{ 
                  width: '120px',
                  height: '120px',
                  margin: '0 auto 20px',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                  animation: `float 3s ease-in-out infinite ${0.5 * index}s`
                }}>
                  <ImageSync
                    src={value.icon}
                    alt={safeTextContent(value.value_title, 'Company Value')}
                    fallbackSrc="/images/logo.png"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <h3 style={{ marginBottom: '10px', fontSize: '1.5em', color: '#6a1b9a' }}>{safeTextContent(value.value_title, 'Company Value')}</h3>
                <p style={{ color: '#666', lineHeight: 1.6 }}>
                  {safeTextContent(value.value_description, 'Value description')}
                </p>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* Perks & Benefits */}
      <section style={{ padding: '100px 20px', background: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5em', marginBottom: '20px' }}>
            {careersData?.perks_and_benefits?.section_title || 'Perks & Benefits'}
          </h2>
          <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#666', marginBottom: '60px', maxWidth: '700px', margin: '0 auto 60px' }}>
            {careersData?.perks_and_benefits?.section_description || "We invest in our people because they're the heart of everything we do."}
          </p>

          <LargeFeatureGrid gap="40px">
            {(careersData?.perks_and_benefits?.perks || perks).map((perk: any, index: number) => {
              const categories = ['Health', 'Time-Off', 'Financial', 'Flexibility', 'Learning', 'Equipment', 'Family', 'Culture'];
              return (
                <LargeFeatureCard
                  key={index}
                  title={perk.perk_title || perk.title}
                  description={perk.perk_description || perk.description}
                  featureImage={perk.icon || perk.feature_image}
                  link="/contact"
                  linkText="Join Our Team →"
                  category={categories[index]}
                  imageHeight="240px"
                />
              );
            })}
          </LargeFeatureGrid>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" style={{ padding: '100px 20px', background: 'white' }}>
        <div className="container">
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2em', 
            marginBottom: '40px',
            background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {careersData?.job_openings?.section_title || 'Open Positions'}
          </h2>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {(careersData?.job_openings?.jobs || jobOpenings).map((job: any, index: number) => (
              <div key={index} style={{
              background: 'white',
                padding: '25px',
              borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                marginBottom: '20px',
                border: '2px solid #f0f0f0',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '15px' }}>
                  <div style={{ flex: 1, minWidth: '250px' }}>
                    <h3 style={{ fontSize: '1.3em', marginBottom: '8px', color: '#333' }}>
                    {job.job_title || job.title}
                  </h3>
                    <div style={{ display: 'flex', gap: '15px', marginBottom: '10px', flexWrap: 'wrap', color: '#666', fontSize: '0.9em' }}>
                      <span>📁 {job.department}</span>
                      <span>📍 {job.location}</span>
                      <span>⏰ {job.job_type || job.type}</span>
            </div>
                    <p style={{ color: '#666', lineHeight: 1.5, fontSize: '0.95em' }}>
                      {job.job_description || job.description}
                    </p>
        </div>
                <Link to="/contact" style={{
                  background: '#6a1b9a',
                  color: 'white',
                    padding: '10px 24px',
                    borderRadius: '20px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                    whiteSpace: 'nowrap',
                    display: 'inline-block',
                  fontSize: '0.9em'
                }}>
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <p style={{ fontSize: '1.2em', color: '#666', marginBottom: '20px' }}>
              Don't see a position that fits?
            </p>
            <Link to="/contact" className="btn talk">Send Us Your Resume</Link>
          </div>
        </div>
      </section>

      {/* Life at ContentFlow */}
      <section id="culture" style={{ padding: '100px 20px', background: '#f8f9fa' }}>
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
            {safeTextContent(careersData?.company_culture?.section_title, 'Our Company Culture')}
            </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.2em',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto 60px',
            lineHeight: 1.6,
            animation: 'fadeInUp 1s ease-out'
          }}>
            We're a diverse, global team that values creativity, collaboration, and continuous learning. 
            Join us and help shape the future of digital experiences.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}>
            <div style={{
              height: '300px',
              borderRadius: '15px',
              background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '5em',
              color: 'white',
              transition: 'all 0.3s ease',
              animation: 'fadeInUp 0.6s ease-out 0.1s both',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}>
              <div style={{ animation: 'float 3s ease-in-out infinite' }}>👥</div>
              <p style={{ fontSize: '0.3em', marginTop: '20px', fontWeight: 'bold' }}>Diverse Team</p>
              <p style={{ fontSize: '0.18em', textAlign: 'center', padding: '0 20px', opacity: 0.9 }}>
                200+ talented people from 15+ countries
              </p>
            </div>

            <div style={{
              height: '300px',
              borderRadius: '15px',
              background: 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '5em',
              color: 'white',
              transition: 'all 0.3s ease',
              animation: 'fadeInUp 0.6s ease-out 0.2s both',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}>
              <div style={{ animation: 'float 3s ease-in-out infinite 0.5s' }}>🎉</div>
              <p style={{ fontSize: '0.3em', marginTop: '20px', fontWeight: 'bold' }}>Team Events</p>
              <p style={{ fontSize: '0.18em', textAlign: 'center', padding: '0 20px', opacity: 0.9 }}>
                Regular hackathons, offsites, and celebrations
              </p>
            </div>

            <div style={{
              height: '300px',
              borderRadius: '15px',
              background: 'linear-gradient(135deg, #8e24aa 0%, #ab47bc 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '5em',
              color: 'white',
                transition: 'all 0.3s ease',
              animation: 'fadeInUp 0.6s ease-out 0.3s both',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}>
              <div style={{ animation: 'float 3s ease-in-out infinite 1s' }}>🌍</div>
              <p style={{ fontSize: '0.3em', marginTop: '20px', fontWeight: 'bold' }}>Remote First</p>
              <p style={{ fontSize: '0.18em', textAlign: 'center', padding: '0 20px', opacity: 0.9 }}>
                Work from anywhere with flexible schedules
              </p>
              </div>
            </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {[
              { icon: '💻', title: 'Innovation Hub', desc: 'Weekly demos where teams share exciting projects and breakthroughs' },
              { icon: '🎓', title: 'Learning Culture', desc: '$2,000/year learning budget for conferences, courses, and books' },
              { icon: '🤝', title: 'Mentorship', desc: 'Structured mentorship programs to help you grow and develop' },
              { icon: '🌟', title: 'Recognition', desc: 'Peer recognition programs and quarterly awards celebrating excellence' }
            ].map((item, index) => (
              <div key={index} className="feature-card" style={{
              textAlign: 'center',
                animation: `fadeInUp 0.6s ease-out ${0.4 + index * 0.1}s both`
              }}>
                <div style={{ fontSize: '2.5em', marginBottom: '15px' }}>{item.icon}</div>
                <h3 style={{ marginBottom: '10px', fontSize: '1.3em', color: '#6a1b9a' }}>{item.title}</h3>
                <p style={{ color: '#666', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Make an Impact?</h2>
          <p>Explore open positions and join our team today.</p>
          <div className="cta-buttons">
            <Link to="#openings" className="btn start">View Open Positions</Link>
            <Link to="/contact" className="btn talk">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
