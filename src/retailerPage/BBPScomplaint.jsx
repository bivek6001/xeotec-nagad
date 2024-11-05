import React, { useState } from 'react';
import logo from "../images/BC_Logo.png";

function BBPSComplaintForm() {
  const [formData, setFormData] = useState({
    email: '',
    mobileNumber: '',
    queryType: '',
    transactionId: '',
    transactionDate: '',
    transactionTime: '',
    complaintDescription: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add submission logic here
  };

  return (
    <div className="bg-orange-50 min-h-screen flex items-center justify-center">
      <div className="bg-orange-100 shadow-lg rounded-lg p-4 max-w-3xl w-[60vw]">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
            BBPS Complaint
          </h1>
          <img
            src={logo}
            alt="Bharat Connect Logo"
            className="h-[60%] w-[20%] object-contain"
          />
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Mobile Number</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="mt-1 w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Type of Query</label>
            <input
              type="text"
              name="queryType"
              value={formData.queryType}
              onChange={handleChange}
              className="mt-1 w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Transaction ID</label>
            <input
              type="text"
              name="transactionId"
              value={formData.transactionId}
              onChange={handleChange}
              className="mt-1 w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Transaction Date</label>
            <input
              type="date"
              name="transactionDate"
              value={formData.transactionDate}
              onChange={handleChange}
              className="mt-1 w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Transaction Time</label>
            <input
              type="time"
              name="transactionTime"
              value={formData.transactionTime}
              onChange={handleChange}
              className="mt-1 w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-600">Complaint Description</label>
            <textarea
              name="complaintDescription"
              rows="4"
              value={formData.complaintDescription}
              onChange={handleChange}
              className="mt-1 w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Write your complaint description..."
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 font-semibold rounded-lg shadow-md text-white bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BBPSComplaintForm;
