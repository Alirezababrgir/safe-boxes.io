import { useCookies } from "react-cookie"
import { useEffect, useState } from "react"
import { useReffralInfoMutation } from "../../../../../api/apiSlice"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { TbArrowsJoin2 } from "react-icons/tb";

export const Copytradelink = () => {

    const [cookie] = useCookies(['token'])
    const [PostBrokerInfo] = useReffralInfoMutation()
    const [link1, setlink1] = useState()
    const [copy, setcopy] = useState("copy")


    useEffect(() => {
        const getReffralinfo = async () => {

            const infobroker = await PostBrokerInfo({ token: cookie.token })
            console.log(infobroker.data)
            setlink1(infobroker.data.link1)
        }
        getReffralinfo()
    }, [PostBrokerInfo, cookie.token])

    const handleCopy = () => {
        setcopy("copied!")
    }

    return (
        <div class="container">
            <header class="header mt-2">
                <h3 id="title" class="text-center text-white">Copy Trade Link</h3>
            </header>
            <div class="form-wrap ">
                <div class="row">
                    <div class="col col-6">
                        <CopyToClipboard text={link1}>
                            <button disabled={!link1} type="button" id="submit" class="btnform btn btn-success btn-block" onClick={handleCopy}>{copy}</button>
                        </CopyToClipboard>
                    </div>
                    <div class="col col-6">
                        <a href={link1} target="_blank" rel="noreferrer" >
                            <button disabled={!link1} type="button" id="submit" class="btnform btn btn-primary btn-block">open <TbArrowsJoin2 /></button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
