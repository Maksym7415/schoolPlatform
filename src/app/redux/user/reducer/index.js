import * as types from '../constants/actionTypes';

const initialState = {
  profile: {
    data: [],
    error: null,
  },
  updateUser: null,
  createUser: null,
};

export default (state = initialState, {
  type, payload, error, name,
}) => {
  switch (type) {
    case types.USER_SUCCESS: {
      return {
        ...state,
        [name]: payload,
      };
    }
    case types.USER_FAIL: {
      return {
        ...state,
        [name]: {
          ...initialState[name],
          error,
        },
      };
    }
    case types.USER_DELETE_DATA: {
      return {
        ...state,
        [name]: initialState[name],
      };
    }
    default: return state;
  }
};
