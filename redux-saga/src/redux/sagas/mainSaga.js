import { all, call } from 'redux-saga/effects';
import { departmentsSaga } from './departmentsSaga';
import { employeesSaga } from './employeesSaga';
import { vacationsSaga } from './vacationsSaga';

export function* mainSaga() {
  yield all([call(departmentsSaga), call(employeesSaga), call(vacationsSaga)]);
}
