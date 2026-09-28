import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site web pour créatifs et artistes en Centre-Bretagne",
  description: "Portfolio et site web pour artistes et créatifs : présenter votre univers, vos projets et faciliter les demandes de collaboration autour de Carhaix.",
  alternates: { canonical: "/site-web-pour-creatifs" },
};

export default function CreatifsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
