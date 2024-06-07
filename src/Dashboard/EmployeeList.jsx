import axios from "axios";
import {useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosCheckboxOutline } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [seleectedEmployee,setSelectedEmployee] = useState(null)
  useEffect(() => {
    axios.get("http://localhost:8000/employees").then((res) => {
      setEmployees(res.data);
    });
  }, []);
  const handleToggle = async (id, currentStatus) => {
    const newStatus = !currentStatus;
    await axios
      .put(`http://localhost:8000/employees/${id}/verify`, {
        isVerified: newStatus,
      })
      .then((res) => {
        if (res.data) {
          toast.success("Your verified status has changed!", {
            position: "top-right",
          });
          const update = employees.map((item) =>
            item._id === id ? { ...item, isVerified: newStatus } : item
          );
          setEmployees(update);
        }
      });
  };

const openModal = (employee)=>{
  document.getElementById("my_modal_1").showModal()
  setSelectedEmployee(employee)
}

const handlePay = async ()=>{
    if (!employees || !month || !year) {
      toast.error("Please fill in all fields!");
      return;
    }
    const data = {
      amount: seleectedEmployee.salary,
      month,
      year,
      email : seleectedEmployee.email
    }

  const res = await axios.post('http://localhost:8000/pay',{data})
  if(res.data.success){
    toast.success("Your payment has successful!", {
      position: "top-right",
    });
  }else {
    toast.error(res.data.message || "Payment failed!")
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
              <tr className="text-black">
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
            <tbody className="text-black">
              {
              employees.map((employee, index) => (
                <tr key={employee._id}>
                  <th>{index + 1}</th>
                  <td>{employee.username}</td>
                  <td>{employee.email}</td>
                  <button
                    onClick={() =>
                      handleToggle(employee._id, employee.isVerified)
                    }
                    className="text-base m-5"
                  >
                    {employee.isVerified ? (
                      <IoIosCheckboxOutline className="text-green-500 text-2xl" />
                    ) : (
                      <RxCross2 className="text-red-600 text-2xl border" />
                    )}
                  </button>
                  <td>{employee.account}</td>
                  <td>{employee.salary}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary {`btn ${employee.isVerified ? 'btn-primary' : 'btn-disabled'}`}"
                      onClick={() =>
                        openModal(employee)
                      }
                      disabled={!employee.isVerified}
                    >
                      PAY
                    </button>
                  </td>
                  <td>
                    <Link to={`/employeelist/${employee?.email}`}className="btn btn-sm btn-secondary">view</Link>
                  </td>
                  <td>
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Pay Your Employee</h3>
                        <br />
                        <div>
                          {seleectedEmployee && (
                            <div>
                              <div className="flex flex-col gap-3 max-w-sm">
                                Payable Amount: {seleectedEmployee.salary}
                                <input
                                  className="border-2"
                                  type="text"
                                  name="month"
                                  placeholder="Month"
                                  value={month}
                                  onChange={(e)=>setMonth(e.target.value)}
                                />
                                <input
                                  className="border-2"
                                  type="number"
                                  name="year"
                                  placeholder="Year"
                                  value={year}
                                  onChange={(e)=>setYear(e.target.value)}
                                />
                              </div>
                              <div className="modal-action">
                                <form method="dialog">
                                  <button onClick={handlePay} className="btn btn-sm btn-success mr-4">Payment</button>
                                  <button className="btn btn-sm btn-warning">Cancel</button>
                                </form>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </dialog>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
