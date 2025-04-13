import { motion } from "framer-motion";
import {
  Award,
  ChevronRight,
  Clock,
  Globe,
  MapPin,
  Phone,
  Power,
  Settings,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  // For counting animation
  const [counting, setCounting] = useState(false);

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
    }, [counting, end, duration]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <div className="min-h-screen pt-24">
      <Head>
        <title>Richy Electricals | UK Electrical Engineering Solutions</title>
        <meta
          name="description"
          content="Expert electrical engineering services and generator solutions across the United Kingdom."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
              <span className="text-orange-500">Across the UK</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Specializing in generator repairs, sales, and comprehensive
              electrical services with expert teams covering all regions of the
              United Kingdom.
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
                  href="tel:+1234567890"
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

      {/* UK Presence Section */}
      <section className="py-16 bg-gray-900 text-white animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
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
                <p className="text-gray-300">Central London, UK</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center"
            >
              <MapPin className="w-8 h-8 text-orange-500 mr-3" />
              <div>
                <h3 className="text-xl font-bold">Manchester Office</h3>
                <p className="text-gray-300">North England</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center"
            >
              <Globe className="w-8 h-8 text-orange-500 mr-3" />
              <div>
                <h3 className="text-xl font-bold">Nationwide Coverage</h3>
                <p className="text-gray-300">Serving All UK Regions</p>
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
                Comprehensive electrical solutions delivered throughout the
                United Kingdom by our team of certified professionals.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Power className="w-10 h-10 text-orange-500" />,
                title: "Generator Repairs",
                description:
                  "Expert diagnosis and repair of all generator types and brands, with fast response times across the UK.",
                link: "/services#generator-repairs",
              },
              {
                icon: <Zap className="w-10 h-10 text-orange-500" />,
                title: "Generator Sales",
                description:
                  "Quality new and reconditioned generators for residential, commercial and industrial use throughout Britain.",
                link: "/services#generator-sales",
              },
              {
                icon: <Settings className="w-10 h-10 text-orange-500" />,
                title: "Electrical Installations",
                description:
                  "Professional installation of electrical systems for homes and businesses across England, Scotland, and Wales.",
                link: "/services#installations",
              },
              {
                icon: <Wrench className="w-10 h-10 text-orange-500" />,
                title: "Maintenance Services",
                description:
                  "Preventative maintenance programs for clients throughout the UK, from London to Edinburgh.",
                link: "/services#maintenance",
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-orange-500" />,
                title: "Safety Inspections",
                description:
                  "Comprehensive electrical safety checks and certifications meeting all UK regulatory standards.",
                link: "/services#safety",
              },
              {
                icon: <Clock className="w-10 h-10 text-orange-500" />,
                title: "Emergency Call-outs",
                description:
                  "24/7 emergency electrical assistance with rapid response teams stationed throughout the UK.",
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
                <img
                  src="/atwork.jpg"
                  alt="Richy Electricals engineers at work"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 z-20">
                <div className="flex items-center">
                  <div className="bg-orange-500 rounded-full p-2 mr-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Projects in</p>
                    <p className="font-bold text-gray-900">All UK Regions</p>
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
                UK Electrical Engineering Experts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of experience across the United Kingdom,
                Richy Electricals has built a reputation for excellence,
                reliability, and exceptional service throughout Britain.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of certified electrical engineers specializes in
                generator repairs and sales, providing high-quality solutions
                tailored to UK standards and regulations.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Headquarters in London with regional offices across the UK",
                  "Nationwide team of certified electrical engineers",
                  "Projects completed throughout England, Scotland, Wales and Northern Ireland",
                  "Equipment sourced from trusted British and European suppliers",
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
              { value: 3000, suffix: "+", label: "UK Projects Completed" },
              { value: 25, suffix: "+", label: "UK Counties Served" },
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
                    Contact our UK office today for a free consultation and
                    quote. Our team of British experts is ready to help with all
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
                      Call Us: +44 123 456 789
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners/Certifications Section */}
      <section className="py-16 border-t border-gray-200 animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Our UK Partners & Certifications
            </h2>
            <p className="text-gray-600">
              Trusted by leading British brands and organizations
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="bg-gray-200 h-16 w-32 rounded flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">
                    UK Partner {item}
                  </span>
                </div>
              </motion.div>
            ))}
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
                Find answers to common questions about our UK electrical
                services
              </p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Where are your UK operations located?",
                answer:
                  "Our main headquarters is in London with regional offices in Manchester and Birmingham, allowing us to efficiently serve clients throughout England, Scotland, Wales, and Northern Ireland.",
              },
              {
                question: "Do you handle installation across the entire UK?",
                answer:
                  "Yes, we handle installation, logistics, and on-site commissioning for all our electrical equipment across the entire United Kingdom. Our strategically positioned teams enable us to provide responsive service nationwide.",
              },
              {
                question:
                  "Are your electrical engineers certified for UK work?",
                answer:
                  "All our electrical engineers are fully certified and licensed to work in the UK. We comply with all British electrical standards and regulations, including BS 7671 (IET Wiring Regulations).",
              },
              {
                question:
                  "What types of generators do you repair and sell in the UK?",
                answer:
                  "We repair and sell a wide range of generators suitable for UK power standards, including diesel, petrol, gas, and renewable energy generators for residential, commercial, and industrial applications across Britain.",
              },
              {
                question:
                  "How quickly can you respond to emergencies in the UK?",
                answer:
                  "We provide 24/7 emergency support with technicians strategically located throughout the UK. For most areas, we aim to respond within 2-4 hours, and we maintain emergency response teams in all major cities.",
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

      {/* Contact Section */}
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
                consultation? Our UK team is here to help with all your
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
                      123 Electric Avenue, London, UK, EC1A 1BB
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
                    <p className="text-gray-600">+44 123 456 789</p>
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
                    <p className="text-gray-600">info@richyelectricals.co.uk</p>
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
              className="bg-white rounded-xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Tell us about your electrical needs..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-300"
                  type="submit"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
