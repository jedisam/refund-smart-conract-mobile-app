import { all } from 'redux-saga/effects';
import employeessSaga from './saga';

export default function* sagas() {
  yield all([employeessSaga()]);
}
