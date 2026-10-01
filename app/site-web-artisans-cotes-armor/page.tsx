import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Projets } from "../components/Projets";
import styles from "@/app/styles/Post.module.css";
import pageStyles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: "Site web artisan Côtes-d'Armor (22) | Devis en ligne & SEO local",
  description:
    "Création de sites web pour artisans dans les Côtes-d'Armor (22) : devis en ligne, galerie chantiers, pages services, référencement local. Basé à Plévin, frontière 22/29.",
  alternates: { canonical: "/site-web-artisans-cotes-armor" },
  keywords: [
    "site web artisan Côtes-d'Armor",
    "site internet artisan 22",
    "création site vitrine artisan",
    "devis en ligne artisan",
    "photos de chantier",
    "référencement local 22",
    "Plévin",
    "Centre-Bretagne",
  ],
};

export default function ArtisansCotesArmorPage() {
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
            Site web pour artisans dans les Côtes-d&apos;Armor (22)
          </h1>
        </header>

        <div className={styles.content}>
          <p>
            Vous êtes artisan (bâtiment, rénovation, charpente, couverture,
            plomberie, électricité, menuiserie…) et vous voulez un site qui
            <strong> ramène des demandes</strong>, pas un site “vitrine” qui dort.
          </p>

          <p>
            Basé à <strong>Plévin (22340)</strong>, à la frontière 22/29, j&apos;accompagne
            les artisans sur le <strong>Centre-Bretagne</strong> et les{" "}
            <strong>Côtes-d&apos;Armor</strong> avec une approche simple :{" "}
            <strong>clarté</strong>, <strong>preuves</strong> (photos),{" "}
            <strong>conversion</strong> (devis) et <strong>SEO local</strong>.
          </p>

          <h2>Ce que votre site doit contenir</h2>
          <ul>
            <li>
              Une page <strong>Services</strong> par métier/prestation (mots-clés locaux).
            </li>
            <li>
              Une page <strong>Réalisations</strong> (photos de chantiers, avant/après).
            </li>
            <li>
              Un <strong>formulaire devis</strong> rapide et orienté “chantier”.
            </li>
            <li>
              Des <strong>avis</strong> + une présentation claire (zone d’intervention, délais).
            </li>
          </ul>

          <h2>Pages liées</h2>
          <p>Votre site est déjà en ligne mais manque de visibilité ? Découvrez comment <Link href="/referencement-site-internet-bretagne">améliorer le référencement de votre site internet dans les Côtes-d’Armor et en Bretagne</Link>.</p>
          <ul>
            <li>
              <Link href="/site-web-artisans-bretagne">Page artisans Bretagne</Link>
            </li>
            <li>
              <Link href="/site-web-artisans-finistere">
                Page artisans Finistère (29)
              </Link>
            </li>
          </ul>

          <h2>Vous voulez un devis ?</h2>
          <p>
            <Link href="/#contact">Envoyez-moi votre besoin</Link> (métier, villes ciblées,
            exemples de chantiers) : je vous propose une structure de pages prête
            pour le SEO local.
          </p>

          <p>
            <Link href="/blog">Lire le blog</Link> pour des conseils concrets (SEO local,
            photos de chantier, formulaires devis).
          </p>
        </div>
      </div>
      <Projets />
      <Footer />
    </>
  );
}
