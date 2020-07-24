import React from 'react';
import {
  Typography, Paper, TextField, Button,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import clsx from 'clsx';
import useStyles from './styles';

const FirstStep = ({
  form, handleChange, validation, onClick, setForm,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.stepContainer}>
      <div className={classes.StepFieldsContainer}>
        <TextField
          className={validation.courseName ? classes.fieldError : classes.field}
          variant='outlined'
          fullWidth
          value={form.courseName}
          InputProps={{ className: classes.input }}
          name='courseName'
          onChange={handleChange}
          error={validation.courseName}
          helperText={validation.courseName && 'Mandatory field'}
          size='small'
          label='Course Name'
        />
        <TextField
          className={validation.courseCrn ? classes.fieldError : classes.field}
          variant='outlined'
          fullWidth
          value={form.courseCrn}
          InputProps={{ className: classes.input }}
          name='courseCrn'
          onChange={handleChange}
          error={validation.courseCrn}
          helperText={validation.courseCrn && 'Mandatory field'}
          size='small'
          label='Course CRN'
        />
        <div className={classes.dateContainer}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              disableToolbar
              autoOk
              size='small'
              format="dd.MM.yyyy"
              variant="inline"
              label="Course Start Date"
              className="w-full"
              inputVariant="outlined"
              InputProps={{ className: classes.input }}
              name="dateFrom"
              value={ form.dateFrom }
              onChange={ (date) => setForm((prev) => ({ ...prev, dateFrom: date }))}
              // required
              // helperText={dateFromText}
              // error={Boolean(dateFromText) || mandatoryFields.datesCompare}
            />
          </MuiPickersUtilsProvider>
        </div>
        <div className={classes.dateContainer}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              disableToolbar
              autoOk
              size='small'
              format="dd.MM.yyyy"
              variant="inline"
              label="Course End Date"
              className="w-full"
              inputVariant="outlined"
              InputProps={{ className: classes.input }}
              name="dateTo"
              value={ form.dateTo }
              onChange={ (date) => setForm((prev) => ({ ...prev, dateTo: date }))}
              minDate={form.dateFrom}
              // required
              // helperText={dateFromText}
              // error={Boolean(dateFromText) || mandatoryFields.datesCompare}
            />
          </MuiPickersUtilsProvider>
        </div>
      </div>
      <Button
          className={classes.buttonFirstStep}
          fullWidth
          color='primary'
          variant='contained'
          onClick={onClick}
        >
          Next
        </Button>
    </Paper>
  );
};

export default FirstStep;
