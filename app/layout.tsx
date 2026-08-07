import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata(),
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  keywords: [
    "Bursa çocuk İngilizce kursu",
    "çocuklar için İngilizce",
    "ücretsiz deneme dersi",
  ],
};

export const viewport: Viewport = {
  themeColor: "#FFFCF7",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={nunito.variable}>
      <body>
        {children}
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
