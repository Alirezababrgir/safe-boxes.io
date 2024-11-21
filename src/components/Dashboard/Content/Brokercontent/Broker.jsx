import { Helmet, HelmetProvider } from 'react-helmet-async';
import Forbox from "./4box/4box";
import { DrawerHeader } from "../../Sidebar/Drawerheader";
import Web3 from "web3";
import { usePostTokenMutation, useCheckTokenMutation, useRefreshTokenMutation } from "../../../../api/apiSlice";
import Loading from "../../../../Loading/Loading";
import { Fab } from "@mui/material";
import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react';

const Broker = () => {
    const [invalidToken, setinvalidToken] = useState()
    const [cookie, setCookie] = useCookies(['token'])
    const [PostToken, { isLoading }] = usePostTokenMutation();
    const [CheckToken, { isLoading: loadingchecktoken }] = useCheckTokenMutation();
    const [RefreshToken] = useRefreshTokenMutation();


    useEffect(() => {
        //scroll top
        if (!window.scrollTo(0, 0)) {
            window.scrollTo(0, 0)
        }
        const checktoken = async () => {
            //chech token
            console.log(cookie.token)
            const checkedToken = await CheckToken({ token: cookie.token })
            setinvalidToken(checkedToken.data.result)
            console.log(checkedToken.data)
            const expireToken = checkedToken.data.remained_seconds
            console.log(`expire token:${expireToken}`)
            //refresh token
            if (expireToken < 600) {
                const refreshToken = await RefreshToken({ token: cookie.token })
                console.log(`refreshed token ${refreshToken.data}`)
            } 
        }
        checktoken();

    }, [CheckToken,RefreshToken,cookie.token])




    const HandleSign = async () => {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(window.ethereum);

            //SIGNATURE
            const signature = await web3.eth.personal.sign("Safeboxes", accounts[0], '')
            console.log(signature)


            //SEND SIGNATURE
            const res = await PostToken(
                {
                    address: accounts[0],
                    signature: signature
                }

            )
            setCookie('token', res.data.token, { path: '/',sameSite:'none' })
            console.log(cookie.token)
            console.log(res.data.token)
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <>
            <HelmetProvider>
                <Helmet><title>DASHBOARD | OFFICE</title></Helmet>
                <DrawerHeader />
                    {cookie.token && invalidToken === true ? <Forbox /> : isLoading || loadingchecktoken ? <Loading /> : <div className="container text-center justify-content-center" style={{ height: "100dvh"}}><Fab style={{marginTop:"40vh"}} onClick={HandleSign} variant="extended" color="primary"><h4 className='mt-2'>Connect to Broker</h4></Fab></div>}
            </HelmetProvider>
        </>
    )
}
export default Broker;