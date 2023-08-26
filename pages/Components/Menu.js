import React, { useEffect, useState} from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';

function Menu() {

  const router = useRouter();

  useEffect(() => {}, [router.pathname]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.menu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

     <div className={styles.menulogo1} style={{height:"55px", width:"55px", borderRadius:"15px", marginBottom:"20px", fontFamily: "JetBrains Mono", fontSize:"50px", fontWeight:"bolder",
          display:"flex", justifyContent:"center", alignItems:"center", color:"white"}}>
      
     <p style={{marginBottom:"35px", transition: 'all 0.3s ease'}}> {isHovered ? 'younion' : 'y'} </p>
     </div>

     <Link href="/profile">
     <div className={isHovered ? styles.profileicon2 : styles.profileicons} style={{ backgroundColor: router.pathname==='/profile' ? "#393939" : ""}}> 
     
     <div style={{height:"45px", width:"45px", borderRadius:"50%", backgroundColor:"white"}}> </div>

     <div className={isHovered ? styles.menunamec : styles.menunamec1}>
      
      <p className={isHovered ? styles.menuname : styles.menuname1}> @anant715 </p>

     </div>

     </div>
     </Link>

     <Link href="/dashboard">
     <div  className={isHovered ? styles.profileicon2 : styles.profileicons} style={{ backgroundColor: router.pathname==='/dashboard' ? "#393939" : ""}}>
     <i className="ri-home-5-line"></i> 
     
     <div className={isHovered ? styles.menunamec : styles.menunamec1}>
      
      <p className={isHovered ? styles.menuname : styles.menuname1}> Dashboard </p>

      </div>

     </div>
    </Link>


    <Link href="/search">
     <div  className={isHovered ? styles.profileicon2 : styles.profileicons} style={{ backgroundColor: router.pathname==='/search' ? "#393939" : ""}}> 
     <i className="ri-search-line"></i> 
     <div className={isHovered ? styles.menunamec : styles.menunamec1}>
     <p className={isHovered ? styles.menuname : styles.menuname1}> Search </p>
     </div>
     </div>
     </Link>

     <Link href="/messages">
     <div  className={isHovered ? styles.profileicon2 : styles.profileicons} style={{ backgroundColor: router.pathname==='/messages' ? "#393939" : ""}}> 
     <i className="ri-chat-1-line"></i> 
     <div className={isHovered ? styles.menunamec : styles.menunamec1}>
     <p className={isHovered ? styles.menuname : styles.menuname1}> Messages </p>
     </div>
     </div>
     </Link>
     
     <Link href="/saved">
     <div className={isHovered ? styles.profileicon2 : styles.profileicons} style={{ backgroundColor: router.pathname==='/saved' ? "#393939" : ""}}> 
     <i className="ri-heart-2-line"></i> 
     <div className={isHovered ? styles.menunamec : styles.menunamec1}>
     <p className={isHovered ? styles.menuname : styles.menuname1}> Saved </p>
     </div>
     </div>
     </Link>
     

     <div className={isHovered ? styles.profileicon2 : styles.profileicons} > 
     <i className="ri-settings-2-line"></i>
     <div className={isHovered ? styles.menunamec : styles.menunamec1}>
     <p className={isHovered ? styles.menuname : styles.menuname1}> Settings </p>
     </div>
     </div>


    </div>
  )
}

export default Menu