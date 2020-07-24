
import * as types from './actionTypes';

export const authSignIn = (params) => ({ type: types.AUTH_SIGNIN, params });

export const authSignUp = (params) => ({ type: types.AUTH_SIGNUP, params });

export const authSignUpAdmin = (params) => ({ type: types.AUTH_SIGNUP_ADMIN, params });

export const authValidateSubdomain = (params) => ({ type: types.AUTH_VALIDATION_SUBDOMAIN, params });

export const authValidateEmail = (params) => ({ type: types.AUTH_VALIDATION_EMAIL, params });

export const authSuccess = (name, payload) => ({ type: types.AUTH_SUCCESS, name, payload });

export const authFail = (name, error) => ({ type: types.AUTH_FAIL, name, error });

export const actionToken = (token) => ({ type: types.AUTH_TOKEN, token });

export const actionLogout = () => ({ type: types.LOGOUT });

export const authGetSchoolTypes = () => ({ type: types.AUTH_GET_SCHOOL_TYPES });

export const authVerifyEmail = (params) => ({ type: types.AUTH_VERIFY_EMAIL, params });

export const authVerifyInviteAdmin = (params) => ({ type: types.AUTH_VERIFY_INVITE_ADMIN, params });

export const authDeleteData = (name) => ({ type: types.AUTH_DELETE_DATA, name });
