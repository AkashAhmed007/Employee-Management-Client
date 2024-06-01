import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const Root = () => {
  return (
    <>
      <div className="max-w-screen-2xl">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Root;
