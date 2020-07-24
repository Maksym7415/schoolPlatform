import React, { useState } from 'react';
import {
  Typography, Paper, TextField, Button, InputAdornment, IconButton, Divider,
} from '@material-ui/core';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useStyles } from './styles';

const ThirdStep = (props) => {
  const classes = useStyles();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleShowPassword = () => setIsShowPassword(!isShowPassword);

  return (
    <>
      <Paper className={classes.stepContainer}>
        <Typography className={classes.title}>Register</Typography>
        <div className={classes.StepFieldsContainer}>
          <TextField
            className='mt-10'
            variant='outlined'
            type={isShowPassword ? 'text' : 'password'}
            fullWidth
            value={props.form.adminPassword}
            InputProps={{
              className: classes.input,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    className={classes.iconButton}
                    onClick={handleShowPassword}
                  >
                    {!isShowPassword ? <VisibilityIcon /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            name='adminPassword'
            onChange={props.handleChange}
            error={props.validation.adminPassword}
            helperText={props.validation.adminPassword && 'Should contain minimum 6 characters, number and special character'}
            size='small'
            label='Choose an Administrator Password'
          />
          <Divider className={clsx(props.validation.adminPassword ? classes.strongPasswordDividerError : classes.passwordDivider)} />
          <div className={classes.strongPasswprdIconContainer}>
            <img alt='lockIcon' src='../../../../../../../images/lockIcon.png' className={classes.lockIcon} />
            Enter a Strong Password
          </div>
        </div>
        <div className='flex-col w-full'>
          <div className={classes.buttonGroup}>
            <div className={classes.buttonContainer}>
              <Button
                className={classes.button}
                onClick={props.clickBack }
              >
                Back
              </Button>
            </div>
            <div className={classes.buttonContainer}>
              <Button
                className={classes.button}
                onClick={props.clickNext }
              >
                Next
              </Button>
            </div>
          </div>
          <div className={classes.bottomLinks}>
            <Link to='/' className={classes.links}>Have an Account? Login</Link>
            <Link to='/forgot-passw' className={classes.links}>Forgot Password</Link>
          </div>
        </div>
      </Paper>
      <Typography className={classes.copyright}>All Rights Reserved LMS SaaS</Typography>
    </>
  );
};

export default ThirdStep;
