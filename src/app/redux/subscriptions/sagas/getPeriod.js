import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../constants/actionConstants';
import { SUBSCRIPTION_GET_PERIODS } from '../constants/actionTypes';

export function* getPeriodWatcher() {
  yield takeEvery(SUBSCRIPTION_GET_PERIODS, getPeriodWorker);
}

function* getPeriodWorker() {
  try {
    const payload = yield call(axios.get, '/dict/periods');
    yield put(actions.subscriptionsSuccess('periods', payload));
  } catch (error) {
    yield put(actions.subscriptionsFail('periods', error.response));
  }
}
