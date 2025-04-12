// pages/services/[serviceId].js
import { motion } from 'framer-motion';
import {
    ArrowLeft, ArrowRight,
    ChevronRight,
    Phone,
    Star, Sun,
    Wrench, Zap
} from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Service data - this could be moved to a separate data file
const servicesData = {
  // Generator Services
  "generator-repairs": {
    id: "generator-repairs",
    category: "Generator Services",
    icon: <Wrench className="w-10 h-10 text-orange-500" />,
    title: "Generator Repairs",
    headline: "Expert Generator Repair Services Across the UK",
    description: "Our certified technicians diagnose and repair all types of generator issues, from mechanical faults to electrical problems. We service all major brands and models with rapid response times.",
    longDescription: "At Richy Electricals, we understand that a malfunctioning generator can lead to significant disruptions and costs. Our comprehensive generator repair service is designed to quickly identify and resolve issues, minimizing downtime and restoring your power backup capabilities. Our team of certified technicians has extensive experience working with all types of generators, from small residential units to large industrial systems.",
    features: [
      "24/7 emergency repair service",
      "Comprehensive diagnostic assessment",
      "Genuine manufacturer parts",
      "Performance testing and validation",
      "Post-repair maintenance advice"
    ],
    benefitsHeading: "Why Choose Our Generator Repair Services?",
    benefits: [
      {
        title: "Rapid Response Times",
        description: "Our emergency response team is available 24/7, with technicians dispatched quickly to your location to minimize downtime."
      },
      {
        title: "Multi-Brand Expertise",
        description: "We service all major generator brands including Cummins, Caterpillar, Kohler, SDMO, FG Wilson, and more."
      },
      {
        title: "Comprehensive Diagnostics",
        description: "Our technicians use advanced diagnostic equipment to quickly identify issues and determine the most efficient repair solution."
      },
      {
        title: "Quality Replacement Parts",
        description: "We use only genuine or high-quality compatible parts to ensure reliable performance and longevity."
      }
    ],
    processSteps: [
      {
        title: "Initial Assessment",
        description: "We begin with a thorough assessment of your generator to identify all issues affecting performance."
      },
      {
        title: "Detailed Quote",
        description: "After diagnosis, we provide a comprehensive quote outlining the necessary repairs and associated costs."
      },
      {
        title: "Expert Repairs",
        description: "Our certified technicians perform all needed repairs using industry-best practices and quality parts."
      },
      {
        title: "Testing & Validation",
        description: "We conduct extensive testing to ensure the generator operates at optimal performance levels."
      },
      {
        title: "Maintenance Advice",
        description: "We provide guidance on proper maintenance to prevent future issues and extend your generator's lifespan."
      }
    ],
    faq: [
      {
        question: "How quickly can you respond to an emergency generator breakdown?",
        answer: "For emergency situations, we aim to have a technician at your location within 2-4 hours for most areas across the UK. Our priority response service for critical infrastructure can provide even faster response times."
      },
      {
        question: "What types of generator issues can you repair?",
        answer: "Our technicians are equipped to handle a comprehensive range of generator problems, including engine failures, electrical faults, control panel issues, fuel system problems, cooling system malfunctions, starting problems, and more."
      },
      {
        question: "Do you provide warranty on generator repairs?",
        answer: "Yes, all our generator repairs come with a warranty. Labor is typically warranted for 90 days, while replacement parts carry the manufacturer's warranty, which can range from 6 months to 1 year depending on the component."
      },
      {
        question: "Can you repair generators at remote locations?",
        answer: "Yes, our mobile service teams are equipped to perform repairs at virtually any location across the UK, including remote sites and difficult-to-access areas."
      }
    ],
    relatedServices: ["generator-maintenance", "generator-installations", "generator-sales"],
    callToAction: "Need generator repair services?"
  },
  "generator-sales": {
    id: "generator-sales",
    category: "Generator Services",
    icon: <Zap className="w-10 h-10 text-orange-500" />,
    title: "Generator Sales",
    headline: "Find the Perfect Generator for Your Power Needs",
    description: "Find the perfect generator for your needs with our extensive range of new and reconditioned units. We offer diesel, petrol, and gas generators for residential, commercial, and industrial applications.",
    longDescription: "Whether you're looking for backup power for your home, a reliable power source for your business, or industrial-grade generators for critical operations, Richy Electricals has you covered. We offer an extensive selection of generators from leading manufacturers, with options to suit every requirement and budget. Our expert team will help you determine the right size and type of generator for your specific needs, ensuring you get the most cost-effective and reliable solution.",
    features: [
      "Personalized power requirement assessment",
      "Extensive range of leading brands",
      "New and reconditioned options",
      "Competitive pricing and financing",
      "Installation and setup included"
    ],
    benefitsHeading: "The Benefits of Our Generator Sales Service",
    benefits: [
      {
        title: "Expert Guidance",
        description: "Our specialists help you navigate the complex world of generators to find the perfect match for your specific requirements."
      },
      {
        title: "Quality Assurance",
        description: "All our generators, whether new or reconditioned, undergo rigorous testing to ensure reliability and performance."
      },
      {
        title: "Comprehensive Solutions",
        description: "Beyond just selling generators, we offer complete power solutions including installation, maintenance plans, and accessories."
      },
      {
        title: "After-Sales Support",
        description: "Our relationship doesn't end with the sale—we provide ongoing support, maintenance, and repair services for all generators we sell."
      }
    ],
    processSteps: [
      {
        title: "Needs Assessment",
        description: "We begin by understanding your power requirements, including load demands, application type, and operational environment."
      },
      {
        title: "Solution Design",
        description: "Our team designs a power solution tailored to your specific needs, considering factors like power output, fuel type, and noise requirements."
      },
      {
        title: "Product Selection",
        description: "We help you select from our range of generators, explaining the benefits and features of each option."
      },
      {
        title: "Installation Planning",
        description: "We develop a comprehensive installation plan, addressing site requirements, access, and integration with existing systems."
      },
      {
        title: "Commissioning & Training",
        description: "After installation, we commission the generator and provide training on safe operation and basic maintenance."
      }
    ],
    faq: [
      {
        question: "What size generator do I need for my home/business?",
        answer: "The size of generator you need depends on your specific power requirements. For homes, we typically recommend 7-22kW units depending on what you want to power. For businesses, requirements can range from 20kW to several hundred kW. Our team can perform a detailed load analysis to determine the perfect size for your needs."
      },
      {
        question: "What's the difference between standby, prime, and continuous power generators?",
        answer: "Standby generators are designed to provide emergency power during outages and aren't meant for continuous use. Prime power generators can run for extended periods but with variable loads. Continuous power generators are designed to run constantly at full load. We'll help you choose the right type based on your application."
      },
      {
        question: "Do you offer financing options for generator purchases?",
        answer: "Yes, we offer various financing options including leasing, hire purchase, and payment plans. We can help you select a financing solution that aligns with your budget and business requirements."
      },
      {
        question: "What's included with the purchase of a generator?",
        answer: "Our generator packages typically include the generator unit, delivery, basic installation, commissioning, testing, operator training, manufacturer's warranty, and first service. Optional extras include extended warranties, maintenance packages, remote monitoring, and acoustic enclosures."
      }
    ],
    relatedServices: ["generator-installations", "generator-maintenance", "generator-repairs"],
    callToAction: "Looking to purchase a generator?"
  },
  
  // Additional services would be added here following the same pattern
  
  // Solar Energy Solutions example
  "solar-panel-installation": {
    id: "solar-panel-installation",
    category: "Solar Energy Solutions",
    icon: <Sun className="w-10 h-10 text-orange-500" />,
    title: "Solar Panel Installation",
    headline: "Harness the Power of the Sun with Professional Solar Installation",
    description: "Harness the power of the sun with our professional solar PV installations. We design and install custom solar systems to maximize energy production for your property.",
    longDescription: "Transitioning to solar energy is one of the most effective ways to reduce your carbon footprint while significantly cutting your energy bills. At Richy Electricals, we provide end-to-end solar panel installation services, from initial site assessment and system design to installation and grid connection. Our MCS-certified installers ensure your solar PV system meets the highest quality standards, optimizing energy generation for your specific location and requirements.",
    features: [
      "Custom system design and sizing",
      "High-efficiency solar panels",
      "Professional installation by MCS-certified technicians",
      "Grid connection and commissioning",
      "Performance monitoring setup"
    ],
    benefitsHeading: "Benefits of Our Solar Panel Installation Service",
    benefits: [
      {
        title: "Reduced Energy Bills",
        description: "Generate your own electricity and significantly reduce your dependency on the grid, leading to substantial savings on your energy bills."
      },
      {
        title: "Environmentally Friendly",
        description: "Solar power is clean, renewable energy that reduces your carbon footprint and helps combat climate change."
      },
      {
        title: "Increased Property Value",
        description: "Solar panel installations can increase your property's value by demonstrating energy efficiency and lower operating costs."
      },
      {
        title: "Long-Term Investment",
        description: "With 25+ year lifespans and minimal maintenance, solar panels offer excellent return on investment through energy savings."
      }
    ],
    processSteps: [
      {
        title: "Site Assessment",
        description: "We evaluate your property's solar potential, considering roof orientation, shading, and structural integrity."
      },
      {
        title: "System Design",
        description: "Our engineers design a custom solar system to maximize energy production based on your energy needs and site conditions."
      },
      {
        title: "Proposal & Planning",
        description: "We provide a detailed proposal outlining system specifications, expected performance, costs, and savings."
      },
      {
        title: "Installation",
        description: "Our MCS-certified technicians professionally install your solar panels, inverter, and associated equipment."
      },
      {
        title: "Commissioning & Handover",
        description: "We test the system, connect it to the grid, set up monitoring, and provide comprehensive user training."
      }
    ],
    faq: [
      {
        question: "How much can I save with solar panels?",
        answer: "Savings depend on system size, your energy consumption, and electricity rates. Typically, UK homeowners can save £300-£700 annually on electricity bills. Businesses often see higher savings proportional to their energy usage."
      },
      {
        question: "How long does a solar panel installation take?",
        answer: "Most residential installations (3-4kW) take 1-2 days to complete once all permissions and equipment are in place. Larger commercial installations typically take 3-7 days depending on system size and complexity."
      },
      {
        question: "Do solar panels work in the UK climate?",
        answer: "Yes! Solar panels don't require direct sunlight to generate electricity—they use daylight. Even during cloudy days, modern solar panels continue to produce electricity, though at reduced efficiency compared to sunny days."
      },
      {
        question: "What maintenance do solar panels require?",
        answer: "Solar panels require minimal maintenance. An annual inspection and occasional cleaning (usually once or twice a year) to remove debris is typically sufficient to maintain optimal performance."
      }
    ],
    relatedServices: ["solar-battery-storage", "solar-maintenance", "solar-upgrades"],
    callToAction: "Ready to switch to solar power?"
  }
};

