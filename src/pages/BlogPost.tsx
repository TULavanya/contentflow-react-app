import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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
  const { fetchContent } = useContentstack();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogPost = async () => {
      if (!slug) {
        setError('No blog post specified');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        
        // Fetch from Contentstack only - no fallback
        const response = await fetchContent('blog_post', {
          'url': slug
        });
        
        if (response && response.length > 0) {
          setBlogPost(response[0]);
        } else {
          throw new Error('Blog post not found in Contentstack');
        }
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Blog post not found');
      } finally {
        setLoading(false);
      }
    };

    loadBlogPost();
  }, [slug, fetchContent]);

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
          background: getGradient(blogPost.gradient_colors),
          padding: '4rem 0',
          color: 'white',
          position: 'relative'
        }}>
          <div className="container">
            <div className="blog-header" style={{ 
              maxWidth: '800px', 
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <Link to="/blogs" style={{
                  color: 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  ← Back to Blog
                </Link>
              </div>
              
              <div style={{ 
                backgroundColor: 'rgba(255,255,255,0.2)', 
                display: 'inline-block',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                marginBottom: '1rem'
              }}>
                {blogPost.category}
              </div>
              
              <h1 style={{ 
                fontSize: '2.5rem', 
                marginBottom: '1rem',
                lineHeight: '1.2',
                fontWeight: '700'
              }}>
                {blogPost.title}
              </h1>
              
              <p style={{ 
                fontSize: '1.2rem', 
                opacity: 0.9,
                marginBottom: '2rem',
                lineHeight: '1.6'
              }}>
                {blogPost.excerpt}
              </p>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem',
                flexWrap: 'wrap'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <ImageSync
                    src={blogPost.author?.profile_picture}
                    alt={blogPost.author?.name || 'Author'}
                    fallbackSrc="/images/logo.png"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: '600' }}>{blogPost.author?.name}</div>
                    <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>
                      {formatDate(blogPost.publish_date)}
                    </div>
                  </div>
                </div>
                
                <div style={{ 
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  padding: '0.5rem 1rem',
                  borderRadius: '15px',
                  fontSize: '0.9rem'
                }}>
                  {blogPost.reading_time_minute} min read
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {blogPost.featured_image && (
          <section style={{ padding: '2rem 0' }}>
            <div className="container">
              <ImageSync
                src={blogPost.featured_image}
                alt={blogPost.title}
                fallbackSrc="/images/BlogHero-Product_Updates-01.webp"
                style={{
                  width: '100%',
                  maxWidth: '900px',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '15px',
                  margin: '0 auto',
                  display: 'block',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
              />
            </div>
          </section>
        )}

        {/* Blog Content */}
        <section style={{ padding: '2rem 0 4rem' }}>
          <div className="container">
            <div style={{ 
              maxWidth: '800px', 
              margin: '0 auto',
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#333'
            }}>
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: typeof blogPost.content === 'string' 
                    ? blogPost.content 
                    : JSON.stringify(blogPost.content) 
                }}
                style={{
                  '& h2': {
                    color: '#6a1b9a',
                    fontSize: '1.8rem',
                    marginTop: '2rem',
                    marginBottom: '1rem'
                  },
                  '& h3': {
                    color: '#8e24aa',
                    fontSize: '1.4rem',
                    marginTop: '1.5rem',
                    marginBottom: '0.75rem'
                  },
                  '& p': {
                    marginBottom: '1.5rem'
                  },
                  '& ul, & ol': {
                    marginBottom: '1.5rem',
                    paddingLeft: '2rem'
                  },
                  '& li': {
                    marginBottom: '0.5rem'
                  }
                } as any}
              />
            </div>
          </div>
        </section>

        {/* Author Bio */}
        {blogPost.author && (
          <section style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '3rem 0',
            borderTop: '1px solid #e9ecef'
          }}>
            <div className="container">
              <div style={{ 
                maxWidth: '800px', 
                margin: '0 auto',
                display: 'flex',
                gap: '2rem',
                alignItems: 'center',
                flexWrap: 'wrap'
              }}>
                <ImageSync
                  src={blogPost.author.profile_picture}
                  alt={blogPost.author.name}
                  fallbackSrc="/images/logo.png"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    color: '#6a1b9a', 
                    marginBottom: '0.5rem',
                    fontSize: '1.3rem'
                  }}>
                    About {blogPost.author.name}
                  </h3>
                  <p style={{ 
                    color: '#666', 
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {blogPost.author.bio}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Back to Blog CTA */}
        <section style={{ 
          padding: '3rem 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <Link 
              to="/blogs" 
              className="btn start"
              style={{
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '1.1rem'
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
