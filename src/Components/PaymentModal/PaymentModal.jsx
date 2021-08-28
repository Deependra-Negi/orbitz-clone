import { Box, Button, Divider, makeStyles, Modal, Typography } from "@material-ui/core";
import { useState } from "react";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { useHistory } from "react-router-dom";

export function PaymentModal() {
    const [pay, setPay] = useState(false)
    const history = useHistory();
    const handleClose = () => {
        setPay(false);
    }
    const useStyles = makeStyles({
        modal: {
            width: "630px",
            height: "490px",
            backgroundColor: "white",
            position: "absolute",
            top: "10%",
            right: "30%"
        },
        paymentOptionsDiv: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "5px",
            padding: "7px",
            height: "150px"
        },
        btn: {
            color: "white",
            backgroundColor: "rgb(200,50,89)",
            width: "150px",
            height: "43px",
            border: "0px",
            borderRadius: "3px",
            cursor: "pointer",
            fontSize: "17px"
        },
        h5: {
            fontWeight: 400,
            fontSize: "10px",
            margin: "5px"
        },
        h3: {
            margin: "5px"
        },
        amountDivP: {
            display: "flex",
            flexDirection: "column",
        },
        alignRight: {
            textAlign: "right",
            margin: "1px",
            fontSize: "13px"
        },
        info: {
            display: "flex",
            alignItems: "center",
        }
    });
    const classes = useStyles();
    return (
        <div>
            <Modal onClose={() => setPay(false)} open={pay}>
                <Box className={useStyles().modal}>
                    <div className={classes.modalContainer}>
                        <div style={{ padding: "18px" }}>
                            Your Payment options
                        </div>
                        <Divider />
                        <div className={classes.info}>
                            <div>
                                <VerifiedUserIcon size="large" style={{ marginLeft: "10px" }} />
                            </div>
                            <div style={{ margin: "10px 15px" }}>
                                <h4 style={{ fontSize: "15px", margin: "1px" }}>Fully Refundable</h4>
                                <h5 style={{ fontSize: "10px", margin: "1px", fontWeight: "400" }}>You can change or cancel this stay if plans change. Because flexibility matters.</h5>
                            </div>
                        </div>
                        <div className={classes.paymentOptionsDiv}>
                            <div>
                                <h3 className={classes.h3}>Pay Now</h3>
                                <h5 className={classes.h5}>We will process your payment in your local currency</h5>
                            </div>
                            <div >
                                <h3 style={{ fontSize: "25px" }} className={classes.alignRight}>₹ 5000</h3>
                                <p className={classes.alignRight}>per night</p>
                                <p style={{ fontWeight: "700" }} className={classes.alignRight}>₹ 7310 total</p>
                                <p className={classes.alignRight}>includes taxes and fees</p>
                                <button onClick={() => history.push("/payment")} style={{ color: "white" }} variant="contained" color="secondary" className={classes.btn}>Pay now</button>
                            </div>
                        </div>
                        <div className={classes.paymentOptionsDiv}>
                            <div>
                                <h3 className={classes.h3}>Pay when you stay</h3>
                                <h5 className={classes.h5}>You will not be charged untill your stay</h5>
                                <h5 className={classes.h5}>Pay the property directly in their local currency</h5>
                            </div>
                            <div >
                                <h3 style={{ fontSize: "25px" }} className={classes.alignRight}>₹ 5000</h3>
                                <p className={classes.alignRight}>per night</p>
                                <p style={{ fontWeight: "700" }} className={classes.alignRight}>₹ 7310 total</p>
                                <p className={classes.alignRight}>includes taxes and fees</p>
                                <button className={classes.btn}>Pay at property</button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
            <button className={classes.btn} onClick={() => setPay(true)}>Reserve</button>
        </div>
    )
}