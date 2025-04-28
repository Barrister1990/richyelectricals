import { motion } from 'framer-motion';
import { AlertTriangle, Briefcase, ChevronRight, FileText, Info, Phone, Scale, Shield } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <Head>
        <title>Terms and Conditions | Richy Electricals</title>
        <meta name="description" content="Terms and conditions for using Richy Electricals services, applicable across our UK and Ghana operations." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Banner */}
      <section className="relative w-full h-[60vh] flex items-center overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10">
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        </div>
        
        {/* Animated shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="absolute w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"
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
        
        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Terms and Conditions</h1>
              <p className="text-lg text-gray-300">The terms governing our services worldwide</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 lg:px-8 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">Terms and Conditions</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8 lg:p-10">
              {/* Introduction */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FileText className="w-6 h-6 text-blue-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Welcome to Richy Electricals. These Terms and Conditions (Terms) govern your use of our website and services provided by Richy Electricals, whether through our UK or Ghana operations, or elsewhere globally.
                </p>
                <p className="text-gray-700 mb-4">
                  By accessing our website or using our services, you agree to be bound by these Terms. If you disagree with any part of these Terms, please do not use our website or services.
                </p>
                <p className="text-gray-700">
                  Last updated: April 25, 2025
                </p>
              </div>

              {/* Definitions */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Info className="w-6 h-6 text-purple-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Definitions</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  For the purpose of these Terms:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li><strong>Company</strong>, We, Us, or Our refers to Richy Electricals, with operations in both the UK and Ghana.</li>
                  <li><strong>Services</strong> refers to all electrical services, generator sales, repairs, maintenance, and other related services provided by Richy Electricals.</li>
                  <li><strong>Website</strong> refers to the Richy Electricals website, accessible from www.richyelectricals.com.</li>
                  <li><strong>You</strong> refers to the individual or entity accessing the website or using our services.</li>
                  <li><strong>Terms</strong> refers to these Terms and Conditions that form the entire agreement between You and the Company regarding the use of our services.</li>
                </ul>
              </div>

              {/* Services */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Services</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Richy Electricals provides electrical engineering services, generator sales, repairs, and maintenance to clients in the UK, Ghana, and worldwide. All services are subject to the following conditions:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>All services are provided in accordance with the relevant regulations and industry standards applicable in the country of service delivery.</li>
                  <li>Service descriptions, including timelines and specifications, are provided as accurately as possible but may be subject to change based on site conditions, availability of parts, or other factors outside our control.</li>
                  <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
                  <li>We may offer services through third-party contractors or partners who are subject to the same quality standards and requirements.</li>
                </ul>
              </div>

              {/* Quotes, Pricing and Payment */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Quotes, Pricing and Payment</h2>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quotes and Estimates</h3>
                <p className="text-gray-700 mb-4">
                  The following terms apply to all quotes, pricing, and payment:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>All quotes provided are valid for 30 days unless otherwise specified.</li>
                  <li>Prices are subject to change without notice, except for confirmed orders with signed contracts.</li>
                  <li>Payment terms are 50% deposit upon order confirmation and the remaining 50% upon completion, unless alternative arrangements have been agreed in writing.</li>
                  <li>For UK clients, all prices are quoted in GBP and are inclusive of VAT, unless otherwise stated.</li>
                  <li>For Ghana clients, all prices are quoted in GHS or USD and are inclusive of all applicable taxes.</li>
                  <li>Late payments are subject to interest charges at the rate of 2% per month or the maximum allowed by law.</li>
                </ul>
              </div>

              {/* Warranties and Guarantees */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Shield className="w-6 h-6 text-red-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Warranties and Guarantees</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Richy Electricals is committed to providing high-quality services and products. Our warranties and guarantees are as follows:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>All workmanship is guaranteed for a period of 12 months from the date of completion.</li>
                  <li>Products and parts supplied by Richy Electricals carry their manufacturers warranty, details of which will be provided at the time of purchase.</li>
                  <li>Warranties do not cover damage caused by improper use, accidents, unauthorized repairs, or natural disasters.</li>
                  <li>To claim under warranty, you must provide proof of purchase and notify us of any defects in writing within 7 days of discovery.</li>
                  <li>Our liability is limited to the repair or replacement of defective parts or workmanship and does not extend to consequential losses.</li>
                </ul>
              </div>

              {/* Cancellations and Refunds */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <AlertTriangle className="w-6 h-6 text-orange-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Cancellations and Refunds</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Our cancellation and refund policy is designed to be fair to all parties:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Cancellations must be made in writing at least 48 hours before the scheduled service.</li>
                  <li>For cancellations made with less than 48 hours notice, a cancellation fee of 25% of the quoted price may apply.</li>
                  <li>For product orders, cancellations must be made before the order is processed or shipped. Custom orders cannot be cancelled once production has begun.</li>
                  <li>Refunds for services will be issued only if the service has not been performed or materials have not been ordered.</li>
                  <li>Refunds for products are subject to a 15% restocking fee and will only be issued if the product is returned in its original, unopened packaging.</li>
                  <li>All refunds will be processed within 14 business days using the original payment method.</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <Briefcase className="w-6 h-6 text-indigo-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Intellectual Property</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  The intellectual property rights related to our services and website are protected as follows:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>All content on our website, including text, graphics, logos, images, and software, is the property of Richy Electricals and is protected by copyright and other intellectual property laws.</li>
                  <li>You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.</li>
                  <li>Any feedback, suggestions, or ideas provided by you regarding our services may be used by us without any obligation to compensate you.</li>
                  <li>The Richy Electricals name, logo, and brand elements are trademarks and may not be used without written permission.</li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <Scale className="w-6 h-6 text-teal-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  By using our services, you acknowledge and agree to the following limitations of liability:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>To the maximum extent permitted by applicable law, Richy Electricals shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</li>
                  <li>Our total liability for any claim arising out of or relating to these Terms or our services shall not exceed the amount paid by you for the specific service giving rise to such claim.</li>
                  <li>We do not guarantee uninterrupted, secure, or error-free operation of our services or website.</li>
                  <li>We are not liable for any delays or failures in performance due to circumstances beyond our reasonable control.</li>
                  <li>These limitations shall apply to any theory of liability, whether based on warranty, contract, statute, tort, or otherwise.</li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-pink-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">UK Office</h3>
                    <p className="text-gray-700 mb-2">115 Butts Road, Walsall
                    West Midlands, WS4 2BL</p>
                    <p className="text-gray-700 mb-2">London</p>
                    <p className="text-gray-700 mb-2">United Kingdom</p>
                    <p className="text-gray-700 mb-2">Phone: +44 123 456 789</p>
                    <p className="text-gray-700">Email: info@richyelectricals.co.uk</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Ghana Office</h3>
                    <p className="text-gray-700 mb-2">Regimanuel estate balloon gate 4th link house 9</p>
                    <p className="text-gray-700 mb-2">Accra</p>
                    <p className="text-gray-700 mb-2">Ghana</p>
                    <p className="text-gray-700 mb-2">Phone: +233 020 922 2856</p>
                    <p className="text-gray-700">Email: info@richyelectricals.co.uk</p>
                  </div>
                </div>
              </div>

              {/* Governing Law */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Scale className="w-6 h-6 text-blue-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Governing Law</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  These Terms shall be governed by and construed in accordance with the following:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>For services provided in the UK, these Terms shall be governed by and construed in accordance with the laws of England and Wales.</li>
                  <li>For services provided in Ghana, these Terms shall be governed by and construed in accordance with the laws of Ghana.</li>
                  <li>For services provided elsewhere, the governing law shall be determined according to applicable international law principles.</li>
                  <li>Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in the respective country where services were provided.</li>
                </ul>
              </div>

              {/* Changes to Terms */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Changes to Terms</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify these Terms at any time. When we make changes:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>We will update the Last Updated date at the top of these Terms.</li>
                  <li>We may notify you via email or by posting a notice on our website.</li>
                  <li>Your continued use of our services after the changes constitutes acceptance of the updated Terms.</li>
                  <li>We encourage you to review these Terms periodically to stay informed of any changes.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

 
    </div>
  );
}