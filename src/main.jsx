import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import FirebaseProvider from "./Firebase/FirebaseProvider";
import Dashboard from "./Dashboard/Dashboard";
import Contact from "./Pages/Contact";
import WorkSheet from "./Dashboard/WorkSheet";
import PaymentHistory from "./Dashboard/PaymentHistory";
import EmployeeList from "./Dashboard/EmployeeList";
import Progress from "./Dashboard/Progress";
import AllEmployee from "./Dashboard/AllEmployee";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import EmployeeDetails from "./Pages/EmployeeDetails";
import DashboardHome from "./Dashboard/DashboardHome";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "dashboard",
    element: 
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>,
    children: [
      {
        index: true,
        element:<DashboardHome></DashboardHome>

      },
      {
        path: "worksheet",
        element: <PrivateRoute><WorkSheet></WorkSheet></PrivateRoute>,
      },
      {
        path: "worksheet/:email",
        element: <WorkSheet></WorkSheet>,
        loader: ({params}) => fetch(`https://employee-management-server-five.vercel.app/worksheet/${params.email}`),
      },
      {
        path: "payment-history",
        element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
      },
      {
        path: "payment/:email",
        element: <PaymentHistory></PaymentHistory>,
        loader: ({params})=> fetch(`https://employee-management-server-five.vercel.app/payment/${params.email}`)
      },
      {
        path: "employee-list",
        element: <EmployeeList></EmployeeList>,
      },
      {
        path: "progress",
        element: <Progress></Progress>,
      },
      {
        path: "all-employee",
        element: <AllEmployee></AllEmployee>,
      }
    ]
  },
  {
    path: "/employeelist/:email",
    element: <EmployeeDetails></EmployeeDetails>,
    loader: ({ params }) =>
      fetch(`https://employee-management-server-five.vercel.app/employeelist/${params.email}`),
  }

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router}></RouterProvider>
    </FirebaseProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>
);
