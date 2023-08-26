import React from 'react'
import styles from '@/styles/Home.module.css'
import Menu from './Components/Menu'
import Secondnav from './Components/Secondnav'
import Messagebodytop from './Components/Messagebodytop'
import Messagebodybottom from './Components/Messagebodybottom'
import Messageprofile from './Components/Messageprofile'


function messages() {
  return (
    <div className={styles.profile}>

      <Menu />
      <Secondnav thename="Messages" />

      <div className={styles.messagebody}>

        <div className={styles.messagebody1}>

        <Messagebodytop/>
        <Messagebodybottom/>

        </div>

        <div className={styles.messagebody2}>

         <Messageprofile/>

         <Messageprofile/>

         <Messageprofile/>

        </div>

      </div>

    </div>
  )
}

export default messages