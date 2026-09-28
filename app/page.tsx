import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { FootHero } from "./components/FootHero";
import { ServicesCard } from "./components/ServicesCard";
import { Pricing } from './components/Pricing';
import { Projets } from './components/Projets';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Footer } from './components/Footer';
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Création de sites internet à Carhaix pour artisans, artistes et associations",
  description: "I’Dev crée des sites internet pour artisans, artistes et associations autour de Carhaix. Basé à Plévin : réalisations, demandes de devis, portfolio et offre association à 200 €.",
  alternates: { canonical: "/" },
  openGraph: { title: "Sites internet à Carhaix pour artisans, artistes et associations", url: "/" },
};

export default function Home() {
//  const footerView = {
//   initial: {
//     y: 50,
//     opacity: 0,
//   },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.4,
//     }
//   }
//  }

  return (
    
    <div className={styles.page}>
      <div className={styles.bgImg}><Image src="/sand.jpg" alt="texture" className={styles.texture} width={3500} height={2500} style={{opacity: 0.1}}/></div>
     <Nav />
     <div id="hero">
      <Hero />
     </div>
     <FootHero />
     <div className="scroll-container">
        <div className={styles.servicesCard} id="services">
          <ServicesCard />
        </div>
        <div >
          <Pricing />
        </div>
      </div>
      <div className={styles.artisanCta}>
        <Link href="/creation-site-internet-carhaix" className={styles.artisanCard}>
          <div className={styles.artisanCardLeft}>
            <p className={styles.artisanKicker}>Artisans du Poher</p>
            <p className={styles.artisanTitle}>Création de site internet à Carhaix</p>
            <p className={styles.artisanText}>
              Montrez vos chantiers, expliquez vos prestations et recevez des demandes de devis dans votre secteur.
            </p>
          </div>
          <div className={styles.artisanCardRight}>
            <span className={styles.artisanCtaText}>Découvrir</span>
          </div>
        </Link>
        <Link href="/site-web-artistes-carhaix" className={styles.artisanCard}>
          <div className={styles.artisanCardLeft}>
            <p className={styles.artisanKicker}>Artistes et créateurs</p>
            <p className={styles.artisanTitle}>Un portfolio pour montrer votre travail</p>
            <p className={styles.artisanText}>Œuvres, dates, commandes et contact professionnel sur un site à votre image.</p>
          </div>
          <div className={styles.artisanCardRight}><span className={styles.artisanCtaText}>Découvrir</span></div>
        </Link>
        <Link href="/site-web-association-carhaix" className={styles.artisanCard}>
          <div className={styles.artisanCardLeft}>
            <p className={styles.artisanKicker}>Associations locales</p>
            <p className={styles.artisanTitle}>Un site associatif au forfait unique de 200 €</p>
            <p className={styles.artisanText}>Présentez vos activités et facilitez les adhésions avec plusieurs pages simples.</p>
          </div>
          <div className={styles.artisanCardRight}><span className={styles.artisanCtaText}>Voir l’offre</span></div>
        </Link>
      </div>
      <div id="projets">
        <Projets />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    {/* <div variants={footerView} whileInView="animate" initial= "initial"> */}
    <div>
        <Footer />
    </div>
    </div>
  );
}
