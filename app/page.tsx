"use client"
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
        <Link href="/site-web-artisans-bretagne" className={styles.artisanCard}>
          <div className={styles.artisanCardLeft}>
            <p className={styles.artisanKicker}>Landing dédiée</p>
            <p className={styles.artisanTitle}>Site web artisans Bretagne</p>
            <p className={styles.artisanText}>
              Offres, exemple Carpenter, structure SEO local et devis en ligne.
            </p>
          </div>
          <div className={styles.artisanCardRight}>
            <span className={styles.artisanCtaText}>Découvrir</span>
          </div>
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
