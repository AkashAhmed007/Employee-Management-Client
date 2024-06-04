import PropTypes from 'prop-types';
const WorkSheetData = ({item,idx}) => {
  const {task,date,workhour} = item
  return (
    <div className="border rounded-md w-full m-5">
      <div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              
              <th>Date</th>
              <th>Task</th>
              <th>Working Hour</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>{idx+1}</th>
              <td>{date}</td>
              <td>{task}</td>
              <td>{workhour}</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};
WorkSheetData.propTypes ={
  item : PropTypes.object,
  idx:PropTypes.number
}
export default WorkSheetData;
