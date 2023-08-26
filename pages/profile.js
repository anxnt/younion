import React from 'react'
import styles from '@/styles/Home.module.css'
import Menu from './Components/Menu'
import Secondnav from './Components/Secondnav'
import Account from './Components/Account'
import Social from './Components/Social'

function profile() {
  return (

    <div className={styles.profile} >
    
    <Menu/>

    <Secondnav thename="Profile"/>

    <Account/>
    
    <Social/>

    </div>
  )
}

export default profile