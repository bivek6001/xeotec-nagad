import React from "react";
import { TbSquareRoundedCheck } from "react-icons/tb";

const benefitsData = [
  {
    para: "No need for a smartphone to make payments.",
  },

  {
    para: "Convenient and easiest way of making cashless payments.",
  },
  {
    para: "Ability to pay from any Aadhaar-enabled bank account.",
  },
  {
    para: "Enhanced security as payments are authenticated through biometrics. ",
  },
  {
    para: "Eliminates the need to carry cash. ",
  },
  {
    para: "No requirement to remember PINs and passwords.",
  },
];

const Benefits = () => {
  return (
    <div className="benefit-parent-container  w-[100%] flex  justify-center items-center ">
      <div className="inside-container flex flex-col   gap-2  p-4 w-[95%]">
        <h1 className="font-bold text-3xl">Benefits to Customers :</h1>
        <ul className="flex flex-wrap w-[100%]">
      {benefitsData.map((data)=>{
        return (
            <li className="h-[70px] w-[40%]  flex items-center  ">
            <p className="flex items-center text-base text-[#474747]">
              {" "}
              <TbSquareRoundedCheck className="text-[#F76900]  m-2" size={30} />
           {data.para}
            </p>
          </li>
        )
      })}
       
         
        </ul>
      </div>
    </div>
  );
};

export default Benefits;
