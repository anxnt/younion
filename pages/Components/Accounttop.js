import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

function Accounttop() {
  return (
    <div className={styles.accountprofile}>

      <div className={styles.accountprofile1}>

        <div className={styles.accountpic}>
          <div className={styles.profilepicture}>
          </div>
        </div>



        <div className={styles.accountname}>

          <div className={styles.accountnametop}>
            <header className={styles.accountname1}>  Anant Kumar </header>

            <div className={styles.usernamec}>
              <header className={styles.mainusername}>
                @anant715
              </header>
              
              <Link href="">
              <div className={styles.usernamemessage}>
              <i class="ri-chat-1-line"></i>
              </div>
              </Link>

            </div>
          </div>

          <div className={styles.accountnametop1}>

          </div>

          <div className={styles.accountnamebottom}>

            <header className={styles.accountnamebottomh}> Charges </header>

            <div className={styles.accountnamebottomhc}>
            <i class="ri-money-dollar-circle-line" style={{fontSize:"30px", marginRight:"5px"}}></i>
            <p className={styles.accountnamebottomhcp}> 1000/Post </p>
            </div>

          </div>

          </div>
       </div> 
      </div>
  )
}

export default Accounttop