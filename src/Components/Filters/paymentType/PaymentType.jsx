import React from 'react'
import Box from "@material-ui/core/Box";
import { v4 as uuid } from "uuid";
import FilterCard from "../FilterCard";
const PaymentType = (props) => {
  const { handleFilter } = props;
  const paymentTypes = [
  {
    label: "Fully Refundable",
    name: "FullyRefundable",     
  },{
    label: "Reserve now, Pay later",
    name: "PayLater",     
  }];
  return (
    <Box display="flex" flexDirection="column">
      {paymentTypes.map((item) => {
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

export default PaymentType
