import Image from 'next/image'
import { BtnContact } from './BtnContact'
import s from '../styles/Pricing.module.css'

export const Pricing = () => {

  return (
    <div className={s.pricingContainer}>
      <div className={s.cardsPricing}>
        <div className={s.headerPricing}>
          <div className={s.bestChoice}>
          <h3>ECO</h3>
          <Image src="/best.png" alt='icone du meilleur choix' height={50} width={50} className={s.bestIcone} />
          </div>
          <h4>Site Vitrine Eco – Simple, <span>Efficace</span>, Accessible</h4>
        </div>
        <ul>
        <div className={s.boxList}>
        <p>•</p>
          <li>Convient parfaitement aux <span>petites entreprises</span> ou projets personnels.</li>
          </div>
          <div className={s.boxList}>
            <p>•</p>
          <li><span>Jusqu&apos;à 3 pages</span> ( ex:  Accueil, À propos, Contact).</li>
          </div>
          <div className={s.boxList}>
            <p>•</p>
            <li>Design au choix parmi un <span>catalogue de templates</span> : Votre site est responsif et s&apos;adapte à tous les écrans.</li>
          </div>
          <div className={s.boxList}>
            <p>•</p>
            <li>Inclus : <span>1 modification</span> gratuite pour affiner les détails de la maquette.</li>
            </div>
          <div className={s.boxList}>
            <p>•</p>
            <li>Un <span>formulaire de contact simple</span> et efficace pour recevoir des demandes directement depuis votre site.</li>
          </div>
        </ul>
        <p className={s.pourquoi}>Pourquoi choisir cette offre ?</p>
        <p className={s.descPrix}>Un <span>site clair et professionnel</span> pour poser les bases de votre présence en ligne. Idéal pour débuter <span>rapidement</span>.</p>
        <div className={s.footerPricing}>
          <BtnContact />
          <p >DEVIS <span>SUR-MESURE</span></p>
          {/* <span className={s.offre}>600€</span> */}
        <p className={s.prixMaintenance}>Payez en 3 fois</p>
        {/* <p className={s.prixMaintenance}>Maintenance et support 45€ / mois </p> */}
        <p className={s.prixMaintenance}> Option: Maintenance, SEO et support</p>

        </div>
      </div>

      <div className={s.cardsPricing}>
        <div className={s.headerPricing}>
          <h3>STANDARD</h3>
          <h4>Site Vitrine Standard – <span>Moderne et Personnalisé</span></h4>
        </div>
        <ul>
          <div className={s.boxList}>
            <p>•</p>
            <li>Idéal pour les <span>entreprises souhaitant se démarquer en ligne.</span></li>
          </div>
          <div className={s.boxList}>
            <p>•</p>
            <li><span>Comprend 4 à 6 pages</span> ( ex: Accueil, Services, Galerie, Témoignages, Contact).</li>
          </div>
          <div className={s.boxList}>
            <p>•</p>
            <li><span>Design unique</span> et <span>animations modernes</span> pour capter l&apos;attention de vos visiteurs.</li>
          </div>
          <div className={s.boxList}>
            <p>•</p>
            <li><span>2 modifications gratuites</span> pour ajuster selon vos besoins.</li>
          </div>
          <div className={s.boxList}>
            <p>•</p>
            {/* <li>Inclus :  <span>SEO de base</span> ( balises meta, structure)</li> */}
            <li> <span>3 fonctionnalités maximum</span> ( formulaire, réservation, blog )</li>
          </div>
        </ul>
        <p className={s.pourquoi}>Pourquoi choisir cette offre ?</p>
        <p className={s.descPrix}>Pour une <span>image professionnelle</span> et un site qui met pleinement en avant vos compétences et services.</p>
        <div className={s.footerPricing}>
          <BtnContact />
          <p >DEVIS <span>SUR-MESURE</span></p>
          {/* <span className={s.offre}>1500€</span> */}

          <p className={s.prixMaintenance}>Payez en 3 fois</p>

          {/* <p className={s.prixMaintenance}> Maintenance et support 45€ / mois + 1mois offert </p> */}
          <p className={s.prixMaintenance}> Option: Maintenance, SEO et support : 1 mois offert</p>

        </div>
      </div>

      <div className={s.cardsPricing}>
        <div className={s.headerPricing}>
          <h3>PREMIUM</h3>
          <h4>Site Vitrine Premium – <span>Sur-mesure</span></h4>
        </div>
        <ul>
          <div className={s.boxList}>
            <p>•</p>
            <li>Pensé pour les entreprises ayant besoin d&apos;un <span>site complet et 100% personnalisé.</span></li>
          </div>
          <div className={s.boxList}>
            <p>•</p>
            <li><span>7 pages ou plus</span> avec une structure unique adaptée à votre activité.</li>
          </div>
          <div className={s.boxList}>
            <p>•</p>
            <li><span>Animations interactives</span> et <span>design haut de gamme</span> pour une <span>expérience unique</span> et engageante pour vos visiteurs</li>
          </div>
          <div className={s.boxList}>
            <p>•</p>
            <li>Inclus : <span>3 modifications</span> gratuites pour perfectionner chaque détail.</li>
          </div>
          <div className={s.boxList}>
            <p>•</p>
            {/* <li><span>SEO optimisé</span> pour une meilleure visibilité (balises meta, structure, vitesse, performance mobile).</li> */}
            <li><span>Fonctionnalité au choix</span> pour un meilleur service client.</li>
          </div>
        </ul>
        <p className={s.pourquoi}>Pourquoi choisir cette offre ?</p>
        <p className={s.descPrix}>Pour les entreprises qui <span>veulent se différencier</span> avec un site <span>élégant, performant</span>, et parfaitement adapté à leurs besoins.</p>
        <div className={s.footerPricing}>
          <BtnContact />
          <p >DEVIS <span>SUR-MESURE</span></p>
          {/* <p>A partir de: <span><s>3000€</s></span></p> */}
          {/* <span className={s.offre}>2500€</span> */}
          <p className={s.prixMaintenance}>Payez en 4 fois</p>

        {/* <p className={s.prixMaintenance}> Maintenance et support 45€ / mois + 3mois offerts</p> */}
          <p className={s.prixMaintenance}> Option: Maintenance, SEO et support : 3 mois offerts</p>
        </div>
      </div>
    </div>
  )
}
