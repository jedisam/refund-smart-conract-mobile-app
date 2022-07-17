import { useState } from 'react';
import { connect } from 'react-redux';
import { getEmployees, getEmployeesLoading } from '../selectors/selectors';
import { loadEmployeesInProgress, removeEmployee, loadEmployeeInProgress } from '../actions/employee'
import { IId } from '../typeDefs'
import { ethers } from 'ethers';

import { abi, contractAddress } from '../constants/endPoints';
import { Button } from 'reactstrap';



const EmployeeList = (props: any) => {
  // const [isConnected, setIsConnected] = useState(false);
  const [emps, setEmps] = useState([]);
  const [isShown, setIsShown] = useState(false);
  // const {startLoadingEmployees} = props 
  // useEffect(() => {
  //   // alert('State Changed')
  //   employees()
  // }, []);

  const checkStatus = async (address: any) => {
      if (window.ethereum) {
        try {
           // res[0] for fetching a first wallet
        window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res: any) => {
          console.log(res[0])
          // setIsConnected(true);
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          console.log(signer)
          const contract = new ethers.Contract(contractAddress, abi, signer);
          console.log(contract)
          const transactionRsponse =  contract.employeeCondition(address);
          transactionRsponse.then((response: any) => {
            console.log(response)
            if (response) {
              alert("Employee is in compliance with the agreement")
            } else{
            alert("Employee is out-of compliance")
            }
          // //   // startLoadingEmployee s(response)
          })
        });
        } catch (error) {
          console.log(error)
        }
       
      } else {
        alert("install metamask extension!!");
      }
    
  }
  const Employee = (props: any) => {
    return (
      <tr>
        <td>{props.employee.name}</td>
        <td>{props.employee.address}</td>
        <td>{props.employee.latitude}</td>
        <td>{props.employee.longtitude}</td>
        <td>{props.employee.distance}</td>
        <td>
         <Button onClick={() => checkStatus(props.employee.address)} color="primary">Check Status</Button>  
        </td>
      </tr>
    );
  };
  const employees = () => {
    
    console.log("Okay from employees function: ", emps)
    // const loadingMessage = <div>Loading Employees...</div>;
   
    return emps.map((employee: any) => {
      console.log('The Empppp: ', employee);
      return (
        <Employee   
          employee={employee}
          key={employee.address}
        />
      );
    });
    // return props.isLoading ? loadingMessage : content;
  };

  async function connect() {
    if (window.ethereum) {
      // try {
         // res[0] for fetching a first wallet
      try {
        let arr: any = [] 
        await
        window.ethereum
        .request({ method: "eth_requestAccounts" })
        // setIsConnected(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        console.log(contract)
        const getEmployees =  await contract.getEmployees();
        console.log(getEmployees.length)
        for (let i = 0; i < getEmployees.length; i++) {
          const empDetail =  await contract.getEmployeeDetail(getEmployees[i]);
          await arr.push({address: getEmployees[i], name: empDetail[0].toString(), latitude: empDetail[1].toString(), longtitude:empDetail[2].toString(), distance: empDetail[3].toString()})
          
        }
        setEmps(arr)
        setIsShown(true)      
       
      } catch (error) {
        console.log(error)
      }
     
    } else {
      alert("install metamask extension!!");
    }
  }

  return (
    <div>
      <h3>Employees</h3>
      <Button onClick={connect} color="info">Show Employees</Button>
      {isShown && (
        <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Latitude Range</th>
            <th>Longtude Range</th>
            <th>Distance</th>
            <th>Condition</th>
          </tr>
        </thead>
        <tbody>{emps.length === 0 ? undefined : employees()}</tbody>
      </table>
      )}
      
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
