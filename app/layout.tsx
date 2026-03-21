import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import LenisScroll from "./components/LenisScroll";

export const generateMetadata = (): Metadata => {
  const baseUrl = "https://idevstudio.fr";
  const businessName = "I'Dev";

  return {
    title: "I'Dev - Développement web en Centre-Bretagne | Sites vitrines & SEO local",
    description: "I'Dev est un studio de développement web et design basé à Plévin (22340), à la frontière des Côtes-d'Armor (22) et du Finistère (29). Création de sites vitrines modernes, devis en ligne, galerie photos et référencement local.",
    keywords: "développement web Plévin, développeur web, création de site, site vitrine, site web artisan, devis en ligne, photos de chantier, référencement local, web design, SEO, Centre-Bretagne, Côtes-d'Armor, Finistère, Bretagne",
    authors: [{ name: "Ivan Duran", url: baseUrl }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: baseUrl,
      languages: {
        'fr-FR': baseUrl
      }
    },
    icons: {
      icon: '/logoIDev.svg',
      apple: '/logoIDev.svg',
    },
    openGraph: {
      title: "I'Dev - Développement web en Centre-Bretagne (Plévin 22/29)",
      description: "Créez une présence web sérieuse avec I'Dev, studio basé à Plévin. Sites web modernes, devis en ligne, galerie photos et SEO local pour artisans et entreprises en Centre-Bretagne.",
      url: baseUrl,
      siteName: businessName,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: `${baseUrl}/preview.jpg`,
          width: 1200,
          height: 630,
          alt: "Aperçu du site I'Dev",
        },
        {
          url: `${baseUrl}/preview-mobile.jpg`,  // Image optimisée pour mobile
          width: 600,
          height: 315,
          alt: "Aperçu mobile du site I'Dev",
        },
      ],
    },
    verification: {
      google: "dfD6w7_1LKONuFgUVg6JrfsNW6jlIbLjdH0OEKzDai0",
    },
    other: {
      'application/ld+json': JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Ivan Duran",
          "jobTitle": "Développeur Web Freelance",
          "url": baseUrl,
          "image": `${baseUrl}/afou2bis.jpg`,
          "description": "Développeur web freelance spécialisé en Next.js, React, SEO local et performance web.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Plévin",
            "addressRegion": "Bretagne",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "48.2264",
            "longitude": "-3.504"
          },
          "email": "ivandevelopment@outlook.com",
          "telephone": "+33634670782",
          "sameAs": [
            "https://www.linkedin.com/in/ivandrn/",
            "https://www.instagram.com/_i.d.e.v/"
          ],
          "areaServed": ["Plévin", "Centre-Bretagne", "Côtes-d'Armor", "Finistère", "Bretagne"],
          "knowsAbout": ["Développement Web", "Web Design", "Next.js", "React", "Webflow", "SEO", "SEO local", "Performance web"],
          "founder": {
            "@type": "Person",
            "name": "Ivan Duran",
            "jobTitle": "Développeur Web Freelance",
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "Wild Code School"
            }
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services de développement web",
            "itemListElement": [
              {
                "@type": "Service",
                "name": "Développement de sites web",
                "description": "Création de sites web professionnels avec Next.js et React"
              },
              {
                "@type": "Service",
                "name": "Web Design",
                "description": "Conception d'interfaces modernes et responsives"
              },
              {
                "@type": "Service",
                "name": "SEO",
                "description": "Optimisation pour les moteurs de recherche"
              }
            ]
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": baseUrl,
          "name": businessName,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        }
      ])
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
      <body>
      <LenisScroll>
        {children}
        </LenisScroll>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0KCZRHLBMV"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0KCZRHLBMV');
            `,
          }}
        />
      </body>
    </html>
  );
}
