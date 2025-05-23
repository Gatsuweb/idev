"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import s from "../styles/Footer.module.css"
import Link from "next/link";

export const Footer = () => {
    const [time, setTime] = useState<string | null>(null);

    useEffect(() => {
        setTime(new Date().toLocaleTimeString()); // Définir l'heure après le montage
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className={s.footerContainer}>
            <div className={s.footerContent}>
                <div>
                    <h4>MENU</h4>
                    <ul>
                        <li><Link href="/">Accueil</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        
                    </ul>
                </div>
                <div>
                    <h4>RESEAUX</h4>
                    <ul>
                        <li><a href="https://www.instagram.com/_i.d.e.v/">Instagram</a></li>
                        <li><a href="https://www.linkedin.com/in/ivandrn/">Linkedin</a></li>
                        <li><a href="https://github.com/Gatsuweb">Github</a></li>
                    </ul>
                </div>
                <div>
                    <h4>CONTACT</h4>
                    <ul>
                        <li><a href="tel:+33634670782">Téléphone</a></li>
                        <li><a href="mailto:ivandevelopment@outlook.com">Mail</a></li>
                    </ul>
                </div>
                <div>
                    <h4>LOCALISATION</h4>
                    <ul>
                        <li>Carhaix, Finistère, Bretagne</li>
                        <li>HEURE LOCAL</li>
                        <li>{time ? time : "Chargement..."}</li>
                    </ul>
                </div>
            </div>
            <div className={s.footerIdev}>
                <h3>I&apos;DÉVELOPPEMENT</h3>
                <a href="#hero" className={s.arrowFooter}>
                    <Image alt="flèche retour haut de page" src="/arrowfooter.svg" height={80} width={80} className={s.imgArrowFooter}/>
                </a>
            </div>
        </footer>
    );
};
