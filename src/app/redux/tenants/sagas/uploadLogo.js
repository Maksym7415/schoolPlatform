import {
  takeEvery, put, call, select,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { TENANTS_UPLOAD_LOGO } from '../constants/actionTypes';
import dive from '../../../functions/dive';

export function* uploadLogoWatcher() {
  yield takeEvery(TENANTS_UPLOAD_LOGO, uploadLogoWorker);
}

function* uploadLogoWorker(action) {
  const id = yield select(({ authReducer }) => dive`${authReducer}token.payload.tenant_id`);
  const formData = new FormData();
  formData.append('file', action.params.file);
  yield put(startLoading());
  try {
    const payload = yield call(axios, {
      url: `/tenants/${id}/image`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${localStorage.authToken}`,
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    });
    yield put(actions.tenantsSuccess('uploadLogo', payload));
    yield put(actions.actionGetImage());
    yield put(stopLoading());
    yield put(showMessage({
      message: 'Logo saved successfully',
      variant: 'success',
    }));
  } catch (error) {
    let message = 'Cannot upload logo';
    if (error.response && error.response.status >= 500) message = 'Server error';
    yield put(actions.tenantsFail('uploadLogo', error.response));
    yield put(stopLoading());
    yield put(showMessage({
      message,
      variant: 'error',
    }));
  }
}
