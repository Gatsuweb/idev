'use client'
import { useState, FormEvent } from 'react';
import Image from 'next/image';
import styles from '../styles/Ebook.module.css'; // Assurez-vous que le chemin est correct
import { NavEbook } from '../components/NavEbook';

export default function UnsubscribePage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('email', email);
    
    try {
      const response = await fetch('/api/unsub', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        const data = await response.json();
        console.error("Erreur:", data);
        setStatus('error');
      }
    } catch (error) {
      console.error("Erreur:", error);
      setStatus('error');
    }
  };

  return (
    <>
    <NavEbook />
      <div className={styles.bgImg}>
        <Image 
          src="/sand.jpg" 
          alt="texture" 
          className={styles.texture} 
          width={3500} 
          height={2500} 
          style={{opacity: 0.1}}
        />
      </div>

      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Se désinscrire du<span>Ebook SEO</span></h1>
          <p className={styles.description}>
            Désolé de vous voir partir. Veuillez confirmer votre adresse email pour vous désinscrire.
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              name="email"
              placeholder="Votre adresse email"
              required
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className={styles.button}>
              Confirmer la désinscription
            </button>
          </form>

          {status === 'success' && (
            <p className={styles.success}>
              Vous avez bien été désinscrit. Vous ne recevrez plus de communications concernant les Newsletters.
            </p>
          )}
          {status === 'error' && (
            <p className={styles.error}>
              Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
            </p>
          )}
        </main>
      </div>
    </>
  );
}