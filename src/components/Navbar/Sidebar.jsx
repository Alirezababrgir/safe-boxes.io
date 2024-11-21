import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { FaBoxOpen } from "react-icons/fa6";
import { TbChartCandle } from "react-icons/tb";
import { LiaFileContractSolid } from "react-icons/lia";
import { CgDanger } from "react-icons/cg";
import { GoPackage } from "react-icons/go";
import { GrHome } from "react-icons/gr";
//import { RiDashboard2Line } from "react-icons/ri";
//import { NavLink } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import logo from "../../assets/banners/navlogo.png"
import { Divider } from '@mui/material';
import { ClickAwayListener } from '@mui/base';
import { Transgender } from "@mui/icons-material";


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


  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: { xs: 'flex', lg: "none" } }}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "#00092A", width: "100%" }} >
        <Toolbar className='toolbar' sx={{ height: "40px" }} >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open) }}
          >
            <MenuIcon />
          </IconButton>
          <img className='drawerlogo' style={{ margin: "0 auto" }} width={"200px"} height={"180px"} src={logo} alt="logo" />
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
          <Box className="mobile-nav-elements">
            <ul className="mt-4">
              <li><a onClick={handleDrawerClose} href="#home"><GrHome className="mb-1" /> Home</a></li>
              <Divider sx={{ backgroundColor: "gray", marginRight: "30px" }} />
              <li><a onClick={handleDrawerClose} href="#safebox"><GoPackage /> SafeBoxes</a></li>
              <Divider sx={{ backgroundColor: "gray", marginRight: "30px" }} />
              <li><a onClick={handleDrawerClose} href="#forex"><TbChartCandle /> ForexFaq</a></li>
              <Divider sx={{ backgroundColor: "gray", marginRight: "30px" }} />
              <li><a onClick={handleDrawerClose} href="#packages"><FaBoxOpen /> Packages</a></li>
              <Divider sx={{ backgroundColor: "gray", marginRight: "30px" }} />
              <li><a onClick={handleDrawerClose} href="#contract"><LiaFileContractSolid /> Contract</a></li>
              <Divider sx={{ backgroundColor: "gray", marginRight: "30px" }} />
              <li><a onClick={handleDrawerClose} href="#Fxbook"><Transgender /> My Fxbook</a></li>
              <Divider sx={{ backgroundColor: "gray", marginRight: "30px" }} />
              <li><a onClick={handleDrawerClose} href="#about"><CgDanger /> About Us</a></li>
            </ul>
          </Box>
        </ClickAwayListener>
      </Drawer>
    </Box >
  )
}
export default Sidebar;

/*
      <Divider sx={{ backgroundColor: "gray", marginRight: "30px" }} />
              <li><NavLink to={"/dashboard"}><RiDashboard2Line /> Dashboard</NavLink></li>

<Divider sx={{ backgroundColor: "gray", marginRight: "30px" }} />
              <li><NavLink to={"/roadmap"} onClick={handleDrawerClose} href="#roadmap"><MapOutlined />RoadMap</NavLink></li>
              */