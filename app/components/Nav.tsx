"use client"
import Image from "next/image"
import s from "../styles/Nav.module.css"
import React, { useState } from 'react'

export const Nav = () => {
    const [isActive, setIsActive] = useState(false)

    const toggleMenu = () => {
      setIsActive(!isActive);
    };
    
  return (
    <>
      <nav className={`${s.navContainer}  ${isActive ? s.open : ""}`}>
        <div className={s.navFirst}>
            <Image src="logoIDev.svg" alt="Logo auteur" id={s.logo} height={80} width={80} />
            <p>&#123;DESIGN & DEVELOPPEMENT&#125;</p>
        </div>
        <ul >
            <li>SERVICES</li>
            <li>PROJETS</li>
            <li>A PROPOS</li>
            <div className={s.btnContainer}>
                <button className={s.btnTel}><Image src="iconeTel.svg" alt="Icone téléphone" height={40} width={40} />RESERVER</button>
                <button className={s.btnTels}><Image src="iconeTel.svg" alt="Icone téléphone" height={40} width={40} />RESERVER</button>
            
            </div>
        </ul>

        {/* <div className={`${s.mobileNav} ${isActive ? s.open : ""}`}>
            <div className={s.navMob}>
                <Image src="logoIDev.svg" alt="Logo auteur" id={s.logo} height={80} width={80} />
                <p>&#123;DESIGN & DEVELOPPEMENT&#125;</p>
            </div>
     
        </div> */}

        {/* {isActive && (
            <div className={s.modal}>
          <div className={s.modalContent}>
            <ul className={s.modalList}>
              <li onClick={toggleMenu}><a href="#services">SERVICES</a></li>
              <li onClick={toggleMenu}><a href="#about">PROJETS</a></li>
              <li><Image src="/logomael.svg" alt='logo auteur' height='60' width='60' /></li>
              <li onClick={toggleMenu}><a href="#about">A PROPOS</a></li>
              <li><a href=""><button><Image src="iconeTel.svg" alt="Icone téléphone" height={20} width={20} />RESERVER</button></a></li>
            </ul>
          </div>
          <div className={s.modalOverlay} onClick={toggleMenu}></div>
        </div>
      )} */}
      </nav>
      
        <div onClick={toggleMenu} className={`${s.mobileMenu} ${isActive ? s.open : ""}`}>
                <button className={`${s.mobileBurger} ${isActive ? s.open : ""}`} >
                    <div className={`${s.line} ${isActive ? s.open : ""}`}></div>
                    <div className={`${s.line} ${isActive ? s.open : ""}`}></div>
                </button>
            <p>MENU</p>
            </div>
        </>
  )
}
