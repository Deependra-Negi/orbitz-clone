import { useSelector } from "react-redux";
import LoadingComp from "./Loading";
import { SearchCompact } from "./SearchCompact";

export const SearchResults = () => {
    const isLoading = useSelector(state => state.status.isLoading);
    return (
        <div>
            {isLoading ? <LoadingComp /> :
                <div>
                    <SearchCompact/>
                    <h1>*Search Results*</h1>
                </div>}
        </div>
    )
}