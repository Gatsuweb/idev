"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PopupModal } from "react-calendly";
import emailjs from '@emailjs/browser';
import s from "../styles/Contact.module.css"



const letterVariant = {
  initial: {
    y: 50, 
    opacity: 0,
  },
  animate: (i:number) => ({
    y: 0,
    opacity: 1,
    rotate: [15, 0],
    transition: {
      duration: 0.4,
      delay: i * 0.05,
      ease: "easeOut",
    },
  }),
};

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const [ , setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.getElementById("__next"));
    setMessageSent(false);
  }, []);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      const result = await emailjs.sendForm(
        "service_g0xm5xm",
        "template_z8qup5d",
        formRef.current,
        "p5gP7YHbBs4e2v0tx"
      );
      console.log("SUCCESS!", result.text);
      setMessageSent(true);
      formRef.current.reset();
    } catch (error) {
      console.error("FAILED...", error);
      setMessageSent(false);
    }
  };




  return (
    <div className={s.contactContainer}>
      <div className={s.contactContent}>
        <div className={s.contactTel}>
          <div></div>
        <div className={s.contactTelHeader}>
          <p>Besoin d&apos;aide ?</p>
          <div className={s.btnContainerCall} onClick={() => setIsOpen(true)}>
            <button className={s.btnTelCall}>
              <Image src="iconeTel.svg" alt="Icone téléphone" height={50} width={50} />RESERVER
            </button>
            <button className={s.btnTelsCall} >
              <Image src="iconeTel.svg" alt="Icone téléphone" height={50} width={50} />RESERVER
            </button>
          </div>
          <h5>
          {"DISCUTONS DE VOTRE PROJET".split("").map((phrase, i) => (
              <motion.div
              key={i}
              custom={i}
              variants={letterVariant}
              initial="initial"
              whileInView="animate"
              className={s.phrase}
            >
              {phrase === " " ? "\u00A0" : phrase}
            </motion.div>
            ))}
            </h5>
          </div>
          <div className={s.reso}>
            <div className={s.resoLink}>
              <a href="https://www.instagram.com/_i.d.e.v/">Instagram</a>
              <a href="https://www.linkedin.com/in/ivandrn/">Linkedin</a>
            </div>
              <a href="mailto:ivandevelopment@outlook.com" className={s.mailLink}>Mail</a>
          </div>
        </div>

        <div  className={s.formContact}>
        <h2 className={s.animatedTitle}>
            {"CONTACT".split("").map((letter, i) => (
              <motion.div
              key={i}
              custom={i}
              variants={letterVariant}
              initial="initial"
              whileInView="animate"
              className={s.letter}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.div>
            ))}
          </h2>
          <div className={s.formFlex}>
            <form  ref={formRef} onSubmit={sendEmail}>
            <label htmlFor="name">Nom / Prénom</label>
            <input type="text" id="name" name="user_name" required />

            <label htmlFor="email">Mail</label>
            <input type="email" id="email" name="user_email" required />

            <label htmlFor="formule">Formule</label>
            <select id="formule" name="user_formule">
              <option value="premium">Premium</option>
              <option value="standard">Standard</option>
              <option value="basic">Eco</option>
            </select>

            <label htmlFor="budget">Budget</label>
            <input type="number" id="budget" name="user_budget" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>

            <div className={s.btnContainerSend}>
                  <button className={s.btnTelSend} type="submit">ENVOYER</button>
                  <button className={s.btnTelsSend} >ENVOYER</button>
              </div>
          {messageSent && <p className={s.successMessage}>Votre message a bien été envoyé !</p>}
          </form>
        </div>
        </div>
      </div>
      {isOpen && (
        <PopupModal
          open={isOpen}
          url="https://calendly.com/ivanduran2397"
          onModalClose={() => setIsOpen(false)}
          rootElement={document.body}
        />
      )}
    </div>
  )
}
