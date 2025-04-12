import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, Filter, Play, X } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Gallery() {
  // State for filtering gallery items
  const [filter, setFilter] = useState('all');
  const [galleryItems, setGalleryItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  
  // State for modal
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Function to open modal with selected item
  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Function to close modal
  const closeModal = () => {
    setModalOpen(false);
    // Re-enable scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

  // Initialize gallery data
  useEffect(() => {
    const items = [
        {
          id: 1,
          title: "Commercial Generator Installation",
          location: "Birmingham Business Park, UK",
          media: "/galleryImg1.jpg",
          type: "image",
          category: "generator",
        },
        {
          id: 2,
          title: "Hospital Backup Power System",
          location: "Korle Bu Teaching Hospital, Accra, Ghana",
          media: "/galleryV1.mp4",
          type: "video",
          category: "generator",
        },
        {
          id: 3,
          title: "Industrial Electrical Upgrade",
          location: "Manufacturing Plant, Sheffield, UK",
          media: "/galleryImg2.jpg",
          type: "image",
          category: "electrical",
        },
        {
          id: 4,
          title: "Solar Power Integration",
          location: "Tech Campus, Kumasi, Ghana",
          media: "/galleryV2.mp4",
          type: "video",
          category: "renewable",
        },
        {
          id: 5,
          title: "Airport Emergency Systems",
          location: "International Airport, Dubai, UAE",
          media: "/galleryImg3.jpg",
          type: "image",
          category: "emergency",
        },
        {
          id: 6,
          title: "Hotel Power Management",
          location: "Resort Chain, Cape Coast, Ghana",
          media: "/galleryV3.mp4",
          type: "video",
          category: "hospitality",
        },
        {
          id: 7,
          title: "Data Center Power Infrastructure",
          location: "Manchester, UK",
          media: "/galleryImg4.jpg",
          type: "image",
          category: "datacenter",
        },
        {
          id: 8,
          title: "Residential Building Backup System",
          location: "Luxury Apartments, Canary Wharf, London",
          media: "/galleryImg5.jpg",
          type: "image",
          category: "residential",
        },
        {
          id: 9,
          title: "Mining Operation Power Solutions",
          location: "Tarkwa Gold Mine, Ghana",
          media: "/galleryV4.mp4",
          type: "video",
          category: "industrial",
        },
        {
          id: 10,
          title: "Office Tower Electrical Retrofit",
          location: "Financial District, London, UK",
          media: "/galleryImg6.jpg",
          type: "image",
          category: "commercial",
        },
        {
          id: 11,
          title: "Healthcare Clinic Generator Installation",
          location: "Medical Center, Tamale, Ghana",
          media: "/galleryImg7.jpg",
          type: "image",
          category: "healthcare",
        },
        {
          id: 12,
          title: "Shopping Mall Emergency Systems",
          location: "Westfield, London, UK",
          media: "/galleryV5.mp4",
          type: "video",
          category: "commercial",
        },
        {
          id: 13,
          title: "Offshore Wind Farm Electrical Systems",
          location: "North Sea, UK",
          media: "/galleryV6.mp4",
          type: "video",
          category: "renewable",
        },
        {
          id: 14,
          title: "University Campus Power Distribution",
          location: "Oxford University, UK",
          media: "/galleryV7.mp4",
          type: "video",
          category: "education",
        },
        {
          id: 15,
          title: "Hospital Critical Power Systems",
          location: "NHS Medical Center, Glasgow, UK",
          media: "/galleryImg8.jpg",
          type: "image",
          category: "healthcare",
        },
        {
          id: 16,
          title: "Telecom Infrastructure Backup",
          location: "Communication Hub, Accra, Ghana",
          media: "/galleryV8.mp4",
          type: "video",
          category: "telecom",
        },
        {
          id: 17,
          title: "Manufacturing Plant Energy Optimization",
          location: "Industrial Zone, Liverpool, UK",
          media: "/galleryV9.mp4",
          type: "video",
          category: "industrial",
        },
        {
          id: 18,
          title: "Government Building Power Retrofit",
          location: "Administrative Offices, Tema, Ghana",
          media: "/galleryV10.mp4",
          type: "video",
          category: "government",
        },
        {
          id: 19,
          title: "Banking Headquarters Generator System",
          location: "Financial District, London, UK",
          media: "/galleryImg9.jpg",
          type: "image",
          category: "commercial",
        },
        {
          id: 20,
          title: "School Emergency Power Solutions",
          location: "Public School System, Edinburgh, UK",
          media: "/galleryV11.mp4",
          type: "video",
          category: "education",
        },
        {
          id: 21,
          title: "Retail Chain Standardized Power Setup",
          location: "Multiple Locations, UK & Ghana",
          media: "/galleryV12.mp4",
          type: "video",
          category: "retail",
        },
        {
          id: 22,
          title: "Mixed-Use Development Electrical Systems",
          location: "Urban Renewal Project, Cardiff, UK",
          media: "/galleryImg10.jpg",
          type: "image",
          category: "residential",
        },
        {
          id: 23,
          title: "Sports Stadium Power Distribution",
          location: "National Stadium, Accra, Ghana",
          media: "/galleryV13.mp4",
          type: "video",
          category: "entertainment",
        },
        {
          id: 24,
          title: "Concert Venue Temporary Power Setup",
          location: "Festival Grounds, Leeds, UK",
          media: "/galleryV14.mp4",
          type: "video",
          category: "entertainment",
        },
        {
          id: 25,
          title: "Oil & Gas Facility Backup Systems",
          location: "Processing Plant, Aberdeen, UK",
          media: "/galleryV15.mp4",
          type: "video",
          category: "energy",
        },
        {
          id: 26,
          title: "Pharmaceutical Facility Critical Power",
          location: "Research Campus, Cambridge, UK",
          media: "/galleryImg11.jpg",
          type: "image",
          category: "healthcare",
        },
        {
          id: 27,
          title: "Smart Building Energy Management",
          location: "Tech Hub, London, UK",
          media: "/galleryV16.mp4",
          type: "video",
          category: "commercial",
        },
        {
          id: 28,
          title: "Backup Systems for Rural Clinics",
          location: "Various Villages, Northern Ghana",
          media: "/galleryV17.mp4",
          type: "video",
          category: "healthcare",
        },
        {
          id: 29,
          title: "Railway Station Power Infrastructure",
          location: "King's Cross, London, UK",
          media: "/galleryV18.mp4",
          type: "video",
          category: "transportation",
        },
        {
          id: 30,
          title: "Hotel Chain Standardized Backup System",
          location: "Multiple Locations, West Africa",
          media: "/galleryImg12.jpg",
          type: "image",
          category: "hospitality",
        },
        {
          id: 31,
          title: "Military Base Power Security",
          location: "Classified Location, UK",
          media: "/galleryV19.mp4",
          type: "video",
          category: "defense",
        },
        {
          id: 32,
          title: "Logistics Center Generator Installation",
          location: "Distribution Hub, Birmingham, UK",
          media: "/galleryV20.mp4",
          type: "video",
          category: "logistics",
        },
        {
          id: 33,
          title: "Microbrewery Power Optimization",
          location: "Craft District, Bristol, UK",
          media: "/galleryV21.mp4",
          type: "video",
          category: "food-beverage",
        },
        {
          id: 34,
          title: "Waste Management Facility Power Systems",
          location: "Recycling Center, Manchester, UK",
          media: "/galleryV22.mp4",
          type: "video",
          category: "environmental",
        },
        {
          id: 35,
          title: "High-Rise Residential Tower Backup",
          location: "Modern Development, Accra, Ghana",
          media: "/galleryImg13.jpg",
          type: "image",
          category: "residential",
        },
        {
          id: 36,
          title: "Agricultural Processing Plant Power",
          location: "Rural Cooperative, Central Ghana",
          media: "/galleryV23.mp4",
          type: "video",
          category: "agriculture",
        }
      ];

    setGalleryItems(items);
    setFilteredItems(items);
  }, []);

  // Filter projects when filter changes
  useEffect(() => {
    if (filter === 'all') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === filter));
    }
    // Reset to page 1 when filter changes
    setCurrentPage(1);
  }, [filter, galleryItems]);

  // Update pagination when filteredItems or currentPage changes
  useEffect(() => {
    // Calculate total pages
    const calculatedTotalPages = Math.ceil(filteredItems.length / itemsPerPage);
    setTotalPages(calculatedTotalPages);
    
    // Ensure currentPage is valid
    if (currentPage > calculatedTotalPages && calculatedTotalPages > 0) {
      setCurrentPage(calculatedTotalPages);
      return;
    }
    
    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setDisplayedItems(filteredItems.slice(indexOfFirstItem, indexOfLastItem));
    
    // Scroll to top when page changes (optional)
    window.scrollTo(0, 0);
  }, [filteredItems, currentPage, itemsPerPage]);

  // Handle page changes
  const paginate = (pageNumber) => {
    // Only change page if it's valid
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
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

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first page
      pageNumbers.push(1);
      
      // Calculate range around current page
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(currentPage + 1, totalPages - 1);
      
      // Adjust start and end to always show 3 pages
      if (currentPage <= 2) {
        endPage = 3;
      } else if (currentPage >= totalPages - 1) {
        startPage = totalPages - 2;
      }
      
      // Add ellipsis if needed
      if (startPage > 2) {
        pageNumbers.push('...');
      }
      
      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      // Add ellipsis if needed
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      // Always include last page
      if (totalPages > 1) {
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Our Gallery | Richy Electricals</title>
        <meta name="description" content="Explore our gallery of electrical engineering and generator installation projects across the UK, Ghana, and worldwide." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-80 md:h-96 flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10">
          <div className="absolute inset-0 bg-[url('/gallery-hero.jpg')] bg-cover bg-center opacity-70 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Our Gallery
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Showcasing our electrical engineering and generator projects across the UK, Ghana, and around the world.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
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
                <Link href="/" className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-3 px-8 rounded-full border border-white/30 transition-all duration-300">
                  <ChevronLeft className="mr-2 w-5 h-5" />
                  Back to Home
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center mb-8"
          >
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-900">Explore Our Gallery</h2>
              <p className="text-gray-600 mt-2">Filter by category to find specific types of projects</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full transition-all ${filter === 'all' ? 
                  'bg-orange-500 text-white' : 
                  'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                All Images
              </motion.button>
              {['generator', 'electrical', 'renewable', 'commercial', 'industrial', 'healthcare'].map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full transition-all ${filter === category ? 
                    'bg-orange-500 text-white' : 
                    'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all flex items-center"
              >
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50 animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index % 3 * 0.1 }}
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
                          poster="/api/placeholder/800/600"
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
                          <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                          </span>
                          <span className="text-gray-300 text-sm flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {item.date}
                          </span>
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
                      <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.location}</p>
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
          
          {/* Pagination */}
          {filteredItems.length > 0 && (
            <div className="flex justify-center mt-12">
              <div className="flex flex-wrap items-center gap-2">
                {/* Previous page button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  } transition-all`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                
                {/* Page numbers */}
                {getPageNumbers().map((page, index) => (
                  page === '...' ? (
                    <span key={`ellipsis-${index}`} className="mx-1 text-gray-500">...</span>
                  ) : (
                    <motion.button
                      key={`page-${page}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => paginate(page)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        page === currentPage 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {page}
                    </motion.button>
                  )
                ))}
                
                {/* Next page button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  } transition-all`}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          )}
          
          {/* No results */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="bg-gray-100 rounded-xl p-8 max-w-lg mx-auto">
                <div className="text-gray-400 mb-4">
                  <Filter className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No Images Found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any images matching your selected filter. Please try a different category.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter('all')}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300"
                >
                  View All Images
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Whether you need generator installation, electrical upgrades, or power solutions in the UK, Ghana, or internationally,
                our team of experts is ready to help.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
                    Request a Quote
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/services" className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-3 px-8 rounded-full border border-white/30 transition-all duration-300">
                    Explore Our Services
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
      onClick={closeModal}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80" />
      
      {/* Modal Content */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-xl shadow-2xl max-w-5xl w-full mx-auto overflow-hidden z-10"
      >
        {/* Close Button */}
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/40 rounded-full p-2 text-white transition-colors duration-300"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex flex-col md:flex-row">
          {/* Media Container - Improved responsive sizing */}
          <div className="w-full md:w-2/3 bg-gray-900 relative">
            {selectedItem.type === "image" ? (
              <div className="h-56 sm:h-72 md:h-96 lg:h-120 flex items-center justify-center">
                <img 
                  src={selectedItem.media} 
                  alt={selectedItem.title} 
                  className="max-w-full max-h-full object-contain px-4"
                />
              </div>
            ) : (
              <div className="h-56 sm:h-72 md:h-96 lg:h-120 flex items-center justify-center">
                <video 
                  src={selectedItem.media}
                  className="max-w-full max-h-full object-contain px-4" 
                  controls
                  autoPlay
                  preload="metadata"
                  poster="/api/placeholder/800/600"
                />
              </div>
            )}
          </div>
          
          {/* Item Info */}
          <div className="p-6 md:p-8 md:w-1/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedItem.title}</h3>
            <p className="text-gray-600 mb-4">{selectedItem.location}</p>
            <div className="flex items-center mb-6">
              <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">
                {selectedItem.category.charAt(0).toUpperCase() + selectedItem.category.slice(1)}
              </span>
            </div>
            <div className="border-t border-gray-200 pt-6 mt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Details</h4>
              <p className="text-gray-600 mb-4">
                This {selectedItem.category} project demonstrates our expertise in providing reliable power solutions tailored to specific client needs.
              </p>
              <div className="flex justify-between items-center mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-orange-500 font-medium hover:text-orange-600 flex items-center transition-colors"
                >
                  View Project Case Study
                  <ChevronRight className="w-4 h-4 ml-1" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}