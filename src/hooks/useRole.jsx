import axios from "axios";
import useAuth from "./useAuth";

function useRole() {
  const { user, loading } = useAuth();
  const userEmail = async ()=>{
    const { data: role } = await axios.get(`/user/${user?.email}`);
    return [role, loading];
  }
return userEmail;

}

export default useRole;
