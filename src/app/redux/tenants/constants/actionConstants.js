
import * as types from './actionTypes';

export const actionGetTenants = () => ({ type: types.TENANTS_GET_TENANTS });

export const actionGetTenantById = (params) => ({ type: types.TENANTS_GET_TENENT_BY_ID, params });

export const actionCreateTenant = (params) => ({ type: types.TENANTS_CREATE_TENANTS, params });

export const actionUpdateTenent = (params) => ({ type: types.TENANTS_UPDATE_TENENTS, params });

export const tenantsSuccess = (name, payload) => ({ type: types.TENANTS_SUCCESS, name, payload });

export const tenantsFail = (name, error) => ({ type: types.TENANTS_FAIL, name, error });

export const actionChooseSubscription = (params) => ({ type: types.TENANTS_CHOOSE_SUBSCRIPTION, params });

export const tenantsDeleteData = () => ({ type: types.TENANTS_DELETE_DATA });

export const actionGetAdmins = (params) => ({ type: types.TENANTS_GET_ADMINS, params });

export const actionUploadLogo = (params) => ({ type: types.TENANTS_UPLOAD_LOGO, params });

export const actionGetImage = () => ({ type: types.TENANTS_GET_IMAGE });

export const actionInviteAdmin = (params) => ({ type: types.TENANTS_INVITE_ADMINS, params });

export const actionCreateDatabase = (params) => ({ type: types.TENANTS_CREATE_DATABASE, params });

export const actionGetCourses = () => ({ type: types.TENANTS_GET_COURSES });

export const actionGetStudents = () => ({ type: types.TENANTS_GET_STUDENTS });

export const actionCreateCourse = (params) => ({ type: types.TENANTS_CREATE_COURSE, params });

export const actionGetParents = () => ({ type: types.TENANTS_GET_PARENTS });
