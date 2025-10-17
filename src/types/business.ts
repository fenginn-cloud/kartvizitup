// src/types/business.ts

export type VerificationStatus = "unverified" | "pending" | "verified" | "rejected";

export interface VerificationEvidence {
  source: "tursab" | "savibu" | "manual";
  reference?: string;
  proofUrl?: string;
  checkedBy?: string;
  checkedAt?: string;
  notes?: string;
}

export interface Business {
  slug: string;
  name: string;
  tagline?: string;
  description?: string;
  address?: string;
  locationUrl?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  checkIn?: string;
  checkOut?: string;
  tursabNumber?: string;
  verificationStatus?: VerificationStatus;
  verification?: VerificationEvidence[];
  coverImage?: string;
  gallery?: string[];
  socials?: { type: "instagram" | "maps" | "web"; url: string }[];
}
