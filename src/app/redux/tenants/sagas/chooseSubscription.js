import {
  takeEvery, put, call, select,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { TENANTS_CHOOSE_SUBSCRIPTION } from '../constants/actionTypes';
import dive from '../../../functions/dive';

export function* chooseSubscriptionWatcher() {
  yield takeEvery(TENANTS_CHOOSE_SUBSCRIPTION, chooseSubscriptionWorker);
}

function* chooseSubscriptionWorker(action) {
  const id = yield select(({ authReducer }) => dive`${authReducer}token.payload.tenant_id`);
  yield put(startLoading());
  try {
    const payload = yield call(axios.post, `/tenants/${id}/subscription`, action.params);
    yield put(actions.tenantsSuccess('chooseSubscription', payload));
    yield put(stopLoading());
    yield put(showMessage({
      message: 'Subscription choosed',
      variant: 'success',
    }));
  } catch (error) {
    let message = 'Error by choosing subscription';
    if (error.response && error.response.status >= 500) message = 'Server error';
    yield put(actions.tenantsFail('chooseSubscription', error.response));
    yield put(stopLoading());
    yield put(showMessage({
      message,
      variant: 'error',
    }));
  }
}
