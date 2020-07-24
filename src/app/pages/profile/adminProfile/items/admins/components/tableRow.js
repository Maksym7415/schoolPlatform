import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from '../../../../../../components/table/styles/styles';

const AdminsListRow = (props) => {
  const { row, handleEdit } = props;
  const classes = useStyles();

  return (
        <TableRow>
            <TableCell className={classes.contentCell} align="left">{row.user.first_name}</TableCell>
            <TableCell className={classes.contentCell} align="left">{row.user.last_name}</TableCell>
            <TableCell className={classes.contentCell} align="left">{row.user.email}</TableCell>
            <TableCell className={classes.contentCell} align="left">{row.user.phone}</TableCell>
            <TableCell className={classes.contentCell} align="left">{row.role}</TableCell>
            <TableCell className={classes.contentCell} align="right"><EditIcon onClick={() => handleEdit(row)} className={props.classes.iconEdit} /></TableCell>
        </TableRow>);
};

export default AdminsListRow;
