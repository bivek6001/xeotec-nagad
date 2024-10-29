import React from 'react'
import { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";

const Questions = () => {
const [active,setActive]=useState(false);

  return (
    <div className=" h-[100vh] w-[100%] p-3">

<div className={`toggle flex flex-col  overflow-hidden  transition-all duration-300 ease-in-out ${active ? 'h-[300px]' : 'h-[68px]'} ${active ? "border-2" : ""}`}>
  {/* Your content here */}




    <div className="question border h-[80px] w-[100%] border-[#DEE2E6] rounded-[100px] flex  justify-between  items-center p-3">
    <p className='font-bold text-xl'>Q. What is Aadhaar Enabled Payment System ?</p>

   <div className='rounded-[100%] bg-[#F76900]' onClick={()=>{
    console.log(active)
    setActive(!active)
   }} > <RxCaretDown size={40} /></div>
    </div>
    <div className="data text-sm text-[#515457]">
   <p>Below are the services  available under Aeps:</p>
   <p>1. Cash Withdrawal</p>
   <p>2.Balance inquiry</p>
   <p>3. Mini Statement</p>
   <p>4. Aadhaar to aadhaar fund transfer</p>


    </div>

    </div>






    </div>
  )
}

export default Questions