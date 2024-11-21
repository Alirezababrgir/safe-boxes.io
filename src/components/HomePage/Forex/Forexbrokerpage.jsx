import Forexbrokerbanner from "../../../assets/banners/FOREXBROKER.jpg"
import { NavLink } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ForexBroker = () => {
    return (
        <div style={{ height: "100dvh", width: "100%" }} className="container-fluid  texture">
            <HelmetProvider>
                <Helmet><title>SAFEBOXES | FOREXBROKER</title></Helmet>
                <div class="container py-4b readcard">
                    <article class="postcard dark red mt-4">
                        <a class="postcard__img_link" href="#">
                            <img class="postcard__img" src={Forexbrokerbanner} alt="Image Title" />
                        </a>
                        <div class="postcard__text" >
                            <h4 class="postcard__title red"><a href="#">What Is Forex Broker ?</a></h4>
                            <div class="postcard__bar mb-4"></div>
                            <div class="postcard__subtitle small">
                            </div>
                            <div class="postcard__preview-txt">
                                In the forex market, brokers function as primary intermediaries. A forex broker, as a financial entity, enables individuals to participate in the global trading market and benefit from the advantages and opportunities it offers.
                                In simpler terms, just as local banks connect individuals to the banking system, brokers also facilitate this connection between traders and the forex market.
                                These brokers provide capital security and necessary facilities for conducting transactions by offering trading platforms. Acting as an essential and secure link between traders and the market, selecting a reputable broker with a proven track record and required licenses is a highly critical measure for ensuring the safety of investments.
                            </div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item play red">
                                    <NavLink to={"/"} href="#"><h4>ok</h4></NavLink>
                                </li>
                            </ul>
                        </div>
                    </article>
                </div >
            </HelmetProvider>
        </div >

    )
}
export default ForexBroker;