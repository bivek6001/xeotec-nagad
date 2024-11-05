import React from 'react'
import { RxCaretRight } from "react-icons/rx";
import AadhaarFeatures from './AadhaarFeatures';
import Benefits from './Benefits';
import CustomerPayment from './CustomerPayment';
import NagadWallet from './NagadWallet';




const AadhaarPay = () => {
  return (
    <div className='parent-container w-[100%]'>

<div className="banner overflow-hidden bg-[#F76900] h-[40vh] w-[100%] flex flex-col items-center justify-center gap-3 ">
        <h1 className='text-white text-5xl font-bold mb-5' >Aadhar Pay</h1>
        <p className='text-white text-sm font-semibold'>Welcome to Nagad Wallet India, your trusted provider of <br />
        aadhaar pay and AEPS API services.
        
        </p>



    </div>

    <div className='bg-[#FAFAFA] w-[100%] h-[80px] flex items-center '>



<p className='flex items-center text-sm mx-10 '>Home  <RxCaretRight /> <span className='text-[#F76900]'>Contact Us</span></p>

    </div>


 <div className="text-container-aadhaar-pay-page mx-auto w-[100%] flex justify-center items-center h-[15vh]">
 <p className='font-medium text-[14px] text-[#474747] w-[80%]'>At Nagad Wallet India, we are proud to offer a seamless and secure payment solution through Aadhaar Pay. With our innovative technology, Customers now have the convenience of making easy transactions by using only their Aadhaar number and fingerprint when interacting with merchants. With Aadhaar Pay, customers can bid farewell to the hassle of carrying cash or memorizing multiple PINs. Making payments becomes as simple as a touch, ensuring a seamless and effortless experience for customers.</p>
 </div>


<AadhaarFeatures/>
<Benefits/>
<CustomerPayment/>
<NagadWallet/>


    </div>
  )
}

export default AadhaarPay