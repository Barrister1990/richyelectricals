import { useRouter } from 'next/router';

const BREADCRUMB_NAME_MAP = {
  services: 'Services',
  about: 'About Us',
  contact: 'Contact',
  'fuse-board-upgrades': 'Fuse Board Upgrades',
  'rewiring': 'Rewiring',
  'ev-charger-installation': 'EV Charger Installation',
  'solar-installation': 'Solar Installation',
  'emergency-services': 'Emergency Services',
  // Add more known slugs here
};

const BreadcrumbSchema = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(Boolean);

  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.richyelectricals.co.uk/",
    },
    ...pathSegments.map((segment, index) => {
      const path = '/' + pathSegments.slice(0, index + 1).join('/');
      const name = BREADCRUMB_NAME_MAP[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      return {
        "@type": "ListItem",
        position: index + 2,
        name,
        item: `https://www.richyelectricals.co.uk${path}`,
      };
    }),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbItems,
        }),
      }}
    />
  );
};

export default BreadcrumbSchema;
