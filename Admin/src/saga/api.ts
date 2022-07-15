import axios from 'axios'
import { IEmployee, IId, IEmpl} from '../typeDefs'
import baseURL from '../constants/endPoints';

export const loadEmployees = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/employees`);
    const employees: any = response.data;
    return employees.data.data;
  } catch (e) {
    alert('Load Error ' + e)
    console.log('Load',e)
  }
};

export const loadEmployee = async (id: any) => {
  try {
    const response = await axios.get(`${baseURL}/api/employees/${id}`);
    const employee: any = response.data;
    return employee.data.data;
  } catch (e) {
    alert('Load Error ' + e)
    console.log('Load',e)
  }
};

export const addEmployeeRequest = async (newEmployee: IEmployee) => {
  try {
    const response: any = await axios.post(`${baseURL}/api/employees`, newEmployee)
   ;
    return response.data.data.data;
  } catch (e) {
    alert('ADD Employee Request: '+ e)
    console.log(e)
  }
};

export const removeEmployeeRequest = async (id: IId) => {
  try {
    const eId  = id.employeeId;
    await fetch(`${baseURL}/api/employees/${eId}`, {
      method: 'delete',
    });
    return
  } catch (e) {
    console.log(e)
  }
};

export const updateEmployeeRequest =
  async (emp: IEmpl) => {
    try {
      const { id, updatedEmployeeInfo} = emp;
       axios
      .patch(
        `${baseURL}/api/employees/${id}`,
        updatedEmployeeInfo
      )
      .then((res: any) => res.data.status);

    } catch (e) {
      console.log('My Error: ', e)
    console.log(e)
    }
  };

export const displayAlert = (text: string) => {
  alert(text);
};
