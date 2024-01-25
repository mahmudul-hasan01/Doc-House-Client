import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
// import { FaHome } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className='relative min-h-screen md:flex'>
        {/* Sidebar Component */}
        <SideBar />
        <div className='flex-1  md:ml-64'>
          <div className='p-5'>
            {/* Outlet for dynamic contents */}
            <Outlet />
          </div>
        </div>
      </div>
    );
};

export default Dashboard;