import React from 'react'
import Box from "@material-ui/core/Box";
import { v4 as uuid } from "uuid";
import FilterCard from "../FilterCard";
const YourBudget = (props) => {
  const { handleFilter } = props  
  const budgets = [
    {
      label: "Less then ₹1000",
      name: "priceBelow1000",      
    },
    {
      label: "₹1000 to ₹2000",
      name: "price1000to2000",     
    },
    {
      label: "₹2000 to Rs ₹4000",
      name: "price2000to4000",     
    },
    {
      label: "Above ₹4000",                                 
      name: "priceAbove400",     
    },
  ];
    return (
      <Box display='flex'flexDirection='column' >
        {budgets.map((item) => {
       
          return <FilterCard id={uuid()} handleFilter={handleFilter} name={item.name } label={item.label} />;
        })}
      </Box>
    );
}

export default YourBudget
