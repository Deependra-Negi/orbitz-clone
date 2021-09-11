

import React from 'react';
import axios from "axios"
import {
    CardElement,
  
    
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import Spinner from './Spinner';

const PaymentSystem = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [success,setSuccess] = useState(false)
console.log(success)
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

         if (!error) {
            try {
                const { id } = paymentMethod
                console.log(id)
                const response = await axios.post("https://orbitz-heroku-data.herokuapp.com/payment", {
                    amount: 1000,
                    id
                })
                console.log(response)
                if (response.status === 201) {
                    console.log("Successful payment")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }

    };

    return (
        <>
         
        
        {!success ?
            <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay
                    </button>
                  
                </form>
                
                :
                <div>
            {success && <Spinner /> }
                   <h1>Congratulation</h1>
              </div>
             
            }
            </>
    );
};

export default PaymentSystem

