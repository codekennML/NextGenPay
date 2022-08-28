import React from 'react'
import styles , {layout} from '../style'
import {bill, google, apple } from '../assets'

const Billing = () => (
  <section id="product" className = {layout.sectionReverse}>
      <div className= {layout.sectionImgReverse}>
        
      <img src= {bill} alt="" className= "w-full h-full relative z-10"  />
     
     <div className="absolute w-1/2 h-1/z white__gradient rounded-full top-0 left-1/2 z-[3]"></div>
     <div className="absolute w-1/2 h-1/z white__gradient rounded-full bottom-0 left-1/2 z-[0]"></div>
      </div>

   <div className={layout.sectionInfo}>
    <h2 className = {styles.heading2}>Easily control your <br className = "sm:block hidden "/>
    billing &amp; invoicing
    </h2>
    <p className = {`${styles.paragraph} max-w-[470px] mt-5 text-base`}
  >
   Exercitationem rem optio voluptate itaque voluptatibus quia neque aliquam pariatur perferendis nemo illum voluptatum sunt iusto ut, accusantium rerum molestiae sint iure?
    </p>

    <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
      <img src= {apple} alt="apple_store" className = "w-[128px] h-[42px] cursor-pointer "/>
      <img src= {google} alt="play_store" className = "w-[128px] h-[42px] cursor-pointer "/>
    </div>
   </div>
</section>
)


export default Billing