// src/components/JsonLd.tsx
import Script from "next/script";

export default function JsonLd({
  data,
  id,
}: {
  data: Record<string, any>;
  id: string;
}) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
