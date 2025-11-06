// components/HowToSchema.js
import Head from 'next/head';

export default function HowToSchema({ 
  name, 
  description, 
  steps,
  totalTime,
  estimatedCost,
  tool,
  supply
}) {
  if (!name || !description || !steps || steps.length === 0) {
    return null;
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name || step.title,
      "text": step.text || step.description,
      "image": step.image || undefined,
      "url": step.url || undefined
    }))
  };

  // Add optional properties
  if (totalTime) {
    howToSchema.totalTime = totalTime;
  }

  if (estimatedCost) {
    howToSchema.estimatedCost = {
      "@type": "MonetaryAmount",
      "currency": "GBP",
      "value": estimatedCost
    };
  }

  if (tool && tool.length > 0) {
    howToSchema.tool = tool.map(t => ({
      "@type": "HowToTool",
      "name": t
    }));
  }

  if (supply && supply.length > 0) {
    howToSchema.supply = supply.map(s => ({
      "@type": "HowToSupply",
      "name": s
    }));
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </Head>
  );
}

