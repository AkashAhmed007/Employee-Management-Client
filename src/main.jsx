import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import Login from './Pages/Login';
import Register from './Pages/Register';
import FirebaseProvider from './Firebase/FirebaseProvider';
import Dashboard from './Dashboard/Dashboard';
import Contact from './Pages/Contact';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WorkSheet from './Dashboard/WorkSheet';
import PaymentHistory from './Dashboard/PaymentHistory';
import EmployeeList from './Dashboard/EmployeeList';
import Progress from './Dashboard/Progress';
import AllEmployee from './Dashboard/AllEmployee';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path:'/services',
        element:<Services></Services>
      },
      {
        path:'/about-us',
        element:<About></About>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children: [
      {
        path:'worksheet',
        element: <WorkSheet></WorkSheet>
      },
      {
        path:'payment-history',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path:'employee-list',
        element: <EmployeeList></EmployeeList>
      },
      {
        path:'progress',
        element: <Progress></Progress>
      },
      {
        path:'all-employee',
        element: <AllEmployee></AllEmployee>
      },

    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <FirebaseProvider><RouterProvider router={router}></RouterProvider></FirebaseProvider>
     <ToastContainer></ToastContainer>
  </React.StrictMode>
)
