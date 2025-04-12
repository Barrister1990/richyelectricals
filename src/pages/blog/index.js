import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  // Blog article data - this would typically come from a CMS or API
  const blogPosts = [
    {
      id: 1,
      title: "5 Signs Your Generator Needs Maintenance",
      date: "April 2, 2025",
      excerpt:
        "Learn the warning signs that indicate your generator requires professional attention before it fails when you need it most.",
      image: "/generator-maintain.jpg",
      slug: "generator-maintenance-signs",
      category: "Maintenance",
    },
    {
      id: 2,
      title: "Understanding Commercial Electrical Compliance",
      date: "March 25, 2025",
      excerpt:
        "A guide to electrical regulations and compliance requirements for UK businesses and commercial properties.",
      image: "/electrical-complaince.jpg",
      slug: "commercial-electrical-compliance",
      category: "Compliance",
    },
    {
      id: 3,
      title: "Renewable Energy Solutions for Business",
      date: "March 15, 2025",
      excerpt:
        "Explore how businesses can benefit from integrating renewable energy sources into their electrical systems.",
      image: "/solar-panel.jpg",
      slug: "renewable-energy-business-solutions",
      category: "Renewable Energy",
    },
    {
      id: 4,
      title: "How to Choose the Right Generator for Your Business",
      date: "March 5, 2025",
      excerpt:
        "Key factors to consider when selecting a generator that meets your business's specific power requirements.",
      image: "/choose-gen.jpg",
      slug: "choosing-business-generator",
      category: "Generators",
    },
    {
      id: 5,
      title: "Electrical Safety Tips for Your Workplace",
      date: "February 28, 2025",
      excerpt:
        "Essential electrical safety practices that every business should implement to protect employees and equipment.",
      image: "/api/placeholder/800/400",
      slug: "workplace-electrical-safety",
      category: "Safety",
    },
    {
      id: 6,
      title: "The Benefits of Regular Electrical Maintenance",
      date: "February 18, 2025",
      excerpt:
        "Why preventative electrical maintenance is crucial for the longevity and safety of your electrical systems.",
      image: "/api/placeholder/800/400",
      slug: "regular-electrical-maintenance-benefits",
      category: "Maintenance",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Blog | Richy Electricals</title>
        <meta
          name="description"
          content="Latest news, tips and insights on electrical engineering, generator maintenance, and energy solutions from Richy Electricals."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10">
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Electrical Insights & Tips
              </h1>
              <p className="text-lg text-gray-200 mb-8">
                Stay updated with the latest electrical engineering news,
                maintenance tips, and industry insights from our expert team.
              </p>
              <Link
                href="/"
                className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium transition-colors"
              >
                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <div className="h-1 w-20 bg-orange-500"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-medium bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 ml-4">
                      {post.date}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
                  >
                    Read more <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="inline-flex items-center">
              <a
                href="#"
                className="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="px-3 py-1 border-t border-b border-gray-300 bg-orange-50 text-orange-600 font-medium"
              >
                1
              </a>
              <a
                href="#"
                className="px-3 py-1 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="px-3 py-1 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
              >
                3
              </a>
              <span className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-500">
                ...
              </span>
              <a
                href="#"
                className="px-3 py-1 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
              >
                8
              </a>
              <a
                href="#"
                className="px-3 py-1 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
              >
                Next
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Get the latest electrical tips, industry news, and special offers
              delivered to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                placeholder="Your email address"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
