import styles from "./PaymentPage.module.css";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { Button, Divider, MenuItem, TextField, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { Temp } from "./temp";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { green } from "@material-ui/core/colors";
import LockIcon from '@material-ui/icons/Lock';
import { Redirect, useHistory } from "react-router-dom";




toast.configure();

export function PaymentPage() {
    const history = useHistory();
    const hotel = useSelector(state => state.Query.currentHotel);
    const query = useSelector(state => state.Query.queries);
    const temp = Number(hotel.price) * (13 / 100);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    async function handleToken(token) {
        const temp = token.id;
        const res = await axios.post("http://localhost:3001/payment", { token })
        console.log(res.data.token.id);
        if (res.data.token.id === temp && temp != "") {
            toast("Success!", { type: 'success' });
            history.push("/BookingConfirmed");
        } else {
            toast("Something went wrong", {type:'error'});
        }
    }
    return (
        <div className={styles.outer}>
            <Typography variant="h4" style={{margin:"15px 29px"}}>Payment Method</Typography>
            <div className={styles.containerPayment}>
                <div>
                    <div className={styles.subsPayment}>
                        <h2>{hotel.name}, {hotel.city}</h2>
                        <div className={styles.hotelPic}><img src={hotel.images[1].url} alt="hotel" /><p className={styles.hnDiv}>{hotel.name}</p></div>
                        <div className={styles.detsDiv}>
                            <p><span className={styles.paySub} style={{marginRight:"3px"}}>Number of Guests:</span> {query.travelers}</p>
                        <div className={styles.times}>
                            <div style={{display:"flex", alignItems:"center"}}><h4 className={styles.paySub}>Check in:</h4><p>{query.from?.split("-").reverse().join("-")}</p></div>
                            <div style={{display:"flex", alignItems:"center"}}><h4 className={styles.paySub}>Check out:</h4><p>{query.to?.split("-").reverse().join("-")}</p></div>
                        </div>
                        </div>
                    </div>
                    <div className={styles.price}>
                        <h2>Price Details</h2>
                        <Divider />
                        <div>
                        <div><div>Stay fees </div><div>₹{hotel.price}</div></div>
                            <div><div>Taxes and other fees</div> <div>₹{temp}</div></div>
                            <Divider/>
                            <div><div className={styles.total}>Total</div> <div className={styles.total}>₹{Number(hotel.price) + temp}</div></div>
                        </div>
                    </div>
                </div>
                {/* <input placeholder="Name on Card"/>
                <input placeholder="Debit / Credit Card Number" /div
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
                </div> */}
            </div>
            <div className={styles.proceedDiv}>
                <div className={styles.infoDiv}>
                    <CreditCardIcon/>
                    <div style={{display:"flex"}}><CheckCircleIcon style={{ color: green[500], marginLeft:"15px", marginRight:"1px" }}/><div style={{color:"darkgreen", marginRight:"25px"}}>We use secure transmission</div></div>
                    <div style={{display:"flex"}}><CheckCircleIcon style={{ color: green[500], marginLeft:"15px", marginRight:"1px" }}/><div style={{color:"darkgreen", marginRight:"25px"}}>We protect your personal information</div></div>
                </div>
                <Divider/>
                <h4>Imoportant Information about your booking</h4>
                <ul>
                    <li>Cancellations or changes made after 6:00pm (property local time) on Sep 8, 2021 or no-shows are subject to a property fee equal to 100% of the total amount paid for the reservation.</li>
                    <li>To make arrangements for check-in please contact the property at least 24 hours before arrival using the information on the booking confirmation. Guests must contact the property in advance for check-in instructions. Front desk staff will greet guests on arrival. For more details, please contact the property using the information on the booking confirmation.</li>
                    <li>Guests who book breakfast-inclusive rate plans will receive breakfast for guests age 12 and older.</li>
                </ul>
                <p>By clicking on the button below, I acknowledge that I have reviewed the Privacy Statement Opens in a new window. and Government Travel Advice Opens in a new window. and have reviewed and accept the Rules & Restrictions Opens in a new window. and Terms of Use Opens in a new window..</p>
                {/* <Button color="secondary" variant="contained">Complete Booking</Button> */}
                <div className={styles.payCard}>
                <StripeCheckout
                    stripeKey={'pk_test_51JTGRUSJE6bJwq3guJoo32TocXLJzGotyaJFquVPpI2LSevUSxePCGbR4ap2ZryK3aWifn3Tdp2d9kv6xdc5qfkp00wcan1a0Q'}
                    token={handleToken}
                    amount={(Number(hotel.price) + temp) * 100}
                        name={hotel.name}
                        currency="INR"
                    billingAddress
                    shippingAddress
                >
                    </StripeCheckout>
                </div>
                <div className={styles.extraInfo}>
                    <div style={{display:"flex", alignItems:"center"}}><LockIcon/><p style={{marginLeft:"8px"}}>We use secure transmission and encrypted storage to protect your personal information.</p></div>
                    <p style={{marginLeft:"35px"}}>This payment will be processed in India. This does not apply when the travel provider (airline/hotel/rail, etc.) processes your payment.</p>
                </div>
            </div>
        </div>
    )
}