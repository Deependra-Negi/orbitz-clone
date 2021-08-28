import React from 'react'
import Box from "@material-ui/core/Box";
import { v4 as uuid } from "uuid";
import FilterCard from "../FilterCard";
const YourBudget = (props) => {
  const { filter, handleFilter } = props  
  const budgets = [
    {
      label: "Less then Rs1000",
      name: "priceBelow1000",      
    },
    {
      label: "Rs1000 to Rs2000",
      name: "price1000to2000",     
    },
    {
      label: "Rs2000 to Rs Rs4000",
      name: "price2000to4000",     
    },
    {
      label: "above Rs4000",
      name: "priceAbove400",     
    },
  ];
    return (
      <Box display='flex'flexDirection='column' >
        {budgets.map((item) => {
       
          return <FilterCard handleFilter={handleFilter} name={item.name } label={item.label} />;
        })}
      </Box>
    );
}

export default YourBudget
