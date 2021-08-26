import React from 'react'
import Box from "@material-ui/core/Box";
import { v4 as uuid } from "uuid";
import FilterCard from "../FilterCard";
const PropertyType = (props) => {
  const { filter, handleFilter } = props;
  const propertyTypes = [
    "Hotel",
    "Hotel resort",
    "Bed and Breakfast",
    "villa",
    "Palace",
  ];
  return (
    <Box display="flex" flexDirection="column">
      {propertyTypes.map((item) => {
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

export default PropertyType
