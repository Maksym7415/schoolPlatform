import React from 'react';
import { useSelector } from 'react-redux';
import roles from '../../routing/roles';
import SuperAdminProfile from './superAdminProfile';
import AdminProfile from './adminProfile';
import dive from '../../functions/dive';

const Profile = (props) => {
  const role = useSelector(({ authReducer }) => dive`${authReducer}token.payload.role`);

  if (role === roles.superAdmin) return <SuperAdminProfile />;
  if (role === roles.admin) return <AdminProfile {...props} />;
  return null;
};

export default Profile;
