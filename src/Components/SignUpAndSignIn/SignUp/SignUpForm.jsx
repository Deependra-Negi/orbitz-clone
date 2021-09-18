import { Box, Grid, TextField, Button, Typography, Container } from '@material-ui/core'
import React, { useState } from 'react';
import GoogleLogin from "react-google-login";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { useStyles } from './SignupMake';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';

import axios from 'axios'
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, setuserName } from '../../../Redux/Auth/action';
const SignUpForm = () => {
    const init = {
        firstname: "",
        email: "",
        password: "",
        showPassword: false,
    }
    const [formdata, setformdata] = useState(init);
  
    
    const history = useHistory()

   
    const { isLoading, isAuth, isError } = useSelector((state) => state.auth)
 
    console.log(isLoading, isAuth)
    const dispatch = useDispatch()
    useEffect(() => {
      
    }, [])

    const handleonChangeinput = (e) => {
    
        const { name, value } = e.target
        setformdata({ ...formdata, [name]: value })
    }
    const handleonSubmit = (event) => {
        event.preventDefault()
        console.log(formdata)
        let username = formdata.firstname
        dispatch(setuserName({ username }))
        axios.get('https://orbitz-heroku-data.herokuapp.com/users').then(function (response) {
            let allusers = response.data;
            let status = false;
        
            allusers.forEach((el) => {
                if (el.email === formdata.email) {
                    status = true;
                  
                }
            });
            if (!status) {
                axios
                    .post('https://orbitz-heroku-data.herokuapp.com/users', { ...formdata })
                    .then(function (response) {
                        console.log(response)
                      
                    
                    
                    });


            }

        })
        history.push("/signin")




    }

  

    const responseGoogle = (res) => {
     
        let data = { ...res.profileObj, events: {} };
          console.log(data)
        let token = data.googleId
        let username = data.name
        dispatch(loginSuccess({ token }))
        dispatch(setuserName({ username }))
 
        history.push('https://orbitz.netlify.app');
      
      
    };

    const handleauth = () => {
        dispatch(responseGoogle({ formdata }))
    }


    const handleClickShowPassword = () => {

        setformdata({ ...formdata, showPassword: !formdata.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const classes = useStyles()
    // if (!isAuth) {
    //     return (
    //         <Redirect path="/signin" />
    //     )
    // } else {
    //     history.push("/")
    // }


    const handleback = () => {
        history.push("/")
    }



    return isLoading?<div>...Loading</div> : isError?<div>Something thing is wrong</div> : (
        <>
            <div>
                <AppBar className={classes.Navbar} position="fixed">
                    <Toolbar>
                        <IconButton className={classes.IconColor}>
                            <CloseIcon onClick={handleback} />
                        </IconButton>

                    </Toolbar>
                </AppBar>
            </div>

            <form onSubmit={handleonSubmit} className={classes.root} autoComplete="off">

                <Grid className={classes.Biggrid} container spacing={3}>

                    <Grid className={classes.gridItem} xl={6} xs={12} >
                        <Container className={classes.Container}>
                            <h2>Create an account with</h2>
                            <Link className={classes.LinkDeco} to="/google">
                                <Box className={classes.Box1}>
                                    <Box className={classes.Box2}>
                                        <GoogleLogin onClick={handleauth}
                                            className="google"

                                            clientId="1041538525274-ir3pldh2s7m3rhr86gut482ra9h15dcs.apps.googleusercontent.com"
                                       
                                       
                                            onSuccess={responseGoogle}
                                           
                                          
                                            cookiePolicy={"single_host_origin"}
                                        />
                                      
                                        


                                    </Box>
                                    <Box className={classes.Box3}>

                                        <ArrowForwardIosIcon fontSize="small" />
                                    </Box>
                                </Box>
                            </Link>
                            <Link className={classes.LinkDeco} to="/facebook">
                                <Box className={classes.Box1}>
                                    <Box style={{textDecoration:"none"}} className={classes.Box2}>
                                     
                                        
                                 
                                        <img width="35px" src="https://i.pinimg.com/originals/b3/26/b5/b326b5f8d23cd1e0f18df4c9265416f7.png" alt="facebooklogo" />
                                      
                                        
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

                            <TextField required onChange={handleonChangeinput} value={formdata.firstname} name="firstname" className={classes.TextField} type="text" id="outlined-basic" label="First and last name" variant="outlined" />

                        </Box>
                        <Box className={classes.Box}>

                            <TextField required onChange={handleonChangeinput} value={formdata.email} name="email" className={classes.TextField} type="email" id="outlined-basic" label="email address" variant="outlined" />

                        </Box>
                        <Box className={classes.Box}>

                            <TextField required className={classes.TextField} value={formdata.password} id="outlined-basic" label="password" variant="outlined"
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
                            <Button className={classes.Button} type="submit" variant="contained" color="secondary" >
                                <Typography className={classes.CreateAccount}>Create account</Typography>
                            </Button>

                        </Box>
                        <Box>
                            <Typography className={classes.textsize} variant="subtitle1" component="h2">
                                Already have an account?<Link to="/signin" className={classes.LinkDeco1}>Sign in</Link>
                            </Typography>
                        </Box>

                    </Grid>

                </Grid>
            </form>
        </>
    )
}

export default SignUpForm
