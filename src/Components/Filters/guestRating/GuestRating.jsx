import React from "react";
import Box from "@material-ui/core/Box";
import { v4 as uuid } from "uuid";
import FilterCard from "../FilterCard";
const GuestRating = (props) => {
  const { filter, handleFilter } = props;
  const guestRate = [
    { label: "Any", name: "Any" },
    { label: "Wonderful 4.5+", name: "Wonderful45" },
    { label: "Very Good 4+", name: "VeryGood4" },
    { label: "Good 3.5+", name: "Good35" },
  ];

  return (
    <Box display="flex" flexDirection="column">
      {guestRate.map((item) => {
        return (
          <FilterCard
            handleFilter={handleFilter}
            name={item.name}
            label={item.label}
          />
        );
      })}
    </Box>
  );
};

export default GuestRating;
