import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { AUTH_VERIFY_EMAIL } from '../constants/actionTypes';

export function* verifyEmailWatcher() {
  yield takeEvery(AUTH_VERIFY_EMAIL, verifyEmailWorker);
}

function* verifyEmailWorker(action) {
  yield put(startLoading());
  try {
    const payload = yield call(axios.get, `/auth/verify_email?token=${action.params}`);
    yield put(actions.authSuccess('verifyEmail', payload));
    yield put(stopLoading());
    yield put(showMessage({
      message: 'Your account verified',
      variant: 'success',
    }));
  } catch (error) {
    let message = 'Error by verifying account';
    if (error.response && error.response.status >= 500) message = 'Server error';
    yield put(actions.authFail('verifyEmail', error.response));
    yield put(showMessage({
      message,
      variant: 'error',
    }));
    yield put(stopLoading());
  }
}
