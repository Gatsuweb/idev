"use client"
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import s from "../styles/ServicesCard.module.css";

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
interface LazyLoadComponentProps {
  Component: React.ComponentType<any>;
}


const Fusee = dynamic(() => import("./Fusee"), { ssr: false });
const Loupe = dynamic(() => import("./Loupe"), { ssr: false });
const Ordi = dynamic(() => import("./Ordi"), { ssr: false });
const Paint = dynamic(() => import("./Paint"), { ssr: false });

const LazyLoadComponent = ({ Component }: LazyLoadComponentProps) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);



  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{isVisible && <Component />}</div>;
};

export const ServicesCard = () => {
  return (
    <div className={s.servicesContainer}>
      <h2 className={s.animatedTitle}>
            {"SERVICES".split("").map((letter, i) => (
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
      <div className={s.servicesCardContainer}>
        <section className={s.card}>
          <p>
          Je transforme vos idées en expériences web uniques, <br /> alliant votre univers à ma touche <span>créativité</span> et <span>immersive</span>
          </p>
        </section>

        <section className={s.cards}>
          <div className={s.contentCards}>
            <p>DESIGN</p>
            <span>(Figma)</span>
          </div>
          <div className={s.canvas}>
            <p>Créeons ensemble le design attirant que vous désirez</p>
            <LazyLoadComponent Component={Paint} />
          </div>
        </section>

        <section className={s.cards}>
          <div className={s.contentCards}>
            <p>DEVELOPPEMENT</p>
            <span>(NextJS)</span>
          </div>
          <div className={s.canvas}>
            <p>Nous validons la maquette du projet plus qu&apos;à le développer et lui donner vie.</p>
            <LazyLoadComponent Component={Ordi} />
          </div>
        </section>

        <section className={s.cards}>
          <div className={s.contentCards}>
            <p>DESIGN 3D</p>
            <span>(Spline)</span>
          </div>
          <div className={s.canvas}>
            <p>Sur demande, je crée et intègre des éléments 3D, avec la possibilité de les animer pour rendre votre site web interactif et immersif.</p>
            <LazyLoadComponent Component={Fusee} />
          </div>
        </section>

        <section className={s.cards}>
          <div className={s.contentCards}>
            <p>SEO</p>
            <span>(Référencement)</span>
          </div>
          <div className={s.canvas}>
            <p>Faites-vous référencer comme il se doit et soyez en première ligne des recherches Google</p>
            <LazyLoadComponent Component={Loupe} />
          </div>

        </section>
  
        <section className={s.cards} style={{height: "85vh"}}></section>

      </div>
    </div>
  );
};