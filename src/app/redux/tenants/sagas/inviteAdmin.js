import {
  takeEvery, put, call, select,
} from 'redux-saga/effects';
import axios from 'axios';
import { showMessage } from '../../theme/constants/actionConstants';
import * as actions from '../constants/actionConstants';
import { TENANTS_INVITE_ADMINS } from '../constants/actionTypes';
import dive from '../../../functions/dive';

export function* inviteAdminWatcher() {
  yield takeEvery(TENANTS_INVITE_ADMINS, inviteAdminWorker);
}

function* inviteAdminWorker(action) {
  const { tenant_id } = yield select(({ authReducer }) => dive`${authReducer}token.payload`);
  try {
    const payload = yield call(axios.post, `/tenants/${tenant_id}/inviteadmin`, { tenant_id, emails: action.params, role: 'admin' });
    yield put(actions.tenantsSuccess('inviteAdmin', payload));
    yield put(showMessage({
      message: 'Admins invited successfully',
      variant: 'success',
    }));
  } catch (error) {
    let message = 'Error by admin inviting';
    if (error.response && error.response.status >= 500) message = 'Server error';
    yield put(actions.tenantsFail('inviteAdmin', error.response));
    yield put(showMessage({
      message,
      variant: 'error',
    }));
  }
}
