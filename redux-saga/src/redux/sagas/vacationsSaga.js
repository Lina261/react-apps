import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { deleteVacation, getVacations } from '../../api';
import {
  vacationsSuccessActionCreator,
  vacationsFailureActionCreator,
  deleteVacationSuccessActionCreator,
  deleteVacationFailureActionCreator
} from '../actions';

function* fetchVacationsSaga(action) {
  try {
    const vacations = yield call(getVacations, action.payload);
    const employeeIds = vacations.map((item) => item.id);
    yield put(vacationsSuccessActionCreator(employeeIds));
  } catch (e) {
    console.log(e);
    yield put(vacationsFailureActionCreator());
  }
}

function* deleteVacationsSaga(action) {
  try {
    const vacations = yield call(deleteVacation, action.payload);
    yield put(deleteVacationSuccessActionCreator(action.payload.employeeId));
  } catch (e) {
    console.log(e);
    yield put(deleteVacationFailureActionCreator());
  }
}

export function* vacationsSaga() {
  yield takeEvery('vacations_request', fetchVacationsSaga);
  yield takeEvery('delete_vacation_request', deleteVacationsSaga);
}
