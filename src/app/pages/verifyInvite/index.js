import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Paper, Typography, TextField, Button, InputAdornment, IconButton,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import Loading from '../../components/loading';
import useStyles from './styles/styles';
import dive from '../../functions/dive';
import * as actions from '../../redux/authorization/constants/actionConstants';
import './styles/styles.scss';

const VerifyInviteAdmin = (props) => {
  const dispatch = useDispatch();
  const [urlParams] = useState(props.match.params.email);
  const verifyResponse = useSelector(({ authReducer }) => dive`${authReducer}verifyIviteAdmin.data`);
  const authData = useSelector(({ authReducer }) => dive`${authReducer}token.data`);
  const signUpResponse = useSelector(({ authReducer }) => dive`${authReducer}signUpAdmin.data`);
  const classes = useStyles();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    password: '',
  });
  const [validation, setValidation] = useState({
    firstName: false,
    lastName: false,
    password: false,
  });
  const [isShowPassword, setIsShowPassword] = useState(false);
  const passwordRegex = new RegExp(/(?=.*[0-9])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{6,}/);

  const handleChange = (event) => {
    event.persist();
    const { value, name } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleClick = () => {
    const validation = {};
    !form.firstName ? validation.firstName = true : validation.firstName = false;
    !form.lastName ? validation.lastName = true : validation.lastName = false;
    !form.password || !passwordRegex.test(form.password) ? validation.password = true : validation.password = false;
    if (!Object.values(validation).includes(true) && verifyResponse.tenant) {
      dispatch(actions.authSignUpAdmin({
        password: form.password,
        email: verifyResponse.email,
        phone: verifyResponse.tenant.school_contact_phone,
        first_name: form.firstName,
        last_name: form.lastName,
        role: 'admin',
        tenant_id: verifyResponse.tenant_id,
        invitation: verifyResponse.token,
      }));
    }
    setValidation(validation);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleClick();
  };

  const handleShowPassword = () => setIsShowPassword(!isShowPassword);

  useEffect(() => {
    if (!authData && window.location.search.includes('=')) dispatch(actions.authVerifyInviteAdmin(window.location.search.split('=')[1]));
  }, [urlParams]);

  useEffect(() => {
    if (signUpResponse) {
      props.history.push('/');
    }
  }, [signUpResponse]);

  if (authData) {
    props.history.push('/');
    return null;
  }

  return (
    <>
      {
        verifyResponse && <div className='invite-admins__form-container'>
          <Paper className={classes.stepContainer}>
            <Typography className={classes.title}>Setup Your Account</Typography>
            <div className='invite-admins__fields-container'>
              <TextField
                variant='outlined'
                fullWidth
                name='firstName'
                value={form.firstName}
                onChange={handleChange}
                inputProps={{ className: classes.input }}
                error={validation.firstName}
                helperText={validation.firstName && 'Mandatory field'}
                size='small'
                label='First Name'
              />
              <TextField
                className={clsx(validation.firstName ? classes.fieldError : classes.field)}
                variant='outlined'
                fullWidth
                name='lastName'
                value={form.lastName}
                onChange={handleChange}
                inputProps={{ className: classes.input }}
                error={validation.lastName}
                helperText={validation.lastName && 'Mandatory field'}
                size='small'
                label='Last Name'
              />
              <TextField
                className={clsx(validation.lastName ? classes.fieldError : classes.field)}
                variant='outlined'
                fullWidth
                type={isShowPassword ? 'text' : 'password'}
                name='password'
                value={form.password}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                InputProps={{
                  className: classes.input,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        // aria-label="toggle password visibility"
                        onClick={handleShowPassword}
                      >
                        {!isShowPassword ? <VisibilityIcon /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={validation.password}
                helperText={(validation.password && 'Should contain minimum 6 characters, number and special character')}
                size='small'
                label='Enter Password'
              />
            </div>
            <Button
              className={classes.button}
              fullWidth
              onClick={handleClick}
            >
              Submit
            </Button>
            <div style={{ paddingBottom: '6px' }} className={classes.bottomLinks}>
            </div>
          </Paper>
          <Typography className={classes.copyright}>All Rights Reserved LMS SaaS</Typography>
        </div>
      }
      <Loading />
    </>
  );
};

export default VerifyInviteAdmin;
