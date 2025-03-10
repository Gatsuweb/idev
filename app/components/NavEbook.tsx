"use client"
import Image from "next/image"
import s from "../styles/NavEbook.module.css"
import React, { useState } from 'react'
import { PopupModal } from "react-calendly"
import Link from "next/link"

export const NavEbook = () => {
    const [isOpen, setIsOpen] = useState(false)
    
  return (
    <>
      <nav className={s.navContainer}  >
        <div className={s.navFirst} >
          <Link href="/">
            <Image src="logoIDev.svg" alt="Logo auteur" id={s.logo} height={80} width={80} />
            </Link>
            <p>&#123;DESIGN & DEVELOPPEMENT&#125;</p>
        </div>
        <div className={s.ulAnim}>
            <div className={s.btnContainer} onClick={() => setIsOpen(true)}>
                <button  className={s.btnTel}><Image src="iconeTel.svg" alt="Icone téléphone" height={40} width={40} />RESERVER</button>
                <button className={s.btnTels}><Image src="iconeTel.svg" alt="Icone téléphone" height={40} width={40} />RESERVER</button>
            
            </div>
        </div>

      </nav>
      
   
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
