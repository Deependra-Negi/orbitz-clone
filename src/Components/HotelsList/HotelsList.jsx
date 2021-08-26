import React, { useState } from "react";
import { useSelector } from "react-redux";
import HotelCard from "../HotelCard/HotelCard";
import { HotelListFilters } from "../Filters/HotelListFilters";
import Sort from "../Sort/Sort";

const HotelsList = () => {
  const results = useSelector((state) => state.result);
  const [dealsorting, setDealSorting] = useState(false);
  const [guestRatesorting, setGuestRateSorting] = useState(false);
  const [pricePicksorting, setPricePickSorting] = useState(false);
  const [priceSorting, setPriceSorting] = useState(false);
  const [starSorting, setStarSorting] = useState(true);
  const initFilter = {
    priceBelow1000: false,
    price1000to2000: false,
    price2000to4000: false,
    priceAbove400: false,
  };
  const [filter, setFilter] = useState(initFilter)
  const handleSort = (value) => {
    if (value === "price") {
      setPriceSorting(true);
      setPricePickSorting(false);
      setStarSorting(false);
      setDealSorting(false);
      setGuestRateSorting(false);
    } else if (value === "star") {
      setStarSorting(true);
      setPriceSorting(false);
      setPricePickSorting(false);
      setDealSorting(false);
      setGuestRateSorting(false);
    } else if (value === "pricePick") {
      setPriceSorting(false);
      setPricePickSorting(true);
      setStarSorting(false);
      setDealSorting(false);
      setGuestRateSorting(false);
    } else if (value === "deal") {
      setDealSorting(true);
      setPriceSorting(false);
      setPricePickSorting(false);
      setStarSorting(false);
      setGuestRateSorting(false);
    } else if (value === "guestRating") {
      setPriceSorting(false);
      setPricePickSorting(false);
      setStarSorting(false);
      setDealSorting(false);
      setGuestRateSorting(true);
    } else if (value === "recommended") {
      setPriceSorting(false);
      setPricePickSorting(false);
      setStarSorting(false);
      setDealSorting(false);
      setGuestRateSorting(false);
    }
  };
  const handleFilter = (e) => {
    const {name,checked}=e.target
    setFilter({...filter,[name]:checked})
  }
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <HotelListFilters handleFilter={handleFilter } filter={filter}/>
        </div>
        <div>
          <Sort handleSort={handleSort} />
          {results.filter((a) => {
            if (filter.priceAbove400) {
              return a.price > 4000;
            }
             if (filter.price2000to4000) {
               return a.price > 2000 && a.price <= 4000;
            }
             if (filter.price1000to2000) {
               return a.price > 1000 && a.price <= 2000;
             }
            if (filter.priceBelow1000) {
              
              return (a.price<=1000)
            }
           
           
            
            
            else {
              return a;
            }
          })
            .sort((a, b) => {
              return priceSorting
                ? a.price - b.price
                : starSorting
                ? b.rating - a.rating
                : pricePicksorting
                ? b.price - a.price
                : guestRatesorting
                ? b.reviews - a.reviews
                : dealsorting
                ? b.delas - a.delas
                : b;
            })
            .map((hotel) => {
              return <HotelCard key={hotel.id} hotel={hotel} />;
            })}
        </div>
      </div>
    </>
  );
};

export default HotelsList;
