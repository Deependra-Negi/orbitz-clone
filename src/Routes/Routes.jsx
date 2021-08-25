import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Components/SignUpAndSignIn/Home'
import SignInForm from '../Components/SignUpAndSignIn/SignIn/SignInForm'
import SignUpForm from '../Components/SignUpAndSignIn/SignUp/SignUpForm'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                   <Home/>
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

export default Routes
