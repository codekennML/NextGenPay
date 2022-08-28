import React from 'react';
import styles from "./style";
import { Navbar, 
   Billing, CardDeal, Business, ClientSection, Stats,CTA,Footer, Testimonials, Hero,
 } from "./components";

const App = () => {
  return (
   
<div className = "bg-primary w-full overflow-hidden">
<div className = {`${styles.paddingX} ${styles.flexCenter}`}>
    <div className = {`${styles.boxWidth}`}> 
  
    <Navbar />
    </div>
</div>
<div className= {`${styles.flexStart}bg-primary`}>

        <div className = {`${styles.boxWidth}`}> 
        <Hero />
        </div>
</div> 

 <div className= {`${styles.paddingX} ${styles.flexStart}bg-primary`}>

        <div className = {`${styles.boxWidth}`}> 
        <Stats />
        <Business />
        <Billing />
        <CardDeal/>
        <Testimonials />
        <ClientSection />
        <CTA />
        <Footer />
      

        </div>
</div>






</div>
  )
}

export default App