import type { Metadata } from "next";
import "./globals.css";

export const generateMetadata = (): Metadata => {
  return {
    title: "I'Dev - Studio de développement web à Brest | Création de sites vitrines",
    description: "IDEV est un studio de design et développement web basé à Brest (Finistère, 29). Création de sites vitrines modernes et optimisés pour le marketing digital.",
    keywords: "développement web, création de site, site vitrine, web design, marketing, SEO, Brest, Finistère, Bretagne",
    authors: [{ name: "Ivan Duran", url: "https://idevstudio.fr" }],
    robots: "index, follow",
    alternates: {
      canonical: "https://idevstudio.fr",
    },
    icons: {
      icon: '/logoIDev.svg',
      apple: '/logoIDev.svg',
    },
    manifest: '/manifest.json',
    openGraph: {
      title: "I'Dev' - Studio de développement web à Brest",
      description: "Studio de design et développement web basé en Bretagne, spécialisé dans les sites vitrines et marketing.",
      url: "https://idevstudio.fr",
      siteName: "IDEV",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "https://idevstudio.fr/preview.jpg",
          width: 1200,
          height: 630,
          alt: "Aperçu du site IDEV",
        },
      ],
    },
 
    other: {
      'application/ld+json': JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Ivan Duran",
        "jobTitle": "Développeur Web Freelance",
        "url": "https://idevstudio.fr",
        "image": "https://idevstudio.fr/afou2bis.jpg",
        "description": "Développeur web freelance spécialisé en Next.js, React, 3D et animations web.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Brest",
          "addressRegion": "Bretagne",
          "addressCountry": "FR"
        },
        "email": "mailto:ivandevelopment@outlook.com",
        "telephone": "+33 6 34 67 07 82",
        "sameAs": [
          "https://www.linkedin.com/in/ivandrn/",
          "https://www.instagram.com/_i.d.e.v/"
        ],
        "knowsAbout": ["Développement Web", "Next.js", "React", "Webflow", "SEO"],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Wild Code School - Bootcamp Développement Web"
        }
      })
    }
  }
}
              

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body >
        {children}
      </body>
    </html>
  );
}

