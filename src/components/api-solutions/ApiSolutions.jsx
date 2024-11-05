import React from 'react'
import Features from './features/Features'
import Banner from './banner/Banner'
import Benefits from './benefits/Benefits'
import Connect from './connect/Connect'
import Footer from './footer/Footer'
import Questions from './questions/Questions'

const ApiSolutions = () => {
  return (
   <div className="parent-container w-[100%] overflow-hidden ">
    <div className="banner overflow-hidden bg-[#F76900] h-[40vh] w-[100%] flex flex-col items-center justify-center gap-3 ">
        <h1 className='text-white text-4xl font-1bold' >AePS API Provider</h1>
        <p className='text-white text-lg'>Welcome to Nagad Wallet India, your trusted provider of <br /> Aadhaar Enabled Payment System(AEPS) software and API services</p>

    </div>
    <Features/>
    <Banner/>
    <Benefits/>
    <Banner/>
    <Questions/>
    <Connect/>
    <Footer/>

   </div>

  
  )
}

export default ApiSolutions