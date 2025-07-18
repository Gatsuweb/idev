import Image from "next/image"
import s from "../styles/Hero.module.css"

export const Hero = () => {
  return (
    <header className={s.heroContainer}>
      <main className={s.heroGauche}>
      <div className={s.heroTitle}>
          <h1>DÉVELOPPEUR</h1>
          <div className={s.nametitle}>
            <h1>WEB</h1>
            <span id={s.name}>DURAN IVAN</span>
          </div>
        </div>
        <div className={s.pAnimHero}>
        <p>Développeur web freelance basé à Carhaix, j&apos;aide les entreprises à renforcer leur image de marque en les accompagnant dans la création de sites web <span>sur-mesure</span> et <span>performants</span>.</p>
        </div>
        <div className={s.btnContactContainer}>
        <a href="#contact">
                <button className={s.btnContact}>CONTACT <Image src="/arrow.svg" alt="icone flèche" width={25} height={25} className={s.arrowHero}/></button>
                </a>
                <a href="#contact">
                <button className={s.btnContacts}>CONTACT<Image src="/arrow.svg" alt="icone flèche" width={25} height={25} className={s.arrowHero}/></button>
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
            <p>Disponible en</p>
          </div>
          <div className={s.pAnimHero}>

            <p><span>AOÛT</span></p>
            </div>

        </div>
      </div>
      <div className={s.btnContactContainerM}>
          <a href="#contact">
          <button className={s.btnContact}>CONTACT <Image src="arrow.svg" alt="icone flèche" width={25} height={25} className={s.arrowHero}/></button>
          </a>
          <a href="#contact">
          <button className={s.btnContacts}>CONTACT<Image src="arrow.svg" alt="icone flèche" width={25} height={25} className={s.arrowHero}/></button>
          </a>
      </div>
    </header>
  )
}
