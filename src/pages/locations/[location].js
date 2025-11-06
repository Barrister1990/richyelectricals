// pages/locations/[location].js
import { motion } from 'framer-motion';
import { CheckCircle, MapPin, Phone, Zap } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Seo from '../../components/Seo';
import { getAllServices } from '../../lib/services';

// Location data
const locationData = {
  'london': {
    name: 'London',
    fullName: 'London, Greater London',
    description: 'Professional electricians serving all London boroughs. 24/7 emergency service, NICEIC certified. Same-day service available.',
    address: '88 Canalside, Redhill, Surrey, RH1 2NH, London, United Kingdom',
    areas: ['Westminster', 'Camden', 'Islington', 'Hackney', 'Tower Hamlets', 'Greenwich', 'Lewisham', 'Southwark', 'Lambeth', 'Wandsworth', 'Hammersmith and Fulham', 'Kensington and Chelsea', 'City of London', 'All London Boroughs'],
    services: getAllServices().map(s => s.id)
  },
  'walsall': {
    name: 'Walsall',
    fullName: 'Walsall, West Midlands',
    description: 'Expert electricians in Walsall. Local electrical services, installations, and emergency repairs. NICEIC certified electricians.',
    address: '115 Butts Road, Walsall, West Midlands, WS4 2BL, United Kingdom',
    areas: ['Walsall', 'West Bromwich', 'Dudley', 'Wolverhampton', 'Birmingham', 'Cannock', 'Lichfield'],
    services: getAllServices().map(s => s.id)
  },
  'birmingham': {
    name: 'Birmingham',
    fullName: 'Birmingham, West Midlands',
    description: 'Professional electricians in Birmingham. Complete electrical services for homes and businesses. 24/7 emergency service.',
    address: '115 Butts Road, Walsall, West Midlands, WS4 2BL, United Kingdom',
    areas: ['Birmingham City Centre', 'Edgbaston', 'Moseley', 'Kings Heath', 'Sutton Coldfield', 'Solihull'],
    services: getAllServices().map(s => s.id)
  }
};

export async function getStaticPaths() {
  const paths = Object.keys(locationData).map((location) => ({
    params: { location },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const location = locationData[params.location];
  
  return {
    props: {
      locationData: location,
      locationSlug: params.location,
    },
  };
}

export default function LocationPage({ locationData, locationSlug }) {
  const router = useRouter();
  const allServices = getAllServices();

  if (!locationData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-700">Location not found</h1>
          <Link href="/" className="mt-4 inline-block text-orange-500 hover:text-orange-600">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Seo
        title={`Electrician ${locationData.name} | 24/7 Service | Richy Electrical`}
        description={locationData.description}
        canonical={`/locations/${locationSlug}`}
      />
      
      {/* Location-Specific Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Richy Electrical Services - ${locationData.name}`,
            "image": "https://www.richyelectricals.co.uk/images/logo.jpg",
            "@id": `https://www.richyelectricals.co.uk/locations/${locationSlug}#organization`,
            "url": `https://www.richyelectricals.co.uk/locations/${locationSlug}`,
            "telephone": "+447491565676",
            "priceRange": "££",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": locationData.address.split(',')[0],
              "addressLocality": locationData.name,
              "addressRegion": locationData.fullName.includes('London') ? "Greater London" : "West Midlands",
              "postalCode": locationData.address.match(/[A-Z]{1,2}\d{1,2}\s?\d[A-Z]{2}/)?.[0] || "",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": locationSlug === 'london' ? "51.2402" : "52.5862",
              "longitude": locationSlug === 'london' ? "-0.1703" : "-1.9829"
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
            "areaServed": locationData.areas.map(area => ({
              "@type": "City",
              "name": area,
              "addressRegion": locationData.fullName.includes('London') ? "Greater London" : "West Midlands",
              "addressCountry": "GB"
            })),
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": `Electrical Services in ${locationData.name}`,
              "itemListElement": allServices.slice(0, 6).map((service, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.shortDescription
                }
              }))
            }
          })
        }}
      />
      
      <div className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="relative w-full h-[50vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10">
            <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-70 mix-blend-overlay"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-8 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Expert Electricians in <span className="text-orange-500">{locationData.name}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                {locationData.description}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300"
                  >
                    Get Free Quote
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="tel:+447491565676"
                    className="inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-3 px-8 rounded-full border border-white/30 transition-all duration-300"
                  >
                    Call Now
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Electrical Services in {locationData.name}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Complete electrical solutions for homes and businesses in {locationData.name} and surrounding areas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300"
                >
                  <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Areas We Serve in {locationData.name}
                </h2>
                <p className="text-lg text-gray-600">
                  Our electricians provide services throughout {locationData.name} and surrounding areas
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {locationData.areas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{area}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need an Electrician in {locationData.name}?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Contact us today for a free quote. We serve {locationData.name} and surrounding areas with 24/7 emergency service.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-block bg-white hover:bg-gray-100 text-orange-600 font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300"
                  >
                    Get Free Quote
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="tel:+447491565676"
                    className="inline-block bg-orange-700 hover:bg-orange-800 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +44 749 156 5676
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

