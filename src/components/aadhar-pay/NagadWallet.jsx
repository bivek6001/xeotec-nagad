

import React from 'react'

const nagadWalletData= [{

heading:"Expertise and Experience",
para:"Nagad Wallet India has a wealth of expertise and experience in the digital payment industry. "
,image:"https://nagadwallet.in/images/customers.png"
},
{

    heading:"Advanced Technology",
    para:"Nagad Wallet India employs cutting-edge technology to provide a seamless Aadhaar Pay experience."
,image:"https://nagadwallet.in/images/install.png"

    },
    {

        heading:"Security and Compliance",
        para:"We prioritize the security of your transactions and personal information. Nagad Wallet India adheres to the strict security standards set by regulatory authorities, including the Unique Identification Authority of India (UIDAI) and the Reserve Bank of India (RBI). "
,image:"https://nagadwallet.in/images/secure_transactions.png"

        },
        {

            heading:"Customer Support",
            para:"Nagad Wallet India offers dedicated customer support to address any queries or issues faced by Businessses or customers regarding Aadhaar Pay. "
,image:"https://nagadwallet.in/images/cross_platform_support.png"

            },
            {

                heading:"User-Friendly Interface",
                para:" We understand the importance of simplicity and ease of use. Nagad Wallet India's interface for Aadhaar Pay is designed to be user-friendly.  "
,image:"https://nagadwallet.in/images/cross_platform_support.png"

                },]


const NagadWallet = () => {
  return (
    <div className='w-[100%] '>
        <div className="inside-container w-[90%] mx-auto">
            <h1 className='text-3xl font-bold'>Why Choose Nagad Wallet India for Aadhaar Pay?</h1>

        <div className="box-container w-[100%]  flex flex-wrap">
  {
    nagadWalletData.map((element)=>{
      return (
        <div className="box w-[546px]  rounded-xl p-5  h-[236px] flex flex-col  justify-between  ">
          <div className="heading-container h-[20vh] bg-[#FAFAFA]">
            <img src={element.image} alt=""  className='w-[50px] h-[50px]' />
          <h1 className='font-bold text-xl '>{element.heading}</h1>
          </div>

          <div className=''>
            <p className='text-[#474747] text-sm' >{element.para}</p>
            </div>
        </div>
      )
    })
  }





        </div>














        </div>



    </div>
  )
}

export default NagadWallet