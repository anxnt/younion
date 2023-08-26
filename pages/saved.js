import React from 'react'
import styles from '@/styles/Home.module.css'
import Menu from './Components/Menu'
import Secondnav from './Components/Secondnav'
import Savedoppurtunity from './Components/Savedoppurtunity'

function saved() {
  return (
    <div className={styles.profile}>
    
    <Menu/>
    <Secondnav thename="Saved"/>

    <div className={styles.dashboardbody}>

     <Savedoppurtunity/>

    </div>  


    </div>
  )
}

export default saved