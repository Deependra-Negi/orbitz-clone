import './App.css';
import Navbar from './Components/Navbar/Navbar';

import { Routes } from './Routes/Routes';
//import RoomCard from './Components/RoomCard/RoomCard'
import TravelTips from './Components/HomepageStatic/TravelTips'
import Vacation from './Components/HomepageStatic/Vacation'
import Options from './Components/HomepageStatic/Options'
import Section1 from './Components/HomepageStatic/Section1'



function App() {
  return (
    <>
      {/* <Section1/>
      <Options/>
      <TravelTips />
      <Vacation/>
       */}
      <Navbar />
      <Routes />
    </>
  )
}

export default App;
