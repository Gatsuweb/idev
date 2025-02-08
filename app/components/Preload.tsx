import Image from "next/image"
import s from "../styles/Preload.module.css"

export const Preload = () => {
  return (
    <>
    <div className={s.preloadContainer}>

            <p className={s.titlePreload}>Bienvenue au studio I&apos;DEV.</p>
  

     </div>

    <div className={s.preloadContainers}>
        <Image src="/afou2bis.jpg" alt="" height={3000} width={2000} className={s.imgPreload}/>
 </div>
 </>
  )}
