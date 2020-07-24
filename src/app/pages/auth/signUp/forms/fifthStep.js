import React from 'react';
import {
  Typography, Paper, TextField, Button,
} from '@material-ui/core';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

const FifthStep = (props) => {
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
            value={props.form.primaryContactFirstName}
            InputProps={{ className: classes.input }}
            name='primaryContactFirstName'
            onChange={props.handleChange}
            error={props.validation.primaryContactFirstName}
            helperText={props.validation.primaryContactFirstName && 'Mandatory field'}
            size='small'
            label='Enter Primary Contact First Name'
          />
          <TextField
            variant='outlined'
            fullWidth
            value={props.form.primaryContactLastName}
            name='primaryContactLastName'
            onChange={props.handleChange}
            error={props.validation.primaryContactLastName}
            helperText={props.validation.primaryContactLastName && 'Mandatory field'}
            className={`${clsx(props.validation.primaryContactFirstName ? classes.fieldError : classes.stepField)} mt-10`}
            InputProps={{ className: classes.input }}
            size='small'
            label='Enter Primary Contact Last Name'
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
                onClick={props.handleSubmit }
              >
                Submit
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

export default FifthStep;
