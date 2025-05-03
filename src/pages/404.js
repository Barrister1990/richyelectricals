// pages/404.tsx
import Seo from "@/components/Seo";
import { ArrowLeft, Home, Search, Zap } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Example site structure for search functionality
const sitePages = [
  { path: "/", title: "Home - Richy Electrical Services" },
  { path: "/about", title: "About Us - Richy Electrical Services" },
  { path: "/contact", title: "Contact Us - Richy Electrical Services" },
  { path: "/gallery", title: "Gallery - Richy Electrical Services" },
  { path: "/faq", title: "FAQ - Richy Electrical Services" },
  { path: "/services/fuse-board-upgrades", title: "Fuse Board Upgrades - Richy Electrical Services" },
  { path: "/services/electrical-inspections", title: "Electrical Inspections - Richy Electrical Services" },
  { path: "/services/new-installations", title: "New Installations - Richy Electrical Services" },
  { path: "/services/fault-finding", title: "Fault Finding - Richy Electrical Services" },
  { path: "/services/garden-lighting", title: "Garden Lighting - Richy Electrical Services" },
  { path: "/services/rewiring", title: "Rewiring - Richy Electrical Services" },
  { path: "/services/emergency-services", title: "Emergency Services - Richy Electrical Services" },
  { path: "/privacy-policy", title: "Privacy Policy - Richy Electrical Services" },
  { path: "/sitemap", title: "HTML Sitemap - Richy Electrical Services" },
];

export default function Custom404() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [countdown, setCountdown] = useState(30);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Countdown timer effect
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 5000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Search functionality
  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    
    // Simple search implementation
    const query = searchQuery.toLowerCase();
    const results = sitePages.filter(page => 
      page.title.toLowerCase().includes(query) || 
      page.path.toLowerCase().includes(query)
    );
    
    setSearchResults(results);
    setIsSearching(false);
  };

  // Handle enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Navigate to the first search result
  const goToFirstResult = () => {
    if (searchResults.length > 0) {
      router.push(searchResults[0].path);
    }
  };

  // Popular links to suggest
  const suggestedLinks = [
    { href: "/", label: "Home" },
    { href: "/services/emergency-services", label: "Emergency Services" },
    { href: "/contact", label: "Contact Us" },
    { href: "/services/fuse-board-upgrades", label: "Fuse Board Upgrades" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <>
      <Seo
        title="Page Not Found - Richy Electrical Services"
        description="Sorry, the page you're looking for doesn't exist. Explore our website to find what you need."
        canonical="https://richyelectricals.co.uk/404"
        
      />

<Head>
       <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg overflow-hidden pt-24">
          {/* Header with illustration */}
          <div className="bg-orange-500 p-8 text-center relative overflow-hidden pt-18">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg width="400" height="400" viewBox="0 0 100 100">
                  <path d="M20,50 L80,50 M50,20 L50,80" stroke="white" strokeWidth="8" strokeLinecap="round"/>
                  <path d="M20,20 L80,80 M80,20 L20,80" stroke="white" strokeWidth="8" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white relative z-10">404</h1>
            <p className="text-orange-100 mt-2 text-lg relative z-10">Oops! We couldn&apos;t find that page</p>
          </div>

          {/* Content area */}
          <div className="p-8">
            <div className="mb-8 text-center">
              <p className="text-gray-600">
                The page you&apos;re looking for might have been moved, deleted, or never existed.
              </p>
              <p className="text-gray-600 mt-2">
                You&apos;ll be redirected to our homepage in <span className="font-semibold text-orange-500">{countdown}</span> seconds or choose from the options below:
              </p>
            </div>

            {/* Search Box */}
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="What were you looking for?"
                className="block w-full pl-10 pr-24 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-gray-50 text-gray-900"
              />
              <button
                className="absolute inset-y-0 right-0 flex items-center px-4 text-orange-500 font-medium hover:text-orange-600"
                onClick={handleSearch}
                disabled={isSearching}
              >
                {isSearching ? "Searching..." : "Search"}
              </button>
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="mb-8 bg-orange-50 rounded-lg p-4 border border-orange-100">
                <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                  <Search className="h-4 w-4 mr-2 text-orange-500" />
                  Search Results
                </h3>
                <ul className="space-y-2">
                  {searchResults.map((result, index) => (
                    <li key={index}>
                      <Link 
                        href={result.path}
                        className="text-orange-600 hover:text-orange-800 flex items-center"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        {result.title.replace(' - Richy Electrical Services', '')}
                      </Link>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={goToFirstResult}
                  className="mt-3 text-sm text-white bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded transition-colors duration-200"
                >
                  Go to first result
                </button>
              </div>
            )}

            {searchQuery && searchResults.length === 0 && !isSearching && (
              <div className="mb-8 bg-gray-50 rounded-lg p-4 border border-gray-200 text-center">
                <p className="text-gray-600">No results found for &apos;{searchQuery}&apos;</p>
                <p className="text-sm text-gray-500 mt-1">Try different keywords or check out our popular pages below.</p>
              </div>
            )}

            {/* Quick Links */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Popular pages</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {suggestedLinks.map((link) => (
                  <Link 
                    href={link.href} 
                    key={link.href}
                    className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-orange-50 hover:border-orange-200 transition duration-200"
                  >
                    {link.href === "/" ? (
                      <Home className="h-5 w-5 mr-2 text-orange-500" />
                    ) : link.href === "/services/emergency-services" ? (
                      <Zap className="h-5 w-5 mr-2 text-orange-500" />
                    ) : (
                      <ArrowLeft className="h-5 w-5 mr-2 text-orange-500" />
                    )}
                    <span className="text-gray-700">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Call to action */}
            <div className="text-center">
              <Link 
                href="/" 
                className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-200"
              >
                <Home className="h-5 w-5 mr-2" />
                Back to Homepage
              </Link>
            </div>

            {/* Auto-redirect script */}
            {countdown === 0 && (
              <div className="hidden">
                {typeof window !== "undefined" && window.location.replace("/")}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}