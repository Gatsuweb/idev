import s from '../styles/Pricing.module.css'

export const Pricing = () => {

  return (
    <div className={s.pricingContainer}>
      <div className={s.cardsPricing}>
        <div className={s.headerPricing}>
          <h3>BASIQUE</h3>
          <h4>Titre : Site Vitrine Basique – Simple, <span>Efficace</span>, Accessible</h4>
        </div>
        <ul>
          <li>Convient parfaitement aux petites entreprises ou projets personnels.</li>
          <li>Jusqu'à 3 pages  ( ex:  Accueil, À propos, Contact).</li>
          <li>Design professionnel et responsive : Votre site s’adapte à tous les écrans.</li>
          <li>Inclus : 1 modification gratuite pour affiner les détails de la maquette.</li>
          <li>Formulaire de contact pour vous connecter facilement avec vos clients.</li>
        </ul>
        <p>Pourquoi choisir cette offre ?</p>
        <p>Un site clair et professionnel pour poser les bases de votre présence en ligne. Idéal pour débuter rapidement.</p>
        <div>
          <button>CONTACTEZ-MOI</button>
          <p>A partir de 500€</p>
        </div>
      </div>

      <div className={s.cardsPricing}>
        <div className={s.headerPricing}>
          <h3>STANDARD</h3>
          <h4>Titre : Site Vitrine Standard – <span>Moderne et Personnalisé</span></h4>
        </div>
        <ul>
          <li>Idéal pour les entreprises souhaitant se démarquer en ligne.</li>
          <li>Comprend 4 à 6 pages ( ex: Accueil, Services, Galerie, Témoignages, Contact).</li>
          <li>Design unique et animations modernes pour capter l’attention de vos visiteurs.</li>
          <li>2 modifications gratuites pour ajuster selon vos besoins.</li>
          <li>Inclus :  SEO de base ( balises meta, structure)</li>
        </ul>
        <p>Pourquoi choisir cette offre ?</p>
        <p>Pour une image professionnelle et un site qui met pleinement en avant vos compétences et services.</p>
        <div>
          <button>CONTACTEZ-MOI</button>
          <p>A partir de 1200€</p>
        </div>
      </div>

      <div className={s.cardsPricing}>
        <div className={s.headerPricing}>
          <h3>PREMIUM</h3>
          <h4>Titre : Site Vitrine Premium – <span>Sur-mesure</span></h4>
        </div>
        <ul>
          <li>Pensé pour les entreprises ayant besoin d’un site complet et 100% personnalisé.</li>
          <li>7 pages ou plus avec une structure unique adaptée à votre activité.</li>
          <li>Animations interactives et design haut de gamme pour une expérience utilisateur mémorable.</li>
          <li>Inclus : 3 modifications gratuites pour perfectionner chaque détail.</li>
          <li>SEO optimisé pour une meilleure visibilité (balises meta, structure, vitesse, performance mobile).</li>
        </ul>
        <p>Pourquoi choisir cette offre ?</p>
        <p>Pour les entreprises qui veulent se différencier avec un site élégant, performant, et parfaitement adapté à leurs besoins.</p>
        <div>
          <button>CONTACTEZ-MOI</button>
          <p>A partir de 1800€</p>
        </div>
      </div>
    </div>
  )
}
