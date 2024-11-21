import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { Divider } from "@mui/material";
const Binary = ({receiptbinary,balance,lotprice,lotpamount,havy,light,Earned,dailyBinary}) => {
    return (
        <div className="col-md-6 col-lg-4">
            <div style={{ borderRadius: "1rem" }} className="mb-3 card ">
                <div className="card-header-tab card-header-tab-animation card-header">
                    <div className="card-header-title">
                        <i className="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                        <h1 className="fs-2">Binary</h1>
                    </div>
                    <ul className="nav">
                        <li className="nav-item"><h3 className="text-danger">{balance}$</h3></li>
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
                                                        <h4 className="widget-heading text-success">{havy} $</h4>
                                                    </div>

                                                    <div className="widget-content-right">
                                                        <div className="font-size-xlg">
                                                            <h4 className="widget-heading text-danger">{light} $</h4>
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
                                                            <h4 className="text-muted">{lotprice} $</h4>
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
                                                            <h4 className="text-muted">{lotpamount}</h4>
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
                                                            <h4 className="text-muted">{Earned}</h4>
                                                        </div>
                                                    </div>
                                                </div >
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="widget-content p-0 text-center">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left">
                                                        <h4 className="text-muted">Daily Income</h4>
                                                    </div>
                                                    <div className="widget-content-wrapper">
                                                        <div className="widget-content-right">
                                                            <h4 className="text-muted">{dailyBinary} $</h4>
                                                        </div>
                                                    </div>
                                                </div >
                                            </div>
                                            <div className="widget-content-wrapper text-center mt-4">
                                                <h5 className="widget-heading">All</h5>
                                                <h5 className="widget-subheading">Receipt Totals</h5>
                                                <div className="widget-content-right">
                                                    <h5 className="widget-numbers text-focus">${receiptbinary}</h5>
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
export default Binary;