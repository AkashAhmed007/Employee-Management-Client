import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../Firebase/FirebaseProvider";
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(user) return children
    if(loading) return <div className="min-h-screen my-20 text-center">
    <span className="loading loading-spinner loading-xs"></span>
    <span className="loading loading-spinner loading-sm"></span>
    <span className="loading loading-spinner loading-md"></span>
    <span className="loading loading-spinner loading-lg"></span>
    </div>
    return <Navigate to="/login" state={location?.pathname} replace= {true}></Navigate>
        
    
};
PrivateRoute.propTypes = {
    children: PropTypes.object
}

export default PrivateRoute;