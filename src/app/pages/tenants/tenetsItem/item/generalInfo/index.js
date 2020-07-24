import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Typography,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Paper,
} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import dive from '../../../../../functions/dive';
import Loading from '../../../../../components/loading';
import * as actions from '../../../../../redux/tenants/constants/actionConstants';
import { useStyles } from './styles';
import TenentItemRow from './tableRow';
import rows from './rows';

const GeneralInfo = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const tenentInfo = useSelector(({ tenentsReducer }) => dive`${tenentsReducer}tenentItem.data`);
  const [form, setForm] = useState(null);
  const [inputDisabled, setInputDisabled] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditIcon = (name) => setInputDisabled((prev) => ({ ...prev, [name]: !inputDisabled[name] }));

  const handleConfirmChanges = (name) => {
    dispatch(actions.actionUpdateTenent(form));
  };
  const handleCancelChanges = (name) => {
    setForm((prev) => ({ ...prev, [name]: tenentInfo[name] }));
    setInputDisabled((prev) => ({ ...prev, [name]: true }));
  };

  useEffect(() => {
    if (tenentInfo) setForm(tenentInfo.data);
  }, [tenentInfo]);

  useEffect(() => {
    if (tenentInfo) {
      const form = {};
      const inputDisabled = {};
      rows.forEach((row) => {
        form[row.value] = tenentInfo[row.value] || '-';
        inputDisabled[row.value] = true;
      });
      setForm(form);
      setInputDisabled(inputDisabled);
    }
  }, [tenentInfo]);

  useEffect(() => {
    dispatch(actions.actionGetTenantById(props.id ? props.id : props.match.params.id));
  }, []);

  return (
    <>
      <div className={classes.root}>
        <Typography className={classes.title}> {tenentInfo && tenentInfo.name.replace(tenentInfo.name[0], tenentInfo.name[0].toUpperCase())} </Typography>
        {
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Parameter</TableCell>
                  <TableCell align="left">Value</TableCell>
                  <TableCell align="right"> <SettingsIcon className={classes.iconSettings}/></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {form && rows.map((row) => (
                <TenentItemRow
                  key={row.id}
                  name={row.name}
                  value={form[row.value]}
                  handleEditIcon={handleEditIcon}
                  inputDisabled={inputDisabled}
                  inputName={row.value}
                  handleChange={handleChange}
                  handleConfirmChanges={handleConfirmChanges}
                  handleCancelChanges={handleCancelChanges}
                />))}
              </TableBody>
            </Table>
          </TableContainer>
        }
      </div>
      <Loading/>
    </>
  );
};

export default GeneralInfo;
