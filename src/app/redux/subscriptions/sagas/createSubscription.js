import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { SUBSCRIPTION_CREATE_SUBSCRIPTION } from '../constants/actionTypes';

export function* createSubscriptionWatcher() {
  yield takeEvery(SUBSCRIPTION_CREATE_SUBSCRIPTION, createSubscriptionWorker);
}

function* createSubscriptionWorker(action) {
  yield put(startLoading());
  try {
    const payload = yield call(axios.post, '/subscription', action.params);
    yield put(actions.subscriptionsSuccess('createSubscription', payload));
    yield put(actions.actionGetSubscriptions());
    yield put(stopLoading());
    yield put(showMessage({
      message: 'New subscription created',
      variant: 'success',
    }));
  } catch (error) {
    let message = 'Error by creating subscription';
    if (error.response && error.response.status >= 500) message = 'Server error';
    yield put(actions.subscriptionsFail('createSubscription', error.response));
    yield put(stopLoading());
    yield put(showMessage({
      message,
      variant: 'error',
    }));
  }
}
