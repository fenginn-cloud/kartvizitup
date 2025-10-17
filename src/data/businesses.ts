import type { Business } from "@/types/business";

export const BUSINESSES: Record<string, Business> = {
  "hidden-garden": {
    slug: "hidden-garden",
    name: "Hidden Garden Bungalow",
    tagline: "Doğayla iç içe konaklama deneyimi",
    description:
      "Sapanca'da sessiz, huzurlu ve modern bungalovlarımızda konaklama. Özel jakuzili seçenekler.",
    address: "Sapanca, Sakarya",
    locationUrl: "https://maps.google.com?q=Sapanca+Hidden+Garden",
    phone: "+905551122333",
    whatsapp: "+905551122333",
    email: "rezervasyon@hiddengarden.com",

    checkin: "14:00",
    checkout: "11:00",

    coverImage: "/demo/cover.jpg", // yoksa çıkar
    gallery: ["/demo/1.jpg", "/demo/2.jpg", "/demo/3.jpg"],

    socials: [
      { type: "instagram", url: "https://instagram.com/hiddengarden" },
      { type: "maps", url: "https://maps.google.com?q=Sapanca+Hidden+Garden" },
      { type: "web", url: "https://hiddengarden.example" },
    ],

    // Doğrulama (örnek)
    verificationStatus: "verified",
    tursabNumber: "12345",
    savibuVerified: true,
  },
};
