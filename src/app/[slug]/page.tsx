// src/app/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BUSINESSES } from "@/data/businesses";
import BusinessCard from "@/components/BusinessCard";
import JsonLd from "@/components/JsonLd";

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
      <BusinessCard biz={biz} />
    </main>
  );
}
