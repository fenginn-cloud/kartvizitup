// src/data/businesses.ts
import type { Business } from "@/types/business";

export const BUSINESSES: Record<string, Business> = {
  "hidden-garden": {
    slug: "hidden-garden",
    name: "Hidden Garden Bungalov",
    tagline: "Doğayla iç içe konaklama deneyimi",
    description:
      "Sapanca'da sessiz, huzurlu ve modern bungalovlarımızda konaklama. Özel jakuzili seçenekler.",
    address: "Sapanca, Sakarya",
    locationUrl: "https://maps.google.com/?q=Sapanca+Hidden+Garden",
    phone: "+905551112233",
    whatsapp: "+905551112233",
    email: "rezervasyon@hiddengarden.com",
    checkIn: "14:00",
    checkOut: "11:00",
    tursabNumber: "A-12345",
    verificationStatus: "verified",
    verification: [
      {
        source: "tursab",
        reference: "A-12345",
        proofUrl: "https://www.tursab.org.tr/",
        checkedBy: "admin@kartvizitup.com",
        checkedAt: new Date().toISOString(),
        notes: "TÜRSAB doğrulaması yapıldı."
      },
      {
        source: "savibu",
        reference: "SAVIBU-2025-00123",
        proofUrl: "https://savibu.org/tesdiq",
        checkedBy: "admin@kartvizitup.com",
        checkedAt: new Date().toISOString(),
        notes: "SAVİBU derneği tarafından onaylandı."
      }
    ],
    coverImage: "/demo/cover.jpg",
    gallery: ["/demo/1.jpg", "/demo/2.jpg", "/demo/3.jpg"],
    socials: [
      { type: "instagram", url: "https://instagram.com/hiddengarden" },
      { type: "maps", url: "https://maps.google.com/?q=Sapanca+Hidden+Garden" },
      { type: "web", url: "https://hiddengarden.example" },
    ],
  },
};
