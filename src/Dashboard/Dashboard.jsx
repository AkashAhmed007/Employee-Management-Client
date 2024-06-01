import { SiGooglesheets } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
        <div className="flex">
            <div className="w-64 h-screen bg-gray-600">
                <ul className="menu">
                
                    <li>
                    <SiGooglesheets className="text-black text-4xl w-6"/>   <NavLink to='/dashboard/worksheet'>Work-Sheet</NavLink>
                    </li>
                </ul>

            </div>
            <div className="flex-1">
            <Outlet></Outlet>
            </div>
        </div>
        
        </>
    );
};

export default Dashboard;