import {
  takeEvery, put, call, select,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { TENANTS_UPDATE_TENENTS } from '../constants/actionTypes';
import dive from '../../../functions/dive';

export function* updateTenentWatcher() {
  yield takeEvery(TENANTS_UPDATE_TENENTS, updateTenentWorker);
}

function* updateTenentWorker(action) {
  const id = yield select(({ tenentsReducer }) => dive`${tenentsReducer}tenentItem.data.id`);
  // yield put(startLoading());
  try {
    const payload = yield call(axios.post, '/tenants', { id, ...action.params });
    yield put(actions.tenantsSuccess('updateTenant', payload));
    yield put(actions.actionGetTenantById(id));
    // yield put(stopLoading());
    // yield put(showMessage({
    //   message: 'New tenant created',
    //   variant: 'success',
    // }));
  } catch (error) {
    let message = 'Cannot update';
    if (error.response && error.response.status >= 500) message = 'Server error';
    yield put(actions.tenantsFail('updateTenant', error.response));
    // yield put(stopLoading());
    yield put(showMessage({
      message,
      variant: 'error',
    }));
  }
}
