import React from 'react';
import ReactLoading from 'react-loading';
import { makeStyles } from '@material-ui/core';

const LoadingComp = () => {
    const useStyles = makeStyles({
        loadingLogo: {
            width: "90px",
            height: "40px"
        },
        loadingDiv: {
            margin: "230px auto",
            width: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
    })
    const classes = useStyles();
    return (
        <div className={classes.loadingDiv}>
            <img className={classes.loadingLogo} src="https://www.orbitz.com/_dms/interstitial/logo.svg?locale=en_US&siteid=70201" alt="Orbitz logo" />
            <ReactLoading type="spin" color="#1844d4" height={66} width={66} />
        </div>
    );
}
 
export default LoadingComp;