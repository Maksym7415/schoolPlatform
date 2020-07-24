import { all } from 'redux-saga/effects';
import { signInWatcher } from './signInSaga';
import { signUpWatcher } from './signUpSaga';
import { subdomainValidationWatcher } from './subdomainValidationSaga';
import { emailValidationWatcher } from './emailValidationSaga';
import { getSchooltypesWatcher } from './getSchooltypesSaga';
import { verifyEmailWatcher } from './verifyEmail';
import { verifyInviteAdminWatcher } from './verifyInviteAdmin';
import { signUpAdminWatcher } from './signUpAdmin';

function* authSaga() {
  yield all([
    signInWatcher(),
    signUpWatcher(),
    subdomainValidationWatcher(),
    emailValidationWatcher(),
    getSchooltypesWatcher(),
    verifyEmailWatcher(),
    verifyInviteAdminWatcher(),
    signUpAdminWatcher(),
  ]);
}

export default authSaga;
