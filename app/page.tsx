"use client"
import Lenis from 'lenis'
import { useEffect} from 'react'
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
import { Preload } from './components/Preload';

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

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    
    lenis.on('scroll', (e) => {
      console.log(e);
    });
  }, [])

  

  return (
    
    <div className={styles.page}>
      <div className={styles.bgImg}><Image src="/sand.jpg" alt="texture" className={styles.texture} width={3500} height={2500} style={{opacity: 0.1}}/></div>
     <Preload />
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
