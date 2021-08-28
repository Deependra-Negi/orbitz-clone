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
      <div style={{ border: "1px solid black", width: "20vw" }}>
        <Name />
        <h1>Filter by</h1>
        <h3>Popular filters</h3>
        <Popular filter={filter} handleFilter={handleFilter} />
        <h3> </h3>
        <StarRating />
        <h3>Your budget </h3>
        <YourBudget filter={filter} handleFilter={handleFilter} />
        <h3>Guest Rating </h3>
        <GuestRating filter={filter} handleFilter={handleFilter} />
        <h3>Payment Type </h3>
        <PaymentType filter={filter} handleFilter={handleFilter} />
        <h3>Property Type </h3>
        <PropertyType filter={filter} handleFilter={handleFilter} />
      </div>
    );
}
