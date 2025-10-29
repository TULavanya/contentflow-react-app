import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContentstack } from '../context/ContentstackContext';
import SEOHead from '../components/SEOHead';
import LoadingSpinner from '../components/LoadingSpinner';
import { safeTextContent, safeIconContent } from '../components/ImageSync';

const Plans: React.FC = () => {
  const { fetchContent } = useContentstack();
  const [plansData, setPlansData] = useState<any>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      try {
        const data = await fetchContent('plans_page');
        console.log('💰 Plans page data:', data);
        setPlansData(data);
      } catch (error) {
        console.error('Error loading plans content:', error);
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

  return (
    <div className="plans-page">
      <SEOHead seoData={plansData?.seo_metadata} />
      
      {/* Hero Section */}
      <section className="hero-section" style={{
        backgroundImage: `url("${
          typeof plansData?.hero_section?.hero_background_image === 'string' 
          ? plansData.hero_section.hero_background_image
          : plansData?.hero_section?.hero_background_image?.url
          || '/images/headless-cms-content-hub-diagram.png'
        }")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="animated-title">{safeTextContent(plansData?.hero_section?.hero_title, 'Simple, Transparent Pricing')}</h1>
          <p className="animated-subtitle">
            {safeTextContent(plansData?.hero_section?.hero_subtitle, 'Choose the perfect plan for your business. All plans include core features with no hidden fees.')}
          </p>
          <div style={{
            display: 'flex',
            gap: '40px',
            justifyContent: 'center',
            marginTop: '40px',
            flexWrap: 'wrap'
          }}>
            {(plansData?.hero_section?.hero_stats || [
              { stat_value: '30-Day', stat_label: 'Free Trial' },
              { stat_value: 'No', stat_label: 'Credit Card Required' },
              { stat_value: 'Cancel', stat_label: 'Anytime' }
            ]).map((stat: any, index: number) => (
              <div key={index} className="stat animated-stat">
                <strong>{safeTextContent(stat.stat_value, '✓')}</strong>
                <span>{safeTextContent(stat.stat_label, 'Feature')}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section style={{ 
        padding: '100px 20px', 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e8eaf6 100%)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: 'auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5em',
            marginBottom: '60px',
            background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            {safeTextContent(plansData?.pricing_plans?.section_title, 'Choose Your Plan')}
          </h2>
          <div style={{
          display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {(plansData?.pricing_plans?.plans || []).map((plan: any, index: number) => (
              <div key={index} style={{
                background: 'white',
                padding: '40px 30px',
                borderRadius: '20px',
                boxShadow: plan.is_popular ? '0 15px 40px rgba(106, 27, 154, 0.3)' : '0 8px 20px rgba(0,0,0,0.1)',
                border: plan.is_popular ? '3px solid #6a1b9a' : '2px solid #e0e0e0',
                position: 'relative',
                textAlign: 'center',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`,
                transform: plan.is_popular ? 'scale(1.05)' : 'scale(1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(106, 27, 154, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = plan.is_popular ? 'translateY(0) scale(1.05)' : 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = plan.is_popular ? '0 15px 40px rgba(106, 27, 154, 0.3)' : '0 8px 20px rgba(0,0,0,0.1)';
              }}>
              {plan.is_popular && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                    background: plan.badge_color_gradient,
                  color: 'white',
                    padding: '10px 25px',
                    borderRadius: '25px',
                    fontSize: '0.9em',
                  fontWeight: 'bold',
                    boxShadow: '0 5px 15px rgba(106, 27, 154, 0.3)',
                    animation: 'pulse 2s ease-in-out infinite'
                  }}>
                    ⭐ Most Popular ⭐
                  </div>
                )}
                
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 20px',
                  background: plan.badge_color_gradient,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5em',
                  animation: 'float 3s ease-in-out infinite'
                }}>
                  {index === 0 ? '🚀' : index === 1 ? '⚡' : '👑'}
                </div>

                <h3 style={{ fontSize: '2em', marginBottom: '10px', color: '#333' }}>
                  {plan.plan_name}
                </h3>
                
                <div style={{ marginBottom: '20px' }}>
                  <span style={{ 
                    fontSize: '3.5em', 
                    fontWeight: 'bold',
                    color: '#6a1b9a',
                    background: plan.badge_color_gradient || 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'inline-block'
                  }}>
                    {plan.plan_price}
                  </span>
                  <span style={{ fontSize: '1.2em', color: '#666' }}>
                      {plan.billing_period}
                    </span>
                </div>
                
                <p style={{ color: '#666', marginBottom: '30px', fontSize: '1.1em' }}>
                  {plan.plan_description}
                </p>
              
                <ul style={{
                listStyle: 'none', 
                padding: 0, 
                  marginBottom: '30px',
                  textAlign: 'left'
                }}>
                  {plan.features.map((feature: any, idx: number) => (
                    <li key={idx} style={{
                      marginBottom: '12px',
                      paddingLeft: '30px',
                      position: 'relative',
                      color: '#333',
                      fontSize: '0.95em',
                      animation: `fadeInLeft 0.5s ease-out ${0.5 + (idx * 0.1)}s both`
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#6a1b9a',
                        fontWeight: 'bold',
                        fontSize: '1.2em'
                      }}>✓</span>
                      {feature.feature_text}
                  </li>
                ))}
              </ul>
              
                <Link to="/start" style={{
                  background: plan.is_popular ? plan.badge_color_gradient : 'transparent',
                  color: plan.is_popular ? 'white' : '#6a1b9a',
                  border: plan.is_popular ? 'none' : '2px solid #6a1b9a',
                  padding: '15px 30px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  width: '100%',
                  textAlign: 'center',
                  fontSize: '1.1em',
                  transition: 'all 0.3s ease',
                  boxShadow: plan.is_popular ? '0 5px 15px rgba(106, 27, 154, 0.3)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (plan.is_popular) {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(106, 27, 154, 0.4)';
                  } else {
                    e.currentTarget.style.background = plan.badge_color_gradient;
                    e.currentTarget.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.is_popular) {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(106, 27, 154, 0.3)';
                  } else {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#6a1b9a';
                  }
                }}>
                  {plan.cta_button_text}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ padding: '100px 20px', background: 'white' }}>
        <div className="container">
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5em', 
            marginBottom: '20px',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            Detailed Feature Comparison
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.1em',
            color: '#666',
            marginBottom: '60px'
          }}>
            See exactly what's included in each plan
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {[
              { icon: '🎨', title: 'Content Management', items: ['Visual Editor', 'Asset Library', 'Version Control', 'Multi-language'] },
              { icon: '⚡', title: 'Performance', items: ['Global CDN', 'Image Optimization', 'Caching', 'Load Balancing'] },
              { icon: '🔒', title: 'Security', items: ['SSL Certificates', 'Role-based Access', '2FA', 'Audit Logs'] },
              { icon: '🤖', title: 'AI & Automation', items: ['AI Content Gen', 'Auto-tagging', 'Smart Search', 'Workflows'] }
            ].map((category, index) => (
              <div key={index} className="feature-card" style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
              }}>
                <div style={{ fontSize: '3em', marginBottom: '15px' }}>{safeIconContent(category.icon, '📋')}</div>
                <h3 style={{ marginBottom: '20px', color: '#6a1b9a' }}>{safeTextContent(category.title, 'Category')}</h3>
                <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
                  {category.items.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '10px', color: '#666', paddingLeft: '20px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
            </div>
          ))}
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
            <Link to="/contact" className="btn talk">Contact Support →</Link>
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
