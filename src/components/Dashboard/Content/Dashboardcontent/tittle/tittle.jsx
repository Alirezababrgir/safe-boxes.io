const TITTLE = ({ Wellcome }) => {
    return (
        <div className="app-page-title">
            <div className="page-title-wrapper">
                <div className="page-title-heading">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col mt-2">
                                <h5 className=" text-white glowing-txt ">WELLCOME !</h5>
                                <div className=" page-title-subheading text-white">
                                    {Wellcome}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TITTLE;