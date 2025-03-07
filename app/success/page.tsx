'use client'
import { Nav } from "../components/Nav"
import styles from '../styles/Success.module.css'
import Link from 'next/link'

export default function Success() {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Merci pour votre inscription !</h1>
          <div className={styles.messageBox}>
            <p className={styles.message}>
              Votre email a bien été enregistré. Vous recevrez bientôt la checklist dans votre boîte mail.
            </p>
            <p className={styles.subMessage}>
              N'oubliez pas de vérifier vos spams si vous ne recevez pas l'email dans les prochaines minutes.
            </p>
          </div>
          <Link href="/" className={styles.homeButton}>
            Retour à l'accueil
          </Link>
        </main>
      </div>
    </>
  )
}