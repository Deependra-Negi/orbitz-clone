import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    Card: {
        width: "100%",
        marginTop: "30px",
        border: "none",
        boxShadow:"none"
  },
    Bolder: {
        fontWeight: "bolder",
        marginTop: 10
    },
    HeadMarginTop: {
        marginTop:10
    },
    HeadMargin: {
        marginLeft: 10,
        fontWeight:"bold"
    },
    HeadMargin1: {
        marginLeft: 20,
        fontWeight:"bold"
    },
    SubHeadMargin: {
        margin:"5px 6px"
    },
    BigBox: {
        display: "flex",
        alignItems:"center"
   },
   
   OuterBox: {
       height: "30px",
       width: "100%",
       background: "#f5f5f5"
   }
    ,
    SmallBox: { paddingTop: "20px", paddingBottom: "30px" }








}))