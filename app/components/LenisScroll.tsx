"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        });
      
        function raf(time: number) {  // ✅ Typage ajouté
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      
        return () => {
          lenis.destroy();
        };
      }, []);

  return <>{children}</>;
}