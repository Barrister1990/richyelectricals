import Seo from '@/components/Seo';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, Filter, Play, X } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Gallery() {

  // State for filtering gallery items
  const [filter, setFilter] = useState('all');
  const [galleryItems, setGalleryItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [paginatedItems, setPaginatedItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  

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

  // Initialize gallery data
  useEffect(() => {
    const items = [
      {
        id: 1,
        title: "Commercial Generator Installation",
        location: "Birmingham Business Park, UK",
        media: "images/img1.jpeg",
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
        media: "videos/v1.mp4", 
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
        media: "images/img2.jpeg",
        type: "image",
        category: "electrical",
        description: "Complete electrical infrastructure upgrade for a major manufacturing facility, improving efficiency and safety.",
        date: "March 2024",
        client: "Sheffield Manufacturing Ltd"
      },
      {
        id: 4,
        title: "Solar Power Integration",
        location: "Tech Campus, Kumasi, Ghana",
        media: "videos/v2.mp4",
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
        media: "images/img3.jpeg",
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
        media: "videos/v3.mp4",
        type: "video",
        category: "hospitality",
        description: "Development of an intelligent power management system for a luxury resort chain, balancing grid power, generators, and renewable sources.",
        date: "February 2024",
        client: "Coastal Resorts Group"
      },
      {
        id: 7,
        title: "Data Center Power Infrastructure",
        location: "Manchester, UK",
        media: "images/img4.jpeg",
        type: "image",
        category: "datacenter",
        description: "Design and implementation of N+1 redundant power systems for a tier 3 data center, including generator arrays and UPS systems.",
        date: "October 2023",
        client: "Northern Cloud Solutions"
      },
      {
        id: 8,
        title: "Residential Building Backup System",
        location: "Luxury Apartments, Canary Wharf, London",
        media: "images/img5.jpeg",
        type: "image",
        category: "residential",
        description: "Installation of seamless backup power systems for high-end residential complex, providing uninterrupted power during outages.",
        date: "April 2024",
        client: "Canary Developments Ltd"
      },
      {
        id: 9,
        title: "Mining Operation Power Solutions",
        location: "Tarkwa Gold Mine, Ghana",
        media: "videos/v4.mp4",
        type: "video",
        category: "industrial",
        description: "Provision of multi-megawatt power solutions for gold mining operations, including primary and backup systems.",
        date: "September 2023",
        client: "Tarkwa Mining Corporation"
      },
      {
        id: 10,
        title: "Office Tower Electrical Retrofit",
        location: "Financial District, London, UK",
        media: "images/img6.jpeg",
        type: "image",
        category: "commercial",
        description: "Complete electrical retrofit of a 30-floor office tower, upgrading to smart systems while maintaining operations.",
        date: "January 2024",
        client: "City Properties Group"
      },
      {
        id: 11,
        title: "Healthcare Clinic Generator Installation",
        location: "Medical Center, Tamale, Ghana",
        media: "images/img7.jpeg",
        type: "image",
        category: "healthcare",
        description: "Installation of efficient generator systems for a rural healthcare clinic, ensuring reliable power for medical equipment.",
        date: "May 2023",
        client: "Northern Ghana Health Initiative"
      },
      {
        id: 12,
        title: "Shopping Mall Emergency Systems",
        location: "Westfield, London, UK",
        media: "videos/v5.mp4",
        type: "video",
        category: "commercial",
        description: "Upgrade of emergency lighting and power systems for one of London's largest shopping centers, improving safety and compliance.",
        date: "November 2023",
        client: "Westfield Management"
      },
      {
        id: 13,
        title: "University Campus Power Solution",
        location: "Oxford University, UK",
        media: "images/img8.jpeg",
        type: "image",
        category: "educational",
        description: "Comprehensive power solution for multiple university buildings, combining backup generators with smart load management.",
        date: "February 2024",
        client: "Oxford University Estates"
      },
      {
        id: 14,
        title: "Oil Refinery Emergency Systems",
        location: "Tema, Ghana",
        media: "videos/v6.mp4",
        type: "video",
        category: "industrial",
        description: "Installation of critical emergency power systems for oil refinery safety operations, meeting international safety standards.",
        date: "December 2023",
        client: "Tema Petroleum Authority"
      },
      {
        id: 15,
        title: "Stadium Lighting Backup",
        location: "Wembley Stadium, London, UK",
        media: "images/img9.jpeg",
        type: "image",
        category: "sports",
        description: "Implementation of instant-response backup power for stadium lighting systems, ensuring uninterrupted sporting events.",
        date: "April 2024",
        client: "Wembley Stadium Management"
      },
      {
        id: 16,
        title: "Telecommunication Tower Power",
        location: "Northern Regions, Ghana",
        media: "videos/v7.mp4",
        type: "video",
        category: "telecommunications",
        description: "Provision of reliable power solutions for remote telecommunication towers using hybrid generator and solar systems.",
        date: "July 2023",
        client: "Ghana Telecom Authority"
      },
      {
        id: 17,
        title: "Banking Headquarters Backup System",
        location: "City of London, UK",
        media: "images/img10.jpeg",
        type: "image",
        category: "financial",
        description: "Installation of enterprise-grade backup power systems for a major banking headquarters, ensuring business continuity.",
        date: "March 2024",
        client: "Global Banking Group"
      },
      {
        id: 18,
        title: "Rural Electrification Project",
        location: "Eastern Region, Ghana",
        media: "videos/v8.mp4",
        type: "video",
        category: "community",
        description: "Implementation of microgrid systems with generator backup for previously unelectrified rural communities.",
        date: "October 2023",
        client: "Ghana Rural Electrification Agency"
      },
      {
        id: 19,
        title: "Railway Station Power Upgrade",
        location: "King's Cross Station, London, UK",
        media: "images/img11.jpeg",
        type: "image",
        category: "transportation",
        description: "Modernization of power distribution systems for one of London's busiest railway stations while maintaining services.",
        date: "January 2024",
        client: "Network Rail UK"
      },
      {
        id: 20,
        title: "Convention Center Power Solution",
        location: "Accra International Conference Center, Ghana",
        media: "videos/v9a.mp4",
        type: "video",
        category: "events",
        description: "Design and implementation of a failsafe power system for international conferences and high-profile events.",
        date: "May 2023",
        client: "Ghana Convention Bureau"
      },
      {
        id: 21,
        title: "Military Base Power Infrastructure",
        location: "Classified Location, UK",
        media: "images/img12.jpeg",
        type: "image",
        category: "defense",
        description: "Installation of high-security power systems with multiple redundancies for critical defense operations.",
        date: "November 2023",
        client: "UK Ministry of Defence"
      },
      {
        id: 22,
        title: "Water Treatment Facility Backup",
        location: "Thames Water Treatment Plant, UK",
        media: "videos/v10.mp4",
        type: "video",
        category: "utilities",
        description: "Implementation of backup power systems for critical water treatment operations, ensuring continuous clean water supply.",
        date: "February 2024",
        client: "Thames Water Authority"
      },
      {
        id: 23,
        title: "Port Facility Power Systems",
        location: "Tema Harbor, Ghana",
        media: "images/img13.jpeg",
        type: "image",
        category: "maritime",
        description: "Upgrade of power infrastructure for port operations, including loading equipment and cold storage facilities.",
        date: "August 2023",
        client: "Ghana Ports Authority"
      },
      {
        id: 24,
        title: "School District Generator Network",
        location: "Greater Manchester, UK",
        media: "videos/v11.mp4",
        type: "video",
        category: "education",
        description: "Centralized management system for backup generators across multiple school campuses, improving reliability and reducing costs.",
        date: "March 2024",
        client: "Manchester Education Authority"
      },
      {
        id: 25,
        title: "Agricultural Processing Plant Power",
        location: "Ashanti Region, Ghana",
        media: "images/img14.jpeg",
        type: "image",
        category: "agriculture",
        description: "Custom power solution for agricultural processing facilities, ensuring continuous operation during harvesting seasons.",
        date: "September 2023",
        client: "Ghana Agricultural Cooperative"
      },
      {
        id: 26,
        title: "Broadcasting Station Backup",
        location: "BBC Studios, London, UK",
        media: "videos/v12.mp4",
        type: "video",
        category: "media",
        description: "Implementation of instant-switchover backup systems for critical broadcasting infrastructure with zero downtime.",
        date: "April 2024",
        client: "British Broadcasting Corporation"
      },
      {
        id: 27,
        title: "Government Building Power Security",
        location: "Accra, Ghana",
        media: "images/img15.jpeg",
        type: "image",
        category: "government",
        description: "Comprehensive power security system for government buildings, including generators and uninterruptible power supplies.",
        date: "December 2023",
        client: "Ghana Government Services"
      },
      {
        id: 28,
        title: "Research Laboratory Power Solution",
        location: "Cambridge University, UK",
        media: "videos/v13.mp4",
        type: "video",
        category: "research",
        description: "Specialized power systems for sensitive research equipment, ensuring clean power and continuous operation.",
        date: "January 2024",
        client: "Cambridge Research Facilities"
      },
      {
        id: 29,
        title: "Museum Climate Control Backup",
        location: "British Museum, London, UK",
        media: "images/img16.jpeg",
        type: "image",
        category: "cultural",
        description: "Backup power solutions for critical climate control systems protecting priceless artifacts and exhibitions.",
        date: "July 2023",
        client: "British Museum Trust"
      },
      {
        id: 30,
        title: "Public Transit Power Infrastructure",
        location: "Transport for London, UK",
        media: "videos/v14.mp4",
        type: "video",
        category: "transportation",
        description: "Power management solutions for London's public transportation network, ensuring service continuity during outages.",
        date: "October 2023",
        client: "Transport for London"
      },
      {
        id: 31,
        title: "Eco-Friendly Hotel Power Solution",
        location: "Luxury Resort, Cape Coast, Ghana",
        media: "images/img17.jpeg",
        type: "image",
        category: "hospitality",
        description: "Hybrid power system combining solar, battery storage, and efficient generators for an eco-conscious luxury resort.",
        date: "May 2023",
        client: "Sustainable Hospitality Group"
      },
      {
        id: 32,
        title: "Pharmaceutical Manufacturing Backup",
        location: "AstraZeneca Facility, UK",
        media: "videos/v15.mp4",
        type: "video",
        category: "pharmaceutical",
        description: "Critical power backup systems for pharmaceutical manufacturing, ensuring product integrity and continuous production.",
        date: "February 2024",
        client: "AstraZeneca UK"
      },
      {
        id: 33,
        title: "Sports Complex Power Upgrade",
        location: "National Sports Stadium, Accra, Ghana",
        media: "images/img18.jpeg",
        type: "image",
        category: "sports",
        description: "Complete power infrastructure upgrade for national sports complex, including main stadium and training facilities.",
        date: "August 2023",
        client: "Ghana Sports Authority"
      },
      {
        id: 34,
        title: "Retail Chain Power Standardization",
        location: "Multiple Locations, UK",
        media: "videos/v16.mp4",
        type: "video",
        category: "retail",
        description: "Standardized backup power solutions deployed across 50+ retail locations, with centralized monitoring and management.",
        date: "March 2024",
        client: "UK Retail Group"
      },
      {
        id: 35,
        title: "Religious Center Power Solution",
        location: "Westminster Abbey, London, UK",
        media: "images/img19.jpeg",
        type: "image",
        category: "religious",
        description: "Discreet backup power systems for historic religious site, balancing modern requirements with heritage preservation.",
        date: "November 2023",
        client: "Westminster Abbey Trust"
      },
      {
        id: 36,
        title: "Office Park Shared Generator System",
        location: "Business District, Accra, Ghana",
        media: "videos/v17.mp4",
        type: "video",
        category: "commercial",
        description: "Innovative shared generator system for business park, reducing costs while increasing reliability through load distribution.",
        date: "January 2024",
        client: "Accra Business Park Management"
      },
      {
        id: 37,
        title: "Food Processing Plant Power System",
        location: "Yorkshire, UK",
        media: "images/img20.jpeg",
        type: "image",
        category: "food",
        description: "Reliable power systems for food processing facilities, ensuring product safety and continuous cold chain operations.",
        date: "September 2023",
        client: "Yorkshire Food Producers"
      },
      {
        id: 38,
        title: "Film Studio Power Infrastructure",
        location: "Pinewood Studios, UK",
        media: "videos/v18.mp4",
        type: "video",
        category: "entertainment",
        description: "Specialized power solutions for film production facilities, supporting high-demand equipment and ensuring zero interruptions.",
        date: "April 2024",
        client: "Pinewood Studios Group"
      },
      {
        id: 39,
        title: "Community Clinic Power Solution",
        location: "Rural Communities, Northern Ghana",
        media: "images/img21.jpeg",
        type: "image",
        category: "healthcare",
        description: "Reliable power solutions for remote medical clinics, ensuring critical medical equipment remains operational.",
        date: "July 2023",
        client: "Ghana Health Outreach Program"
      },
      {
        id: 40,
        title: "University Research Power Protection",
        location: "Imperial College London, UK",
        media: "videos/v19.mp4",
        type: "video",
        category: "education",
        description: "Advanced power protection systems for sensitive research equipment, preventing data loss and experiment disruption.",
        date: "December 2023",
        client: "Imperial College Research Department"
      },
      {
        id: 41,
        title: "Logistics Center Backup System",
        location: "Distribution Hub, Birmingham, UK",
        media: "images/img22.jpeg",
        type: "image",
        category: "logistics",
        description: "Comprehensive backup power for national distribution center, ensuring continuous operation of sorting and tracking systems.",
        date: "February 2024",
        client: "UK Logistics Network"
      },
      {
        id: 42,
        title: "Mobile Communication Tower Power",
        location: "Multiple Locations, Ghana",
        media: "videos/v20.mp4",
        type: "video",
        category: "telecommunications",
        description: "Ruggedized power systems for mobile communication towers in remote and challenging environments.",
        date: "October 2023",
        client: "Ghana Mobile Networks Association"
      },
      {
        id: 43,
        title: "Historic Building Discreet Power",
        location: "Bath, UK",
        media: "images/img23.jpeg",
        type: "image",
        category: "heritage",
        description: "Discreet power solutions for historic UNESCO World Heritage buildings, maintaining architectural integrity.",
        date: "March 2024",
        client: "Bath Heritage Preservation Trust"
      },
      {
        id: 44,
        title: "Police Headquarters Backup System",
        location: "Scotland Yard, London, UK",
        media: "videos/v21.mp4",
        type: "video",
        category: "law enforcement",
        description: "Critical backup power systems for metropolitan police headquarters, ensuring continuous operation of security systems.",
        date: "May 2023",
        client: "Metropolitan Police Authority"
      },
      {
        id: 45,
        title: "Brewery Power Management System",
        location: "Craft Brewery, Manchester, UK",
        media: "images/img24.jpeg",
        type: "image",
        category: "beverage",
        description: "Custom power management solution for craft brewery, protecting sensitive fermentation processes from power disruptions.",
        date: "August 2023",
        client: "Manchester Craft Brewing Co."
      },
      {
        id: 46,
        title: "Government Data Center Protection",
        location: "Secure Location, UK",
        media: "videos/v22.mp4",
        type: "video",
        category: "government",
        description: "High-security power protection systems for government data centers, meeting the highest reliability standards.",
        date: "January 2024",
        client: "UK Government Digital Services"
      },
      {
        id: 47,
        title: "Fish Processing Plant Power Solution",
        location: "Coastal Region, Ghana",
        media: "images/img25.jpeg",
        type: "image",
        category: "seafood",
        description: "Reliable power systems for seafood processing facilities, ensuring product freshness and continuous refrigeration.",
        date: "November 2023",
        client: "Ghana Seafood Processors Association"
      },
      {
        id: 48,
        title: "Urban Microgrid Project",
        location: "East London Development, UK",
        media: "videos/v23.mp4",
        type: "video",
        category: "urban",
        description: "Innovative microgrid system for urban development, combining renewable sources with traditional backup power.",
        date: "April 2024",
        client: "East London Urban Renewal Group"
      },
      {
        id: 49,
        title: "Textile Factory Power Upgrade",
        location: "Kumasi, Ghana",
        media: "images/img26.jpeg",
        type: "image",
        category: "manufacturing",
        description: "Comprehensive power upgrade for textile manufacturing facility, supporting modern machinery and reducing outages.",
        date: "September 2023",
        client: "Kumasi Textile Manufacturers"
      },
      {
        id: 50,
        title: "Sports Arena Lighting Backup",
        location: "Emirates Stadium, London, UK",
        media: "videos/v24.mp4",
        type: "video",
        category: "sports",
        description: "Instant-response backup power systems for sports arena lighting, ensuring uninterrupted sporting events and broadcasts.",
        date: "February 2024",
        client: "Arsenal Football Club"
      },
      {
        id: 51,
        title: "Radio Station Backup Systems",
        location: "Broadcasting House, London, UK",
        media: "images/img27.jpeg",
        type: "image",
        category: "media",
        description: "Comprehensive backup power solutions for national radio broadcasting facilities, ensuring continuous transmission.",
        date: "July 2023",
        client: "National Radio Broadcasting Service"
      },
      {
        id: 52,
        title: "Hospital Surgical Wing Power",
        location: "Teaching Hospital, Accra, Ghana",
        media: "videos/v25.mp4",
        type: "video",
        category: "healthcare",
        description: "Specialized power systems for hospital surgical wing, providing multi-level redundancy for critical operations.",
        date: "December 2023",
        client: "Ghana Medical Association"
      },
      {
        id: 53,
        title: "Financial Trading Floor Backup",
        location: "London Stock Exchange, UK",
        media: "images/img28.jpeg",
        type: "image",
        category: "financial",
        description: "Zero-interruption power backup for financial trading operations, ensuring continuous market participation.",
        date: "March 2024",
        client: "London Financial Markets Association"
      },
      {
        id: 54,
        title: "Cultural Center Power Solution",
        location: "National Theatre, Accra, Ghana",
        media: "videos/v26.mp4",
        type: "video",
        category: "cultural",
        description: "Comprehensive power solution for national cultural center, supporting performances and preserving cultural artifacts.",
        date: "October 2023",
        client: "Ghana National Theatre Board"
      },
      {
        id: 55,
        title: "Chemical Processing Plant Safety",
        location: "Industrial Zone, Manchester, UK",
        media: "images/img29.jpeg",
        type: "image",
        category: "chemical",
        description: "Safety-critical power systems for chemical processing facility, ensuring safe shutdown procedures during outages.",
        date: "January 2024",
        client: "Manchester Chemical Industries"
      },
      {
        id: 56,
        title: "Prison Facility Security Power",
        location: "HMP Belmarsh, London, UK",
        media: "videos/v27.mp4",
        type: "video",
        category: "corrections",
        description: "High-security power backup systems for correctional facility, ensuring continuous operation of security systems.",
        date: "May 2023",
        client: "UK Prison Service"
      },
      {
        id: 57,
        title: "Airport Terminal Expansion Power",
        location: "Heathrow Terminal 5, London, UK",
        media: "images/img30.jpeg",
        type: "image",
        category: "aviation",
        description: "Expanded power infrastructure for airport terminal extension, supporting increased capacity and new facilities.",
        date: "August 2023",
        client: "Heathrow Airport Authority"
      },
      {
        id: 58,
        title: "Rural School Power Project",
        location: "Volta Region, Ghana",
        media: "videos/v22a.mp4",
        type: "video",
        category: "education",
        description: "Solar and generator hybrid power systems for rural schools, supporting educational technology and evening classes.",
        date: "February 2024",
        client: "Ghana Education Service"
      },
      {
        id: 59,
        title: "National Library Backup Power",
        location: "British Library, London, UK",
        media: "images/img31.jpeg",
        type: "image",
        category: "cultural",
        description: "Critical backup power for national library archives, protecting valuable collections with climate control systems.",
        date: "September 2023",
        client: "British Library Trust"
      },
      {
        id: 60,
        title: "Municipal Water Pumping Station",
        location: "Greater Accra Region, Ghana",
        media: "videos/v29.mp4",
        type: "video",
        category: "utilities",
        description: "Reliable power systems for municipal water pumping stations, ensuring continuous clean water supply to communities.",
        date: "November 2023",
        client: "Ghana Water Company Limited"
      },
      {
        id: 61,
        title: "Emergency Response Center Power",
        location: "Disaster Management HQ, London, UK",
        media: "videos/v31a.mp4",
        type: "video",
        category: "emergency",
        description: "Comprehensive power solution for emergency response coordination center, with multiple redundancy systems.",
        date: "April 2024",
        client: "UK Disaster Response Authority"
      },
      {
        id: 62,
        title: "Convention Center Power Solution",
        location: "Accra International Conference Center, Ghana",
        media: "videos/v9.mp4",
        type: "video",
        category: "events",
        description: "Design and implementation of a failsafe power system for international conferences and high-profile events.",
        date: "May 2023",
        client: "Ghana Convention Bureau"
      },
      {
        id: 63,
        title: "Convention Center Power Solution",
        location: "Accra International Conference Center, Ghana",
        media: "videos/v14a.mp4",
        type: "video",
        category: "events",
        description: "Design and implementation of a failsafe power system for international conferences and high-profile events.",
        date: "May 2023",
        client: "Ghana Convention Bureau"
      },
      {
        id: 64,
        title: "Convention Center Power Solution",
        location: "Accra International Conference Center, Ghana",
        media: "videos/v14b.mp4",
        type: "video",
        category: "events",
        description: "Design and implementation of a failsafe power system for international conferences and high-profile events.",
        date: "May 2023",
        client: "Ghana Convention Bureau"
      },
      {
        id: 65,
        title: "Convention Center Power Solution",
        location: "Accra International Conference Center, Ghana",
        media: "videos/v47a.mp4",
        type: "video",
        category: "events",
        description: "Design and implementation of a failsafe power system for international conferences and high-profile events.",
        date: "May 2023",
        client: "Ghana Convention Bureau"
      },
      {
        id: 66,
        title: "Convention Center Power Solution",
        location: "Accra International Conference Center, Ghana",
        media: "videos/v42a.mp4",
        type: "video",
        category: "events",
        description: "Design and implementation of a failsafe power system for international conferences and high-profile events.",
        date: "May 2023",
        client: "Ghana Convention Bureau"
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
    // Reset to first page when filter changes
    setCurrentPage(1);
  }, [filter, galleryItems]);

  // Calculate paginated items and total pages when filtered items change
  useEffect(() => {
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    setTotalPages(totalPages);
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    
    setPaginatedItems(currentItems);
  }, [filteredItems, currentPage, itemsPerPage]);

  // Handle page changes
  const goToPage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    // Scroll to top of gallery section
    document.querySelector('.gallery-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  // Generate page numbers for pagination
  const generatePaginationNumbers = () => {
    const pageNumbers = [];
    
    if (totalPages <= 5) {
      // Display all page numbers if there are 5 or fewer pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first page, last page, and current page
      pageNumbers.push(1);
      
      // Calculate range around current page
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      
      // Add ellipsis if needed
      if (start > 2) {
        pageNumbers.push('...');
      }
      
      // Add pages in the calculated range
      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }
      
      // Add ellipsis if needed
      if (end < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };

  return (
    <>
     <Seo 
            title="Project Gallery – Richy Electrical Services UK" 
            description="View our gallery of electrical projects across the UK. From home installations to commercial work, see the quality Richy Electrical delivers."
            canonical="/gallery"
          />
  
    <div className="min-h-screen pt-12">
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
      <section className="py-12 bg-gray-50 animate-on-scroll gallery-section">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedItems.map((item, index) => (
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
                      <Image 
                        src={item.media} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width={200}
                        height={100}
                        
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
          
          {/* Pagination */}
          {filteredItems.length > 0 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                
                {generatePaginationNumbers().map((page, index) => (
                  page === '...' ? (
                    <span key={`ellipsis-${index}`} className="text-gray-400 px-2">...</span>
                  ) : (
                    <motion.button
                      key={`page-${page}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => goToPage(page)}
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
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          )}
          
          {/* Items per page info */}
          {filteredItems.length > 0 && (
            <div className="text-center text-gray-500 text-sm mt-4">
              Showing {Math.min(currentPage * itemsPerPage - itemsPerPage + 1, filteredItems.length)} to {Math.min(currentPage * itemsPerPage, filteredItems.length)} of {filteredItems.length} items
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
                  We could not find any images matching your selected filter. Please try a different category.
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