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
        console.log('=== Careers Page Data ===');
        console.log('Full data:', data);
        console.log('Company Culture Group:', data?.company_culture?.group);
        console.log('Recognition Awards:', data?.recognition_awards);
        
        if (data?.company_culture?.group) {
          console.log('📸 Detailed Culture Items Debug:');
          data.company_culture.group.forEach((item: any, idx: number) => {
            console.log(`\nCulture Item ${idx + 1}:`);
            console.log('  Title:', item.title);
            console.log('  Icon field exists:', !!item.icon);
            console.log('  Icon type:', typeof item.icon);
            console.log('  Icon full structure:', JSON.stringify(item.icon, null, 2));
            console.log('  Icon URL:', item.icon?.url || item.icon?.href || 'NO URL FOUND');
            
            if (!item.icon) {
              console.warn(`  ⚠️ Item "${item.title}" has NO icon field!`);
            } else if (!item.icon.url && !item.icon.href) {
              console.warn(`  ⚠️ Item "${item.title}" has icon field but NO URL!`);
            }
          });
        }
        
        if (data?.recognition_awards) {
          console.log('\n🏆 Recognition Awards Debug:');
          data.recognition_awards.forEach((award: any, idx: number) => {
            console.log(`\nAward ${idx + 1}:`);
            console.log('  Title:', award.title);
            console.log('  Icon field exists:', !!award.icon);
            console.log('  Icon structure:', JSON.stringify(award.icon, null, 2));
            console.log('  Icon URL:', award.icon?.url || 'NO URL');
          });
        }
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

  // Fallback data for employee testimonials
  const employeeTestimonials = careersData?.employee_testimonials?.testimonials || [
    {
      name: 'Sarah Chen',
      role: 'Senior Software Engineer',
      image: '/images/Jessica.png',
      quote: 'Working at ContentFlow has been transformative. The culture of innovation and the support from leadership make every day exciting.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Product Manager',
      image: '/images/Mike.png',
      quote: 'The collaborative environment here is unmatched. We\'re not just building products; we\'re shaping the future of digital experiences.'
    },
    {
      name: 'Priya Sharma',
      role: 'UX Designer',
      image: '/images/Renee.jpg',
      quote: 'ContentFlow empowers me to do my best work. The tools, the team, and the vision all align perfectly.'
    },
    {
      name: 'David Kim',
      role: 'DevOps Lead',
      image: '/images/Conor.jpg',
      quote: 'The technical challenges are exciting, and the work-life balance is real. It\'s rare to find both in one place.'
    }
  ];

  // Fallback data for job openings
  const jobOpenings = careersData?.job_openings || [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      description: 'Build beautiful, performant web applications using React and modern web technologies.'
    },
    {
      title: 'Product Marketing Manager',
      department: 'Marketing',
      location: 'Remote / New York',
      type: 'Full-time',
      description: 'Drive product positioning, messaging, and go-to-market strategies for our platform.'
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help our enterprise customers succeed with ContentFlow and drive adoption.'
    }
  ];

  // Fallback data for perks
  const perks = careersData?.perks_and_benefits?.perks || [
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and mental health support',
      icon: '/images/Customer First.jpg'
    },
    {
      title: 'Flexible Work',
      description: 'Work from anywhere with flexible hours and unlimited PTO',
      icon: '/images/Global.jpg'
    },
    {
      title: 'Learning Budget',
      description: '$2,000 annual budget for courses, conferences, and professional development',
      icon: '/images/Innovation.jpg'
    },
    {
      title: 'Equity & Growth',
      description: 'Competitive equity packages and clear career progression paths',
      icon: '/images/Scalable.jpg'
    }
  ];

  return (
    <div className="careers-page">
      <SEOHead seoData={careersData?.seo_metadata} />
      
      {/* Hero Section */}
      <section className="hero-section" style={{
        background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 50%, #ab47bc 100%)'
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="animated-title">
            {careersData?.hero_section?.hero_title || 'Please add Hero Title in Contentstack'}
          </h1>
          <p className="animated-subtitle">
            {careersData?.hero_section?.hero_subtitle || 'Please add Hero Subtitle in Contentstack'}
          </p>
          <div className="hero-stats">
            {(careersData?.hero_section?.hero_stats || []).map((stat: any, index: number) => (
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

      {/* Employee Testimonials Section */}
      <section style={{
        padding: '100px 20px',
        background: 'linear-gradient(180deg, #f8f9fa 0%, white 100%)',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '3rem',
            fontWeight: '800',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'fadeInUp 0.6s ease-out'
          }}>
            {careersData?.employee_testimonials?.section_title || 'One team, one dream'}
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.3rem',
            color: '#666',
            marginBottom: '60px',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            {careersData?.employee_testimonials?.section_subtitle || 'Hear from our team members about life at ContentFlow'}
          </p>

          {/* Scrolling Animation Styles */}
        <style>{`
          @keyframes scrollTestimonials {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .testimonials-track {
            display: flex;
            animation: scrollTestimonials 30s linear infinite;
            gap: 30px;
          }
          .testimonials-track:hover {
            animation-play-state: paused;
          }
          .testimonial-card {
            flex: 0 0 350px;
            width: 350px;
          }
        `}</style>

          <div style={{
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}>
            <div className="testimonials-track">
            {employeeTestimonials.map((testimonial: any, index: number) => (
              <div key={index} className="testimonial-card" style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                cursor: 'pointer',
                border: '2px solid rgba(106, 27, 154, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(106, 27, 154, 0.15)';
                e.currentTarget.style.borderColor = '#6a1b9a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'rgba(106, 27, 154, 0.08)';
              }}>
                {/* Image Container */}
                <div style={{
                  position: 'relative',
                  height: '280px',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)'
                }}>
                  <ImageSync
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '20px',
                    color: 'white'
                  }}>
                    <div style={{
                      fontWeight: '700',
                      fontSize: '1.3rem',
                      marginBottom: '5px'
                    }}>
                      {testimonial.name}
                    </div>
                    <div style={{
                      fontSize: '0.95rem',
                      opacity: 0.95
                    }}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div style={{
                  padding: '25px'
                }}>
                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.7',
                    color: '#333',
                    fontStyle: 'italic',
                    margin: 0
                  }}>
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {employeeTestimonials.map((testimonial: any, index: number) => (
              <div key={`dup-${index}`} className="testimonial-card" style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                cursor: 'pointer',
                border: '2px solid rgba(106, 27, 154, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(106, 27, 154, 0.15)';
                e.currentTarget.style.borderColor = '#6a1b9a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'rgba(106, 27, 154, 0.08)';
              }}>
                {/* Image Container */}
                <div style={{
                  position: 'relative',
                  height: '280px',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)'
                }}>
                  <ImageSync
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '20px',
                    color: 'white'
                  }}>
                    <div style={{
                      fontWeight: '700',
                      fontSize: '1.3rem',
                      marginBottom: '5px'
                    }}>
                      {testimonial.name}
                    </div>
                    <div style={{
                      fontSize: '0.95rem',
                      opacity: 0.95
                    }}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div style={{
                  padding: '25px'
                }}>
                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.7',
                    color: '#333',
                    fontStyle: 'italic',
                    margin: 0
                  }}>
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section style={{
        padding: '100px 20px',
        background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 15s ease-in-out infinite'
        }}></div>

        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            textAlign: 'center'
          }}>
            <div style={{ animation: 'fadeInUp 0.6s ease-out' }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '20px'
              }}>🎯</div>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '15px'
              }}>Mission</h3>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.7',
                opacity: 0.95
              }}>
                Driven by innovation and grounded in care, we enable the world's best brands to reimagine possible.
              </p>
            </div>

            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '20px'
              }}>🚀</div>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '15px'
              }}>Vision</h3>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.7',
                opacity: 0.95
              }}>
                The world's best digital experiences run on ContentFlow.
              </p>
            </div>

            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '20px'
              }}>💎</div>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '15px'
              }}>Values</h3>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.7',
                opacity: 0.95
              }}>
                A Connected Tribe • Grounded in Care • Anchored in Integrity • Agents of Change • Fiercely Curious
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Awards Section */}
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
            backgroundClip: 'text',
            animation: 'fadeInUp 0.6s ease-out'
          }}>
            Recognized for excellence, community and care
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: '60px',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            Awards and recognition that matter
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {(careersData?.recognition_award?.awards || []).map((award: any, index: number) => (
              <div key={index} style={{
                height: '400px',
                borderRadius: '25px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                color: 'white',
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
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
                  src={award.icon?.url || award.icon}
                  alt={safeTextContent(award.title, 'Award')}
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
                    console.error('Award image failed to load:', award.icon);
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
                    {safeTextContent(award.title, 'Award')}
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
                    {safeTextContent(award.description, 'Recognition')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {(careersData?.company_values?.values || []).map((value: any, index: number) => (
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
                  src={value.icon?.url || value.icon}
                  alt={safeTextContent(value.value_title, 'Company Value')}
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
                    console.error('Value image failed to load:', value.icon);
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
                    {safeTextContent(value.value_title, 'Company Value')}
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
                    {safeTextContent(value.value_description, 'Value description')}
                  </p>
                </div>
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

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {perks.map((perk: any, index: number) => (
              <div key={index} style={{
                height: '400px',
                borderRadius: '25px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                color: 'white',
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
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
                  src={perk.icon?.url || perk.icon}
                  alt={safeTextContent(perk.perk_title || perk.title, 'Perk')}
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
                    console.error('Perk image failed to load:', perk.icon);
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
                    {safeTextContent(perk.perk_title || perk.title, 'Perk')}
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
                    {safeTextContent(perk.perk_description || perk.description, 'Description')}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
      <section id="culture" style={{ 
        padding: '120px 20px', 
        background: 'linear-gradient(180deg, #f8f9fa 0%, #e8eaf6 50%, #f8f9fa 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Background Orbs */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(106, 27, 154, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 15s ease-in-out infinite',
          pointerEvents: 'none'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: '180px',
          height: '180px',
          background: 'radial-gradient(circle, rgba(142, 36, 170, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 12s ease-in-out infinite 2s',
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
            {safeTextContent(careersData?.company_culture?.section_title, 'Our Company Culture')}
            </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.3em',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto 80px',
            lineHeight: 1.7,
            animation: 'fadeInUp 1s ease-out'
          }}>
            We're a diverse, global team that values creativity, collaboration, and continuous learning. 
            Join us and help shape the future of digital experiences.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            marginBottom: '80px'
          }}>
            {(careersData?.company_culture?.group || []).slice(0, 3).map((item: any, index: number) => (
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
                  alt={safeTextContent(item.title, 'Culture')}
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
                    console.error('Image failed to load:', item.icon);
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
                    {safeTextContent(item.title, 'Culture Value')}
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
                    {safeTextContent(item.description, 'Description')}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {(careersData?.company_culture?.group || []).slice(3).map((item: any, index: number) => (
              <div key={index} style={{
                height: '400px',
                borderRadius: '25px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                color: 'white',
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                animation: `fadeInUp 0.6s ease-out ${0.4 + index * 0.1}s both`,
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
                  alt={safeTextContent(item.title, 'Culture')}
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
                    console.error('Image failed to load:', item.icon);
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
                    {safeTextContent(item.title, 'Culture Value')}
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
                    {safeTextContent(item.description, 'Description')}
                  </p>
                </div>
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
