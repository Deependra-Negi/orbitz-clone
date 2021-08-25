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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100vw",
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
  
  btn: {
    color: "#fffff",
    textTransform: "none",
    padding: "4px 16px",
    '&:hover': {
      color: "#0c7c73"
    }
  },
  
  moreTravels: {
    marginTop: "13px",
    marginLeft: "25px",
  },
  dropdown: {
    marginTop: "12px",
  },
  hoverEffect: {
    display: "flex",
    cursor: "pointer",
    '&:hover': {
      color: "#0c7c73"
    }
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.headerBg}>
              <Toolbar className={classes.navSpacing}>
                  <div style={{display:'flex'}}>
                    <div className={classes.logo}>
                        <img src={logo} alt="Orbitz"  />
                    </div>
                    {isMobile ?
                    <div></div> : (<div className={classes.hoverEffect} >
                <Typography className={classes.moreTravels}>More travel </Typography> 
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
              <Button color="inherit" className={classes.btn}>
                Español
              </Button>
              <Button color="inherit" className={classes.btn}>
                List your property
              </Button>
              <Button color="inherit" className={classes.btn}>
                Support
              </Button>
              <Button color="inherit" className={classes.btn}>
                Trips
              </Button>
              <Button color="inherit" className={classes.btn}>
                Sign in
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
