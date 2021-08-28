import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 100,


    },
    box: {
        marginTop: 80,
        width:"50%",
 
        margin: "auto"
    },
    Biggrid: {
        justifyContent: "center",
    
    },
    gridItem: {

     
        maxWidth: 400,
        padding: " 0 1%",
        margin:"auto",
      


    },
    Navbar: {
        maxWidth: "100%",
        background: "#FFFFFF",
        maxHeight: 57,
        display: "flex",

    
    },
    buttonMargin: {
        marginTop: 20,
        
    },
    textField: {
        width: "100%",
      
        
    },
    button: {
        width: "100%",
        background: "#CF4B6D",
        height: 50
    },
    textmargin: {
        marginTop:15
    },

    paper: {
        width: "30%",
        margin:"40px auto"
    },
    subModel: {
        display:"flex",
       padding:"10px",
        justifyContent: "center",
        color:"white"
    }









}))