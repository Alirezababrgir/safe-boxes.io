import { useEffect, useState } from "react";
import Timerunilevel from "./Timers/Timerunilevel";
import Web3 from "web3";
import { Contract_abi, Contract_address } from '../../../../../services/abis'
import icon1 from "../../../../../assets/banners/40.png"
import { useNavigate } from "react-router-dom";

const BOX_40 = ({receipt}) => {

    //const [active, setactive] = ('')

    const [mlmpaymentsum, setmlmPaymentum] = useState();
    const [zeroValue, setzeroValue] = useState();
    const [timer, settimer] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        const MlmBlocking = async () => {
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
                if (amIMember) {
                    console.log('wellcome to Syber Office! :)')
                } else {
                    //  toast.error("You must register first !")
                    navigate("/signup")
                }

                //const timestamp = Date.now(); // This would be the timestamp you want to format
                // console.log(new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp));
                //GET PAYMENT SUM
                //const getpaymentsum = await safebox.methods.getMlmPaymentSum().call({ "from": accounts[0] });
                //setmlmPaymentum(String(getpaymentsum) / 1000000)


                //GET MLM BLOCKING STATE
                const mlm = await safebox.methods.getMyMlmBlockingState().call({ "from": accounts[0] });
                //console.log(mlm)
                setzeroValue(Number(mlm._blockState))
                //console.log(mlm._blockState)
                settimer((mlm._blockedTime))


            } catch (error) {

                console.log(error.data.message);

            }
        }
        MlmBlocking();
    }, [navigate])



    return (
        <div className="col-md-6 col-lg-6 pb-3">
            {/* Copy the content below until next comment */}
            <div className="card  card-custom bg-white border-white border-0">
                <div className="card-img-uni" />
                <div className="card-custom-avatar">
                    <img className="img-fluid" src={icon1} alt="Avatar" />
                </div>
                <div className="card-body">
                    <h4 className="fs-6 text-muted">Deatils</h4>
                    <div>
                        <div className="scrollbar-container px-4">
                            <ul className="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left">
                                                <h4 className="widget-heading">Total Payment</h4>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="font-size-xlg text-muted">
                                                    <h4>{mlmpaymentsum} $</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left">
                                                <h4 className="widget-heading">Receipt Total</h4>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="font-size-xlg text-muted">
                                                    <h4>{receipt} $</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="widget-content p-0">
                                        <div style={{ height: "100%" }} class="alert alert-primary alert-dismissible fade show" role="alert">
                                            <button type="button" class="close" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                            {zeroValue === 0 ? <p className="text-success fs-6"><h4 className="text-success"><i class="bi bi-broadcast mx-2 text-success"></i>ACTIVE ! </h4></p> :
                                                zeroValue > 0 && zeroValue === 1 ? <p className="text-danger fs-6"><h4 className="text-warning"><i class="bi bi-exclamation-triangle-fill text-danger mx-2"></i>WARNING ! </h4>: Earning MLM Commissions Will Be Locked Soon</p> :
                                                    zeroValue > 1 && zeroValue === 2 ? <p className="text-danger fs-6"><h4 className="text-danger"><i class="bi bi-exclamation-triangle-fill text-danger mx-2"></i>BLOCKED ! </h4>: Earning MLM Commissions Is Locked !</p> :
                                                        zeroValue > 2 && zeroValue === 3 ? <p className="text-success fs-6"><h4 className="text-success"><i class="bi bi-broadcast mx-2 text-success"></i>ACTIVE ! </h4></p> : <p className="text-success fs-6"><h4 className="text-success"><i class="bi bi-broadcast mx-2 text-success"></i>ACTIVE !! </h4></p>}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copy until here */}
        </div>
    )
}
export default BOX_40;

/*
BLOCKED 
SUCCESS
*/