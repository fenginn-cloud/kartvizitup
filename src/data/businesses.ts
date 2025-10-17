import type { Business } from "@/types/business";

export const BUSINESSES: Record<string, Business> = {
  "hidden-garden": {
    slug: "hidden-garden",
    name: "Hidden Garden Bungalov",
    tagline: "Doğayla iç içe konaklama deneyimi",
    description:
      "Sapanca'da sessiz, huzurlu ve modern bungalovlarımızda konaklama. Özel jakuzili seçenekler.",
    address: "Sapanca, Sakarya",
    locationUrl: "https://maps.google.com?q=Sapanca+Hidden+Garden",
    phone: "+905551112233",
    whatsapp: "+905551112233",
    email: "rezervasyon@hiddengarden.com",
    checkIn: "14:00",
    checkOut: "11:00",
    coverImage: "/demo/cover.jpg",      // public/demo/cover.jpg ekleyebilirsin
    gallery: ["/demo/1.jpg", "/demo/2.jpg", "/demo/3.jpg"], // public/demo/* ekleyebilirsin
    socials: [
      { type: "instagram", url: "https://instagram.com/hiddengarden" },
      { type: "maps", url: "https://maps.google.com?q=Sapanca+Hidden+Garden" },
      { type: "web", url: "https://hiddengarden.example" }
    ],
  },
};
