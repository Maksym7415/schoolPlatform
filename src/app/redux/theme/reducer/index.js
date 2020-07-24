import * as types from '../constants/actionTypes';

const initialState = {
  messageState: null,
  messageOptions: {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center',
    },
    autoHideDuration: 6000,
    message: 'Hi',
    variant: null,
  },
  isLoading: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.THEME_SHOW_MESSAGE: {
      return {
        messageState: true,
        messageOptions: {
          ...initialState.messageOptions,
          ...action.options,
        },
      };
    }
    case types.THEME_HIDE_MESSAGE: {
      return {
        ...state,
        messageState: null,
      };
    }
    case types.THEME_START_LOAIDING: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    case types.THEME_STOP_LOADING: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;
