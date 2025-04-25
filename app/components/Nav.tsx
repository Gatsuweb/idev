"use client"
import Image from "next/image"
import s from "../styles/Nav.module.css"
import React, { useState } from 'react'
import { PopupModal } from "react-calendly"

export const Nav = () => {
    const [isActive, setIsActive] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
      setIsActive(!isActive);
    };
    
  return (
    <>
      <nav className={`${s.navContainer}  ${isActive ? s.open : ""}`}>
        <div className={`${s.navFirst} ${isActive ? s.open : ""}`}>
          <a href="/">
            <Image src="logoIDev.svg" alt="Logo auteur" id={s.logo} height={80} width={80} />
            </a>
            <p>&#123;DESIGN & DEVELOPPEMENT&#125;</p>
        </div>
        <div className={`${s.ulAnim} ${isActive ? s.open : ""}`}>
          <ul >
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#projets">PROJETS</a></li>
            <li><a href="#about">À PROPOS</a></li>
          </ul>
            <div className={s.btnContainer} onClick={() => setIsOpen(true)}>
                <button  className={`${s.btnTel} ${isActive ? s.open : ""}`}><Image src="iconeTel.svg" alt="Icone téléphone" height={40} width={40} />RESERVER</button>
                <button className={`${s.btnTels} ${isActive ? s.open : ""}`}><Image src="iconeTel.svg" alt="Icone téléphone" height={40} width={40} />RESERVER</button>
            
            </div>
        </div>

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
          {isOpen && (
            <PopupModal
              open={isOpen}
              url="https://calendly.com/ivanduran2397"
              onModalClose={() => setIsOpen(false)}
              rootElement={document.body}
        />
      )}
        </>
  )
}
