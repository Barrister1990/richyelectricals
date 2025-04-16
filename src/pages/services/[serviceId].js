// pages/services/[serviceId].js
import { motion } from 'framer-motion';
import {
  ArrowLeft, ArrowRight,
  ChevronRight,
  Clock,
  HelpCircle,
  Phone,
  ScrollText,
  Settings,
  ShieldCheck,
  Star, Sun,
  Wrench, Zap
} from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Service data - this could be moved to a separate data file
const servicesData = {
  // Generator Services
 "fuse-board-upgrades": {
  id: "fuse-board-upgrades",
  category: "Electrical Services",
  icon: <Zap className="w-10 h-10 text-orange-500" />,
  title: "Fuse Board Upgrades",
  headline: "Modern Fuse Board Upgrades for Enhanced Safety and Compliance",
  description: "Modern, safe consumer units to replace outdated fuse boxes, ensuring compliance with the latest regulations and improved electrical safety for your property.",
  longDescription: "Upgrading your fuse board (consumer unit) is one of the most important safety improvements you can make to your property's electrical system. At Richy Electricals, we specialize in replacing outdated and potentially dangerous fuse boxes with modern consumer units that offer enhanced protection through RCDs (Residual Current Devices) and RCBOs (Residual Current Breaker with Overload). Our upgrades ensure your electrical system complies with the latest BS 7671 wiring regulations and provides superior protection against electric shocks, fires, and overloads.",
  features: [
    "Complete fuse board/consumer unit replacements",
    "Upgrades to meet current regulations",
    "RCBO protection for individual circuits",
    "Full safety testing and certification",
    "Professional installation by qualified electricians"
  ],
  benefitsHeading: "Benefits of Our Fuse Board Upgrade Service",
  benefits: [
    {
      title: "Enhanced Safety",
      description: "Modern consumer units provide superior protection against electric shocks and electrical fires through advanced circuit protection devices."
    },
    {
      title: "Regulatory Compliance",
      description: "Our upgrades ensure your property meets current BS 7671 wiring regulations and Part P of the Building Regulations."
    },
    {
      title: "Selective Isolation",
      description: "RCBO-equipped consumer units allow individual circuits to be isolated, meaning a fault on one circuit won't affect the entire property."
    },
    {
      title: "Insurance Compatibility",
      description: "Many insurance companies require updated consumer units that meet current regulations, potentially affecting claim validity."
    }
  ],
  processSteps: [
    {
      title: "Initial Assessment",
      description: "We assess your current fuse board, electrical load requirements, and circuit distribution to determine the appropriate replacement."
    },
    {
      title: "Detailed Quote",
      description: "We provide a comprehensive quote outlining the proposed consumer unit specifications, installation process, and costs."
    },
    {
      title: "Professional Installation",
      description: "Our qualified electricians install your new consumer unit with minimal disruption, ensuring all circuits are properly protected."
    },
    {
      title: "Testing and Verification",
      description: "We thoroughly test each circuit and the overall installation to verify proper functioning and safety compliance."
    },
    {
      title: "Documentation and Certification",
      description: "You'll receive full certification for the installation, including electrical safety certificates required for regulatory compliance."
    }
  ],
  faq: [
    {
      question: "How long does a fuse board upgrade take?",
      answer: "A typical domestic fuse board upgrade takes approximately 4-6 hours to complete. For larger properties or more complex electrical systems, it may take a full day. We aim to minimize disruption and will need to turn off power during the installation."
    },
    {
      question: "How do I know if my fuse board needs upgrading?",
      answer: "Signs that your fuse board needs upgrading include: it's over 25 years old, it has wooden backing, contains ceramic fuses, lacks RCD protection, shows signs of damage or burning, trips frequently, or cannot accommodate additional circuits for home improvements."
    },
    {
      question: "Will I need to redecorate after a fuse board upgrade?",
      answer: "Our engineers work neatly and typically the consumer unit fits in the same location as your old fuse board. In most cases, no redecoration is necessary. If any additional work is required that might affect your décor, we'll discuss this with you before proceeding."
    },
    {
      question: "Is a fuse board upgrade a legal requirement?",
      answer: "While there's no legal requirement to upgrade an existing fuse board that was compliant when installed, any new work or modifications to your electrical system must meet current regulations. Additionally, landlords are legally required to ensure electrical installations in rental properties are safe, which often necessitates upgrading older fuse boards."
    }
  ],
  relatedServices: ["electrical-inspections", "rewiring", "new-installations"],
  callToAction: "Ready to upgrade your fuse board?"
},

// Electrical Inspections
"electrical-inspections": {
  id: "electrical-inspections",
  category: "Electrical Services",
  icon: <ShieldCheck className="w-10 h-10 text-orange-500" />,
  title: "Electrical Inspections",
  headline: "Comprehensive Electrical Inspection Services for Peace of Mind",
  description: "Thorough assessment of your electrical systems to identify potential hazards and ensure compliance with current safety standards and regulations.",
  longDescription: "Regular electrical inspections are essential for maintaining the safety and compliance of your property's electrical systems. At Richy Electricals, our qualified inspectors conduct thorough examinations to identify any defects or non-compliance issues that might pose safety risks. From domestic EICR (Electrical Installation Condition Reports) to commercial inspections and landlord certificates, our services help you meet legal obligations and ensure the safety of your property's occupants. Our detailed reports provide clear recommendations for any necessary remedial work.",
  features: [
    "EICR (Electrical Installation Condition Reports)",
    "Landlord electrical safety certificates",
    "Pre-purchase property inspections",
    "Commercial electrical safety compliance",
    "Detailed reports with recommendations"
  ],
  benefitsHeading: "Why Choose Our Electrical Inspection Service",
  benefits: [
    {
      title: "Certified Inspectors",
      description: "All our inspections are conducted by qualified electricians registered with recognized industry bodies, ensuring thorough and compliant assessments."
    },
    {
      title: "Comprehensive Testing",
      description: "We conduct extensive testing of all accessible circuits, fixtures, and components to identify any hidden issues or potential hazards."
    },
    {
      title: "Clear Documentation",
      description: "Our reports are easy to understand, highlighting any issues found with clear recommendations and categorization of risks."
    },
    {
      title: "Legal Compliance",
      description: "Our inspections ensure you meet regulatory requirements, particularly important for landlords and commercial property owners."
    }
  ],
  processSteps: [
    {
      title: "Initial Consultation",
      description: "We discuss your requirements and schedule an appropriate time for the inspection with minimal disruption."
    },
    {
      title: "Visual Inspection",
      description: "Our inspector conducts a thorough visual examination of all accessible electrical installations and fittings."
    },
    {
      title: "Technical Testing",
      description: "We perform comprehensive testing of circuits, RCDs, earthing arrangements, and other critical components."
    },
    {
      title: "Report Preparation",
      description: "A detailed report is prepared, highlighting any defects, non-compliance issues, or recommendations for improvement."
    },
    {
      title: "Explanation and Advice",
      description: "We explain the findings clearly and provide professional advice on any remedial work required."
    }
  ],
  faq: [
    {
      question: "How often should I have an electrical inspection?",
      answer: "For domestic properties, we recommend an EICR every 10 years or when changing occupancy. For rented properties, the law requires inspections every 5 years. Commercial properties typically need inspections every 3-5 years depending on the type of business, and industrial properties usually require annual inspections."
    },
    {
      question: "What's the difference between an EICR and a PAT test?",
      answer: "An EICR (Electrical Installation Condition Report) examines the fixed wiring and electrical installations in a property. PAT (Portable Appliance Testing) focuses specifically on movable electrical appliances and equipment. Both are important for comprehensive electrical safety, especially in commercial environments."
    },
    {
      question: "What happens if issues are found during an inspection?",
      answer: "Any issues found will be documented in the report and classified according to their severity (C1 - danger present, C2 - potentially dangerous, C3 - improvement recommended). For C1 and C2 issues, we can provide a separate quote for remedial work to address these safety concerns promptly."
    },
    {
      question: "Is an electrical inspection required by law?",
      answer: "For landlords in England, electrical safety inspections are legally required every 5 years under the Electrical Safety Standards in the Private Rented Sector Regulations 2020. For homeowners, there's no legal requirement, but insurers may require regular inspections. Commercial properties must have regular inspections to comply with the Electricity at Work Regulations 1989."
    }
  ],
  relatedServices: ["fuse-board-upgrades", "rewiring", "fault-finding"],
  callToAction: "Book your electrical inspection today"
},

// New Installations
"new-installations": {
  id: "new-installations",
  category: "Electrical Services",
  icon: <Settings className="w-10 h-10 text-orange-500" />,
  title: "New Installations",
  headline: "Professional Electrical Installations for New Properties and Extensions",
  description: "Complete electrical installations for new builds, renovations, and extensions, designed and implemented to meet your specific requirements and comply with all regulations.",
  longDescription: "Whether you're building a new property, renovating an existing one, or adding an extension, Richy Electricals provides comprehensive electrical installation services to meet your needs. Our qualified electricians handle everything from initial design and planning to final testing and certification. We work closely with you to understand your requirements, recommend energy-efficient solutions, and implement installations that are safe, compliant, and tailored to your lifestyle or business needs. All our work complies with the latest BS 7671 wiring regulations and Building Regulations.",
  features: [
    "Full property wiring for new builds",
    "Extensions and renovation electrical work",
    "Smart home electrical systems",
    "Commercial property installations",
    "Design and implementation services"
  ],
  benefitsHeading: "Benefits of Our New Installation Service",
  benefits: [
    {
      title: "Bespoke Design",
      description: "We create custom electrical designs tailored to your specific requirements, lifestyle, and future needs."
    },
    {
      title: "Regulatory Compliance",
      description: "All installations fully comply with current regulations, including BS 7671 and Part P of the Building Regulations."
    },
    {
      title: "Energy Efficiency",
      description: "We recommend and implement energy-efficient solutions to reduce your carbon footprint and energy costs."
    },
    {
      title: "Future-Proofing",
      description: "Our installations consider future technology needs, providing adequate capacity and infrastructure for expanding requirements."
    }
  ],
  processSteps: [
    {
      title: "Consultation & Planning",
      description: "We discuss your requirements in detail and develop an electrical plan that meets your needs and complies with regulations."
    },
    {
      title: "Design & Quotation",
      description: "Our team creates a detailed electrical design with a comprehensive quotation outlining all aspects of the installation."
    },
    {
      title: "Installation Work",
      description: "Our qualified electricians implement the installation according to the agreed design and schedule."
    },
    {
      title: "Testing & Inspection",
      description: "All installations undergo rigorous testing to ensure safety and compliance with current regulations."
    },
    {
      title: "Certification & Handover",
      description: "We provide full certification for the installation and explain the operation of all installed systems."
    }
  ],
  faq: [
    {
      question: "How early should I involve an electrician in my new build or renovation project?",
      answer: "Ideally, we should be involved from the planning stage. Early consultation allows us to provide input on the electrical design, helping optimize the layout for efficiency, convenience, and future needs. This can prevent costly changes later in the project."
    },
    {
      question: "Can you work with my architect or builder?",
      answer: "Absolutely. We regularly collaborate with architects, builders, and other tradespeople on projects of all sizes. Clear communication among all parties ensures that the electrical installation integrates seamlessly with the overall project and meets all requirements."
    },
    {
      question: "Do you handle all the necessary permits and notifications?",
      answer: "Yes, we take care of all regulatory aspects of your electrical installation. This includes Building Control notifications under Part P regulations and providing all necessary certificates upon completion to ensure your installation is fully compliant and properly documented."
    },
    {
      question: "Can you install smart home systems?",
      answer: "Yes, we specialize in modern smart home installations. From basic smart lighting to comprehensive home automation systems, we can integrate various technologies to enhance convenience, energy efficiency, and security in your property."
    }
  ],
  relatedServices: ["fuse-board-upgrades", "garden-lighting", "rewiring"],
  callToAction: "Plan your new electrical installation"
},

// Fault Finding
"fault-finding": {
  id: "fault-finding",
  category: "Electrical Services",
  icon: <HelpCircle className="w-10 h-10 text-orange-500" />,
  title: "Fault Finding",
  headline: "Expert Electrical Fault Finding and Troubleshooting",
  description: "Expert diagnostic services to quickly identify and resolve electrical faults, from tripping circuits to intermittent power issues.",
  longDescription: "Electrical faults can be frustrating, disruptive, and potentially dangerous. At Richy Electricals, our experienced technicians use advanced diagnostic equipment and methodical approaches to quickly identify the source of electrical problems in your home or business. From tripping circuit breakers and power outages to flickering lights and intermittent faults, we trace issues to their root cause and implement effective solutions. Our efficient fault-finding service minimizes disruption and restores your electrical system to safe, reliable operation.",
  features: [
    "Rapid response troubleshooting",
    "Advanced diagnostic equipment",
    "Circuit tracing and testing",
    "Intermittent fault resolution",
    "Comprehensive electrical system checks"
  ],
  benefitsHeading: "Benefits of Our Fault Finding Service",
  benefits: [
    {
      title: "Precise Diagnosis",
      description: "Our systematic approach and specialized equipment allow us to pinpoint faults accurately, avoiding unnecessary work."
    },
    {
      title: "Quick Resolution",
      description: "Years of experience enable our technicians to efficiently identify and resolve common and complex electrical faults."
    },
    {
      title: "Safety Assurance",
      description: "We don't just fix the immediate problem – we check for underlying issues that could pose safety risks."
    },
    {
      title: "Cost-Effective Solutions",
      description: "Accurate diagnosis means targeted repairs, saving you money on unnecessary component replacements or extensive works."
    }
  ],
  processSteps: [
    {
      title: "Initial Assessment",
      description: "We gather information about the symptoms, when they occur, and any relevant history of your electrical system."
    },
    {
      title: "Visual Inspection",
      description: "Our technicians examine visible components and connections for signs of damage or deterioration."
    },
    {
      title: "Diagnostic Testing",
      description: "Using specialized equipment, we test circuits, connections, and components to identify the fault."
    },
    {
      title: "Fault Isolation",
      description: "Once identified, we isolate the fault and explain the issue and recommended solution."
    },
    {
      title: "Resolution & Testing",
      description: "After implementing the solution, we thoroughly test the system to ensure the fault is fully resolved."
    }
  ],
  faq: [
    {
      question: "How long does fault finding typically take?",
      answer: "The time required varies significantly depending on the nature and complexity of the fault. Simple issues might be diagnosed within 30 minutes, while intermittent or complex faults could take several hours. We work efficiently to minimize both time and disruption."
    },
    {
      question: "My circuit breaker keeps tripping – what could be causing this?",
      answer: "Circuit breakers trip for safety reasons when they detect overloads, short circuits, or earth leakage. Common causes include faulty appliances, damaged cables, water ingress, or simply too many devices on one circuit. Our fault finding service will identify which of these is causing your specific issue."
    },
    {
      question: "Can you find faults in wiring hidden behind walls?",
      answer: "Yes, we use non-invasive techniques where possible, including thermal imaging cameras and advanced circuit tracers to locate faults in concealed wiring. When necessary, we can perform targeted investigations to minimize damage to your property."
    },
    {
      question: "Do you charge for fault finding if you can't fix the problem immediately?",
      answer: "Yes, there is a charge for our diagnostic service as it requires professional expertise and specialized equipment. Once we've identified the issue, we'll provide a clear quote for the necessary repairs, which you can choose to proceed with or not. If you approve the repair work, the diagnostic fee is often discounted from the total cost."
    }
  ],
  relatedServices: ["electrical-inspections", "fuse-board-upgrades", "emergency-services"],
  callToAction: "Need help with an electrical fault?"
},

// Garden Lighting
"garden-lighting": {
  id: "garden-lighting",
  category: "Electrical Services",
  icon: <Sun className="w-10 h-10 text-orange-500" />,
  title: "Garden Lighting",
  headline: "Transform Your Outdoor Space with Professional Garden Lighting",
  description: "Enhance your outdoor spaces with professionally installed garden lighting solutions that are both beautiful and energy-efficient.",
  longDescription: "Garden lighting transforms your outdoor space, creating ambiance, enhancing security, and extending the usability of your garden into the evening hours. At Richy Electricals, we design and install bespoke outdoor lighting solutions tailored to your garden's landscape and your personal preferences. From subtle path lighting and accent spotlights to decorative features and security floodlights, our waterproof and energy-efficient installations are built to withstand the British weather while minimizing energy consumption. All our outdoor electrical work complies with relevant regulations and includes proper IP-rated components for safety and longevity.",
  features: [
    "Outdoor lighting design services",
    "Weather-resistant installations",
    "LED and energy-efficient options",
    "Security lighting solutions",
    "Timer and sensor controls"
  ],
  benefitsHeading: "Benefits of Our Garden Lighting Service",
  benefits: [
    {
      title: "Enhanced Aesthetics",
      description: "Well-designed garden lighting accentuates landscaping features and creates a magical atmosphere in your outdoor space."
    },
    {
      title: "Extended Usability",
      description: "Proper lighting extends the use of your garden, patio, or deck into the evening hours, maximizing your outdoor living area."
    },
    {
      title: "Improved Security",
      description: "Strategic outdoor lighting deters intruders and improves safety by illuminating pathways and potential hazards."
    },
    {
      title: "Energy Efficiency",
      description: "Our LED lighting solutions and smart controls minimize energy consumption while providing optimal illumination."
    }
  ],
  processSteps: [
    {
      title: "Design Consultation",
      description: "We discuss your vision, assess your outdoor space, and develop a lighting design that enhances your garden's features."
    },
    {
      title: "Technical Planning",
      description: "Our team plans the electrical requirements, including cable routing, power needs, and control systems."
    },
    {
      title: "Installation Work",
      description: "Our qualified electricians carefully install all lighting components with minimal disruption to your garden."
    },
    {
      title: "System Configuration",
      description: "We set up and configure any controllers, timers, or sensors to ensure optimal operation."
    },
    {
      title: "Demonstration & Handover",
      description: "We demonstrate the system's operation and provide guidance on maintenance and future adjustments."
    }
  ],
  faq: [
    {
      question: "Is outdoor lighting expensive to run?",
      answer: "Modern LED garden lighting is highly energy-efficient. A typical LED garden lighting system costs just pennies per day to operate. With timer and sensor controls, this can be reduced even further. We can provide estimates of running costs based on your specific installation during the quoting process."
    },
    {
      question: "Will installation damage my garden?",
      answer: "We take great care to minimize disruption to your garden. Cables are typically buried in narrow trenches or run along existing structures. Our team is experienced in working around established plants and landscape features, and we clean up thoroughly after installation is complete."
    },
    {
      question: "Can garden lighting be installed in winter?",
      answer: "Yes, garden lighting can be installed year-round, weather permitting. Winter installations can actually be advantageous as they allow you to see the lighting effect when darkness falls earlier. The only limitations might be frozen ground, which can make cable trenching more difficult."
    },
    {
      question: "How long does a garden lighting installation typically last?",
      answer: "Quality outdoor lighting fixtures and proper installation should provide many years of service. LED lights typically last 15-25 years, and our weather-resistant fixtures and connections are designed to withstand UK weather conditions. We provide guarantees on our workmanship and can advise on maintenance to maximize system longevity."
    }
  ],
  relatedServices: ["new-installations", "electrical-inspections", "fault-finding"],
  callToAction: "Illuminate your garden with expert lighting"
},

// Rewiring
"rewiring": {
  id: "rewiring",
  category: "Electrical Services",
  icon: <ScrollText className="w-10 h-10 text-orange-500" />,
  title: "Rewiring",
  headline: "Complete House Rewiring Services for Safety and Modernization",
  description: "Complete or partial rewiring services to update outdated or unsafe electrical systems, improving safety and functionality throughout your property.",
  longDescription: "If your property has old wiring, frequent electrical issues, or you're planning a major renovation, rewiring may be necessary to ensure safety and meet modern electrical demands. At Richy Electricals, we provide comprehensive rewiring services for homes and businesses of all sizes. Our experienced electricians replace outdated wiring, upgrade distribution boards, and install additional sockets and circuits to meet your current and future needs. We work methodically to minimize disruption, coordinating with other trades when necessary, and ensure all work complies with the latest BS 7671 wiring regulations and Building Regulations.",
  features: [
    "Full house rewiring services",
    "Partial rewiring solutions",
    "Minimal disruption approaches",
    "Upgrade to modern standards",
    "Detailed planning and implementation"
  ],
  benefitsHeading: "Benefits of Our Rewiring Service",
  benefits: [
    {
      title: "Enhanced Safety",
      description: "Modern wiring systems with proper circuit protection significantly reduce the risk of electrical fires and shocks."
    },
    {
      title: "Increased Capacity",
      description: "Updated wiring can handle the demands of modern appliances and technology, preventing overloads and performance issues."
    },
    {
      title: "Property Value",
      description: "Updated electrical systems can increase property value and may be required when selling older properties."
    },
    {
      title: "Future-Proofing",
      description: "Our rewiring includes planning for future electrical needs, with additional capacity and strategically placed sockets and switches."
    }
  ],
  processSteps: [
    {
      title: "Initial Assessment",
      description: "We evaluate your current electrical system and discuss your requirements to determine the scope of rewiring needed."
    },
    {
      title: "Detailed Planning",
      description: "Our team creates a comprehensive rewiring plan, including socket placements, lighting circuits, and special requirements."
    },
    {
      title: "First Fix",
      description: "We install new cabling throughout the property, working methodically to minimize disruption to the structure."
    },
    {
      title: "Second Fix",
      description: "After any plastering or decorating, we fit sockets, switches, light fittings, and the consumer unit."
    },
    {
      title: "Testing and Certification",
      description: "All circuits are thoroughly tested, and you receive full certification for the new installation."
    }
  ],
  faq: [
    {
      question: "How disruptive is a full house rewire?",
      answer: "A full rewire does involve a significant level of disruption as we need access to run cables throughout the property. This typically requires lifting floorboards and cutting channels in walls. We work methodically to minimize disruption, and many clients choose to rewire during other renovation work or while the property is vacant. For occupied properties, we can often work in phases to ensure parts of the property remain usable."
    },
    {
      question: "How long does a house rewire take?",
      answer: "The timeframe depends on the size and complexity of your property. A typical 3-bedroom house might take 7-10 working days for a full rewire. Partial rewires are quicker, often completed in 3-5 days. We'll provide a specific timeframe during the quotation process based on your property's requirements."
    },
    {
      question: "How do I know if my house needs rewiring?",
      answer: "Signs that rewiring may be necessary include: cloth-covered cables, round pin sockets, fuses mounted on boards instead of modern circuit breakers, aluminum wiring instead of copper, frequent electrical issues, flickering lights, or if the property hasn't been rewired in the last 25-30 years."
    },
    {
      question: "Can you rewire just part of my house?",
      answer: "Yes, partial rewiring is possible and often appropriate. For instance, we can rewire high-risk areas like kitchens and bathrooms or add new circuits for extensions while leaving intact wiring in good condition. We'll advise on the most cost-effective approach based on the condition of your existing wiring."
    }
  ],
  relatedServices: ["fuse-board-upgrades", "electrical-inspections", "new-installations"],
  callToAction: "Discuss your rewiring requirements"
},

// Emergency Services
"emergency-services": {
  id: "emergency-services",
  category: "Electrical Services",
  icon: <Clock className="w-10 h-10 text-orange-500" />,
  title: "Emergency Services",
  headline: "24/7 Emergency Electrical Services When You Need Them Most",
  description: "24/7 emergency electrical services providing rapid response to urgent electrical issues to restore safety and functionality to your property.",
  longDescription: "Electrical emergencies can occur at any time and require immediate attention to prevent danger and damage. At Richy Electricals, our emergency electricians are available 24 hours a day, 7 days a week, providing rapid response to critical electrical issues across the UK. From power outages and fire hazards to dangerous wiring and circuit failures, our fully equipped emergency team quickly assesses the situation, makes the area safe, and implements effective solutions. We prioritize your safety and work efficiently to minimize disruption while ensuring all emergency repairs meet required safety standards.",
  features: [
    "24-hour emergency call-outs",
    "Rapid response team",
    "Immediate safety measures",
    "Temporary and permanent solutions",
    "Post-emergency safety checks"
  ],
  benefitsHeading: "Benefits of Our Emergency Electrical Service",
  benefits: [
    {
      title: "Immediate Assistance",
      description: "Our emergency electricians respond quickly to your call, typically arriving within 2-4 hours for most UK locations."
    },
    {
      title: "Comprehensive Solutions",
      description: "We come prepared with tools and common parts to resolve a wide range of electrical emergencies on the first visit."
    },
    {
      title: "Safety First Approach",
      description: "Our priority is making your property safe, implementing immediate measures to prevent injury or damage."
    },
    {
      title: "24/7 Availability",
      description: "Electrical emergencies don't wait for business hours – neither do we. Our team is available around the clock, including weekends and holidays."
    }
  ],
  processSteps: [
    {
      title: "Emergency Call",
      description: "Contact our 24/7 emergency number and provide details of the situation for appropriate response planning."
    },
    {
      title: "Rapid Dispatch",
      description: "We dispatch the nearest qualified emergency electrician to your location with appropriate equipment."
    },
    {
      title: "Safety Assessment",
      description: "Upon arrival, our electrician assesses the situation and implements immediate safety measures if required."
    },
    {
      title: "Problem Resolution",
      description: "We work efficiently to resolve the emergency, providing either temporary or permanent solutions as appropriate."
    },
    {
      title: "Follow-up Services",
      description: "After resolving the immediate emergency, we can schedule follow-up work for any permanent repairs or improvements needed."
    }
  ],
  faq: [
    {
      question: "What constitutes an electrical emergency?",
      answer: "Electrical emergencies include situations that pose immediate safety risks or critical functionality issues, such as: burning smells from electrical components, exposed wiring, persistent tripping of the main circuit breaker, power outages affecting critical equipment (medical devices, security systems), electrical shocks from appliances or fixtures, signs of electrical fire, and flood-damaged electrical systems."
    },
    {
      question: "How quickly can you respond to an emergency call?",
      answer: "We aim to have an emergency electrician at your location within 2-4 hours for most areas across the UK. In densely populated areas, response times may be quicker. For critical infrastructure clients with service agreements, we offer guaranteed response times."
    },
    {
      question: "Is there an extra charge for emergency call-outs outside normal working hours?",
      answer: "Yes, emergency call-outs during evenings, weekends, and holidays typically incur a higher call-out fee than standard working hours. However, our emergency rates are clearly communicated when you call, and we provide an estimate before dispatching a technician. The additional cost reflects the immediate availability of our qualified electricians outside normal working hours."
    },
    {
      question: "What should I do while waiting for the emergency electrician to arrive?",
      answer: "Safety is paramount. If possible and safe to do so, turn off the power at the main switch. Keep everyone away from the affected area, especially if there are exposed wires or signs of electrical fire. Don't use water on electrical fires - use a proper fire extinguisher rated for electrical fires. If there's serious danger, evacuate the premises and call emergency services on 999."
    }
  ],
  relatedServices: ["fault-finding", "electrical-inspections", "fuse-board-upgrades"],
  callToAction: "Need emergency electrical help?"
}
};

