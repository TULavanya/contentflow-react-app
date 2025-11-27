import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContentstack } from '../context/ContentstackContext';
import SEOHead from '../components/SEOHead';
import LoadingSpinner from '../components/LoadingSpinner';
import LargeFeatureCard, { LargeFeatureGrid } from '../components/LargeFeatureCard';
import { safeTextContent } from '../components/ImageSync';

const Start: React.FC = () => {
  const { fetchContent } = useContentstack();
  const [startData, setStartData] = useState<any>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Form state - must be declared before any conditional returns
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    useCase: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('🎉 Welcome to ContentFlow! Check your email for setup instructions.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      website: '',
      useCase: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      try {
        const data = await fetchContent('start_page');
        console.log('Start page data:', data);
        setStartData(data);
      } catch (error) {
        console.error('Error loading start content:', error);
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

  // Note: Page will render with default content if Contentstack data is not available

  return (
    <div className="start-page">
      <SEOHead seoData={startData?.seo_metadata} />
      
      {/* Hero Section */}
      <section className="hero-section" style={{ 
        paddingBottom: '60px',
        background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 50%, #ab47bc 100%)'
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="animated-title">{safeTextContent(startData?.hero_section?.hero_title, 'Start Your Free 30-Day Trial')}</h1>
          <p className="animated-subtitle">
            {safeTextContent(startData?.hero_section?.hero_subtitle, 'No credit card required. Full access to all features. Cancel anytime.')}
          </p>
          <div className="hero-stats">
            {(startData?.hero_section?.hero_stats || [
              { stat_label: 'Full Feature Access' },
              { stat_label: 'No Credit Card' },
              { stat_label: 'Free Support' }
            ]).map((stat: any, index: number) => (
              <div key={index} className="stat animated-stat">
                <strong>✓</strong>
                <span>{safeTextContent(stat.stat_label, 'Feature')}</span>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section style={{ padding: '80px 20px', background: '#f8f9fa' }}>
        <div className="container">
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'start' }}>
            
            {/* Left Side - Content */}
            <div style={{ animation: 'fadeInLeft 0.8s ease-out' }}>
            <h2 style={{ 
              fontSize: '2.5em', 
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
              }}>{safeTextContent(startData?.form_section?.form_heading, 'Start Your Free Trial')}</h2>
              <p style={{ fontSize: '1.1em', color: '#666', marginBottom: '30px', lineHeight: 1.6 }}>
                {safeTextContent(startData?.form_section?.form_subheading, 'Get full access to all features for 30 days. No credit card required.')}
              </p>
              
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.3em', marginBottom: '15px', color: '#333' }}>
                  {startData?.trial_benefits?.section_title || 'What\'s Included:'}
            </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {(startData?.trial_benefits?.benefits || ['Full platform access for 30 days', 'Unlimited API calls', 'All premium features unlocked', 'Dedicated onboarding support', 'No credit card required']).map((item: any, idx: number) => (
                    <li key={idx} style={{ 
                      padding: '10px 0', 
                      borderBottom: '1px solid #e8eaf6',
                      color: '#666',
                      fontSize: '1.05em'
                    }}>
                      ✓ {typeof item === 'string' ? item : item.benefit_text}
                </li>
              ))}
            </ul>
              </div>
          </div>

            {/* Right Side - Form */}
            <form onSubmit={handleSubmit} style={{
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              animation: 'fadeInRight 0.8s ease-out'
            }}>
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.5em', marginBottom: '10px', color: '#333' }}>
                  {startData?.form_section?.form_heading || 'Create Your Account'}
              </h3>
                <p style={{ color: '#666', fontSize: '0.95em' }}>
                  {startData?.form_section?.form_subheading || 'Get started in less than 2 minutes'}
              </p>
            </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                    First Name *
                  </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  style={{
                      width: '100%',
                  padding: '15px',
                      fontSize: '1em',
                      borderRadius: '8px',
                    border: '2px solid #e0e0e0',
                      outline: 'none'
                    }}
                    placeholder="John"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                    Last Name *
                  </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  style={{
                      width: '100%',
                      padding: '15px',
                      fontSize: '1em',
                  borderRadius: '8px',
                    border: '2px solid #e0e0e0',
                      outline: 'none'
                    }}
                    placeholder="Doe"
                />
              </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                  Work Email *
                </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '15px',
                  fontSize: '1em',
                    borderRadius: '8px',
                  border: '2px solid #e0e0e0',
                    outline: 'none'
                  }}
                  placeholder="john@company.com"
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                  Company Name *
                </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                    padding: '15px',
                    fontSize: '1em',
                    borderRadius: '8px',
                  border: '2px solid #e0e0e0',
                    outline: 'none'
                  }}
                  placeholder="Your Company Inc."
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                style={{
                    width: '100%',
                  padding: '15px',
                  fontSize: '1em',
                    borderRadius: '8px',
                  border: '2px solid #e0e0e0',
                    outline: 'none'
                  }}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                  Website
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                padding: '15px',
                    fontSize: '1em',
                  borderRadius: '8px',
                    border: '2px solid #e0e0e0',
                    outline: 'none'
                  }}
                  placeholder="https://yourcompany.com"
                />
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                  Primary Use Case *
                </label>
                <select
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  required
                  style={{ 
                    width: '100%',
                    padding: '15px',
                    fontSize: '1em',
                    borderRadius: '8px',
                    border: '2px solid #e0e0e0',
                    outline: 'none',
                    background: 'white'
                  }}
                >
                  <option value="">Select your primary use case</option>
                  <option value="website">Website / Web App</option>
                  <option value="mobile">Mobile App</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="multisite">Multi-site Management</option>
                  <option value="personalization">Personalization</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button type="submit" className="btn start" style={{ width: '100%', fontSize: '1.2em', padding: '18px' }}>
                Start Free Trial
              </button>

              <p style={{ textAlign: 'center', color: '#666', fontSize: '0.9em', marginTop: '20px', lineHeight: 1.6 }}>
                By signing up, you agree to our <a href="#" style={{ color: '#6a1b9a' }}>Terms of Service</a> and <a href="#" style={{ color: '#6a1b9a' }}>Privacy Policy</a>
              </p>

              <div style={{ textAlign: 'center', marginTop: '25px', paddingTop: '25px', borderTop: '1px solid #e0e0e0' }}>
                <p style={{ color: '#666' }}>
                  Already have an account? <a href="#" style={{ color: '#6a1b9a', fontWeight: 'bold' }}>Sign In</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section style={{ padding: '100px 20px', background: 'white' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5em', marginBottom: '60px' }}>
            {startData?.trial_features?.section_title || 'What\'s Included in Your Trial'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {(startData?.trial_features?.features || [
              { 
                feature_icon: '🚀', 
                feature_title: 'Full Platform Access', 
                feature_description: 'Access to all features including AI agents, personalization, analytics, and advanced automation tools.',
              },
              { 
                feature_icon: '📚', 
                feature_title: 'Comprehensive Documentation', 
                feature_description: 'Complete guides, tutorials, and API documentation to get you started quickly and efficiently.'
              },
              { 
                feature_icon: '💬', 
                feature_title: 'Free Support', 
                feature_description: 'Email and chat support from our expert team throughout your trial period.'
              },
              { 
                feature_icon: '🎓', 
                feature_title: 'Academy Access', 
                feature_description: 'Free courses and certifications to master the platform and advance your skills.'
              },
              { 
                feature_icon: '🔧', 
                feature_title: 'Sample Projects', 
                feature_description: 'Pre-built templates and starter projects to accelerate development and learning.'
              },
              { 
                feature_icon: '🤝', 
                feature_title: 'Onboarding Session', 
                feature_description: '1-on-1 onboarding call with our solutions team to customize your experience.'
              }
            ]).map((feature: any, index: number) => {
              const trialImages = [
                { url: '/images/Headless CMS.png', title: 'Full Platform Access' },
                { url: '/images/About_Content_Models.png', title: 'Comprehensive Documentation' },
                { url: '/images/Customer First.jpg', title: 'Free Support' },
                { url: '/images/Innovation.jpg', title: 'Academy Access' },
                { url: '/images/Visual-Builder-4.gif', title: 'Sample Projects' },
                { url: '/images/Global.jpg', title: 'Onboarding Session' }
              ];
              
              return (
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
                    src={trialImages[index].url}
                    alt={safeTextContent(feature.feature_title, 'Trial Feature')}
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
                      console.error('Feature image failed to load');
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  
                  {/* Included in Trial Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: 'rgba(76, 175, 80, 0.95)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9em',
                    fontWeight: 'bold',
                    boxShadow: '0 6px 20px rgba(76, 175, 80, 0.3)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(76, 175, 80, 0.3)',
                    zIndex: 3,
                    display: 'flex', 
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    ✓ Included in Trial
                  </div>
                  
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
                      {safeTextContent(feature.feature_title, 'Trial Feature')}
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
                      {safeTextContent(feature.feature_description, 'Description')}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trial FAQ Accordion */}
      <section style={{ padding: '100px 20px', background: 'linear-gradient(135deg, #f8f9fa 0%, #e8eaf6 100%)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
              {startData?.trial_faqs?.faq_title || 'Trial FAQs'}
            </h2>
              <p style={{ 
                textAlign: 'center', 
              fontSize: '1.1em',
              color: '#666',
              marginBottom: '60px',
              animation: 'fadeInUp 1s ease-out'
            }}>
              {startData?.trial_faqs?.faq_subtitle || 'Everything you need to know about your free trial'}
            </p>

            {(startData?.trial_faqs?.faq_items || [
              {
                question: 'Do I need a credit card to start my trial?',
                answer: "No! We don't require a credit card. Just sign up with your email and you're ready to go."
              },
              {
                question: 'What happens after my trial ends?',
                answer: 'You can choose to upgrade to a paid plan or your account will be paused. No automatic charges—ever.'
              },
              {
                question: 'Can I extend my trial?',
                answer: 'Yes! Contact our team if you need more time to evaluate the platform.'
              },
              {
                question: 'Is there a setup fee?',
                answer: 'No setup fees. No hidden charges. Just transparent, simple pricing.'
              },
              {
                question: 'Can I migrate my data after the trial?',
                answer: 'Yes, all your data is yours. You can export it anytime or continue with a paid plan.'
              }
            ]).map((faq: any, index: number) => (
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
                  <span>{faq.question || faq.q}</span>
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
                    {faq.answer || faq.a}
                  </div>
                </div>
              </div>
            ))}

            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <p style={{ fontSize: '1.1em', color: '#666', marginBottom: '20px' }}>
                Have more questions?
              </p>
              <Link to="/contact" className="btn talk" style={{ textDecoration: 'none' }}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
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
            {startData?.social_proof?.section_title || 'Join 500+ Companies Already Using ContentFlow'}
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.1em',
            color: '#666',
            marginBottom: '60px',
            animation: 'fadeInUp 1s ease-out'
          }}>
            {startData?.social_proof?.section_subtitle || 'Trusted by industry leaders worldwide'}
          </p>

          {/* Scrolling Brand Logos Marquee */}
          <style>{`
            @keyframes scrollStart {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .start-logo-track {
              display: flex;
              animation: scrollStart 20s linear infinite;
              width: fit-content;
            }
            .start-logo-track:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div style={{
            overflow: 'hidden',
            marginBottom: '60px',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}>
            <div className="start-logo-track">
              {/* First set of logos */}
              {(startData?.social_proof?.brand_names || ['ASICS', 'Walmart', 'Mattel', 'Crocs', 'Alaska Airlines', 'MongoDB', 
              'Glassdoor', 'TopGolf', 'Callaway', 'Steve Madden']).map((brand: string, index: number) => (
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
                  {brand}
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {(startData?.social_proof?.brand_names || ['ASICS', 'Walmart', 'Mattel', 'Crocs', 'Alaska Airlines', 'MongoDB', 
              'Glassdoor', 'TopGolf', 'Callaway', 'Steve Madden']).map((brand: string, index: number) => (
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
                  {brand}
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/company" className="btn talk" style={{
              animation: 'pulse 2s ease-in-out infinite'
            }}>
              Read Customer Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Start;
