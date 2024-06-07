import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Firebase/FirebaseProvider";
import logo from "../assets/logo.png";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] px-2 rounded-box w-52 bg-black text-white "
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <img className="w-10 h-10 mr-2 rounded-full" src={logo}></img>
        <Link to="/" className="lg:text-4xl font-bold">
          PEOPLE-HR
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex gap-5 ml-5">
        <ul className="menu menu-horizontal px-5">
          <li className="border rounded-lg mr-5">
            <Link to="/">Home</Link>
          </li>
          <li className="border rounded-lg">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="border rounded-lg ml-5">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end" title={user?.displayName}>
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="Tailwind CSS Navbar component"
                  src={
                    user?.photoURL ||
                    "https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-black text-white rounded-box w-52"
            >
              <li>
                <button className="justify-between">
                  {user?.displayName || user?.email}
                </button>
              </li>
              <li>
                <button onClick={logOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Link
              to="/login"
              className="border p-2 rounded-lg mr-5"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="border p-2 rounded-lg mr-5"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
