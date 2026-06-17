import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { LenisProvider } from "@/components/shared/lenis-provider";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { LocaleProvider } from "@/components/shared/locale-provider";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: siteConfig.seo.title[siteConfig.defaultLocale],
  description: siteConfig.seo.description[siteConfig.defaultLocale],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.defaultLocale} suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          dmSans.variable,
          "min-h-screen bg-background antialiased",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>
            <LenisProvider>
              <div className="relative flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
                <WhatsAppButton />
              </div>
            </LenisProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
