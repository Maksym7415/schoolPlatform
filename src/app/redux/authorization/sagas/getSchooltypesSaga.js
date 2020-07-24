import {
  takeLatest, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../constants/actionConstants';
import { AUTH_GET_SCHOOL_TYPES } from '../constants/actionTypes';

export function* getSchooltypesWatcher() {
  yield takeLatest(AUTH_GET_SCHOOL_TYPES, getSchooltypesWorker);
}

function* getSchooltypesWorker() {
  try {
    const payload = yield call(axios.get, '/tenant_types/');
    yield put(actions.authSuccess('schoolTypes', payload));
  } catch (error) {
    yield put(actions.authFail('schoolTypes', error.response));
  }
}
