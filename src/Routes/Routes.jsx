import Map  from "../Components/Map/Map"
import { Route, Switch } from "react-router-dom"
import { HotelPage } from "../Components/HotelPage/HotelPage"
import { BookingConfirmed } from "../Components/Payment/BookingConfirmedPage"
import { PaymentPage } from "../Components/Payment/PaymentPage"
import { SearchBar } from "../Components/Search/SearchBar"
import { SearchResults } from "../Components/Search/SearchResults"
import ForgotPassword from "../Components/SignUpAndSignIn/Forgot/ForgotPassword"
import SignInForm from '../Components/SignUpAndSignIn/SignIn/SignInForm'
import SignUpForm from '../Components/SignUpAndSignIn/SignUp/SignUpForm'
import styles from "./bg.module.css"

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <SearchBar/>
                </Route>
                <Route exact path="/results">
                    <SearchResults  />
                </Route>
                <Route exact path="/forgot">
                <ForgotPassword/>
                </Route>
                <Route exact path="/signin">
                  <SignInForm/>
                </Route>
                <Route exact path="/signup">
                  <SignUpForm/>
                </Route>
                <Route exact path="/hotels/:id">
                    <HotelPage/>
                </Route>
                <Route exact path="/payment">
                    <div className={styles.paymentBG}>
                    <PaymentPage/>
                    </div>
                </Route>
                <Route exact path="/bookingconfirmed">
                    <div className={styles.confirmedBG}>
                    <BookingConfirmed/>
                    </div>
                </Route>
                <Route exact path="/map">
                     <Map/>
                </Route>
            </Switch>
        </div>
    )
}