import React from 'react';
import {
  Button, TextField, Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './styles';
import config from './config';
import isEmailUsed from '../../../../functions/emailUrlParser';
import './styles.scss';

const InviteAdmins = ({
  form, onChange, validation, clickNext, clickBack, emailValidationError,
}) => {
  const classes = useStyles();

  return (
    <div className='get-started-invite-admins__container'>
      <div className='get-started-invite-admins__inputs'>
        {
          config.map((item) => (
            <TextField
              key={item.name}
              autoComplete="new-password"
              className={clsx(validation[item.name] ? classes.inputsError : classes.inputs)}
              label={item.label}
              name={item.name}
              value={form[item.name]}
              InputProps={{ className: classes.input }}
              onChange={onChange}
              error={validation[item.name]}
              helperText={(validation[item.name] && isEmailUsed(emailValidationError, form[item.name]) && 'This email already used') || (validation[item.name] && 'Enter correct email')}
              size='small'
              variant='outlined'
              fullWidth
            />
          ))
        }
      </div>
      <div className='get-started-invite-admins__buttonContainer'>
        <Button
          className={classes.button}
          onClick={clickBack }
        >
          Previous
        </Button>
        <Button
          className={classes.button}
          onClick={clickNext }
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default InviteAdmins;
