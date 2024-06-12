import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Firebase/FirebaseProvider";
import { RiHome7Fill } from "react-icons/ri";
import { SiGooglesheets } from "react-icons/si";
import { MdPayment } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { Helmet } from "react-helmet";
const Dashboard = () => {
const { user, loading, logOut } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="min-h-screen my-20 text-center">
        <span className="loading loading-spinner loading-xs"></span>
        <span className="loading loading-spinner loading-sm"></span>
        <span className="loading loading-spinner loading-md"></span>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return <div>Error loading user data</div>;
  }

  return (
    <>
      <div className="flex">
      <Helmet>
        <title>People-HR || Dashboard</title>
      </Helmet>
        <div className="lg:w-60 md:w-30 w-30 min-h-screen bg-black">
          <ul className="menu flex lg:flex-col lg:gap-5 gap-3 text-white text-base font-bold lg:p-5">
            <div>
              <li>
                <NavLink to='/dashboard'>Dashboard</NavLink>
              </li>
            </div>
            <div className="flex gap-1 items-center justify-start">
              <RiHome7Fill />
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
            </div>
            <div className="flex gap-1 items-center justify-start">
              <SiGooglesheets />
              <li>
                <NavLink to="/dashboard/worksheet">Work-Sheet</NavLink>
              </li>
            </div>
            <div className="flex gap-1 items-center justify-start">
              <MdPayment />
              <li>
                <NavLink to="/dashboard/payment-history">
                  Payment-History
                </NavLink>
              </li>
            </div>
            <div className="flex gap-1 items-center justify-start">
              <FaUserAlt />
              <li>
                <NavLink to="/dashboard/employee-list">Employee-List</NavLink>
              </li>
            </div>
            <div className="flex gap-1 items-center justify-start">
              <GiProgression />
              <li>
                <NavLink to="/dashboard/progress">Progress</NavLink>
              </li>
            </div>
            <div className="flex gap-1 items-center justify-start">
              <FaUserTie />
              <li>
                <NavLink to="/dashboard/all-employee">All-Employee</NavLink>
              </li>
            </div>
            <div className="flex gap-1 items-center justify-start">
              <MdContactPhone />
              <li>
                <NavLink to="/contact">Contact-Us</NavLink>
              </li>
            </div>
            <div className="flex gap-1 items-center justify-start">
              <TbLogout />
              <li>
              <NavLink onClick={logOut} to="/">
                Logout
              </NavLink>
              </li>
            </div>
          </ul>
        </div>
        <div className="flex-1">
          <div className="flex justify-end gap-2 p-3">
            <h1 className="lg:text-xl text-base font-bold">Hi, {user.displayName || user.email} Welcome Back!</h1>
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
