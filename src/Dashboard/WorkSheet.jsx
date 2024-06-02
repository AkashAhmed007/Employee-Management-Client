import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const WorkSheet = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <h1 className="text-center text-2xl font-bold bg-slate-300 py-5">
        This is Employee Directory
      </h1>
      <hr />
      <div className="flex justify-between gap-2">
        <div className="border rounded-md w-full m-5">
          <form className="space-y-5 m-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="role" className="block">
                Tasks
              </label>
              <select className="select select-bordered w-full max-w-md mt-2 mb-2">
                <option disabled selected>
                  Select Task
                </option>
                <option>Sales</option>
                <option>Support</option>
                <option>Content</option>
                <option>Paper Work</option>
              </select>
              <label htmlFor="role" className="block">
                Hours Worked
              </label>
              <input
                type="number"
                className="w-full max-w-md px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <label htmlFor="role" className="block">
                Date
              </label>
              <DatePicker
                className="max-w-md px-4 py-3 border rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <button className="p-2 text-center rounded-lg dark:text-gray-50 dark:bg-violet-600 bg-[#27b6de] text-white">
              Submit
            </button>
          </form>
        </div>
        <div className="border rounded-md w-full m-5">
          <h1>This is a table</h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSheet;
