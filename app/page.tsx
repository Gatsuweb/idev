// "use client"
// import Lenis from 'lenis'
// import { useEffect} from 'react'
import { motion } from 'motion/react';
import Image from "next/image";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { FootHero } from "./components/FootHero";
import { ServicesCard } from "./components/ServicesCard";
import styles from "./page.module.css";
import { Pricing } from './components/Pricing';
import { Projets } from './components/Projets';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Footer } from './components/Footer';

export default function Home() {

 const footerView = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    }
  }
 }

//  useEffect(() => {
//   const lenis = new Lenis({
//     duration: 1.2,
//     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
//   });

//   function raf(time: number) {  // ✅ Typage ajouté
//     lenis.raf(time);
//     requestAnimationFrame(raf);
//   }
//   requestAnimationFrame(raf);

//   return () => {
//     lenis.destroy();
//   };
// }, []);

  

  return (
    
    <div className={styles.page}>
      <div className={styles.bgImg}><Image src="/sand.jpg" alt="texture" className={styles.texture} width={3500} height={2500} style={{opacity: 0.1}}/></div>
     <Nav />
     <div id="hero">
      <Hero />
     </div>
     <FootHero />
     <div className="scroll-container">
        <div className={styles.servicesCard} id="services">
          <ServicesCard />
        </div>
        <div >
          <Pricing />
        </div>
      </div>
      <div id="projets">
        <Projets />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    <motion.div variants={footerView} whileInView="animate" initial= "initial">
        <Footer />
    </motion.div>
    </div>
  );
}
