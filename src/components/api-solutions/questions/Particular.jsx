import React from 'react'
import { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";

export const Particular = ({data}) => {
const [active,setActive]=useState(false);
console.log(data.question)
  return (
    <div className='  w-[100%] p-3'>

    <div onClick={()=>{
      console.log(active)
      setActive(!active)
     }} className={`toggle   overflow-hidden   rounded-[35px] transition-all duration-300 ease-in-out border ${active ? 'min-h-[120px]  ' : 'h-[70px] '}`}>
    {/* Your content here */}
  
  
  
  
      <div className={` ${active ? "bg-[#F76900]" : "bg-white"} transition-all duration-300 ease-in-out question  h-[70px] w-[100%]  rounded-[38px]  flex  justify-between  items-center p-3`}>
      <p className={`font-bold text-xl  ${!active ? "text-black" : "text-white"}`}> {data.question}</p>
  
     <div className={`rounded-[100%]  ${!active ? "bg-[#F76900]" : "bg-white"}`}  > <RxCaretDown size={40} className={ `${!active ? "rotate-0" : "rotate-180"} transition-all duration-300 ease-in-out` } /></div>
      </div>
      <div className="data  mx-10 my-4 text-sm text-[#515457]">
  <p>{data.answer}</p>
  
  
      </div>
  
      </div>
      </div>

  
  )
}

export default Particular