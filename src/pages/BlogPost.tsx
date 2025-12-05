import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useContentstack, onEntryChange } from '../context/ContentstackContext';
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
    title?: string;
    bio: string;
    description?: string;
    profile_picture: any;
    twitter?: string;
    linkedin?: string;
    github?: string;
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
        console.log(' Looking for blog post with slug:', cleanSlug);
        console.log(' Original slug from URL:', postSlug);
        console.log(' Full pathname:', location.pathname);
        
        // Strategy 1: Fetch all blog posts and find by URL matching
        const allPosts = await fetchContent('blog_post', {
          allEntries: true,
          include: ['author'] // Include author reference
        });
        
        console.log(' All blog posts fetched:', allPosts);
        
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
                postUrlParts.every((part: string, idx: number) => cleanSlugParts[idx] === part)) return true;
            
            return false;
          });
          
          if (foundPost) {
            console.log('=== BLOG POST DEBUG ===');
            console.log(' Found blog post:', foundPost.title);
            console.log(' URL matched:', foundPost.url);
            console.log('️ Featured Image RAW:', foundPost.featured_image);
            console.log('️ Featured Image type:', typeof foundPost.featured_image, Array.isArray(foundPost.featured_image) ? 'Array' : 'Object');
            console.log('️ Featured Image URL:', foundPost.featured_image?.url || 'NO URL');
            console.log(' Author data RAW:', foundPost.author);
            console.log(' Author type:', typeof foundPost.author, Array.isArray(foundPost.author) ? 'Array' : 'Object');
            console.log(' Author full structure:', JSON.stringify(foundPost.author, null, 2));
            
            // Ensure author data is properly structured
            if (foundPost.author) {
              // If author is an array (reference), take the first item
              if (Array.isArray(foundPost.author) && foundPost.author.length > 0) {
                console.log(' Author was an array, extracting first item...');
                foundPost.author = foundPost.author[0];
                console.log(' Extracted author:', foundPost.author);
              }
              
              // Handle profile_picture if it's an array or needs extraction
              if (foundPost.author.profile_picture) {
                if (Array.isArray(foundPost.author.profile_picture) && foundPost.author.profile_picture.length > 0) {
                  console.log(' Author profile picture was an array, extracting first item...');
                  foundPost.author.profile_picture = foundPost.author.profile_picture[0];
                }
                
                // If profile_picture is an empty string or invalid, remove it to use fallback
                if (typeof foundPost.author.profile_picture === 'string' && foundPost.author.profile_picture.trim() === '') {
                  console.log(' Author profile picture is empty string, will use fallback');
                  foundPost.author.profile_picture = null;
                }
              }
              
              console.log(' Final author data:', {
                name: foundPost.author?.name || foundPost.author?.title,
                bio: foundPost.author?.bio,
                profile_picture: foundPost.author?.profile_picture,
                profile_picture_url: foundPost.author?.profile_picture?.url || foundPost.author?.profile_picture || 'NO URL'
              });
            } else {
              console.error(' NO AUTHOR DATA IN BLOG POST');
            }
            
            // Handle featured_image if it's an array
            if (foundPost.featured_image && Array.isArray(foundPost.featured_image) && foundPost.featured_image.length > 0) {
              console.log('️ Featured image was an array, extracting first item...');
              foundPost.featured_image = foundPost.featured_image[0];
              console.log('️ Extracted featured image:', foundPost.featured_image);
            }
            
            console.log('️ Final featured image URL:', foundPost.featured_image?.url || foundPost.featured_image);
            
            setBlogPost(foundPost);
          } else {
            console.warn('️ No blog post found matching:', cleanSlug);
            console.warn('Available URLs:', allPosts.map((p: any) => p.url));
            
            // Try fallback blog posts
            console.log(' Searching fallback blog posts...');
            const fallbackPost = getFallbackBlogPost(cleanSlug);
            if (fallbackPost) {
              console.log(' Using fallback blog post:', fallbackPost.title);
              setBlogPost(fallbackPost);
            } else {
              throw new Error('Blog post not found');
            }
          }
        } else {
          console.warn('️ No blog posts found in Contentstack, using fallback');
          const fallbackPost = getFallbackBlogPost(cleanSlug);
          if (fallbackPost) {
            console.log(' Using fallback blog post:', fallbackPost.title);
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
  
  // Fallback blog posts - COMPLETE DATA FOR ALL POSTS
  const getFallbackBlogPost = (slug: string): BlogPost | null => {
    const fallbackPosts: BlogPost[] = [
      {
        title: 'How We Use AI to Speed Up Manual Penetration Testing at Contentstack',
        url: 'engineering/how-we-use-ai-to-speed-up-manual-penetration-testing-at-contentstack',
        excerpt: 'Contentstack is more than just a headless CMS today. It\'s a composable DXP with Marketplace, Automation Hub, Brand Kit, Launch, Personalization and Lytics. That composability is powerful for builders, but it expands the attack surface. Automation catches many classes of issues, but the most interesting bugs still show up when a human tests with domain context: auth edges, tenant boundaries, unusual encodings and quirky parsers. That\'s why manual testing remains central to our security reviews. Over one week, we streamlined one of the slowest manual loops — "think → craft input → send → compare" — by wiring a small AI helper into BurpSuite. This post describes the helper, how we use it and how it fits our process.',
        content: `<h2>Introduction</h2>
        <p>Contentstack is more than just a headless CMS today. It's a composable DXP with Marketplace, Automation Hub, Brand Kit, Launch, Personalization and Lytics. That composability is powerful for builders, but it expands the attack surface. Automation catches many classes of issues, but the most interesting bugs still show up when a human tests with domain context: auth edges, tenant boundaries, unusual encodings and quirky parsers. That's why manual testing remains central to our security reviews.</p>
        
        <h2>The Challenge</h2>
        <p>Over one week, we streamlined one of the slowest manual loops — "think → craft input → send → compare" — by wiring a small AI helper into BurpSuite. This post describes the helper, how we use it and how it fits our process.</p>
        
        <h2>Our Security Testing Approach</h2>
        <p>Manual penetration testing requires careful analysis of authentication boundaries, tenant isolation, and edge cases that automated tools often miss. While automation is valuable for catching common vulnerabilities, sophisticated attacks require human intuition and domain expertise.</p>
        
        <h2>The AI Solution</h2>
        <p>We integrated a lightweight AI assistant directly into our BurpSuite workflow. The AI helps with:</p>
        <ul>
          <li><strong>Request Generation:</strong> Quickly crafting test payloads based on context</li>
          <li><strong>Pattern Recognition:</strong> Identifying suspicious response patterns</li>
          <li><strong>Encoding Variations:</strong> Suggesting alternative encodings for bypass attempts</li>
          <li><strong>Documentation:</strong> Auto-generating test notes and findings</li>
        </ul>
        
        <h2>Implementation Details</h2>
        <p>The AI helper runs locally and integrates with BurpSuite's extension API. It analyzes request/response pairs and suggests next test vectors while keeping the security tester in full control of what gets executed.</p>
        
        <h2>Results and Impact</h2>
        <p>Since implementing this approach, we've seen:</p>
        <ul>
          <li>40% reduction in time spent crafting test payloads</li>
          <li>Increased coverage of edge cases</li>
          <li>Better documentation of test procedures</li>
          <li>More consistent testing methodology across the team</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>AI-assisted penetration testing represents a significant evolution in security practices. By combining machine learning capabilities with human expertise, we can conduct more thorough, efficient security assessments.</p>`,
        featured_image: { url: '/images/Security.jpg', title: 'Security Testing' },
        category: 'ENGINEERING',
        publish_date: '2025-10-15',
        reading_time_minute: 10,
        author: {
          name: 'Kaustubh Rai',
          title: 'Application Security Engineer',
          bio: 'Application Security Engineer at Contentstack. He is adept at conducting extensive security testing, automating security protocols, and ensuring the safe deployment of a wide array of applications. Kaustubh thrives on the challenges of safeguarding digital environments and has a knack for identifying and rectifying vulnerabilities that others might overlook. Interests include discovering innovative hacking methods and continuously sharpening expertise through participation in diverse CTF competitions.',
          description: 'Application Security Engineer specializing in security testing and automation.',
          profile_picture: { url: '/images/Kaustubh Rai.jpg', title: 'Kaustubh Rai' },
          twitter: '',
          linkedin: '',
          github: ''
        },
        gradient_colors: '#6a1b9a, #8e24aa',
        icon: { url: '/images/Security.jpg' }
      },
      {
        title: 'What is Context and How Should Enterprise Brands Use It?',
        url: 'personalization/what-is-context-and-how-should-enterprise-brands-use-it',
        excerpt: 'Customer AI is the key they believe is to visit your site on a given day. When you have context, you can stop guessing at what your customers want and start adapting to them.',
        content: `<h2>Understanding Context in Digital Experiences</h2>
        <p>Customer AI is the key they believe is to visit your site on a given day. When you have context, you can stop guessing at what your customers want and start adapting to them.</p>
        
        <h2>What is Context?</h2>
        <p>Context is the combination of data points that tells you about your customer at a specific moment in time. It includes:</p>
        <ul>
          <li><strong>Behavioral Context:</strong> What pages they've visited, what content they've engaged with</li>
          <li><strong>Temporal Context:</strong> Time of day, day of week, season</li>
          <li><strong>Device Context:</strong> Mobile, desktop, tablet - each indicating different intent</li>
          <li><strong>Geographic Context:</strong> Location-based preferences and needs</li>
          <li><strong>Historical Context:</strong> Past purchases, interactions, and preferences</li>
        </ul>
        
        <h2>Why Context Matters for Enterprise Brands</h2>
        <p>Without context, you're treating all visitors the same. With context, you can:</p>
        <ul>
          <li>Deliver personalized experiences at scale</li>
          <li>Reduce bounce rates and increase engagement</li>
          <li>Improve conversion rates significantly</li>
          <li>Build stronger customer relationships</li>
          <li>Optimize marketing spend efficiency</li>
        </ul>
        
        <h2>How to Implement Contextual Experiences</h2>
        <h3>1. Data Collection Strategy</h3>
        <p>Start by collecting the right data points. Focus on actionable context that directly impacts user experience.</p>
        
        <h3>2. Real-Time Processing</h3>
        <p>Context is only valuable if you can act on it in real-time. Implement systems that can process and respond to context instantly.</p>
        
        <h3>3. Content Orchestration</h3>
        <p>Use your headless CMS to deliver different content based on context. This requires flexible content modeling and delivery APIs.</p>
        
        <h2>Real-World Examples</h2>
        <p><strong>E-commerce:</strong> Show different products based on weather, location, and browsing history.</p>
        <p><strong>Media:</strong> Recommend articles based on reading patterns and time of day.</p>
        <p><strong>Financial Services:</strong> Adjust messaging based on customer lifecycle stage and account activity.</p>
        
        <h2>Best Practices</h2>
        <ol>
          <li>Start with one or two context signals and expand gradually</li>
          <li>Always provide value - don't personalize just because you can</li>
          <li>Respect privacy and be transparent about data usage</li>
          <li>Test and measure the impact of contextual experiences</li>
          <li>Keep fallback experiences for when context is unavailable</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>Context transforms generic digital experiences into personalized journeys. Enterprise brands that master contextual delivery will build stronger customer relationships and drive better business outcomes.</p>`,
        featured_image: { url: '/images/Customer Analytics.jpg', title: 'Customer Context' },
        category: 'PERSONALIZATION',
        publish_date: '2025-10-22',
        reading_time_minute: 25,
        author: {
          name: 'Ben Goldstein',
          title: 'Product Marketing Lead',
          bio: 'Product Marketing Lead at ContentFlow, specializing in personalization strategies and customer experience optimization for enterprise brands.',
          description: 'Product Marketing Lead specializing in personalization and customer experience.',
          profile_picture: { url: '/images/Ben Goldstein.jpg', title: 'Ben Goldstein' },
          twitter: '',
          linkedin: '',
          github: ''
        },
        gradient_colors: '#8e24aa, #ab47bc',
        icon: { url: '/images/Customer Analytics.jpg' }
      },
      {
        title: 'Diving Into AI Prompting: A Technical Guide to Context, Iteration, and Brand-Specific Results',
        url: 'ai/diving-into-ai-prompting-a-technical-guide-to-context-iteration-and-brand-specific-results',
        excerpt: 'Discover how our new AI agents can accelerate content creation, optimization, and personalization while maintaining your brand voice.',
        content: `<h2>Introduction to AI Prompting</h2>
        <p>Discover how our new AI agents can accelerate content creation, optimization, and personalization while maintaining your brand voice. AI prompting is both an art and a science, requiring understanding of context, iteration techniques, and brand alignment.</p>
        
        <h2>Understanding Context in AI Prompting</h2>
        <p>Context is everything when working with AI. The more relevant context you provide, the better your results will be.</p>
        
        <h3>Types of Context</h3>
        <ul>
          <li><strong>Task Context:</strong> What you're trying to accomplish</li>
          <li><strong>Brand Context:</strong> Your brand voice, values, and guidelines</li>
          <li><strong>Audience Context:</strong> Who the content is for</li>
          <li><strong>Format Context:</strong> The desired output format</li>
          <li><strong>Historical Context:</strong> Previous iterations and feedback</li>
        </ul>
        
        <h2>The Iteration Framework</h2>
        <p>Effective AI prompting is rarely a one-shot process. Follow this iteration framework:</p>
        
        <h3>1. Initial Prompt</h3>
        <p>Start with a clear, specific prompt that includes:</p>
        <ul>
          <li>The task objective</li>
          <li>Key constraints</li>
          <li>Desired format</li>
          <li>Brand guidelines</li>
        </ul>
        
        <h3>2. Review & Refine</h3>
        <p>Analyze the output for:</p>
        <ul>
          <li>Accuracy and relevance</li>
          <li>Brand voice alignment</li>
          <li>Technical correctness</li>
          <li>Completeness</li>
        </ul>
        
        <h3>3. Iterate</h3>
        <p>Provide specific feedback and request revisions. Be explicit about what to change and why.</p>
        
        <h2>Brand-Specific Prompting Techniques</h2>
        <p>To maintain brand consistency:</p>
        
        <h3>Create a Brand Prompt Library</h3>
        <p>Develop reusable prompt templates that include your brand voice, tone, and style guidelines.</p>
        
        <h3>Use Few-Shot Learning</h3>
        <p>Provide examples of your existing brand content to guide the AI's output style.</p>
        
        <h3>Implement Review Gates</h3>
        <p>Always review AI-generated content for brand alignment before publishing.</p>
        
        <h2>Advanced Techniques</h2>
        <h3>Chain-of-Thought Prompting</h3>
        <p>Ask the AI to show its reasoning process for complex tasks.</p>
        
        <h3>Role-Based Prompting</h3>
        <p>Assign specific roles to the AI (e.g., "Act as a senior technical writer...").</p>
        
        <h3>Constraint-Based Generation</h3>
        <p>Use specific constraints to control output (length, format, style, technical level).</p>
        
        <h2>Common Pitfalls to Avoid</h2>
        <ol>
          <li><strong>Vague Prompts:</strong> Be specific about what you want</li>
          <li><strong>Insufficient Context:</strong> Provide all relevant information upfront</li>
          <li><strong>Ignoring Iteration:</strong> First outputs are rarely perfect</li>
          <li><strong>Over-Reliance:</strong> Always add human review and expertise</li>
          <li><strong>Inconsistent Style:</strong> Maintain consistent prompting patterns</li>
        </ol>
        
        <h2>Measuring Success</h2>
        <p>Track these metrics to optimize your AI prompting:</p>
        <ul>
          <li>Time saved in content creation</li>
          <li>Number of iterations needed</li>
          <li>Brand voice consistency scores</li>
          <li>Content quality ratings</li>
          <li>User engagement with AI-generated content</li>
        </ul>
        
        <h2>Best Practices for Teams</h2>
        <ul>
          <li>Document successful prompts for reuse</li>
          <li>Share learnings across the team</li>
          <li>Establish review workflows</li>
          <li>Create brand-specific prompt templates</li>
          <li>Regularly update prompts based on results</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Mastering AI prompting requires practice, patience, and systematic iteration. By following these techniques and maintaining focus on brand alignment, you can leverage AI to significantly accelerate content creation while maintaining quality and consistency.</p>`,
        featured_image: { url: '/images/AI-Powered Agents.png', title: 'AI Prompting Guide' },
        category: 'AI',
        publish_date: '2025-10-01',
        reading_time_minute: 8,
        author: {
          name: 'Lo Etheridge',
          title: 'Head of Product',
          bio: 'Head of Product at ContentFlow, leading the development of AI-powered content solutions and helping enterprises leverage AI effectively.',
          description: 'Head of Product at ContentFlow, leading the development of AI-powered content solutions and helping enterprises leverage AI effectively.',
          profile_picture: { url: '/images/Lo Etheridge.jpg', title: 'Lo Etheridge' },
          twitter: '',
          linkedin: '',
          github: ''
        },
        gradient_colors: '#6a1b9a, #9c27b0',
        icon: { url: '/images/AI-Powered Agents.png' }
      },
      {
        title: 'Building Scalable Headless CMS Architecture',
        url: 'engineering/scalable-headless-cms-architecture',
        excerpt: 'Learn how to design and implement a scalable, performant headless CMS architecture that grows with your business needs.',
        content: `<h2>Introduction</h2>
        <p>Learn how to design and implement a scalable, performant headless CMS architecture that grows with your business needs. Modern applications demand flexibility, speed, and reliability at scale.</p>
        
        <h2>Key Architecture Principles</h2>
        <ul>
          <li>API-first design for maximum flexibility</li>
          <li>Microservices architecture for independent scaling</li>
          <li>CDN integration for global performance</li>
          <li>Caching strategies at multiple levels</li>
          <li>Event-driven updates for real-time sync</li>
        </ul>
        
        <h2>Performance Optimization</h2>
        <p>Implement these strategies for optimal performance:</p>
        <ul>
          <li>GraphQL for efficient data fetching</li>
          <li>Edge caching for reduced latency</li>
          <li>Image optimization and lazy loading</li>
          <li>Code splitting for faster page loads</li>
        </ul>
        
        <h2>Scalability Strategies</h2>
        <p>Design your architecture to handle growth:</p>
        <ul>
          <li>Horizontal scaling capabilities</li>
          <li>Database optimization and sharding</li>
          <li>Load balancing across regions</li>
          <li>Auto-scaling based on demand</li>
        </ul>
        
        <h2>Security Best Practices</h2>
        <ul>
          <li>API authentication and authorization</li>
          <li>Rate limiting and DDoS protection</li>
          <li>Content validation and sanitization</li>
          <li>Regular security audits</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>A well-architected headless CMS provides the foundation for building scalable, performant digital experiences that can grow with your business.</p>`,
        featured_image: { url: '/images/Headless CMS.png', title: 'Headless Architecture' },
        category: 'ENGINEERING',
        publish_date: '2025-09-28',
        reading_time_minute: 15,
        author: {
          name: 'Sarah Chen',
          title: 'Principal Engineer',
          bio: 'Principal Engineer at ContentFlow with expertise in distributed systems, microservices architecture, and scalable web applications.',
          description: 'Principal Engineer specializing in distributed systems and scalable web applications.',
          profile_picture: { url: '/images/Jessica.png', title: 'Sarah Chen' },
          twitter: '',
          linkedin: '',
          github: ''
        },
        gradient_colors: '#4a148c, #6a1b9a',
        icon: { url: '/images/Headless CMS.png' }
      },
      {
        title: 'The Future of Digital Experience Platforms',
        url: 'thought-leadership/future-of-dxp',
        excerpt: 'Exploring the trends shaping the future of digital experiences, from AI personalization to composable architecture.',
        content: `<h2>The Evolution of Digital Experiences</h2>
        <p>Exploring the trends shaping the future of digital experiences, from AI personalization to composable architecture. The landscape is changing rapidly as technology advances.</p>
        
        <h2>Key Trends</h2>
        <ul>
          <li>AI-driven personalization at scale</li>
          <li>Composable architecture adoption</li>
          <li>Edge computing for performance</li>
          <li>Privacy-first data strategies</li>
          <li>Omnichannel orchestration</li>
        </ul>
        
        <h2>The Composable Future</h2>
        <p>Modern DXPs are moving toward composable architectures that allow businesses to:</p>
        <ul>
          <li>Choose best-of-breed solutions</li>
          <li>Adapt quickly to market changes</li>
          <li>Scale components independently</li>
          <li>Reduce vendor lock-in</li>
        </ul>
        
        <h2>AI and Automation</h2>
        <p>AI is transforming digital experiences through:</p>
        <ul>
          <li>Intelligent content recommendations</li>
          <li>Automated content generation</li>
          <li>Predictive analytics</li>
          <li>Conversational interfaces</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>The future of DXPs lies in composability, AI-driven intelligence, and customer-centric design. Organizations that embrace these trends will lead in digital innovation.</p>`,
        featured_image: { url: '/images/Innovation.jpg', title: 'Future of DXP' },
        category: 'THOUGHT LEADERSHIP',
        publish_date: '2025-09-20',
        reading_time_minute: 12,
        author: {
          name: 'Michael Torres',
          title: 'CTO',
          bio: 'CTO at ContentFlow, driving technical strategy and innovation in digital experience platforms and composable architecture.',
          description: 'CTO driving technical strategy and innovation in digital experience platforms.',
          profile_picture: { url: '/images/Conor.jpg', title: 'Michael Torres' },
          twitter: '',
          linkedin: '',
          github: ''
        },
        gradient_colors: '#7b1fa2, #9c27b0',
        icon: { url: '/images/Innovation.jpg' }
      },
      {
        title: 'Personalization at Scale: Best Practices',
        url: 'guides/personalization-best-practices',
        excerpt: 'A comprehensive guide to implementing effective personalization strategies that deliver measurable business results.',
        content: `<h2>Introduction</h2>
        <p>A comprehensive guide to implementing effective personalization strategies that deliver measurable business results. Personalization is no longer optional—it's expected.</p>
        
        <h2>The Business Case</h2>
        <ul>
          <li>71% of consumers expect personalized interactions</li>
          <li>Personalization can increase revenue by 10-30%</li>
          <li>76% of consumers get frustrated with generic experiences</li>
        </ul>
        
        <h2>Implementation Strategy</h2>
        <h3>1. Data Foundation</h3>
        <p>Build a solid data infrastructure:</p>
        <ul>
          <li>Collect behavioral data</li>
          <li>Integrate customer data platforms</li>
          <li>Ensure data quality and governance</li>
        </ul>
        
        <h3>2. Segmentation</h3>
        <p>Create meaningful customer segments:</p>
        <ul>
          <li>Demographic segmentation</li>
          <li>Behavioral segmentation</li>
          <li>Predictive segmentation</li>
        </ul>
        
        <h3>3. Content Strategy</h3>
        <p>Develop personalized content:</p>
        <ul>
          <li>Dynamic content blocks</li>
          <li>Personalized recommendations</li>
          <li>Tailored messaging</li>
        </ul>
        
        <h2>Technology Stack</h2>
        <p>Essential components for personalization:</p>
        <ul>
          <li>Headless CMS for flexible content</li>
          <li>CDP for customer data unification</li>
          <li>Analytics for insights</li>
          <li>Testing tools for optimization</li>
        </ul>
        
        <h2>Measuring Success</h2>
        <p>Key metrics to track:</p>
        <ul>
          <li>Engagement rates</li>
          <li>Conversion improvements</li>
          <li>Customer lifetime value</li>
          <li>Return on investment</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Successful personalization requires strategy, technology, and continuous optimization. Start small, measure results, and scale what works.</p>`,
        featured_image: { url: '/images/AI Personalization.jpg', title: 'Personalization' },
        category: 'GUIDE',
        publish_date: '2025-09-15',
        reading_time_minute: 18,
        author: {
          name: 'Emily Rodriguez',
          title: 'Solutions Architect',
          bio: 'Solutions Architect at ContentFlow, helping enterprises implement personalization strategies and optimize customer experiences.',
          description: 'Solutions Architect helping enterprises optimize customer experiences.',
          profile_picture: { url: '/images/Renee.jpg', title: 'Emily Rodriguez' },
          twitter: '',
          linkedin: '',
          github: ''
        },
        gradient_colors: '#8e24aa, #ba68c8',
        icon: { url: '/images/AI Personalization.jpg' }
      }
    ];
    
    console.log(' Searching for blog post with slug:', slug);
    console.log(' Available fallback posts:', fallbackPosts.map(p => p.url));
    
    const found = fallbackPosts.find(post => {
      // Try exact match
      if (post.url === slug) {
        console.log(' Exact match found:', post.title);
        return true;
      }
      // Try if post URL contains slug
      if (post.url.includes(slug)) {
        console.log(' Partial match found:', post.title);
        return true;
      }
      // Try if slug contains post URL
      if (slug.includes(post.url)) {
        console.log(' Slug contains URL match found:', post.title);
        return true;
      }
      // Try matching just the last part (post slug)
      const postSlugPart = post.url.split('/').pop() || '';
      const searchSlugPart = slug.split('/').pop() || '';
      if (postSlugPart && searchSlugPart && postSlugPart === searchSlugPart) {
        console.log(' Slug part match found:', post.title);
        return true;
      }
      return false;
    });
    
    if (found) {
      console.log(' Returning blog post:', found.title);
    } else {
      console.error(' No fallback post found for slug:', slug);
    }
    
    return found || null;
  };

  // Author profile picture mapping for when Contentstack doesn't have images
  const getAuthorProfilePicture = (author: any): string | undefined => {
    console.log(' getAuthorProfilePicture called with:', {
      author,
      authorName: author?.name || author?.title,
      profilePicture: author?.profile_picture,
      profilePictureType: typeof author?.profile_picture
    });
    
    // Try to get the image from Contentstack data first - but ONLY if it's a valid, non-empty URL
    const pic = author?.profile_picture;
    if (pic) {
      // Check if it's a non-empty string
      if (typeof pic === 'string' && pic.trim().length > 0) {
        console.log(' Using Contentstack string URL:', pic.trim());
        return pic.trim();
      }
      // Check if it's an object with a non-empty url property
      if (typeof pic === 'object' && pic.url && typeof pic.url === 'string' && pic.url.trim().length > 0) {
        console.log(' Using Contentstack object URL:', pic.url.trim());
        return pic.url.trim();
      }
      // If we get here, pic exists but is empty/invalid
      console.log('️ Profile picture exists but is empty or invalid:', pic);
    }
    
    // Fallback to local images based on author name
    const authorName = author?.name || author?.title || '';
    const authorImageMap: { [key: string]: string } = {
      'Lo Etheridge': '/images/Lo Etheridge.jpg',
      'Kaustubh Rai': '/images/Kaustubh Rai.jpg',
      'Ben Goldstein': '/images/Ben Goldstein.jpg',
      'Sarah Chen': '/images/Jessica.png',
      'Michael Torres': '/images/Conor.jpg',
      'Emily Rodriguez': '/images/Renee.jpg'
    };
    
    const mappedImage = authorImageMap[authorName];
    console.log(` Author "${authorName}" mapped to local image:`, mappedImage || 'NO MAPPING FOUND');
    
    // Add cache buster to force fresh load (increment this version when images change)
    const imageWithCacheBuster = mappedImage ? `${mappedImage}?v=10` : undefined;
    console.log(` FINAL RETURN VALUE:`, imageWithCacheBuster || 'undefined');
    
    return imageWithCacheBuster;
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
          background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 50%, #ab47bc 100%)',
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
                    src={getAuthorProfilePicture(blogPost.author)}
                    alt={blogPost.author?.name || blogPost.author?.title || 'Author'}
                    fallbackSrc="/images/logo.png"
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
                  <span style={{ fontSize: '1.2rem' }}></span>
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
                  src={blogPost.featured_image?.url || blogPost.featured_image}
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
          background: 'linear-gradient(180deg, #ffffff 0%, #f8f4ff 50%, #ffffff 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative background elements */}
          <div style={{
            position: 'absolute',
            top: '10%',
            right: '-5%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(106, 27, 154, 0.03) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 0
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: '-5%',
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(142, 36, 170, 0.03) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 0
          }}></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ 
              maxWidth: '850px', 
              margin: '0 auto',
              position: 'relative',
              background: 'white',
              padding: '3rem 4rem',
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
              border: '1px solid rgba(106, 27, 154, 0.1)'
            }}>
              {/* Content styling wrapper */}
              <style>{`
                .blog-content {
                  font-size: 1.18rem;
                  line-height: 1.9;
                  color: #2c3e50;
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                }
                .blog-content p {
                  margin-bottom: 2rem !important;
                  line-height: 1.9 !important;
                  color: #2c3e50 !important;
                  font-weight: 400 !important;
                  letter-spacing: 0.2px !important;
                }
                .blog-content p:first-of-type {
                  font-size: 1.3rem !important;
                  color: #444 !important;
                  font-weight: 500 !important;
                  line-height: 2 !important;
                }
                .blog-content h1 {
                  font-size: 2.8rem !important;
                  margin: 3.5rem 0 1.5rem !important;
                  color: #1a1a1a !important;
                  font-weight: 800 !important;
                  line-height: 1.2 !important;
                  letter-spacing: -0.8px !important;
                  position: relative !important;
                  padding-left: 1.5rem !important;
                  border-left: 6px solid #6a1b9a !important;
                }
                .blog-content h2 {
                  font-size: 2.2rem !important;
                  margin: 3rem 0 1.5rem !important;
                  color: #1a1a1a !important;
                  font-weight: 700 !important;
                  line-height: 1.3 !important;
                  padding: 0 0 0.8rem 0 !important;
                  border-bottom: 4px solid transparent !important;
                  border-image: linear-gradient(90deg, #6a1b9a 0%, #8e24aa 50%, transparent 100%) 1 !important;
                  position: relative !important;
                }
                .blog-content h2::before {
                  content: '▸' !important;
                  color: #6a1b9a !important;
                  font-weight: bold !important;
                  margin-right: 0.8rem !important;
                  font-size: 1.8rem !important;
                }
                .blog-content h3 {
                  font-size: 1.75rem !important;
                  margin: 2.5rem 0 1.2rem !important;
                  color: #6a1b9a !important;
                  font-weight: 700 !important;
                  line-height: 1.4 !important;
                  background: linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%) !important;
                  -webkit-background-clip: text !important;
                  -webkit-text-fill-color: transparent !important;
                  background-clip: text !important;
                }
                .blog-content h4 {
                  font-size: 1.3rem !important;
                  margin: 1.5rem 0 0.75rem !important;
                  color: #8e24aa !important;
                  font-weight: 600 !important;
                }
                .blog-content ul, .blog-content ol {
                  margin: 2rem 0 !important;
                  padding-left: 0 !important;
                }
                .blog-content li {
                  margin-bottom: 1rem !important;
                  line-height: 1.8 !important;
                  padding: 0.8rem 1.2rem !important;
                  background: linear-gradient(135deg, rgba(106, 27, 154, 0.03) 0%, rgba(142, 36, 170, 0.03) 100%) !important;
                  border-radius: 8px !important;
                  border-left: 3px solid #6a1b9a !important;
                  transition: all 0.2s ease !important;
                }
                .blog-content li:hover {
                  background: linear-gradient(135deg, rgba(106, 27, 154, 0.08) 0%, rgba(142, 36, 170, 0.08) 100%) !important;
                  transform: translateX(5px) !important;
                }
                .blog-content ul li {
                  list-style-type: none !important;
                  position: relative !important;
                  padding-left: 3rem !important;
                }
                .blog-content ul li::before {
                  content: "" !important;
                  position: absolute !important;
                  left: 1.2rem !important;
                  color: #6a1b9a !important;
                  font-weight: bold !important;
                  font-size: 1.2rem !important;
                }
                .blog-content blockquote {
                  border-left: 6px solid #6a1b9a !important;
                  padding: 2rem 2.5rem !important;
                  margin: 2.5rem 0 !important;
                  background: linear-gradient(135deg, #f8f4ff 0%, #fdf9ff 100%) !important;
                  border-radius: 0 15px 15px 0 !important;
                  font-style: italic !important;
                  color: #4a4a4a !important;
                  box-shadow: 0 8px 20px rgba(106, 27, 154, 0.12) !important;
                  position: relative !important;
                  font-size: 1.25rem !important;
                  line-height: 1.8 !important;
                }
                .blog-content blockquote::before {
                  content: '"' !important;
                  font-size: 4rem !important;
                  color: rgba(106, 27, 154, 0.2) !important;
                  position: absolute !important;
                  left: 1rem !important;
                  top: -0.5rem !important;
                  font-family: Georgia, serif !important;
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
                  color: #6a1b9a !important;
                  background: linear-gradient(135deg, rgba(106, 27, 154, 0.1) 0%, rgba(142, 36, 170, 0.1) 100%) !important;
                  padding: 0.2rem 0.5rem !important;
                  border-radius: 4px !important;
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
                      src={getAuthorProfilePicture(blogPost.author)}
                      alt={blogPost.author.name || blogPost.author.title || 'Author'}
                      fallbackSrc="/images/logo.png"
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
