import * as Effects from "redux-saga/effects";
import {
  CREATE_EMPLOYEE,
  // createEmployee,
  LOAD_EMPLOYEE_IN_PROGRESS,
  REMOVE_EMPLOYEE,
  removeEmployeeSucess,
  UPDATE_EMPLOYEE,
  LOAD_EMPLOYEES_IN_PROGRESS,
  addEmployeesSuccess,
  loadEmployeesFailure
} from '../actions/employee';
import { loadEmployees, addEmployeeRequest, removeEmployeeRequest, updateEmployeeRequest, loadEmployee } from './api';

import { IAction } from '../typeDefs'


const call: any = Effects.call;
const put: any = Effects.put;
const takeLatest: any = Effects.takeLatest;
const all: any = Effects.all;


function* getEmployeesSaga(): any {
  try {
    const data = yield call(loadEmployees);
    yield put({ type: 'LOAD_EMPLOYEES_SUCCESS',
      payload: { employees: data }});
  } catch (error) {
    alert(error)
    yield put(loadEmployeesFailure());
  }
}

function* getAddEmployeesWatcher() {
  yield takeLatest(LOAD_EMPLOYEES_IN_PROGRESS, getEmployeesSaga);
}

function* getEmployeeSaga(action: any): any {
  try {
    const data = yield call(loadEmployee, action.payload);
    yield put({ type: 'LOAD_EMPLOYEE_SUCCESS',
      payload: { employee: data }});
  } catch (error) {
    alert(error)
    yield put(loadEmployeesFailure());
  }
}

function* getEmployeeWatcher() {
  yield takeLatest(LOAD_EMPLOYEE_IN_PROGRESS, getEmployeeSaga);
}



function* addEmployeeSaga(action: IAction): any {
  try {
    const data = yield call(addEmployeeRequest,action.payload);
    yield put(addEmployeesSuccess(data));
  } catch (error) {
    alert(error)
    console.error(error)
  }
}

function* addEmployeesWatcher() {
  yield takeLatest(CREATE_EMPLOYEE, addEmployeeSaga);
}


function* removeEmployeeSaga(action: IAction) {
  try {
    yield call(removeEmployeeRequest, action.payload);
    yield put(removeEmployeeSucess());
  } catch (error) {
    alert(error)
    console.error(error)
  }
}

function* removeEmployeeWatcher() {
  yield takeLatest(REMOVE_EMPLOYEE, removeEmployeeSaga);
}



function* updateEmployeeSaga(action: IAction) {
  try {
    yield call(updateEmployeeRequest, action.payload);
    // yield put(updateEmployee());
  } catch (error) {
    alert(error)
    console.error(error)
  }
}

function* updateEmployeeWatcher() {
  yield takeLatest(UPDATE_EMPLOYEE, updateEmployeeSaga);
}

export default function* employeessSaga() {
  yield all([getEmployeeWatcher(), getAddEmployeesWatcher(), addEmployeesWatcher(), removeEmployeeWatcher(), updateEmployeeWatcher()]);
}
