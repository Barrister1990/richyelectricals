// components/VideoSchema.js
import Head from 'next/head';

export default function VideoSchema({ videos }) {
  if (!videos || !Array.isArray(videos) || videos.length === 0) {
    return null;
  }

  // Create VideoObject schema for each video
  const videoSchemas = videos
    .filter(video => video.type === 'video' && video.media)
    .map((video, index) => ({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": video.title || `Electrical Project Video ${index + 1}`,
      "description": video.description || `Professional electrical work by Richy Electrical Services in ${video.location || 'London'}`,
      "thumbnailUrl": video.thumbnail || "https://www.richyelectricals.co.uk/images/logo.jpg",
      "uploadDate": video.date || new Date().toISOString(),
      "contentUrl": `https://www.richyelectricals.co.uk/${video.media}`,
      "embedUrl": `https://www.richyelectricals.co.uk/${video.media}`,
      "duration": video.duration || "PT5M",
      "publisher": {
        "@type": "Organization",
        "name": "Richy Electrical Services",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.richyelectricals.co.uk/images/logo.jpg"
        }
      }
    }));

  if (videoSchemas.length === 0) {
    return null;
  }

  // If only one video, return single schema
  if (videoSchemas.length === 1) {
    return (
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchemas[0]) }}
        />
      </Head>
    );
  }

  // If multiple videos, return VideoObject array
  return (
    <Head>
      {videoSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}

