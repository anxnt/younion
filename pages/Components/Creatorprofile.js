import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

function Creatorprofile() {
  return (

    <>
    <div className={styles.creatorprofile1}>

    <div className={styles.creatorprofilepic}>

      <div className={styles.creatorpicture}>
      
      </div>

    </div>

    <div className={styles.creatorname}>

      <header className={styles.creatorname1}> Anant Kumar </header>

      <div className={styles.creatorusernamemessage}>

        <div className={styles.creatorusername}>
         @anant715
        </div>

        <div className={styles.creatormessageb}>
        <i class="ri-chat-1-line"></i>
        </div>

      </div>

      <div className={styles.creatortags}>
        
      </div>

    </div>

    </div>

    <header className={styles.creatorabout}>

      About

    </header>

    <p className={styles.creatorabout1}>
    the bio will go here, the bio will go here, the bio will go here, the bio will go here, the bio will go here, the bio will go here, the bio will go here, the bio will go here, the bio will go here, the bio will the bio will go here, the bio will go here, the bio will go here, the bio will go here, the bio will go, bio will go here, the bio will go     </p>
   
    <div className={styles.viewcreatorc}>
    <div className={styles.viewcreator}>
    <i class="ri-arrow-right-up-line"></i>
    </div> 
    </div>
    </>
  )
}

export default Creatorprofile