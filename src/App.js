import './App.css';
import { HotelListFilters } from './Components/Filters/HotelListFilters';
import Sort from './Components/Sort/Sort';

function App() {
  return (
    <div className="App">
      orbitz
      <Sort />
      <HotelListFilters/>
    </div>
  );
}

export default App;