export default function ServiceDetail() {
  const router = useRouter();
  const { serviceId } = router.query;
  const [service, setService] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (serviceId && servicesData[serviceId]) {
      setService(servicesData[serviceId]);
    }
  }, [serviceId]);

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

  // Empty state
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-700">Loading service details...</h1>
          <p className="mt-4 text-gray-500">If this page doesn't load, the service may not exist.</p>
          <Link href="/services" className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-full">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Head>
        <title>{service.title} | Richy Electricals | UK Electrical Engineering Experts</title>
        <meta name="description" content={service.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
                {service.headline}
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl">
                {service.description}
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
                  <Link href="tel:02079460000" className="inline-flex items-center bg-white text-gray-900 font-medium py-3 px-8 rounded-full border border-gray-300 hover:border-gray-400 shadow-md transition-all duration-300">
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                <p className="text-gray-700">{service.longDescription}</p>
                
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
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
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Process</h2>
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

              {/* Benefits */}
              <div className="mb-12 bg-gray-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">{service.benefitsHeading}</h2>
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
                        <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                      </div>
                      <p className="text-gray-700">{benefit.description}</p>
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.callToAction}</h3>
                <p className="text-gray-600 mb-6">Contact our team today for expert advice and a free, no-obligation quote.</p>
                
                <div className="space-y-4 mb-6">
                  <Link 
                    href="/contact" 
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center font-medium py-3 px-4 rounded-lg shadow-md transition-colors duration-300"
                  >
                    Request a Quote
                  </Link>
                  
                  <Link 
                    href="tel:02079460000" 
                    className="flex items-center justify-center w-full bg-white border border-gray-300 hover:border-orange-300 text-gray-800 text-center font-medium py-3 px-4 rounded-lg transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    020 7946 0000
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
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
                <div className="space-y-4">
                  {service.relatedServices.map((relatedServiceId, index) => {
                    const relatedService = servicesData[relatedServiceId];
                    if (!relatedService) return null;
                    
                    return (
                      <Link 
                        key={index}
                        href={`/services/${relatedServiceId}`}
                        className="flex items-center p-3 rounded-lg hover:bg-white group transition-colors duration-300"
                      >
                        <div className="bg-orange-100 rounded-full p-2 mr-3 group-hover:bg-orange-200 transition-colors duration-300">
                          {relatedService.icon || <Wrench className="w-5 h-5 text-orange-500" />}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{relatedService.title}</h4>
                          <p className="text-sm text-gray-500">Learn more</p>
                        </div>
                        <div className="ml-auto">
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors duration-300" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section - Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-lg text-gray-600">
              View examples of our recent {service.title.toLowerCase()} projects
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white p-2 rounded-lg shadow-sm">
                <div className="bg-gray-200 rounded aspect-video flex items-center justify-center">
                  <span className="text-gray-500">Project Image {item}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/portfolio" className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium">
              View Our Full Portfolio
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Placeholder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Customer Testimonials</h2>
            <p className="text-lg text-gray-600">
              See what our customers say about our
              {service.title.toLowerCase()} services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "James Wilson",
                location: "Manchester",
                rating: 5,
                text: "The team provided excellent service from start to finish. Professional, knowledgeable, and efficient!"
              },
              {
                name: "Sarah Thompson",
                location: "London",
                rating: 5,
                text: "Extremely satisfied with the quality of work. They completed the job ahead of schedule and left everything tidy."
              },
              {
                name: "Robert Lewis",
                location: "Edinburgh",
                rating: 4,
                text: "Great communication throughout the project. Would definitely recommend their services to others."
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                    <span className="text-gray-500 font-medium">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="ml-auto flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/testimonials" className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium">
              View All Testimonials
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
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
                <Link href="tel:02079460000" className="block bg-orange-700 hover:bg-orange-800 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-orange-900/30 transition-all duration-300">
                  Call Us Now
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}