import React, { useState } from "react";
import { useSelector } from "react-redux";
import HotelCard from "../HotelCard/HotelCard";
import { HotelListFilters } from "../Filters/HotelListFilters";
import Sort from "../Sort/Sort";
import styled from "styled-components";
import MapStatic from "../Map/MapStatic";

const HotelsList = () => {
  const results = useSelector((state) => state.Query.result);

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
    Hotel: false,
    HotelResort: false,
    Bed: false,
    villa: false,
    Palace: false,
    Villa:false,
    Any: false,
    Wonderful45: false,
    VeryGood4: false,
    Good35: false,
    FullyRefundable: false,
    PayLater: false, 
   
  };
  const [filter, setFilter] = useState(initFilter);
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
    const { name, checked } = e.target;
    setFilter({ ...filter, [name]: checked });
  };
  return (
    <Cont>
      <FilterCont>
        <MapStatic/>
        <HotelListFilters handleFilter={handleFilter} filter={filter} />
      </FilterCont>
      <div>
        <Sort handleSort={handleSort} />
        {results
          .filter((a) => {
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
              return a.price <= 1000;
            } else {
              return a;
            }
          })
          .filter((a) => {
            return filter.Any ? a.rating > 0 : a;
          })
          .filter((a) => {
            return filter.Good35 ? a.rating > 3.5 : a;
          })
          .filter((a) => {
            return filter.VeryGood4 ? a.rating > 4 : a;
          })
          .filter((a) => {
            return filter.Wonderful45 ? a.rating > 4.5 : a;
          })
          .filter((a) => {
            return filter.PayLater
              ? a.paymentType === "Reserve now Pay, Later"
              : a;
          })
          .filter((a) => {
            return filter.FullyRefundable
              ? a.paymentType ===  "Fully Refundable"
              : a;
          })
          .filter((a) => {
            console.log('a:', a)
            return filter.Hotel
            
              ? a.propertyType ===  "Hotel"
              : a;
          })
          .filter((a) => {
            return filter.HotelResort
              ? a.propertyType ===  "Hotel Resort"
              : a;
          })
          .filter((a) => {
            return filter.Bed
              ? a.propertyType === "Bed"
              : a;
          })
          .filter((a) => {
            return filter.Villa
              ? a.propertyType ===  "Villa"
              : a;
          })
          .filter((a) => {
            return filter.Palace
              ? a.propertyType ===  "Palace"
              : a;
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
    </Cont>
  );
};

export default HotelsList;

//-----------------------------styled components----------------------------------------

const Cont = styled.div`
  margin-top: 20px;
  position: relative;
  max-width: 1080px;
  top: 2rem;
  display: flex;
  max-width: 95%;
  margin: auto;
  justify-content: space-evenly;
  background-color: #f5f5f5;
`;
const FilterCont = styled.div``;
