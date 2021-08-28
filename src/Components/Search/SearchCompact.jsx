import { Box, TextField, makeStyles, MenuItem, Button, Checkbox, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { search } from "../../Redux/Queries/actions";

export function SearchCompact() {
    const [addFlight, setAddFlight] = useState(false);
    const [addCar, setAddCar] = useState(false);
    const dispatch = useDispatch();
    let history = useHistory();
    const [queryDetails, setQueryDetails] = useState({});
    const [homePage, setHomePage] = useState(true);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname !== "/") {
            setHomePage(false);
        } else {
            setHomePage(true);
        }
    }, []);
    
    console.log(location);
    const places = [
        {
            label: "Bangalore",
            value: "Bangalore"
        },
        {
            label: "Delhi",
            value: "Delhi"
        },
        {
            label: "Pune",
            value: "Pune"
        },
        {
            label: "Hyderabad",
            value: "Hyderabad"
        },
        {
            label: "Mumbai",
            value: "Mumbai"
        }
    ]
    const useStyles = makeStyles({
        checkboxes: {
            display: "flex",
            alignItems: "center",
            margin: "17px 3px",
        },
        btn1: {
            marginTop:"10px",
            width: "170px",
            height: "49px",
            backgroundColor: "rgb(200,50,89)",
            borderRadius: "1px",
            textTransform: "none",
            fontSize: "18px"
        },
        btn2: {
            width: "180px",
            height: "49px",
            backgroundColor: "rgb(200,50,89)",
            borderRadius: "3px",
            textTransform: "none",
            fontSize: "18px",
            position: "absolute",
            bottom: 20,
            left: 510,
        },
        inpBox: {
            display: "flex",
            padding: "10px",
            margin: "19px 0px"
        },
        inps: {
            marginRight : "23px !important",
            borderRadius: "1px",
            marginTop: "10px",
        },
        place: {
            width: "50%",
            margin: "10px"
        },
        date: {
            marginTop: "10px",
            marginRight: "10px",
            fill:"#616161"
        },
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setQueryDetails({ ...queryDetails, [name]: value } );
    }
    const handleSearch = () => {
        //console.log(queryDetails);
        dispatch(search(queryDetails));
        history.push("/results");
    }
    const classes = useStyles();
    return (
        <>
        <Box className={classes.inpBox}>
            {/* <TextField className={`${styles.inps} ${styles.place}`} variant="outlined" label="going to" /> */}
            <TextField name="city" onChange={handleChange} variant="outlined" className={`${classes.inps} ${classes.place}`} label="City" select>
                    {places.map((option) => (
                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                    ))}
                </TextField>
            <TextField
                name="from"
                        id="datetime-local"
                        onChange={handleChange}
                        label="Check-in"
                        type="date"
                        className={classes.date}
                    variant="outlined"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
            <TextField
                name="to"
                        id="datetime-local"
                        onChange={handleChange}
                        label="Check-out"
                        type="date"
                    className={classes.date}
                        variant="outlined"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
            <TextField name="travelers" onChange={handleChange} className={classes.inps} variant="outlined" label="travelers" />
            {!homePage ? <Box>
                <Button onClick={handleSearch} className={classes.btn1} variant="contained" color="primary">Search</Button>
            </Box> : null}
            </Box>
            {homePage ? <Box><Box className={classes.checkboxes}>
                <Checkbox style ={{
                      color: "#2e4138",
                    }} onChange={(e) => setAddFlight(e.target.checked) }/><Typography>Add a Flight </Typography>
                <Checkbox style ={{
                      color: "#2e4138",
                    }} onChange={(e) => setAddCar(e.target.checked) }/><Typography>Add a Car </Typography>
            </Box><Box>
                <Button onClick={handleSearch} className={classes.btn2} variant="contained" color="primary">Search</Button>
            </Box></Box> : null}
            </>
    )
}