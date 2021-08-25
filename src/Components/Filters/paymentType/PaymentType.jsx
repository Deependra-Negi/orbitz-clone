import React from 'react'
import Box from "@material-ui/core/Box";
import { v4 as uuid } from "uuid";
import FilterCard from "../FilterCard";
const PaymentType = () => {
    const paymentTypes =['Fully refundable','Reserve now , Pay later']
    return (
      <Box display="flex" flexDirection="column">
        {paymentTypes.map((item) => {
          return <FilterCard key={uuid()} label={item} />;
        })}
      </Box>
    );
}

export default PaymentType
