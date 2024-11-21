import { useCookies } from "react-cookie"
import { usePostBrokerInfoMutation, useRegisterBrokerIdMutation } from "../../../../../api/apiSlice"
import { useState } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CgDanger } from "react-icons/cg";
import { LuAlertTriangle } from "react-icons/lu";
import { useEffect } from "react";
import { BsCheckAll } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    boxShadow: 20,
    p: 2,
    overflow: "auto",
};

export const Sendforlink = () => {

    //modal state
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [valueinputCXID, setvalueInputCXID] = useState();
    const [valueinputREFFRAL, setvalueInputREFFRAL] = useState();
    const [valueinputTRADE, setvalueInputTRADE] = useState();
    const [cxid, setcxid] = useState();
    const [raecm, setraecm] = useState();
    const [taecm, settaecm] = useState();

    const [register, setRegister] = useState();
    const [checkmsg, setcheckmsg] = useState();

    const [cookie] = useCookies(['token'])
    const [RegisterBrokerId, { isLoading }] = useRegisterBrokerIdMutation();
    const [PostBrokerInfo] = usePostBrokerInfoMutation();


    const Handlechangecxid = async (event) => {
        setvalueInputCXID(event.target.value)
    }
    const Handlechangereffral = async (event) => {
        setvalueInputREFFRAL(event.target.value)
    }
    const Handlechangetrade = async (event) => {
        setvalueInputTRADE(event.target.value)
        console.log(event.target.value)
    }
    useEffect(() => {
        const getinfo = async () => {

            const infobroker = await PostBrokerInfo({ token: cookie.token })
            setcxid(infobroker.data.cx_id)
            setraecm(infobroker.data.ra_ecm)
            settaecm(infobroker.data.ta_ecm)
            console.log(infobroker.data.cx_id)

        }
        getinfo()
    }, [PostBrokerInfo, cookie.token])


    const Handlesubmitform = async (event) => {
        event.preventDefault();
        try {
            const res = await RegisterBrokerId({ token: cookie.token, cx_id: valueinputCXID, ra_ecm: valueinputREFFRAL, ta_ecm: valueinputTRADE })
            setRegister(res.data.result)
            setcheckmsg(res.data.message)
            console.log(res.data)

        } catch (error) {
            console.log(error)

        }


    }






    return (
        <div class="container">
            <header class="header">
                <h3 id="title" class="text-center text-white">Register Broker</h3>
            </header>
            <div class="form-wrap">
                <form className="p-3" id="survey-form " onSubmit={Handlesubmitform}>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label id="name-label" for="CXID">CXID</label>
                                <input value={valueinputCXID} type="text" name="CXID" id="CXID" placeholder={cxid ? cxid : "Enter your cxid"} class="form-control" required onChange={Handlechangecxid} />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label id="email-label" for="Reffral">Reffral Account ECN</label>
                                <input value={valueinputREFFRAL} type="text" name="Reffral" id="Reffral" placeholder={raecm ? raecm : "Enter your Reffral Account"} class="form-control" required onChange={Handlechangereffral} />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label id="email-label" for="Trading">Trading Account ECN</label>
                                <input value={valueinputTRADE} type="text" name="Trading" id="Trading" placeholder={taecm ? taecm : "Enter your Trading Account"} class="form-control" required onChange={Handlechangetrade} />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <div class="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" class="custom-control-input" name="no" value="no" id="no" required />
                                    <label class="custom-control-label fs-6 mb-2" for="no">i accept terms & conditions</label><CgDanger style={{ cursor: "pointer" }} className="fs-5 mt-1 mx-2" color="red" onClick={handleOpen} />
                                </div>
                            </div>
                        </div>
                        <button type="submit" id="submit" class="btnform btn btn-primary btn-block" disabled={cxid}>{cxid || register === true ? <span>Confirmed! <BsCheckAll /></span> : isLoading ? <span>sending...</span> : register === false ? <span>{checkmsg}</span> : <span>Confirm</span>}</button>
                    </div>
                </form>
            </div>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Terms & Conditions <LuAlertTriangle />
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2, overflowY: "scroll", maxHeight: "40dvh" }}>
                            Before entering the currency and stock markets, it's important to remember that trading currencies and other investment products involves speculative transactions and always carries significant risks. As a result of various financial fluctuations, you may not only significantly increase your capital but also lose a portion of it.
                            <br />
                            Therefore, our customers must ensure that they understand all potential consequences of such risks, being informed of all specifications, rules, and regulations governing the use of investment products, including international events that may lead to changes in underlying assets.
                            <br />
                            Customers are aware that there are specific risks and features that affect prices, exchange rates, and investment products. These risks include decreased liquidity, price changes, high volatility, and uncontrollable conditions.
                            <br />
                            Before opening an account with us, be sure to thoroughly read the user agreement as well as the principles and basic rules of financial markets. This disclosure document by Safeboxes presents the services under customer terms and conditions, offering protection against potential risks inherent in trading in financial markets. The customer must be aware of potential losses associated with these activities.
                            <br />
                            However, due to the wide range of possible scenarios, this document cannot disclose all inherent risks in trading in financial markets.
                            <br />- The customer assumes full responsibility for all risks, financial resources used, and selected settings.
                            <br />- We strongly recommend keeping the loss limit below 30% and also executing stop-loss orders to limit potential losses.
                            <br />- When conducting trading operations through the customer terminal, the customer must accept the financial loss risk that may result from the following:<IoIosArrowDown /><br />
                            <br /><span className="text-warning">a</span>: <i>Hardware, software, and internet connection failure of the customer;</i><br />
                            <br /><span className="text-warning">b</span>: <i>Improper performance of customer equipment;</i><br />
                            <br /><span className="text-warning">c</span>: <i>Incorrect settings in the customer terminal;</i><br />
                            <br /><span className="text-warning">d</span>: <i>Delayed customer terminal updates;</i><br />
                            <br /><span className="text-warning">e</span>: <i>Customer's unawareness of enforceable rules outlined in the MetaTrader user guide and help section.</i><br /><br />

                            Safeboxes bears no responsibility for damages incurred by the customer due to non-compliance with guidelines in the MetaTrader customer terminal user guide.
                            <br />
                            The customer must bear the risk of any financial loss resulting from not receiving notifications from the broker.
                            <br />
                            The customer is responsible for safeguarding received information from the company and assumes the risk of any financial loss resulting from unauthorized access by a third party to the customer's trading account.
                            <br />
                            Safeboxes has no responsibility for broker commitments to the customer.
                            <br />
                            Safeboxes has no financial or partnership relationship with brokers and solely utilizes broker platforms as entry gateways to the Forex market for trading purposes.
                            <br />
                            Safeboxes has no responsibility for deposit and withdrawal transactions from broker accounts.
                            <br />
                            Safeboxes has no responsibility for user identity verification with brokers.
                            <br />
                            If the customer intervenes in the trading process, including opening or closing trades or changing profit or loss limits, all responsibility lies with the customer.
                            <br />
                            If the user outside Safeboxes' purview accesses the trade copy, Safeboxes reserves the right to remove the user, and the user assumes responsibility for all open trades.
                            <br />
                            If the customer's connection to the trade copy panel is disproportionate to the purchased package, the connection will be severed, and the customer assumes responsibility for all open trades.
                            <br />
                            Safeboxes has no responsibility for customer financial management settings in the broker panel.
                            <br />
                            Any financial relationship, personal account, or member-to-member transaction is deemed illegal by Safeboxes, and the company accepts no responsibility for financial relationships between members and their transactions.

                            Considering market conditions, Safeboxes engages in buying and selling transactions; hence, the minimum and maximum potential profits or losses are unpredictable. By acknowledging market conditions, the user accepts these terms electronically.
                            <Button className="mt-2 mx-4" variant="contained" onClick={handleClose}>ok</Button>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
    )
}
