import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Box, Button, TextField } from '@material-ui/core';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop:"20px"
    },
    Card: {
        display: "grid",
        gridTemplateColumns: "35% 52% 13%",
        width: "100%",
        height: 350,
        margin: "auto",
    },
    Image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    Text: {
        color: "#1F1F1F",
        fontSize: "1.75rem",
        fontWeight: "700",
        lineHeight: "2rem",
        marginTop: "1rem"
    },
    Text1: {
        marginTop: 4,
        color: "#616161",
        fontSize: "0.85rem",
        lineHeight:"1.5rem",
    },
    Text2: {
        marginTop: 15,
        fontWeight: "bolder"
    },
    Box2: {
        padding: "2% 4%",
    },
    Box3: {
        textAlign: "center",
        alignItems: "center",
        marginTop: "1.5rem",
    },
    TexQR: {
        fontWeight:"bolder"
    },
    Boxadjust: {
        margin: "20px 0"
    },
    TextFeild: {
        width: "30%",
        marginLeft: "10px"
    },
    Button: {
        width: "30%",
        height: 52,
        marginLeft: "10px",
        background: "#CF4B6D",
        color:"white"
    },
    text3: {
        fontSize: "12px",
        color:"#616161"
    }
}));
const countries = [
    {
        value: 'USD',
        label: 'USA +1',
    },
    {
        value: 'IN',
        label: 'INDIA +91',
    },
    {
        value: 'BTN',
        label: 'Bhutan',
    },
    {
        value: 'SR',
        label: 'SriLanka',
    },
];

export default function RewardCard() {
    const classes = useStyles();
 
    return (
        <CardCont style={{marginTop:"50px"}}>
            <Card className={classes.Card}>
                <Box>       <img className={classes.Image} src="https://thumbnails.trvl-media.com/CSYM6eB9q4W5M2gqyZNY_NfDEFQ=/a.travel-assets.com/mad-service/footer/marquee/ORB_App_Footer_v1.jpg" alt="RewardImage" />
                </Box>
                <Box className={classes.Box2}>

                    <Typography className={classes.Text} component="h2">
                        Rewards are waiting for you in the Orbitz app
                    </Typography>

                    <ui>
                        <li className={classes.Text1}>Earn 4% back when you book your hotel in app, vs. 3% on site</li>
                        <li className={classes.Text1}>Get flight status and gate number notifications</li>
                        <li className={classes.Text1}>Have questions about your stay? Message your hotel right in the app</li>
                    </ui>

                    <Typography className={classes.Text2} >
                        Text yourself a download link
                    </Typography>

                    <Box className={classes.Boxadjust}>
                        <TextField className={classes.TextFeild}
                            id="outlined-select-currency-native"
                            select
                            label="country code"
                            SelectProps={{
                                native: true,
                            }}
                            variant="outlined">
                            
                            {countries.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                        <TextField className={classes.TextFeild} id="outlined-basic" label="Phone Number" variant="outlined" />
                        <Button className={classes.Button} variant="contained" color="secondary">
                            Get the App
                        </Button>
                    </Box>
                    <p className={classes.text3}>By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</p> 
                  
                </Box>
                <Box className={classes.Box3}>
                    <img src="https://a.travel-assets.com/mad-service/qr-code/150/70201.jpg" alt="travelQR" />
                    <Typography className={classes.TexQR}>Scan the QR code</Typography>
                </Box>
            </Card>
        </CardCont>
    );
}

const CardCont = styled.div` 
        padding: 1.5rem;
        margin-top:50px;
    `