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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //width: "100vw",
    margin: 0,
    padding: 0
  },
  
  navSpacing: {
    maxWidth: "78rem",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignSelf:"center"
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
    marginLeft:"20px",
      [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
      marginTop:"15px"
    },
  },
    
  headerOptions: {
      display: "flex",
      //flex: 1,
      justifyContent: "space-evenly",
      color: "#fffff"
  },
  
  white: {
    color: "#fff  ",
    textTransform: "none",
    padding: "4px 16px",
    fontSize: "0.875rem",
    //color: theme.palette.common.white,
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
  
}));

const Navbar = () => {
  const classes = useStyles();
  const { isAuth } = useSelector((state) => state.auth)
  
  const dispatch = useDispatch()
  const handleLogout = () => {
    if (isAuth) {

      dispatch(logoutdonefunc())
      saveData("token", "")
    }
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const history = useHistory();
  const handleHome = () => {
    history.push("/");
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.headerBg}>
              <Toolbar className={classes.navSpacing}>
                  <div style={{display:'flex'}}>
                    <div className={classes.logo}>
                      <img style={{ cursor: "pointer" }} onClick={handleHome} src={logo} alt="Orbitz"  />
                    </div>
                            {isMobile ?
                            <div></div> : (<div className={classes.hoverEffect} >
                        <Typography className={classes.moreTravels}>More travel</Typography> 
                <ExpandMoreRoundedIcon className={classes.dropdown}/></div>)}
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
              <Button style={{color:"red"}}>
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
                <Link style={{textDecoration:"none"}} to="/signin">
                <Button onClick={handleLogout} className={classes.btn}>
                <Typography className={classes.white} variant="h6"> 
                        {isAuth ? "SIGNOUT" : "SIGNIN"}
                  </Typography>
                  </Button>
                </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
