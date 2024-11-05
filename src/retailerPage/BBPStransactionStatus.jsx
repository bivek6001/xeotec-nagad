import React from 'react';
import logo from '../images/BC_Logo.png';

const BBPStransactionStatus = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col bg-gradient-to-b from-orange-50 to-orange-100'>
      <img src={logo} alt="Bharat Connect Logo" className='h-[90px] mb-6' />

      <form action="" method="post" className='w-[80%] md:w-[400px] border p-6 shadow-xl rounded-lg bg-orange-100'>
      <h1 className="text-lg font-bold mb-4 text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-center">
  Transaction Status Check
</h1>


        <div className="mb-4">
          <label htmlFor="transactionID" className='font-semibold text-sm text-[#3967B3]'>Enter Transaction ID:</label>
          <input 
            type="text" 
            id="transactionID" 
            className='border border-gray-300 ml-2 mt-1 p-2 rounded-md w-full outline-none focus:border-[#F26722] text-sm bg-gray-50' 
            placeholder="Transaction ID"
          />
        </div>

        <button 
  className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition-all p-2 font-semibold text-sm w-full text-white rounded-md"
>
  Submit
</button>

      </form>
    </div>
  );
};

export default BBPStransactionStatus;
