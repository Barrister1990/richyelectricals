// components/Seo.js
import Head from 'next/head';

export default function Seo({ 
  title, 
  description, 
  canonical, 
  ogType = "website",
  ogImage = "/images/richy-electricals-og.jpg" 
}) {
  const siteTitle = `${title} | Richy Electricals`;
  
  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={`https://richyelectricals.com${canonical}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={`https://richyelectricals.com${canonical}`} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://richyelectricals.com${ogImage}`} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`https://richyelectricals.com${canonical}`} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`https://richyelectricals.com${ogImage}`} />
      
      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ElectricalContractor",
            "name": "Richy Electricals",
            "url": "https://richyelectricals.com",
            "logo": "/images/logo.jpg",
            "image": "https://richyelectricals.com/images/richy-electricals-building.jpg",
            "description": "Professional electrical services across the UK including generator repairs, solar installations, and electrical maintenance.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "115 Butts Road, Walsall, West Midlands",
              "addressLocality": "London",
              "postalCode": "WS4 2BL",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.5074",
              "longitude": "0.1278"
            },
            "telephone": "+447491565676",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "16:00"
              }
            ],
            "priceRange": "££",
            "sameAs": [
              "https://www.facebook.com/richyelectricals",
              "https://www.instagram.com/richyelectricals",
              "https://twitter.com/richyelectrical"
            ]
          })
        }}
      />
    </Head>
  );
}