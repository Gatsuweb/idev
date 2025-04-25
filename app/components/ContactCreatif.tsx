import Image from "next/image";
import styles from "../styles/ContactCreatif.module.css";

export default function ContactCreatif() {
  return (
    <section className={styles.contactCreatifSection}>
      <div className={styles.contactCreatifGrid}>
        {/* Left Card */}
        <div className={styles.contactCard + " " + styles.contactCardDark}>
       
            <div className={styles.contactCardTop}>
              <p><strong>On part là dessus ?</strong></p>
              <p>On discute de ton projet par ici</p>
            </div>
            <div className={styles.contactCardBottom}>
            <a href=""><h2>Contact</h2></a>
              
            </div>
         
        </div>
        {/* Right Card */}
        <div className={styles.contactCard + " " + styles.contactCardPink}>
    
            <div className={styles.contactCardTop}>
              <p><strong>Un doute ?</strong></p>
              <p>Demande moi une petite maquette pour avoir une première idée</p>
            </div>
            <div className={styles.contactCardBottom}>
                <a href=""><h2>Maquette <Image src="/arrow.svg" alt="icone flèche" width={50} height={50} className={styles.arrowHero}/></h2></a>
              
            </div>
       
        </div>
      </div>
    </section>
  );
}