import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {

  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className={styles.navbar}>
         
    <div className={styles.logo}>
     
   <header className={styles.younion}> younion </header>  

   </div>

    <div className={styles.middle}>

     <div className={styles.middle1}>
        
        <p> how it works? </p>
        
        <p> explore creators </p>

        <p> find brands </p>
    
    </div>
    
    </div>

    <div className={styles.end}>
     
     <Link href="/profile">
     <div className={styles.brands}> 
     <p> register as a brand </p>
     </div>
     </Link>

     <div className={styles.creators} >
     <p> join as a creator </p>  
     </div>

     <div className={styles.navbaropen} onClick={toggleMenu} >
     {menuOpen ? <i class="ri-close-line"></i> : <i className="ri-menu-line"></i>}
     </div>
     {menuOpen && (
        <div className={styles.overlay}>
        
        <div className={styles.overlay1}>


        <Link href="/profile">
          <div className={styles.overlaydiv1}>
           Register as a Brand
           </div> 
        </Link>

           <div className={styles.overlaydiv1}>
           Join as a Creator
           </div> 

           <div className={styles.overlaydiv2}>
            Find Brands
            </div>

            <div className={styles.overlaydiv3}>
            Explore Creators
            </div>

            <div className={styles.overlaydiv3}>
            How it works?
            </div>

        

        </div>

        </div>)}
       
    </div>

   </div>
  )
}

export default Navbar