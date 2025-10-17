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
  // src/types/business.ts
export type VerificationStatus = "unverified" | "pending" | "verified" | "rejected";

export interface VerificationEvidence {
  source: "tursab" | "savibu" | "manual";
  reference?: string;           // TURSAB no, form id vs.
  proofUrl?: string;            // resmi kayıt/başvuru linki
  checkedBy?: string;           // kim onayladı
  checkedAt?: string;           // ISO tarih
  notes?: string;
}

export type Business = {
  slug: string;
  name: string;
  tagline?: string;
  description?: string;
  address?: string;
  locationUrl?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;

  // ✅ yeni alanlar:
  tursabNumber?: string;                       // İşletme beyanı
  verificationStatus?: VerificationStatus;     // "verified" olunca rozet yanar
  verification?: VerificationEvidence[];
  
  coverImage?: string;
  gallery?: string[];
  socials?: { type: "instagram"|"maps"|"web"; url: string }[];
};
