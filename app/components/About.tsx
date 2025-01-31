import Image from "next/image"
import s from "../styles/About.module.css"
import { useState } from "react";
import { start } from "repl";

export const About = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const avis = [
        {
            titre: "Valkyrink",
            star: 5,
            desc: "Afou le meilleur il m’a fait un site de fou, il est a léécoute je l’aime trop en fait, Afou le meilleur il m’a fait un site de fou, il est a lécoute je l’aime trop en fait"
        },

        {
            titre: "Mael Morlevat",
            star: 5,
            desc: "Afou le meilleur il m’a fait un site de fou, il est a léécoute je l’aime trop en fait"
        },
        {
            titre: "Pattes et compagnie",
            star: 5,
            desc: "Afou le meilleur il m’a fait un site de fou, il est a léécoute je l’aime trop en fait"
        },
        {
            titre: "CyberViking",
            star: 5,
            desc: "Afou le meilleur il m’a fait un site de fou, il est a léécoute je l’aime trop en fait"
        },
    ]

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % avis.length);
      };
    
      const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 2 + avis.length) % avis.length);
      };

  return (
    <div className={s.aboutContainer}>
        <div className={s.aboutContent}>
            <div className={s.headerAbout}>
                <h2>A PROPOS</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit veritatis modi sed praesentium ratione quae, eius minus minima necessitatibus quod harum, magnam vero deleniti maiores. Tempore repudiandae facere nisi dolore.</p>
            </div>
            <Image src="afouIdev.svg" alt="Photo auteur" width={500} height={600} className={s.imgAfous}/>
            <div className={s.carousselAbout}>
                <div className={s.cardAbout}>
                    <div className={s.headerAvis}>
                        <h4>{avis[currentIndex].titre}</h4>
                        <span>{avis[currentIndex].star}</span>
                    </div>
                    <p>{avis[currentIndex].desc}</p>

                    <Image
                    src="arrowCaroussel.svg"
                    alt="Flèche droite"
                    width={50}
                    height={40}
                    className={s.arrow}
                    onClick={nextProject}
                    />
                    <Image
                    src="arrowCarousselG.svg"
                    alt="Flèche gauche"
                    width={50}
                    height={40}
                    className={s.arrow}
                    onClick={prevProject}
                    />
                </div>
                <div className={s.cardAbout}>
                    <div className={s.headerAvis}>
                        <h4>{avis[currentIndex +1].titre}</h4>
                        <span>{avis[currentIndex +1].star}</span>
                    </div>
                    <p>{avis[currentIndex].desc}</p>
                </div>
            </div>

            <ul className={s.footerAbout}>
                <li>Details</li>
                <li>Innovation</li>
                <li>Créativité</li>
            </ul>
        
        </div>
        <div>
            <Image src="afouIdev.svg" alt="Photo auteur" width={500} height={600} className={s.imgAfou}/>
        </div>
        <ul className={s.footerAbouts}>
                <li>Details</li>
                <li>Innovation</li>
                <li>Créativité</li>
            </ul>
    </div>
  )
}
