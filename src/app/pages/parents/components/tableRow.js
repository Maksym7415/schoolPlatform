import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from '../../../components/table/styles/styles';
import Actions from '../../../components/table/components/tableActions';
import StatusCircle from '../../../components/table/components/statusCircles';

const StudentsRow = (props) => {
  const { row, handleEdit } = props;
  const classes = useStyles();

  return (
        <TableRow>
            <TableCell className={classes.contentCell} align="center"><StatusCircle color='red' /></TableCell>
            <TableCell className={classes.contentCell} align="left">teacher Id</TableCell>
            <TableCell className={classes.contentCell} align="left">first name</TableCell>
            <TableCell className={classes.contentCell} align="left">last name</TableCell>
            <TableCell className={classes.contentCell} align="left">email</TableCell>
            <TableCell className={classes.contentCell} align="left">phone number</TableCell>
            <TableCell className={classes.contentCell} align="left">position</TableCell>
            <TableCell className={clsx(classes.contentCell, classes.actionsCell)} align="left"><Actions /></TableCell>
        </TableRow>);
};

export default StudentsRow;
