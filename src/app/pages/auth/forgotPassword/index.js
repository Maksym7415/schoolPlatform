import React, { useState } from 'react';
import {
  Typography, Paper, TextField, Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

const ForgotPassword = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [validation, setValidation] = useState(false);

  const handleChange = (e) => setEmail(e.target.value);

  const handleReset = () => {
    !email ? setValidation(true) : setValidation(false);
  };

  return (
    <div className={classes.container}>
      <Paper className={classes.stepContainer}>
      <Typography className={classes.title}>Forgot Password</Typography>
      <div className={classes.StepFieldsContainer}>
        <TextField
          className='mt-10'
          variant='outlined'
          fullWidth
          value={email}
          InputProps={{ className: classes.input }}
          onChange={handleChange}
          error={validation}
          helperText={validation && 'Enter email address'}
          size='small'
          label='Enter Email'
        />
      </div>
      <div className='flex-col w-full register__buttons-container'>
      <Button
        className={classes.button}
        fullWidth
        onClick={handleReset}
      >
        Reset Password
      </Button>
        <div className={classes.bottomLinks}>
          <Link to='/register' className={classes.links}>No Account? Register</Link>
          <Link to='/' className={classes.links}>Forgot Password</Link>
        </div>
      </div>
    </Paper>
    <Typography className={classes.copyright}>All Rights Reserved LMS SaaS</Typography>
    </div>
  );
};

export default ForgotPassword;
