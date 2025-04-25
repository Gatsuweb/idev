
import styles from "@/app/site-web-pour-creatifs/siteCreatif.module.css";

export const Why = () => {
  return (
    <section className={styles.whySection}>
      <div className={styles.whyGrid}>
        {/* Left column */}
        <div className={styles.whyLeft}>
          <div className={styles.whyWhen}><h2>Pourquoi ?</h2></div>
          <div className={styles.whyDesc}>
          Tatoueur, coiffeur, photographe… Des clients ne vous trouvent pas.
        Une majorité des recherches locales passent par Google. Ne pas avoir de site, c&apos;est rater l’opportunité d’être visible au bon moment.
          </div>
        </div>
        {/* Right column: 2x2 cards */}
        <div className={styles.whyCards}>
          <div className={styles.whyCard}>
            <div className={styles.whyCardTitle}><h3>Visible</h3></div>
            <div className={styles.whyCardText}>
            Quand un client cherche un tatoueur, un coiffeur ou un photographe, son premier réflexe, c’est Google. Et s’il ne vous trouve pas là, il trouve quelqu’un d’autre.
            </div>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyCardTitle}><h3>Faciliter</h3></div>
            <div className={styles.whyCardText}>
            Un client qui veut un rendez-vous ? Quoi de plus simple que de réserver directement sur votre site. Ça vous génère du trafic, et ça booste votre référencement sous stéroïdes.
            </div>
          </div>
          <div className={styles.whyCard + " " + styles.whyCardSubscription}>
            <div className={styles.whyCardTitle}><h3>Branding</h3></div>
            <div className={styles.whyCardText}>
            Votre univers est unique. Votre site, c’est votre image. À travers les couleurs, les mots, les animations, les photos : vous créez une identité forte, différente. C’est un prolongement de votre art.
            </div>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyCardTitle}><h3>Rassurer</h3></div>
            <div className={styles.whyCardText}>
            Un site inspire confiance. Il montre que vous êtes pro, sérieux, et disponible. Vous pouvez y ajouter vos avis clients, votre méthode de travail, ou encore vos réponses aux questions fréquentes.  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
