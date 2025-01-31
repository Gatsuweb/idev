import Image from "next/image"
import s from "../styles/Projets.module.css"
import { useState } from "react"

export const Projets = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projet.length);
      };
    
      const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projet.length) % projet.length);
      };
    const projet = [
        {
            link:"valkyrink-tatoo.com",
            name: "VALKYRINK",
            desc: "Site vitrine interactif pour un salon de tatouage",
            image: "projets1.svg"
        },
        {
            link:"maelmorlevat.com",
            name: "MAEL MORLEVAT",
            desc: "Site vitrine pour un chef cuisinier à domicile",
            image: "logoIdev.svg"
        },
        {
            link:"valkyrink-tatoo.com",
            name: "LATIA",
            desc: "Site vitrine pour une agence de graphisme",
            image: "projets1.svg"
        },
        {
            link:"valkyrink-tatoo.com",
            name: "valkyrink",
            desc: "site vitrine tatoueur interactif",
            image: "projets1.svg"
        },
    ]
    return (
        <div className={s.projetContainer}>
          <div className={s.headerProjet}>
            <div>
              <a href={projet[currentIndex].link}>{projet[currentIndex].name}</a>
            </div>
            <div>
              <h2>PROJETS</h2>
              <p>{projet[currentIndex].desc}</p>
            </div>
          </div>
          <div className={s.caroussel}>
            <Image
              src={projet[currentIndex].image}
              alt="Image projet"
              width={800}
              height={600}
              className={s.imgProjet}
            />
            <Image
              src="arrowCarousselG.svg"
              alt="Flèche gauche"
              width={50}
              height={40}
              className={s.arrow}
              onClick={prevProject}
            />
            <Image
              src="arrowCaroussel.svg"
              alt="Flèche droite"
              width={50}
              height={40}
              className={s.arrow}
              onClick={nextProject}
            />
          </div>
        </div>
      );
    };
