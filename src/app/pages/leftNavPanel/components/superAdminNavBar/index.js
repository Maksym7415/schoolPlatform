import React from 'react';
import {
  ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import PaymentIcon from '@material-ui/icons/Payment';
import { Link } from 'react-router-dom';


const SuperAdminNavBar = (props) => {
  const { classes } = props;

  return (
    <div className={`box-shadow-top navbar__container ${classes.root}`}>
          <ListItem button component={Link} to={'/tenants'}>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText className='text-navbar' primary="Tenants" />
          </ListItem>
          <ListItem button component={Link} to={'/subscriptions'}>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText className='text-navbar' primary="Subscriptions" />
          </ListItem>
          <ListItem button component={Link} to={'/profile'}>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText className='text-navbar' primary="Profile" />
          </ListItem>
        </div>
  );
};

export default SuperAdminNavBar;
