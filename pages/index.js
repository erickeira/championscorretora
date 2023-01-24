import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'


export default function Home() {
  return (
    <>
      <Head>
        <title>Champions Corretora</title>
        <meta name="description" content="Seguros, vida, previdência e capitalização" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header/>
      </main>
    </>
  )
}
