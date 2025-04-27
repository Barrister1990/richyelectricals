// lib/services.js
const serviceData = [
    {
      id: "fuse-board-upgrades",
      title: "Fuse Board Upgrades & Replacements",
      slug: "fuse-board-upgrades",
      metaDescription: "Professional fuse board and consumer unit upgrades by certified electricians. Modern, safe replacements for outdated fuse boxes with RCBO protection and safety certification.",
      ogImage: "/images/services/fuse-board-upgrade.jpg",
      icon: "Zap",
      shortDescription: "Modern, safe consumer units to replace outdated fuse boxes, ensuring compliance with the latest regulations.",
      fullDescription: "Our fuse board upgrade service provides complete replacement of outdated and potentially dangerous consumer units with modern, regulation-compliant alternatives. All installations include RCBO protection for individual circuits and comprehensive safety testing.",
      features: [
        "Complete fuse board/consumer unit replacements",
        "Upgrades to meet current regulations",
        "RCBO protection for individual circuits",
        "Full safety testing and certification",
        "Professional installation by qualified electricians"
      ],
      benefits: [
        "Enhanced electrical safety",
        "Reduced risk of electrical fires",
        "Better circuit protection",
        "Peace of mind with compliant installation",
        "Modern safety features"
      ],
      locations: ["London", "Birmingham", "Manchester", "Leeds", "UK Nationwide"],
      faq: [
        {
          question: "How long does a fuse board upgrade take?",
          answer: "A standard fuse board upgrade typically takes 4-6 hours to complete, depending on the complexity of your electrical system and the number of circuits."
        },
        {
          question: "Why should I upgrade my fuse board?",
          answer: "Older fuse boards often lack modern safety features like RCD protection and may not comply with current regulations. Upgrading reduces fire risks and improves overall electrical safety."
        }
      ],
      relatedServices: ["electrical-inspections", "rewiring", "fault-finding"],
      processSteps: [
        {
          title: "Initial Assessment",
          description: "Our certified electrician will assess your current fuse board setup, discuss your requirements, and recommend the most suitable replacement options."
        },
        {
          title: "Detailed Quotation",
          description: "We provide a comprehensive quotation outlining the work required, materials, timescales, and costs with no hidden charges."
        },
        {
          title: "Scheduled Installation",
          description: "On the agreed date, we'll install your new consumer unit with minimal disruption, ensuring all circuits are properly protected."
        },
        {
          title: "Safety Testing",
          description: "After installation, we conduct thorough testing of all circuits to verify the system is working correctly and safely."
        },
        {
          title: "Certification & Documentation",
          description: "You'll receive full electrical certification and user guidance on your new consumer unit's operation and safety features."
        }
      ]
    },
    {
      id: "electrical-inspections",
      title: "Electrical Inspections & Testing",
      slug: "electrical-inspections",
      metaDescription: "Thorough electrical inspections and EICR testing by certified electricians. Ensure your property meets safety standards with our detailed electrical safety certificates and reports.",
      ogImage: "/images/services/electrical-inspection.jpg",
      icon: "ShieldCheck",
      shortDescription: "Thorough assessment of your electrical systems to identify potential hazards and ensure compliance with current safety standards.",
      fullDescription: "Our comprehensive electrical inspection services provide detailed assessment of your entire electrical system, identifying potential hazards before they become dangerous. We deliver full documentation and certification to prove compliance with all current regulations.",
      features: [
        "EICR (Electrical Installation Condition Reports)",
        "Landlord electrical safety certificates",
        "Pre-purchase property inspections",
        "Commercial electrical safety compliance",
        "Detailed reports with recommendations"
      ],
      benefits: [
        "Legal compliance for landlords and businesses",
        "Identification of potential hazards",
        "Comprehensive documentation",
        "Peace of mind for property owners",
        "Insurance requirement fulfillment"
      ],
      locations: ["London", "Birmingham", "Manchester", "Leeds", "UK Nationwide"],
      faq: [
        {
          question: "How often should I get an electrical inspection?",
          answer: "Residential properties should typically have an electrical inspection every 10 years, while rental properties require inspection every 5 years. Commercial properties often need more frequent inspections depending on the type of business."
        },
        {
          question: "What's included in an EICR?",
          answer: "An Electrical Installation Condition Report (EICR) includes a thorough check of your electrical systems, testing of circuits, identification of any potential fire hazards or electric shock risks, and verification that earthing and bonding are adequate."
        }
      ],
      relatedServices: ["fuse-board-upgrades", "fault-finding", "rewiring"],
      processSteps: [
        {
          title: "Booking & Preparation",
          description: "Schedule your inspection at a convenient time. We'll advise on what access will be needed and how to prepare for minimal disruption."
        },
        {
          title: "Visual Inspection",
          description: "Our electrician conducts a thorough visual assessment of all accessible electrical installations and wiring."
        },
        {
          title: "Technical Testing",
          description: "Using specialized equipment, we test circuits, RCDs, and protective devices to verify their operation and safety."
        },
        {
          title: "Report Compilation",
          description: "All findings are documented in a comprehensive report, highlighting any defects categorized by their severity."
        },
        {
          title: "Recommendations & Certification",
          description: "You'll receive the completed certificate with clear explanations and prioritized recommendations for any remedial work required."
        }
      ]
    },
    {
      id: "new-installations",
      title: "New Electrical Installations",
      slug: "new-installations",
      metaDescription: "Complete electrical installations for new builds, renovations and extensions. Our certified electricians design and implement systems that meet all regulations and your specific requirements.",
      ogImage: "/images/services/new-installation.jpg",
      icon: "Settings",
      shortDescription: "Complete electrical installations for new builds, renovations, and extensions, designed to meet your specific requirements.",
      fullDescription: "Our new installation service covers everything from initial design to final certification, ensuring your electrical systems are safe, efficient, and perfectly tailored to your needs. Whether it's a new build, extension, or complete renovation, our certified team delivers excellence.",
      features: [
        "Full property wiring for new builds",
        "Extensions and renovation electrical work",
        "Smart home electrical systems",
        "Commercial property installations",
        "Design and implementation services"
      ],
      benefits: [
        "Customized electrical solutions",
        "Energy-efficient designs",
        "Future-proof installations",
        "Complete safety compliance",
        "Professional documentation and certification"
      ],
      locations: ["London", "Birmingham", "Manchester", "Leeds", "UK Nationwide"],
      faq: [
        {
          question: "Can you integrate smart home systems into new installations?",
          answer: "Yes, we specialize in integrating modern smart home systems into new electrical installations, including lighting control, heating management, and security systems."
        },
        {
          question: "What certifications do I receive with a new installation?",
          answer: "All our new installations come with full electrical certification including Installation Certificates that confirm compliance with BS 7671 wiring regulations and building regulations Part P documentation where applicable."
        }
      ],
      relatedServices: ["garden-lighting", "rewiring", "fuse-board-upgrades"],
      processSteps: [
        {
          title: "Consultation & Design",
          description: "We discuss your requirements in detail and create a tailored electrical design plan that meets your needs and complies with regulations."
        },
        {
          title: "Detailed Proposal",
          description: "You'll receive a comprehensive proposal including designs, specifications, timelines, and transparent pricing."
        },
        {
          title: "Planning & Coordination",
          description: "We coordinate with other contractors and arrange all necessary permits and notifications required for the electrical installation."
        },
        {
          title: "Professional Installation",
          description: "Our qualified electricians complete all wiring, fixture installation, and system configuration according to the agreed plan."
        },
        {
          title: "Testing & Certification",
          description: "Every installation undergoes rigorous testing and is certified to meet all current electrical regulations and standards."
        },
        {
          title: "Handover & Support",
          description: "We provide a complete walkthrough of your new electrical systems and offer ongoing support as you settle in."
        }
      ]
    },
    {
      id: "fault-finding",
      title: "Electrical Fault Finding & Repairs",
      slug: "fault-finding",
      metaDescription: "Expert electrical fault finding and repair services with advanced diagnostic equipment. Quick identification and resolution of electrical problems from tripping circuits to power issues.",
      ogImage: "/images/services/fault-finding.jpg",
      icon: "HelpCircle",
      shortDescription: "Expert diagnostic services to quickly identify and resolve electrical faults and restore your systems to safe operation.",
      fullDescription: "Our fault finding service uses advanced diagnostics to pinpoint electrical issues quickly and accurately. From tripping circuits to intermittent power problems, we locate and resolve faults efficiently, minimizing disruption to your home or business.",
      features: [
        "Rapid response troubleshooting",
        "Advanced diagnostic equipment",
        "Circuit tracing and testing",
        "Intermittent fault resolution",
        "Comprehensive electrical system checks"
      ],
      benefits: [
        "Quick resolution of electrical problems",
        "Clear explanation of issues found",
        "Prevention of future failures",
        "Minimized disruption to property",
        "Safe and compliant repairs"
      ],
      locations: ["London", "Birmingham", "Manchester", "Leeds", "UK Nationwide"],
      faq: [
        {
          question: "How quickly can you respond to electrical faults?",
          answer: "We offer same-day service for most electrical faults, and emergency response within 2-4 hours for urgent safety issues."
        },
        {
          question: "What types of electrical faults can you diagnose?",
          answer: "We can diagnose and repair all types of electrical faults including circuit breaker tripping, power loss, flickering lights, burning smells, buzzing sounds, and intermittent power issues."
        }
      ],
      relatedServices: ["electrical-inspections", "emergency-services", "rewiring"],
      processSteps: [
        {
          title: "Initial Contact",
          description: "Contact us with details of your electrical issue. We'll ask key questions to help us prepare for the visit."
        },
        {
          title: "On-site Assessment",
          description: "Our electrician will arrive with specialized diagnostic equipment to evaluate the problem and its potential causes."
        },
        {
          title: "Diagnostic Testing",
          description: "We perform comprehensive testing to identify the exact nature and location of the fault in your electrical system."
        },
        {
          title: "Solution Proposal",
          description: "Once identified, we'll explain the issue clearly and provide options for repair with transparent pricing."
        },
        {
          title: "Professional Repair",
          description: "With your approval, we'll complete the necessary repairs efficiently, using quality parts and materials."
        },
        {
          title: "Verification Testing",
          description: "After repairs, we test thoroughly to ensure the fault is fully resolved and no new issues have been created."
        }
      ]
    },
    {
      id: "garden-lighting",
      title: "Garden & Outdoor Lighting",
      slug: "garden-lighting",
      metaDescription: "Professional garden lighting installation services to enhance your outdoor spaces. Weather-resistant, energy-efficient garden lighting solutions with timer and sensor controls.",
      ogImage: "/images/services/garden-lighting.jpg",
      icon: "Sun",
      shortDescription: "Enhance your outdoor spaces with professionally installed garden lighting solutions that are both beautiful and energy-efficient.",
      fullDescription: "Transform your garden and outdoor areas with our professional lighting installation services. We create beautiful, practical lighting schemes that enhance security, highlight landscape features, and create the perfect ambiance for outdoor entertaining.",
      features: [
        "Outdoor lighting design services",
        "Weather-resistant installations",
        "LED and energy-efficient options",
        "Security lighting solutions",
        "Timer and sensor controls"
      ],
      benefits: [
        "Enhanced property appearance",
        "Improved outdoor safety",
        "Extended use of garden spaces",
        "Energy-efficient solutions",
        "Added property value"
      ],
      locations: ["London", "Birmingham", "Manchester", "Leeds", "UK Nationwide"],
      faq: [
        {
          question: "Are outdoor lights weatherproof?",
          answer: "Yes, all our outdoor lighting installations use IP-rated weatherproof fixtures appropriate for the UK climate. We select lighting with suitable ingress protection ratings based on their specific location and exposure."
        },
        {
          question: "Can garden lights be controlled remotely?",
          answer: "Yes, we offer a range of control options including smartphone apps, timers, motion sensors, and integration with existing smart home systems to give you complete control over your garden lighting."
        }
      ],
      relatedServices: ["new-installations", "fault-finding", "emergency-services"],
      processSteps: [
        {
          title: "Design Consultation",
          description: "We'll discuss your vision for your outdoor space and create a lighting design that enhances your garden's best features."
        },
        {
          title: "Site Survey",
          description: "Our electrician will assess your outdoor areas, considering power sources, cable routes, and optimal fixture placement."
        },
        {
          title: "Detailed Proposal",
          description: "You'll receive a comprehensive proposal including lighting plans, fixture recommendations, and clear pricing."
        },
        {
          title: "Professional Installation",
          description: "Our team installs all lighting fixtures, cabling, and control systems with minimal disruption to your garden."
        },
        {
          title: "System Configuration",
          description: "We set up and configure all lighting controls, timers, and smart features to your preferences."
        },
        {
          title: "Evening Demonstration",
          description: "Once complete, we'll demonstrate your new lighting system at dusk and make any final adjustments to perfect the effect."
        }
      ]
    },
    {
      id: "rewiring",
      title: "House Rewiring Services",
      slug: "rewiring",
      metaDescription: "Complete and partial house rewiring services by certified electricians. Update outdated electrical systems for improved safety and functionality with minimal disruption.",
      ogImage: "/images/services/rewiring.jpg",
      icon: "ScrollText",
      shortDescription: "Complete or partial rewiring services to update outdated or unsafe electrical systems throughout your property.",
      fullDescription: "Our rewiring service provides a comprehensive solution for properties with aging or inadequate electrical systems. We handle everything from partial upgrades to complete house rewiring, ensuring all work meets current regulations while minimizing disruption to your property.",
      features: [
        "Full house rewiring services",
        "Partial rewiring solutions",
        "Minimal disruption approaches",
        "Upgrade to modern standards",
        "Detailed planning and implementation"
      ],
      benefits: [
        "Enhanced electrical safety",
        "Increased capacity for modern appliances",
        "Elimination of outdated wiring hazards",
        "Improved property value",
        "Peace of mind with warranty-backed work"
      ],
      locations: ["London", "Birmingham", "Manchester", "Leeds", "UK Nationwide"],
      faq: [
        {
          question: "How long does rewiring a house take?",
          answer: "Rewiring an average 3-bedroom house typically takes 5-10 days depending on the property's size, accessibility, and whether the property is occupied during works. We create a detailed timeline during the assessment phase."
        },
        {
          question: "How disruptive is house rewiring?",
          answer: "Rewiring does involve accessing walls and floors, but we use minimally invasive techniques where possible. For occupied properties, we typically work room by room to reduce impact, and always clean thoroughly after each day's work."
        }
      ],
      relatedServices: ["fuse-board-upgrades", "electrical-inspections", "new-installations"],
      processSteps: [
        {
          title: "Initial Consultation",
          description: "We assess your property and current wiring, discuss your requirements, and determine the extent of rewiring needed."
        },
        {
          title: "Detailed Quotation",
          description: "You'll receive a comprehensive quotation outlining the work required, materials, timescales, and costs."
        },
        {
          title: "Planning & Preparation",
          description: "We create a detailed plan to minimize disruption and prepare the property by securing furniture and valuables."
        },
        {
          title: "First Fix",
          description: "Our electricians install new cables, back boxes, and circuit layouts before any plastering work is completed."
        },
        {
          title: "Second Fix",
          description: "After any building work is finished, we install all switches, sockets, and fixtures to complete the system."
        },
        {
          title: "Testing & Certification",
          description: "Your new electrical installation undergoes comprehensive testing and receives full certification to current standards."
        },
        {
          title: "Final Inspection",
          description: "We conduct a thorough walkthrough with you to ensure complete satisfaction with all aspects of the installation."
        }
      ]
    },
    {
      id: "emergency-services",
      title: "24/7 Emergency Electrical Services",
      slug: "emergency-services",
      metaDescription: "Round-the-clock emergency electrical services with rapid response times. Immediate assistance for urgent electrical issues to restore safety and functionality to your property.",
      ogImage: "/images/services/emergency-service.jpg",
      icon: "Clock",
      shortDescription: "24/7 emergency electrical services providing rapid response to urgent electrical issues to restore safety.",
      fullDescription: "Our emergency electrical service operates 24 hours a day, 7 days a week, providing rapid response when you need it most. From power outages to dangerous electrical faults, our teams are equipped to make your property safe and restore functionality quickly.",
      features: [
        "24-hour emergency call-outs",
        "Rapid response team",
        "Immediate safety measures",
        "Temporary and permanent solutions",
        "Post-emergency safety checks"
      ],
      benefits: [
        "Fast resolution of dangerous situations",
        "Available nights, weekends and holidays",
        "Fully equipped emergency vehicles",
        "Prevention of further damage",
        "Peace of mind during electrical emergencies"
      ],
      locations: ["London", "Birmingham", "Manchester", "Leeds", "UK Nationwide"],
      faq: [
        {
          question: "What is your emergency response time?",
          answer: "Our emergency response teams aim to reach most locations within 1-2 hours in urban areas and 2-4 hours in rural locations. For life-threatening emergencies, we prioritize immediate dispatch."
        },
        {
          question: "What qualifies as an electrical emergency?",
          answer: "Electrical emergencies include: burning smells from outlets or fuse boards, exposed wiring, water damage to electrical systems, complete power loss, smoke from electrical devices, and continuous circuit breaker tripping that can't be reset."
        }
      ],
      relatedServices: ["fault-finding", "electrical-inspections", "fuse-board-upgrades"],
      processSteps: [
        {
          title: "Emergency Call",
          description: "Contact our 24/7 emergency line. Our team will ask crucial questions to assess the situation and prioritize your call."
        },
        {
          title: "Immediate Safety Advice",
          description: "We provide critical safety instructions while our electrician is en route to your property."
        },
        {
          title: "Rapid Response",
          description: "Our electrician arrives equipped with tools and parts to address common emergency scenarios."
        },
        {
          title: "Safety Assessment",
          description: "The immediate area is secured and the electrical issue is assessed to determine appropriate action."
        },
        {
          title: "Emergency Resolution",
          description: "We implement immediate solutions to make your property safe and restore essential electrical functions."
        },
        {
          title: "Follow-up Plan",
          description: "If permanent repairs are needed, we'll provide options and schedule follow-up work as required."
        }
      ]
    }
  ];
  
  export function getAllServices() {
    return serviceData;
  }
  
  export function getServiceData(slug) {
    return serviceData.find(service => service.slug === slug);
  }
  
  export function getServicePaths() {
    return serviceData.map(service => ({
      params: { slug: service.slug }
    }));
  }