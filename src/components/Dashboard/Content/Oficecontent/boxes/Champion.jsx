import { Divider } from "@mui/material";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
const Champion = ({ gapTenk, gaptoNextLot, remind3k, state, mountlyCampion, receiptchampion, ChampionAmount, ChampionPrice, ChampionBalance, championEarned, lightchampion, allhand, tenlevel }) => {
    return (
        <div className="col-md-6 col-lg-4">
            <div style={{ borderRadius: "1rem" }} className="mb-3 card ">
                <div className="card-header-tab card-header-tab-animation card-header">
                    <div className="card-header-title">
                        <i className="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                        <h1 className="fs-2">Champion</h1>
                    </div>
                    <ul className="nav">
                        <li className="nav-item"><h3 className="text-danger">{ChampionBalance}$</h3></li>
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
                                                        <h4 className="widget-heading">Total</h4>
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
                                                        {state === 2 ? <h4 className="widget-heading text-success"> {allhand} $</h4> : state === 3 ? <h4 className="widget-heading text-muted">{allhand} $</h4> : <h4 className="widget-heading text-success">{allhand} $</h4>}
                                                    </div>
                                                    <div className="widget-content-right">
                                                        <div className="font-size-xlg">
                                                            {state === 2 ? <h4 className="widget-heading text-danger">{lightchampion} $</h4> : state === 3 ? <h4 className="widget-heading text-muted">{lightchampion} $</h4> : <h4 className="widget-heading text-danger">{lightchampion} $</h4>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <Divider textAlign="center">State</Divider>
                                        <li className="list-group-item">
                                            <div className="widget-content p-0">
                                                <div style={{ height: "100%" }} class="alert alert-success alert-dismissible  fade show text-center" role="alert">
                                                    <button type="button" class="close" aria-label="Close">
                                                        <span className="text-primary" aria-hidden="true"><i class="bi bi-broadcast"></i> </span>
                                                    </button>
                                                    {state === 0 ? null : state === 1 ? null : state === 2 ? <p className="text-muted ml-4"><i class="bi bi-check2-all text-success"></i> State Activated !</p> : state === 3 ? <p className="text-muted ml-4"><i class="bi bi-exclamation-triangle-fill text-danger mr-2"></i>State D`activated !</p> : null}
                                                </div>
                                            </div>
                                        </li>
                                        <Divider textAlign="center" variant="fullWidth" >Gap To Next Lot</Divider>
                                        <li className="list-group-item">
                                            <div className="widget-content p-0">
                                                <div className="widget-content-wrapper p-2">
                                                    <div className="widget-content-left">
                                                        <h4 className="widget-heading fs-4">Lightness</h4>
                                                    </div>
                                                    <div className="widget-content-right">
                                                        <h4 className="widget-heading text-muted">{remind3k} $</h4>
                                                    </div>
                                                </div>
                                                <div className="widget-content-wrapper p-2">
                                                    <div className="widget-content-left">
                                                        <h4 className="widget-heading fs-4">Gap 10 lvl</h4>
                                                    </div>
                                                    <div className="widget-content-right">
                                                        {state > 2 ? <h4 className="widget-heading text-muted">{gaptoNextLot} $</h4> : <h4 style={{ color: "silver" }} className="widget-heading">{gaptoNextLot} $</h4>}
                                                    </div>
                                                </div>
                                                <div className="widget-content-wrapper p-2">
                                                    <div className="widget-content-left">
                                                        <h4 className="widget-heading fs-4">Gap 10k</h4>
                                                    </div>
                                                    <div className="widget-content-right">
                                                        {state < 3 ? <h4 className="widget-heading text-muted">{gapTenk} $</h4> : <h4 style={{ color: "silver" }} className="widget-heading">{gapTenk} $</h4>}
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <Divider textAlign="center" variant="fullWidth" sx={{ bgcolor: "black" }}></Divider>
                                        <li className="list-group-item">
                                            <div className="widget-content p-0 text-center">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left">
                                                        <h4 className="text-muted fs-4">Sales 10 LvL:</h4>
                                                    </div>
                                                    <div className="widget-content-wrapper">
                                                        <div className="widget-content-right">
                                                            <h5 className="text-muted">{tenlevel} $</h5>
                                                        </div>
                                                    </div>
                                                </div >
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="widget-content p-0 text-center">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left">
                                                        <h4 className="text-muted">Lot Price</h4>
                                                    </div>
                                                    <div className="widget-content-wrapper">
                                                        <div className="widget-content-right">
                                                            <h4 className="text-muted">{ChampionPrice} $</h4>
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
                                                            <h4 className="text-muted">{ChampionAmount}</h4>
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
                                                            <h4 className="text-muted">{championEarned}</h4>
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
                                                            <h4 className="text-muted">{mountlyCampion} $</h4>
                                                        </div>
                                                    </div>
                                                </div >
                                            </div>
                                            <div className="widget-content-wrapper text-center mt-4">
                                                <h5 className="widget-heading">All</h5>
                                                <h5 className="widget-subheading">Receipt totals</h5>
                                                <div className="widget-content-right">
                                                    <h5 className="widget-numbers text-focus">${receiptchampion}</h5>
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
export default Champion;