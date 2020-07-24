import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { AUTH_SIGNUP_ADMIN } from '../constants/actionTypes';

export function* signUpAdminWatcher() {
  yield takeEvery(AUTH_SIGNUP_ADMIN, signUpAdminWorker);
}

function* signUpAdminWorker(action) {
  yield put(startLoading());
  try {
    const payload = yield call(axios.post, '/auth/createadmin', action.params);
    yield put(actions.authSuccess('signUpAdmin', payload));
    yield put(stopLoading());
    yield put(showMessage({
      message: 'Account created!',
      variant: 'success',
    }));
  } catch (error) {
    let message = 'Sign up error';
    if (error.response && error.response.status >= 500) message = 'Server error';
    if (error.response && error.response.data && error.response.data.text && error.response.data.text.includes('must be a valid email address')) message = 'Invalid email address';
    yield put(actions.authFail('signUpAdmin', error.response));
    yield put(showMessage({
      message,
      variant: 'error',
    }));
    yield put(stopLoading());
  }
}
