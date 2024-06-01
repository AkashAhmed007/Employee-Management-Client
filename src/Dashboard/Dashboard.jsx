import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
        <div className="flex">
            <div className="w-64 h-screen bg-indigo-400">
                <ul className="menu flex flex-col gap-5 text-white text-xl font-bold">
                
                    <li>
                      <NavLink to='/dashboard/worksheet'>Work-Sheet</NavLink>
                    </li>
                    <li>
                      <NavLink to='/dashboard/payment-history'>Payment-History</NavLink>
                    </li>
                    <li>
                      <NavLink to='/dashboard/employee-list'>Employee-List</NavLink>
                    </li>
                    <li>
                      <NavLink to='/dashboard/progress'>Progress</NavLink>
                    </li>
                    <li>
                      <NavLink to='/dashboard/all-employee'>All-Employee</NavLink>
                    </li>
                    <li>
                      <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to='/contact'>Contact-Us</NavLink>
                    </li>
                    <li>
                      <NavLink to='/'>Logout</NavLink>
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