import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from '../../../components/table/styles/styles';
import Actions from '../../../components/table/components/tableActions';
import StatusCircle from '../../../components/table/components/statusCircles';

const CoursesRow = (props) => {
  const { data, handleEdit } = props;
  const classes = useStyles();

  return (
        <TableRow>
            <TableCell className={classes.contentCell} align="center"><StatusCircle color='red' /></TableCell>
            <TableCell className={classes.contentCell} align="left">{data.id}</TableCell>
            <TableCell className={classes.contentCell} align="left">{data.name}</TableCell>
            <TableCell className={classes.contentCell} align="left">last name</TableCell>
            <TableCell className={classes.contentCell} align="left">email</TableCell>
            <TableCell className={classes.contentCell} align="left">phone number</TableCell>
            <TableCell className={clsx(classes.contentCell, classes.actionsCell)} align="left"><Actions editAction={() => handleEdit(data)} /></TableCell>
        </TableRow>);
};

export default CoursesRow;
