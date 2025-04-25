import styles from "@/app/site-web-pour-creatifs/siteCreatif.module.css";
import Link from "next/link";
import Image from "next/image";

export const AboutApproach = () => {
  return (
    <section className={styles.aboutApproach}>
      <div className={styles.aboutApproachContainer}>
        <div className={styles.aboutContent}>
          <h2>
            Mon <span>approche</span>
          </h2>
        </div>
        <div className={styles.aboutApproachText}>
          <p>
            Je crois qu&apos;un site web doit être aussi unique que la personne ou la marque qu&apos;il représente.
          </p>
        </div>
        <div className={styles.aboutApproachText}>
          <p>
            C&apos;est pourquoi je prends le temps de comprendre ton univers créatif, tes valeurs et tes objectifs avant de commencer à concevoir.
          </p>
        </div>
        <div className={styles.aboutApproachText}>
          <p>
            Mon approche combine design intuitif, développement sur mesure et stratégie de référencement pour créer un site qui te ressemble et qui performe.
          </p>
        </div>
        <div className={styles.btnApproach}>
          <div className={styles.btnContactContainer}>
            <div className={styles.btnContacts}>
              <Link href="/contact">
                DISCUTONS
                <Image
                  src="/arrow.svg"
                  alt="Flèche"
                  width={20}
                  height={20}
                  className={styles.arrowHero}
                />
              </Link>
            </div>
            <div className={styles.btnContact}>
              <Link href="/contact">
                DISCUTONS
                <Image
                  src="/arrow.svg"
                  alt="Flèche"
                  width={20}
                  height={20}
                  className={styles.arrowHero}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

