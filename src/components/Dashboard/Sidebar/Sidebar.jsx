import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { GrHome } from "react-icons/gr";
import { RiDashboard2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import logo from "../../../assets/banners/navlogo.png"
import { Divider } from '@mui/material';
import { ClickAwayListener } from '@mui/base';
import { RiHomeOfficeLine } from "react-icons/ri";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { RxTextAlignMiddle } from "react-icons/rx";
import { TbBusinessplan } from "react-icons/tb";
import { useEffect } from 'react';
import Web3 from 'web3';
import { Contract_address, Contract_abi } from '../../../services/abis';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 135;
export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));




const Sidebar = () => {

    const navigate = useNavigate()
    const [Relink, setReflink] = React.useState();


    useEffect(() => {
        const showReflink = async () => {
            try {

                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);

                const safebox = new web3.eth.Contract(JSON.parse(Contract_abi), Contract_address);

                //GET MY DATA
                const getmyData = await safebox.methods.getMyData().call({ "from": accounts[0] });
                setReflink(String(getmyData._userUid));

            } catch (error) {

            }
        }
        showReflink()
    }, [Relink])



    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box>
            <CssBaseline />
            <AppBar>
                <Toolbar className='toolbar' sx={{ height: "40px" }} >
                    <IconButton
                        className='heartbeat'
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ ...(open) }}
                    >
                        <MenuIcon className='fs-1' />
                    </IconButton>
                    <img style={{cursor:"pointer"}} className='nav-img' src={logo} alt="logo" onClick={() => { navigate("/") }} />
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: { xs: drawerWidth, sm: 200 },
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: { xs: drawerWidth, sm: 200 },
                        boxSizing: 'border-box',
                        marginTop: { xs: "56px", md: "64px" }
                    },
                }}
                variant="temporary"
                anchor="left"
                open={open}
            >
                <ClickAwayListener onClickAway={handleDrawerClose}>

                    <Box className="d-nav-elements">
                        <IconButton sx={{ backgroundColor: "white", marginLeft: "40%", marginTop: "20px" }} onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                        <ul className="mt-4">
                            <li><NavLink onClick={handleDrawerClose} to={"/"}><GrHome className="mb-1" /> Home Page</NavLink></li>
                            <Divider sx={{ backgroundColor: "gray", marginRight: "30px" }} />
                            <li><NavLink onClick={handleDrawerClose} to={"/dashboard"}><RiDashboard2Line /> Dashboard</NavLink></li>
                            <Divider sx={{ backgroundColor: "gray", marginRight: "30px" }} />
                            <li><NavLink onClick={handleDrawerClose} to={"/dashboard/office"}><RiHomeOfficeLine /> Office</NavLink></li>
                            <Divider sx={{ backgroundColor: "gray", marginRight: "30px" }} />
                            <li><NavLink onClick={handleDrawerClose} to={"/dashboard/topup"}> <FaArrowUpWideShort /> Topup</NavLink></li>
                            <Divider sx={{ backgroundColor: "gray", marginRight: "30px" }} />
                            <li><NavLink onClick={handleDrawerClose} to={"/dashboard/broker"}><RxTextAlignMiddle /> Broker</NavLink></li>
                            <Divider sx={{ backgroundColor: "gray", marginRight: "30px" }} />
                            <li><NavLink onClick={handleDrawerClose} to={"/dashboard/plan"}><TbBusinessplan /> Plan</NavLink></li>
                            <li>
                                <Divider sx={{ backgroundColor: "white", marginRight: "30px" }} />
                                <Divider sx={{ backgroundColor: "white", marginRight: "30px", marginBottom: "10px", marginTop: "2px" }} />
                            </li>
                            <li className='glowing-txt'><a href="#contract ">Uid:<span className=' mt-2 text-center'>{Relink}</span></a></li>
                            <CopyToClipboard text={`https://www.safe-boxes.io/signup/${Relink}`}>
                                <li><button className='mt-2 btn btn-outline-primary '>Copy Link</button></li>
                            </CopyToClipboard>
                        </ul>
                    </Box>
                </ClickAwayListener>
            </Drawer>
        </Box>
    )
}
export default Sidebar;
