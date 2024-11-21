import React, { useState } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async"
import "./index.css"
import { Divider } from "@mui/material";
import { IoDiamondOutline } from "react-icons/io5";
import { IoDiamond } from "react-icons/io5";
import { GiGoldBar } from "react-icons/gi";
import Fab from '@mui/material/Fab';
import { GrSend } from "react-icons/gr";
import { useMetamask } from '../ConnectWallet/Usemetamask';
import { Contract_abi, Contract_address, USDT_abi, USDT_address } from "./abis"

const Signup = () => {

    const [web3, setWeb3] = useState(null);
    const [packageNo, setSelectedPackage] = useState(0);
    const [referralUid, setReferralId] = useState('');
    const { web3Instance } = useMetamask();

    const handlePackageSelection = (value) => {
        setSelectedPackage(value);
    };
    const handleReferralInput = (event) => {
        setReferralId(event.target.value);
    };

    const handleBuy = async () => {
        if (window.ethereum) {
            setWeb3(web3Instance);
            try {

                //  USER ADDRESS
                var accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

                // Request account access if needed
                await window.ethereum.request({ method: 'eth_requestAccounts' });

                const safebox = new web3.eth.Contract(JSON.parse(Contract_abi), Contract_address);
                const tether = new web3.eth.Contract(JSON.parse(USDT_abi), USDT_address);

                //  CALL APPROVE 
                await tether.methods.approve(Contract_address, 300 * (10 ** 8)).send({ from: accounts[0] }).then(console.log);
                console.log('approve function called successfully');

                //  CALL SAFEBOXES FOR BUY
                safebox.methods['registerUser(uint48,uint8)'](1111, 0).send({ from: accounts[0] }).on('error', function (error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                    console.log(error);
                    console.log(receipt);
                });

                // event listener for account change
                window.ethereum.on("accountsChanged", function () {
                    console.log("test2");
                });

                // event listener for chain change
                window.ethereum.on("chainChanged", function () {
                    console.log("test3");
                });

                // event listener for wallet connect
                window.ethereum.on("connect", function () {
                    console.log("test4");
                });

            } catch (error) {
                console.error("oops", error);
            }
        } else {
            console.log('install metamask');
        }

    }

    return (

        <div className="containe-fluid parent">
            <div className="container">
                <HelmetProvider>
                    <Helmet><title >SAFEBOXES | REGESTER</title></Helmet>
                    <form className="row plans" >
                        <Divider className="text-white fs-5 mb-4"><h3>Registe Form</h3></Divider>
                        <div className="col-12">
                            <Divider textAlign="left" className="text-white"><h5>Select Package</h5></Divider>
                            <div className="pkges">
                                <label className="plan basic-plan gr-bronz" htmlFor="basic">
                                    <input defaultChecked type="radio" name="plan" id="basic" value={0} onChange={() => handlePackageSelection(5000000000)} />
                                    <div className="plan-content">
                                        <div className="plan-details">
                                            <h4>25 $</h4>
                                        </div>
                                    </div>
                                </label>
                                <label className="plan basic-plan gr-silver" htmlFor="basicc">
                                    <input defaultChecked type="radio" name="plan" id="basicc" value={1} onChange={() => handlePackageSelection(1)} />
                                    <div className="plan-content">
                                        <GiGoldBar className="ml-2" style={{ fontSize: "5rem", opacity: "40%" }} />
                                        <div className="plan-details">
                                            <h4>50 $</h4>
                                            <p>Silver Package</p>
                                        </div>
                                    </div>
                                </label>
                                <label className="plan basic-plan gr-gold" htmlFor="GOLD">
                                    <input defaultChecked type="radio" name="plan" id="GOLD" value={2} onChange={() => handlePackageSelection(2)} />
                                    <div className="plan-content">
                                        <GiGoldBar className="ml-2" style={{ fontSize: "5rem", opacity: "60%" }} />
                                        <div className="plan-details">
                                            <h4>100 $</h4>
                                            <p>Golden Package</p>
                                        </div>
                                    </div>
                                </label>
                                <label className="plan basic-plan gr-diamond" htmlFor="DIAMOND">
                                    <input defaultChecked type="radio" name="plan" id="DIAMOND" value={3} onChange={() => handlePackageSelection(3)} />
                                    <div className="plan-content">
                                        <IoDiamondOutline className="ml-2" style={{ fontSize: "5rem", opacity: "30%" }} />
                                        <div className="plan-details">
                                            <h4>200 $</h4>
                                            <p>Diamond Package</p>
                                        </div>
                                    </div>
                                </label>
                                <label className="plan basic-plan gr-D-black" htmlFor="DIAMONDblack">
                                    <input defaultChecked type="radio" name="plan" id="DIAMONDblack" value={4} onChange={() => handlePackageSelection(4)} />
                                    <div className="plan-content">
                                        <IoDiamond className="ml-2" style={{ fontSize: "5rem" }} />
                                        <div className="plan-details">
                                            <h4>500 $</h4>
                                            <p>Black Diamond Package</p>
                                        </div>
                                    </div>
                                </label>
                                <label className="input-box plan basic-plan plan">
                                    <Divider textAlign="left" className="text-white mb-4"><h5>Register</h5></Divider>
                                    <input type="text" required placeholder="Enter Refral Id" onChange={handleReferralInput} />
                                    <Fab onClick={handleBuy} className="mt-4 mb-2" variant="extended" color="primary"><GrSend className='fs-2 mr-2' /><h5 className='mt-2'>REGISTER</h5></Fab>
                                </label>
                            </div>
                        </div>
                    </form>
                </HelmetProvider >
            </div>
        </div>
    )
};
export default Signup;
