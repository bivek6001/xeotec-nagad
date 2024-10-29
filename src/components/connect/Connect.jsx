import React from 'react'

const Connect = () => {
  return (
    <div className='flex  items-center h-[70vh] w-[100%] gap-[10%]   flex-col '>
<h1 className='text-4xl font-bold'>Lets connect to create an Impact</h1>

    <div className="connect-box  w-[100%] p-3 flex items-center flex-col gap-2 ">

<div className="first-division">
<input type="text" placeholder='First Name ' className='border-[#DEE2E6] border rounded-3xl  p-2  h-[50px] w-[293px] placeholder-[#595C5F]' />
<input type="text" placeholder='Last Name' className='border-[#DEE2E6] placeholder-[#595C5F] border rounded-3xl p-2  h-[50px] w-[293px]' />

</div>
<div className="second-divison">
<input type="text" placeholder='Email'  className='border-[#DEE2E6] placeholder-[#595C5F] border rounded-3xl p-2  h-[50px] w-[293px]'/>

<input type="text"  placeholder='Phone' className='border-[#DEE2E6] placeholder-[#595C5F] border rounded-3xl p-2   h-[50px] w-[293px]'/>
</div>
<div className="third-divison">
<button className=' border-[#DEE2E6]  text-[#97999A]  h-[50px] w-[293px] border font-semibold  rounded-[100px]'>Aeps Software Portal</button>
<button className='border-[#DEE2E6]  text-[#97999A] border h-[50px] w-[293px] rounded-[100px] font-semibold'>Aeps API</button>
<button className='border-[#DEE2E6] border text-[#97999A]  h-[50px] w-[293px] rounded-[100px] font-semibold'>
    OTHER
</button>
  </div>    
  

<button className='bg-[#F76900] text-white h-[60px] w-[50%] rounded-[100px] font-bold'>SUBMIT</button>


    </div>







    </div>
  )
}

export default Connect