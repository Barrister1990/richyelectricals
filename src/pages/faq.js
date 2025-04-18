// pages/faq.js
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, HelpCircle, Mail, MessageSquare, Phone, Search } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function FAQ() {
  // State for FAQ accordion and search
  const [activeIndices, setActiveIndices] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState({});

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

  // Toggle FAQ item
  const toggleFaq = (categoryIndex, faqIndex) => {
    setActiveIndices(prev => {
      const key = `${categoryIndex}-${faqIndex}`;
      return {
        ...prev,
        [key]: !prev[key]
      };
    });
  };

  // FAQ data organized by categories
  const faqCategories = [
    {
      id: "generator-faqs",
      title: "Generator Services",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>,
      faqs: [
        {
          question: "How quickly can you respond to generator emergencies?",
          answer: "Our emergency response team is available 24/7, and we aim to reach most UK locations within 2-4 hours of your call, depending on your location and traffic conditions. For critical infrastructure clients, we offer priority response services with guaranteed response times."
        },
        {
          question: "What types of generators do you service and sell?",
          answer: "We work with all major generator types and brands, including diesel, petrol, and gas generators from manufacturers like Cummins, Caterpillar, Kohler, SDMO, FG Wilson, and many others. Our sales inventory includes options for residential backup, commercial standby, and industrial continuous power applications."
        },
        {
          question: "How often should my generator be serviced?",
          answer: "We recommend servicing standby generators at least once per year or after 200 hours of operation, whichever comes first. For generators used more frequently or in critical applications, more frequent servicing (every 6 months) is advisable. Regular maintenance ensures reliability and extends the lifespan of your equipment."
        },
        {
          question: "What size generator do I need for my home?",
          answer: "The size of generator you need depends on several factors, including your home's square footage, the appliances you want to power during an outage, and your electrical load requirements. Typically, homes require generators ranging from 7kW to 20kW. We offer free assessment services to determine the exact size needed for your specific requirements."
        },
        {
          question: "What's the difference between standby and portable generators?",
          answer: "Standby generators are permanently installed, automatically activate during power outages, and can power your entire home or business. They run on natural gas or propane and offer higher power output. Portable generators are smaller, mobile units that must be manually started, typically run on petrol, and can power selected appliances with limited capacity."
        },
        {
          question: "How long does generator installation take?",
          answer: "For residential standby generators, installation typically takes 1-2 days. Commercial installations may take 2-5 days depending on complexity and size. This includes all electrical connections, fuel line installation, and testing. Weather conditions and permit approvals may affect the timeline."
        }
      ]
    },
    {
      id: "electrical-faqs",
      title: "Electrical Services",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
      </svg>,
      faqs: [
        {
          question: "Are your electrical services covered by warranty?",
          answer: "Yes, all our electrical work comes with comprehensive warranties. We provide a minimum 12-month warranty on labor and workmanship for all electrical services. Generator repairs carry specific warranties depending on the components replaced, and new generator sales include the full manufacturer warranty plus our installation guarantee."
        },
        {
          question: "How often should electrical systems be inspected?",
          answer: "For residential properties, we recommend an Electrical Installation Condition Report (EICR) every 5-10 years, or when purchasing a new home. For rental properties, an EICR is legally required every 5 years. Commercial properties should have more frequent inspections, typically every 3-5 years, with some high-risk environments requiring annual inspections."
        },
        {
          question: "What is an EICR and why do I need one?",
          answer: "An Electrical Installation Condition Report (EICR) is a comprehensive check of your entire electrical system. It identifies any deterioration, defects, or dangerous conditions in your electrical installations. EICRs are essential for safety, insurance compliance, and are now legally required for rental properties. The inspection examines wiring, sockets, consumer units, and all fixed electrical parts of a property."
        },
        {
          question: "Do you provide emergency electrical services?",
          answer: "Yes, we offer 24/7 emergency electrical services throughout the UK. Our emergency electricians are fully qualified to handle any urgent electrical issue, from power outages and electrical failures to smoking fixtures or burning smells. We aim to respond to emergency calls within 2-4 hours, prioritizing situations that present safety hazards."
        },
        {
          question: "How much does rewiring a house cost?",
          answer: "The cost of rewiring varies significantly based on property size, accessibility, the condition of existing wiring, and your location. For a typical 3-bedroom house, prices generally range from £3,500 to £6,000. We provide detailed quotes after a thorough on-site assessment, with no obligation."
        },
        {
          question: "What electrical certificates do I need when selling my house?",
          answer: "When selling a property, while not legally mandatory, having an up-to-date Electrical Installation Condition Report (EICR) is highly recommended and often requested by buyers or their solicitors. Additionally, any recent electrical work should have appropriate certification under Part P building regulations. These documents provide assurance about the safety of the property's electrical systems."
        },
      ]
    },
    {
      id: "solar-faqs",
      title: "Solar Energy Solutions",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>,
      faqs: [
        {
          question: "How long does a typical solar panel installation take?",
          answer: "A standard residential solar installation (3-4kW system) typically takes 1-2 days to complete once all permits and approvals are in place. Larger commercial installations may take 3-7 days or more depending on system size and complexity. We'll provide you with a specific timeline during your consultation."
        },
        {
          question: "Do you offer financing options for solar panel installations?",
          answer: "Yes, we work with several financing partners to offer competitive payment plans for solar installations. Options include 0% interest plans, buy-now-pay-later schemes, and long-term financing with low monthly payments. Our consultants can explain all available options during your free quote consultation."
        },
        {
          question: "How much maintenance do solar panels require?",
          answer: "Solar panels require minimal maintenance. We recommend an annual inspection and cleaning to ensure optimal performance. Our maintenance packages include panel cleaning, system inspection, performance testing, and minor repairs. In the UK climate, seasonal cleaning may be beneficial to remove debris and maximize efficiency."
        },
        {
          question: "Will solar panels work during power cuts?",
          answer: "Standard grid-tied solar panel systems will not operate during a power cut for safety reasons. However, we offer solar battery storage solutions that can provide backup power during outages. These systems automatically detect power cuts and can power essential appliances in your home or business until grid power is restored."
        },
        {
          question: "How much can I save with solar panels?",
          answer: "Savings depend on several factors including your system size, energy consumption, and local sunlight conditions. On average, UK homeowners can save between £300-£600 per year on electricity bills with a standard solar installation. With battery storage, these savings can increase. Additionally, you may qualify for the Smart Export Guarantee (SEG) payments for excess energy exported to the grid."
        },
        {
          question: "Do I need planning permission for solar panels?",
          answer: "In most cases, solar panel installations in the UK fall under permitted development rights, meaning no planning permission is required. However, exceptions apply for listed buildings, conservation areas, or if the installation significantly alters the appearance of your property. Our team handles all planning requirements and will advise you on any necessary permissions during the consultation process."
        }
      ]
    },
    {
      id: "general-faqs",
      title: "General Questions",
      icon: <HelpCircle className="w-6 h-6" />,
      faqs: [
        {
          question: "What areas do you service in the UK?",
          answer: "We provide our electrical, generator, and solar services throughout the mainland UK. Our main service hubs are located in London, Manchester, Birmingham, Edinburgh, and Cardiff, allowing us to reach most locations. For remote areas, additional travel charges may apply. Contact our customer service team to confirm service availability in your specific location."
        },
        {
          question: "Do you provide free quotes?",
          answer: "Yes, we provide free, no-obligation quotes for all our services. For most residential projects, we can give an estimate over the phone. For commercial projects, generator installations, or solar systems, we recommend a site visit to assess your specific requirements before providing an accurate quote. Site assessments are also provided free of charge."
        },
        {
          question: "Are your engineers certified and insured?",
          answer: "Absolutely. All our engineers are fully certified with relevant qualifications including City & Guilds, NVQ, and 18th Edition Wiring Regulations. We are NICEIC approved contractors, and for solar installations, we are MCS certified. Our company carries comprehensive public liability insurance up to £10 million, and all work is guaranteed and certified where applicable."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept multiple payment methods including bank transfers, all major credit and debit cards, and direct debits for service contracts. For larger projects, we offer staged payment plans. We provide official invoices for all work completed, and business customers can apply for account facilities with credit terms."
        },
        {
          question: "Do you offer maintenance contracts?",
          answer: "Yes, we offer maintenance contracts for all our services. These can be tailored to your specific needs, from annual generator servicing to quarterly electrical system checks for commercial properties. Maintenance contracts include priority response times, discounted rates on parts and labor, and comprehensive documentation for compliance purposes."
        },
        {
          question: "What warranties do you offer?",
          answer: "All our work comes with warranty protection. For labor and workmanship, we provide a minimum 12-month guarantee. Generator sales include manufacturer warranties ranging from 2-5 years. Solar panel systems typically come with 10-25 year performance warranties and 5-10 year product warranties. Battery storage systems include 5-10 year warranties depending on the manufacturer."
        }
      ]
    },
    {
      id: "commercial-faqs",
      title: "Commercial & Industrial",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>,
      faqs: [
        {
          question: "Do you offer service level agreements (SLAs) for commercial clients?",
          answer: "Yes, we provide customized Service Level Agreements for commercial and industrial clients. Our SLAs can include guaranteed response times, scheduled maintenance, emergency priority service, regular compliance reports, and assigned account managers. These agreements can be tailored to your business needs and operational requirements."
        },
        {
          question: "Can you handle large-scale industrial electrical projects?",
          answer: "Absolutely. Our commercial division specializes in large-scale industrial electrical projects including factory installations, industrial generator systems, commercial solar farms, and complete electrical infrastructure for manufacturing facilities. We have experience working with diverse industries including manufacturing, healthcare, data centers, and retail chains."
        },
        {
          question: "What commercial generator solutions do you offer?",
          answer: "Our commercial generator solutions include standby generators for business continuity, prime power generators for off-grid operations, load bank testing services, synchronizing generator systems, industrial UPS integration, and custom power solutions. We supply and install generators from 10kW to 2000kW capacity to meet any commercial or industrial requirement."
        },
        {
          question: "Do you provide energy efficiency assessments for businesses?",
          answer: "Yes, we offer comprehensive energy efficiency assessments for commercial properties. Our audits identify potential energy savings through lighting upgrades, power factor correction, motor control improvements, HVAC optimizations, and renewable energy options. These assessments include detailed ROI calculations and recommendations for phased implementation."
        },
        {
          question: "Can you assist with electrical compliance for our business?",
          answer: "Yes, we provide full electrical compliance services including EICR for commercial properties, PAT testing, emergency lighting certification, fire alarm system testing, hazardous area classification, and documentation for insurance and regulatory requirements. We also offer staff training on electrical safety and compliance matters."
        },
        {
          question: "What kind of commercial solar solutions do you provide?",
          answer: "Our commercial solar solutions range from rooftop installations to ground-mounted solar farms. We offer power purchase agreements (PPAs), system financing options, battery storage integration, and comprehensive energy management systems. Our commercial solar division handles all aspects from initial feasibility studies to ongoing maintenance and monitoring."
        }
      ]
    }
  ];
  // Filter FAQs based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredFaqs({});
      return;
    }

    const term = searchTerm.toLowerCase();
    const results = {};

    faqCategories.forEach((category, categoryIndex) => {
      const matchingFaqs = category.faqs.filter(faq => 
        faq.question.toLowerCase().includes(term) || 
        faq.answer.toLowerCase().includes(term)
      );
      
      if (matchingFaqs.length > 0) {
        results[categoryIndex] = matchingFaqs;
      }
    });

    setFilteredFaqs(results);
  }, [searchTerm]);

  // Check if we have search results
  const hasSearchResults = Object.keys(filteredFaqs).length > 0;

  return (
    <div className="min-h-screen pt-24">
      <Head>
        <title>Frequently Asked Questions | Richy Electricals | UK Electrical Engineering Experts</title>
        <meta name="description" content="Find answers to common questions about our electrical, generator, and solar services. Expert solutions throughout the UK." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
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
                Frequently Asked <span className="text-orange-500">Questions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                Find answers to common questions about our electrical, generator, and solar services.
                Cannot find what you are looking for? Contact us directly.
              </p>
            </motion.div>
          </div>

          {/* Search Box */}
          <div className="max-w-xl mx-auto mb-10">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for questions or keywords..."
                className="w-full py-4 pl-5 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories Navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {faqCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`#${category.id}`} className="inline-flex items-center py-3 px-6 rounded-full bg-gray-100 hover:bg-orange-100 text-gray-800 font-medium transition-colors duration-300">
                  <span className="mr-2">{category.icon}</span>
                  {category.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          {/* If there's a search term but no results */}
          {searchTerm.trim() !== '' && !hasSearchResults && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
                <HelpCircle className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No matching questions found</h3>
              <p className="text-lg text-gray-600 mb-8">
                We could not find any questions matching {searchTerm}. 
                Try different keywords or browse all categories below.
              </p>
              <button 
                onClick={() => setSearchTerm('')}
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Display search results or all FAQs */}
          {searchTerm.trim() === '' || !hasSearchResults ? (
            // Show all FAQs by category
            <>
              {faqCategories.map((category, categoryIndex) => (
                <div 
                  key={categoryIndex}
                  id={category.id}
                  className="mb-16 animate-on-scroll"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-8"
                  >
                    <div className="flex items-center mb-2">
                      <div className="bg-orange-100 p-2 rounded-full mr-3">
                        {category.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                    </div>
                    <div className="h-1 w-20 bg-orange-500 rounded"></div>
                  </motion.div>

                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <motion.div
                        key={faqIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: faqIndex * 0.1 }}
                      >
                        <button
                          onClick={() => toggleFaq(categoryIndex, faqIndex)}
                          className={`w-full flex justify-between items-center text-left p-5 rounded-lg ${
                            activeIndices[`${categoryIndex}-${faqIndex}`] 
                              ? 'bg-orange-50 text-orange-700' 
                              : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                          } transition-colors duration-300`}
                        >
                          <span className="font-medium text-lg">{faq.question}</span>
                          <div className={`transform transition-transform duration-300 ${
                            activeIndices[`${categoryIndex}-${faqIndex}`] ? 'rotate-180' : ''
                          }`}>
                            <ChevronRight className="w-5 h-5 rotate-90" />
                          </div>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            activeIndices[`${categoryIndex}-${faqIndex}`] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-5 bg-white border border-gray-100 rounded-b-lg">
                            <p className="text-gray-700">{faq.answer}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          ) : (
            // Show search results
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Search Results for {searchTerm}
                </h2>
                <p className="text-gray-600">
                  Found {Object.values(filteredFaqs).reduce((total, faqs) => total + faqs.length, 0)} matching questions
                </p>
              </div>

              {Object.entries(filteredFaqs).map(([categoryIndexStr, faqs]) => {
                const categoryIndex = parseInt(categoryIndexStr);
                const category = faqCategories[categoryIndex];
                
                return (
                  <div key={categoryIndex} className="mb-10">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <div className="bg-orange-100 p-1 rounded-full mr-2">
                        {category.icon}
                      </div>
                      {category.title}
                    </h3>
                    
                    <div className="space-y-4">
                      {faqs.map((faq, faqIndex) => (
                        <motion.div
                          key={faqIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: faqIndex * 0.1 }}
                        >
                          <button
                            onClick={() => toggleFaq(categoryIndex, faqIndex)}
                            className={`w-full flex justify-between items-center text-left p-5 rounded-lg ${
                              activeIndices[`${categoryIndex}-${faqIndex}`] 
                                ? 'bg-orange-50 text-orange-700' 
                                : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                            } transition-colors duration-300`}
                          >
                            <span className="font-medium text-lg">{faq.question}</span>
                            <div className={`transform transition-transform duration-300 ${
                              activeIndices[`${categoryIndex}-${faqIndex}`] ? 'rotate-180' : ''
                            }`}>
                              <ChevronRight className="w-5 h-5 rotate-90" />
                            </div>
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              activeIndices[`${categoryIndex}-${faqIndex}`] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                          >
                            <div className="p-5 bg-white border border-gray-100 rounded-b-lg">
                              <p className="text-gray-700">{faq.answer}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50 animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
              <p className="text-lg text-gray-600">
                Our team is ready to provide the information you need
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="w-10 h-10 text-orange-500" />,
                title: "Call Us",
                description: "Speak directly with our friendly support team",
                action: "+447491565676",
                actionLabel: "Call Now",
                link: "tel:+447491565676"
              },
              {
                icon: <Mail className="w-10 h-10 text-orange-500" />,
                title: "Email Us",
                description: "Send us your questions and we'll respond promptly",
                action: "info@richyelectricals.co.uk",
                actionLabel: "Email Now",
                link: "mailto:info@richyelectricals.co.uk"
              },
              {
                icon: <MessageSquare className="w-10 h-10 text-orange-500" />,
                title: "Live Chat",
                description: "Chat with our team for immediate assistance",
                action: "",
                actionLabel: "Start Chat",
                link: "#chat"
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-orange-100 rounded-full p-4">
                    {contact.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-gray-600 mb-6">{contact.description}</p>
                <Link 
                  href={contact.link} 
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                >
                  {contact.actionLabel} <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 relative overflow-hidden animate-on-scroll">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="doodad" width="40" height="40" viewBox="0 0 40 40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="100%" height="100%" fill="transparent"/>
                <circle cx="20" cy="20" r="3" fill="currentColor"/>
                <circle cx="0" cy="20" r="1.5" fill="currentColor"/>
                <circle cx="40" cy="20" r="1.5" fill="currentColor"/>
                <circle cx="20" cy="0" r="1.5" fill="currentColor"/>
                <circle cx="20" cy="40" r="1.5" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#doodad)"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Professional Electrical, Generator or Solar Services?
              </h2>
              <p className="text-lg text-orange-100 mb-8">
                Our expert team is ready to help you with any electrical, generator or solar power needs.
                Contact us today for a free consultation and quote.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="inline-block bg-white text-orange-600 font-medium py-3 px-8 rounded-full hover:bg-orange-50 transition-colors duration-300"
                >
                  Get Free Quote
                </Link>
                <Link 
                  href="/services" 
                  className="inline-block bg-orange-700 text-white font-medium py-3 px-8 rounded-full hover:bg-orange-800 transition-colors duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}