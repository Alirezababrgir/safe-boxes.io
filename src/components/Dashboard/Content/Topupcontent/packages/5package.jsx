import { Fab, Divider } from "@mui/material";
import { IoDiamondOutline } from "react-icons/io5";
import { GiGoldBar } from "react-icons/gi";
const FIVEPACKAGES = ({ handlePackageSelection, icon, buttonColor, handleTopup, packageNo }) => {
    return (
        <>
            <div className="row plans" >
                <Divider className="text-white fs-5 mb-4"><h3>TopUp</h3></Divider>
                <div className="col-12">
                    <div className="pkges">
                        <label className="plan basic-plan gr-bronz" htmlFor="basic">
                            <input checked={packageNo === 0} type="radio" name="plan" id="basic" value={"0"} onClick={handlePackageSelection} />
                            <div class="card gr-bronz text-center plan-content packagecards">
                                <div>
                                    <h2 className='slide-left mt-1'>25$</h2>
                                    <h5 className="text-focus-in"> Income limit: 250$<br />
                                        Trade Profit :%10
                                    </h5>
                                </div>
                                <div class="ico-cards  scale-in-center ">
                                    <i class="bi bi-speedometer"></i>
                                </div>
                            </div>
                        </label>
                        <label className="plan basic-plan gr-silver" htmlFor="basicc">
                            <input checked={packageNo === 1} type="radio" name="plan" id="basicc" value={"1"} onClick={handlePackageSelection} />
                            <div className="card plan-content gr-silver text-center packagecards">
                                <div>
                                    <h2 className='slide-left mt-1'>50$</h2>
                                    <h5 className="text-focus-in"> Income limit: 500$<br />
                                        Trade Profit :%25
                                    </h5>
                                </div>
                                <div class="ico-cards  scale-in-center ">
                                    <i class="bi bi-speedometer"></i>
                                </div>
                            </div>
                        </label>
                        <label className="plan basic-plan gr-gold" htmlFor="GOLD">
                            <input checked={packageNo === 2} type="radio" name="plan" id="GOLD" value={"2"} onClick={handlePackageSelection} />
                            <div className="card plan-content gr-gold text-center packagecards">
                                <div>
                                    <h2 className='slide-left mt-1'>100$</h2>
                                    <h5 className="text-focus-in"> Income limit: 1000$<br />
                                        Trade Profit :%60
                                    </h5>
                                </div>
                                <div class="ico-cards  scale-in-center ">
                                    <i><GiGoldBar /></i>
                                </div>
                            </div>
                        </label>
                        <label className="plan basic-plan gr-diamond" htmlFor="DIAMOND">
                            <input checked={packageNo === 3} type="radio" name="plan" id="DIAMOND" value={"3"} onClick={handlePackageSelection} />
                            <div className="card plan-content gr-diamond text-center packagecards">
                                <div>
                                    <h2 className='slide-left mt-1'>200$</h2>
                                    <h5 className="text-focus-in"> Income limit: 2000$<br />
                                        Trade Profit :%150
                                    </h5>
                                </div>
                                <div class="ico-cards  scale-in-center ">
                                    <i><IoDiamondOutline /></i>
                                </div>
                            </div>
                        </label>
                        <label className="input-box plan basic-plan plan">
                            <Fab onClick={handleTopup} className="mt-4 mb-2" variant="extended" color={buttonColor}>{icon}<h5 className='mt-2'>TOPUP</h5></Fab>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FIVEPACKAGES;