import { all } from 'redux-saga/effects';
import { getSubscriptionsWatcher } from './getSubscriptions';
import { createSubscriptionWatcher } from './createSubscription';
import { updateSubscriptionWatcher } from './updateSubscription';
import { getCurrencyWatcher } from './getCurrency';
import { getPeriodWatcher } from './getPeriod';

function* subscriptionsSaga() {
  yield all([
    getSubscriptionsWatcher(),
    createSubscriptionWatcher(),
    updateSubscriptionWatcher(),
    getCurrencyWatcher(),
    getPeriodWatcher(),
  ]);
}

export default subscriptionsSaga;
