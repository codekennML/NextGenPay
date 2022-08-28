import React from 'react'
import {stats} from '../constants'
import styles from '../style';
const Stats = () =>  (
<section className = "flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6">
    {stats.map((stat) =>(
          <div key = {stat.id} className = {`flex-1 flex justify-start items-center m-3 flex-row `}>
            <h4 className = "font-poppins font-semibold text-white text-[25px] xs:text-[30px] xs:leading-[53px] leading-[42px] ">{stat.value} </h4> 
            {" "}
            <p className = "font-poppins font-semibold text-gradient ml-0 uppercase text-[15px] xs:text-[20px] xs:leading-[26px] leading-[21px] pl-1 ">{stat.title}</p>
          </div>
    ))}
</section>
  )


export default Stats