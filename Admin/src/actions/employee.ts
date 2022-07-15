
import { IEmployee, IId} from '../typeDefs'

export interface IId2 {
  id: string
}

export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const createEmployee = (employee: IEmployee) => {
  return ({
  type: CREATE_EMPLOYEE,
  payload: employee ,
})};

export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';
export const removeEmployee = (employeeId: IId) => {
  return ({
  type: REMOVE_EMPLOYEE,
  payload: { employeeId },
})};

export const REMOVE_EMPLOYEE_SUCESS = 'REMOVE_EMPLOYEE_SUCESS'
export const removeEmployeeSucess = () => ({
  type: REMOVE_EMPLOYEE_SUCESS
})

export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const updateEmployee = (id: IId2, updatedEmployeeInfo: IEmployee) => ({
  type: UPDATE_EMPLOYEE,
  payload: { id, updatedEmployeeInfo },
});

export const LOAD_EMPLOYEES_IN_PROGRESS = 'LOAD_EMPLOYEES_IN_PROGRESS';
export const loadEmployeesInProgress = () => ({
  type: LOAD_EMPLOYEES_IN_PROGRESS,
});

export const LOAD_EMPLOYEES_SUCCESS = 'LOAD_EMPLOYEES_SUCCESS';
export const loadEmployeesSuccess = (employees: [IEmployee]) => ({
  type: LOAD_EMPLOYEES_SUCCESS,
  payload: { employees },
});

export const LOAD_EMPLOYEE_IN_PROGRESS = 'LOAD_EMPLOYEE_IN_PROGRESS';
export const loadEmployeeInProgress = (id: any) => ({
  type: LOAD_EMPLOYEE_IN_PROGRESS,
  payload: id
});

export const LOAD_EMPLOYEE_SUCCESS = 'LOAD_EMPLOYEE_SUCCESS';
export const loadEmployeeSuccess = (employees: [IEmployee]) => ({
  type: LOAD_EMPLOYEE_SUCCESS,
  payload: { employees },
});

export const ADD_EMPLOYEES_SUCCESS = 'ADD_EMPLOYEES_SUCCESS';
export const addEmployeesSuccess = (employee: IEmployee) => ({
  type: ADD_EMPLOYEES_SUCCESS,
  payload: { employee },
});

export const LOAD_EMPLOYEES_FAILURE = 'LOAD_EMPLOYEES_FAILURE';
export const loadEmployeesFailure = () => ({
  type: LOAD_EMPLOYEES_FAILURE,
});
