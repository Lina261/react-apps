import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { deleteEmployee, getEmployees, postEmployee, putEmployee } from '../../api';
import {
  addEmployeeFailureActionCreator,
  addEmployeeSuccessActionCreator,
  deleteEmployeeFailureActionCreator,
  deleteEmployeeSuccessActionCreator,
  employeeFailureActionCreator,
  employeeSuccessActionCreator,
  editEmployeeFailureActionCreator,
  editEmployeeSuccessActionCreator
} from '../actions';

function* fetchEmployeesSaga(action) {
  try {
    const employees = yield call(getEmployees);
    console.log({ employees });
    yield put(employeeSuccessActionCreator(employees));
  } catch (e) {
    console.log(e);
    yield put(employeeFailureActionCreator());
  }
}

function* addEmployeesSaga(action) {
  try {
    const employee = yield call(postEmployee, action.payload);
    console.log({ employee });
    yield put(addEmployeeSuccessActionCreator(employee));
  } catch (e) {
    console.log(e);
    yield put(addEmployeeFailureActionCreator());
  }
}

function* deleteEmployeesSaga(action) {
  try {
    const employee = yield call(deleteEmployee, action.payload);
    console.log({ employee });
    yield put(deleteEmployeeSuccessActionCreator(action.payload));
  } catch (e) {
    console.log(e);
    yield put(deleteEmployeeFailureActionCreator());
  }
}

function* editEmployeesSaga(action) {
  try {
    const employee = yield call(putEmployee, action.payload);
    console.log({ employee });
    yield put(editEmployeeSuccessActionCreator(action.payload));
  } catch (e) {
    console.log(e);
    yield put(editEmployeeFailureActionCreator());
  }
}

export function* employeesSaga() {
  yield takeEvery('employees_request', fetchEmployeesSaga);
  yield takeEvery('add_employees_request', addEmployeesSaga);
  yield takeEvery('delete_employees_request', deleteEmployeesSaga);
  yield takeEvery('edit_employees_request', editEmployeesSaga);
}
