import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../constants/actionConstants';
import { SUBSCRIPTION_GET_CURRENCY } from '../constants/actionTypes';

export function* getCurrencyWatcher() {
  yield takeEvery(SUBSCRIPTION_GET_CURRENCY, getCurrencyWorker);
}

function* getCurrencyWorker() {
  try {
    const payload = yield call(axios.get, '/dict/currency');
    yield put(actions.subscriptionsSuccess('currency', payload));
  } catch (error) {
    yield put(actions.subscriptionsFail('currency', error.response));
  }
}
