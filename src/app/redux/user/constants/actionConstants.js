
import * as types from './actionTypes';

export const actionGetUser = () => ({ type: types.USER_GET_USER });

export const actionUpdateUser = (params) => ({ type: types.USER_UPDATE_USER, params });

export const actionCreateUser = (params) => ({ type: types.USER_CREATE_USER, params });

export const userSuccess = (name, payload) => ({
  type: types.USER_SUCCESS,
  name,
  payload,
});

export const userFail = (name, error) => ({
  type: types.USER_FAIL,
  name,
  error,
});

export const userDeleteData = (name) => ({ type: types.USER_DELETE_DATA, name });
