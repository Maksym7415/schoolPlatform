import {
  takeEvery, put, call, select,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { TENANTS_CREATE_DATABASE } from '../constants/actionTypes';
import dive from '../../../functions/dive';

export function* createDatabaseWatcher() {
  yield takeEvery(TENANTS_CREATE_DATABASE, createDatabaseWorker);
}

function* createDatabaseWorker(action) {
  yield put(startLoading());
  try {
    const payload = yield call(axios.post, `/tenants/${action.params.id}/database/test`, { database_name: action.params.subdomain });
    yield put(actions.tenantsSuccess('createDatabase', payload));
    yield put(stopLoading());
    yield put(showMessage({
      message: 'Database created',
      variant: 'success',
    }));
  } catch (error) {
    let message = 'Error';
    if (error.response && error.response.status >= 500) message = 'Server error';
    yield put(actions.tenantsFail('createDatabase', error.response));
    yield put(stopLoading());
    yield put(showMessage({
      message,
      variant: 'error',
    }));
  }
}
