import myfxbook from "../../../assets/banners/myfxbook.png"
const Explor = () => {

    return (
        <div className="container-fluid test2container p-4">
            <section className="test2">
                <div class="content">
                    <h1>Let's Trading History!</h1>
                    <p>
                        By using the "Explorer" button on Myfxbook, you can access and review trade history, statistics, and performance of your own trades as well as other traders. This feature allows you to analyze past trading activities, view various statistics, and learn from the experiences of others to improve your trading strategies. It is a useful tool for enhancing trading performance and gaining insights from other traders' experiences.
                    </p>
                    <a className="fs-4" href="https://www.myfxbook.com/members/Safeboxes/safeboxes/10819316/u2UgCSCTGIRN22wxEBVC" target="_blank" rel="noreferrer">Explorer</a>
                </div>

                <div class="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src={myfxbook} alt="robot"/>
                            <div class="cost"><h1 className="fs-6">Social Trading Platform</h1></div>
                            <div class="overlay">
                                <h1>Let's Trading History!</h1>
                                <p>
                                    Myfxbook is a social trading platform that allows traders to analyze, share, and track their trading performance...
                                </p>
                                <a className="fs-4" href="https://www.myfxbook.com/members/Safeboxes/safeboxes/10819316/u2UgCSCTGIRN22wxEBVC" target="_blank" rel="noreferrer">Explorer</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Explor;