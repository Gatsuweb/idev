import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import LenisScroll from "./components/LenisScroll";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Création de site internet à Carhaix | I’Dev", template: "%s | I’Dev" },
  description:
    "Création de sites internet pour artisans, artistes et associations autour de Carhaix. Ivan Duran, développeur web basé à Plévin, en Centre-Bretagne.",
  robots: { index: true, follow: true },
  icons: { icon: "/logoIDev.svg", apple: "/logoIDev.svg" },
  openGraph: {
    siteName: "I’Dev",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/preview.jpg", width: 1200, height: 630, alt: "I’Dev, création de sites web en Centre-Bretagne" }],
  },
  verification: { google: "dfD6w7_1LKONuFgUVg6JrfsNW6jlIbLjdH0OEKzDai0" },
};

const business = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#entreprise`,
  name: "I’Dev",
  alternateName: "Ivan Duran",
  url: siteUrl,
  image: `${siteUrl}/afou2bis.jpg`,
  description: "Création de sites internet pour artisans, artistes et associations autour de Carhaix.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Plévin",
    postalCode: "22340",
    addressCountry: "FR",
  },
  email: "ivandevelopment@outlook.com",
  telephone: "+33634670782",
  areaServed: ["Carhaix-Plouguer", "Plévin", "Maël-Carhaix", "Cléden-Poher", "Poullaouen", "Centre-Bretagne"],
  sameAs: ["https://www.linkedin.com/in/ivandrn/", "https://www.instagram.com/_i.d.e.v/"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
        <LenisScroll>{children}</LenisScroll>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-0KCZRHLBMV" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-0KCZRHLBMV');" }}
        />
      </body>
    </html>
  );
}
