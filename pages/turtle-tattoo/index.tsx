import Head from 'next/head'
import { useEffect } from 'react';
import styles from '../../styles/Home.module.css'

export default function Home() {
    useEffect(() => {
        window.location.replace("https://youtu.be/dQw4w9WgXcQ");
    },[]);
  return (
    <div className={styles.container}>
      <Head>
        <title>สักลายเต่า</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ยินต้อนรับเข้าสู่ &quot;เทคโนโลยีสมัยนี้&quot; 
        </h1>

        <p className={styles.description}>
          เชิญชมสิ่งที่ทำได้ด้วย  &quot;เทคโนโลยีสมัยนี้&quot; 
        </p>

      </main>
    </div>
  )
}
