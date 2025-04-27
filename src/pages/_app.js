import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
export default function App({ Component, pageProps }) {
  const [backgroundImage, setBackgroundImage] = useState('');
  const router = useRouter();
  
  // Define your background images
  const bgImages = [
    '/bg/bg1.jpeg',
    '/bg/bg2.png',
    '/bg/bg3.png',
    '/bg/bg4.png',
    '/bg/bg5.png',
    '/bg/bg6.jpeg',
    '/bg/bg7.jpeg',
    '/bg/bg8.png',
    '/bg/bg9.png',
    '/bg/bg10.png',
    '/bg/bg11.png',
    '/bg/bg12.png',
    '/bg/bg13.png',
    // Add more images as needed
  ];
  
  // Function to set a random background
  const setRandomBackground = () => {
    const randomImage = bgImages[Math.floor(Math.random() * bgImages.length)];
    setBackgroundImage(randomImage);
  };
  
  useEffect(() => {
    // Set initial background
    setRandomBackground();
    
    // Change background on route change
    const handleRouteChange = () => {
      setRandomBackground();
    };
    
    // Subscribe to router events
    router.events.on('routeChangeComplete', handleRouteChange);
    
    // Clean up the event listener when component unmounts
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  
  // Create a style object for the watermark effect
  const modernBoxPattern = backgroundImage ? {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: '200px 200px', // Size of each repeated box
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    backgroundBlendMode: 'overlay',
    opacity: 0.05, // Subtle watermark effect
  } : {};

  return (
    <div className="w-full overflow-x-hidden">
       <Head>
  {/* Schema for Organization */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Richyelectricals UK",
      "url": "https://www.richyelectricals.co.uk",
      "logo": "https://www.richyelectricals.co.uk/logo.jpg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+447491565676",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.facebook.com/richyelectricalsgh",
        "https://https://www.instagram.com/richyelectricalservices?igsh=Z2I5eXdoMWgwNHAw&utm_source=qr"
      ]
    })
  }} />

  {/* Schema for Website with Search Action */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://www.richyelectricals.co.uk",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.richyelectricals.co.uk/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    })
  }} />

  {/* Schema for Site Navigation */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      "name": [
        "Home",
        "About",
        "Services",
        "Gallery",
        "FAQ",
        "Contact"
      ],
      "url": [
        "https://www.richyelectricals.co.uk/",
        "https://www.richyelectricals.co.uk/about",
        "https://www.richyelectricals.co.uk/services",
        "https://www.richyelectricals.co.uk/gallery",
        "https://www.richyelectricals.co.uk/faq",
        "https://www.richyelectricals.co.uk/contact"
      ]
    })
  }} />
</Head>
      <Navbar />
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={modernBoxPattern}
      ></div>
      <main className="w-full relative z-10">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}