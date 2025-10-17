// src/app/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BUSINESSES } from "@/data/businesses";
import BusinessCard from "@/components/BusinessCard";
import JsonLd from "@/components/JsonLd";
import VerifyBadge from "@/components/VerifyBadge";

type PageProps = { params: { slug: string } };

export async function generateStaticParams() {
  return Object.keys(BUSINESSES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const biz = BUSINESSES[params.slug];
  if (!biz) return { title: "KartvizitUp" };

  return {
    title: `${biz.name} | KartvizitUp`,
    description: biz.tagline ?? biz.description ?? "KartvizitUp profili",
    openGraph: {
      title: `${biz.name} | KartvizitUp`,
      description: biz.tagline ?? biz.description ?? "KartvizitUp profili",
      url: `https://kartvizitup.com/${biz.slug}`,
      siteName: "KartvizitUp",
      images: [biz.coverImage ?? "/og.svg"],
      type: "website",
    },
  };
}

export default function BusinessPage({ params }: PageProps) {
  const biz = BUSINESSES[params.slug];
  if (!biz) return notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: biz.name,
    url: `https://kartvizitup.com/${biz.slug}`,
    address: biz.address,
    telephone: biz.phone,
    image: biz.coverImage,
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <JsonLd id="biz-schema" data={schema} />

      {/* Başlık ve doğrulama rozeti */}
      <header className="mb-6">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          {biz.name}
          <VerifyBadge status={biz.verificationStatus ?? "unverified"} />
        </h1>

        {biz.tursabNumber && (
          <p className="text-xs text-white/60">
            TÜRSAB No: <span className="font-mono">{biz.tursabNumber}</span>
          </p>
        )}
      </header>

      <BusinessCard biz={biz} />
    </main>
  );
}
