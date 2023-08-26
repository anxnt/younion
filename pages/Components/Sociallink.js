import React from 'react'
import styles from '@/styles/Home.module.css'

function Sociallink(props) {
  return (
    <div className={styles[props.className]} >

    <div className={styles.socialimage}>

     <i className={props.icons} style={{marginRight:"40px"}}></i>  
      
    </div>  

    <div className={styles.followers}>

      <div className={styles.followersl}>
        <div className={styles.followerslc}> <i className="ri-arrow-right-up-line"></i> </div>
      </div> 

      <div className={styles.followersno}>

        <header> {props.followersnumber} <span className={styles.followersno2}> Followers </span> </header>
        
        <header>  {props.postsnumber} <span className={styles.followersno2} > Posts </span> </header>
 
 
      </div>

      <div className={styles.followersu}>

        <div className={styles.followersun}> <header> @{props.username} </header></div>

        <div className={styles.followersun}> <header> @{props.username} </header></div>

        <div className={styles.followersun}> <header> @{props.username} </header></div>
        
      </div>
    
    </div>


    
    </div>
  )
}

export default Sociallink