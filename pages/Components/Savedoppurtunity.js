import React from 'react'
import styles from '@/styles/Home.module.css'

function Savedoppurtunity() {
  return (
    <div className={styles.savedc}> 
    
    <div className={styles.savedc1}>

    <div className={styles.savedimageandname}>
    
    <div className={styles.savedimage}>
    <div className={styles.savedimage1}></div>
    </div>

    <div className={styles.savedname}>
    <header className={styles.savedname1}> Brand Name</header> 
    <div className={styles.savedusernameandbutton}>
    <header className={styles.savedusername}> @brandusername</header>
    <div className={styles.savedbutton}>
    <i className="ri-heart-fill"></i>
    </div>
    </div>
    </div>
    
    </div>  
    <header className={styles.savedlookingfor}> 
      Looking For
    </header>
    <header className={styles.savedlookingforp}>
    Calling all authentic, creative, and influential social media stars! As a brand manager, we seek a savvy collaborator with a loyal and engaged following. Join us for an exciting partnership that leaves a lasting impact. Let's connect and create magic together

    </header>

    <div className={styles.savedarrow}>
      <div className={styles.savedarrowc}>
      <i class="ri-arrow-right-up-line"></i>
      </div>
    </div>
    </div>

    </div>
  )
}

export default Savedoppurtunity