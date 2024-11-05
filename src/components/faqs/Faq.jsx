import React from 'react'
import data from "./data.js"
import { useState } from 'react';
import Particular from './Particular.jsx';
import { RxCaretRight } from "react-icons/rx";



const faq= [{

    question:"Q. What is important for AEPS to work? ",
    answer:"The customer looking to avail AEPS should mandatorily:"






},
{

    question:"  Q. What is Remote ON-US transaction?",
    answer:"Transactions done by customer at same bank terminal."






},
{

    question:" Q. What is OFF-US transaction? ",
    answer:" Transactions done by customer's bank to a different bank terminal such transactions are called inter-bank transactions. "






},
{

    question:"  Q. Who is acquirer Bank?  ",
    answer:"The Bank who has deployed the AEPS terminal on which the transaction is done for Cash Withdrawal, Fund Transfer or non-financial transactions such as Balance Enquiry and Mini Statement."






},
{

    question:" Q. Who is issuer Bank? ",
    answer:"  Issuing Bank in AEPS parlance means the Bank with which the customer's Aadhaar seeded account is held. The Issuing bank should be a member or submember of the NFS network and enabled on AEPS offered by NPCI. "






},
{

    question:"  Q. What is RRN No.? ",
    answer:"RRN number is a 12-digit number generated to record the transaction and to identify a transaction uniquely."






},
{

    question:"Q. What happens if a customer enters an incorrect Aadhaar Number or chooses a Bank where he doesn't have an account? ",
    answer:"If the customer enters incorrect Aadhaar number/ selects an incorrect bank where he/ she does not have an Aadhaar linked bank account, the transaction will decline with an appropriate response message. Further, as a customer may link his/ her Aadhaar with multiple banks, customer should select the correct bank, from where he wishes to perform transaction. In case, customer has more than one account with the selected bank then only the primary account will be debited and customer cannot make a selection of bank account at the time of transaction. "






},
{

    question:" Q. Does the customer specifically need to register with his Bank to be able to transact through AEPS? ",
    answer:" Ideally No, but linking Aadhaar Number with Bank account is a pre-requisite. However, registration process shall be as per the procedures laid down by the Issuer bank providing the service. Please check from the bank where you hold the Aadhaar linked bank account."






},
{

    question:" Q. Customer has multiple accounts linked to his/her Aadhaar number in his/her bank. How can he/she specify the account number from which the transaction needs to be done? ",
    answer:" If customer has multiple account within the same Bank linked to Aadhaar, AEPS services will work with only the primary account associated with the Aadhaar. Customer need to get in touch with his/her bank to specify/change the primary account linking."






},
{

    question:" Q. If a customer has multiple accounts linked to his Aadhaar number across multiple Banks, which account will be debited for withdrawal ?",
    answer:"  Since the accounts are held with different (multiple) Banks, Customer will have a choice to select the Bank name in the AEPS app from where the transaction need to be done."






},
{

    question:" Q. Does the customer need to carry Aadhaar Card for transacting? ",
    answer:" Carrying Aadhaar card is not mandatory but linkage of Aadhaar Number with Bank account is a prerequisite for transaction to be processed successfully."






},
{

    question:" Q. How will the customer know that the transaction has been successfully processed/completed? ",
    answer:" The status of the transaction will be available on the m-ATM primarily. The customer will also receive an SMS from bank as well as his/her Bank if registered for mobile alerts."






},
{

    question:"  Q. Is there any limit on AEPS Cash Withdrawal and Fund Transfer transactions? If So what are the limits.  ",
    answer:" An acquirer bank does not put any limit on any AEPS transactions for other bank customer. However, the Issuing Bank maintains these limits based on customer profile and risk management practices. NPCI has set a maximum transaction amount of Rs. 10,000 on a single AEPS financial transaction."






},
{

    question:"Q. Is there any age criteria to avail AEPS services? Can a minor above10 years of age, avail such services? Can a minor below age of 10 years, avail such services?",
    answer:" Allowed for minors, but it depends on the issuer bank."






},
{

    question:" Q. Customer account has got debited and he/she has received confirmation from his/her Bank but transaction in MATM/CBS could not be completed?",
    answer:" It is likely that transaction has failed. The refund will go back to the customer A/C but it might take 5 days. If the amount is not credited back within 5 days, same can be raised with bank they hold the account."






},
{

    question:" Q. Where do a customer register a complaint for failed transaction?",
    answer:"   The customer can raise a dispute/compliant with the bank they hold the account. Bank will further raise it with the concerned bank via NPCI's Dispute Management System. "






},
{

    question:"  Q. What is Aadhaar Enabled Payment System?",
    answer:" Aadhaar Enabled Payment System (AEPS) is a payment service that allows a bank customer to use Aadhaar as his/her identity to access his/her Aadhaar enabled bank account and perform basic banking transactions like balance enquiry, cash withdrawal, remittances through a Businesss Correspondent  "






},
{

    question:"   Q. What are the services available under AePS?",
    answer:" "






},





]





const Faq = () => {


  return (
    <div className='  w-[100%] flex items-center justify-center flex-col '>

<div className="banner overflow-hidden bg-[#F76900] h-[45vh] w-[100%] flex flex-col items-center justify-center gap-3 ">
        <h1 className='text-white text-4xl font-bold mb-5' >Frequently asked questions</h1>
        



    </div>


    
    <div className='bg-[#FAFAFA] w-[100%] h-[80px] flex items-center '>



<p className='flex items-center text-sm mx-10 '>Home  <RxCaretRight /> <span className='text-[#F76900]'>Faqs</span></p>

    </div>


<div className="questions-container w-[95%] flex items-center justify-center flex-col " >
{faq.map((data)=>{
    console.log(data)
return (

<Particular data={data}/>


)



})}
</div>


    </div>
  )
}

export default Faq