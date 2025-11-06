// components/FaqSchema.js
import Head from 'next/head';

export default function FaqSchema({ faqs }) {
  // Ensure faqs is an array
  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) {
    return null;
  }

  // Transform FAQ data into schema.org format
  const mainEntity = faqs.map((faq, index) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mainEntity
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </Head>
  );
}

