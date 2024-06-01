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
      }
    ],
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <FirebaseProvider><RouterProvider router={router}></RouterProvider></FirebaseProvider>
  </React.StrictMode>
)
