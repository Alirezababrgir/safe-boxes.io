const TITTLE3LINKS = ({payment}) => {
    return (
        <>
            <div className="col-12 col-md-12 col-xl-12">
                <div className="card mb-3 widget-content bg-midnight-bloom">
                    <div className="widget-content-wrapper text-white">
                        <div className="widget-content-left">
                            <h3 className="widget-heading">Your Payment</h3>
                            <div className="widget-subheading glowing-txt">Last End Expenses</div>
                        </div>
                        <div className="widget-content-right glowing-txt">
                            <div className="widget-numbers text-white ml-4"><span>{payment}$</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TITTLE3LINKS;