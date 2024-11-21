import { LuInstagram } from "react-icons/lu";
import { FaTelegram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Fab } from "@mui/material";
import { TbArrowsJoin2 } from "react-icons/tb";
import { Sendforlink } from "./send4link";
import { FaArrowDownLong } from "react-icons/fa6";
import { Copyforlink } from "./copyforlinks";
import { FaPowerOff } from "react-icons/fa6";
import { useState } from "react";
import { useLogOutMutation } from "../../../../../api/apiSlice";
import { useCookies } from "react-cookie";
import { Copytradelink } from "./copytrade";
//modal imports
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Forbox = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //service hook
    const [LogOut] = useLogOutMutation();

    //cookie hook
    const [cookie, removecookie] = useCookies(['token'])

    //modal style
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        border: '0px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const HandleLogout = async () => {
        try {
            const logout = await LogOut({ token: cookie.token })
            removecookie(['token'], { path: '/' })
            console.log(logout.data)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div class="hero">
                <div className="container">
                    <div className="join container text-center mb-2">
                        <a href="https://capitalxtend.com/register?referral=rWBnl6" target="_blank" rel="noreferrer" >
                            <Fab size="large"  variant="extended" color="primary"><h5 className='mt-2'>Join The Broker <TbArrowsJoin2 /></h5>
                            </Fab>
                        </a>
                    </div>
                    <div className="row">
                        <div className="col-12 col-xl-6 py-2">
                            <Sendforlink />
                        </div>
                        <div className="col-12 col-xl-6">
                            <div className="row">
                                <div className="col-12 col-xl-12">
                                    <Copyforlink />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-xl-12">
                                    <Copytradelink />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <section class="main-content">
                <h3 className="fs-2">Reward For 200$ TopUp <FaArrowDownLong /></h3>
                <div className="container-fluid">
                    <div className="row">
                        <div style={{ cursor: "pointer" }} class="col-12 col-md-12 col-lg-12 my-2 mt-4">
                            <Sendforlink />
                        </div>
                    </div>
                </div>
            </section>
            <div className="container justify-conten-center text-center">
                <Fab size="large" className="mt-4 bg-danger text-white" variant="extended"><h5 className='mt-2' onClick={handleOpen}>Log Out <FaPowerOff /></h5></Fab>
            </div>
            <div className="text-center">
                <div class="footer-middle p-4">
                    <div class="container ">
                        <div class="col p-4">
                            <h3 className=" mb-2 text-primary">Follow Us</h3>
                        </div>
                        <div class="row">
                            <hr style={{ color: "darkblue" }} />
                            <div class="col-md-12 p-4 text-primary">
                                <i class="hover-fx hover-instagram"><LuInstagram /></i>
                                <i class="hover-fx hover-telegram"><FaTelegram /></i>
                                <i class="hover-fx hover-gmail"><BiLogoGmail /></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Are You Leave The Broker?
                            </Typography>
                            <Typography id="transition-modal-description" className="mb-3" sx={{ mt: 2 }}>

                            </Typography>
                            <Button variant="contained" className="mx-4" onClick={handleClose}>No</Button>
                            <Button variant="contained" sx={{ bgcolor: "red" }} onClick={HandleLogout}>Yes</Button>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </>
    )
}
export default Forbox;