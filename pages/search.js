import React from 'react'
import styles from '@/styles/Home.module.css'
import Menu from './Components/Menu'
import Secondnav from './Components/Secondnav'
import Account from './Components/Account'
import Link from 'next/link'
import Creatorprofile from './Components/Creatorprofile'

function search() {
  return (
    <div className={styles.profile}>
    
    <Menu/>
    <Secondnav thename="Search"/>

    <div className={styles.dashboardbody}>
    
    <div className={styles.searchtop}>

      <div className={styles.searchbar}>
      <input className={styles.searchbarc} type="text" placeholder="Search" />
      <button className={styles.searchsubmit} type="submit">
      <i class="ri-search-line"></i>
      </button>
      </div>

      <div className={styles.searchfilters}>

      <div className={styles.searchfilters1}>
        opportunities
      </div>

      <div className={styles.searchfilters2}>
        creators
      </div>

      <div className={styles.searchfilters3}>
      <i className="ri-filter-2-line"></i>
      </div>


      </div>

    </div>

    <div className={styles.searchpbody}>
      
    <div className={styles.creatorprofile}>
    <Creatorprofile/>
    </div>

    <div className={styles.creatorprofile}>
     <Creatorprofile/>
    </div>

    <div className={styles.creatorprofile}>
    <Creatorprofile/>
    </div>

    </div>

    </div>
    </div>
  )
}

export default search