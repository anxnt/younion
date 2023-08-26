import React from 'react'
import styles from '@/styles/Home.module.css'
import Accounttop from './Accounttop';
import Accountbottom from './Accountbottom';

function Account() {
  return (
    <div className={styles.accountc}>

     <Accounttop/>

     <Accountbottom/>
    
    </div>
  )
}

export default Account