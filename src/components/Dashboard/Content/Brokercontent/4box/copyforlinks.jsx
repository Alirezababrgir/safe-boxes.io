import { useCookies } from "react-cookie"
import { useEffect, useState } from "react"
import { usePostBrokerInfoMutation } from "../../../../../api/apiSlice"
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const Copyforlink = () => {

    const [cookie] = useCookies(['token'])
    const [PostBrokerInfo] = usePostBrokerInfoMutation()
    const [link1, setlink1] = useState()
    const [link2, setlink2] = useState()
    const [link3, setlink3] = useState()
    const [link4, setlink4] = useState()
    const [copy1, setcopy1] = useState("copy link1")
    const [copy2, setcopy2] = useState("copy link2")
    const [copy3, setcopy3] = useState("copy link3")
    const [copy4, setcopy4] = useState("copy link4")

    const handleCopy1 = () => {
        setcopy1("copied!")
        setcopy2("copy link2")
        setcopy3("copy link3")
        setcopy4("copy link4")
    }
    const handleCopy2 = () => {
        setcopy2("copied!")
        setcopy1("copy link1")
        setcopy3("copy link3")
        setcopy4("copy link4")
    }
    const handleCopy3 = () => {
        setcopy3("copied!")
        setcopy1("copy link1")
        setcopy2("copy link2")
        setcopy4("copy link4")
    }
    const handleCopy4 = () => {
        setcopy4("copied!")
        setcopy1("copy link1")
        setcopy2("copy link2")
        setcopy3("copy link3")
    }

    useEffect(() => {
        const getinfo = async () => {

            const infobroker = await PostBrokerInfo({ token: cookie.token })
            console.log(infobroker.data)
            setlink1(infobroker.data.link1)
            setlink2(infobroker.data.link2)
            setlink3(infobroker.data.link3)
            setlink4(infobroker.data.link4)


        }
        getinfo()
    }, [PostBrokerInfo, cookie.token])



    return (
        <div class="container">
            <header class="header mt-2">
                <h3 id="title" class="text-center text-white">Reffral Links</h3>
            </header>
            <div class="form-wrap ">
                <form id="survey-form">
                    <div class="row">
                        <div class="col-md-6">
                            <label id="number-label" for="number"><small>{link1 ? link1 : <span style={{ color: "orange" }}>d`active</span>}</small></label>
                            <CopyToClipboard text={link1}>
                                <button disabled={!link1} type="button" id="submit" class="btnform btn btn-success btn-block" onClick={handleCopy1}>{copy1}</button>
                            </CopyToClipboard>
                        </div>
                        <div class="col-md-6">
                            <label id="number-label" for="number"><small>{link2 ? link2 : <span style={{ color: "orange" }}>d`active</span>}</small></label>
                            <CopyToClipboard text={link2}>
                                <button disabled={!link2} type="button" id="submit" class="btnform btn btn-success btn-block" onClick={handleCopy2}>{copy2}</button>
                            </CopyToClipboard>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <label id="number-label" for="number"><small>{link3 ? link3 : <span style={{ color: "orange" }}>d`active</span>}</small></label>
                            <CopyToClipboard text={link3}>
                                <button disabled={!link3} type="button" id="submit" class="btnform btn btn-success btn-block" onClick={handleCopy3}>{copy3}</button>
                            </CopyToClipboard>
                        </div>
                        <div class="col-md-6">
                            <label id="number-label" for="number"><small>{link4 ? link4 : <span style={{ color: "orange" }}>d`active</span>}</small></label>
                            <CopyToClipboard text={link4}>
                                <button disabled={!link4} type="button" id="submit" class="btnform btn btn-success btn-block" onClick={handleCopy4}>{copy4}</button>
                            </CopyToClipboard>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
