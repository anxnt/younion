import React from 'react'
import styles from '@/styles/Home.module.css'
import Sociallink from './Sociallink'

function Social() {
  
  const twitter = 'ri-twitter-fill';
  const instagram = 'ri-instagram-line';
  const youtube = 'ri-youtube-fill';


  return (
    <div className={styles.socialsc}>

    <header className={styles.socialsh}> Socials </header> 


    <div className={styles.sociallinkc}>
    <Sociallink username="anant7" followersnumber="200" postsnumber="17" icons={twitter} className="sociallink"/>

    <Sociallink username="anant715" followersnumber="240" postsnumber="35" icons={instagram} className="sociallinkig" />

    <Sociallink username="anant715" followersnumber="252" postsnumber="17" icons={youtube} className="sociallinkyt" />
    </div>

    </div>
  )
}

export default Social