// pages/sitemap.tsx
import Seo from "@/components/Seo";
import { ArrowRight, Home, Zap } from "lucide-react";
import Link from "next/link";

export default function Sitemap() {
  return (
    <>
      <Seo
        title="Sitemap | Richy Electrical Services" 
        description="HTML sitemap for Richy Electrical Services. Find all pages, services, and contact information. London electricians directory."
        canonical="/sitemap"
      />
      <main className="max-w-6xl mx-auto px-4 py-16 bg-gray-50 ">
        <div className="text-center mb-12 pt-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Site Navigation
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find everything you need to know about our electrical services and company information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Core Pages Section */}
          <section className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="bg-orange-500 px-6 py-4">
              <h2 className="text-2xl font-semibold text-white flex items-center">
                <Home className="w-5 h-5 mr-2" />
                Core Pages
              </h2>
            </div>
            <ul className="p-6 space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Gallery" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy-policy", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.href} className="group">
                  <Link 
                    href={link.href}
                    className="flex items-center text-gray-700 hover:text-orange-500 transition-colors duration-200"
                  >
                    <ArrowRight className="mr-2 w-4 h-4 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Our Services Section */}
          <section className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="bg-orange-500 px-6 py-4">
              <h2 className="text-2xl font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Our Services
              </h2>
            </div>
            <ul className="p-6 space-y-3">
              {[
                { href: "/services/fuse-board-upgrades", label: "Fuse Board Upgrades" },
                { href: "/services/electrical-inspections", label: "Electrical Inspections" },
                { href: "/services/new-installations", label: "New Installations" },
                { href: "/services/fault-finding", label: "Fault Finding" },
                { href: "/services/garden-lighting", label: "Garden Lighting" },
                { href: "/services/rewiring", label: "Rewiring" },
                { href: "/services/emergency-services", label: "Emergency Services" },
              ].map((link) => (
                <li key={link.href} className="group">
                  <Link 
                    href={link.href}
                    className="flex items-center text-gray-700 hover:text-orange-500 transition-colors duration-200"
                  >
                    <ArrowRight className="mr-2 w-4 h-4 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Service Highlights */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Need Urgent Help?</h3>
          <Link 
            href="/services/emergency-services" 
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            <Zap className="w-5 h-5 mr-2" />
            Emergency Services
          </Link>
        </div>
      </main>
    </>
  );
}