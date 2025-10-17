export type VerificationStatus = "verified" | "pending" | "unverified" | "fraud";

export type SocialLink =
  | { type: "instagram"; url: string }
  | { type: "maps"; url: string }
  | { type: "web"; url: string };

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

  checkin?: string;
  checkout?: string;

  coverImage?: string;        // ör: /demo/cover.jpg
  gallery?: string[];         // ör: ["/demo/1.jpg", "/demo/2.jpg"]

  socials?: SocialLink[];

  // Doğrulama alanları
  verificationStatus?: VerificationStatus; // "verified" | "pending" | ...
  tursabNumber?: string | null;            // ör: "12345" yoksa null
  savibuVerified?: boolean;                // true/false
};
