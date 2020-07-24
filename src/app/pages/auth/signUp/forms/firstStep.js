import React, { useRef, useEffect, useState } from 'react';
import {
  Typography, Paper, TextField, Select, MenuItem, FormControl, InputLabel, Button,
} from '@material-ui/core';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

const FirstStep = (props) => {
  const classes = useStyles();
  const inputLabel = useRef(null);

  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <>
      <Paper className={classes.stepContainer}>
      <Typography className={classes.title}>Register</Typography>
      <div className={classes.StepFieldsContainer}>
        <TextField
          className='mt-10'
          variant='outlined'
          fullWidth
          name='schoolName'
          value={props.form.schoolName}
          onChange={props.handleChange}
          InputProps={{ className: classes.input }}
          error={props.validation.schoolName}
          helperText={props.validation.schoolName && 'Should contain minimum 6 letters or numbers'}
          size='small'
          label='Enter School Name'
        />
        <div>
          <FormControl
            variant="outlined"
            fullWidth
            className={clsx(props.validation.schoolName ? classes.fieldError : classes.stepField)}
            size='small'
          >
            <InputLabel ref={ inputLabel }>
              Choose School Type
            </InputLabel>
            <Select
              name='schoolType'
              inputProps={{ className: classes.input }}
              labelWidth={ labelWidth }
              value={ props.form.schoolType }
              error={props.validation.schoolType}
              onChange={ props.handleChange }
            >
              {props.data && props.data.map((item) => <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>)}
            </Select>
          </FormControl>
          <p className={classes.errorText} style={props.validation.schoolType ? { display: 'block' } : { display: 'none' }}>
            Mandatory field
          </p>
        </div>
      </div>
      <Button
        className={classes.button}
        fullWidth
        onClick={props.onClick}
      >
        Next
      </Button>
      <div style={{ paddingBottom: '6px' }} className={classes.bottomLinks}>
        <Link to='/' className={classes.links}>Have an Account? Login</Link>
        <Link to='/forgot-passw' className={classes.links}>Forgot Password</Link>
      </div>
    </Paper>
    <Typography className={classes.copyright}>All Rights Reserved LMS SaaS</Typography>
    </>
  );
};

export default FirstStep;
