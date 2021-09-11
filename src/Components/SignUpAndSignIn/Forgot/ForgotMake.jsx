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
        maxHeight: 70,
        padding: "5px",
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
    },
    texth1: { textAlign: "center" }
    ,
    texth2: { color: "black" }
    ,
    sendReset: { color: "white", fontSize: "14px" },
    Ok: { color: "white" },
    Arrowback: { color: "#0090BA" }
    








}))