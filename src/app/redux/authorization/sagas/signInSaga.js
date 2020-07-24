import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { AUTH_SIGNIN } from '../constants/actionTypes';

export function* signInWatcher() {
  yield takeEvery(AUTH_SIGNIN, signInWorker);
}

function* signInWorker(action) {
  yield put(startLoading());
  try {
    const payload = yield call(axios.post, '/auth', action.params);
    yield put(actions.authSuccess('auth', payload));
    yield put(actions.actionToken(payload.data.token));
    yield put(stopLoading());
    yield put(showMessage({
      message: 'You logged in',
      variant: 'success',
    }));
  } catch (error) {
    let message = '';
    error.response && error.response.status >= 500 ? message = 'Server error' : message = 'Invalid credantials';
    yield put(actions.authFail('auth', error.response));
    yield put(showMessage({
      message,
      variant: 'error',
    }));
    yield put(stopLoading());
  }
}
