import { NavLink } from "react-router-dom";

const Notfound = () => {
    return (
        <div className="notfound">
            <div class="noise"></div>
            <div class="nooverlay"></div>
            <div class="terminal">
                <h1>Error <span class="errorcode">404</span></h1>
                <p class="output">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                <p class="output">Please try to <NavLink to={"/"} className="notfound-link" href="#1">go back</NavLink> or <NavLink to={"/"} className="notfound-link" href="#2">return to the homepage</NavLink>.</p>
                <p class="output">Good luck.</p>
            </div>
        </div>
    )
}
export default Notfound;