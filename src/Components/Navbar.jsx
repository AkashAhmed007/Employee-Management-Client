import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar w-full fixed top-0 z-10">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] px-2 rounded-box w-52 bg-gray-400"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-2xl">
          People-HR
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ml-5">
        <ul className="menu menu-horizontal px-2">
          <li className="bg-gray-400 border rounded-lg">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end" title="title">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-square">
            <div className="w-10 rounded-full">
              <img
                referrerPolicy="no-referrer"
                alt="Tailwind CSS Navbar component"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa2boNo2OYa6CLv00F8NEYjNAK9Ib6UTH74g&s"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-black rounded-box w-52"
          >
            <li></li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </div>
        <Link to="/login" className="text-xl mr-5">
          Login
        </Link>
      </div>  
    </div>
  );
};

export default Navbar;
