import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import styles from "@/app/styles/Post.module.css";
import pageStyles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: "Site web artisan Finistère (29) | Référencement local & demandes de devis",
  description:
    "Création de sites web pour artisans dans le Finistère (29) : devis en ligne, photos de chantier, pages services, SEO local. Basé à Plévin, frontière 22/29.",
  keywords: [
    "site web artisan Finistère",
    "site internet artisan 29",
    "création site vitrine artisan",
    "devis en ligne artisan",
    "photos de chantier",
    "référencement local 29",
    "Centre-Bretagne",
    "Carhaix",
    "Plévin",
  ],
};

export default function ArtisansFinisterePage() {
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
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Site web pour artisans dans le Finistère (29)
          </h1>
        </header>

        <div className={styles.content}>
          <p>
            Dans le Finistère, la concurrence est forte : si votre entreprise
            n&apos;apparaît pas quand on cherche “artisan + ville”, vous laissez des
            chantiers à d&apos;autres.
          </p>

          <p>
            Je conçois des sites web pensés pour les artisans :{" "}
            <strong>devis en ligne</strong>, <strong>galerie de chantiers</strong>,{" "}
            <strong>pages services</strong> et <strong>référencement local</strong>.
            Basé à <strong>Plévin</strong> (frontière 22/29), j&apos;interviens sur le{" "}
            <strong>Centre-Bretagne</strong> et le <strong>Finistère</strong>.
          </p>

          <h2>Le triptyque qui fonctionne</h2>
          <ul>
            <li>
              <strong>Preuve</strong> : des photos de chantiers (qualité, finitions, avant/après).
            </li>
            <li>
              <strong>Confiance</strong> : avis, méthode, zones, délais, réponses aux questions.
            </li>
            <li>
              <strong>Action</strong> : un devis en ligne simple (et un contact rapide).
            </li>
          </ul>

          <h2>Pages liées</h2>
          <ul>
            <li>
              <Link href="/site-web-artisans-bretagne">Page artisans Bretagne</Link>
            </li>
            <li>
              <Link href="/site-web-artisans-cotes-armor">
                Page artisans Côtes-d&apos;Armor (22)
              </Link>
            </li>
          </ul>

          <h2>On le fait proprement</h2>
          <p>
            Je vous propose une structure efficace (Accueil + Services + Réalisations +
            Devis + Contact), avec des pages prêtes pour le SEO local et une base
            technique performante.
          </p>

          <p>
            <Link href="/#contact">Me contacter</Link> ou{" "}
            <Link href="/blog">lire le blog</Link>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
