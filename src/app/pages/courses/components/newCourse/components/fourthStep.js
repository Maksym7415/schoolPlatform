import React from 'react';
import {
  Typography, Paper, TextField, Button,
} from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './styles';

const FourthStep = ({
  form, handleChange, validation, onClick, setForm,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.stepContainer}>
      <div className={classes.descriptionContainer}>
        <Typography classes={{ root: classes.descriptionTitle }}>Course Description</Typography>
        <TextField
          // className={classes.field}
          variant='outlined'
          fullWidth
          multiline
          rows={10}
          value={form.courseDescription}
          // InputProps={{ className: classes.input }}
          name='courseDescription'
          onChange={handleChange}
          error={validation.courseName}
          helperText={validation.courseName && 'Mandatory field'}
          size='small'
        />
      </div>
      <Button
        className={classes.buttonFourthStep}
        fullWidth
        color='primary'
        variant='contained'
        onClick={onClick}
      >
        Create Course
      </Button>
    </Paper>
  );
};

export default FourthStep;
