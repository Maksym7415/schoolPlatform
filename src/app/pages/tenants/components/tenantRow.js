import React from 'react';
import { TableCell, TableRow, Tooltip } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

const TenantRow = (props) => {
  const { row, history, createDatabase } = props;
  return (
        <TableRow style={{ cursor: 'pointer' }} onClick={props.handleClickTenent}>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="left">{row.subdomain || '-'}</TableCell>
            <TableCell align="left">{row.school_email || '-'}</TableCell>
            <TableCell align="left">{row.school_contact_phone || '-'}</TableCell>
            <TableCell align="left">{row.primary_contact_first_name || '-'}</TableCell>
            <TableCell align="left">{row.primary_contact_last_name || '-'}</TableCell>
            <TableCell align="left">{row.primary_contact_email || '-'}</TableCell>
            <TableCell align="left">{row.primary_contact_phone || '-'}</TableCell>
            <TableCell style={{ display: 'flex', width: '100px' }} align="left">
              <Tooltip title="View details">
                <VisibilityIcon style={{ color: '#7a8596' }} onClick={() => history.push(`/tenants/${row.id}`)} className={props.iconEdit} />
              </Tooltip>
              <Tooltip title="Create Database">
                <img onClick={() => createDatabase(row.subdomain, row.id)} className='tenants__create-database-icon' alt='create database' src='../../../../../images/database.svg' />
              </Tooltip>
            </TableCell>
        </TableRow>);
};

export default TenantRow;
