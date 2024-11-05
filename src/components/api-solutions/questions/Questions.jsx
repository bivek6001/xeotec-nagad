
import React from 'react'
import { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Particular from './Particular';
const questionData= [

{


  question:"  Q. What is AePS API?",
  answer:' AePS API stands for "Aadhaar Enabled Payment System API." It is an application programming interface that facilitates transactions and banking services in India using the Aadhaar card'
},
{


  question:" Q. How do I become an AePS merchant?  ",
  answer:" To become an AePS merchant, you generally need to follow these steps: 1.Identify the Provider 2.Contact the Provider 3.Fulfill Requirements 4.Application and Verification  5.Activation and Go Live "
},
{


  question:" Q. How does a aeps API work?",
            
  answer:"The AePS API facilitates Aadhaar-based transactions and banking services by integrating with the Aadhaar system for user authentication and transaction processing.  "
},




]




const Questions = () => {
const [active,setActive]=useState(false);





  return (
    <div className='h-[70vh]  w-[100%] flex items-center justify-center flex-col bg-[#FAFAFA] '>

   
    
   <div className="child-container bg-[#FAFAFA] w-[100%]  flex items-center justify-center gap-[5%] ">
   <div className="questions-container w-[60%] flex items-center   flex-col " >
    {questionData.map((data)=>{
        console.log(data)
    return (
    
    <Particular data={data}/>
    
    
    )
    
    
    
    })}
    </div>



    <div className="doubt-advertisement-container w-[30%] flex flex-col gap-[10px] " >


    <p className='text-[#474747] text-xl'>Having Same Doubts?</p>
    <h1 className='text-4xl font-bold '>We can clear all your doubt quickly...</h1>
    <button className='bg-[#F76900] w-[50%] mt-5 text-base font-semibold p-3 rounded-3xl flex items-center justify-center text-white'>Inquire Now <MdKeyboardDoubleArrowRight /> </button>



    </div>





    </div> 
       
    
    
    

    
    
        </div>
  )
}

export default Questions
