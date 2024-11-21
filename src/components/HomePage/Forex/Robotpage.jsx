import { NavLink } from "react-router-dom";
import Robotimg from "../../../assets/banners/ROBOTTRADE.jpg"
import { Helmet, HelmetProvider } from "react-helmet-async";

const Robot = () => {
    return (
        <div style={{ height: "100dvh", width: "100%",margin:"auto" }} className="container-fluid  texture">
            <HelmetProvider>
                <Helmet><title>SAFEBOXES | ROBOT</title></Helmet>
                <div class="container py-4b readcard">
                    <article class="postcard dark red mt-4">
                        <a class="postcard__img_link">
                            <img class="postcard__img" src={Robotimg} alt="Image Title" />
                        </a>
                        <div class="postcard__text" >
                            <h4 class="postcard__title red"><a href="#">Trading assistant robot?</a></h4>
                            <div class="postcard__bar mb-4"></div>
                            <div class="postcard__subtitle small">
                            </div>
                            <div class="postcard__preview-txt">
                                Artificial Intelligence has revolutionized the landscape of trading by providing systems capable of analyzing vast sets of data, recognizing patterns, and executing transactions with a level of precision and speed far beyond human capabilities. In an industry ruled by time and information, the capacity of AI to offer real-time analyses and instant predictions provides a significant advantage to traders equipped with these tools.
                            </div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item play red">
                                    <NavLink to={"/"} href="#"><h4>Ok</h4></NavLink>
                                </li>
                            </ul>
                        </div>
                    </article>
                </div>
            </HelmetProvider >
        </div>
    )
}
export default Robot;