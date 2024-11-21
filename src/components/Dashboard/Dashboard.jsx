import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
const Dashboard = () => {

  return (
    <>
      <Outlet />
      <Sidebar />
    </>
  )
}

export default Dashboard;


