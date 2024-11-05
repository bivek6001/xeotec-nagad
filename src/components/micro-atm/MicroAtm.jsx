import React from 'react'
import { RxCaretRight } from "react-icons/rx";
import Text from './Text';
import MicroAtmWork from './MicroAtmWork';
import MicroAtmSolutions from './MicroAtmSolutions';
import Partner from './Partner';

const MicroAtm = () => {
  return (
    <div className='w-[100% ]' >

<div className="banner overflow-hidden bg-[#F76900] h-[40vh] w-[100%] flex flex-col items-center justify-center gap-3 ">
        <h1 className='text-white text-5xl font-bold mb-5' >Micro Atm Services</h1>
        <p className='text-white text-sm font-semibold'>Welcome to Nagad Wallet India, your trusted provider of <br />
        aadhaar pay and AEPS API services.
        
        </p>



    </div>


    <div className='bg-[#FAFAFA] w-[100%] h-[80px] flex items-center '>



<p className='flex items-center text-sm mx-10 '>Home  <RxCaretRight /> Services  <RxCaretRight /> <span className='text-[#F76900]'>Micro Atm Services</span></p>

    </div>


    <Text/>
    <MicroAtmWork/>
    <MicroAtmSolutions/>
    <Partner/>


    </div>
  )
}

export default MicroAtm