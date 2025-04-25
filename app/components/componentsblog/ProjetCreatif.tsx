"use client"
import Image from "next/image";
import styles from "@/app/styles/ProjetCreatif.module.css";
import { useEffect } from "react";

export default function ProjetCreatif() {

    useEffect(() => {
        const cursor = document.getElementById("customCursor");
      
        const moveCursor = (e: MouseEvent) => {
          if (cursor) {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
          }
        };
      
        document.addEventListener("mousemove", moveCursor);
      
        return () => {
          document.removeEventListener("mousemove", moveCursor);
        };
      }, []);

  return (
    <section className={styles.projetCreatifSection}>
        <div className={styles.projetCreatifHeader}>
            <div className={styles.projetCreatifTitle}>
              <div>
            <h2>Découvre</h2>
            <h2>mes <span>créations</span></h2>
            </div>
            <Image src="/arrow.svg" alt="icone flèche" width={100} height={100} className={styles.arrowHero}/>
            </div>
            <div className={styles.projetCreatifP}>
            <p>Quelques uns de mes projets personnalisés, uniques, construits avec soin et attention </p>
            </div>
        </div>
      <div className={styles.projetCreatifGrid}>
        {/* Project 1 */}
        <div className={styles.projetCreatifCard}>
          <div className={styles.projetCreatifImgWrapper}>
            <Image
              src="/imagesblog/g2.png"
              alt="Quivo Logistics"
              fill
              className={styles.projetCreatifImg}
              style={{ objectFit: "cover" }}
              priority
              onMouseEnter={() => (document.querySelector("#customCursor") as HTMLElement)?.classList.add(styles.active)}
              onMouseLeave={() => (document.querySelector("#customCursor") as HTMLElement)?.classList.remove(styles.active)}
            />
          </div>
          <div className={styles.projetCreatifInfo}>
            <h3>Valkyrink | Tatouage artistique</h3>
            <p>SEO – identité visuelle – Site web</p>
          </div>
        </div>
        {/* Project 2 */}
        <div className={styles.projetCreatifCard}>
          <div className={styles.projetCreatifImgWrapper}>
            <Image
              src="/imagesblog/g1.png"
              alt="Ascon Systems"
              fill
              className={styles.projetCreatifImg}
              style={{ objectFit: "cover" }}
              priority
              onMouseEnter={() => (document.querySelector("#customCursor") as HTMLElement)?.classList.add(styles.active)}
              onMouseLeave={() => (document.querySelector("#customCursor") as HTMLElement)?.classList.remove(styles.active)}
            />
          </div>
          <div className={styles.projetCreatifInfo}>
            <h3>Mael Morlevat | Chef cuisinier à domicile</h3>
            <p>SEO – identité visuelle – Site web</p>
          </div>
        </div>
         <div className={styles.projetCreatifCard}>
          <div className={styles.projetCreatifImgWrapper}>
            <Image
              src="/imagesblog/g3.png"
              alt="Quivo Logistics"
              fill
              className={styles.projetCreatifImg}
              style={{ objectFit: "cover" }}
              priority
              onMouseEnter={() => (document.querySelector("#customCursor") as HTMLElement)?.classList.add(styles.active)}
              onMouseLeave={() => (document.querySelector("#customCursor") as HTMLElement)?.classList.remove(styles.active)}
            />
          </div>
          <div className={styles.projetCreatifInfo}>
          <h3>Mel'ink | Tatouage artistique</h3>
          <p>SEO – identité visuelle – Site web</p>
          </div>
        </div>
  
      </div>
      <div className={styles.customCursor} id="customCursor">OUVRIR</div>
    </section>
  );
}