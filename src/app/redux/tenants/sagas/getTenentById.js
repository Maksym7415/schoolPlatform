import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { TENANTS_GET_TENENT_BY_ID } from '../constants/actionTypes';

export function* getTenantByIdWatcher() {
  yield takeEvery(TENANTS_GET_TENENT_BY_ID, getTenantByIdWorker);
}

function* getTenantByIdWorker(action) {
  yield put(startLoading());
  try {
    const payload = yield call(axios.get, `/tenants/${action.params}`);
    yield put(actions.tenantsSuccess('tenentItem', payload));
    yield put(stopLoading());
  } catch (error) {
    let message = 'Error';
    if (error.response && error.response.status >= 500) message = 'Server error';
    yield put(actions.tenantsFail('tenantItem', error.response));
    yield put(stopLoading());
    yield put(showMessage({
      message,
      variant: 'error',
    }));
  }
}
