import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage, startLoading, stopLoading } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { AUTH_SIGNUP } from '../constants/actionTypes';

export function* signUpWatcher() {
  yield takeEvery(AUTH_SIGNUP, signUpWorker);
}

function* signUpWorker(action) {
  const requestData = {
    school_name: action.params.schoolName,
    school_type: action.params.schoolType,
    password: action.params.adminPassword,
    subdomain: action.params.subdomain,
    school_email: action.params.schoolEmail,
    school_contact_phone: action.params.contactNumber,
    first_name: action.params.primaryContactFirstName,
    last_name: action.params.primaryContactLastName,
  };

  yield put(startLoading());
  try {
    const payload = yield call(axios.post, '/auth/signup_tenant', requestData);
    yield put(actions.authSuccess('signUp', payload));
    yield put(stopLoading());
    yield put(showMessage({
      message: 'Account created! Please check your email. We sent you email for confirmation',
      variant: 'success',
    }));
  } catch (error) {
    let message = 'Sign up error';
    if (error.response && error.response.status >= 500) message = 'Server error';
    if (error.response && error.response.data && error.response.data.text && error.response.data.text.includes('must be a valid email address')) message = 'Invalid email address';
    yield put(actions.authFail('signUp', error.response));
    yield put(showMessage({
      message,
      variant: 'error',
    }));
    yield put(stopLoading());
  }
}
