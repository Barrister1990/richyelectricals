import Head from 'next/head';

export default function Seo({ 
  title, 
  description, 
  canonical = '', 
  ogType = 'website',
  ogImage = '/images/logo.jpg' 
}) {
  const siteTitle = `${title} – Trusted Electricians in the UK`;

  // ✅ Normalize the canonical path
  const cleanCanonical = canonical
    ? '/' + canonical.replace(/^\/+/, '').replace(/\/+$/, '')
    : '';
  const fullCanonical = `https://richyelectricals.co.uk${cleanCanonical}`;

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://richyelectricals.co.uk${ogImage}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`https://richyelectricals.co.uk${ogImage}`} />
      <meta name="keywords" content="Electrician UK, Electrical Services UK, Local Electrician Walsall, Walsall Electrician, Electrician in Walsall, West Midlands Electrical Services, Emergency Electrician Walsall, Generator Repairs Walsall, Solar Panel Installation UK, Solar Electrician West Midlands, Electrical Maintenance Services, Domestic Electrician UK, Commercial Electrician UK, Certified Electrician Near Me, NICEIC Electrician, Electrical Wiring Services, Fuse Box Repair Walsall, Electrical Inspection Walsall, Richy Electricals, Affordable Electrician UK, Electrician for Home Rewiring, 24 Hour Electrician Walsall, EV Charger Installation Walsall" />

      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Electrician",
            "name": "Richy Electrical Services",
            "url": "https://richyelectricals.co.uk",
            "logo": "/images/logo.jpg",
            "image": "https://richyelectricals.co.uk/images/logo.jpg",
            "description": "UK-based professional electricians offering installation, rewiring, inspection & maintenance services.",
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
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+447491565676",
              "contactType": "Customer Service"
            },
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
              "https://www.instagram.com/richyelectricalservices?igsh=Z2I5eXdoMWgwNHAw&utm_source=qr",
              "https://www.tiktok.com/@richy_electric?_t=ZN-8vbqj7KYN4o&_r=1"
            ]
          })
        }}
      />
    </Head>
  );
}
