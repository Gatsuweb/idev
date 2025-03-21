import Image from "next/image"
import s from "../styles/Preload.module.css"
// import { useEffect } from "react";
// import { useRouter } from "next/navigation" 
export const Preload = () => {
  // const router = useRouter(); 

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.push('/'); 
  //   }, 6000);
  //   return () => clearTimeout(timer);
  // }, [router]);
  return (
    <>
      <div className={s.preloadContainer}>
      <Image src="/logoIDev.svg" alt="" height={300} width={200} className={s.imgPreload} priority />

              {/* <p className={s.titlePreload}>Bienvenue au studio I&apos;DEV.</p> */}
      </div>

      <div className={s.preloadContainers}>
          <Image src="/afou2bis.webp" alt="" height={3000} width={2000} className={s.imgPreload} priority />
    </div>
 </>
  )}
