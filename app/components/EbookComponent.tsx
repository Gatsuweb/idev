'use client'
import Image from 'next/image';
import { useState, FormEvent } from 'react';
import Head from 'next/head';
import styles from '../styles/Ebook.module.css';


export default function EbookComponent() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      const formData = new FormData();
      formData.append('email', email);
    
      try {
        const response = await fetch('/api/postemail', {
          method: 'POST',
          body: formData, 
        });
    
        if (response.ok) {
          setStatus('success');
          setEmail('');
        } else {
          setStatus('error');
        }
      } catch {
        console.log("error");
        setStatus('error');
      }
    };
    
  
  
  
    return (
      <>
        <div className={styles.bgImg}><Image src="/sand.jpg" alt="texture" className={styles.texture} width={3500} height={2500} style={{opacity: 0.1}}/></div>
  
      <div className={styles.container}>
        <Head>
          <title>Téléchargez votre Ebook Gratuit</title>
          <meta name="description" content="Obtenez votre checklist gratuite en vous inscrivant" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>Obtenez votre <span>Ebook SEO</span> Gratuitement</h1>
          <p className={styles.description}>
            Inscrivez-vous pour recevoir votre Ebook et Checklist SEO directement dans votre boîte mail
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
              Recevoir l&apos;Ebook
            </button>
          </form>
  
          {status === 'success' && (
            <p className={styles.success}>
              Merci ! Vérifiez votre boîte mail pour télécharger votre Ebook.
            </p>
          )}
          {status === 'error' && (
            <p className={styles.error}>
              Une erreur est survenue. Veuillez réessayer.
            </p>
          )}
        </main>
      </div>
      </>
    );
  }