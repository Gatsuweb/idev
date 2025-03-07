"use client"
import Image from "next/image"
import s from "../styles/About.module.css"
import { useState } from "react";
import { motion } from "framer-motion";

const letterVariant = {
  initial: {
    y: 50, // Laisse un peu de place pour un effet naturel
    opacity: 0,
  },
  animate: (i:number) => ({
    y: 0,
    opacity: 1,
    rotate: [15, 0], // Ajoute une rotation qui revient à 0
    transition: {
      duration: 0.4,
      delay: i * 0.05,
      ease: "easeOut",
    },
  }),
};

export const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const avis = [
    {
      titre: "Valkyrink",
      star: 5,
      desc: "Je recommande IDev, pour son professionnalisme, sa créativité et sa rigueur. Je lui ai fait confiance à 100% pour le design et la structure de mon projet, il a cerné mes goûts et mes attentes. Foncez les yeux fermés !"
    },
    {
      titre: "Mael Morlevat",
      star: 5,
      desc: "J’ai fais appel à Ivan pour le développement de mon site internet, chose à laquelle il a parfaitement répondu en étant très professionnel et à l’écoute, si vous cherchez quelqu’un pour construire un site de A à Z, n’hésitez pas ! "
    },
    // {
    //   titre: "Pattes et compagnie",
    //   star: 5,
    //   desc: "Afou le meilleur il m’a fait un site de fou, il est à l’écoute je l’aime trop en fait."
    // },
    // {
    //   titre: "CyberViking",
    //   star: 5,
    //   desc: "Afou le meilleur il m’a fait un site de fou, il est à l’écoute je l’aime trop en fait."
    // },
  ];

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
          <h2 className={s.animatedTitle}>
            {"À PROPOS".split("").map((letter, i) => (
              <motion.div
              key={i}
              custom={i}
              variants={letterVariant}
              initial="initial"
              whileInView="animate"
              className={s.letter}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.div>
            ))}
          </h2>
          <p>
          Je suis <span>Ivan Duran</span>, développeur web et <span>créatif</span> dans l&apos;âme. <br />
          Mon objectif est <span>d&apos;aider les entreprises</span> à donner vie à leur présence en ligne en créant des <span>sites vitrine modernes</span>, fonctionnels et adaptés à leurs besoins.</p>
          <p>Avec une approche centrée sur <span>l&apos;innovation</span> et le design, je mets mon expertise à votre service pour vous offrir un produit final qui saura répondre à vos besoins et <span>renforcer votre image.</span></p>
        </div>

        <Image src="/afou2bis.webp" alt="Photo auteur" width={2000} height={3000} className={s.imgAfous} />

        <div className={s.carousselAbout}>
          <div className={s.cardAbout}>
            <div className={s.headerAvis}>
              <h4>{avis[currentIndex].titre}</h4>
              <p><span>★</span>{avis[currentIndex].star}</p>
            </div>
            <p>{avis[currentIndex].desc}</p>

            <Image
              src="/arrowCaroussel.svg"
              alt="Flèche droite"
              width={50}
              height={40}
              className={s.arrow}
              onClick={nextProject}
            />
            <Image
              src="/arrowCarousselG.svg"
              alt="Flèche gauche"
              width={50}
              height={40}
              className={s.arrow}
              onClick={prevProject}
            />
          </div>

          {avis[currentIndex + 1] && (
            <div className={s.cardAbout}>
              <div className={s.headerAvis}>
                <h4>{avis[currentIndex + 1].titre}</h4>
                <p><span>★</span>{avis[currentIndex].star}</p>
                </div>
              <p>{avis[currentIndex + 1].desc}</p>
            </div>
          )}
        </div>

        <ul className={s.footerAbout}>
          <li>Details</li>
          <li>Innovation</li>
          <li>Créativité</li>
        </ul>
      </div>


      <div className={s.afouContainer}>
        <Image src="/afou2bis.jpg" alt="Photo auteur" width={2000} height={3000} className={s.imgAfousss} />
        <Image src="/afou2bis.jpg" alt="Photo auteur" width={2000} height={3000} className={s.imgAfouss} />
              </div>
      {/* <div>
        
        <Image src="/afou2bis.jpg" alt="Photo auteur" width={2000} height={3000} className={s.imgAfou} />
      </div> */}

      <ul className={s.footerAbouts}>
        <li>Details</li>
        <li>Innovation</li>
        <li>Créativité</li>
      </ul>
    </div>
  );
};
