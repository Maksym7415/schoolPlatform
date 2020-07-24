import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const SubscriptionsRow = (props) => {
  const { row, handleEdit } = props;

  return (
        <TableRow>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="left">{row.price}</TableCell>
            <TableCell align="left">{row.accrual_period}</TableCell>
            <TableCell align="right"><EditIcon onClick={() => handleEdit(row)} className={props.classes.iconEdit} /></TableCell>
        </TableRow>);
};

export default SubscriptionsRow;
