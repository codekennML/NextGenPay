import React from 'react'
import styles from '../style'
import { clients } from '../constants'

const ClientSection = () => {
  return (
   <section className={`${styles.flexCenter} my-4 hidden md:block`}>
    <div className = {`${styles.flexCenter}  w-full `}>
      {clients.map((client) => (
        <div key = {client.id} className = {`flex-1 flex-col md:flex-row flex-wrap 
        ${styles.flexCenter} sm:min-w-[120px] min-w-[120px]`}>
          <img src= {client.logo} alt="client" className = "sm:w-[192px] w-[100px] object-contain"/>
        </div>
      ))}
      
    </div>
    
   </section>
  )
}

export default ClientSection