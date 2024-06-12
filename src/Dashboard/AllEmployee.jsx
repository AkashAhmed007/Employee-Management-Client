import axios from "axios";
import { useEffect, useState } from "react";

const AllEmployee = () => {
const [employees, setEmployees] = useState([]);
const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
 useEffect(() => {
    axios.get("http://localhost:8000/employees").then((res) => {
      setEmployees(res.data);
    });
  }, []);

  const handleMakeHr = (id) => {
    axios.put(`http://localhost:8000/make-hr/${id}`).then(() => {
      setEmployees(
        employees.map((emp) => (emp._id === id ? { ...emp, role: "HR" } : emp))
      );
    });
  };

  const handleFireEmployee = (id) => {
    
    axios.put(`http://localhost:8000/fire/${id}`).then(() => {
      setEmployees(
        employees.map((emp) =>
          emp._id === id ? { ...emp, isFired: true } : emp
        )
      );
    });
    setSelectedEmployeeId(null);
  };

  const handleOpenModal = (id) => {
    setSelectedEmployeeId(id);
  };

  const handleCloseModal = () => {
    setSelectedEmployeeId(null);
  };

  return (
    <div>
      <h1 className="text-center text-xl font-bold bg-slate-300 py-3">
        This is All-EmployeeList
      </h1>
      <div className="border w-full rounded-md p-5">
        <table className="table">
          <thead>
            <tr className="text-black">
              <th>No.</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Make HR</th>
              <th>Fire</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {employees.map((employee, index) => (
              <tr key={employee._id}>
                <th>{index + 1}</th>
                <td>{employee.username}</td>
                <td>{employee.designation}</td>
                <p className="text-base m-5">
                  {employee.role === "Employee" ? (
                    <button
                      onClick={() => handleMakeHr(employee._id)}
                      className="btn btn-sm btn-primary"
                    >
                      Make HR
                    </button>
                  ) : (
                    <p>HR</p>
                  )}
                </p>
                <td>
                  {!employee.isFired ? (
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => handleOpenModal(employee._id)}
                    >
                      Fire
                    </button>
                  ) : (
                    "Fired"
                  )}
                </td>
              </tr>
            ))}
        {selectedEmployeeId && (
        <dialog open className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Are you sure?</h3>
            <p className="py-4">You wont be able to revert this!</p>
            <div className="modal-action">
              <button
                onClick={() => handleFireEmployee(selectedEmployeeId)}
                className="btn btn-sm btn-success mr-4"
              >
                Fire
              </button>
              <button onClick={handleCloseModal} className="btn btn-sm btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        </dialog>
      )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEmployee;
