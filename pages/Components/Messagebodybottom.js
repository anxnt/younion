import React from 'react'
import styles from '@/styles/Home.module.css'

function Messagebodybottom() {
  return (
    
    <div className={styles.messagebody1bottom}>
     
     <div className={styles.messagebody1bottom1}>

     </div>

     <div className={styles.messagebody1bottom2}>

        <input className={styles.messageinput} type="text" placeholder="Write message for Meta"/> 
        <div className={styles.messageattachmentsend}>

          <div className={styles.messageattachment}> <i class="ri-attachment-2"></i> </div>
          <div className={styles.messagesend}> <i class="ri-arrow-right-up-fill"></i> </div>

        </div>
        <div> </div>
     </div>
            
           
    </div>
  )
}

export default Messagebodybottom