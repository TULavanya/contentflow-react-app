import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContentstack } from '../context/ContentstackContext';
import SEOHead from '../components/SEOHead';
import LoadingSpinner from '../components/LoadingSpinner';
import ImageSync, { safeTextContent, safeIconContent } from '../components/ImageSync';

const Blogs: React.FC = () => {
  const { fetchContent } = useContentstack();
  const [blogsData, setBlogsData] = useState<any>(null);
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Author profile picture mapping for when Contentstack doesn't have images
  const getAuthorProfilePicture = (author: any): string | undefined => {
    console.log(' [Blogs] getAuthorProfilePicture called with:', {
      author,
      isArray: Array.isArray(author),
      authorName: author?.name || author?.title || (Array.isArray(author) && author[0]?.name),
      profilePicture: author?.profile_picture
    });
    
    // Try to get the image from Contentstack data first - but ONLY if it's valid and non-empty
    const pic = author?.profile_picture;
    if (pic) {
      // Check if it's a non-empty string
      if (typeof pic === 'string' && pic.trim().length > 0) {
        console.log(' [Blogs] Using Contentstack string URL:', pic.trim());
        return pic.trim();
      }
      // Check if it's an object with a non-empty url property
      if (typeof pic === 'object' && pic.url && typeof pic.url === 'string' && pic.url.trim().length > 0) {
        console.log(' [Blogs] Using Contentstack object URL:', pic.url.trim());
        return pic.url.trim();
      }
      // If we get here, pic exists but is empty/invalid
      console.log('️ [Blogs] Profile picture exists but is empty or invalid:', pic);
    }
    
    // If author is an array (from reference field), try first item
    if (Array.isArray(author) && author.length > 0) {
      const firstAuthor = author[0];
      const firstPic = firstAuthor?.profile_picture;
      if (firstPic) {
        if (typeof firstPic === 'string' && firstPic.trim().length > 0) {
          console.log(' [Blogs] Using Contentstack array string URL:', firstPic.trim());
          return firstPic.trim();
        }
        if (typeof firstPic === 'object' && firstPic.url && typeof firstPic.url === 'string' && firstPic.url.trim().length > 0) {
          console.log(' [Blogs] Using Contentstack array object URL:', firstPic.url.trim());
          return firstPic.url.trim();
        }
        console.log('️ [Blogs] Array author profile picture exists but is empty or invalid:', firstPic);
      }
    }
    
    // Fallback to local images based on author name
    const authorName = author?.name || author?.title || (Array.isArray(author) && author[0]?.name) || '';
    const authorImageMap: { [key: string]: string } = {
      'Lo Etheridge': '/images/Lo Etheridge.jpg',
      'Kaustubh Rai': '/images/Kaustubh Rai.jpg',
      'Ben Goldstein': '/images/Ben Goldstein.jpg',
      'Sarah Chen': '/images/Jessica.png',
      'Michael Torres': '/images/Conor.jpg',
      'Emily Rodriguez': '/images/Renee.jpg'
    };
    
    const mappedImage = authorImageMap[authorName];
    console.log(` [Blogs] Author "${authorName}" mapped to local image:`, mappedImage || 'NO MAPPING FOUND');
    
    // Add cache buster to force fresh load (increment this version when images change)
    const imageWithCacheBuster = mappedImage ? `${mappedImage}?v=10` : undefined;
    console.log(` [Blogs] FINAL RETURN VALUE:`, imageWithCacheBuster || 'undefined');
    
    return imageWithCacheBuster;
  };

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      try {
        const data = await fetchContent('blogs_page');
        console.log('Blogs page data:', data);
        console.log('Blogs images check:', {
          hasData: !!data,
          featuredArticle: data?.featured_article,
          featuredArticleIcon: data?.featured_article?.icon
        });
        setBlogsData(data);

        // Fetch all blog posts with author reference
        const posts = await fetchContent('blog_post', { 
          allEntries: true,
          include: ['author'] // Include author reference to get author data
        });
        console.log(' Blog posts fetched from Contentstack:', posts);
        if (posts && posts.length > 0) {
          console.log(' First blog post image check:', {
            title: posts[0]?.title,
            featured_image: posts[0]?.featured_image,
            featured_image_url: posts[0]?.featured_image?.url,
            image: posts[0]?.image,
            image_url: posts[0]?.image?.url,
            thumbnail: posts[0]?.thumbnail,
            author: posts[0]?.author,
            authorProfilePic: posts[0]?.author?.[0]?.profile_picture || posts[0]?.author?.profile_picture
          });
          
          // Check all posts for images
          const postsWithImages = posts.filter((p: any) => p.featured_image || p.image);
          const postsWithoutImages = posts.filter((p: any) => !p.featured_image && !p.image);
          console.log(` Posts with images: ${postsWithImages.length}`);
          console.log(` Posts without images: ${postsWithoutImages.length}`);
          if (postsWithoutImages.length > 0) {
            console.warn('️ These posts are missing images:', postsWithoutImages.map((p: any) => p.title));
          }
        }
        // If no posts from Contentstack, use fallback
        if (!posts || posts.length === 0) {
          console.warn('️ No blog posts in Contentstack, using fallback data');
          setBlogPosts(fallbackBlogPosts);
        } else {
          setBlogPosts(posts);
        }
      } catch (error) {
        console.error(' Error loading blogs content:', error);
        console.log(' Using fallback blog posts');
        setBlogPosts(fallbackBlogPosts);
      } finally {
        setIsLoading(false);
      }
    };
    loadContent();
  }, [fetchContent]);
  
  // Comprehensive fallback blog posts (will use Contentstack data when available)
  const fallbackBlogPosts = [
    {
      title: 'How We Use AI to Speed Up Manual Penetration Testing at Contentstack',
      url: 'engineering/how-we-use-ai-to-speed-up-manual-penetration-testing-at-contentstack',
      excerpt: 'Contentstack is more than just a headless CMS today. It\'s a composable DXP with Marketplace, Automation Hub, Brand Kit, Launch, Personalization and Lytics. That composability is powerful for builders, but it expands the attack surface.',
      category: 'ENGINEERING',
      publish_date: '2025-10-15',
      reading_time_minute: 10,
      featured_image: { url: '/images/Security.jpg' },
      author: {
        name: 'Kaustubh Rai',
        title: 'Security Engineer',
        profile_picture: { url: '' }
      },
      icon: ''
    },
    {
      title: 'Understanding Customer Behavior with Real-Time Analytics',
      url: 'marketing/understanding-customer-behavior-analytics',
      excerpt: 'Customer AI is the key they believe is to visit your site on a given day. When you have context, you can stop guessing at what your customers want and start adapting to them.',
      category: 'MARKETING',
      publish_date: '2025-10-22',
      reading_time_minute: 25,
      featured_image: { url: '/images/Customer Analytics.jpg' },
      author: {
        name: 'Ben Goldstein',
        title: 'Product Marketing Lead',
        profile_picture: { url: '' }
      },
      icon: ''
    },
    {
      title: 'Discover How AI Agents Accelerate Content Creation',
      url: 'product/ai-agents-content-creation',
      excerpt: 'Discover how our new AI agents can accelerate content creation, optimization, and personalization while maintaining your brand voice.',
      category: 'PRODUCT',
      publish_date: '2025-10-01',
      reading_time_minute: 8,
      featured_image: { url: '/images/AI-Powered Agents.png' },
      author: {
        name: 'Lo Etheridge',
        title: 'Head of Product',
        profile_picture: { url: '' }
      },
      icon: ''
    },
    {
      title: 'Building Scalable Headless CMS Architecture',
      url: 'engineering/scalable-headless-cms-architecture',
      excerpt: 'Learn how to design and implement a scalable, performant headless CMS architecture that grows with your business needs.',
      category: 'ENGINEERING',
      publish_date: '2025-09-28',
      reading_time_minute: 15,
      featured_image: { url: '/images/Headless CMS.png' },
      author: {
        name: 'Sarah Chen',
        title: 'Principal Engineer',
        profile_picture: { url: '' }
      },
      icon: '️'
    },
    {
      title: 'The Future of Digital Experience Platforms',
      url: 'thought-leadership/future-of-dxp',
      excerpt: 'Exploring the trends shaping the future of digital experiences, from AI personalization to composable architecture.',
      category: 'THOUGHT LEADERSHIP',
      publish_date: '2025-09-20',
      reading_time_minute: 12,
      featured_image: { url: '/images/Innovation.jpg' },
      author: {
        name: 'Michael Torres',
        title: 'CTO',
        profile_picture: { url: '' }
      },
      icon: ''
    },
    {
      title: 'Personalization at Scale: Best Practices',
      url: 'guides/personalization-best-practices',
      excerpt: 'A comprehensive guide to implementing effective personalization strategies that deliver measurable business results.',
      category: 'GUIDE',
      publish_date: '2025-09-15',
      reading_time_minute: 18,
      featured_image: { url: '/images/AI Personalization.jpg' },
      author: {
        name: 'Emily Rodriguez',
        title: 'Solutions Architect',
        profile_picture: { url: '' }
      },
      icon: ''
    }
  ];
  
  // Helper function to format date
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };
  
  // Helper function to get gradient from colors string
  const getGradient = (colors: string) => {
    if (!colors) return 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)';
    const colorArray = colors.split(',').map(c => c.trim());
    if (colorArray.length >= 2) {
      return `linear-gradient(135deg, ${colorArray[0]} 0%, ${colorArray[1]} 100%)`;
    }
    return colors;
  };
  
  // Get icon text based on category
  const getCategoryIcon = (category: string) => {
    const icons: any = {
      'PRODUCT': 'P',
      'GUIDE': 'G',
      'CASE STUDY': 'CS',
      'TUTORIAL': 'T',
      'RESEARCH': 'R',
      'BEST PRACTICES': 'BP'
    };
    return icons[category] || category.substring(0, 2).toUpperCase();
  };
  
  // Use only Contentstack data - no fallbacks
  const displayBlogPosts = blogPosts;

  // Show loading spinner while fetching data
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="blogs-page">
      <SEOHead seoData={blogsData?.seo_metadata} />
      
      {/* Hero Section */}
      <section className="hero-section" style={{
        background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 50%, #ab47bc 100%)'
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="animated-title">
            {safeTextContent(blogsData?.page_header?.page_title, 'Resources & Insights')}
          </h1>
          <p className="animated-subtitle">
            {safeTextContent(blogsData?.page_header?.page_description, 'Stay ahead with the latest guides, tutorials, and industry insights from the ContentFlow team.')}
          </p>
          <div style={{ marginTop: '30px', animation: 'fadeInUp 1.2s ease-out' }}>
            <input 
              type="text" 
              placeholder=" Search articles, guides, and tutorials..." 
              style={{
                width: '100%',
                maxWidth: '600px',
                padding: '20px 30px',
                fontSize: '1.1em',
                borderRadius: '50px',
                border: '3px solid rgba(255,255,255,0.3)',
                outline: 'none',
                background: 'rgba(255,255,255,0.95)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(106, 27, 154, 0.3)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
              }}
            />
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section style={{
        padding: '50px 20px', 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e8eaf6 100%)', 
        borderBottom: '2px solid #e0e0e0',
        position: 'sticky',
        top: '0',
        zIndex: 10,
        backdropFilter: 'blur(10px)'
      }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['All', 'Product Updates', 'Guides', 'Case Studies', 'Tutorials', 'Research', 'Best Practices'].map((category, index) => (
              <button
                key={index}
                style={{
                  padding: '14px 28px',
                  borderRadius: '30px',
                  border: index === 0 ? 'none' : '2px solid #6a1b9a',
                  background: index === 0 ? 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)' : 'white',
                  color: index === 0 ? 'white' : '#6a1b9a',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '1em',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                  boxShadow: index === 0 ? '0 5px 15px rgba(106, 27, 154, 0.3)' : '0 2px 8px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={(e) => {
                  if (index !== 0) {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)';
                    e.currentTarget.style.color = 'white';
                  }
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(106, 27, 154, 0.4)';
                }}
                onMouseLeave={(e) => {
                  if (index !== 0) {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = '#6a1b9a';
                  }
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = index === 0 ? '0 5px 15px rgba(106, 27, 154, 0.3)' : '0 2px 8px rgba(0,0,0,0.05)';
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section style={{ padding: '100px 20px', background: 'white' }}>
        <div className="container">
          <span style={{ 
            color: '#6a1b9a', 
            fontWeight: 'bold', 
            fontSize: '1em',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            {safeTextContent(blogsData?.featured_article?.section_label, 'Featured Article')}
          </span>
          
          <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            marginTop: '40px',
            alignItems: 'center',
            animation: 'fadeInUp 1s ease-out'
          }}>
            <div style={{
              height: '450px',
              borderRadius: '25px',
              overflow: 'hidden',
              boxShadow: '0 15px 40px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.4s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) rotate(-2deg)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(102, 126, 234, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.4)';
            }}>
              {blogsData?.featured_article?.icon ? (
                <img
                  src={
                    blogsData.featured_article.icon?.url || 
                    blogsData.featured_article.icon || 
                    '/images/BlogHero-Product_Updates-01.webp'
                  }
                  alt={safeTextContent(blogsData?.featured_article?.title, 'Featured Article')}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    console.error(' Featured article image failed to load:', blogsData?.featured_article);
                    e.currentTarget.src = '/images/BlogHero-Product_Updates-01.webp';
                  }}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5em',
                  fontWeight: 'bold'
                }}>
                  Upload Featured Article Image
                </div>
              )}
                </div>

            <div>
              <h2 style={{ 
                fontSize: '2.8em', 
                marginBottom: '25px', 
                lineHeight: 1.2,
                background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {safeTextContent(blogsData?.featured_article?.title, 'The Future of Content Management: AI, Personalization, and Composability')}
              </h2>
              <p style={{ fontSize: '1.2em', color: '#666', marginBottom: '30px', lineHeight: 1.7 }}>
                {safeTextContent(blogsData?.featured_article?.description, 'Explore how AI-powered content management, hyper-personalization, and composable architecture are reshaping the digital experience landscape in 2025 and beyond.')}
              </p>
              <div style={{ display: 'flex', gap: '25px', marginBottom: '30px', color: '#666', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  By {safeTextContent(blogsData?.featured_article?.author, 'Sarah Johnson')}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {safeTextContent(blogsData?.featured_article?.date, 'Oct 16, 2025')}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {safeTextContent(blogsData?.featured_article?.read_time, '15 min read')}
                  </span>
                </div>
              <Link to={blogsData?.featured_article?.article_link?.href || '#'} className="btn start" style={{
                fontSize: '1.1em',
                animation: 'pulse 2s ease-in-out infinite'
              }}>
                {safeTextContent(blogsData?.featured_article?.article_link?.title, 'Read Full Article')}
              </Link>
              </div>
            </div>
          </div>
        </section>

      {/* Blog Grid */}
      <section style={{ 
        padding: '100px 20px', 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e8eaf6 100%)'
      }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2.8em', 
            marginBottom: '20px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            {safeTextContent(blogsData?.blog_list_section?.section_title, 'Latest Articles')}
        </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.2em',
            color: '#666',
            marginBottom: '60px',
            animation: 'fadeInUp 1s ease-out'
          }}>
            {safeTextContent(blogsData?.blog_list_section?.section_description, 'Insights, tutorials, and thought leadership from our team')}
          </p>

          <div style={{
          display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px'
          }}>
            {displayBlogPosts.map((post: any, index: number) => (
              <div key={index} className="post-card" style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '600px',
                height: '100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px) rotate(1deg)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(106, 27, 154, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
              }}>
                <div style={{
                  height: '240px',
                  borderRadius: '15px 15px 0 0',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Blog Post Image */}
                  {(post.featured_image || post.image) ? (
                    <img
                      src={
                        post.featured_image?.url || 
                        post.featured_image || 
                        post.image?.url || 
                        post.image || 
                        '/images/BlogHero-Product_Updates-01.webp'
                      }
                      alt={safeTextContent(post.title, 'Blog Post')}
                      style={{ 
                        width: '100%', 
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        console.error(' Blog post image failed to load:', {
                          title: post.title,
                          featured_image: post.featured_image,
                          image: post.image
                        });
                        e.currentTarget.src = '/images/BlogHero-Product_Updates-01.webp';
                      }}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.2em',
                      fontWeight: 'bold'
                    }}>
                      No Image in Contentstack
                    </div>
                  )}
                  
                  {/* Overlay with gradient and category */}
                <div style={{
                  position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(106, 27, 154, 0.7) 0%, rgba(142, 36, 170, 0.6) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '20px'
                  }}>
                    {/* Category Badge */}
                    <div style={{
                      alignSelf: 'flex-start',
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: '#6a1b9a',
                      padding: '8px 16px',
                  borderRadius: '20px',
                      fontSize: '0.8em',
                  fontWeight: 'bold',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {safeTextContent(post.category, 'Category')}
                    </div>
                    
                    {/* Floating Icon */}
                    <div style={{
                      alignSelf: 'center',
                      fontSize: '3em',
                      color: 'white',
                      animation: 'float 3s ease-in-out infinite',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}>
                      {post.icon?.url ? (
                        <img src={post.icon.url} alt={safeTextContent(post.category, 'Category')} style={{ width: '60px', height: '60px' }} />
                      ) : (
                        <span>{safeIconContent(post.icon, getCategoryIcon(safeTextContent(post.category, 'Category')))}</span>
                      )}
                    </div>
                </div>
              </div>
                
                <div style={{ 
                  padding: '35px',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: '1'
                }}>
                  <span style={{ 
                    color: '#6a1b9a',
                    fontSize: '0.85em',
                    fontWeight: 'bold',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase'
                  }}>
                    {safeTextContent(post.category, 'Category')}
                  </span>
                  
                  <h3 style={{ 
                    margin: '20px 0', 
                    fontSize: '1.6em', 
                    lineHeight: 1.3,
                    color: '#333',
                    fontWeight: 'bold',
                    minHeight: '65px',
                    maxHeight: '65px',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                  }}>
                    {safeTextContent(post.title, 'Blog Title')}
                  </h3>
                  
                  <p style={{
                    color: '#666',
                    lineHeight: 1.7,
                    marginBottom: '25px',
                    fontSize: '1.05em',
                    minHeight: '90px',
                    maxHeight: '90px',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical'
                  }}>
                    {safeTextContent(post.excerpt, 'Blog excerpt')}
                  </p>
                  
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    paddingTop: '25px',
                    borderTop: '2px solid #e8eaf6',
                    fontSize: '0.9em',
                    color: '#666',
                    marginTop: 'auto'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <ImageSync
                        src={getAuthorProfilePicture(post.author)}
                        alt={safeTextContent(
                          post.author?.[0]?.name || 
                          post.author?.name || 
                          post.author?.[0]?.title || 
                          post.author?.title || 
                          'Author', 
                          'Author'
                        )}
                        fallbackSrc="/images/logo.png"
                        style={{
                          width: '45px',
                          height: '45px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '2px solid #e8eaf6'
                        }}
                      />
                      <div>
                        <div style={{ fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>
                          {safeTextContent(
                            post.author?.[0]?.name || 
                            post.author?.name || 
                            post.author?.[0]?.title || 
                            post.author?.title || 
                            'Content Team', 
                            'Content Team'
                          )}
                        </div>
                        <div>{post.publish_date ? formatDate(post.publish_date) : post.published_date ? formatDate(post.published_date) : 'Recent'}</div>
                      </div>
                    </div>
                    <div style={{ 
                      background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: 'bold'
                    }}>
                      {post.reading_time_minute ? `${safeTextContent(post.reading_time_minute, '5')} min read` : safeTextContent(post.readTime, '5 min read')}
                </div>
                  </div>
                  
                  <Link 
                    to={post.url ? `/blog/${post.url.replace(/^\/?(blog\/|blogs\/)+/, '').replace(/^\/+/, '')}` : '#'} 
                    className="btn start"
                    style={{ 
                      marginTop: '20px',
                      display: 'inline-block',
                      fontSize: '1em',
                      padding: '12px 30px',
                      textDecoration: 'none',
                      borderRadius: '50px',
                      background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
                      color: 'white',
                      fontWeight: 'bold',
                      boxShadow: '0 4px 15px rgba(106, 27, 154, 0.3)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(106, 27, 154, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(106, 27, 154, 0.3)';
                    }}
                  >
                    Read More
                  </Link>
              </div>
            </div>
          ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '70px' }}>
            <button className="btn talk" style={{ 
              fontSize: '1.2em',
              padding: '16px 40px',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
              color: 'white',
              border: 'none',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(106, 27, 154, 0.4)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(106, 27, 154, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(106, 27, 154, 0.4)';
            }}>
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section style={{ 
        padding: '100px 20px', 
        background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ 
            fontSize: '2.5em', 
            marginBottom: '20px',
            fontWeight: 'bold',
            color: '#6a1b9a'
          }}>
            Newsletter
          </div>
          <h2 style={{ 
            fontSize: '2.8em', 
            marginBottom: '25px',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            {safeTextContent(blogsData?.newsletter_section?.section_title, 'Stay in the Loop')}
          </h2>
          <p style={{ 
            fontSize: '1.3em', 
            opacity: 0.95, 
            marginBottom: '50px', 
            maxWidth: '650px', 
            margin: '0 auto 50px',
            lineHeight: 1.6,
            animation: 'fadeInUp 1s ease-out'
          }}>
            {safeTextContent(blogsData?.newsletter_section?.section_description, 'Get the latest insights, tutorials, and product updates delivered straight to your inbox every week.')}
          </p>
          
          <div style={{ 
          display: 'flex',
            gap: '15px', 
          justifyContent: 'center',
            maxWidth: '650px',
            margin: '0 auto',
            flexWrap: 'wrap',
            animation: 'fadeInUp 1.2s ease-out'
        }}>
          <input 
            type="email" 
              placeholder="Enter your email address" 
            style={{
              flex: 1,
                minWidth: '320px',
                padding: '20px 30px',
                fontSize: '1.1em',
                borderRadius: '50px',
                border: '3px solid rgba(255,255,255,0.3)',
                outline: 'none',
                background: 'rgba(255,255,255,0.95)',
                color: '#333',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <button className="btn" style={{
              background: 'white',
              color: '#6a1b9a',
              padding: '20px 45px',
              fontSize: '1.1em',
              fontWeight: 'bold',
            border: 'none',
              boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
            }}>
              Subscribe Now
            </button>
          </div>

          <p style={{ fontSize: '0.95em', opacity: 0.8, marginTop: '25px' }}>
            Join 50,000+ subscribers • Unsubscribe anytime • No spam, ever
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
