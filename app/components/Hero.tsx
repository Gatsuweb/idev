import Image from "next/image"
import s from "../styles/Hero.module.css"

export const Hero = () => {
  return (
    <div className={s.heroContainer}>
      <div className={s.heroGauche}>
      <div className={s.heroTitle}>
          <h1>DÉVELOPPEUR</h1>
          <div className={s.nametitle}>
            <h1>WEB</h1>
            <span id={s.name}>DURAN IVAN</span>
          </div>
        </div>
        <p>J&apos;aide les entreprises à faire grandir leur image de marque en leur proposant un site web <span>sur-mesure</span> et <span>innovant</span></p>
        <div className={s.btnContactContainer}>
                <button className={s.btnContact}>CONTACT <Image src="arrow.svg" alt="icone flèche" width={25} height={25} className={s.arrowHero}/></button>
                <button className={s.btnContacts}>CONTACT<Image src="arrow.svg" alt="icone flèche" width={25} height={25} className={s.arrowHero}/></button>
            
            </div>
      </div>

      <div className={s.heroDroit}>
        <p>(Scroll vers le bas <Image src="arrow.svg" alt="icone flèche" width={12} height={12} className={s.arrowScroll}/>)</p>
        <Image src="/afouIdev.svg" alt="photo auteur" height={300} width={230} className={s.afaf}/>
        <div className={s.dispo}>
          <p>Disponible en</p>
          <span>JANVIER</span>
        </div>
      </div>
      <div className={s.btnContactContainerM}>
                <button className={s.btnContact}>CONTACT <Image src="arrow.svg" alt="icone flèche" width={25} height={25} className={s.arrowHero}/></button>
                <button className={s.btnContacts}>CONTACT<Image src="arrow.svg" alt="icone flèche" width={25} height={25} className={s.arrowHero}/></button>
            
            </div>
    </div>
  )
}
