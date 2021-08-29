import { Route, Switch } from "react-router-dom"
import { HotelPage } from "../Components/HotelPage/HotelPage"
import { BookingConfirmed } from "../Components/Payment/BookingConfirmedPage"
import { PaymentPage } from "../Components/Payment/PaymentPage"
import { SearchBar } from "../Components/Search/SearchBar"
import { SearchResults } from "../Components/Search/SearchResults"
import ForgotPassword from "../Components/SignUpAndSignIn/Forgot/ForgotPassword"
import SignInForm from '../Components/SignUpAndSignIn/SignIn/SignInForm'
import SignUpForm from '../Components/SignUpAndSignIn/SignUp/SignUpForm'

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <SearchBar/>
                </Route>
                <Route exact path="/results">
                    <SearchResults/>
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
                    <PaymentPage/>
                </Route>
                <Route exact path="/BookingConfirmed">
                    <BookingConfirmed/>
                </Route>
            </Switch>
        </div>
    )
}