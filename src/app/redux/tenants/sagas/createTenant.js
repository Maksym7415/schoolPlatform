import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { TENANTS_CREATE_TENANTS } from '../constants/actionTypes';

export function* createTenantWatcher() {
  yield takeEvery(TENANTS_CREATE_TENANTS, createTenantWorker);
}

function* createTenantWorker(action) {
  yield put(startLoading());
  try {
    const payload = yield call(axios.post, '/tenants', action.params);
    yield put(actions.tenantsSuccess('createTenant', payload));
    yield put(actions.actionGetTenants('tenants'));
    yield put(stopLoading());
    yield put(showMessage({
      message: 'New tenant created',
      variant: 'success',
    }));
  } catch (error) {
    let message = 'Error';
    if (error.response && error.response.status >= 500) message = 'Server error';
    yield put(actions.tenantsFail('createTenant', error.response));
    yield put(stopLoading());
    yield put(showMessage({
      message,
      variant: 'error',
    }));
  }
}
