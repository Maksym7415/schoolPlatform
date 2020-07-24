
import * as types from './actionTypes';

export const actionGetSubscriptions = () => ({ type: types.SUBSCRIPTIONS_GET_SUBSCRIPTIONS });

export const subscriptionsSuccess = (name, payload) => ({
  type: types.SUBSCRIPTIONS_SUCCESS,
  name,
  payload,
});

export const subscriptionsFail = (name, error) => ({
  type: types.SUBSCRIPTIONS_FAIL,
  name,
  error,
});

export const subscriptionsDeleteData = (name) => ({ type: types.SUBSCRIPTIONS_DELETE_DATA, name });

export const actionCreateSubscription = (params) => ({ type: types.SUBSCRIPTION_CREATE_SUBSCRIPTION, params });

export const actionUpdateSubscription = (params) => ({ type: types.SUBSCRIPTION_UPDATE_SUBSCRIPTION, params });

export const actionGetCurrency = () => ({ type: types.SUBSCRIPTION_GET_CURRENCY });

export const actionGetPeriods = () => ({ type: types.SUBSCRIPTION_GET_PERIODS });
