import * as types from '../constants/actionTypes';

const initialState = {
  subscriptions: null,
  createSubscription: null,
  updateSubscription: null,
  currency: {
    data: [],
  },
  periods: {
    data: [],
  },
};

export default (state = initialState, {
  type, payload, error, name,
}) => {
  switch (type) {
    case types.SUBSCRIPTIONS_SUCCESS: {
      return {
        ...state,
        [name]: {
          ...payload,
        },
      };
    }
    case types.SUBSCRIPTIONS_FAIL: {
      return {
        ...state,
        [name]: {
          error,
        },
      };
    }
    case types.SUBSCRIPTIONS_DELETE_DATA: {
      return {
        ...state,
        [name]: initialState[name],
      };
    }
    default: return state;
  }
};
