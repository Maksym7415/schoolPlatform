import {
  takeLatest, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../constants/actionConstants';
import { AUTH_VALIDATION_SUBDOMAIN } from '../constants/actionTypes';

export function* subdomainValidationWatcher() {
  yield takeLatest(AUTH_VALIDATION_SUBDOMAIN, subdomainValidationWorker);
}

function* subdomainValidationWorker(action) {
  try {
    const payload = yield call(axios.get, `/validate/subdomain/${action.params}`);
    yield put(actions.authSuccess('subdomainValidation', payload));
  } catch (error) {
    yield put(actions.authFail('subdomainValidation', error.response));
  }
}
