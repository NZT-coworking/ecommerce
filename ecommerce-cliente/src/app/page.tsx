import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import RootLayout from './layout'


export default function Home() {
  return (
    <main className={styles.main}>
        <RootLayout>
          Conteudoasa
        </RootLayout>
    </main>
  )
}
