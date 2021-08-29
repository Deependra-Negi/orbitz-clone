import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WorkIcon from '@material-ui/icons/Work';
import SearchIcon from '@material-ui/icons/Search';
import logo from "../../img/orbitz_logo.png";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutdonefunc } from "../../Redux/Auth/action";
import { saveData } from "../../Utils/LocalStore/LocalData";
import { Link } from "react-router-dom";
import {  Fade, Modal, Paper } from "@material-ui/core";
import { useState } from "react";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: "hidden",

    margin: 0,
    padding: 0
  },

  navSpacing: {
    maxWidth: "78rem",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignSelf: "center"
  },

  headerBg: {
    backgroundColor: "#00253c",
    height: "70px"
  },

  menuButton: {
    marginRight: theme.spacing(0),
  },

  logo: {
    marginTop: "10px",
    marginLeft: "20px",
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
      marginTop: "15px"
    },
  },

  headerOptions: {
    display: "flex",

    justifyContent: "space-evenly",
    color: "#fffff"
  },

  white: {
    color: "#fff  ",
    textTransform: "none",
    padding: "4px 16px",
    fontSize: "0.875rem",
 
    '&:hover': {
      color: "#0c7c73"
    }
  },

  moreTravels: {
    color: "#fff  ",
    textTransform: "none",
    marginTop: "13px",
    marginLeft: "25px",
  },
  dropdown: {
    marginTop: "12px",
    color: "#fff  ",
  },
  hoverEffect: {
    display: "flex",
    cursor: "pointer",
    '&:hover': {
      color: "#0c7c73"
    }
  },

  paper: {
    width: "28%",
    margin: "50px 62.5%"
  },
  subModel: {
    display: "flex",
    padding: "10px",
    justifyContent: "center",
    color: "white"
  },
  Buttondiv: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
 
  },
  Button1: {
    width: "90%"
  }


}));

const Navbar = () => {
  const classes = useStyles();
  const { isAuth } = useSelector((state) => state.auth)
  let getdata = JSON.parse(localStorage.getItem("user")) || { username: "sign in" }

  let name = getdata.username?.toUpperCase()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const handleLogout = () => {
    if (isAuth) {

      dispatch(logoutdonefunc())
      saveData("token", "")
      saveData("user", { username: "admin" })
      
      handleHome()
   
    }
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const history = useHistory();
  const handleHome = () => {
    setOpen(false)
    history.push("/");
  }

  const showModal = () => {
    setOpen(false);
    history.push("/signup")
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    history.push("/signin")
  };
  const handleClose1 = () => {
    setOpen(false);
    // history.push("/signin")
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.headerBg}>
        <Toolbar className={classes.navSpacing}>
          <div style={{ display: 'flex' }}>
            <div className={classes.logo}>
              <img style={{ cursor: "pointer" }} onClick={handleHome} src={logo} alt="Orbitz" />
            </div>
            {isMobile ?
              <div></div> : (<div className={classes.hoverEffect} >
                <Typography className={classes.moreTravels}>More travel</Typography>
                <ExpandMoreRoundedIcon className={classes.dropdown} /></div>)}
          </div>

          {/* --------------------Mobile view------------------------- */}
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <SearchIcon />
              </IconButton>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <WorkIcon />
              </IconButton>

              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem>
                  Sign in
                </MenuItem>
                <MenuItem>
                  Sign up
                </MenuItem>
              </Menu>

            </>
          ) : (
            <div className={classes.headerOptions}>
              <Button style={{ color: "red" }}>
                <Typography className={classes.white} variant="h6"> Español</Typography>
              </Button>
              <Button color="inherit" className={classes.btn}>
                <Typography className={classes.white} variant="h6"> List your property</Typography>
              </Button>
              <Button color="inherit" className={classes.btn}>
                <Typography className={classes.white} variant="h6"> Support</Typography>
              </Button>
              <Button color="inherit" className={classes.btn}>
                <Typography className={classes.white} variant="h6"> Trips</Typography>
              </Button>
              <Link style={{ textDecoration: "none" }}>
                <Button onClick={handleOpen} className={classes.btn}>
                  <Typography className={classes.white} variant="h6">
                    {isAuth ? name : "Sign in"}
                  </Typography>
                </Button>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>

       <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.Modal}
        open={open}
        onClose={handleClose1}
        closeAfterTransition

        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.paper}>
            <div style={{padding:"15px"}}>
              <h3 style={{ textAlign: "center" }}>Members can access discounts, points and special features</h3>


            </div>
            <div>
              {isAuth?<div className={classes.Buttondiv}>
                <Button onClick={handleLogout} className={classes.Button1} variant="contained" color="secondary">
                  <Typography style={{ color: "white" }}>Log out</Typography>
                </Button>
              </div>
                :
              <div className={classes.Buttondiv}>
                <Button onClick={handleClose} className={classes.Button1} variant="contained" color="secondary">
                  <Typography style={{ color: "white" }}>sign in</Typography>
                </Button>
              </div>}
              <div onClick={showModal}>
            
                <h3 style={{ color: "#00A4BB", textAlign: "center",cursor:"pointer" }} >Create a free accout</h3>
              
              </div>
              <div>
                <ul style={{listStyle:"none"}}>
                  <li >List of favouties</li>
                  <li style={{ marginTop: "10px" }}>Loyalty Program</li>
                </ul>
                <ul style={{ borderTop: "1px solid black", listStyle: "none" }}>
                  <li style={{padding:"20px 0" }}>feedback</li>
                </ul>
              </div>
            </div>
            <div className={classes.subModal1}>


            </div>
        

          </Paper>
        </Fade>
      </Modal>
    </div>
  );
};

export default Navbar;
