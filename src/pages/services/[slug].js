// pages/services/[slug].js
import { motion } from 'framer-motion';
import {
  ArrowLeft, ArrowRight,
  ChevronRight,
  Phone,
  Star,
  Wrench
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ExternalLink from '../../components/ExternalLink';
import FaqSchema from '../../components/FaqSchema';
import HowToSchema from '../../components/HowToSchema';
import Seo from '../../components/Seo';
import ServiceSchemaMarkup from '../../components/ServiceSchemaMarkup';
import { getServiceData } from '../../lib/services';

export default function ServiceDetail({ serviceData }) {
  const router = useRouter();
  const { slug } = router.query;
  const [service, setService] = useState(null);

  useEffect(() => {
    if (serviceData) {
      setService(serviceData);
    } else if (slug) {
      // Fallback to fetch data client-side if not provided via props
      getServiceData(slug).then(data => {
        setService(data);
      });
    }
  }, [slug, serviceData]);

  // For intersection observer animations
  useEffect(() => {
    if (!service) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, [service]);

  const [activeIndex, setActiveIndex] = useState(null);

  // Empty state
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-700">Loading service details...</h1>
          <p className="mt-4 text-gray-500">If this page does not load, the service may not exist.</p>
          <Link href="/services" className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-full">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
    <Seo 
      title={service.title} 
      description={service.metaDescription || service.description}
      canonical={`/services/${service.id}`}
      ogImage={service.ogImage || "/images/services/default-service.jpg"}
    />
    <ServiceSchemaMarkup service={service} />
    {service.faq && service.faq.length > 0 && (
      <FaqSchema faqs={service.faq} />
    )}
    {service.processSteps && service.processSteps.length > 0 && (
      <HowToSchema
        name={`How to ${service.title}`}
        description={`Step-by-step process for ${service.title.toLowerCase()} by Richy Electrical Services`}
        steps={service.processSteps.map(step => ({
          name: step.title,
          text: step.description
        }))}
        totalTime={`PT${service.processSteps.length * 2}H`}
      />
    )}
    <div className="min-h-screen pt-10">
     
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gray-50 opacity-70">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Animated geometric shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="absolute w-64 h-64 rounded-full bg-orange-500/5 blur-3xl"
            animate={{ 
              x: [0, 100, 50, 0], 
              y: [0, -50, 100, 0],
              scale: [1, 1.2, 0.8, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 20,
              ease: "easeInOut" 
            }}
            style={{ top: '20%', left: '10%' }}
          />
          <motion.div 
            className="absolute w-96 h-96 rounded-full bg-blue-600/5 blur-3xl"
            animate={{ 
              x: [0, -70, 100, 0], 
              y: [0, 100, -50, 0],
              scale: [1, 0.8, 1.2, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 25,
              ease: "easeInOut" 
            }}
            style={{ bottom: '10%', right: '15%' }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <Link href="/services" className="inline-flex items-center text-gray-600 hover:text-orange-500 transition-colors duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </div>
          
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-sm font-medium text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                  {service.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {service.title} <span className="text-orange-500">in London</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl">
                {service.description || service.shortDescription}
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
                    Get a Free Quote
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="tel:+447491565676" className="inline-flex items-center bg-white text-gray-900 font-medium py-3 px-8 rounded-full border border-gray-300 hover:border-gray-400 shadow-md transition-all duration-300">
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Immediate Service
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional {service.title} Services in London</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">{service.longDescription || service.fullDescription}</p>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  As <strong>NICEIC certified electricians</strong> in London and West Midlands, we ensure all our work complies with the latest UK electrical regulations, including the <ExternalLink href="https://www.gov.uk/government/publications/electrical-safety-standards-in-the-private-rented-sector">Electrical Safety Standards in the Private Rented Sector</ExternalLink> and <ExternalLink href="https://www.niceic.com">NICEIC standards</ExternalLink>. Our team of qualified electricians follows the <ExternalLink href="https://www.gov.uk/government/publications/electricity-at-work-regulations-1989">Electricity at Work Regulations 1989</ExternalLink> to ensure the highest safety standards.
                </p>
                
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features of Our {service.title} Service</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Process Steps */}
              {service.processSteps && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our {service.title} Process</h2>
                  <p className="text-gray-600 mb-8">
                    We follow a systematic approach to ensure every {service.title.toLowerCase()} project is completed to the highest standards. Our process is designed to minimize disruption while delivering exceptional results.
                  </p>
                  <div className="space-y-8">
                    {service.processSteps.map((step, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-12 pb-8"
                      >
                        {/* Line connecting steps */}
                        {index < service.processSteps.length - 1 && (
                          <div className="absolute left-5 top-8 bottom-0 w-0.5 bg-orange-200"></div>
                        )}
                        
                        {/* Step number */}
                        <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-700">{step.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications & Compliance */}
              <div className="mb-12 bg-blue-50 rounded-xl p-8 border-l-4 border-blue-500">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
                <p className="text-gray-700 mb-4">
                  Richy Electrical Services is fully certified and compliant with all UK electrical safety standards. We are proud to be <strong>NICEIC approved contractors</strong>, ensuring all our electrical work meets the highest industry standards.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-700"><strong>NICEIC Approved:</strong> All our electricians are registered with the <ExternalLink href="https://www.niceic.com">NICEIC (National Inspection Council for Electrical Installation Contracting)</ExternalLink></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-700"><strong>18th Edition Wiring Regulations:</strong> All work complies with <ExternalLink href="https://www.gov.uk/government/publications/electricity-at-work-regulations-1989">BS 7671:2018</ExternalLink> standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-700"><strong>Public Liability Insurance:</strong> Fully insured up to £10 million for your peace of mind</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-700"><strong>Building Regulations Part P:</strong> All domestic electrical work complies with <ExternalLink href="https://www.gov.uk/government/publications/electrical-safety-standards-in-the-private-rented-sector">Part P Building Regulations</ExternalLink></span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm italic">
                  For more information about electrical safety standards, visit the <ExternalLink href="https://www.electricalsafetyfirst.org.uk">Electrical Safety First</ExternalLink> website.
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-12 bg-gray-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">{service.benefitsHeading || "Why Choose Our " + service.title + " Service?"}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-lg shadow-sm"
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-orange-100 rounded-full p-2 mr-3">
                          <Star className="w-5 h-5 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{typeof benefit === 'object' ? benefit.title : benefit}</h3>
                      </div>
                      {typeof benefit === 'object' && (
                        <p className="text-gray-700">{benefit.description}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {service.faq.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        className={`w-full flex justify-between items-center text-left p-5 rounded-lg ${
                          activeIndex === index ? 'bg-orange-50 text-orange-700' : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                        } transition-colors duration-300`}
                      >
                        <span className="font-medium text-lg">{item.question}</span>
                        <div className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                          <ChevronRight className="w-5 h-5 rotate-90" />
                        </div>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="p-5 bg-white border border-gray-100 rounded-b-lg">
                          <p className="text-gray-700">{item.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Service Contact Card */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.callToAction || "Get Expert Help Today"}</h3>
                <p className="text-gray-600 mb-6">Contact our team today for expert advice and a free, no-obligation quote.</p>
                
                <div className="space-y-4 mb-6">
                  <Link 
                    href="/contact" 
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center font-medium py-3 px-4 rounded-lg shadow-md transition-colors duration-300"
                  >
                    Request a Quote
                  </Link>
                  
                  <Link 
                    href="tel:+447491565676" 
                    className="flex items-center justify-center w-full bg-white border border-gray-300 hover:border-orange-300 text-gray-800 text-center font-medium py-3 px-4 rounded-lg transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    +44 749 156 5676
                  </Link>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Service Coverage</h4>
                  <p className="text-gray-600 mb-4">We provide this service across the entire UK, with specialized teams in major cities.</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-3">Response Times</h4>
                  <p className="text-gray-600">Emergency: 2-4 hours<br />Standard: Next business day</p>
                </div>
              </div>
              
              {/* Related Services */}
              {service.relatedServices && service.relatedServices.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
                  <div className="space-y-4">
                    {service.relatedServices.map((relatedServiceId, index) => {
                      const relatedService = getServiceData(relatedServiceId);
                      const serviceTitle = relatedService ? relatedService.title : relatedServiceId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                      
                      return (
                        <Link 
                          key={index}
                          href={`/services/${relatedServiceId}`}
                          className="flex items-center p-3 rounded-lg hover:bg-white group transition-colors duration-300"
                        >
                          <div className="bg-orange-100 rounded-full p-2 mr-3 group-hover:bg-orange-200 transition-colors duration-300">
                            <Wrench className="w-5 h-5 text-orange-500" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{serviceTitle}</h4>
                            <p className="text-sm text-gray-500">Learn more about {serviceTitle.toLowerCase()}</p>
                          </div>
                          <div className="ml-auto">
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors duration-300" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our team today for expert advice on your {service.title.toLowerCase()} needs
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="block bg-white hover:bg-gray-100 text-orange-600 font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-orange-700/20 transition-all duration-300">
                  Request a Free Quote
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="tel:+447491565676" className="block bg-orange-700 hover:bg-orange-800 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-orange-900/30 transition-all duration-300">
                  Call Us Now
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export async function getStaticPaths() {
  // Get all service slugs for pre-rendering
  const services = [
    'fuse-board-upgrades',
    'electrical-inspections',
    'new-installations',
    'fault-finding',
    'garden-lighting',
    'rewiring',
    'emergency-services'
  ];
  
  const paths = services.map(slug => ({
    params: { slug }
  }));
  
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  // Fetch service data based on slug
  const serviceData = await getServiceData(params.slug);
  
  return {
    props: {
      serviceData
    },
  };
}