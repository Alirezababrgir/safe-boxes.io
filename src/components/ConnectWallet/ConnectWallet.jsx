import { useNavigate } from 'react-router-dom';
import { ConnectWallet } from "@thirdweb-dev/react";
import { Contract_abi, Contract_address } from '../../services/abis';
import { useEffect } from 'react';
import Web3 from 'web3';

const ConnectMetamaskButton = () => {

    const web3 = new Web3(window.ethereum)

    const navigate = useNavigate()

    useEffect(() => {
        const Handlecheckmember = async () => {
            try {
                // change network
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x89' }], // chainId must be in hexadecimal numbers
                });
                const safebox = new web3.eth.Contract(JSON.parse(Contract_abi), Contract_address);
                const amIMember = await web3.eth.getAccounts().then(account => safebox.methods.amIMember().call({ "from": String(account) }))
                if (amIMember._isMember) {
                    console.log('wellcome to Syber Office! :)', amIMember._isMember)
                    navigate("/dashboard")
                } else {
                    navigate("/signup")
                }
            } catch (error) {
                console.log(error)
            }
        }
        Handlecheckmember()
    }, [navigate,web3.eth]);

    const connect = async () => {

        // change network
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x89' }], // chainId must be in hexadecimal numbers
        });
        const safebox = new web3.eth.Contract(JSON.parse(Contract_abi), Contract_address);
        const amIMember = await web3.eth.getAccounts().then(account => safebox.methods.amIMember().call({ "from": String(account) }))
        if (amIMember._isMember) {
            console.log('wellcome to Syber Office! :)', amIMember._isMember)
            navigate("/dashboard")
        } else {
            navigate("/signup")
        }
    }

    return (
        <div className='d-flex justify-content-center align-item-center' style={{ height: "100dvh", width: "100%" }}>
            <div style={{ margin: "auto" }}>
                <div className='text-center' style={{ margin: "0 auto" }}>
                    <ConnectWallet
                        onConnect={connect}
                        welcomeScreen={{
                            title: "Wellcome To Safeboxes"
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ConnectMetamaskButton;
