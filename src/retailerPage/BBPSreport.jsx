import React from 'react';
import logo from '../images/BC_Logo.png';

const BBPSreport = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-orange-50  px-4">
      <div className="w-full max-w-[800px] shadow-xl p-6 rounded-lg bg-orange-100">
        <div className="flex justify-center md:justify-end mb-4">
          <img src={logo} alt="Bharat Connect Logo" className="w-[120px] md:w-[150px]" />
        </div>
        
        <h1 className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-xl md:text-2xl font-semibold text-center mb-6">
  BBPS Report
</h1>

        
        <form action="" method="post" className="w-full p-2 md:p-4">
          <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4 items-center">
            <div className="w-full md:w-[48%] flex flex-col">
              <label htmlFor="fromDate" className="font-semibold text-sm text-blue-500">From:</label>
              <input 
                type="date" 
                id="fromDate" 
                className="bg-white border border-gray-300 rounded-md w-full p-2 mt-1 outline-none text-sm focus:border-blue-500"
              />
            </div>

            <div className="w-full md:w-[48%] flex flex-col">
              <label htmlFor="toDate" className="font-semibold text-sm text-blue-500">To Date:</label>
              <input 
                type="date" 
                id="toDate" 
                className="bg-white border border-gray-300 rounded-md w-full p-2 mt-1 outline-none text-sm focus:border-blue-500"
              />
            </div>

            <div className="w-full flex flex-col">
              <label htmlFor="transactionID" className="font-semibold text-sm text-blue-500">Enter Transaction ID:</label>
              <input 
                type="text" 
                id="transactionID" 
                className="bg-white border border-gray-300 rounded-md w-full p-2 mt-1 outline-none text-sm focus:border-blue-500" 
                placeholder="Enter your transaction ID"
              />
            </div>
          </div>

          <button 
  className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition-all mt-6 p-2 font-semibold text-sm w-full md:w-[10%] text-white rounded-md"
>
  Search
</button>

        </form>
      </div>
    </div>
  );
};

export default BBPSreport;
