import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Projets } from "../components/Projets";
import { Contact } from "../components/Contact";
import styles from "../styles/Post.module.css";

export const metadata: Metadata = {
  title: "Référencement de site internet en Finistère et Côtes-d’Armor",
  description: "Votre entreprise a un site mais reçoit peu de demandes ? Ivan Duran améliore la clarté, les pages et la visibilité locale de votre site en Finistère, Côtes-d’Armor et Centre-Bretagne.",
  alternates: { canonical: "/referencement-site-internet-bretagne" },
  openGraph: {
    title: "Référencement de site internet en Finistère et Côtes-d’Armor",
    description: "Un site plus facile à trouver et à comprendre pour les clients de votre secteur.",
    url: "/referencement-site-internet-bretagne",
  },
};

export default function ReferencementSiteInternetBretagne() {
  return (
    <>
      <Nav />
      <main className={styles.landingContainer}>
        <header className={styles.hero}>
          <p className={styles.kicker}>Visibilité locale · Finistère · Côtes-d’Armor · Centre-Bretagne</p>
          <h1 className={styles.heroTitle}>Référencement de site internet pour les entreprises en Bretagne</h1>
          <p className={styles.heroLead}>Votre site existe, mais les personnes qui cherchent votre activité près de chez elles ne vous trouvent pas ? Je travaille la structure, les contenus et le parcours de contact de votre site pour qu’il réponde mieux à leurs recherches.</p>
          <p className={styles.heroLead}>Je suis Ivan Duran, développeur web basé à Plévin, à la limite du Finistère et des Côtes-d’Armor. J’accompagne les entreprises, artisans, commerces et indépendants qui veulent être plus visibles dans leur vraie zone d’activité.</p>
          <div className={styles.ctaRow}>
            <a className={styles.primaryCta} href="tel:+33634670782">Parlons de votre visibilité</a>
            <Link className={styles.secondaryCta} href="#methode">Voir la méthode</Link>
          </div>
        </header>

        <div className={[styles.sections, styles.bentoSections].join(" ")}>
          <section className={[styles.bentoPanel, styles.bentoLarge].join(" ")}>
            <p className={styles.bentoEyebrow}>01 / Le problème</p>
            <h2 className={styles.sectionTitle}>Un site en ligne ne suffit pas à être trouvé</h2>
            <p className={styles.sectionLead}>Un client ne cherche pas toujours le nom de votre entreprise. Il tape son besoin : « peintre près de Carhaix », « gîte autour de Paimpol » ou « tatoueuse près de Quimperlé ». Si le site ne dit pas clairement ce que vous faites, où vous intervenez et comment vous contacter, il risque de manquer ces recherches.</p>
            <p className={styles.sectionLead}>L’objectif n’est pas d’accumuler des mots-clés : c’est de rendre chaque prestation compréhensible, de montrer des preuves concrètes et de faciliter la prise de contact.</p>
          </section>
          <section className={[styles.bentoPanel, styles.bentoSmall, styles.bentoDark].join(" ")}>
            <p className={styles.bentoEyebrow}>Pour qui ?</p>
            <h2 className={styles.sectionTitle}>Des clients, pas seulement du trafic</h2>
            <ul className={styles.bentoChecklist}>
              <li>Une entreprise locale peu visible hors de son nom.</li>
              <li>Un artisan dont les réalisations restent difficiles à trouver.</li>
              <li>Un commerce ou un lieu qui veut attirer les bonnes demandes.</li>
            </ul>
          </section>

          <section id="methode" className={[styles.bentoPanel, styles.bentoFull].join(" ")}>
            <p className={styles.bentoEyebrow}>02 / La méthode</p>
            <h2 className={styles.sectionTitle}>Ce que nous pouvons améliorer sur votre site</h2>
            <div className={styles.bentoCardGrid}>
              <article className={styles.card}><h3 className={styles.cardTitle}>Comprendre les recherches utiles</h3><p className={styles.cardText}>Nous partons de vos prestations, de vos clients et des communes réellement desservies. Une page doit répondre à une intention précise, pas répéter une liste de villes.</p></article>
              <article className={styles.card}><h3 className={styles.cardTitle}>Clarifier les pages</h3><p className={styles.cardText}>Titres, descriptions, contenu, liens internes et pages de prestations : vos visiteurs doivent trouver vite la bonne réponse.</p></article>
              <article className={styles.card}><h3 className={styles.cardTitle}>Vérifier la base technique</h3><p className={styles.cardText}>Affichage mobile, rapidité, indexation, sitemap et liens : nous contrôlons ce qui peut freiner la découverte du site.</p></article>
              <article className={styles.card}><h3 className={styles.cardTitle}>Mesurer puis ajuster</h3><p className={styles.cardText}>Search Console aide à voir quelles pages sont découvertes et quelles recherches amènent des visiteurs, avant de décider des prochains contenus.</p></article>
            </div>
          </section>

          <section className={[styles.bentoPanel, styles.bentoSmall, styles.bentoAccent].join(" ")}>
            <p className={styles.bentoEyebrow}>03 / Deux présences</p>
            <h2 className={styles.sectionTitle}>Site web et fiche Google</h2>
            <p className={styles.sectionLead}>Le site détaille vos services et vos réalisations. Une fiche d’établissement Google, si votre activité y est éligible, peut compléter ces informations avec vos coordonnées, horaires, photos et avis authentiques.</p>
            <p className={styles.sectionLead}>Je peux vous aider à rendre ces informations cohérentes. Une fiche Google ne remplace pas des pages utiles sur votre site.</p>
          </section>
          <section className={[styles.bentoPanel, styles.bentoLarge].join(" ")}>
            <p className={styles.bentoEyebrow}>04 / Secteur</p>
            <h2 className={styles.sectionTitle}>Finistère, Côtes-d’Armor et Centre-Bretagne</h2>
            <p className={styles.sectionLead}>Pour une entreprise du Finistère, le référencement du site internet doit partir de son activité et de son secteur réel : par exemple Brest pour un commerce, Quimperlé pour une indépendante ou le Poher pour un artisan qui se déplace. La même logique vaut dans les Côtes-d’Armor, de Plévin au secteur de Paimpol.</p>
            <p className={styles.sectionLead}>Je suis basé à Plévin, près de Carhaix. J’ai notamment créé des sites pour <a href="https://www.ocapri.fr/" target="_blank" rel="noopener noreferrer">Ocapri à Brest</a>, <a href="https://www.melinktattoo.com/" target="_blank" rel="noopener noreferrer">Melink Tattoo près de Quimperlé</a> et <a href="https://www.hendricx-peinture.com/" target="_blank" rel="noopener noreferrer">Hendricx Peinture à Paule</a>. Ces projets illustrent des activités et des besoins différents, pas une promesse de positionnement.</p>
          </section>

          <section className={[styles.bentoPanel, styles.bentoLarge, styles.bentoSoft].join(" ")}>
            <p className={styles.bentoEyebrow}>05 / Votre point de départ</p>
            <h2 className={styles.sectionTitle}>Site existant ou nouveau projet ?</h2>
            <p className={styles.sectionLead}>Si vous avez déjà un site, nous pouvons repérer ce qui manque : prestations absentes, pages trop vagues, coordonnées discrètes ou problème d’indexation. Si vous partez de zéro, nous construisons dès le départ une arborescence adaptée à vos clients et à votre zone.</p>
            <p className={styles.sectionLead}>Pour un besoin centré sur les chantiers et les devis, découvrez aussi ma page <Link href="/creation-site-internet-carhaix">création de site pour artisans à Carhaix</Link> et mes pages <Link href="/site-web-artisans-finistere">Finistère</Link> et <Link href="/site-web-artisans-cotes-armor">Côtes-d’Armor</Link>.</p>
          </section>
          <section className={[styles.bentoPanel, styles.bentoSmall, styles.bentoDark].join(" ")}>
            <p className={styles.bentoEyebrow}>Parlons-en</p>
            <h2 className={styles.sectionTitle}>Qu’est-ce qui bloque aujourd’hui ?</h2>
            <p className={styles.sectionLead}>Dites-moi votre activité, l’adresse du site s’il existe, les prestations à mettre en avant et les communes où vous travaillez. Nous verrons quelles améliorations sont pertinentes avant de parler de nouvelles pages.</p>
            <div className={styles.ctaRowSmall}><a className={styles.primaryCta} href="tel:+33634670782">Appeler Ivan</a></div>
          </section>
        </div>
      </main>
      <Projets />
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
}
