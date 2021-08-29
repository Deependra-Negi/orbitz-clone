import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import styles from "./PaymentPage.module.css";
import CheckIcon from '@material-ui/icons/Check';

export function BookingConfirmed() {
    const hotel = useSelector(state => state.Query.currentHotel);
    const query = useSelector(state => state.Query.queries);
    const temp = Number(hotel.price) * (13 / 100);
    return (
        <div className={styles.mainContainer}>
            <div className={styles.heading}>
                <h1>Booking Confirmed</h1>
                <div>
                    <p>
                        <CheckIcon variant="primary"/>
                        <p>Thank you for choosing Orbitz. Your booking is confirmed.</p>
                    </p>
                    <p>
                        <CheckIcon variant="primary"/>
                        <p>Please check your email for a detailed report.</p>
                    </p>
                    <p>
                        <CheckIcon variant="primary"/>
                        <p>You can <span>cancel/modify</span> your booking untill the check-in date.</p>
                    </p>
                </div>
            </div>
            <div className={styles.containerBCP}>
                {/* <Typography variant="h4">Booking Details</Typography> */}
                <h3>{hotel.name}</h3>
                <h4>{hotel.address},{hotel.city}</h4>
                <div className={styles.confirmDets}>
                    <div><h4>Guests</h4><Typography variant="h8">{query.travelers}</Typography></div>
                    <div><h4>Check-in</h4><Typography variant="h8">{query.from?.split("-").reverse().join("-")}</Typography></div>
                    <div><h4>Check-out</h4><Typography variant="h8">{query.to?.split("-").reverse().join("-")}</Typography></div>
                    <div><h4>Total Amount Paid</h4><Typography variant="h8">₹ {Number(hotel.price) + temp}</Typography></div>
                    <div><h4>Status</h4><Typography variant="h8">Confirmed</Typography></div>
                </div>
            </div>
        </div>
    )
}