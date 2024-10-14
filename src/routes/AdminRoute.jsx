import { Navigate } from "react-router-dom"
import useRole from "../hooks/useRole"
import PropTypes from 'prop-types'

function AdminRoute({children}) {
    const[role, loading] = useRole()
    if(loading) return <div className="min-h-screen my-20 text-center">
    <span className="loading loading-spinner loading-xs"></span>
    <span className="loading loading-spinner loading-sm"></span>
    <span className="loading loading-spinner loading-md"></span>
    <span className="loading loading-spinner loading-lg"></span>
    </div>
    if(role === 'admin') return children;
    return <Navigate to='/dashboard'/>

}
AdminRoute.propTypes = {
    children: PropTypes.element,
  }
export default AdminRoute