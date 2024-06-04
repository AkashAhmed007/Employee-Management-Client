const PaymentHistory = () => {
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
                <th></th>
                <th>Month</th>
                <th>Amount</th>
                <th>Transaction Id</th>
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
  );
};

export default PaymentHistory;
