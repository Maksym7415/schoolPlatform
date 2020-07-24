import { all } from 'redux-saga/effects';
import { getTenantsWatcher } from './getTenants';
import { createTenantWatcher } from './createTenant';
import { getTenantByIdWatcher } from './getTenentById';
import { updateTenentWatcher } from './updateTenent';
import { chooseSubscriptionWatcher } from './chooseSubscription';
import { getAdminssWatcher } from './getTenantsAdmins';
import { uploadLogoWatcher } from './uploadLogo';
import { getImageWatcher } from './getImage';
import { inviteAdminWatcher } from './inviteAdmin';
import { createDatabaseWatcher } from './createDatabase';
import { getCoursesWatcher } from './getCourses';
import { getStudentsWatcher } from './getStudents';
import { createCourseWatcher } from './createCourse';
import { getParentsWatcher } from './getParents';


function* tenantsSaga() {
  yield all([
    getTenantsWatcher(),
    createTenantWatcher(),
    getTenantByIdWatcher(),
    updateTenentWatcher(),
    chooseSubscriptionWatcher(),
    getAdminssWatcher(),
    uploadLogoWatcher(),
    getImageWatcher(),
    inviteAdminWatcher(),
    createDatabaseWatcher(),
    getCoursesWatcher(),
    getStudentsWatcher(),
    createCourseWatcher(),
    getParentsWatcher(),
  ]);
}

export default tenantsSaga;
