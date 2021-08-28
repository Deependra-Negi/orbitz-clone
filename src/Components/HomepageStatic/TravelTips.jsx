import React from 'react'
import styled from 'styled-components'

const img =
    [
        {
            url: "https://forever.travel-assets.com/flex/flexmanager/images/2020/12/02/ORB_Blog_NationalParks_562x240.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh",
            title: "National Parks experiences you must try",
            p: "Surfing, kayaking, diving kelp forests—yes, you can."
        },
        {
            url: "https://forever.travel-assets.com/flex/flexmanager/images/2020/11/13/ORB_Storefront_BlogMarquee__LGBTQIA_hangouts__562x240.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh",
            title: "Best LGBTQIA hangouts in every state",
            p: "Did your favourite make the list?"
        },
        {
            url: "https://forever.travel-assets.com/flex/flexmanager/images/2020/11/13/ORB_Storefront_BlogMarquee_Perfect_Roadtrip_562x240.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh",
            title: "The perfect road trip",
            p: "Find an adventure for every season"
        }
    ]
export default function Vacation() {
    return (
        <MainCont>
            <Cont>
                <Heading>
                    <h3>Travel tips from the pros</h3>
                </Heading>
                <ImgCont>
                    {img.map((i) => (
                    <CardCont>
                            <ImgCardCont>
                                <img src={i.url} alt="" />
                                <Title><h2>{i.title}</h2></Title>
                            </ImgCardCont>
                            <TextCont>
                                <p>{i.p}</p>
                            </TextCont>
                    </CardCont>
                ))}
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
    padding: 0.75rem 0.75rem 0.75rem 0.75rem;
`
const Heading = styled.div`
    color: #1f1f1f;
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 2rem;
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    h3{
        color: #1f1f1f;
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 2rem;
        margin:0;
        //padding-bottom: 0.5rem;
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
padding: 0.75rem;
display: flex;
flex-direction: column;
justify-content: start;
`
const ImgCardCont = styled.div`
    position: relative;
`
const Title = styled.div`
    position: absolute;
    bottom: 0;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.25rem;
    padding: 2.75rem 0.75rem 0.5rem;
    h2{
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.375rem;
        color: #fff;
    }
`
const TextCont = styled.div`
padding-left: 0.75rem;
padding-bottom: 0.75rem;
margin-top: -0.3rem;
background-color: #ffffff;
p{
    color: #616161;
    font-size: 0.875rem;
    font-weight: normal;
    line-height: 1.3em;
}

`
