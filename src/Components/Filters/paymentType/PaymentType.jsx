import React from 'react'
import Box from "@material-ui/core/Box";
import { v4 as uuid } from "uuid";
import FilterCard from "../FilterCard";
const PaymentType = (props) => {
  const { filter, handleFilter } = props;
  const paymentTypes = ["Fully refundable", "Reserve now , Pay later"];
  return (
    <Box display="flex" flexDirection="column">
      {paymentTypes.map((item) => {
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

export default PaymentType
