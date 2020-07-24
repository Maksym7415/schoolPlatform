import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { SUBSCRIPTIONS_GET_SUBSCRIPTIONS } from '../constants/actionTypes';

export function* getSubscriptionsWatcher() {
  yield takeEvery(SUBSCRIPTIONS_GET_SUBSCRIPTIONS, getSubscriptionsWorker);
}

function* getSubscriptionsWorker() {
  yield put(startLoading());
  try {
    const payload = yield call(axios.get, '/subscription');
    yield put(actions.subscriptionsSuccess('subscriptions', payload));
    yield put(stopLoading());
  } catch (error) {
    let message = 'Error by loading subscriptions';
    if (error.response && error.response.status >= 500) message = 'Server error';
    yield put(actions.subscriptionsFail('subscriptions', error.response));
    yield put(stopLoading());
    yield put(showMessage({
      message,
      variant: 'error',
    }));
  }
}
