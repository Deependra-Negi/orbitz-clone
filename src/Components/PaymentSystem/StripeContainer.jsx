import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentSystem from "./PaymentSystem";

// import PaymentSystem from "./PaymentSystem"

// const PUBLIC_KEY = "pk_test_51JTGRUSJE6bJwq3guJoo32TocXLJzGotyaJFquVPpI2LSevUSxePCGbR4ap2ZryK3aWifn3Tdp2d9kv6xdc5qfkp00wcan1a0Q"

// const stripeTestPromise = loadStripe(PUBLIC_KEY)

// export default function StripeContainer() {
//     return (
//         <Elements stripe={stripeTestPromise}>
//            <PaymentSystem/>
//         </Elements>
//     )
// }

const stripePromise = loadStripe('pk_test_51JTGRUSJE6bJwq3guJoo32TocXLJzGotyaJFquVPpI2LSevUSxePCGbR4ap2ZryK3aWifn3Tdp2d9kv6xdc5qfkp00wcan1a0Q');

const StripeContainer = () => (
    <Elements stripe={stripePromise}>
        <PaymentSystem/>
    </Elements>
)

export default StripeContainer