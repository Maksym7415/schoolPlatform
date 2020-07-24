import React from 'react';
import {
  Typography, Paper, TextField, Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

const SecondStep = (props) => {
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
          value={props.form.subdomain}
          InputProps={{ className: classes.input }}
          name='subdomain'
          onChange={props.handleChange}
          error={props.validation.subdomain || props.subdomainValidationError === 406}
          helperText={(props.subdomainValidationError === 406 && 'This subdomain already used') || (props.validation.subdomain && 'Should contain minimum 6 small letters or numbers')}
          size='small'
          label='Pick a Subdomain'
        />
      </div>
      <div className='flex-col w-full register__buttons-container'>
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

export default SecondStep;
