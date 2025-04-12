// pages/contact.js
import { motion } from 'framer-motion';
import { AlertCircle, ChevronRight, Globe, Mail, MapPin, Phone } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Contact() {
  // Intersection Observer for animation triggers
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

  return (
    <div className="min-h-screen">
      <Head>
        <title>Contact Us | Richy Electricals</title>
        <meta name="description" content="Get in touch with Richy Electricals for expert electrical services, generator repairs and installation worldwide. Headquarters in UK and Ghana." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header/Hero Section */}
      <section className="relative w-full h-64 md:h-80 flex items-center overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10">
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-70 mix-blend-overlay"></div>
        </div>

        {/* Animated geometric shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="absolute w-64 h-64 rounded-full bg-orange-500/10 blur-3xl"
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
            className="absolute w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"
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

        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Contact <span className="text-orange-500">Richy Electricals</span>
            </h1>
            <p className="text-lg text-gray-200">
              Get in touch with our global team of experts for all your electrical needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <ChevronRight className="mx-2 w-4 h-4" />
            <span className="text-gray-900 font-medium">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="py-16 md:py-20 animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our services? Need a quote for your electrical project? 
                Our team is ready to assist you from our offices in the UK and Ghana, with service capabilities worldwide.
              </p>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-3 mr-4">
                    <Globe className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Global Operations</h3>
                    <p className="text-gray-600">Proudly headquartered in UK and Ghana, with service capabilities worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-3 mr-4">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">UK Headquarters</h3>
                    <p className="text-gray-600">123 Electric Avenue, London, UK, EC1A 1BB</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-3 mr-4">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Ghana Headquarters</h3>
                    <p className="text-gray-600">45 Independence Road, Accra, Ghana</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-3 mr-4">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">UK: +44 123 456 789</p>
                    <p className="text-gray-600">Ghana: +233 24 123 4567</p>
                    <p className="text-gray-600">International: +44 123 456 999</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-3 mr-4">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">General: info@richyelectricals.com</p>
                    <p className="text-gray-600">Support: support@richyelectricals.com</p>
                    <p className="text-gray-600">International Projects: global@richyelectricals.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Working Hours</h3>
                    <p className="text-gray-600">UK & Ghana Offices:</p>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM (Local Time)</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM (Local Time)</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                    <p className="text-orange-600 font-medium mt-1">24/7 Emergency Service Available Worldwide</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-200 hover:bg-orange-100 rounded-full p-3 transition-colors">
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-200 hover:bg-orange-100 rounded-full p-3 transition-colors">
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-200 hover:bg-orange-100 rounded-full p-3 transition-colors">
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-200 hover:bg-orange-100 rounded-full p-3 transition-colors">
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                      <input 
                        type="text" 
                        id="first_name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                      <input 
                        type="text" 
                        id="last_name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                        placeholder="Smith"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                        placeholder="Your phone number with country code"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                      placeholder="Your Company (Optional)"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country*</label>
                    <input 
                      type="text" 
                      id="country" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                      placeholder="Your Country"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Required*</label>
                    <select 
                      id="service" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="generator-repair">Generator Repair</option>
                      <option value="generator-sales">Generator Sales</option>
                      <option value="electrical-installations">Electrical Installations</option>
                      <option value="maintenance">Maintenance Services</option>
                      <option value="safety">Safety Inspections</option>
                      <option value="international">International Projects</option>
                      <option value="emergency">Emergency Call-out</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                      placeholder="Please provide details about your requirements..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <input 
                      id="privacy" 
                      type="checkbox" 
                      className="h-5 w-5 mt-1 text-orange-500 border-gray-300 rounded focus:ring-orange-500" 
                      required
                    />
                    <label htmlFor="privacy" className="ml-3 text-sm text-gray-600">
                      I agree to the <Link href="/privacy-policy" className="text-orange-500 hover:underline">Privacy Policy</Link> and consent to my data being processed.
                    </label>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-300"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50 animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Global Presence</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                With headquarters in the UK and Ghana, we provide services worldwide through our network of partners and technicians.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white p-4 rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Replace this with an actual map integration */}
            <div className="aspect-video relative bg-gray-300 rounded-xl overflow-hidden">
              <img 
                src="/api/placeholder/1200/600" 
                alt="Map showing Richy Electricals presence in the UK, Ghana, and worldwide operations" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6 py-4 bg-white/80 backdrop-blur-sm rounded-lg max-w-md">
                  <p className="font-medium text-gray-900">Global Operations Map</p>
                  <p className="text-sm text-gray-600">UK & Ghana Headquarters with Worldwide Service Capabilities</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Global Service Areas</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Richy Electricals provides electrical engineering services to residential and commercial 
                clients across the globe, with primary operations in:
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                region: "United Kingdom",
                cities: ["London", "Manchester", "Birmingham", "Edinburgh", "Glasgow"]
              },
              {
                region: "Ghana",
                cities: ["Accra", "Kumasi", "Takoradi", "Tamale", "Cape Coast"]
              },
              {
                region: "West Africa",
                cities: ["Lagos, Nigeria", "Dakar, Senegal", "Abidjan, Ivory Coast", "Lomé, Togo", "Monrovia, Liberia"]
              },
              {
                region: "East Africa",
                cities: ["Nairobi, Kenya", "Dar es Salaam, Tanzania", "Kampala, Uganda", "Addis Ababa, Ethiopia", "Kigali, Rwanda"]
              },
              {
                region: "Europe",
                cities: ["Paris, France", "Berlin, Germany", "Madrid, Spain", "Rome, Italy", "Amsterdam, Netherlands"]
              },
              {
                region: "Middle East",
                cities: ["Dubai, UAE", "Doha, Qatar", "Riyadh, Saudi Arabia", "Kuwait City, Kuwait", "Muscat, Oman"]
              },
              {
                region: "Asia",
                cities: ["Singapore", "Kuala Lumpur, Malaysia", "Bangkok, Thailand", "Hong Kong", "Tokyo, Japan"]
              },
              {
                region: "Americas",
                cities: ["New York, USA", "Toronto, Canada", "Mexico City, Mexico", "São Paulo, Brazil", "Buenos Aires, Argentina"]
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.region}</h3>
                <ul className="space-y-2">
                  {area.cities.map((city, cityIndex) => (
                    <li key={cityIndex} className="text-gray-600 flex items-center">
                      <svg className="w-4 h-4 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {city}
                    </li>
                  ))}
                
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-12 bg-orange-500 animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div className="flex items-center mb-6 md:mb-0">
              <div className="bg-white/20 rounded-full p-3 mr-4">
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">24/7 Emergency Service</h2>
                <p className="text-white/90">Available worldwide for urgent electrical needs</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+441234567890" className="bg-white text-orange-600 font-medium px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>UK: +44 123 456 789</span>
              </a>
              <a href="tel:+233241234567" className="bg-white text-orange-600 font-medium px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>Ghana: +233 24 123 4567</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our services and operations
              </p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What areas do you service?",
                answer: "Richy Electricals provides electrical services worldwide, with primary operations in the UK, Ghana, and across Africa. Our team of experts can travel to any location globally for major projects and our network of partners ensures consistent quality service wherever you are."
              },
              {
                question: "Do you offer emergency services?",
                answer: "Yes, we provide 24/7 emergency electrical services worldwide. Our dedicated emergency response team is available round-the-clock to address urgent electrical issues, generator breakdowns, and power emergencies."
              },
              {
                question: "How do I request a quote for a project?",
                answer: "You can request a quote by filling out our contact form on this page, calling our offices directly, or sending an email to info@richyelectricals.com with details of your project. Our team will get back to you within 24 hours with a detailed quotation."
              },
              {
                question: "Do you handle international projects?",
                answer: "Absolutely! We specialize in international electrical engineering projects. Our global team has experience working across different continents and complying with various international electrical standards and regulations."
              },
              {
                question: "What types of generators do you service and install?",
                answer: "We service, repair, and install all major brands and types of generators including diesel, gas, portable, standby, industrial, and commercial generators. Our technicians are certified and experienced with leading brands such as Caterpillar, Cummins, Honda, Generac, and more."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer">
                      <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                      <span className="text-orange-500 group-open:rotate-180 transition-transform duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/faq" 
              className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
            >
              View all FAQs
              <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Work with Us?</h2>
            <p className="text-xl text-gray-300 mb-8">
              From generator installations to comprehensive electrical solutions, our team of experts is ready to handle your project with professionalism and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact-form" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-lg shadow-md transition-all duration-300"
              >
                Get a Free Quote
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/services" 
                className="bg-transparent border-2 border-white text-white font-medium px-8 py-4 rounded-lg shadow-md hover:bg-white/10 transition-all duration-300"
              >
                Explore Our Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}