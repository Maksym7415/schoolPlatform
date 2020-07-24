import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { SUBSCRIPTION_UPDATE_SUBSCRIPTION } from '../constants/actionTypes';

export function* updateSubscriptionWatcher() {
  yield takeEvery(SUBSCRIPTION_UPDATE_SUBSCRIPTION, updateSubscriptionWorker);
}

function* updateSubscriptionWorker(action) {
  const { id } = action.params.form;
  yield put(startLoading());
  try {
    const payload = yield call(axios.put, `/subscription/${id}`, action.params.form);
    yield put(actions.subscriptionsSuccess('updateSubscription', payload));
    yield put(actions.actionGetSubscriptions());
    yield put(stopLoading());
    yield put(showMessage({
      message: 'Subscription updated',
      variant: 'success',
    }));
  } catch (error) {
    let message = 'Error by updating subscription';
    if (error.response && error.response.status >= 500) message = 'Server error';
    yield put(actions.subscriptionsFail('updateSubscription', error.response));
    yield put(stopLoading());
    yield put(showMessage({
      message,
      variant: 'error',
    }));
  }
}
