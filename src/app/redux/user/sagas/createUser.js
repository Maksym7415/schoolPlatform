import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { actionGetAdmins } from '../../tenants/constants/actionConstants';
import { USER_CREATE_USER } from '../constants/actionTypes';

export function* createUserWatcher() {
  yield takeEvery(USER_CREATE_USER, createUserWorker);
}

function* createUserWorker(action) {
  yield put(startLoading());
  try {
    const payload = yield call(axios.post, '/users', action.params);
    yield put(actions.userSuccess('createUser', payload));
    yield put(actionGetAdmins(action.params.tenant_id));
    yield put(stopLoading());
    yield put(showMessage({
      message: 'User created',
      variant: 'success',
    }));
  } catch (error) {
    let message = 'Error by creating user';
    if (error.response && error.response.status >= 500) message = 'Server error';
    yield put(actions.userFail('createUser', error.response));
    yield put(stopLoading());
    yield put(showMessage({
      message,
      variant: 'error',
    }));
  }
}
