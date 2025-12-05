import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContentstack, onEntryChange } from '../context/ContentstackContext';
import SEOHead from '../components/SEOHead';
import LoadingSpinner from '../components/LoadingSpinner';
import LargeFeatureCard, { LargeFeatureGrid } from '../components/LargeFeatureCard';
import { safeTextContent } from '../components/ImageSync';

const Talk: React.FC = () => {
  const { fetchContent } = useContentstack();
  const [talkData, setTalkData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Form state - must be declared before any conditional returns
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    jobTitle: '',
    teamSize: '',
    useCase: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(' Demo request received! Our team will contact you within 24 hours to schedule your personalized demo.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      jobTitle: '',
      teamSize: '',
      useCase: '',
      timeline: '',
      message: ''
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
        const data = await fetchContent('talk_page');
        console.log(' Talk page data:', data);
        setTalkData(data);
      } catch (error) {
        console.error('Error loading talk content:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadContent();
    
    // Listen for Live Preview content changes
    onEntryChange(() => {
      console.log('Talk content changed - reloading...');
      loadContent();
    });}, [fetchContent]);

  // Show loading spinner while fetching data
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Note: Page will render with default content if Contentstack data is not available

  return (
    <div className="talk-page">
      <SEOHead seoData={talkData?.seo_metadata} />
      
      {/* Hero Section */}
      <section className="hero-section" style={{ 
        paddingBottom: '60px',
        background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 50%, #ab47bc 100%)'
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="animated-title">{safeTextContent(talkData?.hero_section?.hero_title, 'See ContentFlow in Action')}</h1>
          <p className="animated-subtitle">
            {safeTextContent(talkData?.hero_section?.hero_subtitle, 'Schedule a personalized demo with our solutions team and discover how ContentFlow can transform your digital experiences.')}
          </p>
          <div className="hero-stats">
            {(talkData?.hero_section?.hero_stats || [
              { stat_value: '30 min', stat_label: 'Personalized Demo' },
              { stat_value: 'Live Q&A', stat_label: 'With Experts' },
              { stat_value: 'Free', stat_label: 'No Obligation' }
            ]).map((stat: any, index: number) => (
              <div key={index} className="stat animated-stat">
                <strong>{safeTextContent(stat.stat_value, '')}</strong>
                <span>{safeTextContent(stat.stat_label, '')}</span>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
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
              }}>{safeTextContent(talkData?.demo_request_form?.form_heading, 'Request Your Demo')}</h2>
              <p style={{ fontSize: '1.1em', color: '#666', marginBottom: '30px', lineHeight: 1.6 }}>
                {safeTextContent(talkData?.demo_request_form?.form_subheading, 'Schedule a personalized demo with our solutions team and discover how ContentFlow can transform your digital experiences.')}
              </p>
              
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.3em', marginBottom: '15px', color: '#333' }}>What You'll Get:</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {(talkData?.demo_request_form?.benefits_list || [
                    '30-minute personalized demo',
                    'Live Q&A with experts',
                    'Custom implementation plan',
                    'ROI analysis for your business',
                    'No obligation required'
                  ]).map((item: any, idx: number) => (
                    <li key={idx} style={{ 
                      padding: '10px 0', 
                      borderBottom: '1px solid #e8eaf6',
                      color: '#666',
                      fontSize: '1.05em'
                    }}>
                       {safeTextContent(typeof item === 'string' ? item : (item.benefit_text || item.text), 'Benefit')}
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
                  {safeTextContent(talkData?.demo_request_form?.form_heading, 'Get Started')}
                </h3>
                <p style={{ color: '#666', fontSize: '0.95em' }}>
                  {safeTextContent(talkData?.demo_request_form?.form_subheading, 'Fill in your details and we\'ll contact you within 24 hours')}
                  </p>
                </div>

              {/* Dynamic Form Fields from Contentstack */}
              {(() => {
                // Get form fields from Contentstack only
                const formFields = talkData?.demo_request_form?.form_fields || [];
                
                // If no form fields, show simple default form
                if (!formFields || formFields.length === 0) {
                  return (
                    <>
                      {/* First Name & Last Name */}
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

                      {/* Email */}
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

                      {/* Company & Phone */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                        <div>
                          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                            Company *
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
                        <div>
                          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                            Phone *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
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
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          style={{
                            width: '100%',
                            padding: '15px',
                            fontSize: '1em',
                            borderRadius: '8px',
                            border: '2px solid #e0e0e0',
                            outline: 'none',
                            resize: 'vertical'
                          }}
                          placeholder="Tell us about your needs..."
                        />
                      </div>
                    </>
                  );
                }
                
                // Render fields from Contentstack
                const renderedIndices = new Set();
                return formFields.map((field: any, index: number) => {
                  if (renderedIndices.has(index)) return null;
                  
                  const isGrouped = ['firstName', 'lastName', 'company', 'phone', 'jobTitle', 'teamSize'].includes(field.field_name);
                  
                  // Render grouped fields (2 columns)
                  if (isGrouped && field.field_name === 'firstName' && formFields[index + 1]) {
                    renderedIndices.add(index);
                    renderedIndices.add(index + 1);
                    const nextField = formFields[index + 1];
                    return (
                      <div key={field.field_name} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                        <div>
                          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                            {safeTextContent(field.field_label, 'Field Label')} {field.required && '*'}
                          </label>
                          <input
                            type={safeTextContent(field.field_type, 'text')}
                            name={safeTextContent(field.field_name, 'field')}
                            value={(formData as any)[field.field_name] || ''}
                            onChange={handleChange}
                            required={field.required}
                            style={{
                              width: '100%',
                padding: '15px',
                              fontSize: '1em',
                              borderRadius: '8px',
                              border: '2px solid #e0e0e0',
                              outline: 'none'
                            }}
                            placeholder={safeTextContent(field.placeholder, 'Enter value')}
                          />
                        </div>
                        {nextField && (
                <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                              {safeTextContent(nextField.field_label, 'Field Label')} {nextField.required && '*'}
                            </label>
                            <input
                              type={safeTextContent(nextField.field_type, 'text')}
                              name={safeTextContent(nextField.field_name, 'field')}
                              value={(formData as any)[nextField.field_name] || ''}
                              onChange={handleChange}
                              required={nextField.required}
                              style={{
                                width: '100%',
                                padding: '15px',
                                fontSize: '1em',
                                borderRadius: '8px',
                                border: '2px solid #e0e0e0',
                                outline: 'none'
                              }}
                              placeholder={safeTextContent(nextField.placeholder, 'Enter value')}
                            />
                </div>
                        )}
              </div>
                    );
                  }
                  
                  if (isGrouped && field.field_name === 'company' && formFields[index + 1]) {
                    renderedIndices.add(index);
                    renderedIndices.add(index + 1);
                    const nextField = formFields[index + 1];
                    return (
                      <div key={field.field_name} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                            {safeTextContent(field.field_label, 'Field Label')} {field.required && '*'}
                          </label>
              <input
                            type={safeTextContent(field.field_type, 'text')}
                            name={safeTextContent(field.field_name, 'field')}
                            value={(formData as any)[field.field_name] || ''}
                onChange={handleChange}
                            required={field.required}
                style={{
                  width: '100%',
                              padding: '15px',
                              fontSize: '1em',
                              borderRadius: '8px',
                  border: '2px solid #e0e0e0',
                              outline: 'none'
                            }}
                            placeholder={safeTextContent(field.placeholder, 'Enter value')}
                          />
                        </div>
                        {nextField && (
                          <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                              {safeTextContent(nextField.field_label, 'Field Label')} {nextField.required && '*'}
                            </label>
              <input
                              type={safeTextContent(nextField.field_type, 'text')}
                              name={safeTextContent(nextField.field_name, 'field')}
                              value={(formData as any)[nextField.field_name] || ''}
                onChange={handleChange}
                              required={nextField.required}
                style={{
                  width: '100%',
                                padding: '15px',
                                fontSize: '1em',
                                borderRadius: '8px',
                  border: '2px solid #e0e0e0',
                                outline: 'none'
                              }}
                              placeholder={safeTextContent(nextField.placeholder, 'Enter value')}
                            />
                          </div>
                        )}
                      </div>
                    );
                  }
                  
                  if (isGrouped && field.field_name === 'jobTitle' && formFields[index + 1]) {
                    renderedIndices.add(index);
                    renderedIndices.add(index + 1);
                    const nextField = formFields[index + 1];
                    return (
                      <div key={field.field_name} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                        <div>
                          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                            {safeTextContent(field.field_label, 'Field Label')} {field.required && '*'}
                          </label>
              <input
                            type={safeTextContent(field.field_type, 'text')}
                            name={safeTextContent(field.field_name, 'field')}
                            value={(formData as any)[field.field_name] || ''}
                onChange={handleChange}
                            required={field.required}
                style={{
                  width: '100%',
                              padding: '15px',
                              fontSize: '1em',
                              borderRadius: '8px',
                  border: '2px solid #e0e0e0',
                              outline: 'none'
                            }}
                            placeholder={safeTextContent(field.placeholder, 'Enter value')}
                          />
                        </div>
                        {nextField && nextField.field_type === 'select' && (() => {
                          const options = Array.isArray(nextField.select_options) ? nextField.select_options : [];
                          return (
                            <div>
                              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                                {safeTextContent(nextField.field_label, 'Field Label')} {nextField.required && '*'}
                              </label>
              <select
                                name={safeTextContent(nextField.field_name, 'field')}
                                value={(formData as any)[nextField.field_name] || ''}
                onChange={handleChange}
                                required={nextField.required}
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
                                <option value="">{safeTextContent(nextField.placeholder, 'Select option')}</option>
                                {options.map((option: string, idx: number) => (
                                  <option key={idx} value={safeTextContent(option, '')}>{safeTextContent(option, 'Option')}</option>
                                ))}
              </select>
                            </div>
                          );
                        })()}
                      </div>
                    );
                  }
                  
                  // Skip already rendered paired fields
                  if (['lastName', 'phone', 'teamSize'].includes(field.field_name)) {
                    return null;
                  }
                  
                  // Render full-width fields
                  if (field.field_type === 'textarea') {
                    return (
                      <div key={field.field_name} style={{ marginBottom: '25px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                          {safeTextContent(field.field_label, 'Field Label')} {field.required && '*'}
                        </label>
                        <textarea
                          name={safeTextContent(field.field_name, 'field')}
                          value={(formData as any)[field.field_name] || ''}
                          onChange={handleChange}
                          required={field.required}
                          rows={4}
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
                          placeholder={safeTextContent(field.placeholder, 'Enter your message')}
                        />
                      </div>
                    );
                  } else if (field.field_type === 'select' && !isGrouped) {
                    return (
                      <div key={field.field_name} style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                          {safeTextContent(field.field_label, 'Field Label')} {field.required && '*'}
                </label>
                        <select
                          name={safeTextContent(field.field_name, 'field')}
                          value={(formData as any)[field.field_name] || ''}
                          onChange={handleChange}
                          required={field.required}
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
                          <option value="">{safeTextContent(field.placeholder, 'Select option')}</option>
                          {(Array.isArray(field.select_options) ? field.select_options : []).map((option: string, idx: number) => (
                            <option key={idx} value={safeTextContent(option, '')}>{safeTextContent(option, 'Option')}</option>
                          ))}
                        </select>
                      </div>
                    );
                  } else if (!isGrouped && field.field_type !== 'select') {
                    return (
                      <div key={field.field_name} style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                          {safeTextContent(field.field_label, 'Field Label')} {field.required && '*'}
                </label>
                  <input 
                          type={safeTextContent(field.field_type, 'text')}
                          name={safeTextContent(field.field_name, 'field')}
                          value={(formData as any)[field.field_name] || ''}
                          onChange={handleChange}
                          required={field.required}
                          style={{
                            width: '100%',
                            padding: '15px',
                            fontSize: '1em',
                            borderRadius: '8px',
                            border: '2px solid #e0e0e0',
                            outline: 'none'
                          }}
                          placeholder={safeTextContent(field.placeholder, 'Enter value')}
                        />
                      </div>
                    );
                  }
                  
                  return null;
                });
              })()}

              <button type="submit" className="btn start" style={{ width: '100%', fontSize: '1.2em', padding: '18px' }}>
                {safeTextContent(talkData?.demo_request_form?.submit_button_text, 'Request Demo')}
              </button>

              <p style={{ textAlign: 'center', color: '#666', fontSize: '0.9em', marginTop: '20px', lineHeight: 1.6 }}>
                By submitting this form, you agree to our <a href="#" style={{ color: '#6a1b9a' }}>Privacy Policy</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section style={{ padding: '100px 20px', background: 'white' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5em', marginBottom: '60px' }}>
            {safeTextContent(talkData?.what_to_expect?.section_title, 'What to Expect from Your Demo')}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {(talkData?.what_to_expect?.expectation_items || [
              { 
                icon: '', 
                item_title: 'Needs Assessment', 
                item_description: 'We\'ll discuss your current challenges, goals, and specific requirements to tailor the demo.',
              },
              { 
                icon: '', 
                item_title: 'Live Platform Demo', 
                item_description: 'See the platform in action with examples and use cases relevant to your industry.'
              },
              { 
                icon: '', 
                item_title: 'Best Practices', 
                item_description: 'Learn how leading brands are using ContentFlow to achieve measurable business results.'
              },
              { 
                icon: '️', 
                item_title: 'Implementation Plan', 
                item_description: 'Get a customized roadmap and timeline for your successful ContentFlow implementation.'
              },
              { 
                icon: '', 
                item_title: 'Q&A Session', 
                item_description: 'Ask anything—our solutions experts are here to answer all your technical and business questions.'
              },
              { 
                icon: '', 
                item_title: 'ROI Analysis', 
                item_description: 'Understand the potential ROI, cost savings, and business impact for your organization.'
              }
            ]).map((item: any, index: number) => {
              const demoImages = [
                { url: '/images/Visual-Builder-4.gif', title: 'Live Platform Demo' },
                { url: '/images/About_Content_Models.png', title: 'Use Case Examples' },
                { url: '/images/Workflow Automation.jpg', title: 'Best Practices Discussion' },
                { url: '/images/Analytics.jpg', title: 'Implementation Planning' },
                { url: '/images/Customer First.jpg', title: 'Questions and Answers' },
                { url: '/images/Customer Analytics.jpg', title: 'Business ROI Analysis' }
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
                    src={demoImages[index].url}
                    alt={safeTextContent(item.item_title, 'Demo Feature')}
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
                      console.error('Demo image failed to load');
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  
                  {/* Demo Duration Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    color: '#6a1b9a',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9em',
                    fontWeight: 'bold',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(106, 27, 154, 0.3)',
                    zIndex: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    {index < 2 ? '10 mins' : index < 4 ? '15 mins' : '5 mins'}
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
                      {safeTextContent(item.item_title, 'Demo Feature')}
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
                      {safeTextContent(item.item_description, 'Description')}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Companies Choose Us */}
      <section style={{ padding: '100px 20px', background: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5em', marginBottom: '60px' }}>
            {safeTextContent(talkData?.testimonials_section?.section_title, 'Why Companies Choose ContentFlow')}
          </h2>

          <div className="testimonials-grid">
            {(talkData?.testimonials_section?.testimonials || [
              { rating: '', quote: 'The demo completely sold us. Seeing the platform in action and understanding how it could solve our specific challenges made the decision easy.', customer_name: 'Jennifer Taylor', customer_title: 'CTO, RetailCorp', customer_photo: '/images/Jessica.png' },
              { rating: '', quote: 'The solutions team was incredibly knowledgeable and patient. They took the time to understand our needs and showed us exactly how ContentFlow would work for us.', customer_name: 'Marcus Johnson', customer_title: 'VP Digital, FinanceHub', customer_photo: '/images/Mike.png' },
              { rating: '', quote: 'Best demo experience we\'ve had. They didn\'t just show us features—they showed us solutions to our actual problems. We signed up immediately after.', customer_name: 'Sarah Mitchell', customer_title: 'Head of Marketing, TechGlobal', customer_photo: '/images/Renee.jpg' }
            ]).map((testimonial: any, index: number) => (
              <div key={index} className="testimonial-card">
                <div className="rating">
                  {testimonial.rating === '5' || testimonial.rating === 5 ? '' : (testimonial.rating || '')}
                </div>
              <div className="testimonial-content">
                  <p>"{safeTextContent(testimonial.quote, 'Great experience!')}"</p>
              </div>
              <div className="testimonial-author">
                  <img 
                    src={testimonial.customer_photo?.url || testimonial.customer_photo || '/images/logo.png'} 
                    alt={safeTextContent(testimonial.customer_name, 'Customer')} 
                  />
                <div>
                    <strong>{safeTextContent(testimonial.customer_name, 'Customer Name')}</strong>
                    <span>{safeTextContent(testimonial.customer_title, 'Position')}</span>
              </div>
                </div>
              </div>
            ))}
          </div>
                </div>
      </section>

      {/* Alternative Options */}
      <section style={{ padding: '100px 20px', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5em', marginBottom: '30px' }}>
              {safeTextContent(talkData?.alternative_options?.section_title, 'Not Ready for a Demo?')}
            </h2>
            <p style={{ fontSize: '1.2em', color: '#666', marginBottom: '40px', lineHeight: 1.6 }}>
              {safeTextContent(talkData?.alternative_options?.section_description, 'No problem! You can explore ContentFlow at your own pace.')}
            </p>

            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {(talkData?.alternative_options?.cta_buttons || [
                { button_text: 'Start Free Trial', button_link: { href: '/start' } },
                { button_text: 'Browse Documentation', button_link: { href: '/academy' } },
                { button_text: 'Explore Platform', button_link: { href: '/platform' } }
              ]).map((button: any, index: number) => (
                <Link 
                  key={index}
                  to={button.button_link?.href || '#'} 
                  className={index === 0 ? 'btn start' : 'btn talk'}
                >
                  {safeTextContent(button.button_text, 'Learn More')}
                </Link>
              ))}
              </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{
        padding: '80px 20px', 
        background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            textAlign: 'center',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {(talkData?.stats_section?.stats || [
              { stat_value: '24hr', stat_label: 'Average Response Time' },
              { stat_value: '98%', stat_label: 'Customer Satisfaction' },
              { stat_value: '500+', stat_label: 'Enterprise Customers' },
              { stat_value: '30min', stat_label: 'Average Demo Length' }
            ]).map((stat: any, index: number) => (
              <div key={index}>
                <div style={{ fontSize: '3.5em', fontWeight: 'bold', marginBottom: '10px' }}>{safeTextContent(stat.stat_value, '')}</div>
                <p style={{ fontSize: '1.2em', opacity: 0.9 }}>{safeTextContent(stat.stat_label, '')}</p>
            </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Talk;
