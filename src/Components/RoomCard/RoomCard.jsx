//here,
//6Room names-  Delux Room    superior Room    Room(Business Class)    Club Room    Executive Suite    Deluxe Suite
//increase price accordingly

import React, {useState} from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import RoundedCornerSharpIcon from '@material-ui/icons/RoundedCornerSharp';
import PeopleIcon from '@material-ui/icons/People';
import HotelIcon from '@material-ui/icons/Hotel';
import WifiIcon from '@material-ui/icons/Wifi';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import CheckIcon from '@material-ui/icons/Check';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import {Radio} from '@material-ui/core'
import { RadioGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    icon:{
        width: "1.2rem",
    },
    green: {
        color: "#0E8445",
        fontWeight: 600,
    },
    blue:{
        color: "#007E8F",
        fontWeight: 600,
    },
    btn:{
        backgroundColor: "#c83259",
        borderRadius: "2px",
        color: "#fff",
        fontSize: "1rem",
        lineHeight: "1.25rem",
        minHeight: "2.25rem",
        minWidth: "5.25rem",
        textTransform: 'none'
    },
}));

export default function RoomCard() {

    const [choice, setChoice] = useState("No")

    const classes = useStyles();
    console.log(choice)
    return (
        <CardCont>
            <ImgCont>
                <img src="https://images.trvl-media.com/hotels/1000000/470000/465100/465005/5b2c7bd3.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" alt="" />
            </ImgCont>
            <TextCont>
                <Name><h3>Deluxe Room</h3></Name>
                <Details>
                    <li><Span><Icon><RoundedCornerSharpIcon className={classes.icon} /></Icon>377 sq ft</Span></li>
                    <li><Span><Icon><PeopleIcon className={classes.icon} /></Icon>Sleeps 2</Span></li>
                    <li><Span><Icon><HotelIcon className={classes.icon} /></Icon>1 Double Bed</Span></li>
                    <li><Span><Icon><WifiIcon className={classes.icon} /></Icon>Free WiFi</Span></li>
                    <li><Span><Icon><LocalParkingIcon className={classes.icon} /></Icon>Free self parking</Span></li>
                    <li><Span><Icon><CheckIcon className={classes.icon} /></Icon>Reserve now, pay later</Span></li>
                    <Highlited>
                        <Span className={classes.green}>Fully Furnished<Icon><ErrorOutlineOutlinedIcon className={classes.icon} /></Icon></Span>
                        <Span2>Before Wed, Sep 8</Span2>
                        <Span className={classes.blue}>More details<Icon><ChevronRightOutlinedIcon className={classes.icon} /></Icon></Span>
                    </Highlited>
                </Details>
                <Hr />
                <Name><h4>Extras</h4></Name>
                <RadioGroup value = {choice} onChange={(e)=> setChoice(e.target.value)}>
                    <Rd><Choice><FormControlLabel className={classes.radio} value="No" control={<Radio/>}/><Span3>No extras</Span3></Choice><Extra>+0 ₹</Extra></Rd>
                    <Rd><Choice><FormControlLabel className={classes.radio} value="Yes" control={<Radio/>} /><Span3>Breakfast Buffet + Return airport transfer</Span3></Choice><Extra>+355 ₹</Extra></Rd>
                </RadioGroup>
                <TotalReserve>
                    <Right>
                        <Orbucks><Icon3><MonetizationOnIcon /></Icon3><Orbucks2>Earn 300 ₹ Orbucks</Orbucks2></Orbucks>
                        <Deals>30% off</Deals>
                        <Price>5000 ₹</Price>
                        <PerNight>per night</PerNight>
                        <Total>total 5500 ₹</Total>
                        <Taxes> includes taxes & fees</Taxes>
                        <Span className={classes.blue}>More details<Icon2><ExpandMoreIcon className={classes.icon} /></Icon2></Span>
                    </Right>
                    <Left>
                        <BtnCont><Button className={classes.btn} variant="contained" color="secondary">Reserve</Button></BtnCont>
                    </Left>
                </TotalReserve>
            </TextCont>
        </CardCont>
    )
}

const CardCont = styled.div`
    *{
        padding: 0%;
        margin: 0%;
    }
    display: flex;
    flex-direction: column;
    width: 400px;
`
const ImgCont = styled.div`
    height: 220px;
    img{
        width: 100%;
        height: 100%;
    }
`
const TextCont = styled.div`
    padding: 0.75rem;
`
const Name = styled.div`
    color: #1f1f1f;
    font-size: 1rem;
    font-weight: 700;
    padding-bottom: 0.5rem;
`
const Details = styled.ul`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.28571;
    color: #616161;
    list-style: none;
`
const Span = styled.span`
    margin-top: 0.55rem;
    display: flex;
`
const Span2 = styled.span`
    margin-top: "-2px";
    padding: "0%";
`
const Icon = styled.div`
    padding-left: 10px;
    margin-top: -3px;
`
const Icon2 = styled.div`
    padding-right: 10px;
    margin-top: 3px;
`
const Icon3 = styled.div`
    padding-right: 10px;
    margin-top: -3px;
`
const Highlited = styled.div`
`
const Hr = styled.div`
    margin-top: 0.85rem;
    margin-bottom: 0.85rem;
    border-bottom: 1px solid gray;
`
const Rd = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: 400;
    line-height: 1.28571;
    color: #616161;
`
const Span3 = styled.div`
    padding-top: "20px";
    margin-left: "20px";
`
const Choice = styled.div`
    display: flex;
`
const Extra = styled.div`
`
const TotalReserve = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
`
const Orbucks = styled.div`
    display: flex;
    color: #8c1397;
    margin-bottom: 1.5rem;
`
const Orbucks2 = styled.div`
    margin-top: -0.25rem;
`
const Right = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  line-height: 1.6;
`;
const Deals = styled.div`
  color: #ffffff;
  font-size: 0.8rem;
  width: 60%;
  height: 20px;
  font-weight: 400;
  margin-bottom: 0.5rem;
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

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;
const BtnCont = styled.div`
    margin-top: 1rem;
    margin-bottom: 0.8rem;
`;