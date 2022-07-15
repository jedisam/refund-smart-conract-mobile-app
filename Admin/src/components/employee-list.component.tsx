import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEmployees, getEmployeesLoading } from '../selectors/selectors';
import { loadEmployeesInProgress, removeEmployee, loadEmployeeInProgress } from '../actions/employee'
import { IEmployee, IId } from '../typeDefs'

const Employee = (props: any) => {
  return (
    <tr>
      <td>{props.employee.name}</td>
      <td>{props.employee.address}</td>
      <td>{props.employee.latitude}</td>
      <td>{props.employee.longtitude}</td>
      <td>{props.employee.timestamp}</td>
      <td>
        <Link to={'/edit/' + props.employee._id} onClick={() => {props.loadEmployee(props.employee._id)}}>edit</Link> |{' '}
        <button
        style={{border: 'none', color: 'red'}}
          onClick={() => {
            props.deleteEmployee(props.employee._id);
          }}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

const EmployeeList = (props: any) => {
  const {startLoadingEmployees} = props 
  useEffect(() => {
    startLoadingEmployees();
  }, [startLoadingEmployees]);
  const employees = () => {
    const loadingMessage = <div>Loading Employees...</div>;
    const content = props.employeesR.map((employee: IEmployee) => {
      // console.log('The Emp: ', employee);
      return (
        <Employee
          employee={employee}
          loadEmployee={props.loadEmployee}
          deleteEmployee={props.onRemovePressed}
          key={employee?._id}
        />
      );
    });
    return props.isLoading ? loadingMessage : content;
  };

  return (
    <div>
      <h3>Employees</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Latitude Range</th>
            <th>Longtude Range</th>
            <th>TimeStamp</th>
            <th>Condition</th>
          </tr>
        </thead>
        <tbody>{employees()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  isLoading: getEmployeesLoading(state),
  employeesR: getEmployees(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  loadEmployee: (id: any) => dispatch(loadEmployeeInProgress(id)),
  startLoadingEmployees: () => dispatch(loadEmployeesInProgress()),
  onRemovePressed: (id: IId) => dispatch(removeEmployee(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
