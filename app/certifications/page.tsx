import type { Metadata } from "next";
import { CertificationsContent } from "./certifications-content";
import { getCertifications } from "@/lib/get-certifications";

export const metadata: Metadata = {
  title: "Certifications | Nicolás Voitovich",
  description:
    "Professional certifications and courses completed by Nicolás Voitovich — AI Development, Cybersecurity, and more.",
  robots: "index, follow",
};

export default function CertificationsPage() {
  const certifications = getCertifications();
  return (
    <>
      <CertificationsContent certifications={certifications} />
    </>
  );
}
