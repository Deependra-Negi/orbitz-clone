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
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <HotelListFilters />
        </div>
        <div>
          <Sort handleSort={handleSort} />
          {results
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
