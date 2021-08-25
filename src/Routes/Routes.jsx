import { Route, Switch } from "react-router-dom"
import Navbar from "../Components/Navbar"
import { SearchBar } from "../Components/Search/SearchBar"
import { SearchResults } from "../Components/Search/SearchResults"

export function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <SearchBar/>
                </Route>
                <Route exact path="/results">
                    <SearchResults/>
                </Route>
            </Switch>
        </div>
    )
}