import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOMetadata {
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  og_title?: string;
  og_description?: string;
  og_image?: {
    url: string;
    title?: string;
  };
  twitter_card_type?: string;
  canonical_url?: string;
  no_index?: boolean;
  no_follow?: boolean;
}

interface SEOHeadProps {
  seoData?: SEOMetadata;
  defaultTitle?: string;
  defaultDescription?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  seoData, 
  defaultTitle = 'ContentFlow',
  defaultDescription = 'Transform your digital experiences'
}) => {
  const title = seoData?.meta_title || defaultTitle;
  const description = seoData?.meta_description || defaultDescription;
  const ogTitle = seoData?.og_title || title;
  const ogDescription = seoData?.og_description || description;
  const ogImage = seoData?.og_image?.url;
  const keywords = seoData?.meta_keywords;
  const canonical = seoData?.canonical_url;
  const noIndex = seoData?.no_index;
  const noFollow = seoData?.no_follow;
  const twitterCard = seoData?.twitter_card_type || 'summary_large_image';

  // Build robots content
  const robots = [];
  if (noIndex) robots.push('noindex');
  if (noFollow) robots.push('nofollow');
  const robotsContent = robots.length > 0 ? robots.join(', ') : 'index, follow';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsContent} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:site_name" content="ContentFlow" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="ContentFlow" />
    </Helmet>
  );
};

export default SEOHead;

