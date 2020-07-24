import React, { useState, useEffect } from 'react';
import {
  Button, Paper, InputAdornment, Typography, TextField, IconButton,
} from '@material-ui/core';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useStyles } from './styles';
import dive from '../../../functions/dive';
import Loading from '../../../components/loading';
import { authSignIn } from '../../../redux/authorization/constants/actionConstants';

const SignIn = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isSigned = useSelector(({ authReducer }) => dive`${authReducer}token.data`);
  const dispatch = useDispatch();

  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);
  const handleClick = () => {
    !email ? setValidation((prev) => ({ ...prev, email: true })) : setValidation((prev) => ({ ...prev, email: false }));
    !password ? setValidation((prev) => ({ ...prev, password: true })) : setValidation((prev) => ({ ...prev, password: false }));
    // setTimeout(() => setValidation({ email: false, password: false }), 3000);

    if (email && password) dispatch(authSignIn({ email, password }));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleClick();
  };

  const handleShowPassword = () => setIsShowPassword(!isShowPassword);


  useEffect(() => {
    if (isSigned) {
      props.history.push('/profile');
    }
  }, [isSigned, props.history]);

  return (
    <div className={classes.container}>
      <Paper className={classes.stepContainer}>
      <Typography className={classes.title}>Login</Typography>
      <div className={classes.StepFieldsContainer}>
        <TextField
          variant='outlined'
          fullWidth
          value={email}
          onChange={changeEmail}
          InputProps={{ className: classes.input }}
          error={validation.email}
          helperText={validation.email && 'Mandatory field'}
          size='small'
          label='Enter Email'
        />
        <TextField
          className={clsx(validation.email ? classes.fieldError : classes.field)}
          variant='outlined'
          fullWidth
          type={isShowPassword ? 'text' : 'password'}
          value={password}
          onChange={changePassword}
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
          helperText={validation.password && 'Mandatory field'}
          size='small'
          label='Enter Password'
        />
      </div>
      <Button
        className={classes.button}
        fullWidth
        onClick={handleClick}
      >
        Login
      </Button>
      <div style={{ paddingBottom: '6px' }} className={classes.bottomLinks}>
        <Link to='/register' className={classes.links}>No Account? Register</Link>
        <Link to='/forgot-passw' className={classes.links}>Forgot Password</Link>
      </div>
    </Paper>
    <Typography className={classes.copyright}>All Rights Reserved LMS SaaS</Typography>
    <Loading/>
    </div>
  );
};

export default withRouter(SignIn);
