import React from 'react'
import Link from 'next/link';
import styles from '@/styles/Home.module.css'


function Dashboardtop() {
  return (
    <div className={styles.dashboardtop}>
      
    <div className={styles.dashboardtop1}>
    
    <header className={styles.dashboardtop1h}> Active Collabs </header>

    <header className={styles.dashboardtop1no}> 2</header>

    <div  className={styles.dashboardtop1va}>  view all </div>
    </div>

    <div className={styles.dashboardtop2}>
   
      <header className={styles.dashboardtop2h}> Optimize your profile to get more brand deals </header>
       
       <Link href="/profile"> 
      <div  className={styles.dashboardtop2vp}>  Visit Profile </div> 
      </Link>

    </div>
    

    </div>
  )
}

export default Dashboardtop