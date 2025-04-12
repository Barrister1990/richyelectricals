// pages/about.js
import { motion } from 'framer-motion';
import { Award, Building, ChevronRight, Clock, Globe, MapPin, Phone, Shield, Target, Users } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen w-screen">
      <Head>
        <title>About Us | Richy Electricals - Leading Electrical Engineering Company in UK & Ghana</title>
        <meta name="description" content="Learn about Richy Electricals, our history, mission, values and the expert team behind electrical engineering solutions serving UK, Ghana and worldwide clients." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10">
          <div className="absolute inset-0 bg-[url('/about-hero.jpg')] bg-cover bg-center opacity-70 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="block">About</span>
              <span className="text-orange-500">Richy Electricals</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Our story, our mission, and the expert team powering electrical solutions in the UK, Ghana, and worldwide since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/api/placeholder/600/600" 
                    alt="Richy Electricals founder" 
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Experience badge */}
                <div className="absolute -bottom-6 -right-6 bg-orange-500 rounded-xl shadow-lg p-4 text-white">
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-sm">Years Experience</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className='w-full'
            >
              <div className="mb-6">
                <h2 className="inline-block text-sm font-semibold text-orange-500 uppercase tracking-wider border-b-2 border-orange-500 pb-1 mb-2">Our Story</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">From Local Roots to Global Reach: UK & Ghana-Based Electrical Excellence</h3>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010 by Richard Thompson, a certified electrical engineer with roots in both the UK and Ghana, Richy Electricals began as a small repair shop in London focusing on generator repairs and basic electrical services.
              </p>
              
              <p className="text-lg text-gray-600 mb-6">
                What started as a modest operation quickly grew as word spread about Richy expertise, reliability, and exceptional customer service. By 2015, Richy Electricals had expanded to the UK and established our first international office in Accra, Ghana, connecting two continents with our expertise.
              </p>
              
              <p className="text-lg text-gray-600 mb-6">
                Today, we are proud to employ over 80 electrical professionals across our UK and Ghana locations, serving residential, commercial, and industrial clients worldwide with a comprehensive range of electrical services while maintaining the same commitment to quality and customer satisfaction that has been our hallmark since day one.
              </p>
              
              <div className="flex items-center space-x-6 text-gray-500 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Established in 2010</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>Global Operations</span>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/services" className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-full shadow-md transition-all duration-300">
                  Our Services
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="inline-block text-sm font-semibold text-orange-500 uppercase tracking-wider border-b-2 border-orange-500 pb-1 mb-2">Our Purpose</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mission, Vision & Values</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do at Richy Electricals
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="rounded-full bg-orange-100 w-16 h-16 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-orange-500" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h4>
              <p className="text-gray-600">
                To provide superior electrical engineering solutions that enhance safety, reliability, and efficiency for homes and businesses across the UK, Ghana, and worldwide, delivered with integrity and exceptional customer care tailored to local and international standards.
              </p>
            </motion.div>
            
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="rounded-full bg-orange-100 w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-orange-500" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h4>
              <p className="text-gray-600">
                To be a globally recognized name in electrical engineering, known for our technical expertise, innovation, and cultural understanding across diverse markets, while leading the industry in sustainable electrical solutions that bridge continents and communities.
              </p>
            </motion.div>
            
            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="rounded-full bg-orange-100 w-16 h-16 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-orange-500" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h4>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span>Excellence in service and workmanship</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span>Integrity and transparency in all dealings</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span>Safety as our highest priority</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span>Innovation and cross-cultural collaboration</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span>Respect for our clients and team members worldwide</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6">
                <h2 className="inline-block text-sm font-semibold text-orange-500 uppercase tracking-wider border-b-2 border-orange-500 pb-1 mb-2">Why Choose Us</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Richy Electricals Difference</h3>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                At Richy Electricals, we distinguish ourselves through unwavering commitment to quality, safety, and customer satisfaction across cultures and continents. Here is what sets us apart:
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Shield className="w-6 h-6 text-orange-500" />,
                    title: "Fully Licensed & Insured Globally",
                    description: "Complete peace of mind with comprehensive coverage and full regulatory compliance in both the UK, Ghana, and other operating regions."
                  },
                  {
                    icon: <Users className="w-6 h-6 text-orange-500" />,
                    title: "Cross-Cultural Technical Team",
                    description: "Certified electrical engineers with specialized training and experience working across different regulatory systems and international standards."
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-orange-500" />,
                    title: "International Response Capability",
                    description: "Prompt service with emergency response available 24/7 in the UK, Ghana, and coordinated support for our global clients."
                  },
                  {
                    icon: <Globe className="w-6 h-6 text-orange-500" />,
                    title: "Global Expertise, Local Understanding",
                    description: "Deep knowledge of both European and African electrical systems, standards, and practices for truly adaptable solutions."
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex"
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-orange-100 rounded-full p-3">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <Image 
                  src="/atwork.jpg" 
                  alt="Richy Electricals engineer at work in UK" 
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg shadow-md transform translate-y-6"
                />
                <Image 
                  src="/ingh.jpg" 
                  alt="Electrical installation in Ghana" 
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
                <Image 
                  src="/source.jpg" 
                  alt="International generator project" 
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
                <Image 
                  src="/panel.jpg" 
                  alt="Team working on electrical panel" 
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg shadow-md transform translate-y-6"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 z-20">
                <div className="flex items-center">
                  <div className="bg-green-500 rounded-full p-2 mr-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">6000+ Projects</p>
                    <p className="text-sm text-gray-500">Across 15+ Countries</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="inline-block text-sm font-semibold text-orange-500 uppercase tracking-wider border-b-2 border-orange-500 pb-1 mb-2">Our Team</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet the Experts Behind Richy Electricals</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our international team of qualified professionals brings decades of combined experience across multiple continents
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Richard Thompson",
                position: "Founder & CEO",
                bio: "With roots in both the UK and Ghana, Richard's dual-cultural background and 20+ years in electrical engineering drive our global vision.",
                image: "/api/placeholder/300/300"
              },
              {
                name: "Sarah Mitchell",
                position: "UK Technical Director",
                bio: "A certified electrical engineer with specialized knowledge in European power systems and renewable energy technologies.",
                image: "/api/placeholder/300/300"
              },
              {
                name: "Kwame Osei",
                position: "Ghana Operations Director",
                bio: "Leading our African operations with extensive experience in industrial electrical systems and power stability solutions.",
                image: "/api/placeholder/300/300"
              },
              {
                name: "Emma Davis",
                position: "International Relations",
                bio: "Coordinating our global projects and ensuring seamless communication between our international offices and clients worldwide.",
                image: "/api/placeholder/300/300"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-orange-500 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/team" className="inline-flex items-center text-gray-900 bg-gray-100 hover:bg-gray-200 font-medium py-3 px-8 rounded-full shadow-md transition-all duration-300">
                Meet the Full Team
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="inline-block text-sm font-semibold text-orange-500 uppercase tracking-wider border-b-2 border-orange-500 pb-1 mb-2">Our Journey</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Key Milestones</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Charting our growth from a small local business to an international electrical engineering company
              </p>
            </motion.div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-100"></div>
            
            {/* Timeline items */}
            {[
              {
                year: "2010",
                title: "Company Founded",
                description: "Richard Thompson establishes Richy Electricals as a small generator repair service in London, UK."
              },
              {
                year: "2013",
                title: "Service Expansion",
                description: "Added comprehensive electrical installation services and expanded team to five engineers in the UK."
              },
              {
                year: "2015",
                title: "Ghana Expansion",
                description: "Opened our first international office in Accra, Ghana, bringing our expertise to West Africa."
              },
              {
                year: "2017",
                title: "Cross-Continental Growth",
                description: "Expanded UK operations and established a technical training center in Kumasi, Ghana."
              },
              {
                year: "2020",
                title: "Global Projects Initiative",
                description: "Launched our international projects division, serving clients across Africa, Europe, and the Middle East."
              },
              {
                year: "2023",
                title: "Industry Recognition",
                description: "Awarded 'International Electrical Contractor of the Year' for excellence in cross-continental projects."
              }
            ].map((milestone, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row mb-12 relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 md:text-right px-4 md:px-8">
                  {index % 2 === 0 ? (
                    <div>
                      <h4 className="text-2xl font-bold text-orange-500 mb-2">{milestone.year}</h4>
                      <h5 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h5>
                      <p className="text-gray-600 md:ml-auto">{milestone.description}</p>
                    </div>
                  ) : (
                    <div className="md:opacity-0"></div>
                  )}
                </div>
                
                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-orange-500 border-4 border-orange-100"></div>
                </div>
                
                <div className="flex-1 px-4 md:px-8">
                  {index % 2 === 1 ? (
                    <div>
                      <h4 className="text-2xl font-bold text-orange-500 mb-2">{milestone.year}</h4>
                      <h5 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h5>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  ) : (
                    <div className="md:opacity-0"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="inline-block text-sm font-semibold text-orange-500 uppercase tracking-wider border-b-2 border-orange-500 pb-1 mb-2">Credentials</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our International Certifications & Affiliations</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We maintain the highest industry standards through professional certifications and memberships across multiple countries
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-gray-500" />
                </div>
                <h4 className="text-center font-medium text-gray-900">Certification {index + 1}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="inline-block text-sm font-semibold text-orange-500 uppercase tracking-wider border-b-2 border-orange-500 pb-1 mb-2">Where We Work</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Global Locations</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Providing electrical services worldwide with strategic offices in the UK and Ghana, supporting projects across continents
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                city: "London",
                country: "United Kingdom",
                address: "123 Electric Avenue, London, EC1A 1BB",
                phone: "+44 20 1234 5678",
                email: "london@richyelectricals.co.uk"
              },
              {
                city: "Manchester",
                country: "United Kingdom",
                address: "45 Power Street, Manchester, M1 2WX",
                phone: "+44 161 987 6543",
                email: "manchester@richyelectricals.co.uk"
              },
              {
                city: "Accra",
                country: "Ghana",
                address: "15 Independence Road, Airport Residential Area, Accra",
                phone: "+233 30 273 4590",
                email: "accra@richyelectricals.com.gh"
              },
              {
                city: "Kumasi",
                country: "Ghana",
                address: "7 Harper Road, Ahodwo, Kumasi",
                phone: "+233 32 202 5678",
                email: "kumasi@richyelectricals.com.gh"
              },
              {
                city: "International Projects",
                country: "Worldwide",
                address: "Serving clients globally from our UK and Ghana bases",
                phone: "+44 20 8765 4321",
                email: "global@richyelectricals.com"
              }
            ].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="mr-3">
                      <div className="bg-orange-100 rounded-full p-2">
                        <MapPin className="w-5 h-5 text-orange-500" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{location.city}</h4>
                      <p className="text-orange-500 font-medium">{location.country}</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-gray-600">
                    <p className="flex items-center">
                      <Building className="w-4 h-4 mr-2 text-gray-400" />
                      {location.address}
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      {location.phone}
                    </p>
                    <Link href={`mailto:${location.email}`} className="flex items-center text-orange-500 hover:underline">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      {location.email}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-full shadow-md transition-all duration-300">
                Contact Us Today
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with a Truly Global Electrical Team?</h2>
              <p className="text-xl text-gray-300 mb-10">
                Let Richy Electricals bring our international expertise to your project, whether in the UK, Ghana, or anywhere around the world.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full shadow-md transition-all duration-300 w-full sm:w-auto">
                    Get a Free Quote
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/services" className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium py-3 px-8 rounded-full shadow-md transition-all duration-300 w-full sm:w-auto">
                    Explore Our Services
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}