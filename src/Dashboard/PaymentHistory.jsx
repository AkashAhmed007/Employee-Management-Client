import { useContext, useState } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";
import axios from "axios";
import { Helmet } from "react-helmet";
const PaymentHistory = () => {
const {user} = useContext(AuthContext)
const [paidData,setPaidData] = useState([])

axios.get(`https://employee-management-server-five.vercel.app/payment/${user?.email}`)
.then(res=>{
  setPaidData(res.data)
})

return (
    <div>
       <Helmet>
        <title>People-HR || Dashboard-Payment</title>
      </Helmet>
      <h1 className="text-center text-xl font-bold bg-slate-300 py-3">
        This is Employee Payment-history
      </h1>
      <div>
        <div className="border rounded-md w-full p-5">
          <table className="table">
            {/* head */}
            <thead className="text-black">
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
