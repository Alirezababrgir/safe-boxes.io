import CopyTrading from "../../../assets/banners/COPYTRADE.jpg"
import { NavLink } from "react-router-dom"
import { Helmet, HelmetProvider } from "react-helmet-async"

const CopyTrade = () => {
    return (
        <div style={{ height: "100dvh", width: "100%",margin:"auto" }} className="container-fluid  texture">
            <HelmetProvider>
                <Helmet><title>SAFEBOXES | COPYTRADING</title></Helmet>
                <div class="container py-4b readcard">
                    
                    <article class="postcard dark red mt-4">
                        <a class="postcard__img_link" href="#">
                            <img class="postcard__img" src={CopyTrading} alt="Image Title" />
                        </a>
                        <div class="postcard__text" >
                            <h4 className="text-white">What Is Copy Treading ?</h4>
                            <div class="postcard__bar mb-4"></div>
                            <div class="postcard__subtitle small">

                            </div>
                            <div class="postcard__preview-txt">
                                "Although Forex is a global market recognized as a free financial market, most countries have provided their citizens with the opportunity to participate. However, individuals who succeed and profit in this market typically possess experience, training, suitable trading strategies, and proper risk management.
                                It's essential to note that Forex trading can still involve high risks, with many trades resulting in losses. Trading in specialized markets like Forex requires factors such as experience, education, trading strategies, trading psychology, risk management, and market conditions.
                                Today, reputable copy trading platforms enable individuals to collaborate with experienced professionals in this field. People can keep their capital secure, determining trade amounts, risk margins, having momentary access to their capital, and profits, without entrusting their funds to others, through secure broker accounts and facilities.
                                Throughout this process, no person or company has access to individuals' capital, and trading occurs solely based on the settings individuals have determined for their profits, losses, and trades in their accounts."
                            </div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item play red p-2">
                                    <NavLink to={"/"} href="#"><h4>ok</h4></NavLink>
                                </li>
                            </ul>
                        </div>
                    </article>
                </div>
            </HelmetProvider>
        </div>

    )
}
export default CopyTrade;