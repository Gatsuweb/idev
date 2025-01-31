"use client"
import Lenis from 'lenis'
import { useEffect} from 'react'
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

export default function Home() {

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
      <div className={styles.bgImg}><Image src="noisy.svg" alt="texture" className={styles.texture} width={500} height={500} /></div>
     <Nav />
     <Hero />
     <FootHero />
      <ServicesCard />
    <Pricing />
    <Projets />
    <About />
    <Contact />
    </div>
  );
}
