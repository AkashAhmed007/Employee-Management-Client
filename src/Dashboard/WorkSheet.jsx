import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const WorkSheet = () => {
  const workData = useLoaderData();
  const [work, setWork] = useState(workData);
  const [startDate, setStartDate] = useState(new Date());
  const date = startDate.toISOString().substr(0, 10);
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target;
    const task = form.task.value;
    const workHour = form.workhour.value;
    const UserWorkdata = {
      task,
      date,
      workHour,
    };
    
    try {
      const res = await axios.post("http://localhost:8000/worksheet", UserWorkdata)
      if (res.data) {
        toast.success("Your record has saved successfully!", {
          position: "top-right",
        });
        setWork([UserWorkdata,...work]);
      }
    } catch (error) {
      toast.error("Failed to add data", {
        position: "top-right",
      });
      console.error("There was an error adding the work data!", error);
    }
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      <h1 className="text-center text-xl font-bold bg-slate-300 py-5">
        This is Employee Directory-WorkSheet
      </h1>
      <hr />
      <div className="flex justify-between gap-2">
        <div className="border rounded-md w-full m-5">
          <form onSubmit={handleSubmit} className="space-y-5 m-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="task" className="block">
                Tasks
              </label>
              <select
                required
                name="task"
                className="select select-bordered w-full max-w-md mt-2 mb-2"
              >
                <option disabled selected>
                  Select Task
                </option>
                <option required>Sales</option>
                <option required>Support</option>
                <option required>Content</option>
                <option required>Paper Work</option>
              </select>
              <label htmlFor="role" className="block">
                Hours Worked
              </label>
              <input
                required
                type="number"
                name="workhour"
                className="w-full max-w-md px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <label htmlFor="role" className="block">
                Date
              </label>
              <DatePicker
                required
                className="max-w-md px-4 py-3 border rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <button type="submit" className="p-2 text-center rounded-lg dark:text-gray-50 dark:bg-violet-600 bg-[#27b6de] text-white">
              Submit
            </button>
          </form>
        </div>

        <div className="border rounded-md w-full m-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Task</th>
                <th>Work Hour</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {work.map((item, idx) => (
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
  );
};

export default WorkSheet;
