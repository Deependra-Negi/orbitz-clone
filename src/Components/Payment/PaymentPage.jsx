import styles from "./PaymentPage.module.css";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { Divider, Typography } from "@material-ui/core";
import { useEffect } from "react";
// import { Temp } from "./temp";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { green } from "@material-ui/core/colors";
import LockIcon from '@material-ui/icons/Lock';
import { useHistory } from "react-router-dom";
import StarRateIcon from '@material-ui/icons/StarRate';




toast.configure();

export function PaymentPage() {
    const history = useHistory();
    const hotel = useSelector(state => state.Query.currentHotel);
    const query = useSelector(state => state.Query.queries);
    const temp = Number(hotel.price) * (13 / 100);
    const starArr = new Array(Math.round(hotel.rating)).fill(1);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    async function handleToken(token) {
        const temp = token.id;
        const res = await axios.post("https://orbitz-heroku-data.herokuapp.com/payment", { token })
        // console.log(res.data.token.id);
        if (res.data.token.id === temp && temp !== "") {
            toast("Success!", { type: 'success' });
            history.push("/bookingconfirmed");
        } else {
            toast("Something went wrong", {type:'error'});
        }
    }
    return (
        <div className={styles.outer}>
            <Typography variant="h4" className={styles.secure_typ}>Secure booking — only takes 2 minutes!</Typography>
            <div className={styles.orbucksContainer}><LockIcon/><p className={styles.orbucksInfo}>Sign in to earn ₹299 in Orbucks</p></div>
            <div className={styles.containerPayment}>
                <div>
                    <div className={styles.subsPayment}>
                        {/* <h2>{hotel.name}, {hotel.city}</h2> */}
                        <div className={styles.hotelPic}><img src={hotel.images[1].url} alt="hotel" /><div><p className={styles.hnDiv}>{hotel.name}, {hotel.city}</p><div className={styles.ratingDiv}>{starArr.map(() => { return <StarRateIcon className={styles.star_icon_style} /> })}</div></div></div>
                        <div className={styles.detsDiv}>
                            <p><span className={`${styles.paySub} ${styles.pay_style}`}>Number of Guests:</span> {query.travelers}</p>
                        <div className={styles.times}>
                            <div className={styles.pay_check} ><h4 className={`${styles.paySub} ${styles.checkHeading_style}`} >Check in:</h4><p>{query.from?.split("-").reverse().join("-")}</p></div>
                            <div className={styles.pay_check} ><h4 className={`${styles.paySub} ${styles.checkHeading_style}`} >Check out:</h4><p>{query.to?.split("-").reverse().join("-")}</p></div>
                        </div>
                        </div>
                    </div>
                    <div className={styles.price}>
                        <Typography variant="h4" className={styles.price_style} >Price Details</Typography>
                        <Divider />
                        <div>
                        <div><div>Stay fee </div><div>₹{hotel.price}</div></div>
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
                    <div className={styles.flex_style} ><CheckCircleIcon className={styles.check_circle_icon} /><div className={styles.info_style}>We use secure transmission</div></div>
                    <div className={styles.flex_style} ><CheckCircleIcon className={styles.check_circle_icon} /><div className={styles.info_style}>We protect your personal information</div></div>
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
                    <div className={styles.pay_check} ><LockIcon/><p className={styles.p_secure_style}>We use secure transmission and encrypted storage to protect your personal information.</p></div>
                    <p className={styles.p_payment_style}>This payment will be processed in India. This does not apply when the travel provider (airline/hotel/rail, etc.) processes your payment.</p>
                </div>
            </div>
        </div>
    )
}