import {  Box, Grid,  TextField, Button, Typography, Container } from '@material-ui/core'
import React, { useState } from 'react';
import GoogleLogin from "react-google-login";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { useStyles } from './SignupMake';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';

import axios from 'axios'
import { useEffect } from 'react';
import { useHistory } from 'react-router';
const SignUpForm = () => {
    const init = {
        firstname: "",
        email: "",
        password: "",
        showPassword: false,
    }
    const [formdata, setformdata] = useState(init);
    const [status, setstatus] = useState(false);
    const history = useHistory()
  
    const [disable, setdisable] = useState(true);
 

    const handleonChangeinput = (e) => {
        let email = e.target.value;
        if (e.target.name === 'password') {
            let password = e.target.value;
            if (password.length >= 8) {
                setdisable(false);
            } else {
                setdisable(true);
            }
        }
        if (e.target.name === 'email') {
            if (email.includes('@') && email.includes('.')) {
                setstatus(true);
            } else {
                setstatus(false);
            }
        }
        const { name, value } = e.target
        setformdata({ ...formdata, [name]: value })
    }
    const handleonSubmit = (event) => {
        event.preventDefault()
        console.log(formdata)
        axios.get('http://localhost:3010/users').then(function (response) {
            let allusers = response.data;
            let status = false;
            console.log(allusers);
            allusers.forEach((el) => {
                if (el.email === formdata.email) {
                    status = true;
                }
            });
            if (!status) {
                axios
                    .post('http://localhost:3010/users', {...formdata})
                    .then(function (response) { console.log(response) });
            
             
            }

        })
        history.push("/signin")
     
        
      
      
    }
    

    const responseGoogle = (res) => {
        console.log(res.profileObj.email);
        let data = { ...res.profileObj, events: {} };
        console.log(res.profileObj.email)

        axios.get('http://localhost:3010/users').then(function (response) {
            let allusers = response.data;
            let status = false;
            console.log(allusers);
            allusers.forEach((el) => {
                if (el.email === res.profileObj.email) {
                    status = true;
                }
            });
            if (!status) {
                axios
                    .post('http://localhost:3010/users',data)
                    .then(function (response) { });
            }
        });

        axios.get('http://localhost:3010/login').then(function (resp) {
            if (resp.data.length === 0) {
                axios
                    .post('http://localhost:3010/login', res.profileObj)
                    .then(function (resp) { });
                // history.push('/');
            } else {
                // history.push('/');
            }
        });
    };


    const handleClickShowPassword = () => {
    
        setformdata({ ...formdata, showPassword: !formdata.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const classes = useStyles()
    return (
        <>
            <div>
                <AppBar className={classes.Navbar} position="fixed">
                    <Toolbar>
                        <IconButton className={classes.IconColor}>
                            <CloseIcon />
                        </IconButton>

                    </Toolbar>
                </AppBar>
            </div>

            <form onSubmit={handleonSubmit} className={classes.root}>

                <Grid  className={classes.Biggrid} container spacing={3}>

                    <Grid className={classes.gridItem} xl={6} xs={12} >
                        <Container className={classes.Container}>
                            <h2>Create an account with</h2>
                            <Link className={classes.LinkDeco} to="/google">
                                <Box className={classes.Box1}>
                                    <Box className={classes.Box2}>
                                        <GoogleLogin
                                            className="google"
                                            
                                            clientId="1041538525274-ir3pldh2s7m3rhr86gut482ra9h15dcs.apps.googleusercontent.com"
                                            render={(renderProps) => (
                                                <button
                                                  
                                                    onClick={renderProps.onClick}
                                                    disabled={renderProps.disabled}
                                                >
                                                    <span>G</span> Use Google
                                                </button>
                                            )}
                                            buttonText="Login"
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            isSignedIn={true}
                                            cookiePolicy={"single_host_origin"}
                                        />
                                        <h4 className={classes.IconColor}>Google</h4>


                                    </Box>
                                    <Box className={classes.Box3}>

                                        <ArrowForwardIosIcon fontSize="small" />
                                    </Box>
                                </Box>
                            </Link>
                            <Link className={classes.LinkDeco} to="/facebook">
                                <Box className={classes.Box1}>
                                    <Box className={classes.Box2}>
                                        <AccessTimeIcon />

                                        <h4 className={classes.IconColor}>Facebook</h4>

                                    </Box>
                                    <Box className={classes.Box3}>

                                        <ArrowForwardIosIcon fontSize="small" />
                                    </Box>

                                </Box>
                            </Link>
                        </Container>

                    </Grid>
                    <Grid
                        className={classes.gridItem} xl={6} xs={12}
                    >
                        <h2>Or create an account with email</h2>
                        <Box className={classes.Box}>

                            <TextField onChange={handleonChangeinput} value={formdata.firstname} name="firstname" className={classes.TextField} type="text" id="outlined-basic" label="First and last name" variant="outlined" />

                        </Box>
                        <Box className={classes.Box}>

                            <TextField onChange={handleonChangeinput} value={formdata.email} name="email" className={classes.TextField} type="email" id="outlined-basic" label="email address" variant="outlined" />

                        </Box>
                        <Box className={classes.Box}>

                            <TextField className={classes.TextField} value={formdata.password} id="outlined-basic" label="password" variant="outlined"
                                type={formdata.showPassword ? 'text' : 'password'}

                                onChange={handleonChangeinput} name="password"

                                InputProps={{ // <-- This is where the toggle button is added.
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {formdata.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}

                            />
                            <Typography className={classes.textsize} variant="subtitle1" component="h2">
                                Must be 8 to 30 characters with no spaces
                            </Typography>

                        </Box>

                        <Box>
                            <Typography className={classes.textsize} variant="subtitle1" component="h2">
                                By creating an account, I agree to the Orbitz <Link className={classes.LinkDeco1}>Terms of Use, opens in a new windowPrivacy Policy, opens in a new windowand Orbitz Rewards Terms and Conditions.</Link>
                            </Typography>
                        </Box>
                        <Box className={classes.Box}>
                            <Button className={classes.Button} type="submit" variant="contained" color="secondary" >Create account</Button>

                        </Box>
                        <Box>
                            <Typography className={classes.textsize} variant="subtitle1" component="h2">
                                Already have an account?<Link className={classes.LinkDeco1}>Sign in</Link>
                            </Typography>
                        </Box>

                    </Grid>

                </Grid>
            </form>
        </>
    )
}

export default SignUpForm
