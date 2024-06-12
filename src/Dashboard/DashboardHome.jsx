import { Link } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div className="p-4">
      <h1 className="lg:text-2xl text-base font-bold text-center p-2">
        Welcome to the Dashboard
      </h1>
      <hr />
      <div className="grid lg:grid-cols-2 gap-2 mt-5">
        <div className="card lg:w-96 w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">WorkSheet</h2>
            <p>A employer can save his daily,monthly task in a worksheet</p>
            <div className="card-actions justify-end">
              <Link to = '/dashboard/worksheet' className="btn btn-sm btn-primary">View</Link>
            </div>
          </div>
        </div>
        <div className="card lg:w-96 w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Employee-List</h2>
            <p>Employee List make easy to see your colleagues!</p>
            <div className="card-actions justify-end">
              <Link to='/dashboard/employee-list' className="btn btn-sm btn-primary">View</Link>
            </div>
          </div>
        </div>
        <div className="card lg:w-96 w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Progress</h2>
            <p>Track your Progress of monthly and details</p>
            <div className="card-actions justify-end">
              <Link to ='/dashboard/progress' className="btn btn-sm btn-primary">View</Link>
            </div>
          </div>
        </div>
        <div className="card lg:w-96 w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Payment-History</h2>
            <p>An Employee can see his or her monthly payment history depend on his performance</p>
            <div className="card-actions justify-end">
              <Link to='/dashboard/payment-history' className="btn btn-sm btn-primary">View</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
