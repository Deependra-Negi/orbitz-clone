import './App.css';
import Navbar from './Components/Navbar';
import { HotelListFilters } from './Components/Filters/HotelListFilters';
import Sort from './Components/Sort/Sort';
import { Routes } from './Routes/Routes';
import RewardCard from './Components/RewardCard/RewardCard';
import ForgotPassword from './Components/SignUpAndSignIn/Forgot/ForgotPassword';

function App() {
  return (
    <>
      <Routes />
      
      
    
       <Navbar />

      <Sort />
      <HotelListFilters /> 
    
    
    </>
  )
}

export default App;
