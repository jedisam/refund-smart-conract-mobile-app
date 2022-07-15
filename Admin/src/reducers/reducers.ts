import {
  CREATE_EMPLOYEE,
  REMOVE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  LOAD_EMPLOYEES_IN_PROGRESS,
  LOAD_EMPLOYEE_IN_PROGRESS,
  LOAD_EMPLOYEES_SUCCESS,
  LOAD_EMPLOYEE_SUCCESS,
  LOAD_EMPLOYEES_FAILURE,
  ADD_EMPLOYEES_SUCCESS,
  REMOVE_EMPLOYEE_SUCESS
} from '../actions/employee';
import { IEmployee, IAction } from '../typeDefs'


const initialState = { isLoading: false, data: [], employee: null };

export const employees = (state = initialState, action: IAction) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_EMPLOYEE: {
      const employee  = payload;
      return {
        ...state,
        data: state.data.concat(employee),
      };
    }
    case REMOVE_EMPLOYEE: {
      const { employeeId: employeeToRemoveId } = payload;
      return {
        ...state,
        data: state.data.filter((emp: IEmployee) => emp._id !== employeeToRemoveId),
      };
    }
    case REMOVE_EMPLOYEE_SUCESS: {
      return {
        ...state
      }
    }
    case UPDATE_EMPLOYEE: {
      const { id, updatedEmployeeInfo} = payload;
      return {
        ...state,
        data: state.data.map((employee: IEmployee) => {
          if (employee._id === id) {
            return updatedEmployeeInfo;
          }
          return employee;
        }),
      };
    }
    case ADD_EMPLOYEES_SUCCESS: {
      // const { employee } = payload;
      return {
        ...state,
        isLoading: false,
        // data: state.data.concat(employee)
      }
    }
    case LOAD_EMPLOYEES_SUCCESS: {
      const { employees } = payload;
      return {
        ...state,
        isLoading: false,
        data: employees,
      };
    }
    case LOAD_EMPLOYEE_SUCCESS: {
      const { employee } = payload;
      return {
        ...state,
        isLoading: false,
        employee: employee,
      };
    }
    case LOAD_EMPLOYEES_IN_PROGRESS:
    case LOAD_EMPLOYEE_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_EMPLOYEES_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
