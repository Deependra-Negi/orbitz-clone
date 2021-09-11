import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop:100,
       
       
    },
    Biggrid: {
    justifyContent:"center"
    },
    gridItem: {
        
    
       maxWidth:450,
        padding: " 0 1%",
        justifyContent:"center"
      
       
    },

    TextField: {
        width: "100%",
   
    },
    Button: {
        width: "100%",
        padding: "5 auto",
        background: "#CF4B6D",
        height: 50,
        borderRadius:0
    },
    Box: {
        marginTop: 10,
       

    },
    textsize: {
        fontSize: 13,
marginTop:10,
        width: "100%",
    },
    Container: {
        marginTop: 20
    },
    Box1: {
        display: "flex",
        border: "1px solid black",
        marginTop: 10,
        alignItems: "center",
        maxHeight: 48,
        justifyContent: "space-between"

    },
    Box2: {
        display: "flex",
        alignItems: "center",
        alignContent: "flex start",
        columnGap: 10,
 
        paddingLeft: 10,
 


    },
  
    Box3: {
        paddingRight: 10
    },
    Navbar: {
    maxWidth:"100%",
        background: "#FFFFFF",
        maxHeight: 70,
        padding:"5px",
        display: "flex",
        
    },
    IconColor: {
        color: "#3096A4",
       
      },
    LinkDeco: {
        textDecoration: "none",
     
      
    },
    LinkDeco1: {
        textDecoration: "none",
        color: "#3096A4"
      
    },
    ArrowForward: {
        
    },
    paper: {
       padding:"10px" 
    },

    Modal: {
        width: "30%",
        // background: "#F4F1F1",
        height: "20%",
        textAlign: "center",
        margin: "0 auto",
        color: "white",
        marginTop:"20px"
        
    },
    subModal: {
        background: "red",
        
    },
    subModal1: {
        background: "white",
        color: "red",
        padding:"10px"
    }
    ,
    CreateAccount: { color: "white", fontSize: "14px" },
    Boxsign: { display: "flex", justifyContent: "space-between", alignItems: "center" },
   
    X: { height: "30px" },
    SinIn: { color: "white", fontSize: "14px" },
    LinkForgot: { color: "#0090BA", textDecoration: "none" },
    ForgotTopo: { color: "#0090BA" }





}))