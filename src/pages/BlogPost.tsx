import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useContentstack } from '../context/ContentstackContext';
import SEOHead from '../components/SEOHead';
import LoadingSpinner from '../components/LoadingSpinner';
import ImageSync from '../components/ImageSync';

interface BlogPost {
  title: string;
  url: string;
  excerpt: string;
  content: any;
  featured_image: any;
  category: string;
  publish_date: string;
  reading_time_minute: number;
  author: {
    name: string;
    bio: string;
    profile_picture: any;
  };
  gradient_colors: string;
  icon: any;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const { fetchContent } = useContentstack();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogPost = async () => {
      // Get the slug from either the param or extract from full pathname
      let postSlug = slug;
      if (!postSlug) {
        // Extract from pathname for wildcard route
        const pathname = location.pathname;
        postSlug = pathname.replace(/^\/blog\//, '');
      }
      
      if (!postSlug) {
        setError('No blog post specified');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        
        // Clean the slug - remove any "blog/" or "blogs/" prefixes if they exist (for double blog/ cases)
        const cleanSlug = postSlug.replace(/^(blog\/|blogs\/)+/, '').replace(/^\/+/, '');
        console.log('🔍 Looking for blog post with slug:', cleanSlug);
        console.log('📝 Original slug from URL:', postSlug);
        console.log('🌐 Full pathname:', location.pathname);
        
        // Strategy 1: Fetch all blog posts and find by URL matching
        const allPosts = await fetchContent('blog_post', {
          allEntries: true,
          include: ['author'] // Include author reference
        });
        
        console.log('📦 All blog posts fetched:', allPosts);
        
        if (allPosts && allPosts.length > 0) {
          // Try to find the post by matching the URL field
          let foundPost = allPosts.find((post: any) => {
            const postUrl = post.url || '';
            console.log(`Comparing: "${cleanSlug}" with post.url: "${postUrl}"`);
            
            // Try exact match
            if (postUrl === cleanSlug) return true;
            
            // Try with blog/ or blogs/ prefix removed from post URL
            const cleanPostUrl = postUrl.replace(/^(blog\/|blogs\/)+/, '').replace(/^\/+/, '');
            if (cleanPostUrl === cleanSlug) return true;
            
            // Try matching the end of the pathname
            if (postUrl.endsWith(cleanSlug)) return true;
            if (cleanSlug.endsWith(postUrl)) return true;
            
            // Try partial matching for nested paths (e.g., engineering/ai-testing)
            const postUrlParts = postUrl.split('/').filter(Boolean);
            const cleanSlugParts = cleanSlug.split('/').filter(Boolean);
            if (postUrlParts.length === cleanSlugParts.length &&
                postUrlParts.every((part, idx) => cleanSlugParts[idx] === part)) return true;
            
            return false;
          });
          
          if (foundPost) {
            console.log('=== BLOG POST DEBUG ===');
            console.log('✅ Found blog post:', foundPost.title);
            console.log('📝 URL matched:', foundPost.url);
            console.log('👤 Author data RAW:', foundPost.author);
            console.log('👤 Author type:', typeof foundPost.author, Array.isArray(foundPost.author) ? 'Array' : 'Object');
            console.log('👤 Author full structure:', JSON.stringify(foundPost.author, null, 2));
            
            // Ensure author data is properly structured
            if (foundPost.author) {
              // If author is an array (reference), take the first item
              if (Array.isArray(foundPost.author) && foundPost.author.length > 0) {
                console.log('👤 Author was an array, extracting first item...');
                foundPost.author = foundPost.author[0];
                console.log('👤 Extracted author:', foundPost.author);
              }
              
              console.log('👤 Final author data:', {
                name: foundPost.author?.name || foundPost.author?.title,
                bio: foundPost.author?.bio,
                profile_picture: foundPost.author?.profile_picture,
                profile_picture_url: foundPost.author?.profile_picture?.url || 'NO URL'
              });
            } else {
              console.error('❌ NO AUTHOR DATA IN BLOG POST');
            }
            
            setBlogPost(foundPost);
          } else {
            console.warn('⚠️ No blog post found matching:', cleanSlug);
            console.warn('Available URLs:', allPosts.map((p: any) => p.url));
            
            // Try fallback blog posts
            console.log('🔄 Searching fallback blog posts...');
            const fallbackPost = getFallbackBlogPost(cleanSlug);
            if (fallbackPost) {
              console.log('✅ Using fallback blog post:', fallbackPost.title);
              setBlogPost(fallbackPost);
            } else {
              throw new Error('Blog post not found');
            }
          }
        } else {
          console.warn('⚠️ No blog posts found in Contentstack, using fallback');
          const fallbackPost = getFallbackBlogPost(cleanSlug);
          if (fallbackPost) {
            console.log('✅ Using fallback blog post:', fallbackPost.title);
            setBlogPost(fallbackPost);
          } else {
            throw new Error('Blog post not found');
          }
        }
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Blog post not found');
      } finally {
        setLoading(false);
      }
    };

    loadBlogPost();
  }, [slug, location.pathname, fetchContent]);
  
  // Fallback blog posts
  const getFallbackBlogPost = (slug: string): BlogPost | null => {
    const fallbackPosts: BlogPost[] = [
      {
        title: 'How We Use AI to Speed Up Manual Penetration Testing at Contentstack',
        url: 'engineering/how-we-use-ai-to-speed-up-manual-penetration-testing-at-contentstack',
        excerpt: 'Discover how we leverage AI to enhance security testing efficiency while maintaining the critical human oversight needed for complex security assessments.',
        content: `<h2>Introduction</h2>
        <p>Contentstack is more than just a headless CMS today. It's a composable DXP with Marketplace, Automation Hub, Brand Kit, Launch, Personalization and Lytics. That composability is powerful for builders, but it expands the attack surface. Automation catches many classes of issues, but the most interesting bugs still show up when a human tests with domain context: auth edges, tenant boundaries, unusual encodings and quirky parsers. That's why manual testing remains central to our security reviews.</p>
        
        <h2>The Challenge</h2>
        <p>Over one week, we streamlined one of the slowest manual loops — "think → craft input → send → compare" — by wiring a small AI helper into BurpSuite. This post describes the helper, how we use it and how it fits our process.</p>
        
        <h3>Our Security Testing Approach</h3>
        <p>Manual penetration testing requires careful analysis of authentication boundaries, tenant isolation, and edge cases that automated tools often miss. While automation is valuable for catching common vulnerabilities, sophisticated attacks require human intuition and domain expertise.</p>
        
        <h2>The AI Solution</h2>
        <p>We integrated a lightweight AI assistant directly into our BurpSuite workflow. The AI helps with:</p>
        <ul>
          <li><strong>Request Generation:</strong> Quickly crafting test payloads based on context</li>
          <li><strong>Pattern Recognition:</strong> Identifying suspicious response patterns</li>
          <li><strong>Encoding Variations:</strong> Suggesting alternative encodings for bypass attempts</li>
          <li><strong>Documentation:</strong> Auto-generating test notes and findings</li>
        </ul>
        
        <h3>Implementation Details</h3>
        <p>The AI helper runs locally and integrates with BurpSuite's extension API. It analyzes request/response pairs and suggests next test vectors while keeping the security tester in full control of what gets executed.</p>
        
        <h2>Results and Impact</h2>
        <p>Since implementing this approach, we've seen:</p>
        <ul>
          <li>40% reduction in time spent crafting test payloads</li>
          <li>Increased coverage of edge cases</li>
          <li>Better documentation of test procedures</li>
          <li>More consistent testing methodology across the team</li>
        </ul>
        
        <h2>Best Practices</h2>
        <p>When using AI for security testing:</p>
        <ol>
          <li>Always validate AI suggestions before executing tests</li>
          <li>Keep human oversight for critical security decisions</li>
          <li>Use AI to augment, not replace, security expertise</li>
          <li>Regularly audit AI-suggested test cases for effectiveness</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>AI-assisted penetration testing represents a significant evolution in security practices. By combining machine learning capabilities with human expertise, we can conduct more thorough, efficient security assessments while maintaining the critical thinking necessary for identifying sophisticated vulnerabilities.</p>`,
        featured_image: { url: '/images/Security.jpg', title: 'Security Testing' },
        category: 'ENGINEERING',
        publish_date: '2025-10-15',
        reading_time_minute: 10,
        author: {
          name: 'Kaustubh Rai',
          bio: 'Security Engineer at ContentFlow with expertise in application security, penetration testing, and secure architecture design. Passionate about using AI to enhance security practices.',
          profile_picture: { url: '/images/Nishant.jpg', title: 'Kaustubh Rai' }
        },
        gradient_colors: '#6a1b9a, #8e24aa',
        icon: { url: '/images/Security.jpg' }
      }
    ];
    
    return fallbackPosts.find(post => 
      post.url === slug || 
      post.url.includes(slug) || 
      slug.includes(post.url.split('/').pop() || '')
    ) || null;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getGradient = (colors: string) => {
    if (!colors) return 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)';
    const colorArray = colors.split(',').map(c => c.trim());
    if (colorArray.length >= 2) {
      return `linear-gradient(135deg, ${colorArray[0]} 0%, ${colorArray[1]} 100%)`;
    }
    return colors;
  };

  // Function to render Contentstack rich text JSON to HTML
  const renderRichText = (content: any): string => {
    if (!content) return '';
    
    // If it's already a string, return it
    if (typeof content === 'string') {
      return content;
    }

    // If it's a JSON object from Contentstack's rich text editor
    if (content.type === 'doc' && content.children) {
      return renderNodes(content.children);
    }

    // Fallback: try to extract text from JSON structure
    try {
      return extractTextFromJSON(content);
    } catch (e) {
      console.error('Error rendering content:', e);
      return '<p>Content unavailable</p>';
    }
  };

  const renderNodes = (nodes: any[]): string => {
    return nodes.map(node => renderNode(node)).join('');
  };

  const renderNode = (node: any): string => {
    if (!node) return '';

    // Text node
    if (node.type === 'p' || node.type === 'paragraph') {
      const children = node.children ? renderNodes(node.children) : '';
      return `<p style="margin-bottom: 1.5rem; line-height: 1.8;">${children}</p>`;
    }

    // Headings
    if (node.type === 'h1') return `<h1 style="font-size: 2.5rem; margin: 2rem 0 1rem; color: #6a1b9a;">${renderNodes(node.children || [])}</h1>`;
    if (node.type === 'h2') return `<h2 style="font-size: 2rem; margin: 2rem 0 1rem; color: #6a1b9a;">${renderNodes(node.children || [])}</h2>`;
    if (node.type === 'h3') return `<h3 style="font-size: 1.6rem; margin: 1.5rem 0 0.75rem; color: #8e24aa;">${renderNodes(node.children || [])}</h3>`;

    // Lists
    if (node.type === 'ul' || node.type === 'ol') {
      const tag = node.type;
      return `<${tag} style="margin-bottom: 1.5rem; padding-left: 2rem;">${renderNodes(node.children || [])}</${tag}>`;
    }
    if (node.type === 'li') {
      return `<li style="margin-bottom: 0.5rem;">${renderNodes(node.children || [])}</li>`;
    }

    // Text with formatting
    if (node.text !== undefined) {
      let text = node.text;
      if (node.bold) text = `<strong>${text}</strong>`;
      if (node.italic) text = `<em>${text}</em>`;
      if (node.underline) text = `<u>${text}</u>`;
      return text;
    }

    // Blockquote
    if (node.type === 'blockquote') {
      return `<blockquote style="border-left: 4px solid #6a1b9a; padding-left: 1.5rem; margin: 1.5rem 0; font-style: italic; color: #666;">${renderNodes(node.children || [])}</blockquote>`;
    }

    // Code block
    if (node.type === 'code') {
      return `<pre style="background: #f5f5f5; padding: 1rem; border-radius: 8px; overflow-x: auto; margin: 1.5rem 0;"><code>${renderNodes(node.children || [])}</code></pre>`;
    }

    // Fragment
    if (node.type === 'fragment') {
      return renderNodes(node.children || []);
    }

    // If node has children, render them
    if (node.children) {
      return renderNodes(node.children);
    }

    return '';
  };

  const extractTextFromJSON = (obj: any): string => {
    if (typeof obj === 'string') return obj;
    if (!obj) return '';

    let result = '';
    
    if (obj.text) {
      result += obj.text;
    }
    
    if (obj.children && Array.isArray(obj.children)) {
      result += obj.children.map(extractTextFromJSON).join('');
    }

    // Wrap paragraphs
    if (obj.type === 'p' && result) {
      result = `<p style="margin-bottom: 1.5rem; line-height: 1.8;">${result}</p>`;
    }
    
    return result;
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !blogPost) {
    return (
      <div className="container" style={{ 
        textAlign: 'center', 
        padding: '4rem 0',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{ color: '#6a1b9a', marginBottom: '1rem' }}>Blog Post Not Found</h1>
        <p style={{ marginBottom: '2rem', color: '#666' }}>
          Sorry, the blog post you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/blogs" className="btn start" style={{ textDecoration: 'none' }}>
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        defaultTitle={`${blogPost.title} | ContentFlow Blog`}
        defaultDescription={blogPost.excerpt}
      />
      
      <div className="blog-post-page">
        {/* Hero Section */}
        <section className="blog-hero" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/Report.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '6rem 0 4rem',
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
          <div style={{
            position: 'absolute',
            bottom: '-15%',
            left: '-5%',
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 12s ease-in-out infinite 2s'
          }}></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="blog-header" style={{ 
              maxWidth: '900px', 
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <div style={{ marginBottom: '2rem' }}>
                <Link to="/blogs" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '12px 28px',
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '50px',
                  border: '2px solid rgba(255,255,255,0.3)',
                  fontWeight: '600',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                  e.currentTarget.style.transform = 'translateX(-8px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
                }}>
                  ← Back to Blog
                </Link>
              </div>
              
              <div style={{ 
                backgroundColor: 'rgba(255,255,255,0.2)', 
                display: 'inline-block',
                padding: '0.6rem 1.5rem',
                borderRadius: '25px',
                fontSize: '0.95rem',
                marginBottom: '1.5rem',
                fontWeight: '600',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                border: '1px solid rgba(255,255,255,0.3)',
                backdropFilter: 'blur(10px)'
              }}>
                {blogPost.category}
              </div>
              
              <h1 style={{ 
                fontSize: '3.5rem', 
                marginBottom: '1.5rem',
                lineHeight: '1.15',
                fontWeight: '800',
                letterSpacing: '-0.5px',
                textShadow: '0 4px 20px rgba(0,0,0,0.2)',
                animation: 'fadeInUp 0.6s ease-out'
              }}>
                {blogPost.title}
              </h1>
              
              <p style={{ 
                fontSize: '1.35rem', 
                opacity: 0.95,
                marginBottom: '2.5rem',
                lineHeight: '1.7',
                maxWidth: '800px',
                margin: '0 auto 2.5rem',
                fontWeight: '400',
                animation: 'fadeInUp 0.8s ease-out'
              }}>
                {blogPost.excerpt}
              </p>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2.5rem',
                flexWrap: 'wrap',
                animation: 'fadeInUp 1s ease-out'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  padding: '0.5rem 1rem',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}>
                  <ImageSync
                    src={blogPost.author?.profile_picture?.url || blogPost.author?.profile_picture || '/images/Neha mam.jpg'}
                    alt={blogPost.author?.name || blogPost.author?.title || 'Author'}
                    fallbackSrc="/images/Neha mam.jpg"
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '3px solid rgba(255,255,255,0.5)',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                    }}
                  />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: '700', fontSize: '1.05rem' }}>
                      {blogPost.author?.name || blogPost.author?.title || 'ContentFlow Team'}
                    </div>
                    <div style={{ opacity: 0.85, fontSize: '0.95rem', marginTop: '2px' }}>
                      {formatDate(blogPost.publish_date)}
                    </div>
                  </div>
                </div>
                
                <div style={{ 
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '20px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{ fontSize: '1.2rem' }}>📖</span>
                  {blogPost.reading_time_minute} min read
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {blogPost.featured_image && (
          <section style={{ 
            padding: '3rem 0',
            background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)'
          }}>
            <div className="container">
              <div style={{
                maxWidth: '1000px',
                margin: '0 auto',
                position: 'relative'
              }}>
                {/* Decorative frame */}
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '-15px',
                  right: '15px',
                  bottom: '15px',
                  background: 'linear-gradient(135deg, rgba(106, 27, 154, 0.1) 0%, rgba(142, 36, 170, 0.1) 100%)',
                  borderRadius: '25px',
                  zIndex: 0
                }}></div>
                
                <ImageSync
                  src={blogPost.featured_image}
                  alt={blogPost.title}
                  fallbackSrc="/images/BlogHero-Product_Updates-01.webp"
                  style={{
                    width: '100%',
                    height: '500px',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    display: 'block',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                    position: 'relative',
                    zIndex: 1,
                    border: '5px solid white'
                  }}
                />
              </div>
            </div>
          </section>
        )}

        {/* Blog Content */}
        <section style={{ 
          padding: '4rem 0 5rem',
          background: 'white'
        }}>
          <div className="container">
            <div style={{ 
              maxWidth: '850px', 
              margin: '0 auto',
              position: 'relative'
            }}>
              {/* Content styling wrapper */}
              <style>{`
                .blog-content {
                  font-size: 1.15rem;
                  line-height: 1.85;
                  color: #2c3e50;
                }
                .blog-content p {
                  margin-bottom: 1.8rem !important;
                  line-height: 1.85 !important;
                  color: #2c3e50 !important;
                }
                .blog-content h1 {
                  font-size: 2.5rem !important;
                  margin: 3rem 0 1.5rem !important;
                  color: #1a1a1a !important;
                  font-weight: 800 !important;
                  line-height: 1.2 !important;
                  letter-spacing: -0.5px !important;
                }
                .blog-content h2 {
                  font-size: 2rem !important;
                  margin: 2.5rem 0 1.2rem !important;
                  color: #1a1a1a !important;
                  font-weight: 700 !important;
                  line-height: 1.3 !important;
                  padding-bottom: 0.5rem !important;
                  border-bottom: 3px solid #6a1b9a !important;
                }
                .blog-content h3 {
                  font-size: 1.6rem !important;
                  margin: 2rem 0 1rem !important;
                  color: #6a1b9a !important;
                  font-weight: 700 !important;
                  line-height: 1.4 !important;
                }
                .blog-content h4 {
                  font-size: 1.3rem !important;
                  margin: 1.5rem 0 0.75rem !important;
                  color: #8e24aa !important;
                  font-weight: 600 !important;
                }
                .blog-content ul, .blog-content ol {
                  margin: 1.5rem 0 1.5rem 2rem !important;
                  padding-left: 1rem !important;
                }
                .blog-content li {
                  margin-bottom: 0.8rem !important;
                  line-height: 1.75 !important;
                }
                .blog-content ul li {
                  list-style-type: none !important;
                  position: relative !important;
                  padding-left: 1.5rem !important;
                }
                .blog-content ul li::before {
                  content: "→" !important;
                  position: absolute !important;
                  left: 0 !important;
                  color: #6a1b9a !important;
                  font-weight: bold !important;
                }
                .blog-content blockquote {
                  border-left: 5px solid #6a1b9a !important;
                  padding: 1.5rem 2rem !important;
                  margin: 2rem 0 !important;
                  background: #f8f4ff !important;
                  border-radius: 0 10px 10px 0 !important;
                  font-style: italic !important;
                  color: #4a4a4a !important;
                  box-shadow: 0 5px 15px rgba(106, 27, 154, 0.08) !important;
                }
                .blog-content code {
                  background: #f8f9fa !important;
                  padding: 0.25rem 0.5rem !important;
                  border-radius: 5px !important;
                  font-family: 'Courier New', monospace !important;
                  color: #e83e8c !important;
                  font-size: 0.9em !important;
                }
                .blog-content pre {
                  background: #2d2d2d !important;
                  padding: 1.5rem !important;
                  border-radius: 12px !important;
                  overflow-x: auto !important;
                  margin: 2rem 0 !important;
                  box-shadow: 0 10px 30px rgba(0,0,0,0.2) !important;
                }
                .blog-content pre code {
                  background: transparent !important;
                  color: #f8f8f2 !important;
                  padding: 0 !important;
                }
                .blog-content strong {
                  font-weight: 700 !important;
                  color: #1a1a1a !important;
                }
                .blog-content em {
                  font-style: italic !important;
                  color: #555 !important;
                }
                .blog-content a {
                  color: #6a1b9a !important;
                  text-decoration: none !important;
                  border-bottom: 2px solid rgba(106, 27, 154, 0.3) !important;
                  transition: all 0.2s ease !important;
                }
                .blog-content a:hover {
                  color: #8e24aa !important;
                  border-bottom-color: #8e24aa !important;
                }
                .blog-content img {
                  max-width: 100% !important;
                  height: auto !important;
                  border-radius: 12px !important;
                  margin: 2rem 0 !important;
                  box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
                }
                .blog-content hr {
                  border: none !important;
                  height: 2px !important;
                  background: linear-gradient(90deg, transparent 0%, #6a1b9a 50%, transparent 100%) !important;
                  margin: 3rem 0 !important;
                }
              `}</style>
              
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: renderRichText(blogPost.content)
                }}
                className="blog-content"
              />
            </div>
          </div>
        </section>

        {/* Author Bio */}
        {blogPost.author && (
          <section style={{ 
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e8eaf6 100%)', 
            padding: '4rem 0',
            borderTop: '2px solid rgba(106, 27, 154, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Background decoration */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(106, 27, 154, 0.05) 0%, transparent 70%)',
              borderRadius: '50%'
            }}></div>
            
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ 
                maxWidth: '900px', 
                margin: '0 auto',
                background: 'white',
                borderRadius: '25px',
                padding: '3rem',
                boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
                border: '2px solid rgba(106, 27, 154, 0.1)'
              }}>
                <div style={{
                  display: 'flex',
                  gap: '2.5rem',
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ position: 'relative' }}>
                    {/* Decorative ring behind avatar */}
                    <div style={{
                      position: 'absolute',
                      top: '-10px',
                      left: '-10px',
                      width: '140px',
                      height: '140px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(106, 27, 154, 0.2) 0%, rgba(142, 36, 170, 0.2) 100%)',
                      animation: 'pulse 3s ease-in-out infinite'
                    }}></div>
                    
                    <ImageSync
                      src={blogPost.author.profile_picture?.url || blogPost.author.profile_picture || '/images/Neha mam.jpg'}
                      alt={blogPost.author.name || blogPost.author.title || 'Author'}
                      fallbackSrc="/images/Neha mam.jpg"
                      style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '4px solid white',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                        position: 'relative',
                        zIndex: 1
                      }}
                    />
                  </div>
                  
                  <div style={{ flex: 1, minWidth: '300px' }}>
                    <div style={{
                      fontSize: '0.85rem',
                      color: '#8e24aa',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '0.75rem'
                    }}>
                      About the Author
                    </div>
                    <h3 style={{ 
                      color: '#1a1a1a', 
                      marginBottom: '1rem',
                      fontSize: '1.8rem',
                      fontWeight: '700'
                    }}>
                      {blogPost.author.name || blogPost.author.title || 'ContentFlow Team'}
                    </h3>
                    <p style={{ 
                      color: '#666', 
                      fontSize: '1.1rem',
                      lineHeight: '1.7',
                      margin: 0
                    }}>
                      {blogPost.author.bio || blogPost.author.description || 'A passionate content creator and technology enthusiast dedicated to sharing insights and knowledge with the ContentFlow community.'}
                    </p>
                    
                    {/* Social Links if available */}
                    {(blogPost.author.twitter || blogPost.author.linkedin || blogPost.author.github) && (
                      <div style={{
                        display: 'flex',
                        gap: '1rem',
                        marginTop: '1.5rem'
                      }}>
                        {blogPost.author.twitter && (
                          <a 
                            href={blogPost.author.twitter} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                              color: '#6a1b9a',
                              fontSize: '1.3rem',
                              transition: 'transform 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          >
                            🐦
                          </a>
                        )}
                        {blogPost.author.linkedin && (
                          <a 
                            href={blogPost.author.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                              color: '#6a1b9a',
                              fontSize: '1.3rem',
                              transition: 'transform 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          >
                            LI
                          </a>
                        )}
                        {blogPost.author.github && (
                          <a 
                            href={blogPost.author.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                              color: '#6a1b9a',
                              fontSize: '1.3rem',
                              transition: 'transform 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          >
                            💻
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Back to Blog CTA */}
        <section style={{ 
          padding: '5rem 0',
          textAlign: 'center',
          background: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '10%',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(106, 27, 154, 0.06) 0%, transparent 70%)',
            borderRadius: '50%',
            transform: 'translateY(-50%)'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '50%',
            right: '10%',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(142, 36, 170, 0.06) 0%, transparent 70%)',
            borderRadius: '50%',
            transform: 'translateY(-50%)'
          }}></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              color: '#1a1a1a',
              fontWeight: '700'
            }}>
              Enjoyed This Article?
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              margin: '0 auto 2.5rem'
            }}>
              Explore more insights, tutorials, and industry trends on our blog
            </p>
            <Link 
              to="/blogs" 
              style={{
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '1.1rem',
                padding: '16px 48px',
                background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                color: 'white',
                borderRadius: '50px',
                fontWeight: '700',
                boxShadow: '0 10px 30px rgba(106, 27, 154, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(106, 27, 154, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(106, 27, 154, 0.3)';
              }}
            >
              Read More Articles
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPost;
