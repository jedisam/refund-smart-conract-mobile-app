import  { useState } from 'react';
import { connect } from 'react-redux';
import { updateEmployee } from '../actions/employee'
import { getEmployee, getEmployeesLoading } from '../selectors/selectors';
import { IId2 } from '../actions/employee'
import { IEmployee } from '../typeDefs'
import { loadEmployeeInProgress } from '../actions/employee'


const EditEmployee = (props: any) => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeDob, setEmployeeDob] = useState('');
  const [employeeGender, setEmployeeGender] = useState('');
  const [employeeSalary, setEmployeeSalary] = useState(0);
  const onChangeUsername = (e: any) => {
    setEmployeeName(e.target.value);
  };
  const onChangeDob = (e: any) => {
    setEmployeeDob(e.target.value);
  };
  const onChangeGender = (e: any) => {
    setEmployeeGender(e.target.value);
  };
  const onChangeSalary = (e: any) => {
    setEmployeeSalary(e.target.value);
  };
  const onSubmitHandler = (e: any) => {
    e.preventDefault();

    const updatedEmployee = {
      name: employeeName,
      dob: employeeDob,
      gender: employeeGender,
      salary: employeeSalary,
    };

    props.onEditPressed(props.match.params.id, updatedEmployee);
    window.location.href = '/';
  };
  return (
    <div>
      {props.isLoading ? <p>Loading Employee Detail...</p> : <div>
          <h3>Edit Employee</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label>name: </label>
          <input
            required
            className="form-control"
            placeholder={props.employee.name}
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <label>dob: </label>
          <input
            type="text"
            required
            className="form-control"
            placeholder={props.employee.dob}
            onChange={onChangeDob}
          />
        </div>
        <div className="form-group">
          <label>Gender: </label>
          <input
            type="text"
            className="form-control"
            placeholder={props.employee.gender}
            onChange={onChangeGender}
          />
        </div>
        <div className="form-group">
          <label>salary: </label>
          <input
            type="text"
            className="form-control"
            placeholder={props.employee.salary}
            onChange={onChangeSalary}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Edit Employee"
            className="btn btn-primary"
          />
        </div>
      </form>
        </div>    }
      
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  employee: getEmployee(state),
  isLoading: getEmployeesLoading(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  loadEmployee: (id: any) => dispatch(loadEmployeeInProgress(id)),
  onEditPressed: (id: IId2, employee: IEmployee) =>
    dispatch(updateEmployee(id, employee)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);
