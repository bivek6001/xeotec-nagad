import React from 'react'


const data= [
{
heading:"Seamless Integration",
paragraph:"Our AEPS API can be easily integrated into your existing systems, allowing you to leverage the power of Aadhaar-based payments effortlessly.",
image:""


},
{
    heading:"Aadhaar authentication",
    paragraph:"Our API offers secure Aadhaar authentication, ensuring the identity and validity of your customer's transactions",
    image:""

    
    
    },
    {
        heading:"Multiple Transaction Types",
        paragraph:"We support a wide range of transaction types, including balance inquiry,cash withdraw, fund transfer,and more.",
    image:""
        
        
        
        },
        {
            heading:"Real-Time Notifications",
            paragraph:"Receive instant notifications for successful transactions, allowing you to provide prompt service to your customers.",
    image:""
            
            
            
            },
            {
                heading:"Developer-Friendly Documentation",
                paragraph:"We provide comprehensive documentation and sample code to facilitate smooth integration and faster development.",
    image:""
                
                
                
                }






]




const Features = () => {
  return (
    <div className='w-[100%] bg-[#FCFCFC] overflow-hidden '>
        <h1 className='text-3xl font-medium mx-[10%] mb-6'>Key features</h1>



        <div className="box-container w-[100%] flex flex-wrap  gap-[6vh] justify-center">




    {data.map((element)=>{
return (

    <div className="box border w-[42%]  border-[#F76900] h-[25vh] rounded-xl p-5">
    <h1 className='font-bold text-xl'>{element.heading}</h1>
    <p className='text-[#474747] text-sm' >{element.paragraph}</p>
    
    
        </div>

)


    })}
   


            </div> 
    </div>
  )
}

export default Features