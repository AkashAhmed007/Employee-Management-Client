import { Link, useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
const EmployeeDetails = () => {
const employeeDetails = useLoaderData();
 const data = [{
  uv: 2024,
  pv: 2030
 },
 {
  uv: 2024,
  pv: 2030
 },
 {
  uv: 2024,
  pv: 2030
 },
 {
  uv: 2024,
  pv: 2030
 },
 {
  uv: 2024,
  pv: 2030
 },
 {
  uv: 2024,
  pv: 2030
 },


]

return (
    <>
      <div>
        <h1 className="text-center text-2xl font-bold bg-slate-300 py-5">
          Employee details
        </h1>
        <p className="text-center text-xl font-bold py-5 underline">
          <Link to="/dashboard">Go to Dashboard</Link>
        </p>
      </div>
      <div className="overflow-x-auto border m-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employeeDetails.map((item) => (
              <tr key={item._id}>
                <td>
                  <img
                    className="w-10 h-10 rounded-full"
                    src={item.image}
                    alt=""
                  />
                </td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.designation}</td>
                <td>{item.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Chart */}
      <BarChart className="text-center ml-48"
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {/* <XAxis dataKey="name" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
        <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
      </BarChart>
    
    </>
  );
};

export default EmployeeDetails;
