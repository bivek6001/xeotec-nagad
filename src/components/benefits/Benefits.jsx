import React from 'react'



const benefitsData=[

  
        {
            heading:"Cost-Effective",
            paragraph:"Our services are designed to be affordable, enabling Businessses of all sizes to adopt AEPS solutions without breaking the bank.",
            image:""
            
            
            },
            {
                heading:"Enhanced Security",
                paragraph:"With our robust security measures, including encryption and two-factor authentication, we prioritize the safety of every transaction.",
                image:""
                
                
                },
                {
                    heading:"Increased Convenience",
                    paragraph:"AEPS eliminates the need for physical cards and provides a seamless payment experience for customers, enhancing convenience. ",
                    image:""
                    
                    
                    },
                    {
                        heading:"Reliable Support",
                        paragraph:" Our dedicated support team is available round the clock to assist you with any queries or technical issues you may encounter.",
                        image:""
                        
                        
                        },


]






const Benefits = () => {
  return (
    <div className='w-[100%] p-3 '>
        <h4 className='font-bold text-xl'>Benefits of Choosing Our AEPS API Services:</h4>
        <div className="boxes-parent flex w-[100%] flex-wrap mt-10">

{benefitsData.map((data)=>{
    return (
        <div className="box border w-[50%] h-[30vh]">

        <h1 className='text-xl font-bold'>{data.heading}</h1>
        <p className='text-[#474747] text-sm'>{data.paragraph}</p>

        </div>



    )
})}



 




        </div>




        <div className="get-started flex justify-center flex-col gap-6">
        <h1 className='font-bold text-3xl'>Get Started with Aeps API:</h1>

        <p className='text-[#474747]'>Ready to take advantage of our AEPS API services? </p>
        <p className='text-[#474747]'>AEPS API stands for Aadhaar Enabled Payment System Application Programming Interface. It allows Businessses and developers to incorporate AEPS features into their 
      applications or systems. AEPS permits customers to carry out financial transactions like cash withdrawals, balance inquiries, and fund transfers using their
      Aadhaar-linked bank accounts.</p>
        <p className='text-[#474747] '>As an AEPS API provider, we are a company or service that provides the necessary infrastructure, documentation, and technical support for integrating AEPS functionality into external applications or systems. Our goal is to enable Businessses to take advantage of the benefits offered by AEPS and enhance the banking services they provide to their customers. We offer the necessary resources and assistance to ensure a seamless integration process and smooth operation of AEPS within their applications or systems.</p>
      



        </div>





    </div>
  )
}

export default Benefits