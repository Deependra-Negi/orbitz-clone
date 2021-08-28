import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SendIcon from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles(() => ({
  paper: {
    position: "absolute",
    width: "400px",
    right: "2rem",
    bottom: "0",
    borderRadius:'5%',
    height: "600px",
 
  },

  bot: {
    position: "absolute",
    
    padding: "1rem",
    bottom: "5px",
      right: "2rem",
      display: 'flex',
      background: '#fff',
      borderRadius:"20%"
    
    },
    option: {
        display: 'inline-block',
        border: '1px solid grey',
        borderRadius: '10px',
        padding: '0.5rem',
        margin:'0.2rem'
    },
    header: {
        backgroundColor: 'blue',
        display:"flex",
        justifyContent: "space-between",
                  padding:'1rem'
    },
    question: {
        backgroundColor: 'lightgreen',
        margin:'1rem'
    }
}));

const HelpBoat = () => {
  const [isModal, setIsModal] = useState(false);
  const [help, setHelp] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    setTimeout(() => {
      setHelp(true);
    }, 1000);
  }, []);
  const time = new Date().toLocaleTimeString();

  return (
    <>
      {help ? (
        <Box>
          <Box className={classes.bot} onClick={() => setIsModal(!isModal)}>
            <QuestionAnswerIcon />
            <Typography>Help</Typography>
          </Box>

          <Modal open={isModal} onClose={() => setIsModal(!isModal)}>
            <Paper className={classes.paper}>
              <Box>
                <Box className={classes.header}>
                  <Typography paddingRight="2rem" variant="h6">
                    Chat with virtual Agent
                  </Typography>
                  <CloseIcon onClick={() => setIsModal(!isModal)} />
                </Box>
                <Box>
                  <Typography align="center" variant="body1">
                    The very begining
                  </Typography>
                  <Typography align="center" variant="body1">
                    Today
                  </Typography>
                  <Typography align="center">{time}</Typography>
                </Box>
                <Typography variant="h6">
                  Virtual Agent joined conversation
                </Typography>
                <Box>
                  <Box>
                    <Paper className={classes.question}>
                      Hi, I'm your Virtual Travel Agent. 👋 I'm a bot who can
                      help you change your booking, redeem airline credit, and
                      more.
                    </Paper>
                    <Paper className={classes.question}>
                      What would you like to do?
                    </Paper>
                  </Box>
                </Box>
                <Box></Box>
                <Box>
                  <Box className={classes.option}>
                    <Typography>Cancel Booking</Typography>
                  </Box>
                  <Box className={classes.option}>
                    <Typography>Change booking</Typography>
                  </Box>
                  <Box className={classes.option}>
                    <Typography>Check refund status</Typography>
                  </Box>
                  <Box className={classes.option}>
                    <Typography>Use Airline Creding</Typography>
                  </Box>
                  <Box className={classes.option}>
                    <Typography>Do something else</Typography>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  marginTop="4rem"
                >
                  <Box>
                    <AttachFileIcon />
                  </Box>
                  <Box>
                    <TextField label="Your Message..." variant="outlined" />
                  </Box>
                  <Box>
                    <SendIcon />
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Modal>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default HelpBoat;
