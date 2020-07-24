import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { TENANTS_GET_COURSES } from '../constants/actionTypes';

const axiosConfig = {
  method: 'get',
  baseURL: '/tenant-api',
  url: '/course/',
};

export function* getCoursesWatcher() {
  yield takeEvery(TENANTS_GET_COURSES, getCoursesWorker);
}

function* getCoursesWorker() {
  yield put(startLoading());
  try {
    const payload = yield call(axios, axiosConfig);
    yield put(actions.tenantsSuccess('courses', payload));
    yield put(stopLoading());
  } catch (error) {
    let message = 'Error by loading courses';
    if (error.response && error.response.status >= 500) message = 'Server error';
    yield put(actions.tenantsFail('courses', error.response));
    yield put(stopLoading());
    yield put(showMessage({
      message,
      variant: 'error',
    }));
  }
}
