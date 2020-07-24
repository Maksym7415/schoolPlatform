import { all } from 'redux-saga/effects';
import authSaga from '../authorization/sagas';
import tenantsSaga from '../tenants/sagas';
import usersSaga from '../user/sagas';
import subscriptionsSaga from '../subscriptions/sagas';

function* rootSaga() {
  yield all([
    authSaga(),
    tenantsSaga(),
    usersSaga(),
    subscriptionsSaga(),
  ]);
}

export default rootSaga;
