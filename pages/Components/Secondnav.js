import React from 'react'
import styles from '@/styles/Home.module.css'


function Secondnav(props) {
  return (
    <div className={styles.thetop}>
    
    <div className={styles.thename} >
        {props.thename}
    </div>

    <div className={styles.thebuttons} >
       
       <div className={styles.thebuttons1}> 
       
       <i className="ri-chat-1-line"></i>

       </div>

       <div className={styles.thebuttons1}> 
       
       <i className="ri-notification-2-line"></i>

       </div>

       <div className={styles.thebutton1}> </div>

    </div>

  </div>
  )
}

export default Secondnav