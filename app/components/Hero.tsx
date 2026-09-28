import Image from "next/image"
import s from "../styles/Hero.module.css"

export const Hero = () => {
  return (
    <header className={s.heroContainer}>
      <main className={s.heroGauche}>
      <div className={s.heroTitle}>
          <h1>SITES WEB
            <span className={s.nametitle}>CARHAIX <span id={s.name}>IVAN DURAN</span></span>
          </h1>
        </div>
        <div className={s.pAnimHero}>
        <p>Basé à Plévin près de Carhaix, je crée des sites web pour les <span>artisans</span>, les artistes et les associations du Poher : vos réalisations, vos activités et un moyen clair de vous contacter.</p>
        </div>
        <div className={s.btnContactContainer}>
          <a className={s.callLink} href="tel:+33634670782" aria-label="Appeler Ivan Duran au 06 34 67 07 82">
            <span className={s.btnContacts} aria-hidden="true">APPELER <Image src="/iconeTel.svg" alt="" width={25} height={25} /></span>
            <span className={s.btnContact} aria-hidden="true">APPELER <Image src="/iconeTel.svg" alt="" width={25} height={25} /></span>
          </a>
        </div>
      </main>

      <div className={s.heroDroit}>
        <div className={s.pAnimHero}>
          <p>(Scrollez vers le bas <Image src="/arrow.svg" alt="icone flèche" width={12} height={12} className={s.arrowScroll}/>)</p>
        </div>
        <div className={s.pAnimHero}>
          <Image src="/afou2bis.webp" alt="photo auteur" height={300} width={200} className={s.afaf} priority/>
          </div>
        <div className={s.dispo}>
          <div className={s.pAnimHero}>
            <p>Développeur</p>
          </div>
          <div className={s.pAnimHero}>

            <p><span>Centre-Bretagne</span></p>
            </div>

        </div>
      </div>
      <div className={s.btnContactContainerM}>
        <a className={s.callLink} href="tel:+33634670782" aria-label="Appeler Ivan Duran au 06 34 67 07 82">
          <span className={s.btnContacts} aria-hidden="true">APPELER <Image src="/iconeTel.svg" alt="" width={25} height={25} /></span>
          <span className={s.btnContact} aria-hidden="true">APPELER <Image src="/iconeTel.svg" alt="" width={25} height={25} /></span>
        </a>
      </div>
    </header>
  )
}