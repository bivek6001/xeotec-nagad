import React from 'react'




const paymentData= [{

heading:"Provide Aadhaar Number",
para:"The customer needs to share their Aadhaar number with the merchant or payment service provider.",
image:"https://nagadwallet.in/images/aadharpay.png"




},
{

    heading:"Choose the Bank Account",
    para:"The customer selects the bank account from which they want to make the payment. This should be the account linked to their Aadhaar number.",
image:"https://nagadwallet.in/images/best_commission_structure.png"

    
    
    
    
    },
    {

        heading:"Biometric Authentication",
        para:"The customer's fingerprint is used for biometric authentication. The fingerprint scanner captures the unique biometric data to verify the customer's identity. ",
image:"https://nagadwallet.in/images/biometric_authentication.png"

        
        
        
        
        },
        {

            heading:"Transaction Confirmation",
            para:" Once the biometric authentication is successful, the customer confirms the payment amount and approves the transaction. ",
image:"https://nagadwallet.in/images/secure_transactions.png"

            
            
            
            
            },
            {

                heading:"Payment Completion",
                para:" The payment is processed, and the specified amount is debited from the customer's linked bank account and transferred to the merchant's account. ",
image:"https://nagadwallet.in/images/money_settlement.png"

                
                
                
                
                }

]













const CustomerPayment = () => {
  return (
    <div className='w-[100%] '>
        <div className="inside-container w-[90%] mx-auto">
            <h1 className='text-3xl font-bold'>How customer make payment through Aadhaar Pay</h1>

        <div className="box-container w-[100%]  flex flex-wrap">
  {
    paymentData.map((element)=>{
      return (
        <div className="box w-[50%]  rounded-xl p-5  h-[40vh] flex flex-col  justify-between  ">
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

export default CustomerPayment