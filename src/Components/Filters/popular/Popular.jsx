import React from "react";
import Box from "@material-ui/core/Box";
import { v4 as uuid } from "uuid";
import FilterCard from "../FilterCard";
const Popular = (props) => {
  const { handleFilter } = props;
  const populars = [
    {
      label: "Hotel",
      name: "Hotel" 
    },
    {
      label: "Hotel Resort",
      name: "HotelResort"      
    },
    {
      label: "Bed and Breakfast",
      name: "Bed"    
    },
    {
      label: "Villa",
      name: "Villa"
    },
    {
      label:  "Palace",
      name:  "Palace"      
    }
  ];
  return (
    <Box display="flex" flexDirection="column">
      {populars.map((item) => {
        return (
          <FilterCard
            id={uuid()}
            handleFilter={handleFilter}
            name={item.name}
            label={item.label}
          />
        );
      })}
    </Box>
  );
};

export default Popular;
