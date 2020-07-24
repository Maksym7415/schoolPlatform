import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Typography,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import { actionUpdateUser, actionGetUser } from '../../../redux/user/constants/actionConstants';
import dive from '../../../functions/dive';
import Loading from '../../../components/loading';
import { useStyles } from './styles';
import formConfig from './components/config';

const SuperAdminProfile = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const profileInfo = useSelector(({ userReducer }) => dive`${userReducer}profile.data`);
  const updateProfile = useSelector(({ userReducer }) => dive`${userReducer}updateUser.data`);
  const [form, setForm] = useState({});

  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => dispatch(actionUpdateUser({ form: { id: profileInfo.id, ...form } }));

  useEffect(() => {
    if (profileInfo) {
      const form = {};
      formConfig.forEach((item) => {
        form[item.name] = profileInfo[item.name];
      });
      setForm(form);
    }
  }, [profileInfo]);

  useEffect(() => {
    updateProfile && dispatch(actionGetUser());
  }, [updateProfile]);

  return (
    <>
      <div className={classes.root}>
        <Typography className={classes.title}>Profile</Typography>
        <Grid className={classes.gridContainer} container spacing={2}>
          <Grid className={classes.gridItem} item xs={4}>
            <Typography>First name</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              name='first_name'
              value={form.first_name || ''}
              onChange={handleChange}
              variant="outlined"
              size='small'
            />
          </Grid>
        </Grid>
        <Grid className={classes.gridContainer} container spacing={2}>
          <Grid className={classes.gridItem} item xs={4}>
            <Typography>Last name</Typography>
          </Grid>
          <Grid item xs={8}>
          <TextField
            name='last_name'
            value={form.last_name || ''}
            onChange={handleChange}
            variant="outlined"
            size='small'
            />
          </Grid>
        </Grid>
        <Grid className={classes.gridContainer} container spacing={2}>
          <Grid className={classes.gridItem} item xs={4}>
            <Typography>Email</Typography>
          </Grid>
          <Grid item xs={8}>
          <TextField
            name='email'
            value={form.email || ''}
            onChange={handleChange}
            variant="outlined"
            size='small'
            />
          </Grid>
        </Grid>
        <Grid className={classes.gridContainer} container spacing={2}>
          <Grid className={classes.gridItem} item xs={4}>
            <Typography>Phone</Typography>
          </Grid>
          <Grid item xs={8}>
          <TextField
            name='phone'
            value={form.phone || ''}
            onChange={handleChange}
            variant="outlined"
            size='small'
          />
          </Grid>
        </Grid>
        <Button
          color='primary'
          variant='outlined'
          className={classes.button}
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
      <Loading/>
    </>
  );
};

export default SuperAdminProfile;
