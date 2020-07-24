import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { AppBar, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './styles';
import dive from '../../functions/dive';
import UserMenu from './components/userMenu';

const Header = (props) => {
  const classes = useStyles();
  const signed = useSelector(({ authReducer }) => dive`${authReducer}token.payload`);
  const profileInfo = useSelector(({ userReducer }) => dive`${userReducer}profile.data`);

  const handleGoHome = () => props.history.push('/');

  if (signed) {
    return (
      <AppBar className={classes.root} elevation={0} position="fixed">
        <Typography
          className={classes.logo}
          onClick={handleGoHome}
          component="div"
          color="inherit"
          noWrap
        >
          Logo
          {/* {signed.role === roles.admin ? logo ? <img className={classes.image} alt='logo' src={logo} /> : 'Logo' : 'Logo'} */}
        </Typography>
        <div className={classes.signContainer}>
          {profileInfo && <UserMenu name={`${profileInfo.first_name} ${profileInfo.last_name}`}/>}
        </div>
      </AppBar>
    );
  }

  return null;
};

export default withRouter(Header);
