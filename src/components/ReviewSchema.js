// components/ReviewSchema.js
import Head from 'next/head';

export default function ReviewSchema({ reviews, aggregateRating }) {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.richyelectricals.co.uk/#organization",
    "name": "Richy Electrical Services",
  };

  // Add aggregate rating if provided
  if (aggregateRating) {
    reviewSchema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": aggregateRating.bestRating || "5",
      "worstRating": aggregateRating.worstRating || "1"
    };
  }

  // Add individual reviews
  if (reviews && reviews.length > 0) {
    reviewSchema.review = reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author || "Customer"
      },
      "datePublished": review.datePublished || new Date().toISOString(),
      "reviewBody": review.reviewBody,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.ratingValue,
        "bestRating": review.bestRating || "5",
        "worstRating": review.worstRating || "1"
      }
    }));
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </Head>
  );
}

