import { Helmet, HelmetProvider } from 'react-helmet-async';
import FIVEPACKAGES from "./packages/5package";
import { DrawerHeader } from '../../Sidebar/Drawerheader';
import Footer from "../Footer";
import { USDT_abi, USDT_address, Contract_abi, Contract_address } from "../../../../services/abis";
import { useState } from 'react';
import { IoReloadOutline } from "react-icons/io5";
import { GrSend } from "react-icons/gr";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Circles } from 'react-loading-icons'
import { FaArrowUpWideShort } from "react-icons/fa6";
import { useEffect } from 'react';
import Web3 from 'web3';

const Topup = () => {

    const [icon, seticon] = useState(<FaArrowUpWideShort className='fs-2 mr-2' />);
    const [buttonColor, setButtonColor] = useState('primary');
    const [packageNo, setSelectedPackage] = useState(0);
    const [approveValue, setapproveValue] = useState(25);

    const handlePackageSelection = (event) => {
        setSelectedPackage(parseInt(event.target.value));
        if (parseInt(event.target.value)===0) {
            setapproveValue(25)
        }
        if (parseInt(event.target.value)===1) {
            setapproveValue(50)
        }
        if (parseInt(event.target.value)===2) {
            setapproveValue(100)
        }
        if (parseInt(event.target.value)===3) {
            setapproveValue(200)
        }
        
    };

    useEffect(() => {
        //scroll top
        if (!window.scrollTo(0, 0)) {
            window.scrollTo(0, 0)
        }
    }, [])

    const handleTopup = async () => {
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



                //CONNECT WALLET
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);

                const safebox = new web3.eth.Contract(JSON.parse(Contract_abi), Contract_address);
                const tether = new web3.eth.Contract(JSON.parse(USDT_abi), USDT_address);

                //  CALL APPROVE 
                await tether.methods.approve(Contract_address, approveValue * (10 ** 6)).send({ from: accounts[0] }).then(console.log)
                toast.success('approve function called successfully');

                //CALL BUYPACKAGE 
                await safebox.methods.buyPckage(packageNo).send({ "from": accounts[0] }, function (error, result) {

                    if (error !== "undefined") {

                        console.log("error found");
                        alert(error)

                    }
                    else {

                        toast.success('successfull!', result)
                    }

                }
                );
                toast.success('successfull!')

                setButtonColor('primary');
                seticon(<GrSend className='fs-2 mr-2' />);

            } catch (error) {
                toast.error('Your purchase was unsuccessful!');
                console.log(error)
                setButtonColor('error')
                seticon(<IoReloadOutline className='fs-2 mr-2' />)
            }
        } else {
            console.log('install Wallet');
        }

    }


    return (
        <>
            <HelmetProvider>
                <Helmet><title>DASHBOARD | TOPUP</title></Helmet>
                <DrawerHeader />
                <div className="app-main">
                    <div className="container">
                        <div className="app-main__outer">
                            <div className="app-main__inner">
                                <div className="row">
                                    <FIVEPACKAGES packageNo={packageNo} handlePackageSelection={handlePackageSelection} handleTopup={handleTopup} icon={icon} buttonColor={buttonColor} />
                                    <ToastContainer position="bottom-center"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        theme="light" />
                                </div>
                                <div className="row">
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HelmetProvider >
        </>
    )
}
export default Topup;


/*zojaj


               const rpcProvider = 'https://rpc.ankr.com/polygon_mumbai'; // 'https://polygon-testnet.public.blastapi.io';
            const web3Provider = new Web3.providers.HttpProvider(rpcProvider);
            const web = new Web3(web3Provider);

            web.eth.getBlockNumber().then((result, error) => {
                console.log("Latest Ethereum Block is: ", result, error); // confirm that the HTTP RPC provider has been instantiated properly
            });
            alert(txHah)
            web.eth.handleRevert = true;
            web.eth.getTransaction(txHah).then(async (tx) => {
                if (tx.gasPrice) {
                    delete tx.maxPriorityFeePerGas;
                    delete tx.maxFeePerGas;
                }
                try {
                    let result = await web.eth.call(tx, tx.blockNumber);
                }
                catch (err) {
                    let errFlat = JSON.stringify(err);
                    let message = JSON.parse(errFlat);
                    let reason = message['reason'];
                    console.log(reason);
                    console.log(message);
                    console.log(errFlat)
                }

            });



                    });*/