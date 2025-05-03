import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Award, Calendar, ChevronRight, Clock,
  FileText,
  Home,
  Lightbulb, MapPin, Phone, Play, Power,
  Search,
  ShieldCheck, X, Zap
} from 'lucide-react';
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Seo from '../components/Seo';
export default function HomePage() {
  // For counting animation
  const [counting, setCounting] = useState(false);
  const [galleryItems, setGalleryItems] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);

    document.body.style.overflow = 'hidden';
  };

  // Function to close modal
  const closeModal = () => {
    setModalOpen(false);
    // Re-enable scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

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


  
    // Close modal when ESC key is pressed
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          closeModal();
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []);

    useEffect(() => {
      const items = [
        {
          id: 1,
          title: "Commercial Generator Installation",
          location: "Birmingham Business Park, UK",
          media: "/images/img1.jpeg",
          type: "image",
          category: "generator",
          description: "Installation of three 500kW standby generators for a major business park, providing backup power for critical operations.",
          date: "January 2024",
          client: "Birmingham Business Consortium"
        },
        {
          id: 2,
          title: "Hospital Backup Power System",
          location: "Korle Bu Teaching Hospital, Accra, Ghana",
          media: "/videos/v19a.mp4", 
          type: "video",
          category: "generator",
          description: "Design and installation of a comprehensive backup power solution for Ghana's premier teaching hospital, ensuring uninterrupted power for critical care units.",
          date: "November 2023",
          client: "Ghana Health Service"
        },
        {
          id: 3,
          title: "Industrial Electrical Upgrade",
          location: "Manufacturing Plant, Sheffield, UK",
          media: "/videos/v7.mp4",
          type: "video",
          category: "electrical",
          description: "Complete electrical infrastructure upgrade for a major manufacturing facility, improving efficiency and safety.",
          date: "March 2024",
          client: "Sheffield Manufacturing Ltd"
        },
        {
          id: 4,
          title: "Solar Power Integration",
          location: "Tech Campus, Kumasi, Ghana",
          media: "/videos/v4.mp4",
          type: "video",
          category: "renewable",
          description: "Installation of a hybrid solar system combined with existing generators to reduce fuel costs and carbon footprint for a large technology campus.",
          date: "August 2023",
          client: "Kumasi Tech Hub"
        },
        {
          id: 5,
          title: "Airport Emergency Systems",
          location: "International Airport, Dubai, UAE",
          media: "/images/img5.jpeg",
          type: "image",
          category: "emergency",
          description: "Implementation of emergency power systems for runway lighting and critical airport operations, meeting international aviation standards.",
          date: "December 2023",
          client: "Dubai Aviation Authority"
        },
        {
          id: 6,
          title: "Hotel Power Management",
          location: "Resort Chain, Cape Coast, Ghana",
          media: "/videos/v3.mp4",
          type: "video",
          category: "hospitality",
          description: "Development of an intelligent power management system for a luxury resort chain, balancing grid power, generators, and renewable sources.",
          date: "February 2024",
          client: "Coastal Resorts Group"
        },

      ];
  
      setGalleryItems(items);
    }, []);
  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
  
    const loadingToast = toast.loading("Sending your message...");
  
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      service: e.target.service.value,
      message: e.target.message.value,
      timestamp: new Date().toISOString(),
    };
  
    try {
      const response = await fetch('https://richyelectricals.vercel.app/api/home', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
  
      toast.dismiss(loadingToast);
      toast.success("Message sent successfully! We'll get back to you soon.");
  
      e.target.reset();
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Failed to send message. Please try again later.");
      console.error("Error sending message:", error);
    }
  };
  

  // Intersection Observer for animation triggers
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "stats") {
              setCounting(true);
            }
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Counter animation
  const Counter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!counting) return;

      let startTime;
      let animationFrame;

      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCount);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);

      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <>
     <Seo 
        title="Richy Electrical Services – Trusted Electricians in the UK" 
        description="Looking for reliable electricians in the UK? Richy Electrical Services provides expert electrical installations, repairs, and inspections for homes and businesses."
        canonical="https://richyelectricals.co.uk/"
      />
    <div className="min-h-screen relative">



           {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
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
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "easeInOut",
            }}
            style={{ top: "20%", left: "10%" }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"
            animate={{
              x: [0, -70, 100, 0],
              y: [0, 100, -50, 0],
              scale: [1, 0.8, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "easeInOut",
            }}
            style={{ bottom: "10%", right: "15%" }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="block">Premier Electrical Solutions</span>
              <span className="text-orange-500">in London</span>
            </h1>
            <p className="text-lg md:text-xl text-orange-400 mb-8">
              Specializing in fuse board upgrades, electrical inspections, and complete electrical installations for homes and businesses across London.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
                >
                  Get a Free Quote
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="tel:+447491565676"
                  className="inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-3 px-8 rounded-full border border-white/30 transition-all duration-300 items-center"
                >
                  Call Us Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scrolldown indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/80 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* London Location Section */}
      <section className="py-16 bg-gray-900 text-white animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <MapPin className="w-8 h-8 text-orange-500 mr-3" />
              <div>
                <h3 className="text-xl font-bold">London Headquarters</h3>
                <p className="text-gray-300">Serving all of London and surrounding areas</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Expert Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive electrical solutions delivered throughout London by our team of certified professionals.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Power className="w-10 h-10 text-orange-500" />,
                title: "Fuse Board Upgrades",
                description:
                  "Modern fuse board installations to improve safety and meet current electrical regulations in your London property.",
                link: "/services#fuse-board-upgrades",
              },
              {
                icon: <FileText className="w-10 h-10 text-orange-500" />,
                title: "Electrical Inspections",
                description:
                  "Thorough condition reports and periodic inspections to ensure your electrical systems are safe and compliant.",
                link: "/services#electrical-inspections",
              },
              {
                icon: <Home className="w-10 h-10 text-orange-500" />,
                title: "New Installations",
                description:
                  "Complete electrical system installations for new builds, renovations, and property developments in London.",
                link: "/services#new-installations",
              },
              {
                icon: <Search className="w-10 h-10 text-orange-500" />,
                title: "Fault Finding",
                description:
                  "Expert diagnosis and resolution of electrical faults, trips, and other electrical issues in your home or business.",
                link: "/services#fault-finding",
              },
              {
                icon: <Lightbulb className="w-10 h-10 text-orange-500" />,
                title: "Garden Lighting",
                description:
                  "Beautiful and functional outdoor lighting solutions for gardens, pathways, and exterior spaces in London properties.",
                link: "/services#garden-lighting",
              },
              {
                icon: <Zap className="w-10 h-10 text-orange-500" />,
                title: "Rewiring Services",
                description:
                  "Partial or full property rewiring with minimal disruption, upgrading old or dangerous wiring systems.",
                link: "/services#rewiring",
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-orange-500" />,
                title: "Renewable Energy",
                description:
                  "Installation of eco-friendly electrical systems including solar panels and EV charging points for London residents.",
                link: "/services#renewable-energy",
              },
              {
                icon: <Clock className="w-10 h-10 text-orange-500" />,
                title: "Emergency Call-outs",
                description:
                  "24/7 emergency electrical assistance with rapid response throughout London when you need it most.",
                link: "/services#emergency",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300"
              >
                <div className="rounded-full bg-orange-100 w-16 h-16 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
                >
                  Learn more <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
                <Image
  src="/atwork.jpg" // The image source
  alt="Richy Electricals engineers at work" // Alt text for the image
  className="w-full h-full object-cover" // Tailwind CSS classes for styling
  width={1200} // Specify the width of the image
  height={800} // Specify the height of the image
  style={{ objectFit: 'cover' }}
/>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 z-20">
                <div className="flex items-center">
                  <div className="bg-orange-500 rounded-full p-2 mr-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Serving</p>
                    <p className="font-bold text-gray-900">All London Areas</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                London&#39;s Trusted Electrical Experts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of experience across London, Richy Electricals has built a reputation for excellence,
                reliability, and exceptional service throughout the capital.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of certified electrical engineers specializes in complete electrical solutions,
                providing high-quality services tailored to UK standards and regulations.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Headquarters in Central London serving all boroughs",
                  "Team of certified electrical engineers",
                  "Residential and commercial projects throughout London",
                  "Equipment sourced from trusted British suppliers",
                  "Comprehensive warranties on all work and products",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-full shadow-md transition-all duration-300"
                >
                  About Our Company
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="stats"
        className="py-16 bg-orange-600 text-white animate-on-scroll"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 15, suffix: "+", label: "Years Experience" },
              { value: 2000, suffix: "+", label: "London Projects Completed" },
              { value: 32, suffix: "+", label: "London Boroughs Served" },
              { value: 98, suffix: "%", label: "Customer Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-orange-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="relative p-12 md:p-16">
              {/* Background animated elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500 opacity-10 rounded-full"></div>
                <div className="absolute right-20 bottom-10 w-64 h-64 bg-orange-500 opacity-5 rounded-full"></div>
                <div className="absolute left-10 bottom-0 w-40 h-40 bg-blue-500 opacity-5 rounded-full"></div>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-8 md:mb-0 md:mr-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready for Electrical Solutions?
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 md:mb-0 max-w-xl">
                    Contact our London office today for a free consultation and
                    quote. Our team of experts is ready to help with all
                    your electrical needs.
                  </p>
                </div>

                <div className="flex flex-col space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 w-full"
                    >
                      Get a Free Quote
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="tel:+44123456789"
                      className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium py-3 px-8 rounded-full transition-all duration-300 w-full"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Us: +44 749 1565676
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-16 border-t border-gray-200">
  <div className="container mx-auto px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-3">
        Our Certifications
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Fully certified and compliant with all UK electrical standards to ensure the highest quality and safety in every project
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="bg-blue-600 h-2"></div>
        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-center text-gray-800 mb-2">EAL Level 3 Diploma</h3>
          <p className="text-gray-600 text-center">Electrical Installation (600/9331/6)</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="bg-green-600 h-2"></div>
        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-center text-gray-800 mb-2">City & Guilds 2391-50</h3>
          <p className="text-gray-600 text-center">Initial Verification of Electrical Installations</p>
        </div>
      </div>
      
   
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="bg-purple-600 h-2"></div>
        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-center text-gray-800 mb-2">City & Guilds 2391-51</h3>
          <p className="text-gray-600 text-center">Periodic Inspection & Testing of Electrical Installations</p>
        </div>
      </div>
      
  
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="bg-red-600 h-2"></div>
        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-center text-gray-800 mb-2">Building Regulations</h3>
          <p className="text-gray-600 text-center">Part P (2393 – 10)</p>
        </div>
      </div>
      

      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="bg-yellow-600 h-2"></div>
        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-center text-gray-800 mb-2">EAL Level 3 Award</h3>
          <p className="text-gray-600 text-center">Requirements for the Installation of Electric Vehicle Charging Points</p>
        </div>
      </div>
      
   
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="bg-teal-600 h-2"></div>
        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-center text-gray-800 mb-2">BPEC Certification</h3>
          <p className="text-gray-600 text-center">Solar PV Installer (Level 3) & Electricity Energy Storage Systems</p>
        </div>
      </div>
    </div>
    
    <div className="mt-12 text-center">
      <p className="text-gray-500 italic">Our team maintains up-to-date qualifications to provide you with the highest standard of electrical services</p>
    </div>
  </div>
</section>

{/* Gallery Grid */}
<section className="py-12 bg-gray-50 animate-on-scroll gallery-section">
  <div className="container mx-auto px-6 lg:px-8">
    {/* Caption from earlier */}
    <div className="text-center mb-10">
      <span className="text-orange-500 font-medium tracking-wider uppercase text-sm">Explore Our Collection</span>
      <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Moments Captured in Time</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Browse through our carefully curated gallery of stunning visuals from around the world. 
        Each piece tells a unique story, bringing you closer to the beauty and diversity of our experiences.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {galleryItems.slice(0, 6).map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index % 6 * 0.1 }}
          className="group"
        >
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            <div className="relative h-64 overflow-hidden">
              {item.type === "image" ? (
                <img 
                  src={item.media} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full relative">
                  <video 
                    src={item.media}
                    className="w-full h-full object-cover" 
                    controls
                    poster="/watch.jpeg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                    <div className="bg-black/30 p-4 rounded-full">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <div className="flex items-center justify-between mb-2">
                  
                  
                  </div>
                 
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openModal(item)}
                    className="bg-white/20 hover:bg-white/30 text-white text-sm px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300"
                  >
                    View Full Size
                  </motion.button>
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="flex items-center justify-between mb-3">
                
                <span className="text-gray-500 text-sm flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {item.date}
                </span>
              </div>
              <div className="mt-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal(item)}
                  className="text-orange-500 font-medium hover:text-orange-600 flex items-center transition-colors"
                >
                  View Full Size
                  <ChevronRight className="w-4 h-4 ml-1" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    

      <div className="text-center mt-12">
        <motion.a
          href="/gallery"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300"
        >
          View All Gallery
          <ArrowRight className="w-5 h-5 ml-2" />
        </motion.a>
      </div>
    
  </div>
</section>

      {/* FAQ Section */}
      <section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our electrical services in London
              </p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Do you serve all London areas?",
                answer:
                  "Yes, we offer our electrical services throughout all London boroughs and some surrounding areas. Our central London headquarters allows us to respond quickly to clients across the capital.",
              },
              {
                question: "How often should I have an electrical inspection?",
                answer:
                  "For homeowners, we recommend an Electrical Installation Condition Report (EICR) every 10 years. For rental properties, UK regulations require an EICR every 5 years. Commercial properties should have inspections more frequently, typically every 3-5 years depending on the type of business.",
              },
              {
                question: "What does a fuse board upgrade involve?",
                answer:
                  "A fuse board upgrade involves replacing your old fuse box with a modern consumer unit that includes residual current devices (RCDs) and miniature circuit breakers (MCBs) for improved safety. The process typically takes a day to complete and will bring your electrical system up to current UK standards.",
              },
              {
                question: "Do you offer emergency electrical services?",
                answer:
                  "Yes, we provide 24/7 emergency electrical services throughout London. For electrical emergencies, our technicians aim to respond within 1-2 hours to address potentially dangerous situations quickly and safely.",
              },
              {
                question: "Are your electricians qualified and certified?",
                answer:
                  "All our electricians are fully qualified, certified, and registered with relevant UK electrical governing bodies. They regularly undergo training to stay updated with the latest regulations and safety standards, ensuring all work is compliant with British Standards.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                <details className="group rounded-lg bg-white p-6 shadow-md [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </h3>
                    <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                </details>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/faq"
                className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
              >
                View all FAQs <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


<section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get In Touch With Us
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our services or ready to schedule a
                consultation? Our London team is here to help with all your
                electrical needs.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Our Location
                    </h3>
                    <p className="text-gray-600">
                    115 Butts Road, Walsall, West Midlands, WS4 2BL, United Kingdom
                    </p>
                    <p className="text-gray-600">
                    88 Canalside, Redhill, Surrey, RH1 2NH, London, United Kingdom
                    </p>
                    
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Phone Number
                    </h3>
                    <p className="text-gray-600">
                      <a href="tel:+44123456789" className="hover:text-orange-500 transition-colors">
                        +44 7491 565676
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Email Address
                    </h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@richyelectricals.co.uk" className="hover:text-orange-500 transition-colors">
                        info@richyelectricals.co.uk
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-full shadow-md transition-all duration-300"
                >
                  Contact Us
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-xl shadow-xl p-6 md:p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us A Message
              </h3>

              <form className="space-y-4" onSubmit={handleContactFormSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="+44 123 456 789"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Required
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="fuse-board">Fuse Board Upgrade</option>
                    <option value="inspection">Electrical Inspection</option>
                    <option value="installation">New Installation</option>
                    <option value="fault">Fault Finding</option>
                    <option value="garden">Garden Lighting</option>
                    <option value="rewiring">Rewiring</option>
                    <option value="renewable">Renewable Energy</option>
                    <option value="emergency">Emergency Call-out</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Tell us about your electrical requirements..."
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-lg shadow-md transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
              
              {/* Toast container - needed for the notifications to appear */}
              <Toaster position="bottom-center" />
            </motion.div>
          </div>
        </div>
      </section>
    

  
      {/* Full Size Modal */}
      <AnimatePresence>
  {modalOpen && selectedItem && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      onClick={closeModal}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80" />
      
      {/* Modal Content - Video Only */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-full max-h-full w-auto h-auto z-10"
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 z-20 bg-black/20 hover:bg-black/40 rounded-full p-2 text-white transition-colors duration-300"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* Media - Only Show Video/Image */}
        {selectedItem.type === "image" ? (
          <img
            src={selectedItem.media}
            alt=""
            className="max-w-full max-h-screen object-contain"
          />
        ) : (
          <video
            src={selectedItem.media}
            className="max-w-full max-h-screen object-contain"
            controls
            autoPlay
          />
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
    </>
  );
}