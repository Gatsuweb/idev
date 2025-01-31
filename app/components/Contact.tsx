import { useState } from "react";
import Image from "next/image";
import s from "../styles/Contact.module.css"

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    formule: "premium",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis :", formData);
  };

  return (
    <div className={s.contactContainer}>
      <div className={s.contactContent}>
        <div className={s.contactTel}>
          <p>Besoin d'aide ?</p>
          <div className={s.btnContainerCall}>
                <button className={s.btnTelCall} ><Image src="iconeTel.svg" alt="Icone téléphone" height={40} width={40} />RESERVER</button>
                <button className={s.btnTelsCall} ><Image src="iconeTel.svg" alt="Icone téléphone" height={40} width={40} />RESERVER</button>
            </div>
          <h5>DISCUTONS DE VOTRE PROJET</h5>
          <div className={s.reso}>
            <div >
              <a href="">Instagram</a>
              <a href="">Linkedin</a>
            </div>
              <a href="">ivan.duran@outlook.fr</a>
          </div>
        </div>

        <div  className={s.formContact}>
          <h2>CONTACT</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nom / Prénom</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="email">Mail</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="formule">Formule</label>
            <select id="formule" name="formule" value={formData.formule} onChange={handleChange}>
              <option value="premium">Premium</option>
              <option value="standard">Standard</option>
              <option value="basic">Basic</option>
            </select>

            <label htmlFor="budget">Budget</label>
            <input type="number" id="budget" name="budget" value={formData.budget} onChange={handleChange} />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"  value={formData.message} onChange={handleChange}></textarea>

          <div className={s.btnContainerSend}>
                <button className={s.btnTelSend} type="submit">ENVOYER</button>
                <button className={s.btnTelsSend} type="submit">ENVOYER</button>
            </div>
        </form>
        </div>
      </div>
    </div>
  )
}
