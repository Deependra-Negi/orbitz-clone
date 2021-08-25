import { useSelector } from "react-redux";
import LoadingComp from "./Loading";
import { SearchCompact } from "./SearchCompact";
import HotelCard from '../HotelCard/HotelCard'
import Sort from '../Sort/Sort'
import {HotelListFilters} from '../Filters/HotelListFilters'


export const SearchResults = () => {
    const isLoading = useSelector(state => state.status.isLoading);
    return (
        <div>
            {isLoading ? <LoadingComp /> :
                <div style={{backgroundColor:"#f5f5f5"}}>
                    <SearchCompact/>
                    <Sort />
                    <div style={{ display: "flex"}}>
                        <div><HotelListFilters /></div>
                        <div><HotelCard/></div>
                    </div>
                    
                </div>}
        </div>
    )
}