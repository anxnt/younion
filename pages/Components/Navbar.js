import React from 'react'
import styles from '@/styles/Home.module.css'

function Navbar() {
  return (
    <div className={styles.navbar}>
         
    <div className={styles.logo}>
     
   <header className={styles.younion}> younion </header>  

   </div>

    <div className={styles.middle}>

     <div className={styles.middle1}>
        
        <p> how it works? </p>
        
        <p> explore creators </p>

        <p> find brands </p>
    
    </div>
    
    
    </div>

    <div className={styles.end}>

     <div className={styles.brands}> 
     <p> register as a brand </p>
     </div>

     <div className={styles.creators} >
     <p> join as a creator </p>  
     </div>
       
    </div>

   </div>
  )
}

export default Navbar