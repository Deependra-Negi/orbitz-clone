import React from "react";
import Box from "@material-ui/core/Box";
import { v4 as uuid } from "uuid";
import FilterCard from "../FilterCard";
const Popular = (props) => {
  const { filter, handleFilter } = props;
  const populars = [
    "Hotel",
    "Hotel resort",
    "Bed and Breakfast",
    "villa",
    "Palace",
  ];
  return (
    <Box display="flex" flexDirection="column">
      {populars.map((item) => {
        return (
          <FilterCard
            handleFilter={handleFilter}
            name={item}
            label={item}
          />
        );
      })}
    </Box>
  );
};

export default Popular;
