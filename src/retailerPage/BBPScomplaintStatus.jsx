import React from 'react';
import logo from '../images/BC_Logo.png';

const BBPScomplaintStatus = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-gradient-to-b from-orange-50 to-orange-100 px-4">
      <img src={logo} alt="Bharat Connect Logo" className="h-[70px] md:h-[90px] mb-4 md:mb-6" />

      <form action="" method="post" className="w-full max-w-[400px] border p-4 md:p-6 shadow-lg rounded-lg bg-orange-100">
      <h1 className="text-md md:text-lg font-bold mb-4 text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-center">
  Complaint Status Check
</h1>


        <div className="mb-4">
          <label htmlFor="transactionID" className="font-semibold text-sm text-[#393C48]">Enter Transaction ID:</label>
          <input 
            type="text" 
            id="transactionID" 
            className="border border-gray-300 mt-1 p-2 rounded-md w-full outline-none focus:border-[#3967B3] text-sm bg-gray-50" 
            placeholder="Transaction ID"
          />
        </div>

        <button 
  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all p-2 font-semibold text-sm w-full text-white rounded-md"
>
  Submit
</button>

      </form>
    </div>
  );
};

export default BBPScomplaintStatus;
