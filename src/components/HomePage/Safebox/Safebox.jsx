import videosafebo from "../../../assets/safebox/safeboxes.mp4";
import ReactPlayer from "react-player"
import ScrollAnimation from 'react-animate-on-scroll';

const Safebox = () => {
    return (
        <div class="about-wrapper container">
            <div class="about-img">
                <ScrollAnimation animateIn="fadeIn">
                    <div >
                        <ReactPlayer url={videosafebo} className="sbvideo" width={"100%"} height={'27rem'} controls />
                    </div>
                </ScrollAnimation>
            </div>
            <div class="about-text">
                <ScrollAnimation animateIn="fadeIn">
                    <p class="small">Decentralize Box</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
                    <h2 className="textsafetittle">The Safe Boxes</h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay={200}>
                    <p>
                        Welcome to SafeBoxes! A place where we operate as an advanced platform in the world of copy trading. The Forex market is recognized as the largest financial market globally and serves as an exceptional source of profit for professional traders. Many individuals identify this opportunity, yet lack the ability to engage in Forex trading. This is where SafeBoxes, with the help of copy trading technology, empowers you to not only manage capital and profits and losses but also replicate our trades alongside professional traders, utilizing current global knowledge and employing modern tools and robots to pave the way for income.

                        At SafeBoxes, we place special importance on the security of your capital. Collaborating with reputable brokers in the Forex market and implementing high standards of capital security reflects our continuous commitment to your comfort and trust.

                        "Experience capital security and profitability simultaneously."
                    </p>
                </ScrollAnimation>
            </div>
        </div>
    )
}
export default Safebox;

