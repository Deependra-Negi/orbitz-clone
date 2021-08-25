import React from 'react'
import Box from "@material-ui/core/Box";
import { v4 as uuid } from "uuid";
import FilterCard from "../FilterCard";
const YourBudget = () => {
    const budgets =['Less then $75','$75 to $125','$125 to $250','above $250']
    return (
      <Box>
        {budgets.map((item) => {
          return <FilterCard key={uuid()} label={item} />;
        })}
      </Box>
    );
}

export default YourBudget
