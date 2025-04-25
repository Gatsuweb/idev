import styles from "@/app/site-web-pour-creatifs/siteCreatif.module.css";
import Image from "next/image";

export const AboutApproach = () => {
    return (
       <section className={styles.aboutApproach}>
        <div className={styles.aboutContent}>
            <h2>Moi aussi en tant que <span>créatif</span> je fais ma place</h2>
            {/* <p>Je me fais ma place sur Google</p> */}
        </div>
        <div className={styles.approachGridRow}>
            <div className={styles.aboutApproachText}>
                <p>Mon site est peut être beau admettons (dit qu&apos;il est beau, dit le !), une présence en ligne ça se travaille. Le référencement c&apos;est un métier, et un beau site mérite d&apos;être vu.</p>
             
            </div>
            <div className={styles.aboutApproachText}>
                <p>
                    Rend ton site utile, créer des prises de rendez-vous en ligne en 2 cliques, ajoute des fonctionnalités, créer un blog, amuse toi, partage ta passion
                </p>
            </div>
            {/* <div className={styles.afouApproach}>
                <Image src="/afou.png" alt="afou" width={350} height={350} className={styles.afou}/>
            </div> */}
            <div className={styles.btnApproach}>
                <div className={styles.btnContactContainer}>
                    <a href="#contact">
                    <button className={styles.btnContact}>CONTACT MOI<Image src="/arrow.svg" alt="icone flèche" width={25} height={25} className={styles.arrowHero}/></button>
                    </a>
                    <a href="#contact">
                    <button className={styles.btnContacts}>À L&apos;AIDE<Image src="/arrow.svg" alt="icone flèche" width={25} height={25} className={styles.arrowHero}/></button>
                    </a>
                </div>
            </div>
        </div>
       </section>
    );
}

