// src/components/JsonLd.tsx
import Script from "next/script";

type JsonLdProps = {
  id: string;
  // JSON-LD verisi serileştirilebilir olmalı; any yerine unknown/Record kullan
  data: Record<string, unknown>;
};

export default function JsonLd({ id, data }: JsonLdProps) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
