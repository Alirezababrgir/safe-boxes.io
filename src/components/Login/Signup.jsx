import React, { useState } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async"
import { Divider } from "@mui/material";
import { IoDiamondOutline, IoReloadOutline } from "react-icons/io5";
import { GiGoldBar } from "react-icons/gi";
import Fab from '@mui/material/Fab';
import { GrSend } from "react-icons/gr";
import { Contract_abi, Contract_address, USDT_abi, USDT_address } from "../../services/abis";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Circles } from 'react-loading-icons'
import Footer from '../HomePage/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import { useParams } from 'react-router-dom';

const Signup = () => {
    const { ID } = useParams('ID')
    const [icon, seticon] = useState(<GrSend className='fs-2 mr-2' />);
    const [buttonColor, setButtonColor] = useState('primary');
    const [packageNo, setSelectedPackage] = useState(0);
    const [referralUid, setReferralId] = useState(ID);
    const [approveValue, setapproveValue] = useState(25);

    const navigate = useNavigate();

    const handlePackageSelection = (event) => {
        setSelectedPackage(parseInt(event.target.value));
        if (parseInt(event.target.value) === 0) {
            setapproveValue(25)
        }
        if (parseInt(event.target.value) === 1) {
            setapproveValue(50)
        }
        if (parseInt(event.target.value) === 2) {
            setapproveValue(100)
        }
        if (parseInt(event.target.value) === 3) {
            setapproveValue(200)
        }
    };
    const handleReferralInput = (event) => {
        if (!event.target.value) {
            setReferralId(ID);
        } else {
            setReferralId(event.target.value);
        }

    };

    const handleBuy = async () => {
        if (window.ethereum) {
            try {
                // loading button
                seticon(<Circles style={{ height: "25px", width: "25px", marginRight: "5px" }} />);
                setButtonColor('success');

                // change network
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x89' }], // chainId must be in hexadecimal numbers
                });
                // polygon mainnet 0x89
                // polygon mumbai 0x13881
                console.log(referralUid)

                //CONNECT WALLET
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);

                const safebox = new web3.eth.Contract(JSON.parse(Contract_abi), Contract_address);
                const tether = new web3.eth.Contract(JSON.parse(USDT_abi), USDT_address);

                //  CALL APPROVE 
                await tether.methods.approve(Contract_address, approveValue * (10 ** 6)).send({ from: accounts[0] }).then(console.log)
                toast.success('approve function called successfully');

                //  CALL SAFEBOXES FOR BUY
                await safebox.methods['registerUser(uint48,uint8)'](referralUid, packageNo).send({ from: accounts[0] }, function (error) { console.error(error) })

                await navigate("/dashboard")
            } catch (error) {
                toast.error('Your purchase was unsuccessful!', error);
                console.log(error.message)
                setButtonColor('warning')
                seticon(<IoReloadOutline className='fs-2 mr-2' />)
            }
        } else {
            console.log('install Wallet');
        }

    }

    return (

        <div className="containe-fluid parent">
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div className="container">
                <HelmetProvider>
                    <Helmet><title >SAFEBOXES | REGESTER</title></Helmet>
                    <div className="row plans" >
                        <Divider className="text-white fs-5 mb-4"><h3>Register Form</h3></Divider>
                        <div className="col-12">
                            <form className="pkges">
                                <label className="plan basic-plan gr-bronz" htmlFor="basic">
                                    <input checked={packageNo === 0} type="radio" name="plan" id="basic" value={"0"} onClick={handlePackageSelection} />
                                    <div class="card gr-bronz text-center plan-content packagecards">
                                        <div>
                                            <h2 className='slide-left mt-2'>25$</h2>
                                            <h5 className="text-focus-in"> Income limit: 250$<br />
                                                Trade Profit :%10
                                            </h5>
                                        </div>
                                        <div class="ico-cards  scale-in-center ">
                                            <i class="bi bi-speedometer"></i>
                                        </div>
                                    </div>
                                </label>
                                <label className="plan basic-plan gr-silver" htmlFor="basicc">
                                    <input checked={packageNo === 1} type="radio" name="plan" id="basicc" value={"1"} onClick={handlePackageSelection} />
                                    <div class="card gr-silver text-center plan-content packagecards">
                                        <div>
                                            <h2 className='slide-left mt-2'>50$</h2>
                                            <h5 className="text-focus-in"> Income limit: 500$<br />
                                                Trade Profit :%25
                                            </h5>
                                        </div>
                                        <div class="ico-cards  scale-in-center ">
                                            <i class="bi bi-speedometer"></i>
                                        </div>
                                    </div>
                                </label>
                                <label className="plan basic-plan gr-gold" htmlFor="GOLD">
                                    <input checked={packageNo === 2} type="radio" name="plan" id="GOLD" value={"2"} onClick={handlePackageSelection} />
                                    <div class="card gr-gold text-center plan-content packagecards">
                                        <div>
                                            <h2 className='slide-left mt-2'>100$</h2>
                                            <h5 className="text-focus-in"> Income limit: 1000$<br />
                                                Trade Profit :%60
                                            </h5>
                                        </div>
                                        <div class="ico-cards  scale-in-center ">
                                            <i><GiGoldBar /></i>
                                        </div>
                                    </div>
                                </label>
                                <label className="plan basic-plan gr-diamond" htmlFor="DIAMOND">
                                    <input checked={packageNo === 3} type="radio" name="plan" id="DIAMOND" value={"3"} onClick={handlePackageSelection} />
                                    <div class="card gr-diamond text-center plan-content packagecards">
                                        <div>
                                            <h2 className='slide-left mt-2'>200$</h2>
                                            <h5 className="text-focus-in"> Income limit: 2000$<br />
                                                Trade Profit :%150
                                            </h5>
                                        </div>
                                        <div class="ico-cards  scale-in-center ">
                                            <i><IoDiamondOutline /></i>
                                        </div>
                                    </div>
                                </label>
                                <label className="input-box plan basic-plan plan">
                                    <input value={referralUid} type="text" placeholder="Enter Referral Id" onChange={handleReferralInput} required/>
                                    <Fab onClick={() => { navigate('/') }} className="mt-4 mb-2 mx-4" variant="extended" color="error"><i class="bi bi-x-circle fs-4 mr-2"></i><h5 className='mt-2'>CANCEL</h5></Fab>
                                    <Fab onClick={handleBuy} className="mt-4 mb-2" variant="extended" color={buttonColor}>{icon}<h5 className='mt-2'>REGISTER</h5></Fab>
                                </label>
                            </form>
                        </div>
                    </div>
                </HelmetProvider >
            </div >
            <Footer />
        </div >
    )
};
export default Signup;
