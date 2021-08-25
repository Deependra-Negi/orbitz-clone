import React from 'react'
import GuestRating from './guestRating/GuestRating'
import Name from './nameSearch/Name'
import PaymentType from './paymentType/PaymentType'
import Popular from './popular/Popular'
import PropertyType from './propertyType/PropertyType'
import StarRating from './starRating/StarRating'
import YourBudget from './YourBudget/YourBudget'

export const HotelListFilters = () => {
    return (
        <div style={{ border: '1px solid black', width: '20vw' }}>
            <Name/>
            <h1>Filter by</h1>
            <h3>Popula filters</h3>
            <Popular />
            <h3> </h3>
            <StarRating />
            <h3>Your budget </h3>
            <YourBudget />
            <h3>Guest Rating </h3>
            <GuestRating />
            <h3>Payment Type </h3>
            <PaymentType />
            <h3>Property Type </h3>
            <PropertyType />
         
        </div>
    )
}
