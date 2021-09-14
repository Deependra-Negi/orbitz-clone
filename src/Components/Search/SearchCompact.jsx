import { Box, TextField, makeStyles, MenuItem, Checkbox} from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { search } from "../../Redux/Queries/actions";
import styles from "./Home.module.css";

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
    
    // console.log(location);
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
            justifyContent:"flex-start",
            margin: "5px 1px",
            fontSize: "14px",
            height: "10px",
            // border: "1px solid black",
            width: "380px"
        },
        btn1: {
            marginTop:"10px",
            width: "170px",
            height: "49px",
            backgroundColor: "rgb(200,50,89)",
            borderRadius: "1px",
            textTransform: "none",
            fontSize: "18px",
            color:"white"
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
            color:"white"
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
        typ: {
            fontSize:"8"
        }
    })
    const btn1 = {
        marginTop: "10px",
        width: "170px",
        height: "49px",
        backgroundColor: "rgb(200,50,89)",
        borderRadius: "1px",
        textTransform: "none",
        fontSize: "18px",
        color: "white",
        cursor:"pointer",
        border:"0px",
    };
    const btn2 = {
        width: "180px",
        height: "49px",
        backgroundColor: "rgb(200,50,89)",
        borderRadius: "3px",
        textTransform: "none",
        fontSize: "18px",
        position: "absolute",
        bottom: 20,
        left: 510,
        color: "white",
        cursor:"pointer",
        border:"0px",
    };
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
                        defaultValue="2021-08-31"
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
                        defaultValue="2021-09-03"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
            <TextField name="travelers" onChange={handleChange} className={classes.inps} variant="outlined" label="Travelers" />
            {!homePage ? <Box>
                <button onClick={handleSearch} style={btn1}>Search</button>
            </Box> : null}
            </Box>
            {homePage ? <Box><div className={styles.checkboxes}>
                <Checkbox className={styles.checkboxStyle1} onChange={(e) => setAddFlight(e.target.checked) }/><div className={styles.flight_div}>Add a Flight </div>
                <Checkbox className={styles.checkboxStyle2} onChange={(e) => setAddCar(e.target.checked) }/><p className={styles.car_div}>Add a Car </p>
            </div><Box>
                <button onClick={handleSearch} style={btn2}>Search</button>
            </Box></Box> : null}
            </>
    )
}