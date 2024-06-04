import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosCheckboxOutline } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/employees").then((res) => {
      setEmployees(res.data);
    });
  }, []);

  const handleToggle = async (id, currentStatus) => {
  const newStatus = !currentStatus;
   await axios.put(
      `http://localhost:8000/employees/${id}/verify`,
      { isVerified: newStatus }
    ).then(res=>{
      if (res.data) {
        toast.success("Your verified status has changed!", {
          position: "top-right",
        });
        const update = employees.map((item) =>
          item._id === id ? { ...item, isVerified: newStatus } : item
        );
        setEmployees(update);
      }
    })
    

  };
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
              {employees.map((employee, index) => (
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
                    {employee.isVerified ? <IoIosCheckboxOutline className="text-green-500 text-2xl" /> : <RxCross2 className="text-red-600 text-2xl border"/>}
                  </button>
                  <td>{employee.account}</td>
                  <td>{employee.salary}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary {`btn ${employee.isVerified ? 'btn-primary' : 'btn-disabled'}`}"
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                      disabled={!employee.isVerified}
                    >
                      {employee.salary}
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-secondary">view</button>
                  </td>
                  <td>
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Pay Your Employee</h3>
                        <br />
                        <div className="flex flex-col gap-3 max-w-sm">
                          Payable Amount: {employee.salary}
                          <input
                            className="border-2"
                            type="text"
                            name="month"
                            placeholder="Month"
                          />
                          <input
                            className="border-2"
                            type="number"
                            name="year"
                            placeholder="Year"
                          />
                        </div>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                          </form>
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
