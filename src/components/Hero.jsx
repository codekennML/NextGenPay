import React from 'react';
import styles from '../style';
import GetStarted from './GetStarted';
import {discount,robot} from '../assets';


const Hero = () => (
<section id = "home" className ={`md:flex-row  flex flex-col ${styles.paddingY} `}>
<div className = {`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row px-4 bg-discount-gradient rounded-[10px] mb-2 items-center py-2.5">
            <img src={discount} alt=""  className = "w-8 h-8"/>
          <p className = {`${styles.paragraph} ml-2`}> 
            <span className="text-white">20%</span> Discount for {''} 
            <span className="text-white">1 Month</span> Account
            </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="font-semibold text-[52px] flex-1 font-poppins ss:text-[72px] text-white leading-[75px] ss:leading-[100px]" >
          The Next <br className="sm:block hidden"/>
          {' '}
        <span className = "text-gradient">Generation</span> {' '} <br />

        </h1>

        <div className = "ss:flex hidden md:mr-0 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-semibold text-[52px]  font-poppins ss:text-[58px] text-white leading-[68px] ss:leading-[100px] w-full" >
        Payment Method
        </h1>
            <p className = {`${styles.paragraph} max-w-[470px] mt-5`}>
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
        We examine annual percentage rates, annual fees.
            </p>
    </div>
        <div className =" {`flex flex-1 md:my-0 my-10 ${styles.flexCenter} relative`}">
            <img src={robot} alt="billing" className="w-full h-full relative z-50" />

            <div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient"></div>

            <div className="absolute z-10 w-[80%] h-[80%]rounded-full bottom-40 white__gradient"></div>
            <div className="absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
        </div>
        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />
          </div>
 
</section>
)

    
 


export default Hero