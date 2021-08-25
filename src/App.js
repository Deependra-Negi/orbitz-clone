import './App.css';
import Navbar from './Components/Navbar';
import { HotelListFilters } from './Components/Filters/HotelListFilters';
import Sort from './Components/Sort/Sort';

function App() {
  return (
    <>
      <Navbar/>
      <Sort />
      <HotelListFilters/>
    </>
  );
}

export default App;
