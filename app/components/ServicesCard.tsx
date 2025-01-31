"use client"

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import s from "../styles/ServicesCard.module.css";

const Fusee = dynamic(() => import("./Fusee"), { ssr: false });
const Loupe = dynamic(() => import("./Loupe"), { ssr: false });
const Ordi = dynamic(() => import("./Ordi"), { ssr: false });
const Paint = dynamic(() => import("./Paint"), { ssr: false });

const LazyLoadComponent = ({ Component}) => {
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
      <h2>SERVICES</h2>
      <div className={s.servicesCardContainer}>
        <section className={s.card}>
          <p>
            Vos projets prennent vie selon votre personnalité, <br /> vos goûts, vos envies additionné à ma patte <span>créative</span> et <span>immersive</span>
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
            <p>Sur demande, je crée et intègre des éléments 3D. Avec possibilité de les animer et rendre votre site web interactif et immersif</p>
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
      </div>
    </div>
  );
};