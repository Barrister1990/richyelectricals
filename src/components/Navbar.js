// components/Navbar.js
import { Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);

  // Handle scroll effect with debounce for performance
  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrolled(window.scrollY > 10);
      }, 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Get navbar height for proper mobile menu positioning
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, [scrolled]); // Re-measure when scroll state changes

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <>
      <div ref={navRef} className="fixed w-full z-50 transition-all duration-500">
        {/* Top Info Bar - now part of the fixed navbar */}
        <div className={`w-full transition-all duration-500 ${
          scrolled 
            ? 'bg-orange-50/95 py-1' 
            : 'bg-orange-50 py-2'
        }`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
            <div className="flex space-x-4">
              <Link 
                href="/faq" 
                className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300"
              >
                Frequently Asked Questions
              </Link>
              <a 
                href="https://ghana-richyelectricals.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300"
              >
                RichyElectricals Ghana
              </a>
            </div>
            <a 
              href="tel:+447491565676" 
              className="flex items-center text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300"
            >
              <Phone className="h-4 w-4 mr-2" /> + (44) 7491565676
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <nav 
          className={`w-full transition-all duration-500 backdrop-blur-md ${
            scrolled 
              ? 'bg-white/95 shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-2 border-b border-orange-100' 
              : 'bg-transparent py-4 border-b border-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex-shrink-0 group">
  <Link href="/" className="flex items-center">
    {/* Company Logo Container */}
    <div className={`relative h-12 w-12 rounded-xl overflow-hidden flex items-center justify-center mr-3 shadow-lg group-hover:shadow-orange-300/50 transition-all duration-300 transform group-hover:scale-105 ${
      scrolled ? 'bg-white' : 'bg-white/90'
    }`}>
      {/* Using the actual logo image */}
      <Image 
  src="/images/logo.jpg" 
  alt="RichyElectricals Logo" 
  layout="fill"
  objectFit="cover"
/>
    </div>
    <div className="flex flex-col">
      <span className={`text-lg font-bold transition-colors duration-300 ${scrolled ? 'text-orange-600' : 'text-orange-500'}`}>
        RichyElectricals
      </span>
      <span className="text-xs text-gray-500">Powering Your Future</span>
    </div>
  </Link>
</div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex md:items-center">
                <div className="ml-10 flex items-baseline space-x-1">
                  <NavLink href="/" text="Home" scrolled={scrolled} />
                  <NavLink href="/about" text="About Us" scrolled={scrolled} />
                  <NavLink href="/services" text="Services" scrolled={scrolled} />
                  <NavLink href="/gallery" text="Gallery" scrolled={scrolled} />
                  <Link 
                    href="/contact" 
                    className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-orange-300/50 transition-all duration-300 ml-3 transform hover:-translate-y-0.5 hover:scale-105"
                  >
                    <span className="relative z-10">Contact Us</span>
                    <span className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
                  </Link>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleMenu}
                  className={`relative inline-flex items-center justify-center p-2 rounded-full focus:outline-none transition-all duration-300 ${
                    scrolled 
                      ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50' 
                      : 'text-gray-700 hover:text-orange-500 hover:bg-white/30'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <Menu className="h-6 w-6" />
                  ) : (
                    <X className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu overlay - separated from the nav element */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-x-0 bottom-0 bg-white z-40 transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ top: navHeight ? `${navHeight}px` : '120px' }}
      >
        <div className="px-4 pt-6 pb-20 space-y-4 flex flex-col items-center max-h-[calc(100vh-120px)] overflow-y-auto">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-6 shadow-lg shadow-orange-300/30">
            <span className="text-white font-bold text-xl">RE</span>
          </div>
          
          <MobileNavLink href="/" text="Home" onClick={toggleMenu} />
          <MobileNavLink href="/about" text="About Us" onClick={toggleMenu} />
          <MobileNavLink href="/services" text="Services" onClick={toggleMenu} />
          <MobileNavLink href="/gallery" text="Gallery" onClick={toggleMenu} />
          <MobileNavLink href="/faq" text="FAQ" onClick={toggleMenu} />
          <a 
            href="https://ghana-richyelectricals.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full max-w-xs text-center text-gray-800 hover:text-orange-500 px-4 py-4 rounded-lg text-lg font-medium border-b border-gray-100 transition-all duration-300 hover:bg-orange-50"
            onClick={toggleMenu}
          >
            RichyElectricals Ghana
          </a>
          <Link 
            href="/contact" 
            className="w-full max-w-xs text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-3 rounded-full font-medium shadow-lg shadow-orange-300/20 transition-all duration-300 mt-6 hover:shadow-orange-300/40 transform hover:scale-105"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          <a 
            href="tel:+447491565676" 
            className="w-full max-w-xs text-center border border-orange-300 text-orange-600 px-5 py-3 rounded-full font-medium shadow-sm transition-all duration-300 mt-2 hover:bg-orange-50 flex items-center justify-center"
            onClick={toggleMenu}
          >
            <Phone className="h-4 w-4 mr-2" /> Call Us
          </a>
        </div>
      </div>
    </>
  );
};

// Desktop navigation link component
const NavLink = ({ href, text, scrolled }) => (
  <Link 
    href={href} 
    className={`relative px-4 py-2 rounded-full font-medium group transition-all duration-300 ${
      scrolled ? 'text-gray-800 hover:text-orange-600' : 'text-gray-700 hover:text-orange-500'
    }`}
  >
    {text}
    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-4/5 group-hover:left-1/10 transition-all duration-300"></span>
  </Link>
);

// Mobile navigation link component
const MobileNavLink = ({ href, text, onClick }) => (
  <Link 
    href={href} 
    className="w-full max-w-xs text-center text-gray-800 hover:text-orange-500 px-4 py-4 rounded-lg text-lg font-medium border-b border-gray-100 transition-all duration-300 hover:bg-orange-50"
    onClick={onClick}
  >
    {text}
  </Link>
);

export default Navbar;