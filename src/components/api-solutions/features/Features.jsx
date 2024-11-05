import React from 'react'


const data= [
{
heading:"Seamless Integration",
paragraph:"Our AEPS API can be easily integrated into your existing systems, allowing you to leverage the power of Aadhaar-based payments effortlessly.",
image:"https://nagadwallet.in/images/install.png"


},
{
    heading:"Aadhaar authentication",
    paragraph:"Our API offers secure Aadhaar authentication, ensuring the identity and validity of your customer's transactions",
    image:"https://nagadwallet.in/images/aadharpay.png"

    
    
    },
    {
        heading:"Multiple Transaction Types",
        paragraph:"We support a wide range of transaction types, including balance inquiry,cash withdraw, fund transfer,and more.",
    image:"https://nagadwallet.in/images/payment_transactions.png"
        
        
        
        },
        {
            heading:"Real-Time Notifications",
            paragraph:"Receive instant notifications for successful transactions, allowing you to provide prompt service to your customers.",
    image:"https://nagadwallet.in/images/notification.png"
            
            
            
            },
            {
                heading:"Developer-Friendly Documentation",
                paragraph:"We provide comprehensive documentation and sample code to facilitate smooth integration and faster development.",
    image:"https://nagadwallet.in/images/compliance_Integration.png"
                
                
                
                }






]




const Features = () => {
  return (
    <div className="w-[100%]  mt-10 flex justify-center items-center flex-wrap flex-col p-4 ">
    <h1 className="font-bold text-3xl mb-6">Why Choose Aadhaar pay?</h1>
    <div className="feature-container flex flex-wrap w-[100%] justify-center gap-[15px] items-center ">
      {data.map((data) => {
        return (
          <div className="feature-box border p-3 border-[#F76900] h-[34vh]  w-[40vw] rounded-xl shadow-lg flex flex-wrap justify-center items-center">
            <div className="first-box flex justify-between w-[80%] items-center ">
              <h1 className="font-bold text-xl">{data.heading}</h1>
              <img
                src={data.image}
                alt=""
                className="w-[100px] h-[50px] object-contain"
              />
            </div>
            <div className="second-box">
              <p className="font-medium  text-[#474747] text-[14px]">
                {data.paragraph}
              </p>
            </div>
          </div>
        );
      })}
    </div>{" "}
  </div>
  )
}

export default Features