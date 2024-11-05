
import { FaQ } from 'react-icons/fa6';
import './App.css';
import AadhaarPay from './components/aadhar-pay/AadhaarPay.jsx';
import ApiSolutions from './components/api-solutions/ApiSolutions.jsx';
import Contact from './components/contact/Contact.jsx';
import MicroAtm from './components/micro-atm/MicroAtm.jsx';
import Faq from "./components/faqs/Faq.jsx"
import BBPSreport from './retailerPage/BBPSreport.jsx';
import BBPScomplaint from './retailerPage/BBPScomplaint.jsx';
import BBPStransactionStatus from './retailerPage/BBPStransactionStatus.jsx';
import BBPScomplaintStatus from './retailerPage/BBPScomplaintStatus.jsx';

function App() {
  return (
 
<>
  {/* // <AadhaarPay/> */}
{/* //  <MicroAtm/> */}

{/* //  <Faq/> */}
{/* //  <ApiSolutions/> */}
 {/* <Contact/> */}
  <BBPSreport/>  
 <BBPScomplaint/> 

<BBPStransactionStatus/> 
<BBPScomplaintStatus/> 
   </>
  );
}

export default App;
