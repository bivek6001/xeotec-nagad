import React from "react";

const aadharPayFeaturesData = [
  {
    heading: "Easy and Convenient",
    para: "With Aadhaar Pay, making payments has never been easier. No need to carry cash or cards - all you need is your Aadhaar number and fingerprint. Simply authenticate your identity, and your payment is done in seconds. ",
    image:"https://nagadwallet.in/images/aadharpay.png"

  },
  {
    heading: "Secure Transactions",
    para: "We understand the importance of security when it comes to your financial transactions. Aadhaar Pay ensures the highest level of security by leveraging the robust biometric authentication system of Aadhaar. Your fingerprint acts as your unique identity, ensuring that only you can authorize transactions. ",
    image:"https://nagadwallet.in/images/secure_transactions.png"
  },
  {
    heading: "Widely Accepted",
    para: " Aadhaar Pay is widely accepted across various merchants and service providers in India. From small local shops to big retail chains, you can use Aadhaar Pay at a growing network of establishments, making it a convenient option for your everyday purchases. ",
    image:"https://nagadwallet.in/images/team_guide.png"

  },
  {
    heading: "Financial Inclusion",
    para: "At Nagad Wallet India, we believe in promoting financial inclusion. Aadhaar Pay is designed to provide easy access to digital payments for individuals who may not have a bank account or a smartphone. With Aadhaar Pay, anyone with an Aadhaar number can participate in the digital economy. ",
    image:"https://nagadwallet.in/images/payment_transactions.png"

  },
  {
    heading: "Instant Payments",
    para: " No more waiting for payments to settle. With Aadhaar Pay, your transactions are processed instantly, ensuring that you and the merchant receive immediate confirmation. This makes Aadhaar Pay ideal for time-sensitive transactions and emergency situations.  ",
    image:"https://nagadwallet.in/images/payment_transactions.png"

  },
];

const AadhaarFeatures = () => {
  return (
    <div className="w-[100%]  mt-10 flex justify-center items-center flex-wrap flex-col p-4 ">
      <h1 className="font-bold text-3xl mb-6">Why Choose Aadhaar pay?</h1>
      <div className="feature-container flex flex-wrap w-[100%] justify-center gap-[15px] items-center ">
        {aadharPayFeaturesData.map((data) => {
          return (
            <div className="feature-box border p-3 border-[#F76900] h-[40vh] w-[40vw] rounded-xl shadow-md flex flex-wrap justify-center items-center">
              <div className="first-box flex justify-between w-[80%] items-center ">
                <h1 className="font-bold text-2xl">{data.heading}</h1>
                <img
                  src={data.image}
                  alt=""
                  className="w-[100px] h-[50px] object-contain"
                />
              </div>
              <div className="second-box">
                <p className="font-medium  text-[#474747] text-[14px]">
                  {data.para}
                </p>
              </div>
            </div>
          );
        })}
      </div>{" "}
    </div>
  );
};

export default AadhaarFeatures;
