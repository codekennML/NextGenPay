import React from 'react'
import {card} from '../assets'
import styles , {layout} from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
  
    <section id="product" className = {layout.section}>
       <div className={`${layout.sectionInfo} flex-col`}>
                <h2 className = {styles.heading2}>Find a better card deal <br className = "sm:block hidden "/>
                in a few easy steps
                </h2>
                <p className = {`${styles.paragraph} max-w-[470px] mt-5 text-base`}>
              Exercitationem rem optio voluptate itaque voluptatibus quia neque aliquam pariatur perferendis nemo illum voluptatum sunt iusto ut, accusantium rerum molestiae sint iure?
                </p>
                <Button tstyles= "mt-10" />
      </div>

        <div className= {layout.sectionImg}>
          <img src= {card} alt="" className= "w-full h-full relative z-10"  />
        </div>

     
  


</section>

  )
}

export default CardDeal