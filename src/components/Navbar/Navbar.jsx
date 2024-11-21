import logo from "../../assets/banners/navlogo.png"
import { FaBoxOpen } from "react-icons/fa6";
import { TbChartCandle } from "react-icons/tb";
import { LiaFileContractSolid } from "react-icons/lia";
import { CgDanger } from "react-icons/cg";
import { GoPackage } from "react-icons/go";
import { GrHome } from "react-icons/gr";
//import { RiDashboard2Line } from "react-icons/ri";
//import { NavLink } from "react-router-dom";
import { TransformRounded } from "@mui/icons-material";


const Navbar = () => {

  return (
    <nav className="navbar sticky-top">
      <div className="navcontainer container-fluid sticky-top">
        <img className="logo" width={"480px"} height={"430px"} src={logo} alt="logo" />
        <div className={`nav-elements`}>
          <ul className="mt-2">
            <li><a href="#home"><GrHome className="mb-1" /> Home</a></li>
            <li><a href="#safebox"><GoPackage /> SafeBoxes</a></li>
            <li><a href="#forex"><TbChartCandle /> Forex</a></li>
            <li><a href="#packages"><FaBoxOpen /> Packages</a></li>
            <li><a href="#contract"><LiaFileContractSolid /> Contract</a></li>
            <li><a href="#Fxbook"><TransformRounded /> My Fxbook</a></li>
            <li><a href="#about"><CgDanger /> About</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );

}
export default Navbar

/*
            <li><NavLink to={"/dashboard/#dashboard"}><RiDashboard2Line /> Dashboard</NavLink></li>

<li><NavLink to={"/roadmap"} href="#"><MapOutlined /></NavLink></li>
*/