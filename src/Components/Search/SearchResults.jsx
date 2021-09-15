import { useSelector } from "react-redux";
import LoadingComp from "./Loading";
import { SearchCompact } from "./SearchCompact";
import HotelsList from "../HotelsList/HotelsList";
import styles from "./Home.module.css";


export const SearchResults = () => {
  const isLoading = useSelector(state => state.Query.status.isLoading);
    return (
      <div>
        {isLoading ? (
          <LoadingComp />
        ) : (
          <div className={styles.BG_style}>
            <SearchCompact />
            <div >
                <HotelsList />
            </div>
          </div>
        )}
      </div>
    );
}