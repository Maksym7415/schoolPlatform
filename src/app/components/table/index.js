import React from 'react';
import {
  TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper,
} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import useStyles from './styles/styles';

const MyTable = (props) => {
  const classes = useStyles();
  return (
    <TableContainer style={{ minWidth: '1000px' }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              props.config.map((cell) => (
                cell.icon
                  ? <TableCell
                      className={classes.headerCell}
                      component='th'
                      key={cell.name}
                      align="right"
                    >
                      <SettingsIcon className={classes[cell.styles]}/>
                    </TableCell>
                  : <TableCell
                      className={classes.headerCell}
                      component='th'
                      key={cell.name}
                      align={cell.align}
                    >
                      {cell.label}
                    </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {props.children}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
