import {
  takeLatest, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../constants/actionConstants';
import { AUTH_VALIDATION_EMAIL } from '../constants/actionTypes';

export function* emailValidationWatcher() {
  yield takeLatest(AUTH_VALIDATION_EMAIL, emailValidationWorker);
}

function* emailValidationWorker(action) {
  try {
    const payload = yield call(axios.get, `/validate/email/${action.params}`);
    yield put(actions.authSuccess('emailValidation', payload));
  } catch (error) {
    yield put(actions.authFail('emailValidation', error.response));
  }
}
