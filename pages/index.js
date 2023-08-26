import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from './Components/Navbar'
import Topbody from './Components/Topbody'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Younion</title>
        <meta name="description" content="Bridging brands and creators for seamless collaboration and creative synergy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/younion.ico" />
      </Head>
      <main className={styles.main} >
     
      <div style={{
        backgroundImage: `url("/Images/Home.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '750px',
        width: '100vw ',
        position:"",
        display:"flex",
        alignItems:"",
        justifyContent:""}}>

        <Navbar/>
        <Topbody/>
        </div>

        <div style={{backgroundColor:"#F3F3F3", width:"100vw", height:"100vh"}}>

        </div>
       
      </main>
    </>
  )
}
