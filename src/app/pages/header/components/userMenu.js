import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Paper from '@material-ui/core/Paper';
import { Avatar } from '@material-ui/core';
import { useStyles } from './styles';
import { actionLogout } from '../../../redux/authorization/constants/actionConstants';
import { userDeleteData } from '../../../redux/user/constants/actionConstants';

const UserMenu = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOpenMenu = (event) => {
    setOpenMenu(!openMenu);
  };

  const handleLogout = () => {
    dispatch(actionLogout());
    dispatch(userDeleteData('profile'));
    props.history.push('/');
  };

  return (
    <div>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.userMenuContainer}
    >
      <ListItem onClick={handleOpenMenu}>
        <Avatar style={{ marginRight: '20px' }} alt='Remy Sharp' src='' />
          <span>{props.name}</span>
        {openMenu ? <ArrowDropUpIcon className={classes.userMenuArrow} /> : <ArrowDropDownIcon className={classes.userMenuArrow} />}
      </ListItem>
      <Collapse className={classes.userMenu} in={openMenu} timeout="auto" unmountOnExit>
        <List className={classes.userMenuList} component="div" disablePadding>
          <ListItem onClick={handleLogout}>
            <Paper className={classes.userMenuItem}>
              <p>Logout</p>
            </Paper>
          </ListItem>
        </List>
      </Collapse>
    </List>
    </div>
  );
};

export default withRouter(UserMenu);
