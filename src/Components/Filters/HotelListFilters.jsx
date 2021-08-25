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
        <div>
            <Name/>
            <YourBudget />
            <StarRating />
            <PropertyType />
            <Popular />
            <PaymentType />
            <GuestRating />
         
        </div>
    )
}
