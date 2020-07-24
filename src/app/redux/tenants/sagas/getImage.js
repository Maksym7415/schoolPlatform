import {
  takeEvery, put, call, select,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { TENANTS_GET_IMAGE } from '../constants/actionTypes';
import dive from '../../../functions/dive';

export function* getImageWatcher() {
  yield takeEvery(TENANTS_GET_IMAGE, getImageWorker);
}

function* getImageWorker() {
  const id = yield select(({ authReducer }) => dive`${authReducer}token.payload.tenant_id`);
  try {
    const payload = yield call(axios.get, `/tenants/${id}/image`, { responseType: 'blob' });
    yield put(actions.tenantsSuccess('getImage', payload.data));
  } catch (error) {
    yield put(actions.tenantsFail('getImage', error.response));
  }
}
