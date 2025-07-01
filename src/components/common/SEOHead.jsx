import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  schemaMarkup,
  noindex = false
}) => {
  const siteUrl = 'https://silahub.com';
  const fullTitle = title ? `${title} | Silahub Technologies` : 'Calgary\'s Premier Digital Marketing Agency | Silahub Technologies';
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const defaultOgImage = 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751361970405-main%20logo.png';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:site_name" content="Silahub Technologies" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />
      
      {/* Schema Markup */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
      
      {/* Additional SEO Tags */}
      <meta name="author" content="Silahub Technologies Inc." />
      <meta name="publisher" content="Silahub Technologies Inc." />
      <meta name="copyright" content="Silahub Technologies Inc." />
      <meta name="language" content="en" />
      <meta name="geo.region" content="CA-AB" />
      <meta name="geo.placename" content="Calgary" />
      <meta name="geo.position" content="51.0447;-114.0719" />
      <meta name="ICBM" content="51.0447, -114.0719" />
      
      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Silahub Technologies Inc.",
          "image": defaultOgImage,
          "url": siteUrl,
          "telephone": "+1-825-558-1832",
          "email": "hello@silahub.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Calgary",
            "addressRegion": "AB",
            "addressCountry": "CA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.0447,
            "longitude": -114.0719
          },
          "openingHours": "Mo-Fr 09:00-17:00",
          "sameAs": [
            "https://www.facebook.com/silahubtechnologies",
            "https://www.instagram.com/silahubtechnologies",
            "https://www.linkedin.com/company/silahubtechnologies",
            "https://www.youtube.com/@silahubtechnologies",
            "https://x.com/silahubtech",
            "https://www.tiktok.com/@silahub.technologies"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;