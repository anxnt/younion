import React from 'react'
import styles from '@/styles/Home.module.css'
import { useState } from 'react';


function Topbody() {


        const [isChecked, setIsChecked] = useState(false);
      
        const handleToggle = () => {
          setIsChecked(!isChecked);
        }

  return (

    <>
    <div style={{ width:"100vw", height:"300px", marginTop:"170px", display:"flex",  justifyContent:"center", position:"absolute" }}>

    <header className={styles.toph}> Unlock the power of <span className={styles.different} > collaboration </span> </header>

    <header className={styles.bottomh}> Connect with <span className={styles.different}>  brands </span> to unleash new <span className={styles.different}> opportunities </span> as a content creator </header>

    </div>

    <div style={{ width:"100vw", height:"150px", marginTop:"500px", display:"flex",  justifyContent:"center", alignItems:"center", backgroundColor:"" }}>

   <div style={{ width:"750px", height:"100%", backgroundColor:"", display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>

      <div className={styles.jaaccontainer} style={{ width: "223px", height: "90px", display:"flex", alignItems:"center", justifyContent:"center", borderRadius: "75px", background: "rgba(113, 113, 113, 0.20)", backdropFilter: "blur(10.5px)", }}>
      <p className={styles.jaac}> join as a creator </p>
      
    </div>

      
      <div style={{ width: "450px", height: "90px", display:"flex", alignItems:"center", justifyContent:"space-between", borderRadius: "75px", background: "rgba(113, 113, 113, 0.20)", backdropFilter: "blur(10.5px)" }}>
       
       <p  className={styles.jaac} style={{marginLeft:"40px"}}> switch to brand </p>

          <div className={`${styles.switch} ${isChecked ? styles.switchOn : ''}`} onClick={handleToggle} >
           
           <div className={styles.slider}>

           </div>
    </div>


      </div>
    
    </div>

    </div>

    </>
  )
}

export default Topbody