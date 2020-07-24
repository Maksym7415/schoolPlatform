import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { TENANTS_GET_ADMINS } from '../constants/actionTypes';

export function* getAdminssWatcher() {
  yield takeEvery(TENANTS_GET_ADMINS, getAdminsWorker);
}

function* getAdminsWorker(action) {
  yield put(startLoading());
  try {
    const payload = yield call(axios.get, `/tenants/${action.params}/admins`);
    yield put(actions.tenantsSuccess('getAdmins', payload));
    yield put(stopLoading());
  } catch (error) {
    let message = 'Error';
    if (error.response && error.response.status >= 500) message = 'Server error';
    yield put(actions.tenantsFail('getAdmins', error.response));
    yield put(stopLoading());
    yield put(showMessage({
      message,
      variant: 'error',
    }));
  }
}
