import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HelpBoat from './Components/HelpBot/HelpBoat'
import { Routes } from './Routes/Routes';
import StripeContainer from './Components/PaymentSystem/StripeContainer';


function App() {
  return (
    <>
      <Navbar/>
 <Routes/>
    <HelpBoat/>
      
  {/* <StripeContainer/> */}
  </>
  );
}

export default App;
