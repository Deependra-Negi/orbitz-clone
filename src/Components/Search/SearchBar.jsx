import { Box, Tabs, Tab, makeStyles, Divider } from "@material-ui/core";
import { useState } from "react";
import { SearchCompact } from "./SearchCompact";
import DomainIcon from '@material-ui/icons/Domain';
import FlightIcon from '@material-ui/icons/Flight';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import WorkIcon from '@material-ui/icons/Work';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';

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
            width: "16.5%"
        },
        tabs: {
            width: "100%",
            margin: "0px",
            paddingBottom: "8px",
            height: "80px",
        },
        containerSearchBox: {
            width: "89%",
            height: "350px",
            border: "1px solid black",
            margin: "10px auto",
            padding: "3px 10px"
        },
        tb: {
            width: "100%",
            display: "flex",
            justifyContent:"space-evenly !important"
        }
    })
    const classes = useStyles();
    const handleTabChange = (event, newValue) => {
        setValueTab(newValue);
    };
    return (
        <Box className={classes.containerSearchBox}>
            <Box className={classes.tabs}>
                    <Tabs
                        value={valueTab}
                        onChange={handleTabChange}
                    indicatorColor="primary"
                    className={classes.tb}
                        textColor="primary"
                    >
                        <Tab icon={<DomainIcon/>} className={classes.eachTab} label="Stays"/>
                        <Tab icon={<FlightIcon/>} className={classes.eachTab} label="Flights" />
                        <Tab icon={<DriveEtaIcon/>} className={classes.eachTab} label="Cars" />
                        <Tab icon={<WorkIcon/>} className={classes.eachTab} label="Packages" />
                        <Tab icon={<ListAltIcon/>} className={classes.eachTab} label="Things to do" />
                        <Tab icon={<DirectionsBoatIcon/>} className={classes.eachTab} label="Cruises" />
                    </Tabs>
            </Box>
            <Divider className={classes.div}/>
            <SearchCompact />
        </Box>
    )
}