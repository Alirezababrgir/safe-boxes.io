import { LuInstagram } from "react-icons/lu";
import { FaTelegram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { ArrowUpward } from "@mui/icons-material";
const Footer = () => {
    return (
        <footer className="text-center" id="footer">
            <div class="footer-middle p-4">
                <div class="container ">
                    <div class="col p-4">
                        <h3 className=" mb-4">Follow Us</h3>
                        <i class="hover-fx hover-instagram"><LuInstagram /></i>
                        <i class="hover-fx hover-telegram"><FaTelegram /></i>
                        <i class="hover-fx hover-gmail"><BiLogoGmail /></i>
                    </div>
                    <div class="row">
                        <div class="col-md-12 copy">
                            <h1 class="fs-6 text-center mt-3">Enter Fire &copy;</h1>
                        </div>
                    </div>
                    <i class="hover-fx hover-gmail"><a href="#"><ArrowUpward /></a></i>
                </div>
            </div>
        </footer>
    )
}
export default Footer;