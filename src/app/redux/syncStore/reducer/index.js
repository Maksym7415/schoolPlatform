import * as types from '../constants/actionTypes';

const initialState = {
  dropZone: {
    logo: null,
    students: null,
    teachers: null,
    courses: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SYNC_STORE_ADD: {
      return {
        ...state,
        [action.name]: action.data,
      };
    }
    case types.SYNC_STORE_DROP_ZONE: {
      return {
        ...state,
        dropZone: {
          ...state.dropZone,
          ...action.data,
        },
      };
    }
    case types.SYNC_STORE_DELETE: {
      return {
        ...state,
        [action.name]: initialState[action.name],
      };
    }
    default: return state;
  }
};
