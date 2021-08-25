import React from 'react'
import Box from "@material-ui/core/Box";
import { v4 as uuid } from "uuid";
import FilterCard from "../FilterCard";
const GuestRating = () => {
    const guestRate=['Any','Wonderful 4.5+','Very Good 4+','Good 3.5+']
    return (
      <Box>
        {guestRate.map((item) => {
          return <FilterCard key={uuid()} label={item} />;
        })}
      </Box>
    );
}

export default GuestRating
