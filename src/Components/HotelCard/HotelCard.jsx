import React from 'react'
import styled from 'styled-components'

import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getHotel } from '../../Redux/Queries/actions'


export default function HotelCard({hotel}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(getHotel(id));
        history.push(`/hotels/${id}`);
    }
    
    return (
    <>
        <CardCont onClick={() => handleClick(hotel.id)}>
            <ImgCont><img src={hotel.images[0].url} alt="hotel" /></ImgCont>
            <TextCont>
                <UpperSec>
                       <Name><h3 style={{fontSize:"21px", color:"rgb(54, 53, 53);"}}>{hotel.name}</h3></Name>
              <Location>{hotel.area}, {hotel.city}</Location>
                </UpperSec>
                <LowerSec>
                    <Left>
                        <Refund>{hotel.paymentType}</Refund>
                        <Ratings>{hotel.rating}/5 {(hotel.rating>3.6)?"Excelent":"Good"}</Ratings>
                        <Reviews>{hotel.reviews} reviews</Reviews>
                    </Left>
                    <Right>
                        <Deals>{hotel.delas}% off</Deals>
                        <Price>₹ {hotel.price}</Price>
                        <PerNight>per night</PerNight>
                        <Total>total ₹ {hotel.price+(hotel.price*0.13)}</Total>
                        <Taxes> includes taxes & fees</Taxes>
                    </Right>
                </LowerSec>
            </TextCont>
           </CardCont>
        </>
    )
}

const CardCont = styled.div`
margin: 0%;
padding: 0%;
box-sizing: border-box;
margin-top: 0.75rem;
margin-left: 29px;
display: flex;
color: #616161;
background-color: #ffffff;
cursor: pointer;
max-width: 60rem;
@media (min-width: 1100px) {
    min-width: 60rem;
  }
`

const ImgCont = styled.div`
  display: flex;
  flex-grow: 1;
  width: 180px;
  min-width: 19rem;
  @media (min-width: 1100px) {
    min-width: 23rem;
  }
  & > img {
    width: 100%;
  }
`;
const TextCont = styled.div`
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 2;
`;
const UpperSec = styled.div`
  flex-direction: column;
  display: flex;
`;
const Name = styled.div`
  font-size: 1.375rem;
  font-weight: 700;
  padding-bottom: 2px;
  h3 {
    margin: 0%;
  }
`;
const Location = styled.div`
  padding-bottom: 0.5rem;
  font-size: inherit;
`;

const LowerSec = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  line-height: 1.2;
`;
const Refund = styled.div`
  font-size: 0.875rem;
  color: #0e8445;
`;
const Ratings = styled.div`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
`;
const Reviews = styled.div`
  font-size: 0.875rem;
`;
const Right = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`;
const Deals = styled.div`
  color: #ffffff;
  font-size: 0.8rem;
  width: 60%;
  height: 20px;
  margin-left: 35px;
  font-weight: 400;
  margin-bottom: 0.7rem;
  text-align: center;
  border: none;
  border-radius: 1rem;
  background-color: #00bb54;
`;
const Price = styled.div`
  font-size: 1.375rem;
  font-weight: 700;
`;
const PerNight = styled.div`
  font-size: 0.625rem;
  font-weight: 400;
`;
const Total = styled.div`
  font-size: 0.625rem;
  font-weight: 700;
`;
const Taxes = styled.div`
  font-size: 0.625rem;
  font-weight: 400;
`;