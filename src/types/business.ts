export type SocialLink = {
  type: "instagram" | "facebook" | "maps" | "web";
  url: string;
};

export type Business = {
  slug: string;                 // url parçası, örn: "hidden-garden"
  name: string;                 // görünen ad
  tagline?: string;             // kısa açıklama
  description?: string;         // daha uzun açıklama (opsiyonel)
  address?: string;             // metin olarak adres
  locationUrl?: string;         // Google Maps linki
  phone?: string;               // +90... formatı
  whatsapp?: string;            // +90... (ülke kodlu)
  email?: string;
  checkIn?: string;             // "14:00" gibi
  checkOut?: string;            // "11:00" gibi
  coverImage?: string;          // /public altında bir görsel yolu
  gallery?: string[];           // görsel yolları
  socials?: SocialLink[];
};
