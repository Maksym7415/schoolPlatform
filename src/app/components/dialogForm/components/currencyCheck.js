import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  TextField, Select, FormControl, InputLabel, MenuItem,
} from '@material-ui/core';
import { actionGetCurrency } from '../../../redux/subscriptions/constants/actionConstants';
import useStyles from '../styles/styles';

const CheckCurrency = (props) => {
  const dispatch = useDispatch();
  const {
    name, label, onChange, form, className, setForm,
  } = props;
  const classes = useStyles();
  const currency = useSelector(({ subscriptionsReducer }) => subscriptionsReducer.currency.data);

  const handleChange = (event) => {
    event.persist();
    setForm((prev) => ({ ...prev, currency: event.target.value }));
  };

  useEffect(() => {
    dispatch(actionGetCurrency());
  }, []);

  return (
    <div className='dialog-form__check-currency-container'>
      <TextField
        className={className}
        label={label}
        name={name}
        value={form[name]}
        type='number'
        onChange={onChange}
        inputProps={{ className: 'dialog-form__number-input' }}
        fullWidth
        variant="outlined"
        size='small'
      />
      <FormControl className={classes.currencySelect} size='small' variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={form.currency}
          onChange={handleChange}
          label="Currency"
        >
          {currency.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
};

export default CheckCurrency;
