// components/TrustSignals.js
import { Award, CheckCircle, Shield, Users } from 'lucide-react';

export default function TrustSignals() {
  const trustSignals = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "NICEIC Certified",
      description: "Fully certified and approved electrical contractors",
      highlight: true
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "15+ Years Experience",
      description: "Serving London and West Midlands since 2010",
      highlight: false
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Fully Insured",
      description: "£10 million public liability insurance",
      highlight: false
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "60+ Certified Engineers",
      description: "Expert team of qualified electricians",
      highlight: false
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Trust Richy Electrical Services?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re committed to providing the highest quality electrical services with complete peace of mind.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustSignals.map((signal, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ${
                signal.highlight ? 'border-2 border-orange-500' : ''
              }`}
            >
              <div className={`inline-flex p-3 rounded-full mb-4 ${
                signal.highlight 
                  ? 'bg-orange-100 text-orange-600' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {signal.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {signal.title}
              </h3>
              <p className="text-gray-600">
                {signal.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              18th Edition Certified
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              City & Guilds Qualified
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Building Regulations Part P
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              EAL Level 3 Diploma
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

