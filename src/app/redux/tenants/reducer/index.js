import * as types from '../constants/actionTypes';

const initialState = {
  tenants: null,
  createTenant: null,
  tenentItem: null,
  updateTenant: null,
  chooseSubscription: null,
  getAdmins: {
    data: [],
    error: null,
  },
  uploadLogo: null,
  getImage: null,
  inviteAdmin: null,
  createDatabase: null,
  courses: {
    data: [],
    error: null,
  },
  students: {
    data: [],
    error: null,
  },
  parents: {
    data: [],
    error: null,
  },
};

export default (state = initialState, {
  type, payload, error, name,
}) => {
  switch (type) {
    case types.TENANTS_SUCCESS: {
      return {
        ...state,
        [name]: payload,
      };
    }
    case types.TENANTS_FAIL: {
      return {
        ...state,
        [name]: {
          ...initialState[name],
          error,
        },
      };
    }
    case types.TENANTS_DELETE_DATA: {
      return {
        ...state,
        [name]: initialState[name],
      };
    }
    default: return state;
  }
};
