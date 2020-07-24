import React, { useEffect } from 'react';
import {
  Typography, Paper, Collapse, List, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actionGetTenantById } from '../../../../redux/tenants/constants/actionConstants';
import dive from '../../../../functions/dive';

const AdminNavBar = (props) => {
  const {
    classes, handleOpenMenu, isOpenMenu, logo, handleOpenPeople, isOpenPeople,
  } = props;
  const dispatch = useDispatch();
  const tenantInfo = useSelector(({ tenentsReducer }) => dive`${tenentsReducer}tenentItem.data`);
  const tenantId = useSelector(({ authReducer }) => dive`${authReducer}token.payload.tenant_id`);

  useEffect(() => {
    if (tenantId) dispatch(actionGetTenantById(tenantId));
  }, [tenantId]);

  return (
    <div className={`box-shadow-navbar-top navbar__container ${classes.root}`}>
    <Paper classes={{ root: classes.shadow }} className='navbar__menu-container' onClick={handleOpenMenu}>
      <img className='navbar__menu-logo' alt='menu logo' src={logo} />
      <div className='navbar__tenant-name-container'>
        <Typography className={classes.tenantName}>{tenantInfo && tenantInfo.name}</Typography>
        <Typography className={classes.tenantType}>{tenantInfo && tenantInfo.school_type}</Typography>
      </div>
      {isOpenMenu ? <ArrowDropUpIcon className='navbar__menu-arrow' /> : <ArrowDropDownIcon className='navbar__menu-arrow' />}
      <Collapse className={classes.userMenu} in={isOpenMenu} timeout="auto" unmountOnExit>
        <List className={classes.userMenuList} component="div" disablePadding>
          <ListItem button component={Link} to={'/profile'}>
            <ListItemIcon classes={{ root: classes.icons }}>
                <img src='../../../../images/book.svg' alt='home icon' />
            </ListItemIcon>
            <ListItemText className='text-navbar' primary="Some menu item" />
          </ListItem>
        </List>
      </Collapse>
    </Paper>
    <Typography className={classes.naviTitle}>MAIN NAVIGATION</Typography>
    <ListItem classes={{ root: classes.listItem }} button component={Link} to={'/profile'}>
      <ListItemIcon classes={{ root: classes.icons }}>
        <img className='navbar__icon' src='../../../../images/home.svg' alt='home icon' />
      </ListItemIcon>
      <ListItemText className='text-navbar' primary="Dashboard" />
    </ListItem>
    <ListItem classes={{ root: classes.listItem }} button component={Link} to={'/courses'}>
      <ListItemIcon classes={{ root: classes.icons }}>
        <img src='../../../../images/bar-chart.svg' alt='home icon' />
      </ListItemIcon>
      <ListItemText className='text-navbar' primary="Courses" />
    </ListItem>
    <ListItem classes={{ root: classes.listItem }} button>
      <div className='navbar__people-container'>
      <div onClick={handleOpenPeople} className='flex'>
        <ListItemIcon classes={{ root: classes.icons }}>
          <img src='../../../../images/users.svg' alt='home icon' />
        </ListItemIcon>
        <ListItemText className='text-navbar' primary="People" />
        {isOpenPeople ? <ArrowDropUpIcon className='navbar__menu-arrow' /> : <ArrowDropDownIcon className='navbar__menu-arrow' />}
      </div>
      <Collapse className={classes.peopleMenu} in={isOpenPeople} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem classes={{ root: classes.peopleMenuListItem }} button component={Link} to={'/students'}>
            <ListItemText className='text-navbar' primary="Students" />
          </ListItem>
          <ListItem classes={{ root: classes.peopleMenuListItem }} button component={Link} to={'/teachers'}>
            <ListItemText className='text-navbar' primary="Teachers" />
          </ListItem>
          <ListItem classes={{ root: classes.peopleMenuListItem }} button component={Link} to={'/parents'}>
            <ListItemText className='text-navbar' primary="Parents" />
          </ListItem>
          <ListItem classes={{ root: classes.peopleMenuListItem }} button component={Link} to={'/staff'}>
            <ListItemText className='text-navbar' primary="Staff" />
          </ListItem>
        </List>
      </Collapse>
      </div>
    </ListItem>
    <ListItem classes={{ root: classes.listItem }} button component={Link} to={'/profile'}>
      <ListItemIcon classes={{ root: classes.icons }}>
        <img src='../../../../images/check-square.svg' alt='home icon' />
      </ListItemIcon>
      <ListItemText className='text-navbar' primary="Grades" />
    </ListItem>
    <ListItem classes={{ root: classes.listItem }} button component={Link} to={'/profile'}>
      <ListItemIcon classes={{ root: classes.icons }}>
        <img src='../../../../images/shopping-bag.svg' alt='home icon' />
      </ListItemIcon>
      <ListItemText className='text-navbar' primary="Transaction" />
    </ListItem>
    <ListItem classes={{ root: classes.listItem }} button component={Link} to={'/profile'}>
      <ListItemIcon classes={{ root: classes.icons }}>
        <img src='../../../../images/clock.svg' alt='home icon' />
      </ListItemIcon>
      <ListItemText className='text-navbar' primary="Exams" />
    </ListItem>
    <ListItem classes={{ root: classes.listItem }} button component={Link} to={'/profile'}>
      <ListItemIcon classes={{ root: classes.icons }}>
        <img src='../../../../images/shield.svg' alt='home icon' />
      </ListItemIcon>
      <ListItemText className='text-navbar' primary="Security" />
    </ListItem>
    <ListItem classes={{ root: classes.listItem }} button component={Link} to={'/get-started'}>
      <ListItemIcon classes={{ root: classes.icons }}>
        <img src='../../../../images/settings.svg' alt='home icon' />
      </ListItemIcon>
      <ListItemText className='text-navbar' primary="Settings" />
    </ListItem>
    <Typography className={classes.naviTitle}>SUPPORT</Typography>
    <ListItem classes={{ root: classes.listItem }} button component={Link} to={'/profile'}>
      <ListItemIcon classes={{ root: classes.icons }}>
        <img src='../../../../images/trello.svg' alt='home icon' />
      </ListItemIcon>
      <ListItemText className='text-navbar' primary="Knowledge base" />
    </ListItem>
    <ListItem classes={{ root: classes.listItem }} button component={Link} to={'/profile'}>
      <ListItemIcon classes={{ root: classes.icons }}>
        <img src='../../../../images/help-circle.svg' alt='home icon' />
      </ListItemIcon>
      <ListItemText className='text-navbar' primary="Help Bot" />
    </ListItem>
    </div>
  );
};

export default AdminNavBar;
