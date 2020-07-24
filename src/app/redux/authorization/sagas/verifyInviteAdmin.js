import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { AUTH_VERIFY_INVITE_ADMIN } from '../constants/actionTypes';

export function* verifyInviteAdminWatcher() {
  yield takeEvery(AUTH_VERIFY_INVITE_ADMIN, vverifyInviteAdminWorker);
}

function* vverifyInviteAdminWorker(action) {
  yield put(startLoading());
  try {
    const payload = yield call(axios.get, `/auth/verify_invite?token=${action.params}`);
    yield put(actions.authSuccess('verifyIviteAdmin', payload));
    yield put(stopLoading());
    yield put(showMessage({
      message: 'Your account verified',
      variant: 'success',
    }));
  } catch (error) {
    let message = 'Error by verifying account';
    if (error.response && error.response.status >= 500) message = 'Server error';
    yield put(actions.authFail('verifyIviteAdmin', error.response));
    yield put(showMessage({
      message,
      variant: 'error',
    }));
    yield put(stopLoading());
  }
}
