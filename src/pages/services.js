// pages/services.js
import { motion } from 'framer-motion';
import { ArrowRight, Battery, BatteryCharging, CalendarClock, ChevronRight, Clock, Download, HelpCircle, MessageSquare, Phone, ScrollText, Settings, ShieldCheck, Sun, Wrench, Zap } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Services() {
  // State for FAQ accordion
  const [activeIndex, setActiveIndex] = useState(null);

  // For intersection observer animations
  useEffect(() => {
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
  }, []);

  // Service data
  const serviceCategories = [
    {
      id: "generator-services",
      title: "Generator Services",
      description: "Professional generator solutions for homes and businesses across the UK",
      services: [
        {
          id: "generator-repairs",
          icon: <Wrench className="w-10 h-10 text-orange-500" />,
          title: "Generator Repairs",
          description: "Our certified technicians diagnose and repair all types of generator issues, from mechanical faults to electrical problems. We service all major brands and models with rapid response times.",
          features: [
            "24/7 emergency repair service",
            "Comprehensive diagnostic assessment",
            "Genuine manufacturer parts",
            "Performance testing and validation",
            "Post-repair maintenance advice"
          ]
        },
        {
          id: "generator-sales",
          icon: <Zap className="w-10 h-10 text-orange-500" />,
          title: "Generator Sales",
          description: "Find the perfect generator for your needs with our extensive range of new and reconditioned units. We offer diesel, petrol, and gas generators for residential, commercial, and industrial applications.",
          features: [
            "Personalized power requirement assessment",
            "Extensive range of leading brands",
            "New and reconditioned options",
            "Competitive pricing and financing",
            "Installation and setup included"
          ]
        },
        {
          id: "generator-installations",
          icon: <Settings className="w-10 h-10 text-orange-500" />,
          title: "Generator Installations",
          description: "Our expert team handles every aspect of generator installation, from site assessment and preparation to final testing and handover, ensuring optimal performance and safety compliance.",
          features: [
            "Site survey and power requirement analysis",
            "Professional installation by certified technicians",
            "Full integration with existing electrical systems",
            "Compliance with all UK regulations",
            "User training and documentation"
          ]
        },
        {
          id: "generator-maintenance",
          icon: <Wrench className="w-10 h-10 text-orange-500" />,
          title: "Generator Maintenance",
          description: "Keep your generator running at peak efficiency with our preventative maintenance programs. Regular servicing extends equipment life and ensures reliability when you need it most.",
          features: [
            "Scheduled maintenance packages",
            "Fluid and filter replacements",
            "Component inspection and testing",
            "Performance optimization",
            "Detailed service reports"
          ]
        }
      ]
    },
    {
      id: "electrical-services",
      title: "Electrical Services",
      description: "Comprehensive electrical solutions delivered by certified professionals",
      services: [
        {
          id: "electrical-installations",
          icon: <Settings className="w-10 h-10 text-orange-500" />,
          title: "Electrical Installations",
          description: "From new builds to renovations, our electrical installation services cover all aspects of wiring, fixtures, and systems for both residential and commercial properties.",
          features: [
            "Full property wiring and rewiring",
            "Consumer unit installation and upgrades",
            "External and garden electrical installations",
            "Smart home electrical systems",
            "Industrial machinery installations"
          ]
        },
        {
          id: "maintenance",
          icon: <Wrench className="w-10 h-10 text-orange-500" />,
          title: "Maintenance Services",
          description: "Proactive electrical maintenance helps prevent costly breakdowns and ensures safety. Our maintenance programs are tailored to your specific property and usage requirements.",
          features: [
            "Scheduled electrical inspections",
            "Preventative component replacement",
            "Thermal imaging diagnostics",
            "Load testing and analysis",
            "Maintenance documentation and reporting"
          ]
        },
        {
          id: "safety",
          icon: <ShieldCheck className="w-10 h-10 text-orange-500" />,
          title: "Safety Inspections",
          description: "Our comprehensive electrical safety checks identify potential hazards and ensure your property meets all current regulations and safety standards.",
          features: [
            "EICR (Electrical Installation Condition Report)",
            "PAT testing for portable appliances",
            "Landlord electrical safety certificates",
            "Commercial property compliance checks",
            "Fire alarm and emergency lighting testing"
          ]
        },
        {
          id: "emergency",
          icon: <Clock className="w-10 h-10 text-orange-500" />,
          title: "Emergency Call-outs",
          description: "Electrical emergencies require immediate attention. Our 24/7 emergency service provides rapid response to urgent electrical issues across the UK.",
          features: [
            "24-hour emergency response team",
            "Rapid fault identification",
            "Temporary and permanent solutions",
            "Safe isolation of dangerous situations",
            "Post-emergency follow-up service"
          ]
        }
      ]
    },
    {
      id: "solar-services",
      title: "Solar Energy Solutions",
      description: "Sustainable solar power systems for residential and commercial properties",
      services: [
        {
          id: "solar-panel-installation",
          icon: <Sun className="w-10 h-10 text-orange-500" />,
          title: "Solar Panel Installation",
          description: "Harness the power of the sun with our professional solar PV installations. We design and install custom solar systems to maximize energy production for your property.",
          features: [
            "Custom system design and sizing",
            "High-efficiency solar panels",
            "Professional installation by MCS-certified technicians",
            "Grid connection and commissioning",
            "Performance monitoring setup"
          ]
        },
        {
          id: "solar-battery-storage",
          icon: <Battery className="w-10 h-10 text-orange-500" />,
          title: "Solar Battery Storage",
          description: "Maximize your solar investment with battery storage solutions that allow you to store excess energy for use when the sun isn't shining, reducing grid reliance.",
          features: [
            "Leading battery technologies (Tesla, LG, Sonnen)",
            "Seamless integration with existing solar systems",
            "Smart energy management systems",
            "Backup power configuration",
            "Scalable capacity options"
          ]
        },
        {
          id: "solar-maintenance",
          icon: <BatteryCharging className="w-10 h-10 text-orange-500" />,
          title: "Solar System Maintenance",
          description: "Keep your solar investment performing at its best with our professional maintenance services, ensuring optimal energy production and system longevity.",
          features: [
            "Panel cleaning and inspection",
            "Performance analysis and optimization",
            "Inverter and electrical component checks",
            "System health reports",
            "Warranty support and management"
          ]
        },
        {
          id: "solar-upgrades",
          icon: <ArrowRight className="w-10 h-10 text-orange-500" />,
          title: "System Upgrades & Expansion",
          description: "Expand or upgrade your existing solar system to increase capacity, improve efficiency, or add new features like battery storage or EV charging.",
          features: [
            "System assessment and upgrade planning",
            "Panel efficiency improvements",
            "Inverter upgrades and replacements",
            "Integration of new technologies",
            "Smart home energy management additions"
          ]
        }
      ]
    }
  ];

  // FAQs specific to services
  const faqs = [
    {
      question: "How quickly can you respond to generator emergencies?",
      answer: "Our emergency response team is available 24/7, and we aim to reach most UK locations within 2-4 hours of your call, depending on your location and traffic conditions. For critical infrastructure clients, we offer priority response services with guaranteed response times."
    },
    {
      question: "What types of generators do you service and sell?",
      answer: "We work with all major generator types and brands, including diesel, petrol, and gas generators from manufacturers like Cummins, Caterpillar, Kohler, SDMO, FG Wilson, and many others. Our sales inventory includes options for residential backup, commercial standby, and industrial continuous power applications."
    },
    {
      question: "How long does a typical solar panel installation take?",
      answer: "A standard residential solar installation (3-4kW system) typically takes 1-2 days to complete once all permits and approvals are in place. Larger commercial installations may take 3-7 days or more depending on system size and complexity. We'll provide you with a specific timeline during your consultation."
    },
    {
      question: "Are your electrical services covered by warranty?",
      answer: "Yes, all our electrical work comes with comprehensive warranties. We provide a minimum 12-month warranty on labor and workmanship for all electrical services. Generator repairs carry specific warranties depending on the components replaced, and new generator sales include the full manufacturer warranty plus our installation guarantee."
    },
    {
      question: "Do you offer financing options for solar panel installations?",
      answer: "Yes, we work with several financing partners to offer competitive payment plans for solar installations. Options include 0% interest plans, buy-now-pay-later schemes, and long-term financing with low monthly payments. Our consultants can explain all available options during your free quote consultation."
    },
    {
      question: "How much maintenance do solar panels require?",
      answer: "Solar panels require minimal maintenance. We recommend an annual inspection and cleaning to ensure optimal performance. Our maintenance packages include panel cleaning, system inspection, performance testing, and minor repairs. In the UK climate, seasonal cleaning may be beneficial to remove debris and maximize efficiency."
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <Head>
        <title>Our Services | Richy Electricals | UK Electrical Engineering Experts</title>
        <meta name="description" content="Comprehensive electrical services including generator repairs, solar panel installation, and electrical maintenance throughout the UK." />
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
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Our Professional <span className="text-orange-500">Electrical Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                From generator repairs and solar installations to comprehensive electrical solutions,
                we deliver quality, reliability, and expertise across the United Kingdom.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
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
                  <Link href="#service-categories" className="inline-block bg-white text-gray-900 font-medium py-3 px-8 rounded-full border border-gray-300 hover:border-gray-400 shadow-md transition-all duration-300">
                    Explore Services
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Categories Navigation */}
      <section id="service-categories" className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`#${category.id}`} className="inline-block py-3 px-6 rounded-full bg-gray-100 hover:bg-orange-100 text-gray-800 font-medium transition-colors duration-300">
                  {category.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Content */}
      {serviceCategories.map((category, categoryIndex) => (
        <section 
          id={category.id} 
          key={categoryIndex}
          className={`py-20 ${categoryIndex % 2 === 1 ? 'bg-gray-50' : 'bg-white'} animate-on-scroll`}
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-lg text-gray-600">{category.description}</p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl p-8 transition-all duration-300"
                >
                  <div className="rounded-full bg-orange-100 w-16 h-16 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
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
                  
                  <div className="flex space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href="/contact" className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-5 rounded-lg shadow-md transition-all duration-300">
                        Request Service <ChevronRight className="ml-1 w-4 h-4" />
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href={`/services/${service.id}`} className="inline-flex items-center text-gray-800 border border-gray-300 hover:border-gray-400 font-medium py-2 px-5 rounded-lg transition-all duration-300">
                        Learn More
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Service Process Section */}
      <section className="py-20 bg-gray-900 text-white animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Process</h2>
              <p className="text-lg text-gray-300">
                We follow a streamlined approach to deliver exceptional results for every project
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
                title: "Consultation",
                description: "We start with a thorough consultation to understand your specific needs and requirements."
              },
              {
                icon: <ScrollText className="w-8 h-8 text-orange-500" />,
                title: "Assessment & Quote",
                description: "Our experts assess your requirements and provide a detailed, no-obligation quote."
              },
              {
                icon: <CalendarClock className="w-8 h-8 text-orange-500" />,
                title: "Scheduling",
                description: "We schedule the service at your convenience, with flexible timing options."
              },
              {
                icon: <Wrench className="w-8 h-8 text-orange-500" />,
                title: "Expert Execution",
                description: "Our certified professionals complete the work to the highest industry standards."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-800 rounded-xl p-6 h-full relative z-10">
                  <div className="rounded-full bg-gray-700 w-16 h-16 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                
                {/* Connecting line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-orange-500 z-0"></div>
                )}
                
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold z-20">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20 bg-white animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Certifications & Industry Compliance</h2>
              <p className="text-lg text-gray-600 mb-8">
                At Richy Electricals, we maintain the highest standards of quality and safety. 
                Our work complies with all relevant UK regulations and industry standards.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  "NICEIC Approved Contractor",
                  "MCS Certified Installer",
                  "18th Edition Qualified Engineers",
                  "SafeContractor Approved",
                  "Construction Line Gold Member",
                  "ISO 9001:2015 Certified",
                  "ECA Member",
                  "City & Guilds Qualified Team"
                ].map((cert, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">{cert}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/about" className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-full shadow-md transition-all duration-300">
                  About Our Standards
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
                    <div className="w-full h-20 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-500 font-semibold">Cert {item}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 z-20">
                <div className="flex items-center">
                  <div className="bg-orange-500 rounded-full p-2 mr-3">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Fully Licensed &</p>
                    <p className="font-bold text-gray-900">Insured Services</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


        {/* FAQ Section */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600">
                  Find answers to common questions about our electrical services
                </p>
              </motion.div>
            </div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-6"
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className={`w-full flex justify-between items-center text-left p-5 rounded-lg ${
                      activeIndex === index ? 'bg-orange-50 text-orange-700' : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                    } transition-colors duration-300`}
                  >
                    <span className="font-medium text-lg">{faq.question}</span>
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
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link href="/faq" className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-full transition-colors duration-300">
                  View All FAQs
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-orange-500 animate-on-scroll">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to discuss your project?</h2>
                <p className="text-orange-100 text-lg mb-6 lg:mb-0">
                  Get in touch today for a free consultation and quote on your electrical needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact" className="inline-block bg-white text-orange-500 font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-orange-600/30 transition-all duration-300">
                    Request a Quote
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="tel:02079460000" className="inline-flex items-center bg-orange-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:bg-orange-700 transition-all duration-300">
                    <Phone className="mr-2 w-5 h-5" />
                    Call Us Now
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Brochure */}
        <section className="py-12 bg-gray-100 border-t border-gray-200">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="text-gray-800 font-medium">
                Want to learn more about our services?
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/download-brochure" className="inline-flex items-center bg-white text-gray-800 border border-gray-300 font-medium py-2 px-5 rounded-full hover:bg-gray-50 transition-all duration-300">
                  <Download className="mr-2 w-4 h-4" />
                  Download Our Service Brochure
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/help" className="inline-flex items-center text-gray-700 font-medium">
                  <HelpCircle className="mr-1 w-4 h-4" />
                  Need Help?
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    );
}