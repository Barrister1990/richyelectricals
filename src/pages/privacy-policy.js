import { motion } from 'framer-motion';
import { ChevronRight, Eye, FileText, Globe, Lock, Phone, Shield } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <Head>
        <title>Privacy Policy | Richy Electricals</title>
        <meta name="description" content="Our commitment to protecting your privacy and personal data at Richy Electricals." />
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
            className="absolute w-64 h-64 rounded-full bg-orange-500/10 blur-3xl"
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
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-lg text-gray-300">Our commitment to protecting your personal information</p>
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
            <span className="text-gray-900 font-medium">Privacy Policy</span>
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
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Lock className="w-6 h-6 text-orange-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  At Richy Electricals, we are committed to protecting your privacy and the security of your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-gray-700 mb-4">
                  This policy applies to information we collect through our website, in email, text, or other electronic communications, and through our services provided both in the UK, Ghana, and worldwide.
                </p>
                <p className="text-gray-700">
                  Last updated: April 12, 2025
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FileText className="w-6 h-6 text-blue-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Information</h3>
                <p className="text-gray-700 mb-4">
                  We may collect personally identifiable information, such as:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Name, email address, telephone number, and postal address</li>
                  <li>Business information if you represent a company or organization</li>
                  <li>Payment information (though payment card details are processed securely by our payment processors)</li>
                  <li>Service history and preferences for returning customers</li>
                  <li>Location information when you request on-site services</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Usage Information</h3>
                <p className="text-gray-700 mb-4">
                  We may automatically collect certain information about how you interact with our website:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>IP address and browser type</li>
                  <li>Device information</li>
                  <li>Pages viewed and time spent on our website</li>
                  <li>Referring website or source</li>
                  <li>Geographic location (country/region level)</li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Eye className="w-6 h-6 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  We may use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Providing, maintaining, and improving our services</li>
                  <li>Processing and fulfilling your service requests</li>
                  <li>Sending you service confirmations, updates, and support messages</li>
                  <li>Responding to your comments, questions, and requests</li>
                  <li>Sending you technical notices, updates, security alerts, and administrative messages</li>
                  <li>Providing customer service and support</li>
                  <li>Monitoring and analyzing trends, usage, and activities in connection with our services</li>
                  <li>Personalizing your experience on our website</li>
                  <li>Communicating with you about products, services, offers, promotions, and events</li>
                  <li>Protecting against, identifying, and preventing fraud and other illegal activity</li>
                </ul>
              </div>

              {/* Data Sharing and Disclosure */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Globe className="w-6 h-6 text-purple-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Data Sharing and Disclosure</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  We may share your personal information in the following situations:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services on our behalf.</li>
                  <li><strong>International Operations:</strong> As a company with operations in both the UK and Ghana, some of your information may be transferred between our global offices when necessary to fulfill our services.</li>
                  <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                  <li><strong>Protection:</strong> We may disclose your information to protect the rights, property, or safety of Richy Electricals, our customers, or others.</li>
                </ul>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">International Data Transfers</h3>
                <p className="text-gray-700 mb-4">
                  Given our operations in both the UK and Ghana, your personal information may be processed in either country. We ensure that appropriate safeguards are in place to protect your information when transferred internationally, in compliance with applicable data protection laws including the UK GDPR and Ghana Data Protection Act.
                </p>
              </div>

              {/* Your Rights and Choices */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <Shield className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Your Rights and Choices</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Access to the personal information we hold about you</li>
                  <li>Correction of inaccurate or incomplete information</li>
                  <li>Deletion of your personal information in certain circumstances</li>
                  <li>Restriction of processing of your personal information</li>
                  <li>Data portability to transfer your information to another service</li>
                  <li>Objection to how we use your information for certain purposes</li>
                  <li>Withdrawal of consent at any time (where we rely on consent to process your information)</li>
                </ul>
                <p className="text-gray-700">
                  To exercise these rights, please contact us using the details provided in the Contact Us section below.
                </p>
              </div>

              {/* Cookies and Tracking Technologies */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-4.5-8.5L3 15"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Cookies and Tracking Technologies</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
                </p>
                <p className="text-gray-700 mb-4">
                  We use the following types of cookies:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
                  <li><strong>Analytical/Performance Cookies:</strong> Allow us to recognize and count visitors and see how they move around our website.</li>
                  <li><strong>Functionality Cookies:</strong> Used to recognize you when you return to our website.</li>
                  <li><strong>Targeting Cookies:</strong> Record your visit to our website, the pages you visit, and the links you follow.</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
                </p>
              </div>

              {/* Data Security */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  We have implemented appropriate technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
                <p className="text-gray-700">
                  We regularly review and update our security practices to enhance protection of your information.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Childrens Privacy</h2>
                </div>
                <p className="text-gray-700">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can take necessary actions.
                </p>
              </div>

              {/* Changes to This Privacy Policy */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Changes to This Privacy Policy</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the Last Updated date at the top of this page.
                </p>
                <p className="text-gray-700">
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>

              {/* Contact Us */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">UK Office:</h4>
                    <p className="text-gray-700">1115 Butts Road, Walsall West Midlands, WS4 2BL</p>
                    <p className="text-gray-700">London, EC1A 1BB</p>
                    <p className="text-gray-700">United Kingdom</p>
                    <p className="text-gray-700 mt-2">Phone: +44 123 456 789</p>
                    <p className="text-gray-700">Email: info@richyelectricals.co.uk</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Ghana Office:</h4>
                    <p className="text-gray-700">Regimanuel estate balloon gate 4th link house 9</p>
                    <p className="text-gray-700">Accra</p>
                    <p className="text-gray-700">Ghana</p>
                    <p className="text-gray-700 mt-2">Phone: +233 20 922 2856</p>
                    <p className="text-gray-700">Email: info@richyelectricals.co.uk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Need Further Assistance?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Our team is ready to answer any questions you may have about our privacy practices.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
                  Contact Us
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/terms-of-service" className="inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-3 px-8 rounded-full border border-white/30 transition-all duration-300">
                  Terms & Conditions
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}