import { call, put, takeEvery } from 'redux-saga/effects';
import { deleteDepartment, getDepartments, postDepartment, putDepartment } from '../../api';
import {
  addDepartmentFailureActionCreator,
  addDepartmentSuccessActionCreator,
  deleteDepartmentFailureActionCreator,
  deleteDepartmentSuccessActionCreator,
  departmentFailureActionCreator,
  departmentSuccessActionCreator,
  editDepartmentFailureActionCreator,
  editDepartmentSuccessActionCreator
} from '../actions';

function* fetchDepartmentsSaga(action) {
  try {
    const departments = yield call(getDepartments);
    console.log({ departments });
    yield put(departmentSuccessActionCreator(departments));
  } catch (e) {
    console.log(e);
    yield put(departmentFailureActionCreator());
  }
}

function* addDepartmentsSaga(action) {
  try {
    const department = yield call(postDepartment, action.payload);
    console.log({ department });
    yield put(addDepartmentSuccessActionCreator(department));
  } catch (e) {
    console.log(e);
    yield put(addDepartmentFailureActionCreator());
  }
}

function* deleteDepartmentsSaga(action) {
  try {
    const department = yield call(deleteDepartment, action.payload);
    console.log({ department });
    yield put(deleteDepartmentSuccessActionCreator(action.payload));
  } catch (e) {
    console.log(e);
    yield put(deleteDepartmentFailureActionCreator());
  }
}

function* editDepartmentsSaga(action) {
  try {
    const department = yield call(putDepartment, action.payload);
    console.log({ department });
    yield put(editDepartmentSuccessActionCreator(action.payload));
  } catch (e) {
    console.log(e);
    yield put(editDepartmentFailureActionCreator());
  }
}

export function* departmentsSaga() {
  yield takeEvery('departments_request', fetchDepartmentsSaga);
  yield takeEvery('add_departments_request', addDepartmentsSaga);
  yield takeEvery('delete_departments_request', deleteDepartmentsSaga);
  yield takeEvery('edit_departments_request', editDepartmentsSaga);
}
