import ForexBanner from "../../../assets/banners/FOREX.jpg"
import ForexBroker from "../../../assets/banners/FOREXBROKER.jpg"
import CopyTrading from "../../../assets/banners/COPYTRADE.jpg"
import Robotimg from "../../../assets/banners/ROBOTTRADE.jpg"
import ScrollAnimation from 'react-animate-on-scroll';
import { NavLink } from "react-router-dom"

const Forex = () => {
    return (
        <section class="articles">
            <ScrollAnimation animateIn="fadeIn" >
                <article>
                    <div class="article-wrapper">
                        <figure>
                            <img src={ForexBanner} alt="forex" />
                        </figure>
                        <div class="article-body">
                            <h4 className="text-focus-in">What Is Forex ?</h4>
                            <p>
                                The Forex (foreign exchange market) , following the etablissemang of the flexible exchange rate system after the prominent Bretton Woods agreements in the 1970s, transformed into one of the world’s largest financial markets...
                            </p>
                            <NavLink to={"/forex"} href="#" class="read-more">
                                Read more <span class="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                </article>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">

                <article>
                    <div class="article-wrapper">
                        <figure>
                            <img src={ForexBroker} alt="" />
                        </figure>
                        <div class="article-body">
                            <h4 className="text-focus-in">What Is Forex Broker ?</h4>
                            <p>
                                In the forex market, brokers function as primary intermediaries. A forex broker, as a financial entity, enables individuals to participate in the global trading market and benefit from the advantages and opportunities it offers...
                            </p>
                            <NavLink to={"/forexbroker"} href="#" class="read-more">
                                Read more <span class="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                </article>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">

                <article>
                    <div class="article-wrapper">
                        <figure>
                            <img src={CopyTrading} alt="" />
                        </figure>
                        <div class="article-body">
                            <h4 className="text-focus-in">What Is CopyTrading ?</h4>
                            <p>
                                "Although Forex is a global market recognized as a free financial market, most countries have provided their citizens with the opportunity to participate. However, individuals who succeed and profit in this market ...
                            </p>
                            <NavLink to={"/copytrade"} href="#" class="read-more">
                                Read more <span class="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                </article>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" >

                <article>
                    <div class="article-wrapper">
                        <figure>
                            <img src={Robotimg} alt="" />
                        </figure>
                        <div class="article-body">
                            <h4 className="text-focus-in">Trading Assistant Robot ?</h4>
                            <p>
                                Artificial Intelligence has revolutionized the landscape of trading by providing systems capable of analyzing vast sets of data, recognizing patterns, and executing transactions with a level of precision and speed far beyond human capabilities...
                            </p>
                            <NavLink to={"/robotassistant"} href="#" class="read-more">
                                Read more <span class="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                </article>
            </ScrollAnimation>

        </section>
    )
}
export default Forex;