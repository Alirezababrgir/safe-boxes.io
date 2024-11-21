import { Circles } from 'react-loading-icons'

const TITTLE3LINKS_OFFICE = ({ remindRecipt, tenLvL, allLvL }) => {
    return (
        <>
            <div class="container mt-2">
                <div class="row mt-2">
                    <div class="col-4 col-md-4 col-lg-4 column">
                        <div class="card packagecards gr-1">
                            <div class="glowing-txt">
                                <h3>Total Volume  <br />
                                    {allLvL?<span>{allLvL} $</span> :<Circles style={{ height: "25px", width: "25px", marginRight: "5px" }} />}

                                </h3>
                            </div>
                            <div class="ico-cards text-focus-in">
                                <i class="bi bi-speedometer"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 col-md-4 col-lg-4 column">
                        <div class="card packagecards gr-3">
                            <div class="glowing-txt">
                                <h3>Total 10 Level<br />
                                {tenLvL?<span>{tenLvL} $</span> :<Circles style={{ height: "25px", width: "25px", marginRight: "5px" }} />}
                                </h3>
                            </div>
                            <div class="ico-cards text-focus-in">
                                <i class="bi bi-list-ol"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 col-md-4 col-lg-4 column">
                        <div class="card packagecards  gr-2">
                            <div class="glowing-txt">
                                <h3>Income Limit <br />
                                {remindRecipt?<span>{remindRecipt} $</span> :<Circles style={{ height: "25px", width: "25px", marginRight: "5px" }} />}
                                </h3>
                            </div>
                            <div class="ico-cards text-focus-in">
                                <i class="bi bi-pie-chart-fill"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TITTLE3LINKS_OFFICE;


/*save last cards



<div className="col-6 col-md-6 col-xl-4">
<div className="card mb-3 widget-content bg-midnight-bloom ">
    <div className="widget-content-wrapper text-white">
        <div className="widget-content-left mr-4 d-none d-md-block">
            <img height={"60px"} src="https://img.icons8.com/?size=100&id=WLBXp1pKGqDe&format=png&color=FFFFFF" />
        </div>
        <div className="widget-content-left ">
            <h4 className="widget-heading"> Total Volume </h4>
            <div className="widget-subheading">Last year </div>
        </div>
        <div className="widget-content-right">
            <div className="widget-numbers text-warning ml-4"><span>1896</span></div>
        </div>
    </div>
</div>
</div>
<div className="col-6 col-xs-4 col-md-6 col-xl-4">
<div className="card mb-3 widget-content bg-midnight-bloom">
    <div className="widget-content-wrapper text-white">
        <div className="widget-content-left mr-4 d-none d-md-block">
            <img height={"60px"} src="https://img.icons8.com/?size=100&id=92zOGOmxGkWj&format=png&color=FFFFFF" />
        </div>
        <div className="widget-content-left">
            <h4 className="widget-heading">Total 10 Level</h4>
            <div className="widget-subheading">Total Clients Profit</div>
        </div>
        <div className="widget-content-right">
            <div className="widget-numbers text-warning ml-4"><span>$ 568</span></div>
        </div>
    </div>
</div>
</div>
<div className=" col-12 col-md-12 col-xl-4">
<div className="card mb-3 widget-content bg-midnight-bloom">
    <div className="widget-content-wrapper text-white">
        <div className="widget-content-left mr-4 d-none d-md-block">
            <img height={"60px"} src="https://img.icons8.com/?size=64&id=54784&format=png&color=FFFFFF" />
        </div>
        <div className="widget-content-left">
            <h4 className="widget-heading">Income Limit</h4>
            <div className="widget-subheading">Revenue streams</div>
        </div>
        <div className="widget-content-right">
            <div className="widget-numbers text-warning ml-4"><span>$14M</span></div>
        </div>
    </div>
</div>

</div>
*/