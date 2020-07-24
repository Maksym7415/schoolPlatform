import {
  takeEvery, put, call, select,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { USER_GET_USER } from '../constants/actionTypes';
import dive from '../../../functions/dive';


export function* getUserWatcher() {
  yield takeEvery(USER_GET_USER, getUserWorker);
}

function* getUserWorker() {
  yield put(startLoading());
  const id = yield select(({ authReducer }) => dive`${authReducer}token.payload.user_id`);

  try {
    const payload = yield call(axios.get, `/users/${id}`);
    yield put(actions.userSuccess('profile', payload));
    yield put(stopLoading());
  } catch (error) {
    let message = 'Error';
    if (error.response && error.response.status >= 500) message = 'Server error';
    yield put(actions.userFail('profile', error.response));
    yield put(stopLoading());
    yield put(showMessage({
      message,
      variant: 'error',
    }));
  }
}
