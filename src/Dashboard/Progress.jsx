import axios from "axios";
import { useEffect, useState } from "react";

const Progress = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [worksheetData, setWorkSheetData] = useState([]);
  useEffect(() => {
    axios.get("https://employee-management-server-five.vercel.app/employees").then((res) => {
      setEmployeeData(res.data);
    });
    axios.get("https://employee-management-server-five.vercel.app/worksheet").then((res) => {
      setWorkSheetData(res.data);
    });
  }, []);

  return (
    <>
    {/* filtering Data */}
    <div className="text-black text-center border-b border-black p-4 flex justify-between">
        <div>
        <label htmlFor="employee">Filter by Employee:</label>
        <select id="employee">
          <option value="">All Employees</option>
          {employeeData.map((employee) => (
            <option key={employee._id} value={employee.username}>
              {employee.username}
            </option>
          ))}
        </select>
        </div>

        <div>
        <label htmlFor="month">Filter by Month:</label>
        <select id="month">
          <option value="">All Months</option>
          {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
        </div>
      </div>

    {/* display Data */}
      <div className="flex gp-3 justify-between items- m-2">
        <div className="border rounded-md w-full m-3 p-5">
          <table className="table">
            {/* head */}
            <thead className="text-black">
              <tr>
                <th>No.</th>
                <th>Username</th>
                <th>Email</th>
                <th>Designation</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {employeeData.map((employee, idx) => (
                  <tr key={employee._id}>
                  <td>{idx + 1}</td>
                  <td>{employee.username}</td>
                  <td>{employee.email}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <div className="border rounded-md w-full mt-5">
            <table className="table">
              {/* head */}
              <thead className="text-black">
                <tr>
                  <th>No</th>
                  <th>Task</th>
                  <th>Work Hour</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {worksheetData.map((item, idx) => (
                  <tr key={item._id}>
                    <td>{idx + 1}</td>
                    <td>{item.task}</td>
                    <td>{item.workHour}</td>
                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
