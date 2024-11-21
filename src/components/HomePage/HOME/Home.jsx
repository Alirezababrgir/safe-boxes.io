import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Safebox from "../Safebox/Safebox";
import Contract from "../Contract/Contract";
import logo from "../../../assets/banners/navlogo.png"
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Sidebar from "../../Navbar/Sidebar";
import videosafebo from "../../../assets/banners/city.mp4"
import Explor from "../Explor/Explor";
import { useEffect } from "react";
import { lazy } from "react";
const Packages = lazy(() => import("../Packages/Packages"))
const Forex = lazy(() => import("../Forex/ForexContainer"))


const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        //scroll top
        if (!window.scrollTo(0, 0)) {
            window.scrollTo(0, 0)
        }
    }, [])


    return (
        <div>
            <HelmetProvider>
                <Helmet><title>SAFEBOXES | HOME</title></Helmet>
                <Sidebar />
                <Navbar />
                <section id="home" class="showcase-arean">
                    <video className="bg-video" autoPlay loop muted playsInline defaultmuted preload="auto">
                        <source type="video/mp4" src={videosafebo} />
                    </video>
                    <div className="showcase-container text-center">
                        <img className="d-none" height={300} width={400} id="safe" src={logo} alt="logo" />
                        <div class="wrapper d-none">
                            <h2 className="glitch">Experience profitability and security with us</h2>
                        </div>
                        <button onClick={() => { navigate("/connectwallet") }} class='glowing-btn mt-4 mb-2'><span class='glowing-txt'>S<span class='faulty-letter'>T</span>ART</span ></button>
                    </div>
                </section>
                <section id="safebox">
                    <Safebox />
                </section>
                <section id="forex">
                    <Forex />
                </section>
                <section id="packages">
                    <Packages />
                </section>
                <section id="contract">
                    <Contract />
                </section>
                <div className="bg-blue">
                    <section id="Fxbook">
                        <Explor />
                    </section>
                    <section id="about">
                        <Footer />
                    </section>
                </div>
            </HelmetProvider>
        </div>
    )
}
export default Home;
