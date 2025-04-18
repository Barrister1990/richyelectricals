import { motion } from 'framer-motion';
import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Music,
  Phone,
  Youtube
} from 'lucide-react';
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
            <h3 className="text-xl font-bold mb-6">Richy Electricals</h3>
            <p className="text-gray-400 mb-6">
              Professional electrical services throughout London, providing high-quality solutions for your home and business.
            </p>
            <div className="flex space-x-4">
              <a href="#facebook" className="bg-gray-800 hover:bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.tiktok.com/@richy_electric?_t=ZN-8vbqj7KYN4o&_r=1" className="bg-gray-800 hover:bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
              <Music size={18} />
  <span className="sr-only">TikTok</span>
</a>
              <a href="https://www.instagram.com/richyelectricalservices?igsh=Z2I5eXdoMWgwNHAw&utm_source=qr" className="bg-gray-800 hover:bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#linkedin" className="bg-gray-800 hover:bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#youtube" className="bg-gray-800 hover:bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Youtube size={18} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-orange-500 after:-bottom-2 after:left-0">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Projects', 'Testimonials', 'Contact'].map((link, index) => (
                <li key={index}>
                  <Link href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-orange-500 transition-colors flex items-center">
                    <span className="mr-2">›</span> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-orange-500 after:-bottom-2 after:left-0">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                'Fuse Board Upgrades', 
                'Electrical Inspections', 
                'New Installations', 
                'Fault Finding', 
                'Garden Lighting', 
                'Rewiring'
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    href={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="mr-2">›</span> {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-orange-500 after:-bottom-2 after:left-0">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                <span className="text-gray-400">
                115 Butts Road, Walsall<br /> West Midlands, WS4 2BL,<br />United Kingdom
                </span>
                 
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-orange-500 mr-3" />
                <a href="tel:+44123456789" className="text-gray-400 hover:text-orange-500 transition-colors">
                  +44 123 456 789
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-orange-500 mr-3" />
                <a href="mailto:info@richyelectricals.co.uk" className="text-gray-400 hover:text-orange-500 transition-colors">
                  info@richyelectricals.co.uk
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-orange-500 mr-3" />
                <span className="text-gray-400">Mon-Fri: 8AM - 7PM</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-orange-500 font-medium">24/7 Emergency Service Available</p>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Richy Electricals. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Cookies
              </Link>
            </div>
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