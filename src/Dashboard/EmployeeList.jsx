import axios from "axios";
import { useEffect, useState } from "react";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const EmployeeList = () => {
const [employees,setEmployees] = useState([])
useEffect(()=>{
    axios.get('http://localhost:8000/employees')
    .then(res=>{
      setEmployees(res.data)
    });
  },[])
  
const handleToggle = async (id, currentStatus)=>{
  const newStatus = !currentStatus;
  const res = await axios.put(`http://localhost:8000/employees/${id}/verify`, { isVerified: newStatus })
  if(res.data){
    const update = employees.map(item=> item._id === id ? {...item, isVerified:newStatus } : item)
    setEmployees(update)
    toast.success("Your record has saved successfully!", {
      position: "top-right",
    });
  }
  
}
    return (
      <div>
        <ToastContainer></ToastContainer>
        <h1 className="text-center text-2xl font-bold bg-slate-300 py-5">
          This is Employee Directory-EmployeeList-{employees.length}
        </h1>
        <div>
          <div className="border rounded-md w-10/12 m-5">
            <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Verified</th>
                  <th>Bank Account</th>
                  <th>Salary</th>
                  <th>Pay</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {
                 employees.map((employee,index)=>(<tr key={employee._id}>
                  <th>{index + 1}</th>
                  <td>{employee.username}</td>
                  <td>{employee.email}</td>
                  <button
                    onClick={() => handleToggle(employee._id, employee.isVerified)}
                    className="text-xl ml-5"
                  >
                    {employee.isVerified ? '✅' : '❌'}
                  </button>
                  <td>{employee.account}</td>
                  <td>{employee.salary}</td>
                  <td>30000</td>
                  <td><button>Details</button></td>
                </tr>)) 
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default EmployeeList;