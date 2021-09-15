import { Box, Tabs, Tab, makeStyles, Divider } from "@material-ui/core";
import { useState } from "react";
import { SearchCompact } from "./SearchCompact";
import DomainIcon from '@material-ui/icons/Domain';
import FlightIcon from '@material-ui/icons/Flight';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import WorkIcon from '@material-ui/icons/Work';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import styles from "./Home.module.css";
// import { PaymentModal } from "../PaymentModal/PaymentModal";
import HomepageStatic from "../HomepageStatic/HomepageStatic";
import styled from "styled-components";
import RewardCard from '../RewardCard/RewardCard'
import Footer from '../Footer/Footer'
import HelpBot from "../HelpBot/HelpBoat";

export const SearchBar = () => {
    const [valueTab, setValueTab] = useState(0);
    const useStyles = makeStyles({
        checkboxes: {
            display: "flex",
            alignItems: "center",
            margin: "17px 3px"
        },
        btn: {
            width: "230px",
            height: "69px",
            backgroundColor: "rgb(200,50,89)"
        },
        eachTab: {
            height: "90px",
            textTransform: "none",
            width: "16.5%",
        },
        tabs: {
            width: "100%",
            margin: "0px",
            paddingBottom: "8px",
            height: "80px",
        },
        containerSearchBox: {
            position: "absolute",
            top: 50,
            left:80,
            width: "87%",
            margin: "auto",
            height: "290px",
            borderRadius: "1px",
            padding: "0px 8px",
            backgroundColor: "white",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
        },
        tb: {
            width: "100%",
            display: "flex",
            justifyContent:"space-evenly !important"
        },
        lite:{
            fill: "#616161",
        }
    })
    const classes = useStyles();
    const handleTabChange = (event, newValue) => {
        setValueTab(newValue);
    };
    return (
        <MainCont>
            <div className={styles.home}>
            <Box className={classes.containerSearchBox}>
                <Box className={classes.tabs}>
                        <Tabs
                            value={valueTab}
                            onChange={handleTabChange}
                        indicatorColor="primary"
                        className={classes.tb}
                            textColor="primary"
                        >
                            <Tab icon={<DomainIcon className={classes.lite}/>} className={classes.eachTab} label="Stays"/>
                            <Tab icon={<FlightIcon className={classes.lite}/>} className={classes.eachTab} label="Flights" />
                            <Tab icon={<DriveEtaIcon className={classes.lite}/>} className={classes.eachTab} label="Cars" />
                            <Tab icon={<WorkIcon className={classes.lite}/>} className={classes.eachTab} label="Packages" />
                            <Tab icon={<ListAltIcon className={classes.lite}/>} className={classes.eachTab} label="Things to do" />
                            <Tab icon={<DirectionsBoatIcon className={classes.lite}/>} className={classes.eachTab} label="Cruises" />
                        </Tabs>
                    </Box>
                    <Divider className={classes.div} />
                <SearchCompact />
                </Box>
            </div>
                    <div className={styles.bot}><HelpBot/></div>
            
                <StaticDivs>
                <HomepageStatic />
                <RewardCard />
                <Footer />
                </StaticDivs>
                
            </MainCont>
    )
}

//-------------------styled components--------------------

const MainCont = styled.div`
    background-color: #f5f5f5;
`
const StaticDivs = styled.div`
    margin: auto;
`