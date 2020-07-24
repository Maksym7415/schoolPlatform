import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  TextField, Select, FormControl, InputLabel, MenuItem,
} from '@material-ui/core';
import { actionGetPeriods } from '../../../redux/subscriptions/constants/actionConstants';
import useStyles from '../styles/styles';

const Period = (props) => {
  const { value, name, onChange } = props;
  const dispatch = useDispatch();
  const periods = useSelector(({ subscriptionsReducer }) => subscriptionsReducer.periods.data);
  const classes = useStyles();

  useEffect(() => {
    dispatch(actionGetPeriods());
  }, []);

  return (
    <FormControl fullWidth size='small' variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Period</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          name={name}
          onChange={onChange}
          label="Period"
        >
          {periods.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
        </Select>
      </FormControl>
  );
};

export default Period;
