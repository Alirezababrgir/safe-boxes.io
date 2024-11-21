import TimerTEN from "./Timers/Timer10";
import icon1 from "../../../../../assets/banners/10.png"
const BOX_10 = ({ topmarketerAmount, topmarketerBalance, topmarketerPrice }) => {
    return (
        <div className="col-md-6 col-lg-6 pb-3">
            {/* Copy the content below until next comment */}
            <div className="card  card-custom bg-white border-white border-0">
                <div className="card-img-binary" />
                <div className="card-custom-avatar">
                    <img className="img-fluid" src={icon1} alt="Avatar" />
                </div>
                <div className="card-body">
                    <TimerTEN />
                    <h4 className="fs-6 text-muted">Deatils</h4>
                    <div>
                        <div className="scrollbar-container px-4">
                            <ul className="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left">
                                                <h4 className="widget-heading">Balance</h4>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="font-size-xlg text-muted">
                                                    <h4>{topmarketerBalance} $</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left">
                                                <h4 className="widget-heading"> Lot Amount</h4>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="font-size-xlg text-muted">
                                                    <h4>{topmarketerAmount}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left">
                                                <h4 className="widget-heading">Lot Price </h4>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="font-size-xlg text-muted">
                                                    <h4>{topmarketerPrice} $</h4>
                                                </div>
                                            </div>
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
export default BOX_10;