import styles from "./PaymentPage.module.css";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { Button, MenuItem, TextField } from "@material-ui/core";
import { useEffect } from "react";
import { Temp } from "./temp";

export function PaymentPage() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className={styles.outer}>
            <h1>Secure Booking - Only takes 2 minutes</h1>
            <div className={styles.containerPayment}>
                <div className={styles.infoDiv}>
                    <CreditCardIcon/>
                    <div style={{display:"flex"}}><CheckCircleIcon/><div>We use secure transmission</div></div>
                    <div style={{display:"flex"}}><CheckCircleIcon/><div>We protect your personal information</div></div>
                </div>
                <input placeholder="Name on Card"/>
                <input placeholder="Debit / Credit Card Number" />
                <div className={styles.selectDiv}>
                <TextField className={styles.selBox} variant="outlined" label="Month" select>
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </TextField>
                <TextField className={styles.selBox} variant="outlined" label="Year" select>
                    {["2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028"].map((option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                    </TextField>
                </div>
                <div style={{display:"flex"}}>
                <input placeholder="security code" />
                    <input placeholder="Billing Zip Code" />
                </div>
            </div>
            <div className={styles.proceedDiv}>
                <h4>Imoportant Information about your booking</h4>
                <ul>
                    <li>Cancellations or changes made after 6:00pm (property local time) on Sep 9, 2021 or no-shows are subject to a property fee equal to 100% of the total amount paid for the reservation.</li>
                    <li>To make arrangements for check-in please contact the property at least 24 hours before arrival using the information on the booking confirmation. Guests must contact the property in advance for check-in instructions. Front desk staff will greet guests on arrival. For more details, please contact the property using the information on the booking confirmation.</li>
                    <li>Guests who book breakfast-inclusive rate plans will receive breakfast for guests age 12 and older.</li>
                </ul>
                <p>By clicking on the button below, I acknowledge that I have reviewed the Privacy Statement Opens in a new window. and Government Travel Advice Opens in a new window. and have reviewed and accept the Rules & Restrictions Opens in a new window. and Terms of Use Opens in a new window..</p>
                <Button color="secondary" variant="contained">Complete Booking</Button>
            </div>
        </div>
    )
}