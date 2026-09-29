import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Projets } from "../components/Projets";
import { Contact } from "../components/Contact";
import styles from "../styles/Post.module.css";

export const metadata: Metadata = {
  title: "Création de site internet à Carhaix pour artisans",
  description: "À Carhaix et dans le Poher, un site d’artisan qui montre vos chantiers, explique vos prestations et facilite les demandes de devis. I’Dev est basé à Plévin.",
  alternates: { canonical: "/creation-site-internet-carhaix" },
  openGraph: { title: "Création de site internet à Carhaix pour artisans", url: "/creation-site-internet-carhaix" },
};

const communes = [
  "Carhaix-Plouguer", "Plounévézel", "Kergloff", "Cléden-Poher", "Motreff",
  "Poullaouen", "Maël-Carhaix", "Plévin", "Le Moustoir", "Trébrivan",
  "Treffrin", "Carnoët", "Paule", "Saint-Hernin", "Plouyé",
  "Locarn", "Huelgoat", "Berrien", "La Feuillée", "Brennilis",
];

export default function SiteInternetCarhaix() {
  return (
    <>
      <Nav />
      <main className={styles.landingContainer}>
        <header className={styles.hero}>
          <p className={styles.kicker}>Carhaix-Plouguer · Poher · Centre-Bretagne</p>
          <h1 className={styles.heroTitle}>Création de site internet à Carhaix pour artisans</h1>
          <p className={styles.heroLead}>Vous avez des chantiers à montrer, mais vos futurs clients ne trouvent ni vos réalisations ni un moyen simple de demander un devis ? Je crée des sites clairs pour les artisans du secteur de Carhaix : prestations, photos, zone d’intervention et contact rapide.</p>
          <p className={styles.heroLead}>Je suis Ivan Duran, développeur web basé à Plévin, près de Carhaix. Nous pouvons cadrer votre projet par téléphone ou nous rencontrer dans le secteur.</p>
          <div className={styles.ctaRow}>
            <Link className={styles.primaryCta} href="#contact">Parler de mon site</Link>
            <a className={styles.secondaryCta} href="tel:+33634670782">Appeler Ivan</a>
          </div>
        </header>
        <div className={[styles.sections, styles.bentoSections].join(" ")}>
          <section className={[styles.bentoPanel, styles.bentoFull].join(" ")}>
            <p className={styles.bentoEyebrow}>01 / Réalisation locale</p>
            <h2 className={styles.sectionTitle}>Hendricx Peinture, artisan à Paule</h2>
            <p className={styles.sectionLead}>J’ai réalisé le site d’Hendricx Peinture, artisan installé à Paule. Il réunit ses travaux de peinture intérieure et extérieure, ses rénovations et ses fresques murales pour montrer deux facettes de son métier.</p>
            <div className={styles.projectGrid}>
              <div className={styles.projectMedia}>
                <Image src="/images/hendricx-peinture.webp" alt="Fresque murale présentée sur le site Hendricx Peinture" width={1600} height={1200} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <div className={styles.projectInfo}>
                <p className={styles.projectTitle}>Artisan peintre et fresques murales à Paule</p>
                <p className={styles.projectText}>Un site qui laisse une place aux réalisations, explique les prestations et permet de prendre contact avec l’artisan.</p>
                <a className={styles.primaryCta} href="https://www.hendricx-peinture.com/" target="_blank" rel="noopener noreferrer">Voir le site Hendricx Peinture</a>
              </div>
            </div>
          </section>
          <section className={[styles.bentoPanel, styles.bentoLarge].join(" ")}>
            <p className={styles.bentoEyebrow}>02 / Métiers</p>
            <h2 className={styles.sectionTitle}>Un site utile selon votre métier</h2>
            <div className={styles.bentoCardGrid}>
              <article className={styles.card}><h3 className={styles.cardTitle}>Bâtiment et rénovation</h3><p className={styles.cardText}>Pour un couvreur, un charpentier ou un maçon : détail des travaux, photos de chantiers et demande de devis avec commune, délai et type de projet.</p></article>
              <article className={styles.card}><h3 className={styles.cardTitle}>Dépannage et installation</h3><p className={styles.cardText}>Pour un plombier ou un électricien : prestations lisibles, secteur réellement desservi, téléphone accessible sur mobile et distinction entre urgence et projet planifié.</p></article>
              <article className={styles.card}><h3 className={styles.cardTitle}>Menuiserie et métiers d’art</h3><p className={styles.cardText}>Pour un menuisier, un ébéniste ou un créateur : galerie détaillée, matériaux, commandes sur mesure et étapes de réalisation pour rassurer avant le premier contact.</p></article>
            </div>
          </section>
          <section className={[styles.bentoPanel, styles.bentoSmall, styles.bentoDark].join(" ")}>
            <p className={styles.bentoEyebrow}>03 / Avant l’appel</p>
            <h2 className={styles.sectionTitle}>Ce que vos clients cherchent</h2>
            <ul className={[styles.checklist, styles.bentoChecklist].join(" ")}>
              <li>Votre métier et vos prestations exactes : « rénovation toiture », « installation électrique » ou « meuble sur mesure », plutôt que « artisan » seul.</li>
              <li>Des réalisations réelles, des avis autorisés et une explication simple de votre méthode.</li>
              <li>Les communes où vous intervenez vraiment et la façon d’obtenir un devis.</li>
              <li>Un site rapide sur téléphone, avec des coordonnées faciles à retrouver.</li>
            </ul>
          </section>
          <section className={[styles.bentoPanel, styles.bentoLarge].join(" ")}>
            <p className={styles.bentoEyebrow}>04 / Secteur</p>
            <h2 className={styles.sectionTitle}>Carhaix et les communes alentour</h2>
            <p className={styles.sectionLead}>La page couvre le bassin de vie de Carhaix-Plouguer : {communes.join(", ")}. Cette liste situe mon secteur d’accompagnement ; la zone que vous afficherez sur votre propre site sera celle où vous intervenez réellement.</p>
            <p className={styles.sectionLead}>Autour de ce bassin, les recherches à Rostrenen, Gourin, Callac, Spézet ou Châteauneuf-du-Faou peuvent aussi être travaillées si ces communes correspondent à votre zone réelle. Des exemples de projets locaux seront plus convaincants qu’une page copiée pour chaque ville.</p>
            <p className={styles.sectionLead}>Pour les recherches plus larges, consultez aussi mes offres pour les <Link href="/site-web-artisans-finistere">artisans du Finistère</Link> et des <Link href="/site-web-artisans-cotes-armor">Côtes-d’Armor</Link>.</p>
          </section>
          <section className={[styles.bentoPanel, styles.bentoSmall, styles.bentoAccent].join(" ")}>
            <p className={styles.bentoEyebrow}>05 / Visibilité locale</p>
            <h2 className={styles.sectionTitle}>Une présence cohérente</h2>
            <p className={styles.sectionLead}>Le site explique votre savoir-faire et capte les demandes ; votre fiche d’établissement Google complète cette présence avec des informations à jour, des photos et des avis authentiques. Je peux vous aider à organiser les deux, sans promettre une position précise sur Google.</p>
            <p className={styles.sectionLead}>Chaque page de prestation doit répondre à une question différente. Je n’ajoute pas des pages identiques en changeant seulement le nom de la commune.</p>
            <p className={styles.sectionLead}>Selon votre activité, nous préparons une page d’accueil, des pages de prestations utiles, vos réalisations et un parcours de devis. <Link href="/site-web-artisans-bretagne">Voir les offres et leurs tarifs</Link>.</p>
          </section>
        </div>
      </main>
      <Projets />
      <div id="contact"><Contact /></div>      <Footer />
    </>
  );
}
