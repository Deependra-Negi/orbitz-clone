import React from 'react'
import { useSelector } from 'react-redux'
import HotelCard from '../HotelCard/HotelCard';

const HotelsList = () => {
    const results = useSelector((state) => state.result);
  
    return <div>
        {results.map((hotel) => {
        

            return <HotelCard key={ hotel.id} hotel={hotel} />
        })}
    </div>;
    
}

export default HotelsList
