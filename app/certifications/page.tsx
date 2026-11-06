import type { Metadata } from "next";
import { CertificationsContent } from "./certifications-content";
import { getCertificationGroups } from "@/lib/get-certifications";

export const metadata: Metadata = {
  title: "Certifications | Nicolás Valenzuela",
  description:
    "Professional certifications and courses completed by Nicolás Valenzuela — AI Development, Cybersecurity, and more.",
  robots: "index, follow",
};

export default function CertificationsPage() {
  const groups = getCertificationGroups();
  return (
    <>
      <CertificationsContent groups={groups} />
    </>
  );
}
