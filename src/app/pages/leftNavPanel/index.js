import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './styles';
import dive from '../../functions/dive';
import roles from '../../routing/roles';
import './styles.scss';
import { actionGetUser } from '../../redux/user/constants/actionConstants';
import { actionGetImage } from '../../redux/tenants/constants/actionConstants';
import AdminNavBar from './components/adminNavBar';
import SuperAdminNavBar from './components/superAdminNavBar';

const LeftNavbar = (props) => {
  const classes = useStyles();
  const loginData = useSelector(({ authReducer }) => dive`${authReducer}token.payload.role`);
  const dispatch = useDispatch();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenPeople, setIsOpenPeople] = useState(false);
  const signed = useSelector(({ authReducer }) => dive`${authReducer}token.payload`);
  const image = useSelector(({ tenentsReducer }) => dive`${tenentsReducer}getImage`);
  const [logo, setLogo] = useState();

  const handleOpenMenu = (event) => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleOpenPeople = (event) => {
    setIsOpenPeople(!isOpenPeople);
  };

  useEffect(() => {
    if (signed) {
      dispatch(actionGetUser());
      if (signed.tenant_id !== 0) dispatch(actionGetImage());
    }
  }, [signed]);

  useEffect(() => {
    if (image) {
      const file = new FileReader();
      file.addEventListener('load', (event) => setLogo(event.target.result));
      if (image.type && image.type.includes('image')) file.readAsDataURL(image);
    }
  }, [image]);

  if (loginData === roles.superAdmin) {
    return (
      <SuperAdminNavBar
        classes={classes}
      />
    );
  }
  if (loginData === roles.admin) {
    return (
      <AdminNavBar
        classes={classes}
        handleOpenMenu={handleOpenMenu}
        isOpenMenu={isOpenMenu}
        logo={logo}
        handleOpenPeople={handleOpenPeople}
        isOpenPeople={isOpenPeople}
      />
    );
  }

  return null;
};

export default withRouter(LeftNavbar);
