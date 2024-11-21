import { GrMoney } from "react-icons/gr";
import { MdPersonAddAlt1 } from "react-icons/md";
import logo from "../../../../../assets/banners/navlogo.png"
const FOOTERE3LINKS = ({allusers,paymentsum}) => {
    return (
        <>
            <div style={{display:"flex",justifyContent:"center"}}  className="col-12 text-center h-1">
                <img src={logo} height={200} alt="logo"/>
            </div>
            <div className="col-12 text-center p-4">
                <h3 className="text-white">Total Volume <GrMoney className="text-success" /></h3>
                <h1 style={{fontSize:"3.5rem"}} className="text-warning mt-4">{paymentsum} $</h1>
            </div>
            <div className="col-12 text-center p-4">
                <h3 className="text-white">Number Of Users <MdPersonAddAlt1 className="text-success" /></h3>
                <h3 className="text-danger mt-4">{allusers}</h3>
            </div>
        </>
    )
}
export default FOOTERE3LINKS;