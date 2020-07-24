import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { actionGetAdmins } from '../../tenants/constants/actionConstants';
import { USER_UPDATE_USER } from '../constants/actionTypes';


export function* updateUserWatcher() {
  yield takeEvery(USER_UPDATE_USER, updateUserWorker);
}

function* updateUserWorker(action) {
  yield put(startLoading());
  try {
    const payload = yield call(axios.put, '/users', action.params.form);
    yield put(actions.userSuccess('updateUser', payload));
    yield action.params.tenant_id && put(actionGetAdmins(action.params.tenant_id));
    yield put(actions.actionGetUser());
    yield put(stopLoading());
    yield put(showMessage({
      message: 'User updated',
      variant: 'success',
    }));
  } catch (error) {
    let message = 'Error';
    if (error.response && error.response.status >= 500) message = 'Server error';
    yield put(actions.userFail('updateUser', error.response));
    yield put(stopLoading());
    yield put(showMessage({
      message,
      variant: 'error',
    }));
  }
}
