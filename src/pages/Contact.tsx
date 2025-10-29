import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContentstack } from '../context/ContentstackContext';
import SEOHead from '../components/SEOHead';
import LoadingSpinner from '../components/LoadingSpinner';
import ImageSync, { safeTextContent, safeIconContent } from '../components/ImageSync';

const Contact: React.FC = () => {
  const { fetchContent } = useContentstack();
  const [contactData, setContactData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Form state - must be declared before any conditional returns
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! Our team will get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
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
        const data = await fetchContent('contact_page');
        console.log('📧 Contact page data:', data);
        setContactData(data);
      } catch (error) {
        console.error('Error loading contact content:', error);
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
    <div className="contact-page">
      <SEOHead seoData={contactData?.seo_metadata} />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="animated-title">{safeTextContent(contactData?.hero_section?.hero_title, 'Let\'s Connect')}</h1>
          <p className="animated-subtitle">
            {contactData?.hero_section?.hero_subtitle || 'Have questions? Want to learn more? Our team is here to help you succeed.'}
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section style={{ padding: '80px 20px 40px', background: 'white' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {(contactData?.contact_methods?.methods || []).map((item: any, index: number) => (
              <div key={index} className="feature-card" style={{ 
                textAlign: 'center',
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}>
                <div style={{ 
                  width: '120px',
                  height: '120px',
                  margin: '0 auto 20px',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                  animation: 'float 3s ease-in-out infinite'
                }}>
                  <ImageSync
                    src={item.method_icon || item.icon}
                    alt={safeTextContent(item.method_title || item.title, 'Contact Method')}
                    fallbackSrc="/images/logo.png"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <h3>{safeTextContent(item.method_title || item.title, 'Contact Method')}</h3>
                <p style={{ color: '#666', marginBottom: '15px' }}>{safeTextContent(item.method_description || item.desc, 'Contact description')}</p>
                {(item.method_link?.href || item.link) === '/academy' ? (
                  <Link to={item.method_link?.href || item.link} style={{ color: '#6a1b9a', fontWeight: 'bold', textDecoration: 'none' }}>
                    {item.link_text || item.text}
                  </Link>
                ) : (
                  <a href={item.method_link?.href || item.link} style={{ color: '#6a1b9a', fontWeight: 'bold', textDecoration: 'none' }}>
                    {item.link_text || item.text}
                  </a>
                )}
              </div>
            ))}
          </div>
          </div>
        </section>

      {/* Contact Form */}
      <section style={{ padding: '80px 20px', background: '#f8f9fa' }}>
        <div className="container">
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'start' }}>
            
            {/* Left Side - Address Accordion */}
            <div style={{ animation: 'fadeInLeft 0.8s ease-out' }}>
              <h2 style={{ 
                fontSize: '2em', 
                marginBottom: '20px',
                background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>{safeTextContent(contactData?.office_locations?.section_title, 'Our Offices')}</h2>
              
              {(contactData?.office_locations?.offices || [
                { country: '🇺🇸 United States', city: 'San Francisco (HQ)', address: '123 Market Street\nSan Francisco, CA 94103' },
                { country: '🇬🇧 United Kingdom', city: 'London', address: '45 King Street\nLondon EC2V 8AS' },
                { country: '🇩🇪 Germany', city: 'Berlin', address: 'Friedrichstraße 123\n10117 Berlin' },
                { country: '🇸🇬 Singapore', city: 'Singapore', address: '1 Marina Boulevard\nSingapore 018989' }
              ]).map((office: any, index: number) => (
                <div key={index} style={{
                  marginBottom: '15px',
                  border: '2px solid #e8eaf6',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: 'white',
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                }}>
                  <div style={{
                    padding: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f8f9fa';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                  }}>
                    <h4 style={{ fontSize: '1.1em', marginBottom: '5px', color: '#333' }}>{safeTextContent(office.country, 'Country')}</h4>
                    <p style={{ fontSize: '0.95em', color: '#6a1b9a', fontWeight: 'bold', marginBottom: '8px' }}>{safeTextContent(office.city, 'City')}</p>
                    <p style={{ color: '#666', fontSize: '0.9em', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                      {safeTextContent(office.address, 'Address')}
                    </p>
                </div>
                </div>
              ))}
          </div>

            {/* Right Side - Contact Form */}
            <form onSubmit={handleSubmit} style={{
            background: 'white',
            padding: '50px',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              animation: 'fadeInRight 0.8s ease-out'
            }}>
              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '15px',
                    fontSize: '1em',
                    borderRadius: '8px',
                    border: '2px solid #e0e0e0',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                  placeholder="John Doe"
                />
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                  Email Address *
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

              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '15px',
                    fontSize: '1em',
                    borderRadius: '8px',
                    border: '2px solid #e0e0e0',
                    outline: 'none'
                  }}
                  placeholder="Your Company"
                />
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                  Subject *
                </label>
              <select
                name="subject"
                value={formData.subject}
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
                  <option value="">Select a subject</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="feedback">Product Feedback</option>
                  <option value="other">Other</option>
              </select>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                  Message *
                </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                  rows={6}
                style={{
                  width: '100%',
                    padding: '15px',
                    fontSize: '1em',
                    borderRadius: '8px',
                  border: '2px solid #e0e0e0',
                    outline: 'none',
                  resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button type="submit" className="btn start" style={{ width: '100%', fontSize: '1.1em' }}>
                Send Message
              </button>

              <p style={{ textAlign: 'center', color: '#666', fontSize: '0.9em', marginTop: '20px' }}>
                By submitting this form, you agree to our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Start your free trial today or schedule a demo with our team.</p>
          <div className="cta-buttons">
            <Link to="/start" className="btn start">Start Free Trial</Link>
            <Link to="/talk" className="btn talk">Request a Demo</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
