import React from 'react'
import styled from 'styled-components'

const img = [{
        url: "https://forever.travel-assets.com/flex/flexmanager/images/2020/11/13/ORB_Storefront_VYOWtile_LGBTQIA_400x400.jpg?impolicy=fcrop&w=200&h=200&q=medium",
        title : "LGBTQ"
    },
    {
        url: "https://forever.travel-assets.com/flex/flexmanager/images/2020/07/31/ORB_Affinity_Luxury_imgB_444x444_20200731.jpg?impolicy=fcrop&w=200&h=200&q=medium",
        title: "Luxury"
    },
    {
        url: "https://forever.travel-assets.com/flex/flexmanager/images/2020/07/31/ORB_Affinity_AllInclusive_imgB_444x444_20200731.jpg?impolicy=fcrop&w=200&h=200&q=medium",
        title:"All-inclusive"
    },
    {
        url: "https://forever.travel-assets.com/flex/flexmanager/images/2020/07/31/ORB_Affinity_LastMinute_imgB_444x444_20200731.jpg?impolicy=fcrop&w=200&h=200&q=medium",
        title:"Last minute"
    },
    {
        url: "https://forever.travel-assets.com/flex/flexmanager/images/2020/07/31/ORB_Affinity_Beach_imgB_444x444_20200731.jpg?impolicy=fcrop&w=200&h=200&q=medium",
        title: "Beach"
    },
    {
        url: "https://forever.travel-assets.com/flex/flexmanager/images/2020/07/31/ORB_Affinity_Romantic_imgB_444x444_20200731.jpg?impolicy=fcrop&w=200&h=200&q=medium",
        title:"Romantic"
    }

]
export default function Vacation() {
    return (
        <MainCont>
            <Cont>
                <Heading>
                    <h3>Vacation your way</h3>
                </Heading>
                <ImgCont>
                    {img.map((i) => (
                        <CardCont>
                            <img src={i.url} alt="" />
                            <Title><h2>{i.title}</h2></Title>
                        </CardCont>
                    ))}
                </ImgCont>
            </Cont>
        </MainCont>
    )
}
const MainCont = styled.div`
    width: 100%;
    padding-bottom: 0.75rem;
    padding-top: 0.75rem;
    width: 100%;
`
const Cont = styled.div`
    padding: 0.75rem 0.75rem 1.5rem 0.75rem;
    //width: 100%;
`
const Heading = styled.div`
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    h3{
        color: #1f1f1f;
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 2rem;
        margin:0;
        padding-left: 0.75rem;
        //padding-bottom: 0.5rem;
    }
`
const ImgCont = styled.div`
    //width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 0.65rem;
    img{
        filter: brightness(60%);
    }
`
const CardCont = styled.div`
    position: relative;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    img{
        width: 100%;
        //max-width: 12rem;
    }
`
const Title = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.25rem;
    h2{
        color: #fff;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.25rem;
    }
`

