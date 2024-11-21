import { Divider } from "@mui/material";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
const Topmarketer=({ gapTopsmall,mountlyTop,receiptTop,topmarketerAmount,topmarketerBalance,topmarketerPrice,topmarketerEarned,lighttopmrketer,havytopmarketer,gaptopmarketer})=>{
    return(
        <div className="col-md-6 col-lg-4">
        <div style={{ borderRadius: "1rem" }} className="mb-3 card ">
            <div className="card-header-tab card-header-tab-animation card-header">
                <div className="card-header-title">
                    <i className="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                    <h1 className="fs-2">Topmarketer</h1>
                </div>
                <ul className="nav">
                    <li className="nav-item"><h3 className="text-danger">{topmarketerBalance}$</h3></li>
                </ul>
            </div>
            <div className="card-body">
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="tabs-eg-77">
                        <div>
                            <div className="scrollbar-container px-4">
                                <ul className="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="widget-content">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left">
                                                    <h4 className="widget-heading">Havyness</h4>
                                                </div>
                                                <div className="widget-content-right">
                                                    <h4 className="widget-heading">Lightness</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="widget-content p-0">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left">
                                                    <h4 className="text-muted"><FaRegArrowAltCircleDown style={{ marginLeft: "3rem" }} className="fs-2" /></h4>
                                                </div>
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-right">
                                                        <h4 className="text-muted"><FaRegArrowAltCircleDown style={{ marginRight: "3rem" }} className="fs-2" /></h4>
                                                    </div>
                                                </div>
                                            </div >
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="widget-content p-0">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content">
                                                    <h4 className="widget-heading text-success">{havytopmarketer} $</h4>
                                                </div>
                                                <div className="widget-content-right">
                                                    <div className="font-size-xlg">
                                                        <h4 className="widget-heading text-danger">{lighttopmrketer} $</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <Divider textAlign="center">Gap To Next Lot</Divider>
                                    <li className="list-group-item">
                                        <div className="widget-content p-0">
                                            <div className="widget-content-wrapper">
                                            <div className="widget-content-left p-2">
                                                    <h4 className="widget-heading fs-4">Lightness</h4>
                                                </div>
                                                <div className="widget-content-right">
                                                    <div className="font-size-xlg">
                                                        <h4 className="widget-heading text-danger">{gapTopsmall}$</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <Divider textAlign="center" variant="fullWidth" sx={{bgcolor:"black"}}></Divider>
                                    <li className="list-group-item">
                                        <div className="widget-content p-0 text-center">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left">
                                                    <h4 className="text-muted">Lot Price</h4>
                                                </div>
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-right">
                                                        <h4 className="text-muted">{topmarketerPrice} $</h4>
                                                    </div>
                                                </div>
                                            </div >
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="widget-content p-0 text-center">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left">
                                                    <h4 className="text-muted">Lot Amount</h4>
                                                </div>
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-right">
                                                        <h4 className="text-muted">{topmarketerAmount}</h4>
                                                    </div>
                                                </div>
                                            </div >
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                            <div className="widget-content p-0 text-center">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left">
                                                        <h4 className="text-muted">Lots Earned</h4>
                                                    </div>
                                                    <div className="widget-content-wrapper">
                                                        <div className="widget-content-right">
                                                            <h4 className="text-muted">{topmarketerEarned}</h4>
                                                        </div>
                                                    </div>
                                                </div >
                                            </div>
                                        </li>
                                    <li className="list-group-item">
                                        <div className="widget-content p-0 text-center">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left">
                                                    <h4 className="text-muted">Mountly Income</h4>
                                                </div>
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-right">
                                                        <h4 className="text-muted">{mountlyTop} $</h4>
                                                    </div>
                                                </div>
                                            </div >
                                        </div>
                                        <div className="widget-content-wrapper text-center mt-4">
                                            <h5 className="widget-heading">All</h5>
                                            <h5 className="widget-subheading">Receipt totals</h5>
                                            <div className="widget-content-right">
                                                <h5 className="widget-numbers text-focus">${receiptTop}</h5>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Topmarketer;