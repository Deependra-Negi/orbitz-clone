import React from 'react'
import styled from 'styled-components'
import CreateIcon from '@material-ui/icons/Create';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';

export default function Options() {
    return (
        <MainCont>
            <Cont>
                <Heading>
                    <h3>Here to help keep you on the move</h3>
                </Heading>
                <ImgCont>
                    
                    <CardCont>
                        <Card>
                            <Left>
                                <Title><h2>Change or cancle a trip</h2></Title>
                                <Para><p>Make updates to your itinerary or cancle a booking</p></Para>
                            </Left>
                            <Right>
                                <CreateIcon/>
                            </Right>
                        </Card>
                        <Card>
                            <Left>
                                <Title><h2>Use a credit or coupon</h2></Title>
                                <Para><p>Apply a coupon code or credit to a new trip</p></Para>
                            </Left>
                            <Right>
                                <MonetizationOnIcon/>
                            </Right>
                        </Card>
                        <Card>
                            <Left>
                                <Title><h2>Track ypur refund</h2></Title>
                                <Para><p>Check the status of a refund currently in progress</p></Para>
                            </Left>
                            <Right>
                                <QuestionAnswerOutlinedIcon/>
                            </Right>
                        </Card> 
                    </CardCont>
              
                </ImgCont>
            </Cont>
        </MainCont>
    )
}
const MainCont = styled.div`
    padding-bottom: 0.75rem;
    padding-top: 0.75rem;
`
const Cont = styled.div`
    padding: 0.75rem 0.75rem 1.5rem 0.75rem;
`
const Heading = styled.div`
    color: #1f1f1f;
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 2rem;
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    h3{
        margin:0;
        padding-bottom: 0.5rem;
    }
`
const ImgCont = styled.div`
width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    
    img{
        width: 100%;
        filter: brightness(60%);
    }
`
const CardCont = styled.div`
width: 100%;
padding: 0.4rem;
display: flex;
justify-content: space-between;
`
const Card = styled.div`
border: 1px solid #c4c4c4;
display: flex;
justify-content: space-between;
background-color: #ffffff;
width: 33.33%;
padding-left: 0.3rem;
margin: 0.375rem;`

const Left = styled.div`
`
const Right = styled.div`
padding-right: 0.75rem;
padding-top: 0.75rem;
`
const Title = styled.div`
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.25rem;
    padding: 1rem 0.75rem 0rem;
    h2{
        color: #000000;
        margin : 0;
    }
`
const Para = styled.div`
padding-left: 0.75rem;
margin-top: -0.3rem;
p{
    color: #616161;
    font-size: 0.875rem;
    font-weight: normal;
    line-height: 1.3em;
    padding-top: 0.2rem;
    padding-left: 0.2rem;
}

`
