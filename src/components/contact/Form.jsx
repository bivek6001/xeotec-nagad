import React from 'react'

const Form = () => {
  return (
    <div className='text-white bg-[#F76900] w-[40%] px-3 rounded-3xl  flex justify-center flex-col overflow-hidden items-center'>

      {/* heading */}
      <h1 className='font-bold text-3xl mt-5'>Get In Touch</h1>

      {/* contact form */}
      <form className='w-[100%] flex justify-center items-center flex-col gap-3'>
        <input type="text" placeholder='First name' className='border-white border-b placeholder-white h-[50px] bg-transparent px-2 outline-none w-[300px] text-white' />
        <input type="text" placeholder='Last name' className='border-white border-b text-sm font-semibold placeholder-white h-[50px] bg-transparent px-2 outline-none w-[300px] text-white' />
        <input type="text" placeholder='Email' className='border-white border-b placeholder-white h-[50px] bg-transparent px-2 outline-none w-[300px] text-white' />
        <input type="text" placeholder='Phone' className='border-white border-b placeholder-white h-[50px] bg-transparent px-2 outline-none w-[300px] text-white' />
        
        {/* Adjusted textarea */}
        <textarea 
          placeholder='Your Message' 
          className='border-white border-b placeholder-white bg-transparent px-2 outline-none w-[300px] text-white' 
          rows={6} // Increase the number of rows for height
        ></textarea>
        
        <div>
          <button className='bg-white text-[#F76900] font-bold rounded-3xl w-[400px] hover:bg-black hover:text-white h-[50px] mt-4 cursor-pointer' type='submit'>SUBMIT</button>
        </div>
      </form>

      {/* banner below the contact form */}
      <div className="icon-container h-[70vh] w-[30vw] rounded-[100px] bg-white relative bottom-[-13%] p-3 left-[6%]">
        <img src="https://nagadwallet.in/images/contact.png" alt="" className='object-contain w-[90%] h-[60%]' />
      </div>
    </div>
  )
}

export default Form;
