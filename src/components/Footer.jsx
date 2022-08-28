import React from 'react'
import styles from '../style'
import {logo} from '../assets'
import {footerLinks, socialMedia} from '../constants'

const Footer = () => {
  return (


      <section className = {`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className = {`${styles.flexStart} flex-col  md:flex-row mb-8 w-full `} >

          <div className = "flex-1 flex flex-col justify-start mr-10 ">
            <img src= {logo} alt="footer-logo" className ="w-[266px] h-[72px] object-contain" />
            <p className = {`${styles.paragraph } mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
            </p>
          </div>

          <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 ">

         
            {footerLinks.map((flinks) => (

            <div key = {flinks.key} className = "flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className = "font-poppins font-medium text-lg leading-[27px] text-white mb-4">
                  {flinks.title}
                </h4>
                  <ul>
                    {flinks.links.map((link,index) =>(
                      <li key = {link.key} className = 
                      {`${index !== flinks.links.length - 1 ? "mb-4":"mb-0"} font-poppins font-normal text-base leading-6 text-dimWhite hover:text-secondary cursor-pointer`}>
                        {link.name}
                      </li>
                    ))}
                  </ul>
            </div>
       

                        ))}
                        </div>
        </div>

       <div className="w-full flex  justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]">
        <p className="font-poppins font-normal text-center  text-lg leading-[27px] text-white mb-4">
        2022 NexusBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((icons , index) => (

            <img 
            key= {icons.id}
            src={icons.icon} 
            alt={icons.id}
            className= {`w-[21px] h-[21px] object-contain cursor-pointer mr-6 `}
            
            />

          ))}
        </div>
       </div>
      </section>

  )
}

export default Footer