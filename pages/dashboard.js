import React from 'react'
import styles from '@/styles/Home.module.css'
import Menu from './Components/Menu'
import Secondnav from './Components/Secondnav'
import Dashboardtop from './Components/Dashboardtop'


function dashboard() {
  return (
    <div className={styles.profile}>
    
    <Menu/>
    <Secondnav thename="Dashboard"/>

    <div className={styles.dashboardbody}>
     
     <Dashboardtop/>

      <div className={styles.dashboarddate}>
       
       <div className={styles.dashboarddatec}>
        7d
       </div>

       <div className={styles.dashboarddatec}>
        30d
       </div>

       <div className={styles.dashboarddatec}>
        1y
       </div>
       
      </div>

      <div className={styles.dashboardpv}>

        <header className={styles.dashboardpvh}>
          Profile Views
        </header>

        <div className={styles.dashboardpvc} >

        </div>

      </div>


      <div className={styles.dashboardpv}>
      <header className={styles.dashboardpvh}>
          Proposals
        </header>

        <div className={styles.dashboardpvc2} >

</div>

     </div>

    </div>


    </div>
  )
}

export default dashboard