import { Box, Card, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../AmenitiesCard/AmenitiesCardMake';

import WifiIcon from '@material-ui/icons/Wifi';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import LocalConvenienceStoreIcon from '@material-ui/icons/LocalConvenienceStore';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import CheckIcon from '@material-ui/icons/Check';
import DeckIcon from '@material-ui/icons/Deck';
import AccessibleIcon from '@material-ui/icons/Accessible';
import BathtubIcon from '@material-ui/icons/Bathtub';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';

const AmenitiesCrad = () => {
    const classess = useStyles()
    return (
        <div>
            <Card className={classess.Card}>
                <div className={classess.OuterBox}></div>
                <Box className={classess.SmallBox}>
                    <Container >
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>

                                <Typography className={classess.Bolder} variant="h5">Property amenities</Typography>

                            </Grid>



                            <Grid item xs={12} sm={4}>
                                <Container className={classess.HeadMarginTop}>
                                    <Box >
                                        <Box className={classess.BigBox}>
                                            <WifiIcon />
                                            <Typography className={classess.HeadMargin} variant="h6">Internet</Typography>
                                        </Box>

                                    </Box>
                                    <Container className={classess.SubHeadMargin}>
                                        <Typography variant="subtitle">Available in all rooms: Free WiFi</Typography><br />
                                        <Typography variant="subtitle">Available in some public areas: Free WiFi </Typography>
                                    </Container>

                                </Container>
                                <Container className={classess.HeadMarginTop}>
                                    <Box className={classess.HeadBox}>
                                        <Box className={classess.BigBox}>


                                            <LocalParkingIcon />
                                            <Typography className={classess.HeadMargin} variant="h6">Parking and transport</Typography>
                                        </Box>

                                    </Box>
                                    <Container className={classess.SubHeadMargin}>
                                        <Typography variant="subtitle">No onsite parking available</Typography>

                                    </Container>

                                </Container>
                                <Container className={classess.HeadMarginTop}>
                                    <Box className={classess.HeadBox}>
                                        <Box className={classess.BigBox}>



                                            <RestaurantIcon />
                                            <Typography className={classess.HeadMargin} variant="h6">Food and drink</Typography>
                                        </Box>

                                    </Box>
                                    <Container className={classess.SubHeadMargin}>
                                        <Typography variant="subtitle">Room service available</Typography>

                                    </Container>

                                </Container>
                                <Container className={classess.HeadMarginTop}>
                                    <Box className={classess.HeadBox}>
                                        <Box className={classess.BigBox}>


                                            <PeopleOutlineIcon />
                                            <Typography className={classess.HeadMargin} variant="h6">Family friendly</Typography>
                                        </Box>

                                    </Box>
                                    <Container className={classess.SubHeadMargin}>
                                        <Typography variant="subtitle">Laundry facilities</Typography>

                                    </Container>

                                </Container>
                                <Container className={classess.HeadMarginTop}>
                                    <Box className={classess.HeadBox}>
                                        <Box className={classess.BigBox}>


                                            <LocalConvenienceStoreIcon />
                                            <Typography className={classess.HeadMargin} variant="h6">Conveniences</Typography>
                                        </Box>

                                    </Box>
                                    <Container className={classess.SubHeadMargin}>
                                        <Typography variant="subtitle">Free newspapers in lobby</Typography><br />
                                        <Typography variant="subtitle">Reception hall</Typography>

                                    </Container>

                                </Container>
                                <Container className={classess.HeadMarginTop}>
                                    <Box className={classess.HeadBox}>
                                        <Box className={classess.BigBox}>


                                            <RoomServiceIcon />
                                            <Typography className={classess.HeadMargin} variant="h6">Guest services</Typography>
                                        </Box>

                                    </Box>
                                    <Container className={classess.SubHeadMargin}>
                                        <Typography variant="subtitle">24-hour front desk</Typography><br />
                                        <Typography variant="subtitle">Daily housekeeping</Typography><br />
                                        <Typography variant="subtitle">Dry cleaning service</Typography><br />
                                        <Typography variant="subtitle">Laundry facilities</Typography>

                                    </Container>

                                </Container>

                            </Grid>





                            <Grid item xs={12} sm={4}>


                                <Container className={classess.HeadMarginTop}>
                                    <Box className={classess.HeadBox}>
                                        <Box className={classess.BigBox}>


                                            <CheckIcon />
                                            <Typography className={classess.HeadMargin} variant="h6">Languages spoken
                                            </Typography>
                                        </Box>

                                    </Box>
                                    <Container className={classess.SubHeadMargin}>
                                        <Typography variant="subtitle">English</Typography>
                                        <Typography variant="subtitle">Hindi</Typography>

                                    </Container>

                                </Container>
                                <Container className={classess.HeadMarginTop}>
                                    <Box className={classess.HeadBox}>
                                        <Box className={classess.BigBox}>


                                            <DeckIcon />
                                            <Typography className={classess.HeadMargin} variant="h6">Outdoors</Typography>
                                        </Box>

                                    </Box>
                                    <Container className={classess.SubHeadMargin}>
                                        <Typography variant="subtitle">Garden</Typography><br />
                                        <Typography variant="subtitle">Terrace</Typography>

                                    </Container>

                                </Container>
                                <Container className={classess.HeadMarginTop}>
                                    <Box className={classess.HeadBox}>
                                        <Box className={classess.BigBox}>


                                            <AccessibleIcon />
                                            <Typography className={classess.HeadMargin} variant="h6">Accessibility</Typography>
                                        </Box>

                                    </Box>
                                    <Container className={classess.SubHeadMargin}>
                                        <Typography variant="subtitle">If you have requests for specific accessibility needs, please contact the property using the information on the reservation confirmation received after booking</Typography><br />
                                        <Typography variant="subtitle">Daily housekeeping</Typography><br />
                                      

                                    </Container>

                                </Container>
                            </Grid>



                        </Grid>


                    </Container>
                </Box>








                <div className={classess.OuterBox}></div>

                <Box className={classess.SmallBox}>
                    <Container >
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>

                                <Typography className={classess.Bolder} variant="h5">Room amenities</Typography>

                            </Grid>



                            <Grid item xs={12} sm={4}>


                                <Container className={classess.HeadMarginTop}>
                                    <Box className={classess.HeadBox}>
                                        <Box className={classess.BigBox}>


                                            <LocalHotelIcon />
                                            <Typography className={classess.HeadMargin} variant="h6">Bedroom</Typography>
                                        </Box>

                                    </Box>
                                    <Container className={classess.SubHeadMargin}>
                                        <Typography variant="subtitle">Ceiling fan</Typography>

                                    </Container>

                                </Container>
                                <Container className={classess.HeadMarginTop}>
                                    <Box className={classess.HeadBox}>
                                        <Box className={classess.BigBox}>


                                            <BathtubIcon />
                                            <Typography className={classess.HeadMargin} variant="h6">Bathroom</Typography>
                                        </Box>

                                    </Box>


                                    <Container className={classess.SubHeadMargin}>
                                        <Typography variant="subtitle">Shower</Typography><br />
                                        <Typography variant="subtitle">Towels</Typography>

                                    </Container>

                                </Container>
                                <Container className={classess.HeadMarginTop}>
                                    <Box className={classess.HeadBox}>
                                        <Box className={classess.BigBox}>


                                            <CheckIcon />
                                            <Typography className={classess.HeadMargin} variant="h6">Entertainment</Typography>
                                        </Box>

                                    </Box>
                                    <Container className={classess.SubHeadMargin}>
                                        <Typography variant="subtitle">Cable channels</Typography><br />
                                        <Typography variant="subtitle">Flat-screen TV
                                        </Typography>


                                    </Container>

                                </Container>

                            </Grid>





                            <Grid item xs={6} sm={4}>



                                <Container className={classess.HeadMarginTop}>
                                    <Box className={classess.HeadBox}>
                                        <Box className={classess.BigBox}>


                                            <DeckIcon />
                                            <Typography className={classess.HeadMargin} variant="h6">Outdoor space
                                            </Typography>
                                        </Box>

                                    </Box>
                                    <Container className={classess.SubHeadMargin}>
                                        <Typography variant="subtitle">Garden</Typography><br />
                                        <Typography variant="subtitle">Terrace</Typography>

                                    </Container>

                                </Container>
                                <Container className={classess.HeadMarginTop}>
                                    <Box className={classess.HeadBox}>
                                        <Box className={classess.BigBox}>


                                            <CheckIcon />
                                            <Typography className={classess.HeadMargin} variant="h6">More</Typography>
                                        </Box>

                                    </Box>
                                    <Container className={classess.SubHeadMargin}>
                                        <Typography variant="subtitle">Desk</Typography><br />
                                        <Typography variant="subtitle">Free newspapers</Typography><br />
                                        <Typography variant="subtitle">Iron/ironing board</Typography><br />
                                        <Typography variant="subtitle">Laptop-compatible safe
                                        </Typography><br />
                                        <Typography variant="subtitle">Phone
                                        </Typography><br />


                                    </Container>

                                </Container>
                            </Grid>



                        </Grid>


                    </Container>
                </Box>
            </Card>







            <Card className={classess.Card}>

                <Box>
                    <Container >
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>

                                <Typography className={classess.Bolder} variant="h5">Policies</Typography>

                            </Grid>



                            <Grid item xs={12} sm={4}>


                                <Container className={classess.HeadMarginTop}>
                                    <Box >
                                        <Box className={classess.BigBox}>


                                      
                                            
                                            <Typography className={classess.HeadMargin1} variant="h6">Check-in</Typography>
                                        </Box>

                                    </Box>
                                    <Container>
                                        <Typography variant="subtitle">Check-in time starts at noon</Typography>
                                        <Typography variant="subtitle">Minimum check-in age - 18
                                        </Typography>

                                    </Container>

                                </Container>
                                <Container className={classess.HeadMarginTop}>
                                    <Box className={classess.HeadBox}>
                                        <Box className={classess.BigBox}>


                                           
                                            
                                            <Typography className={classess.HeadMargin1} variant="h6">Special check-in instructions</Typography>
                                        </Box>

                                    </Box>


                                    <Container 
                                    >
                                        <Typography variant="subtitle">Front desk staff will greet guests on arrival</Typography><br />


                                    </Container>

                                </Container>
                                <Container className={classess.HeadMarginTop}>
                                    <Box className={classess.HeadBox}>
                                        <Box className={classess.BigBox}>


                                      
                                            
                                            <Typography className={classess.HeadMargin1} variant="h6">Access methods
                                            </Typography>
                                        </Box>

                                    </Box>
                                    <Container >
                                        <Typography variant="subtitle">Staffed front desk</Typography><br />



                                    </Container>

                                </Container>
                                <Container className={classess.HeadMarginTop}>
                                    <Box className={classess.HeadBox}>
                                        <Box className={classess.BigBox}>


                                      
                                            
                                            <Typography className={classess.HeadMargin1} variant="h6">Pets</Typography>
                                        </Box>

                                    </Box>
                                    <Container
                                    >
                                        <Typography variant="subtitle">Pets not allowed
                                        </Typography><br />


                                    </Container>

                                </Container>
                                <Container className={classess.HeadMarginTop}>
                                    <Box className={classess.HeadBox}>
                                        <Box className={classess.BigBox}>


                                      
                                            
                                            <Typography className={classess.HeadMargin1} variant="h6">Children and extra beds</Typography>
                                        </Box>

                                    </Box>
                                    <Container
                                    >
                                        <Typography variant="subtitle">Children are welcome
                                        </Typography><br />
                                        <Typography variant="subtitle">Cribs (infant beds) are not available

                                        </Typography>


                                    </Container>

                                </Container>
                                <Container className={classess.HeadMarginTop}>
                                    <Box className={classess.HeadBox}>
                                        <Box className={classess.BigBox}>


                                   
                                            <Typography className={classess.HeadMargin1} variant="h6">Property payment types</Typography>
                                        </Box>

                                    </Box>
                                    <Container>

                                    <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg" alt="" />
                                    </Container>
                                 

                                </Container>

                            </Grid>





                            <Grid item xs={6} sm={4}>



                                <Container className={classess.HeadMarginTop}>
                                    <Box className={classess.HeadBox}>
                                        <Box className={classess.BigBox}>


                                          
                                            
                                            <Typography className={classess.HeadMargin1} variant="h6">Check-out

                                            </Typography>
                                        </Box>

                                    </Box>
                                    <Container
                                    >
                                        <Typography variant="subtitle">Check-out before 11:30 AM
                                        </Typography><br />
                                        <Typography variant="subtitle">Late check-out subject to availability
                                        </Typography><br />
                                        <Typography variant="subtitle">Late check-out fee: INR 350

                                        </Typography>

                                    </Container>

                                </Container>

                            </Grid>



                        </Grid>


                    </Container>
                </Box>
            </Card>



        </div>
    )
}

export default AmenitiesCrad
