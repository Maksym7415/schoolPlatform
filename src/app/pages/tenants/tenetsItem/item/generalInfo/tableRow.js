import React from 'react';
import { TableCell, TableRow, Input } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from './styles';

const TenentItemRow = (props) => {
  const classes = useStyles();

  return (
        <TableRow style={{ cursor: 'pointer' }} onClick={props.handleClickTenent}>
            <TableCell align="left">{props.name}</TableCell>
            <TableCell align="left">
              <Input name={props.inputName} classes={{ disabled: classes.disabled }} value={props.value} onChange={(e) => props.handleChange(e)} disabled={props.inputDisabled[props.inputName]} disableUnderline={props.inputDisabled[props.inputName]} />
            </TableCell>
            <TableCell align="right">
              {
                props.inputDisabled[props.inputName]
                  ? <EditIcon onClick={() => props.handleEditIcon(props.inputName)} className={classes.iconEdit} />
                  : <>
                    <CheckIcon onClick={() => props.handleConfirmChanges(props.inputName)} />
                    <CloseIcon onClick={() => props.handleCancelChanges(props.inputName)} />
                  </>
              }
            </TableCell>
        </TableRow>
  );
};

export default TenentItemRow;
