import React from 'react'
import Box from "@material-ui/core/Box";
import { v4 as uuid } from "uuid";
import FilterCard from "../FilterCard";
const PropertyType = () => {
    const propertyTypes = ['Hotel', 'Hotel resort',
    'Bed and Breakfast','villa','Palace']
    return (
      <Box>
        {propertyTypes.map((item) => {
          return <FilterCard key={uuid()} label={item} />;
        })}
      </Box>
    );
}

export default PropertyType
