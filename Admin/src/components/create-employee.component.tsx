import { useState } from 'react';
import { connect } from 'react-redux';
import { createEmployee } from '../actions/employee'
import { IEmployee } from '../typeDefs'
import { ethers } from 'ethers';

import { abi, contractAddress } from '../constants/endPoints';



const CreateEmployee = (props: any) => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeAddress, setEmployeeAddress] = useState('');
  const [employeeLatitude, setEmployeeLatitude] = useState('');
  const [employeeLogntitude, setEmployeeLongtitude] = useState('');
  const [distance, setDistance] = useState(0);

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
  const onChangeDistance = (e: any) => {
    setDistance(e.target.value);
  };
  function listenForTransactionMine(transactionResponse: any, provider: any) {
    console.log(`Mining ${transactionResponse.hash}`)
    return new Promise((resolve, reject) => {
        provider.once(transactionResponse.hash, (transactionReceipt: any) => {
            console.log(
                `Completed with ${transactionReceipt.confirmations} confirmations. `
            )
            resolve(1)
        })
    })
}
  const onSubmitHandler = async (e: any) => {
    if (typeof window.ethereum !== "undefined") {
      e.preventDefault();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(signer)
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const transactionRsponse = await contract.createEmployee(employeeAddress, employeeName, employeeLatitude, employeeLogntitude, distance);
      await listenForTransactionMine(transactionRsponse, provider)
      console.log(transactionRsponse)

      // const newEmployee = {
      //   name: employeeName,
      //   address: employeeAddress,
      //   latitude: employeeLatitude,
      //   longtitude: employeeLogntitude,
      //   timeStamp
      // };
      // props.onCreatePressed(newEmployee);
      // window.location.href = '/';
    }
   
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
          <label>Allowed Distance</label>
          <input
            type="text"
            className="form-control"
            value={distance}
            onChange={onChangeDistance}
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
