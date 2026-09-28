"use client";
import Image from "next/image";
import styles from "../styles/ContactCreatif.module.css";

export default function ContactCreatif() {
  return (
    <section className={styles.contactCreatifSection}>
      <div className={styles.contactCreatifGrid}>
        <div className={styles.contactCard + " " + styles.contactCardDark}>
          <div className={styles.contactCardTop}>
            <p><strong>On part là-dessus ?</strong></p>
            <p>Appelle-moi directement au 06 34 67 07 82 pour parler de ton projet.</p>
          </div>
          <a className={styles.contactCardBottom} href="tel:+33634670782">
            <h2>Appeler <Image src="/arrow-w.png" alt="" width={50} height={50} className={styles.arrowHero} /></h2>
          </a>
        </div>
        <div className={styles.contactCard + " " + styles.contactCardPink}>
          <div className={styles.contactCardTop}>
            <p><strong>Un doute ?</strong></p>
            <p>Demande-moi une petite maquette pour avoir une première idée.</p>
          </div>
          <div className={styles.contactCardBottom}>
            <a href="mailto:ivandevelopment@outlook.com">
              <h2>Maquette <Image src="/arrow.svg" alt="" width={50} height={50} className={styles.arrowHero} /></h2>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}