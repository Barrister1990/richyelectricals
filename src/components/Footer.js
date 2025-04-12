import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white w-full">
      {/* Top wave decoration */}
      <div className="w-full overflow-hidden leading-none">
        <svg className="w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            className="fill-gray-50"
          ></path>
        </svg>
      </div>
      
      {/* Pre-footer Call to Action */}
      <div className="container mx-auto px-6 lg:px-8 -mt-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 sm:p-10 shadow-xl mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Need Electrical Services?</h3>
              <p className="text-orange-100">Get a free quote today and experience our expert service.</p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="inline-block bg-white text-orange-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-300">
                Contact Us Now
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-8 pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-1">Richy Electricals</h2>
              <p className="text-gray-400">Your Premier Electrical Engineering Company</p>
            </div>
            <p className="text-gray-400 mb-6">
              Specializing in generator repairs, sales, and comprehensive electrical services across the United Kingdom.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-800 hover:bg-orange-600 rounded-full p-2 transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-600 rounded-full p-2 transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-600 rounded-full p-2 transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-600 rounded-full p-2 transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-600 rounded-full p-2 transition-colors" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-orange-500 after:-bottom-2 after:left-0">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { text: 'Home', href: '/' },
                { text: 'About Us', href: '/about' },
                { text: 'Our Services', href: '/services' },
                { text: 'Gallery', href: '/portfolio' },
                { text: 'Blog & News', href: '/blog' },
                { text: 'Contact Us', href: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-orange-500 transition-colors flex items-center">
                    <span className="mr-2">›</span> {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-orange-500 after:-bottom-2 after:left-0">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                { text: 'Generator Repairs', href: '/services#generator-repairs' },
                { text: 'Generator Sales', href: '/services#generator-sales' },
                { text: 'Electrical Installations', href: '/services#installations' },
                { text: 'Maintenance Services', href: '/services#maintenance' },
                { text: 'Safety Inspections', href: '/services#safety' },
                { text: 'Emergency Call-outs', href: '/services#emergency' }
              ].map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-gray-400 hover:text-orange-500 transition-colors flex items-center">
                    <span className="mr-2">›</span> {service.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-orange-500 after:-bottom-2 after:left-0">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-orange-500 mr-3 mt-1" />
                <span className="text-gray-400">
                  123 Electric Avenue, London, UK, EC1A 1BB
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-orange-500 mr-3" />
                <a href="tel:+44123456789" className="text-gray-400 hover:text-orange-500 transition-colors">
                  +44 123 456 789
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-orange-500 mr-3" />
                <a href="mailto:info@richyelectricals.co.uk" className="text-gray-400 hover:text-orange-500 transition-colors">
                  info@richyelectricals.co.uk
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-2">Working Hours</h4>
              <p className="text-gray-400">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-orange-500 font-medium">24/7 Emergency Service Available</p>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <hr className="border-gray-800 my-10" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-gray-500">
              © {currentYear} Richy Electricals. All Rights Reserved.
            </p>
          </div>
          <div className="flex space-x-4 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-orange-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-orange-500 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <ScrollToTopButton />
    </footer>
  );
}

// Scroll to top button component
function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 shadow-lg transition-colors"
        aria-label="Scroll to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </motion.button>
    </div>
  );
}