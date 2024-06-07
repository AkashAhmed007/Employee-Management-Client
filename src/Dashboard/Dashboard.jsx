import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Firebase/FirebaseProvider";
const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <>
      <div className="flex">
        <div className="w-60 h-screen bg-indigo-400">
          <ul className="menu flex flex-col gap-5 text-white text-base font-bold">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/worksheet">Work-Sheet</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/payment-history">Payment-History</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/employee-list">Employee-List</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/progress">Progress</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/all-employee">All-Employee</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact-Us</NavLink>
            </li>
            <li>
              <button onClick={logOut} to="/">
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="flex justify-end gap-2 p-3">
          <h1>
              Hi, {user.displayName || user.email} Welcome Back!
            </h1>
          <div>
              <img
              className="w-10 rounded-full"
                referrerPolicy="no-referrer"
                alt="Tailwind CSS Navbar component"
                src={
                  user?.photoURL ||
                  "https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                }
              />
            </div>
            
          </div>

          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
