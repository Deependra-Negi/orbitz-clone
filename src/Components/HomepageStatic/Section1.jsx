import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    btn:{
        backgroundColor: "#ebebeb",
        borderRadius: "2px",
        color: "#fff",
        fontSize: "1rem",
        lineHeight: "1.25rem",
        minHeight: "2.45rem",
        minWidth: "5.25rem",
        textTransform: 'none',
        marginTop:"20px"
    },
}));

const img =
    [
        {url: "https://forever.travel-assets.com/flex/flexmanager/images/2021/06/11/ORB_BrandPromise_TravelAsYouAre_imgB_840x473_20210611.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"},
        {url: "https://forever.travel-assets.com/flex/flexmanager/images/2021/04/01/ORB_BrandPromise_Rewards_imgB_840x473_20210331.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"},
        { url: "https://forever.travel-assets.com/flex/flexmanager/images/2021/04/01/ORB_BrandPromise_IGLTA_imgB_840x473_20210330.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"}
    ]

export default function Section1() {
    const classes = useStyles();
    
    return (
        <MainCont>
            <Cont>
                <ImgCont>
                    <Img>
                        <Text>
                            <h3>GIVE THE WORLD A SHOT</h3>
                            <p>Book on the Orbitz app and we'll help get a covid vaccine to someone,<br />
                                somewhere who needs it. Let's reopen the world, one trip at a time.
                            </p>
                            <Button variant="contained" className={classes.btn}>Learn more</Button>
                        </Text>
                    </Img>
                </ImgCont>
            </Cont>
            <Para>
                <ParaIn>
                    For every eligible Orbitz booking, Expedia, Inc. will donate $2 USD, up to $12 million USD, in support of UNICEF’s global COVID-19 response. Expedia, Inc. pledges a minimum donation of $10 million USD. Certain eligibility criteria apply.
                    Click Learn more above for complete program terms. Learn more about UNICEF's work at www.unicef.org
                </ParaIn>
            </Para>
            <Card2Cont>
                {img.map((i) => (
                <Card2>
                    <img src={i.url} alt="" />
                </Card2>
                ))};
            </Card2Cont>
        </MainCont>  
    )
}
const MainCont = styled.div`
    padding-bottom: 0.75rem;
    //padding-top: 0.75rem;
`
const Cont = styled.div`
    padding: 0.75rem 0.75rem 1.5rem 0.75rem;
`
const ImgCont = styled.div`
    padding: 0.75rem;
`
const Img = styled.div`
padding: 2.75rem ;
    background-image: linear-gradient(to right,#03030379, #3131317b, #00000079), url("https://forever.travel-assets.com/flex/flexmanager/images/2021/08/05/ORB_VaccineCampaign_imgB_1199x399_20210804_430PM.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 100% 60%;
`
const Text = styled.div`
padding: 2rem 0 0rem 0;
    h3{
        color:#fff;
        font-size: 1.75rem;
        margin: 0;
    }
    p{
        //padding-top: 0.75rem;
        color:#fff;
        font-size: 1.125rem;
    }
`
const ParaIn = styled.div`
    padding: 0.75rem;
    p{
        color: #616161;
        font-size: 0.875rem;
        font-weight: normal;
        line-height: 1.3em;
    }
`
const Para = styled.div`
    padding: 0.75rem 1.5rem;
`
const Card2Cont = styled.div`
    width: 100%;
    padding: 1.5rem 0rem;
    display: flex;
    justify-content: space-between;
`
const Card2 = styled.div`
    padding: 1.5rem;
    img{
        width: 100%;
    }
`