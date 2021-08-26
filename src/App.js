import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { HotelListFilters } from './Components/Filters/HotelListFilters';
import Sort from './Components/Sort/Sort';
import { Routes } from './Routes/Routes';
import HotelCard from './Components/HotelCard/HotelCard'

function App() {
  return (
    <>

      <Navbar />
      <Routes />
    </>
  )
}

export default App;
