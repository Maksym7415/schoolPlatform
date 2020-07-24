import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { TENANTS_CREATE_COURSE } from '../constants/actionTypes';

const axiosConfig = {
  method: 'post',
  baseURL: '/tenant-api',
  url: '/course/',
};

export function* createCourseWatcher() {
  yield takeEvery(TENANTS_CREATE_COURSE, createCourseWorker);
}

function* createCourseWorker(action) {
  yield put(startLoading());
  const data = {
    crn: action.params.courseCrn,
    description: action.params.courseDescription,
    name: action.params.courseName,
    featured_image: 'string',
    teachers: action.params.teachers,
  };
  try {
    const payload = yield call(axios, { ...axiosConfig, data });
    yield put(actions.tenantsSuccess('createCourse', payload.data));
    yield put(actions.actionGetCourses());
    yield put(stopLoading());
    yield put(showMessage({
      message: 'New tenant created',
      variant: 'success',
    }));
  } catch (error) {
    let message = 'Error';
    if (error.response && error.response.status >= 500) message = 'Server error';
    yield put(actions.tenantsFail('createCourse', error.response));
    yield put(stopLoading());
    yield put(showMessage({
      message,
      variant: 'error',
    }));
  }
}
