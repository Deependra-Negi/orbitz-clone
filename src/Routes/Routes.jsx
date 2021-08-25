import { Route, Switch } from "react-router-dom"
import { SearchBar } from "../Components/Search/SearchBar"
import { SearchResults } from "../Components/Search/SearchResults"
import Home from '../Components/SignUpAndSignIn/Home'
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
                <Route exact path="/signin">
                  <SignInForm/>
                </Route>
                <Route exact path="/signup">
                  <SignUpForm/>
                </Route>
            </Switch>
        </div>
    )
}