import React from 'react'
import styles from '@/styles/Home.module.css'


function brandonboarding() {
  return (
    <>
    <div style={{ backgroundColor:"#171515", width:"100vw", height:"100vh", backgroundImage: `url("/Images/onboarding.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat', display:"flex", justifyContent:"space-around", alignItems:"center"} }>

    <div style={{backgroundColor:"", width:"45vw", height:"80vh", display:"flex", justifyContent:"center", alignItems:"center"}}>

    <p className={styles.younionbig}> younion </p>

    <p className={styles.younionh}> Connect with <span  className={styles.different}> brands </span> to unleash new <span  className={styles.different}> opportunities </span> as a content creator. </p>

    </div>
     
    <div style={{backgroundColor:"", width:"45vw", height:"80vh", display:"flex", justifyContent:"center", alignItems:"center"}}>

        <div className={styles.onboardingcard}>
         
         <header> Log in as a brand</header>

        </div>
    </div>
        
    </div>
    
    </>
  )
}

export default brandonboarding