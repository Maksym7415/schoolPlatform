import { all } from 'redux-saga/effects';
import { getUserWatcher } from './getUser';
import { updateUserWatcher } from './updateUser';
import { createUserWatcher } from './createUser';

function* usersSaga() {
  yield all([
    getUserWatcher(),
    updateUserWatcher(),
    createUserWatcher(),
  ]);
}

export default usersSaga;
