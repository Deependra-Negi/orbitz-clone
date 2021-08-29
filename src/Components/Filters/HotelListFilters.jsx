import { Divider } from '@material-ui/core'
import React from 'react'
import GuestRating from './guestRating/GuestRating'
import Name from './nameSearch/Name'
import PaymentType from './paymentType/PaymentType'
import Popular from './popular/Popular'
import PropertyType from './propertyType/PropertyType'
import StarRating from './starRating/StarRating'
import YourBudget from './YourBudget/YourBudget'

export const HotelListFilters = (props) => {
    const {filter,handleFilter}=props
   
    
    return (
      <div style={{width: "20vw" }}>
        <Name />
        <Divider/>
        <h2>Filter by</h2>
        <h4>Popular filters</h4>
        <Popular filter={filter} handleFilter={handleFilter} />
        <h3> </h3>
        <StarRating />
        <h4>Your budget </h4>
        <YourBudget filter={filter} handleFilter={handleFilter} />
        <h4>Guest Rating </h4>
        <GuestRating filter={filter} handleFilter={handleFilter} />
        <h4>Payment Type </h4>
        <PaymentType filter={filter} handleFilter={handleFilter} />
        <h4>Property Type </h4>
        <PropertyType filter={filter} handleFilter={handleFilter} />
      </div>
    );
}
