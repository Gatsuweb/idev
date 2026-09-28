import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Projets } from "../components/Projets";
import styles from "@/app/styles/Post.module.css";
import pageStyles from "@/app/page.module.css";
import { Contact } from "../components/Contact";

export const metadata: Metadata = {
  title: "Site web pour artisans en Bretagne | Devis en ligne, photos de chantier, SEO local",
  description:
    "Basé à Plévin (22340), à la frontière 22/29, j’accompagne les artisans en Bretagne avec des sites web clairs : devis en ligne, galerie chantiers, référencement local.",
  alternates: { canonical: "/site-web-artisans-bretagne" },
  keywords: [
    "site web artisan Bretagne",
    "création site internet artisan Bretagne",
    "devis en ligne artisan",
    "photos de chantier",
    "référencement local artisan",
    "SEO local Bretagne",
    "Centre-Bretagne",
    "Plévin",
    "Côtes-d'Armor",
    "Finistère",
  ],
};

export default function ArtisansBretagnePage() {
  return (
    <>
      <div className={pageStyles.bgImg}>
        <Image
          src="/sand.jpg"
          alt="texture"
          className={pageStyles.texture}
          width={3500}
          height={2500}
          style={{ opacity: 0.1 }}
        />
      </div>
      <Nav />
      <div className={styles.landingContainer}>
        <header className={styles.hero}>
          <p className={styles.kicker}>Bretagne • Artisans • SEO local</p>
          <h1 className={styles.heroTitle}>
            Un site web qui vous ramène des demandes.
          </h1>
          <p className={styles.heroLead}>
            Basé à <strong>Plévin</strong> (frontière 22/29), je crée des sites
            haut de gamme pour les artisans : <strong>devis en ligne</strong>,{" "}
            <strong>photos de chantiers</strong>, pages services et{" "}
            <strong>référencement local</strong>.
          </p>

          <div className={styles.ctaRow}>
            <Link className={styles.primaryCta} href="/#contact">
              Demander un devis
            </Link>
            <Link className={styles.secondaryCta} href="/#projets">
              Voir des exemples
            </Link>
          </div>

          <div className={styles.proofRow}>
            <div className={styles.proofItem}>
              <span className={styles.proofTitle}>Objectif</span>
              <span className={styles.proofText}>Confiance + prises de contact</span>
            </div>
            <div className={styles.proofItem}>
              <span className={styles.proofTitle}>Pour</span>
              <span className={styles.proofText}>
                BTP • rénovation • menuiserie • plomberie • électricité…
              </span>
            </div>
            <div className={styles.proofItem}>
              <span className={styles.proofTitle}>Zone</span>
              <span className={styles.proofText}>
                Centre-Bretagne • Côtes-d&apos;Armor • Finistère • Bretagne
              </span>
            </div>
          </div>
        </header>

        <div className={styles.sections}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Ce qui fait convertir un site d’artisan</h2>
            <div className={styles.cards}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Un devis en ligne simple</h3>
                <p className={styles.cardText}>
                  Un formulaire court, orienté chantier (type de travaux, ville,
                  délais, budget) pour recevoir des demandes qualifiées.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Des preuves (photos & avis)</h3>
                <p className={styles.cardText}>
                  Avant/après, finitions, détails, avis clients : c’est ce qui
                  rassure et fait passer à l’action.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Du SEO local</h3>
                <p className={styles.cardText}>
                  Pages de prestations et zone réellement desservie : répondre aux recherches locales qui concernent votre métier.
                </p>
              </div>
            </div>
          </section>

          <section id="projets" className={styles.section}>
            <h2 className={styles.sectionTitle}>Exemple de projet : Charpentier</h2>
            <p className={styles.sectionLead}>
              Un design de site web pour une entreprise de charpente : visuels
              percutants, mise en avant du savoir-faire et parcours clair vers la
              demande de devis.
            </p>
            <div className={styles.projectGrid}>
              <div className={styles.projectMedia}>
                <video
                  className={styles.projectVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/images/carpenters.png"
                >
                  <source src="/carpenter.webm" type="video/webm" />
                </video>
              </div>
              <div className={styles.projectInfo}>
                <p className={styles.projectTitle}>Charpentier • Charpente</p>
                <p className={styles.projectText}>
                  L’objectif : inspirer confiance dès l’arrivée sur la page avec
                  une identité forte, des sections “Réalisations” et “Services”
                  lisibles, puis un bouton “Devis” toujours accessible.
                </p>
                <ul className={styles.projectBullets}>
                  <li>Hero + proposition de valeur</li>
                  <li>Galerie chantiers (preuves)</li>
                  <li>Pages services + zones (SEO local)</li>
                  <li>Devis en ligne orienté chantier</li>
                </ul>
                <div className={styles.ctaRowSmall}>
                  <Link className={styles.primaryCta} href="/#contact">
                    Demander un devis
                  </Link>
                  <Link className={styles.secondaryCta} href="/blog">
                    Conseils (blog)
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Une structure “artisan” qui marche</h2>
            <div className={styles.split}>
              <div className={styles.splitCol}>
                <ul className={styles.checklist}>
                  <li>Accueil clair + accroche orientée bénéfice</li>
                  <li>1 page par service (mot-clé + ville)</li>
                  <li>Réalisations / chantiers (galerie + textes)</li>
                  <li>Avis + zones d’intervention + FAQ</li>
                  <li>Devis en ligne + contact rapide</li>
                </ul>
              </div>
              <div className={styles.splitCol}>
                <div className={styles.highlightBox}>
                  <p className={styles.highlightTitle}>Le but</p>
                  <p className={styles.highlightText}>
                    Un visiteur doit comprendre en 10 secondes{" "}
                    <strong>ce que vous faites</strong>,{" "}
                    <strong>où vous intervenez</strong> et{" "}
                    <strong>comment demander un devis</strong>.
                  </p>
                  <div className={styles.ctaRowSmall}>
                    <Link className={styles.primaryCta} href="/#contact">
                      Je veux une structure
                    </Link>
                    <Link className={styles.secondaryCta} href="/blog">
                      Lire le blog
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Des pages locales utiles, selon vos prestations</h2>
            <p className={styles.sectionLead}>
              Une page locale doit apporter des informations propres à votre zone et à vos chantiers.
              Les pages de prestations répondent, elles, aux questions de vos clients.
            </p>
            <div className={styles.linkCards}>
              <Link className={styles.linkCard} href="/site-web-artisans-cotes-armor">
                <span className={styles.linkCardTitle}>Côtes-d&apos;Armor (22)</span>
                <span className={styles.linkCardText}>
                  Devis en ligne, galerie chantiers, SEO local.
                </span>
              </Link>
              <Link className={styles.linkCard} href="/site-web-artisans-finistere">
                <span className={styles.linkCardTitle}>Finistère (29)</span>
                <span className={styles.linkCardText}>
                  Visibilité “artisan + ville” et pages services.
                </span>
              </Link>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Comment ça se passe</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>1</span>
                <div className={styles.stepBody}>
                  <p className={styles.stepTitle}>Cadrage</p>
                  <p className={styles.stepText}>
                    Métier, zone, services, objectifs, exemples de chantiers.
                  </p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>2</span>
                <div className={styles.stepBody}>
                  <p className={styles.stepTitle}>Structure + design</p>
                  <p className={styles.stepText}>
                    Maquettes simples, orientées conversion.
                  </p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>3</span>
                <div className={styles.stepBody}>
                  <p className={styles.stepTitle}>Développement</p>
                  <p className={styles.stepText}>
                    Site rapide, propre, prêt pour le SEO local.
                  </p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>4</span>
                <div className={styles.stepBody}>
                  <p className={styles.stepTitle}>Mise en ligne</p>
                  <p className={styles.stepText}>
                    Suivi, optimisations, contenus (blog) si besoin.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>FAQ (rapide)</h2>
            <div className={styles.faq}>
              <div className={styles.faqItem}>
                <p className={styles.faqQ}>Combien de pages faut-il ?</p>
                <p className={styles.faqA}>
                  Souvent 5 à 8 pages suffisent (Accueil, Services, Réalisations,
                  Devis, Contact + 2/3 pages SEO locales).
                </p>
              </div>
              <div className={styles.faqItem}>
                <p className={styles.faqQ}>Et si je n’ai pas de photos ?</p>
                <p className={styles.faqA}>
                  On démarre avec ce que vous avez, puis on met en place une
                  routine simple de photos de chantier pour alimenter la galerie.
                </p>
              </div>
              <div className={styles.faqItem}>
                <p className={styles.faqQ}>Le SEO local, ça marche quand ?</p>
                <p className={styles.faqA}>
                  La visibilité progresse avec des pages utiles, une fiche d’établissement complète et des preuves de votre activité. Le délai dépend de la concurrence et de la qualité des contenus.
                </p>
              </div>
            </div>
          </section>

          <section id="offres" className={styles.section}>
            <h2 className={styles.sectionTitle}>Offres (sites web artisans)</h2>
            <p className={styles.sectionLead}>
              Trois niveaux selon vos objectifs : être trouvé localement, générer
              des demandes qualifiées, ou construire une image haut de gamme.
            </p>

            <div className={styles.pricingGrid}>
              <div className={styles.priceCard}>
                <div className={styles.priceHeader}>
                  <p className={styles.priceName}>Essentiel</p>
                  <p className={styles.priceDesc}>Poser les bases, être trouvé sur Google</p>
                </div>

                <p className={styles.priceValue}>1 200 €</p>
                <p className={styles.priceMeta}>paiement en 2 fois • livraison 3 semaines</p>

                <ul className={styles.priceList}>
                  <li className={styles.priceIncluded}>Site 3 pages (Accueil, Services, Contact)</li>
                  <li className={styles.priceIncluded}>Design pro & adapté mobile</li>
                  <li className={styles.priceIncluded}>Fiche Google Business configurée</li>
                  <li className={styles.priceIncluded}>Formulaire de demande de devis</li>
                  <li className={styles.priceIncluded}>SEO de base (titres, descriptions, balises)</li>
                  <li className={styles.priceIncluded}>Mise en ligne incluse</li>
                  <li className={styles.priceExcluded}>Photos de chantier intégrées</li>
                  <li className={styles.priceExcluded}>Page avis clients</li>
                  <li className={styles.priceExcluded}>Blog / actualités</li>
                </ul>

                <div className={styles.ctaRowSmall}>
                  <Link className={styles.primaryCta} href="/#contact">Choisir Essentiel</Link>
                </div>
              </div>

              <div className={`${styles.priceCard} ${styles.priceCardFeatured}`}>
                <div className={styles.priceBadge}>Offre Pro</div>
                <div className={styles.priceHeader}>
                  <p className={styles.priceName}>Pro</p>
                  <p className={styles.priceDesc}>Convaincre et générer des appels qualifiés</p>
                </div>

                <p className={styles.priceValue}>2 200 €</p>
                <p className={styles.priceMeta}>paiement en 3 fois • livraison 4-5 semaines</p>

                <ul className={styles.priceList}>
                  <li className={styles.priceIncluded}>Tout l’offre Essentiel</li>
                  <li className={styles.priceIncluded}>5 à 7 pages (Réalisations, FAQ, à propos…)</li>
                  <li className={styles.priceIncluded}>Galerie photos de chantiers</li>
                  <li className={styles.priceIncluded}>Page avis clients (Google intégré)</li>
                  <li className={styles.priceIncluded}>SEO local approfondi (Côtes-d’Armor / Finistère)</li>
                  <li className={styles.priceIncluded}>Bouton click-to-call visible partout</li>
                  <li className={styles.priceIncluded}>1 mois de suivi offert</li>
                  <li className={styles.priceExcluded}>Blog / actualités</li>
                </ul>

                <div className={styles.ctaRowSmall}>
                  <Link className={styles.primaryCta} href="/#contact">Choisir Pro</Link>
                </div>
              </div>

              <div className={styles.priceCard}>
                <div className={styles.priceHeader}>
                  <p className={styles.priceName}>Sur-mesure</p>
                  <p className={styles.priceDesc}>Refonte complète, image haut de gamme</p>
                </div>

                <p className={styles.priceValue}>3 500 €+</p>
                <p className={styles.priceMeta}>paiement en 4 fois • livraison 6-8 semaines</p>

                <ul className={styles.priceList}>
                  <li className={styles.priceIncluded}>Tout l’offre Pro</li>
                  <li className={styles.priceIncluded}>Design unique sur-mesure (maquette Figma)</li>
                  <li className={styles.priceIncluded}>Blog / actualités chantiers</li>
                  <li className={styles.priceIncluded}>Stratégie SEO (3 mois inclus)</li>
                  <li className={styles.priceIncluded}>Formulaire devis interactif</li>
                  <li className={styles.priceIncluded}>Intégration agenda / prise de RDV</li>
                  <li className={styles.priceIncluded}>3 mois de suivi & corrections offerts</li>
                </ul>

                <div className={styles.ctaRowSmall}>
                  <Link className={styles.primaryCta} href="/#contact">Parler d’un projet</Link>
                </div>
              </div>
            </div>

            <div className={styles.maintenance}>
              <p className={styles.maintenanceKicker}>Maintenance mensuelle optionnelle — Pack sérénité</p>
              <p className={styles.maintenanceLead}>
                Si vous souhaitez déléguer les mises à jour après la mise en ligne, choisissez un suivi adapté à vos besoins.
              </p>
              <div className={styles.maintenanceGrid}>
                <div className={styles.maintenanceCard}>
                  <p className={styles.maintenancePrice}>49 €<span className={styles.maintenanceUnit}>/mois</span></p>
                  <p className={styles.maintenanceName}>Starter</p>
                  <p className={styles.maintenanceText}>mises à jour + sauvegarde</p>
                </div>
                <div className={styles.maintenanceCard}>
                  <p className={styles.maintenancePrice}>89 €<span className={styles.maintenanceUnit}>/mois</span></p>
                  <p className={styles.maintenanceName}>Pro</p>
                  <p className={styles.maintenanceText}>rapport SEO + modifs 2h</p>
                </div>
                <div className={styles.maintenanceCard}>
                  <p className={styles.maintenancePrice}>149 €<span className={styles.maintenanceUnit}>/mois</span></p>
                  <p className={styles.maintenanceName}>Premium</p>
                  <p className={styles.maintenanceText}>contenu chantiers mensuel</p>
                </div>
              </div>
            </div>
          </section>

          <Projets />
          <section className={styles.finalCta}>
            <h2 className={styles.finalTitle}>On construit votre site “artisan” ?</h2>
            <Contact />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
