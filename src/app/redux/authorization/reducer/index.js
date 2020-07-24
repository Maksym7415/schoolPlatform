import jwtDecode from 'jwt-decode';
import * as types from '../constants/actionTypes';

const initialState = {
  auth: {
    data: null,
  },
  token: null,
  signUp: null,
  subdomainValidation: null,
  schoolTypes: null,
  verifyEmail: null,
  verifyIviteAdmin: null,
  signUpAdmin: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_SUCCESS: {
      if (action.name === 'auth') localStorage.authToken = action.payload.data.token;
      return {
        ...state,
        [action.name]: action.payload,
      };
    }
    case types.AUTH_FAIL: {
      return {
        ...state,
        [action.name]: {
          error: action.error,
        },
      };
    }
    case types.AUTH_TOKEN: {
      let payload;
      try {
        payload = jwtDecode(action.token);
      } catch (e) {
        console.log(e);
      }
      return {
        ...state,
        token: {
          data: action.token,
          payload,
        },
      };
    }
    case types.LOGOUT: {
      localStorage.removeItem('authToken');
      return {
        ...state,
        auth: initialState.auth,
        token: initialState.token,
      };
    }
    case types.AUTH_DELETE_DATA: {
      return {
        ...state,
        [action.name]: undefined,
      };
    }
    default: return state;
  }
};
