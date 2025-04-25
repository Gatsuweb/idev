"use client"
import { useState } from "react";
import styles from "@/app/styles/FaqCreatif.module.css";
import Image from "next/image";

export default function FaqCreatif() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Pourquoi un créatif a besoin d'un site web professionnel ?",
      answer: "Un site web est votre galerie virtuelle disponible 24/7. Il permet de présenter votre travail sous son meilleur jour, d'établir votre crédibilité et d'atteindre un public bien plus large que les méthodes traditionnelles. C'est aussi un outil puissant pour vous démarquer dans un marché créatif saturé."
    },
    {
      question: "Est-ce que les réseaux sociaux ne suffisent pas pour montrer mon travail ?",
      answer: "Les plateformes sociales sont excellentes pour la visibilité, mais elles ne vous appartiennent pas. Un site web vous donne un contrôle total sur votre présentation, votre marque, et vos données. De plus, il vous permet d'être trouvé via Google, ce qui est crucial pour attirer de nouveaux clients qui ne vous connaissent pas encore."
    },
    {
      question: "Quelle est l'importance du référencement pour un créatif ?",
      answer: "Le référencement (SEO) est absolument crucial pour les créatifs. Il permet à votre travail d'être découvert par des clients potentiels qui recherchent exactement ce que vous proposez. Un bon référencement peut multiplier par 5 à 10 votre visibilité en ligne et générer un flux constant de prospects qualifiés. Contrairement aux réseaux sociaux où la visibilité est éphémère, le SEO construit une présence durable qui continue d'attirer des clients même pendant que vous dormez. Pour un créatif, être bien positionné sur des mots-clés spécifiques à votre niche peut faire la différence entre avoir à chercher constamment des clients et les voir venir naturellement à vous."
    },
    {
      question: "Comment un site web peut-il m'aider à vendre mes créations ?",
      answer: "Votre site peut intégrer des fonctionnalités de vente directe, de prise de rendez-vous, ou de demande de devis. Il transforme l'intérêt en action concrète, raccourcissant le chemin entre la découverte de votre travail et l'achat. C'est aussi un excellent moyen de raconter l'histoire derrière vos créations, ajoutant une valeur émotionnelle qui justifie votre tarification."
    },
    {
      question: "Est-ce qu'un site web est un bon investissement pour un créatif ?",
      answer: "Absolument. Un site bien conçu est un investissement qui continue de générer des retombées pendant des années. Il augmente votre visibilité, renforce votre crédibilité professionnelle et peut directement générer des ventes ou des commissions. Pour beaucoup de créatifs, le retour sur investissement se manifeste dès les premières commandes obtenues grâce au site."
    },
    {
      question: "Comment puis-je mesurer l'efficacité de mon site web ?",
      answer: "Grâce aux outils d'analyse comme Google Analytics, vous pouvez suivre le nombre de visiteurs, leur provenance, leur comportement sur votre site, et les actions qu'ils entreprennent. Ces données vous permettent d'optimiser continuellement votre présence en ligne et de comprendre ce qui résonne avec votre audience."
    }
  ];

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqHeader}>
        <h2>Questions <span>fréquentes</span></h2>
        <p>Tout ce que vous devez savoir sur l'importance d'un site web pour les créatifs</p>
      </div>
      
      <div className={styles.faqContainer}>
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}
            onClick={() => toggleFaq(index)}
          >
            <div className={styles.faqQuestion}>
              <h3>{item.question}</h3>
              <div className={styles.faqIcon}>
                {openIndex === index ? (
                  <div className={styles.minusIcon}></div>
                ) : (
                  <div className={styles.plusIcon}></div>
                )}
              </div>
            </div>
            <div className={styles.faqAnswer} style={{ maxHeight: openIndex === index ? '500px' : '0' }}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}