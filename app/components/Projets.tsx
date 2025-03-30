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

    // Détection du dispositif mobile
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768); // Ajustez le seuil selon vos besoins
      };
      
      // Vérifier au chargement
      checkMobile();
      
      // Écouter les changements de taille d'écran
      window.addEventListener('resize', checkMobile);
      
      return () => {
        window.removeEventListener('resize', checkMobile);
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

    // Observer avec gestion des erreurs et optimisation mobile
    useEffect(() => {
      // S'assurer que IntersectionObserver est supporté
      if (!('IntersectionObserver' in window)) {
        // Fallback pour les navigateurs sans support
        setIsVisible(true);
        return;
      }
      
      const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        try {
          const [entry] = entries;
          setIsVisible(entry.isIntersecting);
        } catch (error) {
          console.error("Error in intersection observer:", error);
          // Fallback en cas d'erreur
          setIsVisible(true);
        }
      };
      
      const observer = new IntersectionObserver(handleIntersection, { 
        threshold: isMobile ? 0.05 : 0.1, // Seuil plus bas sur mobile
        rootMargin: "50px" // Marge pour déclencher plus tôt
      });
      
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
      
      return () => {
        if (sectionRef.current) {
          try {
            observer.unobserve(sectionRef.current);
          } catch (error) {
            console.error("Error unobserving section:", error);
          }
        }
      };
    }, [isMobile]);

    // Gestion optimisée du chargement vidéo
    useEffect(() => {
      if (!isVisible || !videoRef.current) return;
      
      try {
        // Prévenir les chargements multiples
        if (videoRef.current.src === "" || videoRef.current.src !== projet[currentIndex].image) {
          const videoSrc = projet[currentIndex].image;
          
          // Pour mobile, baisser la qualité ou utiliser une image statique
          if (isMobile) {
            // Option 1: On charge la vidéo mais avec des paramètres adaptés
            videoRef.current.src = videoSrc;
            videoRef.current.load();
            
            // Réduire la qualité de lecture sur mobile
            videoRef.current.setAttribute('playsinline', '');
            videoRef.current.muted = true;
            videoRef.current.controls = false;
            
            // Lecture avec gestion d'erreur
            videoRef.current.play().catch(e => {
              console.log("Autoplay prevented:", e);
              // Sur erreur, on peut désactiver la vidéo et afficher une image à la place
              // videoRef.current.style.display = 'none';
              // Afficher une image alternative si nécessaire
            });
          } else {
            // Sur desktop, comportement normal
            videoRef.current.src = videoSrc;
            videoRef.current.load();
            videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
          }
        }
      } catch (error) {
        console.error("Error loading video:", error);
        // Fallback en cas d'erreur
        if (videoRef.current) {
          videoRef.current.poster = "placeholder-image.jpg"; // Ajoutez une image placeholder
        }
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
            image: "Valkyrink.webm"
        },
        {
            link:"https://coregym.netlify.app/",
            name: "Core Gym",
            desc: "Création d'un site vitrine pour une salon de tatouage. L'objectif est de présenter les services de la salle, faciliter l'accès aux informations clés et proposer une gestion simplifiée des abonnements et du planning des cours.",
            image: "coregym.webm"
        },
        {
            link:"",
            name: "LATIA",
            desc: "Développement d'un site vitrine pour une agence de graphic design moderne et créative. Enrichi d'animations dynamiques et d'interraction 3D, permettant de mettre en valeur les réalisations de l'agence et son identité visuelle. L'expérience utilisateur est pensée pour captiver et inspirer dès la première interaction.",
            image: "latia.webm"
        },
        {
            link:"https://maelmorlevat.fr/",
            name: "MAEL MORLEVAT",
            desc: "Conception d'un site vitrine élégant pour un chef cuisinier à domicile. Une mise en page raffinée et animée met en avant ses prestations, son savoir-faire et ses créations culinaires, avec une galerie très visuels et appétissants pour séduire les visiteurs.",
            image: "maelmorlevat.webm"
        },
        {
            link:"",
            name: "...",
            desc: "Design d'un site web pour une entreprise familiale de charpente, un design animé et mderne correspondant à l'image de marque. Animations subtiles, visuels percutants et navigation intuitive",
            image: "carpenter.webm"
        },
        {
            link:"https://gengo-weld.vercel.app/",
            name: "GENGO(DESKTOP)",
            desc: "Développement de Gengo, une plateforme ludique et gamifiée pour apprendre le français. Une interface interactive et engageante, combinant jeux, défis et récompenses, motive les utilisateurs à progresser tout en s'amusant. Une approche moderne et immersive pour faciliter l'apprentissage à tous les niveaux",
            image: "GENGO.webm"
        },
        {
            link:"",
            name: "HAUTELIGNE",
            desc: "Création d'un design pour Haute Ligne, une marque de vêtements modernes pour homme. Un design minimaliste et sophistiqué met en avant des collections élégantes à travers une expérience fluide et dynamique. Animations subtiles, visuels percutants et navigation intuitive renforcent l'identité premium de la marque.",
            image: "hauteligne.webm"
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
                // Pour les mobiles, utiliser une approche simplifiée avec un élément de sauvegarde
                <div className={s.mobileVideoContainer}>
                  <video
                    ref={videoRef}
                    width={1200}
                    height={700}
                    className={s.imgProjet}
                    autoPlay={false} // Désactiver l'autoplay sur mobile
                    loop 
                    muted 
                    playsInline 
                    preload="none"
                    poster={`${projet[currentIndex].image.split('.')[0]}.jpg`} // Utiliser une image poster (à créer)
                    onMouseEnter={() => (document.querySelector("#customCursor") as HTMLElement)?.classList.add(s.active)}
                    onMouseLeave={() => (document.querySelector("#customCursor") as HTMLElement)?.classList.remove(s.active)}
                    onError={(e) => {
                      // En cas d'erreur, on masque la vidéo
                      const target = e.target as HTMLVideoElement;
                      target.style.display = 'none';
                      console.error("Video error:", e);
                    }}
                  />
                </div>
              ) : (
                // Pour desktop, garder l'approche originale
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