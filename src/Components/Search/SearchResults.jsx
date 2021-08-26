import { useSelector } from "react-redux";
import LoadingComp from "./Loading";
import { SearchCompact } from "./SearchCompact";


import {HotelListFilters} from '../Filters/HotelListFilters'
import HotelsList from "../HotelsList/HotelsList";


export const SearchResults = () => {
    const isLoading = useSelector(state => state.status.isLoading);
    return (
      <div>
        {isLoading ? (
          <LoadingComp />
        ) : (
          <div style={{ backgroundColor: "#f5f5f5" }}>
            <SearchCompact />
           
            <div style={{ display: "flex" }}>
              <div>
                <HotelListFilters />
              </div>
              <div>
                <HotelsList />
              </div>
            </div>
          </div>
        )}
      </div>
    );
}