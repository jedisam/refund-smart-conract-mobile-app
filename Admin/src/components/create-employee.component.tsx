import { useState } from 'react';
import { connect } from 'react-redux';
import { createEmployee } from '../actions/employee'
import { IEmployee } from '../typeDefs'


const CreateEmployee = (props: any) => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeAddress, setEmployeeAddress] = useState('');
  const [employeeLatitude, setEmployeeLatitude] = useState('');
  const [employeeLogntitude, setEmployeeLongtitude] = useState('');
  const [timeStamp, setTimeStamp] = useState('');

  const onChangeUsername = (e: any) => {
    setEmployeeName(e.target.value);
  };
  const onChangeAddress = (e: any) => {
    setEmployeeAddress(e.target.value);
  };
  const onChangeLatitude = (e: any) => {
    setEmployeeLatitude(e.target.value);
  };
  const onChangeLongtitude = (e: any) => {
    setEmployeeLongtitude(e.target.value);
  };
  const onChangeTimeStamp = (e: any) => {
    setTimeStamp(e.target.value);
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();

    const newEmployee = {
      name: employeeName,
      address: employeeAddress,
      latitude: employeeLatitude,
      longtitude: employeeLogntitude,
      timeStamp
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
          <label>Address: </label>
          <input
            type="text"
            required
            className="form-control"
            value={employeeAddress}
            onChange={onChangeAddress}
          />
        </div>
        <div className="form-group">
          <label>Latitude Range: </label>
          <input
            type="text"
            required
            className="form-control"
            value={employeeLatitude}
            onChange={onChangeLatitude}
          />
        </div>
        <div className="form-group">
          <label>Longtitude Range</label>
          <input
            type="text"
            className="form-control"
            value={employeeLogntitude}
            onChange={onChangeLongtitude}
          />
        </div>
        <div className="form-group">
          <label>Timestamp Range</label>
          <input
            type="text"
            className="form-control"
            value={timeStamp}
            onChange={onChangeTimeStamp}
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
