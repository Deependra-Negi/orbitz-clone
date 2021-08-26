import React from 'react'
import Box from "@material-ui/core/Box";
import { v4 as uuid } from "uuid";
import FilterCard from "../FilterCard";
const GuestRating = (props) => {
  const { filter, handleFilter } = props;
  const guestRate = ["Any", "Wonderful 4.5+", "Very Good 4+", "Good 3.5+"];
  return (
    <Box display="flex" flexDirection="column">
      {guestRate.map((item) => {
        return (
          <FilterCard
            key={uuid()}
            filter={filter}
            handleFilter={handleFilter}
            name={item}
            label={item}
          />
        );
      })}
    </Box>
  );
};

export default GuestRating
