import React, { useState } from "react";
import { DrawerHeader } from "../../Sidebar/Drawerheader";
import TITTLE from './tittle/tittle';
import TITTLE3LINKS from './tittle/tittle3links';
import FOOTERE3LINKS from './footer/footer3link';
import Barchart from './footer/barchart';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { lazy } from 'react';
import Footer from '../Footer';
import { Contract_abi, Contract_address } from "../../../../services/abis";
import Web3 from 'web3';
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Linechart from "./footer/linechart"
/********Lazy Import Boxes********/
const BOX_40 = lazy(() => import('./Boxes/40%box'))
const BOX_30 = lazy(() => import('./Boxes/30%box'))
const BOX_10 = lazy(() => import('./Boxes/10%box'))
const BOX_10_SHN = lazy(() => import('./Boxes/shn10%box'))



const Homecontent = () => {
    //binary box
    const [Wellcome, setwWellcome] = useState('');
    const [balance, setbalance] = useState('');
    const [lotprice, setlotprice] = useState('');
    const [lotpamount, setlotamount] = useState('');
    //champion box
    const [ChampionBalance, setChampionBalance] = useState('');
    const [ChampionAmount, setChampionAmount] = useState('');
    const [ChampionPrice, setChampionPrice] = useState('');

    //TOPMARKETER box
    const [topmarketerBalance, settopmarketerBalance] = useState('');
    const [topmarketerAmount, settopmarketerAmount] = useState('');
    const [topmarketerPrice, settopmarketerPrice] = useState('');

    //MY BENEFIT
    const [payment, setpayment] = useState('');
    const [expireTime, setexpireTime] = useState('');

    //USERS COUNT
    const [allusers, setallusers] = useState('');

    //PAYMENT SUM
    const [paymentsum, setPaymentum] = useState()
    const [mlmReceiptSum, setmlmReceiptSum] = useState()
    const [poolReceiptSum, setpoolReceiptSum] = useState()


    const navigate = useNavigate()

    useEffect(() => {

        //scroll top
        if (!window.scrollTo(0, 0)) {
            window.scrollTo(0, 0)
        }

        const show = async () => {
            try {
                // change network
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x89' }], // chainId must be in hexadecimal numbers
                });
                // polygon mainnet 0x89
                // polygon mumbai 0x13881
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                const safebox = new web3.eth.Contract(JSON.parse(Contract_abi), Contract_address);

                //CHECKING MY !IMPORTANT
                const amIMember = await safebox.methods.amIMember().call({ "from": accounts[0] });
                console.log(amIMember)
                if (amIMember._isMember) {
                    console.log('wellcome to Syber Office! :)')
                } else {
                    toast.error("You must register first !")
                    navigate("/signup")
                }

                //GET MY DATA
                const getmyData = await safebox.methods.getMyData().call({ "from": accounts[0] });
                setwWellcome(getmyData[0]);

                //GET MY BENEFIT
                const getmybenefit = await safebox.methods.getMyBenefit().call({ "from": accounts[0] });
                setpayment(String(getmybenefit._payment) / 1000000)
                setexpireTime(Number(getmybenefit._inactiveTime))
                console.log(getmybenefit._inactiveTime)

                //GET USECOUNT
                const getusecount = await safebox.methods.getUsersCount().call({ "from": accounts[0] });
                //console.log(getusecount)
                setallusers(String(getusecount))


                //MY BINAY STATE
                const getMyBinaryState = await safebox.methods.getMyBinaryState().call({ "from": accounts[0] });
                //SET DATA BINARY BOX
                setbalance(String(getMyBinaryState._poolBalance) / 1000000)
                setlotprice(String(getMyBinaryState._lotPrice) / 1000000)
                setlotamount(String(getMyBinaryState._lotsAmount))
                //console.log(getMyBinaryState)


                //MY CHAMPION STATE
                const getMyBestState = await safebox.methods.getMyChampionState().call({ "from": accounts[0] });
                //SET DATA CHAMPION BOX
                setChampionBalance(String(getMyBestState._poolBalance) / 1000000)
                setChampionAmount(String(getMyBestState._lotsAmount))
                setChampionPrice(String(getMyBestState._lotPrice) / 1000000)
                //console.log(getMyBestState)

                //MY TOPMARKETER STATE
                const getMyTopMarketerState = await safebox.methods.getMyTopMarketerState().call({ "from": accounts[0] });
                console.log(getMyTopMarketerState)
                //SET DATA TOPMARKETER BOX
                settopmarketerBalance(String(getMyTopMarketerState._poolBalance) / 1000000)
                settopmarketerAmount(String(getMyTopMarketerState._lotsAmount))
                settopmarketerPrice(String(getMyTopMarketerState._lotPrice) / 1000000)



                //GET PAYMENT SUM
                const getpaymentsum = await safebox.methods.getPaymentsSum().call({ "from": accounts[0] });
                console.log(getpaymentsum)
                setPaymentum(String(getpaymentsum._paymentSum) / 1000000)
                setmlmReceiptSum(String(getpaymentsum._mlmReceiptSum) / 1000000)
                setpoolReceiptSum(String(getpaymentsum._poolReceiptSum) / 1000000)

                //GET MY BENEFIT
                //const getmybenefit = await safebox.methods.getPaymentsSum().call({ "from": accounts[0] });


            } catch (error) {
                console.error(error.data.message);
                toast.error(error.data.message)
            }

        };

        show();
    }, [navigate]);

    return (
        <>
            <HelmetProvider>
                <ToastContainer />
                <Helmet><title>HOME | DASHBOARD</title></Helmet>
                <DrawerHeader />
                <div className="app-main">
                    <div className="container">
                        <div className="app-main__outer">
                            <div className="app-main__inner">
                                <TITTLE Wellcome={Wellcome} />
                                <div className="row mb-4" id='dashboard'>
                                    <TITTLE3LINKS payment={payment} />
                                </div>
                                <div className="row mt-4 m-auto">
                                    <React.Suspense><BOX_40 /></React.Suspense>
                                    <React.Suspense><BOX_30 expireTime={expireTime} balance={balance} lotprice={lotprice} lotpamount={lotpamount} /></React.Suspense>
                                </div>
                                <div className="row m-auto">
                                    <React.Suspense><BOX_10  topmarketerAmount={topmarketerAmount} topmarketerBalance={topmarketerBalance} topmarketerPrice={topmarketerPrice} /></React.Suspense>
                                    <React.Suspense><BOX_10_SHN  ChampionBalance={ChampionBalance} ChampionAmount={ChampionAmount} ChampionPrice={ChampionPrice} /></React.Suspense>
                                </div>
                                <div className="row">
                                    <Barchart paymentsum={paymentsum} poolReceiptSum={poolReceiptSum} mlmReceiptSum={mlmReceiptSum} />
                                    <Linechart />
                                </div>
                                <div className="row">
                                    <FOOTERE3LINKS allusers={allusers} paymentsum={paymentsum} />
                                </div>
                            </div>
                            <div className="app-wrapper-footer">
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </HelmetProvider>
        </>
    )
}
export default Homecontent;
