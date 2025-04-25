"use client"
import Image from "next/image";
import { PopupModal } from "react-calendly"
import styles from "../styles/ContactCreatif.module.css";
import { useState } from "react";


export default function ContactCreatif() {
  const [isActive, setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  
  return (
    <section className={styles.contactCreatifSection}>
      <div className={styles.contactCreatifGrid}>
        {/* Left Card */}
        <div className={styles.contactCard + " " + styles.contactCardDark}>
       
            <div className={styles.contactCardTop}>
              <p><strong>On part là dessus ?</strong></p>
              <p>On discute de ton projet par ici</p>
            </div>
            <div className={styles.contactCardBottom}  onClick={() => setIsOpen(true)}>
            <h2>Contact<Image src="/arrow-w.png" alt="icone flèche" width={50} height={50} className={styles.arrowHero}/></h2>
              
            </div>
         
        </div>
        {/* Right Card */}
        <div className={styles.contactCard + " " + styles.contactCardPink}>
    
            <div className={styles.contactCardTop}>
              <p><strong>Un doute ?</strong></p>
              <p>Demande moi une petite maquette pour avoir une première idée</p>
            </div>
            <div className={styles.contactCardBottom}>
                <a href="mailto:ivandeveloppment@outlook.com"><h2>Maquette <Image src="/arrow.svg" alt="icone flèche" width={50} height={50} className={styles.arrowHero}/></h2></a>
              
            </div>
       
        </div>
      </div>
       {isOpen && (
                  <PopupModal
                    open={isOpen}
                    url="https://calendly.com/ivanduran2397"
                    onModalClose={() => setIsOpen(false)}
                    rootElement={document.body}
              />
            )}
    </section>
  );
}