import React, {useState,useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { Box, Button,  Grid, IconButton, TextField, Typography } from '@material-ui/core';
import { useStyles } from './ForgotMake';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from 'axios'

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [allData,setAllData] = useState([])
    const classes = useStyles()
    const history = useHistory()
    const handleback = () => {
        history.push("/")
    }
    useEffect(() => {
        getData()
    }, [])
    
    const getData = async () => {
        let { data } = await axios.get("http://localhost:3001/users")
        setAllData(data)

    }

    const handleOnclick =  (e) => {
        e.preventDefault()
        let flag = false
        for (let i = 0; i < allData.length; i++){
       
            
            if (allData[i].email === email) {
                flag = true
                alert(`User Password - ${allData[i].password}`)
                history.push("/signin")
            }
          
            
        }
        if (flag) {

        
        } else {
            alert("Change Your Password")
            history.push("/signup")
        }
    
        
    
    }

    // function CheckPassword(data, email) {
      
    //     return data
    //     // let flag = false
    //     // for (let i = 0; i < data.length; i++){
    //     //     if (data[i].email === email) {

    //     //         flag = true
    //     //     }
    //     //     if (flag) {
    //     //         console.log(data[i].password)
    //     //     }

    //     // }
       
        
    // }
    return (
        <>
        <div>
            <AppBar className={classes.Navbar} position="fixed">
                <Toolbar>
                    <IconButton className={classes.IconColor}>
                            <ArrowBackIcon style={{ color:"#0090BA"}} onClick={handleback} />
                    </IconButton>

                </Toolbar>
            </AppBar>
            </div>

            <form onSubmit={handleOnclick}  className={classes.root}>

                <Grid className={classes.Biggrid} container spacing={3}>

                   
                    <Grid className={classes.gridItem} item  xs={12}>
                        <h2>Reset your password</h2>
                        <p>Enter your email, and we’ll send you a link to reset your password.</p>
                        <Box className={classes.Box}>

                            <TextField required onChange={(e)=>setEmail(e.target.value)} className={classes.textField}  name="email"  type="email" id="outlined-basic" label="Email address" variant="outlined" />

                        </Box>
                      
                        <Box className={classes.buttonMargin}>
                            <Button
                                className={classes.button} type="submit" variant="contained" color="secondary" >Send Reset link</Button>

                        </Box>
                        <Box className={classes.Box}>
                            <Typography className={classes.textmargin} variant="subtitle1" component="h2">
                                Not a member?<Link to="/signup" style={{ color: "#0090BA" }} className={classes.LinkDeco1}>Create an account</Link>

                            </Typography>
                        </Box>

                    </Grid>

                </Grid>
            </form>
          
          

            </>
    )
}

export default ForgotPassword
