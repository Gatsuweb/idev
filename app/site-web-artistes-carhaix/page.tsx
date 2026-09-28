import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Projets } from "../components/Projets";
import { Contact } from "../components/Contact";
import styles from "../styles/Post.module.css";

export const metadata: Metadata = {
  title: "Site internet pour artistes à Carhaix et en Centre-Bretagne",
  description: "Portfolio et site internet pour artistes, musiciens et créateurs autour de Carhaix : montrer son travail, annoncer ses dates et faciliter les demandes professionnelles.",
  alternates: { canonical: "/site-web-artistes-carhaix" },
  openGraph: { title: "Site internet pour artistes autour de Carhaix", url: "/site-web-artistes-carhaix" },
};

export default function ArtistesCarhaix() {
  return (
    <>
      <Nav />
      <main className={styles.landingContainer}>
        <header className={styles.hero}>
          <p className={styles.kicker}>Artistes · créateurs · Centre-Bretagne</p>
          <h1 className={styles.heroTitle}>Un site internet pour artistes autour de Carhaix</h1>
          <p className={styles.heroLead}>Votre travail est éparpillé entre Instagram, un dossier PDF et des messages privés ? Je rassemble vos œuvres, vos dates et vos coordonnées sur un site que programmateurs, galeries, clients et partenaires peuvent consulter facilement.</p>
          <p className={styles.heroLead}>Basé à Plévin, j’accompagne les artistes visuels, musiciens, photographes et créateurs de Carhaix, du Poher et du Centre-Bretagne.</p>
          <div className={styles.ctaRow}>
            <Link className={styles.primaryCta} href="#contact">Présenter mon projet</Link>
            <Link className={styles.secondaryCta} href="/site-web-pour-creatifs">Voir mon approche créative</Link>
          </div>
        </header>
        <div className={styles.sections}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Le bon contenu pour votre pratique</h2>
            <div className={styles.cards}>
              <div className={styles.card}><h3 className={styles.cardTitle}>Artiste visuel ou photographe</h3><p className={styles.cardText}>Un portfolio par série ou discipline, des œuvres légendées, une démarche artistique et un contact pour expositions ou commandes.</p></div>
              <div className={styles.card}><h3 className={styles.cardTitle}>Musicien ou spectacle vivant</h3><p className={styles.cardText}>Une présentation courte, des extraits, des dates à venir, un dossier de presse et une demande de programmation facile à envoyer.</p></div>
              <div className={styles.card}><h3 className={styles.cardTitle}>Créateur et artisan d’art</h3><p className={styles.cardText}>Des collections, des pièces sur commande, le processus de fabrication et les informations pratiques pour acheter ou visiter l’atelier.</p></div>
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Être trouvé pour son travail, pas seulement pour son nom</h2>
            <p className={styles.sectionLead}>Nous choisissons des intitulés qui décrivent votre pratique : « photographe de portrait à Carhaix », « céramiste en Centre-Bretagne » ou « groupe de musique en Bretagne », uniquement lorsqu’ils correspondent à votre activité. Les pages présentent des œuvres et des informations utiles, pas une suite de mots clés.</p>
            <p className={styles.sectionLead}>Le site peut relier vos réseaux sociaux, mais il donne aussi un point d’entrée stable aux personnes qui ne vous y suivent pas encore.</p>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Un portfolio qui mène à une vraie demande</h2>
            <ul className={styles.checklist}>
              <li>Images et vidéos choisies avec soin, légendes descriptives et navigation adaptée au téléphone.</li>
              <li>Informations de disponibilité, commande ou réservation adaptées à votre activité.</li>
              <li>Page de contact pour les particuliers, lieux culturels et professionnels.</li>
            </ul>
          </section>
        </div>
      </main>
          
          <Projets />
            <Contact />
      <Footer />
    </>
  );
}
