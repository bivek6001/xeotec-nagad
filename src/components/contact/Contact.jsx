import React from 'react'
import { RxCaretRight } from "react-icons/rx";
import Find from './Find';
import Form from './Form';
import Footer from './Footer';
const Contact = () => {
  return (
    <div className='parent-container w-[100%] ' >


    <div className="banner bg-[#F76900] h-[35vh] w-[100%] flex justify-center items-center ">

<h1 className='text-white font-bold text-4xl'>Contact Us</h1>


    </div>


    <div className='bg-[#FAFAFA] w-[100%] h-[80px] flex items-center '>



<p className='flex items-center text-sm mx-10 '>Home  <RxCaretRight /> <span className='text-[#F76900]'>Contact Us</span></p>

    </div>




    <div className="form-container  w-[100%] flex ">

    <Find/>
    <Form/>

    </div>
 

<Footer/>
    </div>
  )
}

export default Contact