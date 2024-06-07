import { useContext, useState } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";
import axios from "axios";
const PaymentHistory = () => {
const {user} = useContext(AuthContext)
const [paidData,setPaidData] = useState([])
axios.get(`http://localhost:8000/payment/${user?.email}`)
.then(res=>{
  setPaidData(res.data)
})

return (
    <div>
      <h1 className="text-center text-2xl font-bold bg-slate-300 py-5">
        This is Employee Directory-PaymentHistory
      </h1>
      <div>
        <div className="border rounded-md w-10/12 m-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Month</th>
                <th>Year</th>
                <th>Amount</th>
                <th>Transaction Id</th>
              </tr>
            </thead>
            <tbody>
              {
                paidData.map((pay,idx)=>(
                <tr key={pay._id}>
                <td>{idx + 1}</td>
                <td>{pay.month}</td>
                <td>{pay.year}</td>
                <td>{pay.amount}</td>
                <td>{pay._id}</td>
              </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
