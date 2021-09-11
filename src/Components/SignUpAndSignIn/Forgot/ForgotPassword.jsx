import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { Box, Button, Fade, Grid, IconButton, Modal, Paper, TextField, Typography } from '@material-ui/core';
import { useStyles } from './ForgotMake';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from 'axios'

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("000")
    const [allData, setAllData] = useState([])
    const [open, setOpen] = useState(false);


    const classes = useStyles()
    const history = useHistory()
    const handleback = () => {
        history.push("/")
    }
    useEffect(() => {
        getData()
    }, [])

    const showModal = () => {
        setOpen(false);
        history.push("/signin")
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const getData = async () => {
        let { data } = await axios.get("https://orbitz-heroku-data.herokuapp.com/users")
        setAllData(data)

    }

    const handleOnclick = (e) => {
        e.preventDefault()
        handleOpen()
        let flag = false
        for (let i = 0; i < allData.length; i++) {


            if (allData[i].email === email) {
                flag = true
                setPassword(allData[i].password)

            }


        }
        if (flag) {




        } else {


            history.push("/signup")
        }



    }

    const submodel = { display: "flex", justifyContent: "space-around", alignItems: "center" }
    const subhandleclose = { height: "25px", width: "25px", borderRadius: "10%", background: "#C51162", color: "white", border: "none" }
    const LinkSub = { color: "#0090BA", textDecoration: "none" }

    return (
        <>
            <div>
                <AppBar className={classes.Navbar} position="fixed">
                    <Toolbar>
                        <IconButton className={classes.IconColor}>
                            <ArrowBackIcon className={classes.Arrowback} onClick={handleback} />
                        </IconButton>

                    </Toolbar>
                </AppBar>
            </div>

            <form onSubmit={handleOnclick} className={classes.root}>

                <Grid className={classes.Biggrid} container spacing={3}>


                    <Grid className={classes.gridItem} item xs={12}>
                        <h2>Reset your password</h2>
                        <p>Enter your email, and we’ll send you a link to reset your password.</p>
                        <Box className={classes.Box}>

                            <TextField required onChange={(e) => setEmail(e.target.value)} className={classes.textField} name="email" type="email" id="outlined-basic" label="Email address" variant="outlined" />

                        </Box>

                        <Box className={classes.buttonMargin}>
                            <Button
                                className={classes.button} type="submit" variant="contained" color="secondary" >
                                <Typography className={classes.sendReset}>Send Reset link</Typography>
                            </Button>

                        </Box>
                        <Box className={classes.Box}>
                            <Typography className={classes.textmargin} variant="subtitle1" component="h2">
                                Not a member?<Link to="/signup" style={LinkSub} className={classes.LinkDeco1}>Create an account</Link>

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

                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Paper className={classes.paper}>
                        <div className={classes.subModal} style={submodel}>
                            <h2 className={classes.texth2} >Your Password Retrive</h2>

                            <button onClick={handleClose} style={subhandleclose}>X</button>
                        </div>
                        <div className={classes.subModal1}>

                            <h3 className={classes.texth1}  >{`Password: - ${password}`}</h3>
                        </div>
                        <div className={classes.subModel}>
                            <Button variant="contained"
                                color="primary" onClick={showModal}>

                                <Typography style={classes.Ok}>OK</Typography>
                            </Button>
                        </div>

                    </Paper>
                </Fade>
            </Modal>




        </>
    )
}

export default ForgotPassword
