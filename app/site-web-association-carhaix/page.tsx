import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Projets } from "../components/Projets";
import { Contact } from "../components/Contact";
import styles from "../styles/Post.module.css";

export const metadata: Metadata = {
  title: "Site internet pour association à Carhaix : forfait 200 €",
  description: "Un site associatif de 3 pages au forfait de création de 200 € autour de Carhaix : présenter vos activités, annoncer vos rendez-vous et faciliter les contacts.",
  alternates: { canonical: "/site-web-association-carhaix" },
  openGraph: { title: "Site pour association à Carhaix : 200 €", url: "/site-web-association-carhaix" },
};

export default function AssociationCarhaix() {
  return (
    <>
      <Nav />
      <main className={styles.landingContainer}>
        <header className={styles.hero}>
          <p className={styles.kicker}>Associations · Carhaix · Centre-Bretagne</p>
          <h1 className={styles.heroTitle}>Un site pour votre association à Carhaix : 200 €</h1>
          <p className={styles.heroLead}>Vos horaires, vos activités et les coordonnées des bénévoles se perdent entre affiches et réseaux sociaux ? Un site simple permet aux habitants de trouver les informations essentielles et de rejoindre votre association.</p>
          <div className={styles.ctaRow}>
            <Link className={styles.primaryCta} href="#contact">Parler de l’association</Link>
            <a className={styles.secondaryCta} href="mailto:ivandevelopment@outlook.com">Écrire à Ivan</a>
          </div>
        </header>
        <div className={[styles.sections, styles.bentoSections].join(" ")}>
          <section className={[styles.bentoPanel, styles.bentoSmall, styles.bentoAccent].join(" ")}>
            <p className={styles.bentoEyebrow}>01 / Forfait association</p>
            <h2 className={styles.sectionTitle}>Un prix unique, un périmètre clair</h2>
            <p className={styles.bentoPrice}>200 €</p>
            <p className={styles.sectionLead}>Création d’un site de 3 pages, adapté au téléphone, à partir des textes et visuels fournis par l’association.</p>
          </section>
          <section className={[styles.bentoPanel, styles.bentoLarge].join(" ")}>
            <p className={styles.bentoEyebrow}>02 / Structure du site</p>
            <h2 className={styles.sectionTitle}>Trois pages pour répondre à l’essentiel</h2>
            <div className={styles.bentoStepList}>
              <article className={styles.bentoStep}>
                <span className={styles.bentoStepNumber}>01</span>
                <div><h3 className={styles.cardTitle}>Accueil</h3><p className={styles.cardText}>Qui vous êtes, votre mission, le public concerné et l’essentiel pour participer.</p></div>
              </article>
              <article className={styles.bentoStep}>
                <span className={styles.bentoStepNumber}>02</span>
                <div><h3 className={styles.cardTitle}>Activités</h3><p className={styles.cardText}>Vos activités, rendez-vous ou événements récurrents avec des informations pratiques à jour lors de la mise en ligne.</p></div>
              </article>
              <article className={styles.bentoStep}>
                <span className={styles.bentoStepNumber}>03</span>
                <div><h3 className={styles.cardTitle}>Contact</h3><p className={styles.cardText}>Coordonnées, lieu des activités et liens vers votre formulaire d’adhésion ou de billetterie existant.</p></div>
              </article>
            </div>
          </section>
          <section className={[styles.bentoPanel, styles.bentoLarge].join(" ")}>
            <p className={styles.bentoEyebrow}>03 / Usages concrets</p>
            <h2 className={styles.sectionTitle}>Pensé pour la vie associative</h2>
            <ul className={[styles.checklist, styles.bentoChecklist].join(" ")}>
              <li>Pour un club sportif : horaires, lieux d’entraînement et modalités d’inscription.</li>
              <li>Pour une association culturelle : programmation, présentation des projets et contact partenaires.</li>
              <li>Pour une association solidaire : mission, permanences et manière de devenir bénévole.</li>
            </ul>
            <p className={styles.sectionLead}>Le site répond d’abord aux questions que les habitants posent vraiment. Il peut ensuite être partagé sur vos affiches, vos réseaux sociaux et votre fiche Google si elle est éligible.</p>
          </section>
          <section className={[styles.bentoPanel, styles.bentoSmall, styles.bentoDark].join(" ")}>
            <p className={styles.bentoEyebrow}>04 / Proximité</p>
            <h2 className={styles.sectionTitle}>À Carhaix et autour</h2>
            <p className={styles.sectionLead}>Je suis basé à Plévin et travaille avec les associations de Carhaix-Plouguer, Maël-Carhaix, Plounévézel, Kergloff, Cléden-Poher, Poullaouen et des communes voisines du Centre-Bretagne.</p>
          </section>
          <section className={[styles.bentoPanel, styles.bentoFull, styles.bentoCompact, styles.bentoSoft].join(" ")}>
            <p className={styles.bentoEyebrow}>À prévoir</p>
            <h2 className={styles.sectionTitle}>Ce que couvre le forfait</h2>
            <p className={styles.sectionLead}>Ce forfait couvre la création et la mise en ligne du site. Le nom de domaine, l’hébergement et les mises à jour après livraison sont à prévoir séparément s’ils sont nécessaires ; leur coût éventuel est indiqué avant de commencer. Une billetterie, un espace membre ou un système d’adhésion sur mesure demandent un devis distinct.</p>
          </section>
        </div>
      </main>
      <Projets />
      <div id="contact"><Contact /></div>      <Footer />
    </>
  );
}
