import { Box, Grid, TextField, Button, Typography, Container, Checkbox, Modal, Fade, Paper } from '@material-ui/core'
import React, { useState } from 'react';
import GoogleLogin from "react-google-login";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { useStyles } from '../SignUp/SignupMake';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router';
import axios from 'axios'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, setuserName } from '../../../Redux/Auth/action';
import {v4 as uuid} from "uuid"

const SignInForm = () => {
    const [open, setOpen] = React.useState(false);
   

    const init = {
       
        email: "",
        password: "",
        showPassword: false,
        id: uuid()
    }
    const [formdata, setformdata] = useState(init);
    const history = useHistory()
    // const [status, setstatus] = useState(false);

    // const [disable, setdisable] = useState(true);
    const { isLoading, isAuth
    } = useSelector((state) => state.auth)

    console.log(isLoading, isAuth)
    const dispatch = useDispatch()

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
 


    const handleonChangeinput = (e) => {
     
        const { name, value, type, checked } = e.target
        setformdata({ ...formdata, [name]: type === "checkbox" ? checked : value })
    }
    const handleonSubmit = (event) => {
        event.preventDefault()
        console.log(formdata)
        axios.get('https://orbitz-heroku-data.herokuapp.com/users').then(function (response) {
            let allusers = response.data;
            let status = false
            console.log(allusers);
            allusers.forEach((el) => {
                if (el.email === formdata.email && el.password === formdata.password) {
                    status = true;
                   
                }
            });
            if (status) {

              
                axios
                    .post('https://orbitz-heroku-data.herokuapp.com/login', { ...formdata })
                    .then(function (response) { });
                // alert("Login Successful Welcome to Dashboard")
                let token = formdata.id
             
                dispatch(loginSuccess({token}))
                history.push("/")
            } else {
                
                handleOpen()
             
            }
           
        });



    }

    const handleback = () => {
        history.push("/")
    }

   
    const responseGoogle = (res) => {

        let data = { ...res.profileObj, events: {} };

        let token = data.googleId
        let username = data.name
        dispatch(loginSuccess({ token }))
        dispatch(setuserName({ username }))
     
    
        history.push('/');
  
    };

   



   


        const handleClickShowPassword = () => {

            setformdata({ ...formdata, showPassword: !formdata.showPassword });
        };

        const handleMouseDownPassword = (event) => {
            event.preventDefault();
        };
        const classes = useStyles()
    
    const paperSub = { display: "flex", justifyContent: "space-around", alignItems: "center" }
    const LinkDec = { color: "#0090BA", textDecoration: "none" }
    const signLink = { color: "#0090BA" }
    // if (isAuth) {
    //     return <Redirect to="/"/>
    // } 
    return (
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

                    <Grid className={classes.gridItem} item xl={6} xs={12} >
                        <Container className={classes.Container}>
                            <h2>Welcome back! Sign in with</h2>
                            <Link  className={classes.LinkDeco} >
                                <Box className={classes.Box1}>
                                   
                                    <Box className={classes.Box2}>
                                      
                                        <GoogleLogin className={classes.google}
                                        
                                            clientId="1041538525274-ir3pldh2s7m3rhr86gut482ra9h15dcs.apps.googleusercontent.com"
                                            onSuccess={responseGoogle}
                                            // onFailure={responseGoogle1}
                                            // isSignedIn={true}
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
                                    <Box className={classes.Box2}>
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
                    <Grid className={classes.gridItem} xl={6} xs={12}>
                        <h2>Or sign in with email</h2>
                      
                        <Box className={classes.Box}>

                            <TextField onChange={handleonChangeinput} required value={formdata.email} name="email" className={classes.TextField} type="email" id="outlined-basic" label="email address" variant="outlined" />

                        </Box>
                        <Box className={classes.Box}>

                            <TextField className={classes.TextField} required value={formdata.password} id="outlined-basic" label="password" variant="outlined"
                                type={formdata.showPassword ? 'text' : 'password'}

                                onChange={handleonChangeinput} name="password"

                                InputProps={{
                                    
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
                           
                            <Box className={classes.Boxsign}>
                            <Box>
                                <FormControlLabel
                                        control={<Checkbox required onChange={handleonChangeinput}  color="primary" name="checkedA" />}
                                    label="  Keep me signed in"
                                />
                              
                            </Box>
                                <Link className={classes.LinkForgot} to="/forgot">
                                    <Box >
                                        <Typography className={classes.ForgotTopo}>Forgot password?</Typography>
                                
                                    </Box>
                                </Link>
                            </Box>

                        </Box>

                        <Box>
                            <Typography className={classes.textsize} variant="subtitle1" component="h2">
                                By signing in, I agree to the <Link style={LinkDec} className={classes.LinkDeco1}>Orbitz Rewards Terms and Conditions.</Link>
                              
                            </Typography>
                        </Box>
                        <Box className={classes.Box}>
                            <Button className={classes.Button} type="submit" variant="contained" color="secondary" >
                                <Typography className={classes.SinIn}>Sign in</Typography>
                            </Button>

                        </Box>
                        <Box>
                            <Typography className={classes.textsize} variant="subtitle1" component="h2">
                                Not a member?<Link to="/signup" style={signLink} className={classes.LinkDeco1}>Create an account</Link>
                               
                            </Typography>
                        </Box>

                    </Grid>

                </Grid>
            </form>

            <Modal 
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.Modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                // BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Paper className={classes.paper}>
                        <div className={classes.subModal} style={paperSub}>
                            <h2 style={{color:"white"}} >!opps:warning</h2>
                            <Button variant="contained" color="inherit" className={classes.X} onClick={handleClose}>X</Button>
                        </div>
                        <div className={classes.subModal1}>

                        <p  >Please Fill Valid Credentials</p>
                        </div>
                        <Button variant="contained"
                            color="primary"  onClick={handleClose}>OK</Button>
                    </Paper>
                </Fade>
            </Modal>


       



        </>
    )

                        }

export default SignInForm
