
import * as types from './actionTypes';

export const showMessage = (options) => ({
  type: types.THEME_SHOW_MESSAGE,
  options,
});

export const hideMessage = () => ({
  type: types.THEME_HIDE_MESSAGE,
});

export const startLoading = () => ({
  type: types.THEME_START_LOAIDING,
  isLoading: true,
});

export const stopLoading = () => ({
  type: types.THEME_STOP_LOADING,
  isLoading: false,
});
