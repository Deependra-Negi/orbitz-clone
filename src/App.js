import './App.css';
import Navbar from './Components/Navbar';
import { HotelListFilters } from './Components/Filters/HotelListFilters';
import Sort from './Components/Sort/Sort';
import { Routes } from './Routes/Routes';

function App() {
  return (
    <>

      <Navbar />
      <Routes />

      <Sort />
      <HotelListFilters />
    </>
  )
}

export default App;
