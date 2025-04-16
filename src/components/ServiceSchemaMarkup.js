// components/ServiceSchemaMarkup.js

export default function ServiceSchemaMarkup({ service }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Electrical Service",
    "name": service.title,
    "description": service.metaDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Richy Electricals",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressRegion": "Greater London",
        "addressCountry": "GB"
      },
      "telephone": "+447491565676",
      "image": "/images/logo.jpg"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Electrical Services",
      "itemListElement": service.features.map((feature, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        }
      }))
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}