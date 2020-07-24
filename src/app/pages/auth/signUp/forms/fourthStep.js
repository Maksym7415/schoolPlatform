import React from 'react';
import {
  Typography, Paper, TextField, Button,
} from '@material-ui/core';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

const FourthStep = (props) => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.stepContainer}>
        <Typography className={classes.title}>Register</Typography>
        <div className={classes.StepFieldsContainer}>
          <TextField
            className='mt-10'
            variant='outlined'
            fullWidth
            value={props.form.schoolEmail}
            InputProps={{ className: classes.input }}
            name='schoolEmail'
            onChange={props.handleChange}
            error={props.validation.schoolEmail || props.emailValidationError === 406}
            helperText={(props.emailValidationError === 406 && 'This email already used') || (props.validation.schoolEmail && 'Enter correct email')}
            size='small'
            label='Enter School Email'
          />
          <TextField
            className={`${clsx(props.validation.schoolEmail ? classes.fieldError : classes.stepField)} mt-10`}
            variant='outlined'
            fullWidth
            value={props.form.contactNumber}
            name='contactNumber'
            onChange={props.handleChange}
            InputProps={{ className: classes.input }}
            error={props.validation.contactNumber}
            helperText={props.validation.contactNumber && 'Mandatory field'}
            size='small'
            label='Enter School Contact Number'
          />
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
            <Link to='/auth' className={classes.links}>Have an Account? Login</Link>
            <Link to='/forgot-passw' className={classes.links}>Forgot Password</Link>
          </div>
        </div>
      </Paper>
      <Typography className={classes.copyright}>All Rights Reserved LMS SaaS</Typography>
    </>
  );
};

export default FourthStep;
