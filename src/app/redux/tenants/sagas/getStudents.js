import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { TENANTS_GET_STUDENTS } from '../constants/actionTypes';

const axiosConfig = {
  method: 'get',
  baseURL: '/tenant-api',
  url: '/student/',
};

export function* getStudentsWatcher() {
  yield takeEvery(TENANTS_GET_STUDENTS, getStudentsWorker);
}

function* getStudentsWorker() {
  yield put(startLoading());
  try {
    const payload = yield call(axios, axiosConfig);
    yield put(actions.tenantsSuccess('students', payload));
    yield put(stopLoading());
  } catch (error) {
    let message = 'Error by loading students';
    if (error.response && error.response.status >= 500) message = 'Server error';
    yield put(actions.tenantsFail('students', error.response));
    yield put(stopLoading());
    yield put(showMessage({
      message,
      variant: 'error',
    }));
  }
}