export default function ServiceDetail() {
  const router = useRouter();
  const { serviceId } = router.query;
  const [service, setService] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (serviceId && servicesData[serviceId]) {
      setService(servicesData[serviceId]);
    }
  }, [serviceId]);

  // For intersection observer animations
  useEffect(() => {
    if (!service) return;

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
  }, [service]);

  // Empty state
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-700">Loading service details...</h1>
          <p className="mt-4 text-gray-500">If this page does not load, the service may not exist.</p>
          <Link href="/services" className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-full">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-10">
      <Head>
        <title>{service.title} | Richy Electricals | UK Electrical Engineering Experts</title>
        <meta name="description" content={service.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
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
          <div className="mb-8">
            <Link href="/services" className="inline-flex items-center text-gray-600 hover:text-orange-500 transition-colors duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </div>
          
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-sm font-medium text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                  {service.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {service.headline}
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
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
                  <Link href="tel:+447491565676" className="inline-flex items-center bg-white text-gray-900 font-medium py-3 px-8 rounded-full border border-gray-300 hover:border-gray-400 shadow-md transition-all duration-300">
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Immediate Service
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                <p className="text-gray-700">{service.longDescription}</p>
                
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Process Steps */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Process</h2>
                <div className="space-y-8">
                  {service.processSteps.map((step, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative pl-12 pb-8"
                    >
                      {/* Line connecting steps */}
                      {index < service.processSteps.length - 1 && (
                        <div className="absolute left-5 top-8 bottom-0 w-0.5 bg-orange-200"></div>
                      )}
                      
                      {/* Step number */}
                      <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-12 bg-gray-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">{service.benefitsHeading}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-lg shadow-sm"
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-orange-100 rounded-full p-2 mr-3">
                          <Star className="w-5 h-5 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                      </div>
                      <p className="text-gray-700">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {service.faq.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        className={`w-full flex justify-between items-center text-left p-5 rounded-lg ${
                          activeIndex === index ? 'bg-orange-50 text-orange-700' : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                        } transition-colors duration-300`}
                      >
                        <span className="font-medium text-lg">{item.question}</span>
                        <div className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                          <ChevronRight className="w-5 h-5 rotate-90" />
                        </div>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="p-5 bg-white border border-gray-100 rounded-b-lg">
                          <p className="text-gray-700">{item.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Service Contact Card */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.callToAction}</h3>
                <p className="text-gray-600 mb-6">Contact our team today for expert advice and a free, no-obligation quote.</p>
                
                <div className="space-y-4 mb-6">
                  <Link 
                    href="/contact" 
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center font-medium py-3 px-4 rounded-lg shadow-md transition-colors duration-300"
                  >
                    Request a Quote
                  </Link>
                  
                  <Link 
                    href="tel:+447491565676" 
                    className="flex items-center justify-center w-full bg-white border border-gray-300 hover:border-orange-300 text-gray-800 text-center font-medium py-3 px-4 rounded-lg transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    +44 749 156 5676
                  </Link>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Service Coverage</h4>
                  <p className="text-gray-600 mb-4">We provide this service across the entire UK, with specialized teams in major cities.</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-3">Response Times</h4>
                  <p className="text-gray-600">Emergency: 2-4 hours<br />Standard: Next business day</p>
                </div>
              </div>
              
              {/* Related Services */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
                <div className="space-y-4">
                  {service.relatedServices.map((relatedServiceId, index) => {
                    const relatedService = servicesData[relatedServiceId];
                    if (!relatedService) return null;
                    
                    return (
                      <Link 
                        key={index}
                        href={`/services/${relatedServiceId}`}
                        className="flex items-center p-3 rounded-lg hover:bg-white group transition-colors duration-300"
                      >
                        <div className="bg-orange-100 rounded-full p-2 mr-3 group-hover:bg-orange-200 transition-colors duration-300">
                          {relatedService.icon || <Wrench className="w-5 h-5 text-orange-500" />}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{relatedService.title}</h4>
                          <p className="text-sm text-gray-500">Learn more</p>
                        </div>
                        <div className="ml-auto">
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors duration-300" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our team today for expert advice on your {service.title.toLowerCase()} needs
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="block bg-white hover:bg-gray-100 text-orange-600 font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-orange-700/20 transition-all duration-300">
                  Request a Free Quote
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="tel:+447491565676" className="block bg-orange-700 hover:bg-orange-800 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-orange-900/30 transition-all duration-300">
                  Call Us Now
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}