import Head from 'next/head';

export default function Seo({ 
  title, 
  description, 
  canonical = '', 
  ogType = 'website',
  ogImage = '/images/logo.jpg' 
}) {
  // Optimize title: Keep under 60 characters, format: Primary Keyword | Location | Brand
  // Remove the default suffix to allow more control per page
  const siteTitle = title.includes('|') || title.includes('–') || title.includes('-') 
    ? title 
    : `${title} | UK Electricians`;

  // ✅ Normalize the canonical path - ensure no trailing slashes (consistent with next.config)
  const cleanCanonical = canonical
    ? '/' + canonical.replace(/^\/+/, '').replace(/\/+$/, '')
    : '';
  // For homepage, ensure it's just the domain
  const fullCanonical = cleanCanonical === '/'
    ? 'https://www.richyelectricals.co.uk'
    : `https://www.richyelectricals.co.uk${cleanCanonical}`;

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://www.richyelectricals.co.uk${ogImage}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`https://www.richyelectricals.co.uk${ogImage}`} />
      <meta name="keywords" content="Electrician UK, Electrical Services UK, Local Electrician Walsall, Walsall Electrician, Electrician in Walsall, West Midlands Electrical Services, Emergency Electrician Walsall, Generator Repairs Walsall, Solar Panel Installation UK, Solar Electrician West Midlands, Electrical Maintenance Services, Domestic Electrician UK, Commercial Electrician UK, Certified Electrician Near Me, NICEIC Electrician, Electrical Wiring Services, Fuse Box Repair Walsall, Electrical Inspection Walsall, Richy Electrical Services, Affordable Electrician UK, Electrician for Home Rewiring, 24 Hour Electrician Walsall, EV Charger Installation Walsall" />

      {/* Enhanced Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.richyelectricals.co.uk/#organization",
            "name": "Richy Electrical Services",
            "alternateName": "Richy Electrical",
            "url": "https://www.richyelectricals.co.uk",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.richyelectricals.co.uk/images/logo.jpg",
              "width": 200,
              "height": 100
            },
            "image": "https://www.richyelectricals.co.uk/images/logo.jpg",
            "description": "Professional electricians in London offering 24/7 emergency electrical services, installations, rewiring, inspections, and maintenance. NICEIC certified electricians serving all London areas.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "115 Butts Road, Walsall",
              "addressLocality": "London",
              "addressRegion": "Greater London",
              "postalCode": "WS4 2BL",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.5074",
              "longitude": "-0.1278"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "London",
                "addressRegion": "Greater London",
                "addressCountry": "GB"
              },
              {
                "@type": "Country",
                "name": "United Kingdom"
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "51.5074",
                "longitude": "-0.1278"
              },
              "geoRadius": {
                "@type": "Distance",
                "name": "50 miles"
              }
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+447491565676",
                "contactType": "customer service",
                "areaServed": "GB",
                "availableLanguage": "English"
              },
              {
                "@type": "ContactPoint",
                "telephone": "+447491565676",
                "contactType": "emergency",
                "areaServed": "GB",
                "availableLanguage": "English"
              }
            ],
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
            "paymentAccepted": "Cash, Credit Card, Bank Transfer",
            "currenciesAccepted": "GBP",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Electrical Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Fuse Board Upgrades",
                    "description": "Professional fuse board and consumer unit upgrades"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Electrical Inspections",
                    "description": "EICR electrical installation condition reports"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Rewiring",
                    "description": "Complete house and commercial rewiring services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Electrical Services",
                    "description": "24/7 emergency electrician services"
                  }
                }
              ]
            },
            "sameAs": [
              "https://www.instagram.com/richyelectricalservices?igsh=Z2I5eXdoMWgwNHAw&utm_source=qr",
              "https://www.tiktok.com/@richy_electric?_t=ZN-8vbqj7KYN4o&_r=1",
              "https://www.facebook.com/richyelectricalsgh"
            ]
          })
        }}
      />
    </Head>
  );
}
