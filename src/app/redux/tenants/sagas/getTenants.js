import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { TENANTS_GET_TENANTS } from '../constants/actionTypes';

export function* getTenantsWatcher() {
  yield takeEvery(TENANTS_GET_TENANTS, getTenantsWorker);
}

function* getTenantsWorker() {
  yield put(startLoading());
  try {
    const payload = yield call(axios.get, '/tenants');
    yield put(actions.tenantsSuccess('tenants', payload));
    yield put(stopLoading());
  } catch (error) {
    let message = 'Error';
    if (error.response && error.response.status >= 500) message = 'Server error';
    yield put(actions.tenantsFail('tenants', error.response));
    yield put(stopLoading());
    yield put(showMessage({
      message,
      variant: 'error',
    }));
  }
}
