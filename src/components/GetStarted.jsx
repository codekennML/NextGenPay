import React from 'react'
import styles from '../style'
import {arrowUp} from '../assets'

const GetStarted = () => 
 (
    <div className = {`${styles.flexCenter} rounded-full bg-blue-gradient w-[100px] h-[100px] p-1 cursor-pointer`}>
      <div className= {`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
      <div className = {`${styles.flexStart} flex-row `}>
        <p className = "font-poppins fonts-medium text-lg leading-[23px]" >
          <span className= "text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="" className="w-[23px] h-[23px] object-contain" />
      </div>

      <p className = "font-poppins fonts-medium text-lg" >
          <span className= "text-gradient">Started</span>
       
        </p>
      </div>
    </div>
  )

export default GetStarted