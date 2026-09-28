"use client"
import Image from "next/image"
import s from "../styles/Projets.module.css"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion";

const letterVariant = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    rotate: [15, 0],
    transition: {
      duration: 0.4,
      delay: i * 0.05,
      ease: "easeOut",
    },
  }),
};

export const Projets = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Check if device is mobile
    useEffect(() => {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth <= 768); // You can adjust this breakpoint
      };
      
      // Initial check
      checkIfMobile();
      
      // Add event listener for window resize
      window.addEventListener('resize', checkIfMobile);
      
      // Cleanup
      return () => {
        window.removeEventListener('resize', checkIfMobile);
      };
    }, []);

    useEffect(() => {
      const cursor = document.getElementById("customCursor");
    
      const moveCursor = (e: MouseEvent) => {
        if (cursor) {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        }
      };
    
      document.addEventListener("mousemove", moveCursor);
    
      return () => {
        document.removeEventListener("mousemove", moveCursor);
      };
    }, []);

    // Observer pour détecter quand la section devient visible
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.1 } // La vidéo commence à se charger quand 10% de la section est visible
      );
      
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
      
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);

    // Effet pour gérer le chargement de la vidéo quand la section est visible
    useEffect(() => {
      if (isVisible && videoRef.current && !isMobile && projet[currentIndex].image) {
        // Chargement dynamique de la source vidéo seulement sur desktop
        videoRef.current.src = projet[currentIndex].image;
        videoRef.current.load();
        videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
      }
    }, [isVisible, currentIndex, isMobile]);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projet.length);
    };
    
    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projet.length) % projet.length);
    };

    const projet = [
        {
            link: "https://www.atelier-chokoku.com/",
            name: "CHOKOKU",
            desc: "Boutique en ligne de miroirs gravés à la main et personnalisables. Un univers visuel immersif pour montrer les pièces, raconter le savoir-faire et faciliter la commande.",
            image: "",
            images: "/images/chokoku-site.webp"
        },
        {
            link: "https://www.hendricx-peinture.com/",
            name: "HENDRICX PEINTURE",
            desc: "Site vitrine pour un artisan peintre basé à Paule, près de Carhaix : peinture intérieure et extérieure, rénovation, fresques murales et réalisations.",
            image: "",
            images: "/images/hendricx-peinture.webp"
        },
        {
            link: "https://www.ocapri.fr/",
            name: "O’CAPRI",
            desc: "Site créatif pour un bar à tiramisu à Brest : univers gourmand, carte et parcours pour composer son dessert selon ses goûts.",
            image: "",
            images: "/images/ocapri-site.webp"
        },
        {
            link: "https://www.melinktattoo.com/",
            name: "MEL INK",
            desc: "Site portfolio pour une tatoueuse à Mellac, près de Quimperlé : tatouages fineline, floraux et ornementaux, galerie, avis et chèques cadeaux.",
            image: "",
            images: "/images/melink-site.webp"
        },
        {
            link: "https://valkyrink-tattoo.com/",
            name: "VALKYRINK",
            desc: "Site vitrine immersif pour une tatoueuse à Plévin : univers artistique, réalisations et informations pour prendre contact.",
            image: "Valkyrink.webm",
            images: "/images/valkyrinks.png"
        },
        {
            link: "https://www.lafermedekerloury.fr/",
            name: "LA FERME DE KERLOURY",
            desc: "Site pour les gîtes et l’écolieu de la Ferme de Kerloury, près de Paimpol : hébergements, camping, réceptions et découverte du lieu.",
            image: "",
            images: "/images/kerloury-site.webp"
        },
        {
            link: "https://nomadia-tan.vercel.app/",
            name: "NOMADIA",
            desc: "Boutique de décoration intérieure et extérieure près de Paimpol. Un catalogue visuel qui met les objets et les matières au premier plan.",
            image: "",
            images: "/images/nomadia-site.webp"
        },
        {
            link: "https://perlezenn.vercel.app/",
            name: "PERLEZENN",
            desc: "Site de marque pour une sauce à l’huître bio produite en Bretagne : présentation du produit, de son univers et du savoir-faire artisanal.",
            image: "",
            images: "/images/perlezenn-site.webp"
        },
        {
            link: "https://maelmorlevat.fr/",
            name: "MAËL MORLEVAT",
            desc: "Site vitrine pour un chef cuisinier à domicile à Paimpol : prestations, savoir-faire et créations culinaires dans une présentation soignée.",
            image: "maelmorlevat.webm",
            images: "/images/maelmorlevats.png"
        },
        {
            link: "https://obscura-gold-two.vercel.app/",
            name: "OBSCURA — CONCEPT",
            desc: "Projet personnel, non commandé : concept de site immersif pour un studio de tatouage, imaginé pour explorer une direction artistique sombre et haut de gamme.",
            image: "",
            images: "/images/obscura-site.webp"
        },
        {
            link: "https://coregym.netlify.app/",
            name: "CORE GYM",
            desc: "Site vitrine pour une salle de sport : services, informations pratiques, abonnements et planning des cours.",
            image: "coregym.webm",
            images: "/images/coregyms.png"
        },
        {
            link: "",
            name: "LATIA",
            desc: "Concept de site vitrine pour une agence de design graphique, avec animations et interactions 3D.",
            image: "latia.webm",
            images: "/images/latias.png"
        },
        {
            link: "https://gengo-weld.vercel.app/",
            name: "GENGO (DESKTOP)",
            desc: "Plateforme ludique pour apprendre le français avec jeux, défis et récompenses.",
            image: "GENGO.webm",
            images: "/images/gengos.png"
        },
        {
            link: "",
            name: "HAUTE LIGNE",
            desc: "Concept de boutique de vêtements pour homme, avec une direction visuelle minimaliste et des animations subtiles.",
            image: "hauteligne.webm",
            images: "/images/fallwinters.png"
        },
    ]

    return (
        <div className={s.projetContainer} ref={sectionRef}>
          <div className={s.headerProjet}>
            <div>
              <a href={projet[currentIndex].link} className={s.linkProjet} target="_blank" rel="noopener noreferrer">{projet[currentIndex].name}<Image src="arrow.svg" alt="icone flèche" width={24} height={24} className={s.arrowProjet}/></a>
            </div>
            <div className={s.projetContent}>
                <h2 className={s.animatedTitle}>
                {"PROJETS".split("").map((letter, i) => (
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
              <p>{projet[currentIndex].desc}</p>
            </div>
          </div>
          <div className={s.caroussel}>
            <a href={projet[currentIndex].link} target="_blank" rel="noopener noreferrer">
              {isMobile || !projet[currentIndex].image ? (
                // Afficher l'image statique sur mobile
                <Image
                  src={projet[currentIndex].images}
                  alt={projet[currentIndex].name === "HENDRICX PEINTURE" ? "Fresque murale présentée sur le site Hendricx Peinture" : `Aperçu du projet ${projet[currentIndex].name}`}
                  width={1200}
                  height={700}
                  className={s.imgProjet}
                  onMouseEnter={() => (document.querySelector("#customCursor") as HTMLElement)?.classList.add(s.active)}
                  onMouseLeave={() => (document.querySelector("#customCursor") as HTMLElement)?.classList.remove(s.active)}
                />
              ) : (
                // Afficher la vidéo sur desktop
                <video
                  ref={videoRef}
                  width={1200}
                  height={700}
                  className={s.imgProjet}
                  autoPlay={isVisible}
                  loop 
                  muted 
                  playsInline 
                  preload="none"
                  onMouseEnter={() => (document.querySelector("#customCursor") as HTMLElement)?.classList.add(s.active)}
                  onMouseLeave={() => (document.querySelector("#customCursor") as HTMLElement)?.classList.remove(s.active)}
                />
              )}
            </a>
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
          <div className={s.customCursor} id="customCursor">OUVRIR</div>
        </div>
      );
};