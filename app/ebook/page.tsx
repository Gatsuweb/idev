
import { Metadata } from 'next';
import { NavEbook } from '../components/NavEbook';
import EbookComponent from '../components/EbookComponent';


interface SubscribeResponse {
  message: string;
}
export const generateMetadata = (): Metadata => {
  return{
    title: "Téléchargez votre Ebook Gratuit",
    description: "Obtenez un Ebook et une Checklist SEO gratuitement en vous inscrivant",
  }
}


export default function Ebook() {
  return (
    <>
      <NavEbook />
      <EbookComponent />
    </>
  );
}