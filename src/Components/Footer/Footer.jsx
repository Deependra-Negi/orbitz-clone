import { Box, Container, Grid } from '@material-ui/core'
import React from 'react'
import { useStyles } from './Footermake';
import styles from './Footer.module.css'
import { Link } from 'react-router-dom';

const FootBox1 = [
    {
        to:"/about",Contact:"About"
    },
    {
        to:"/jobs",Contact:"Jobs"
    },
    {
        to:"/list",Contact:"List your property"
    },
    {
        to:"/partner",Contact:"Partnerships"
    },
    {
        to:"/newsroom",Contact:"Newsroom"
    },
    {
        to:"/investor",Contact:"Investor Relations"
    },
    {
        to:"/site",Contact:"Site Map"
    },
    {
        to:"/add",Contact:"Orbitz"
    },
    {
        to:"/add",Contact:"Advertising"
    },
] 
const FootBox2 = [
    {
        to:"/hotelsUs",Contact:"Hotels in Uninted State"
    },
    {
        to:"/vacation",Contact:"Car Rentals in United States"
    },
    {
        to:"/Domestic",Contact:"Domestic Fights"
    },
    {
        to:"/pakage",Contact:"Vacations Package in United States"
    },
    {
        to:"/reviews",Contact:"Orbitz Reviews"
    },
    {
        to:"/coupons",Contact:"Orbitz Coupons"
    },
    {
        to:"/lgbtq",Contact:"LGBTQ Travels"
    },
    {
        to:"/accommodations",Contact:"Unique Accommodations"
    },
    {
        to:"/Travel",Contact:"Travel Blog"
    },
] 
const FootBox3 = [
    {
        to:"/privacy",Contact:"Privacy Policy"
    },
    {
        to:"/terms",Contact:"Terms Of Use"
    },
    {
        to:"/Orbitz",Contact:"Orbitz Rewards Terms"
    },
    {
        to:"/personal",Contact:"Do not sell my personal information"
    }
    
] 
const FootBox4 = [
    {
        to:"/support",Contact:"Privacy Policy"
    },
    {
        to:"/rental",Contact:"Cancal your hotel or vacation rental booking"
    },
    {
        to:"/fight",Contact:"cancel your flight"
    },
    {
        to:"/refund",Contact:"Refund timeslines,policies & process"
    }
    ,
    {
        to:"/usecoupan",Contact:"Refund timeslines,policies & process"
    }
    ,
    {
        to:"/coronavirus",Contact:"Coronavirus Disease (Covid-19)"
    }
    
] 
  
const bootX = {
 
    sm:7
}
const bootY = {
    xs: 1,
   
}

const Footer = () => {
    const classess = useStyles()
    return (
        <footer className={styles.BgColor}>
          <box >
                <Box className={styles.containerGrid} px={bootX} py={bootY}>
                <Container className={classess.logo}>
                    <img src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" alt="" />
                </Container>
            
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={6} sm={3}>
                            <Box className={classess.HeadBox} >Company</Box>
                            {FootBox1.map((el) => (
                                <Box className={classess.Box}>

                                    <Link className={classess.Link} to={el.to}>{el.Contact }</Link>
                                </Box>
                            ))}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Box className={classess.HeadBox}>Explore</Box>
                            {FootBox2.map((el) => (
                                <Box className={classess.Box}>

                                    <Link className={classess.Link} to={el.to}>{el.Contact}</Link>
                                </Box>
                            ))}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Box className={classess.HeadBox}>Policy</Box>
                            {FootBox3.map((el) => (
                                <Box className={classess.Box}>

                                    <Link className={classess.Link} to={el.to}>{el.Contact}</Link>
                                </Box>
                            ))}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Box className={classess.HeadBox}>Help</Box>
                            {FootBox4.map((el) => (
                                <Box className={classess.Box}>

                                    <Link className={classess.Link} to={el.to}>{el.Contact}</Link>
                                </Box>
                            ))}
                        </Grid>
                   
                   
                    </Grid>
             
                   
                </Container>
               
                </Box>
                <Container>
            <Box  textAlign="center"  borderTop={1}>
                <Box className={classess.Box2}>© 2021 Orbitz, LLC, an Expedia Group Company. All rights reserved.</Box>
                <Box className={classess.Box3}> Orbitz, Orbitz.com, and the Orbitz logo are trademarks or registered trademarks of Orbitz, LLC. CST# 2083930-50.</Box>
            </Box>
                </Container>
            </box>
        </footer>
    )
}

export default Footer
