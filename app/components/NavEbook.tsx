"use client"
import Image from "next/image"
import s from "../styles/NavEbook.module.css"
import React, { useState } from 'react'
import { PopupModal } from "react-calendly"

export const NavEbook = () => {
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
            <div className={s.btnContainer} onClick={() => setIsOpen(true)}>
                <button  className={`${s.btnTel} ${isActive ? s.open : ""}`}><Image src="iconeTel.svg" alt="Icone téléphone" height={40} width={40} />RESERVER</button>
                <button className={`${s.btnTels} ${isActive ? s.open : ""}`}><Image src="iconeTel.svg" alt="Icone téléphone" height={40} width={40} />RESERVER</button>
            
            </div>
        </div>

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
