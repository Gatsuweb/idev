"use client"
import { useEffect } from "react";

import HeroBlog from "../components/componentsblog/HeroBlog";
import { Why } from "../components/componentsblog/Why";
import { AboutApproach } from "../components/componentsblog/AboutApproach";
import ProjetCreatif from "../components/componentsblog/ProjetCreatif";
import FaqCreatif from "../components/componentsblog/FaqCreatif";

import ContactCreatif from "../components/ContactCreatif";
import { Footer } from "../components/Footer";
import { NavCreatif } from "../components/componentsblog/NavCréatif";
import styles from "./siteCreatif.module.css";

export default function SiteWebPourCreatifs() {
  // Custom cursor with trailing delay
  useEffect(() => {
    const cursor = document.getElementById("custom-orange-cursor");
    if (!cursor) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // The lower the 0.15, the slower the cursor follows
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", moveCursor);
    animate();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div id="custom-orange-cursor" className={styles.customOrangeCursor}></div>
      <NavCreatif />
      <div className={styles.containerBlog}>
        <main className={styles.splitScreen}>
          <HeroBlog />
        </main>
        <div className={styles.pSticky}>
          <Why />
        </div>
        <div className={styles.pSticky}>
          <AboutApproach />
        </div>
      </div>
      <div className={styles.projets}>
        <ProjetCreatif />
      </div>
      <div className={styles.faqContainer}>
        <FaqCreatif />
      </div>
      <ContactCreatif />
      <Footer />
    </>
  );
}