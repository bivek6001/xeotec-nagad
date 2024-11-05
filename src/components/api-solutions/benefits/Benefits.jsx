import React from 'react'



const benefitsData=[

  
        {
            heading:"Cost-Effective",
            paragraph:"Our services are designed to be affordable, enabling Businessses of all sizes to adopt AEPS solutions without breaking the bank.",
            image:"https://nagadwallet.in/images/best_commission_structure.png"
            
            
            },
            {
                heading:"Enhanced Security",
                paragraph:"With our robust security measures, including encryption and two-factor authentication, we prioritize the safety of every transaction.",
                image:"https://nagadwallet.in/images/security.png"
                
                
                },
                {
                    heading:"Increased Convenience",
                    paragraph:"AEPS eliminates the need for physical cards and provides a seamless payment experience for customers, enhancing convenience. ",
                    image:"https://nagadwallet.in/images/increase.png"
                    
                    
                    },
                    {
                        heading:"Reliable Support",
                        paragraph:" Our dedicated support team is available round the clock to assist you with any queries or technical issues you may encounter.",
                        image:"https://nagadwallet.in/images/cross_platform_support.png"
                        
                        
                        },


]






const Benefits = () => {
  return (
    <div className='w-[100%] bg-[#FDFDFD] '>
    <div className="inside-container w-[90%] mx-auto">
        <h1 className='text-3xl font-bold'>Why Choose Nagad Wallet India for Aadhaar Pay?</h1>

    <div className="box-container w-[100%]  flex flex-wrap">
{
benefitsData.map((element)=>{
  return (
    <div className="box w-[546px]  rounded-xl p-5  h-[236px] flex flex-col  justify-between  ">
      <div className="heading-container h-[20vh] bg-[#FAFAFA]">
        <img src={element.image} alt=""  className='w-[50px] h-[50px]' />
      <h1 className='font-bold text-xl '>{element.heading}</h1>
      </div>

      <div className=''>
        <p className='text-[#474747] text-sm' >{element.paragraph}</p>
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

export default Benefits