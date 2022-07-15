import { useState } from 'react';
import { connect } from 'react-redux';
import { createEmployee } from '../actions/employee'
import { IEmployee } from '../typeDefs'


const CreateEmployee = (props: any) => {
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

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();

    const newEmployee = {
      name: employeeName,
      dob: employeeDob,
      gender: employeeGender,
      salary: employeeSalary,
    };
    props.onCreatePressed(newEmployee);
    // window.location.href = '/';
  };

  return (
    <div>
      <h3>Create New Employee</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            required
            className="form-control"
            value={employeeName}
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth: </label>
          <input
            type="text"
            required
            className="form-control"
            value={employeeDob}
            onChange={onChangeDob}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <input
            type="text"
            className="form-control"
            value={employeeGender}
            onChange={onChangeGender}
          />
        </div>
        <div className="form-group">
          <label>Salary</label>
          <input
            type="text"
            className="form-control"
            value={employeeSalary}
            onChange={onChangeSalary}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Add Employee"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  onCreatePressed: (employee: IEmployee) => dispatch(createEmployee(employee)),
});

export default connect(null, mapDispatchToProps)(CreateEmployee);
