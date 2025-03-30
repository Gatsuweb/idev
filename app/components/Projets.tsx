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
      if (isVisible && videoRef.current && !isMobile) {
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
            link:"https://valkyrink-tattoo.com/",
            name: "VALKYRINK",
            desc: "Création d'un site vitrine interactif pour un salon de tatouage, alliant design immersif et animations fluides pour une expérience unique. Le site met en avant les œuvres du tatoueur, ses services et ses inspirations, avec une navigation intuitive.",
            image: "Valkyrink.webm",
            images: "/images/valkyrinks.png"
        },
        {
            link:"https://coregym.netlify.app/",
            name: "Core Gym",
            desc: "Création d'un site vitrine pour une salon de tatouage. L'objectif est de présenter les services de la salle, faciliter l'accès aux informations clés et proposer une gestion simplifiée des abonnements et du planning des cours.",
            image: "coregym.webm",
            images: "/images/coregyms.png"
        },
        {
            link:"",
            name: "LATIA",
            desc: "Développement d'un site vitrine pour une agence de graphic design moderne et créative. Enrichi d'animations dynamiques et d'interraction 3D, permettant de mettre en valeur les réalisations de l'agence et son identité visuelle. L'expérience utilisateur est pensée pour captiver et inspirer dès la première interaction.",
            image: "latia.webm",
            images: "/images/latias.png"
        },
        {
            link:"https://maelmorlevat.fr/",
            name: "MAEL MORLEVAT",
            desc: "Conception d'un site vitrine élégant pour un chef cuisinier à domicile. Une mise en page raffinée et animée met en avant ses prestations, son savoir-faire et ses créations culinaires, avec une galerie très visuels et appétissants pour séduire les visiteurs.",
            image: "maelmorlevat.webm",
            images: "/images/maelmorlevats.png"
        },
        {
            link:"",
            name: "...",
            desc: "Design d'un site web pour une entreprise familiale de charpente, un design animé et mderne correspondant à l'image de marque. Animations subtiles, visuels percutants et navigation intuitive",
            image: "carpenter.webm",
            images: "/images/carpenters.png"
        },
        {
            link:"https://gengo-weld.vercel.app/",
            name: "GENGO(DESKTOP)",
            desc: "Développement de Gengo, une plateforme ludique et gamifiée pour apprendre le français. Une interface interactive et engageante, combinant jeux, défis et récompenses, motive les utilisateurs à progresser tout en s'amusant. Une approche moderne et immersive pour faciliter l'apprentissage à tous les niveaux",
            image: "GENGO.webm",
            images: "/images/gengos.png"
        },
        {
            link:"",
            name: "HAUTELIGNE",
            desc: "Création d'un design pour Haute Ligne, une marque de vêtements modernes pour homme. Un design minimaliste et sophistiqué met en avant des collections élégantes à travers une expérience fluide et dynamique. Animations subtiles, visuels percutants et navigation intuitive renforcent l'identité premium de la marque.",
            image: "hauteligne.webm",
            images: "/images/fallwinters.png"
        },
    ]

    return (
        <div className={s.projetContainer} ref={sectionRef}>
          <div className={s.headerProjet}>
            <div>
              <a href={projet[currentIndex].link} className={s.linkProjet} target="blank">{projet[currentIndex].name}<Image src="arrow.svg" alt="icone flèche" width={24} height={24} className={s.arrowProjet}/></a>
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
            <a href={projet[currentIndex].link} target="blank">
              {isMobile ? (
                // Afficher l'image statique sur mobile
                <img
                  src={projet[currentIndex].images}
                  alt={`${projet[currentIndex].name} preview`}
                  className={s.imgProjet}
                  style={{ width: '100%', height: 'auto' }}
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