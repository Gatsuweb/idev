"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import s from "../styles/Nav.module.css";

const links = [
  { href: "/creation-site-internet-carhaix", label: "ARTISANS" },
  { href: "/site-web-artistes-carhaix", label: "ARTISTES" },
  { href: "/site-web-association-carhaix", label: "ASSOCIATIONS" },
  { href: "/#projets", label: "PROJETS" },
  { href: "/blog", label: "BLOG" },
];

export const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav className={`${s.navContainer} ${isActive ? s.open : ""}`} aria-label="Navigation principale">
        <div className={s.navFirst}>
          <Link href="/" onClick={() => setIsActive(false)} aria-label="I’Dev, accueil">
            <Image src="/logoIDev.svg" alt="" id={s.logo} height={80} width={80} />
          </Link>
          <p>&#123;DESIGN & DEVELOPPEMENT&#125;</p>
        </div>
        <div className={`${s.ulAnim} ${isActive ? s.open : ""}`}>
          <ul id="primary-navigation">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={s.navLink} onClick={() => setIsActive(false)}>
                  <span className={s.navLabel}>{label}</span>
                  <span className={s.navLabelHover} aria-hidden="true">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <a className={s.btnContainer} href="tel:+33634670782" aria-label="Appeler Ivan Duran au 06 34 67 07 82">
            <span className={s.btnTels} aria-hidden="true"><Image src="/iconeTel.svg" alt="" height={40} width={40} />APPELER</span>
            <span className={s.btnTel} aria-hidden="true"><Image src="/iconeTel.svg" alt="" height={40} width={40} />APPELER</span>
          </a>
        </div>
      </nav>
      <div className={`${s.mobileMenu} ${isActive ? s.open : ""}`}>
        <button
          type="button"
          className={`${s.mobileBurger} ${isActive ? s.open : ""}`}
          onClick={() => setIsActive((active) => !active)}
          aria-label={isActive ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isActive}
          aria-controls="primary-navigation"
        >
          <span className={`${s.line} ${isActive ? s.open : ""}`}></span>
          <span className={`${s.line} ${isActive ? s.open : ""}`}></span>
        </button>
        <p>MENU</p>
      </div>
    </>
  );
};
