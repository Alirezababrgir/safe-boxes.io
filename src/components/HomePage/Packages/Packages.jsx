import ScrollAnimation from 'react-animate-on-scroll';
import { PiCurrencyDollarSimpleDuotone } from "react-icons/pi";

const Packages = () => {
    return (
        <>
            <div style={{ marginTop: "40px" }} className=" container">
                <div className="row text-center">
                    <ScrollAnimation animateIn="fadeIn">
                        <h2 className="mb-2 text-muted">Packages</h2>
                    </ScrollAnimation>
                </div>
            </div>
            <div class="cardcontainer text-center">
                <div class="box">
                    <span></span>
                    <div class="content p-2">
                        <ScrollAnimation animateIn="fadeIn" >
                            <h2 className="text-muted">25<PiCurrencyDollarSimpleDuotone /></h2>
                            <h3 className="text-muted"> Income limit: 250$<br />
                                Trade Profit :%10
                            </h3>
                        </ScrollAnimation>
                    </div>
                </div>
                <div class="box">
                    <span></span>
                    <div class="content p-2">
                        <ScrollAnimation animateIn="fadeIn" >
                            <h2 className="text-muted">50<PiCurrencyDollarSimpleDuotone /></h2>
                            <h3 className="text-muted"> Income limit: 500$<br />
                                Trade Profit :%25
                            </h3>

                        </ScrollAnimation>
                    </div>
                </div>
                <div class="box">
                    <span></span>
                    <div class="content p-2">
                        <ScrollAnimation animateIn="fadeIn" >
                            <h2 className="text-muted">100<PiCurrencyDollarSimpleDuotone /></h2>
                            <h3 className="text-muted"> Income limit: 1000$<br />
                                Trade Profit :%60
                            </h3>
                        </ScrollAnimation>
                    </div>
                </div>
                <div class="box">
                    <span></span>
                    <div class="content p-2">
                        <ScrollAnimation animateIn="fadeIn" >
                            <h2 className="text-muted">200<PiCurrencyDollarSimpleDuotone /></h2>
                            <h3 className="text-muted"> Income limit: 2000$<br />
                                Trade Profit :%150
                            </h3>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Packages;