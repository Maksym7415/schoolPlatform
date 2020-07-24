import React from 'react';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from '../styles/styles';

const Actions = (props) => {
  const classes = useStyles();
  const { viewAction, editAction, deleteAction } = props;

  return (
    <>
      <Typography className={clsx(classes.contentCell, classes.pointer, classes.actionCellContent)} onClick={viewAction}>View</Typography>
      <Typography className={clsx(classes.contentCell, classes.pointer, classes.actionCellContent)} onClick={editAction}>Edit</Typography>
      <Typography className={classes.contentCell, classes.pointer} onClick={deleteAction}>Delete</Typography>
    </>
  );
};

export default Actions;
