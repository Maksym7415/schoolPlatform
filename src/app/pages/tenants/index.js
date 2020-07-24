import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';
import { actionGetTenants, actionCreateTenant, actionCreateDatabase } from '../../redux/tenants/constants/actionConstants';
import dive from '../../functions/dive';
import TenantRow from './components/tenantRow';
import Loading from '../../components/loading';
import { useStyles } from './styles';
import CreateTenantForm from './components/createTenantForm';
import defaultForm from './defaultForm';
import './styles.scss';


const Tenants = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const tenants = useSelector(({ tenentsReducer }) => dive`${tenentsReducer}tenants.data`);
  const tenantCreated = useSelector(({ tenentsReducer }) => dive`${tenentsReducer}createTenant.data`);
  const role = useSelector(({ authReducer }) => dive`${authReducer}token.payload.role`);
  const [openForm, setOpenForm] = useState(false);
  const [form, setForm] = useState(defaultForm);

  const handleCloseForm = () => setOpenForm(false);
  const handleOpenAddForm = () => setOpenForm(true);
  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleCreateTenant = () => dispatch(actionCreateTenant(form));

  const handleClickEdit = (id) => {
    if (tenants) {
      const {
        name,
        subdomain,
        school_email,
        school_contact_phone,
        primary_contact_first_name,
        primary_contact_last_name,
        primary_contact_email,
        primary_contact_phone,
      } = tenants.filter((item) => item.id === id)[0];
      setForm({
        id,
        name,
        subdomain,
        school_email,
        school_contact_phone,
        primary_contact_first_name,
        primary_contact_last_name,
        primary_contact_email,
        primary_contact_phone,
      });
      setOpenForm(true);
    }
  };

  const handleCreateDatabase = (subdomain, id) => {
    dispatch(actionCreateDatabase({ subdomain, id }));
  };

  useEffect(() => {
    dispatch(actionGetTenants());
  }, []);

  useEffect(() => {
    if (tenantCreated) {
      setOpenForm(false);
      setForm(defaultForm);
    }
  }, [dispatch, tenantCreated]);

  return (
    <>
      <div className='flex flex-col w-full pt-25 px-10'>
        <div className={classes.headerContainer}>
        <Typography className={classes.title}>Tenents</Typography>
        { role === 'SA' && <AddIcon onClick={handleOpenAddForm} className={classes.iconAdd} /> }
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Tenant name</TableCell>
                <TableCell align="left">Subdomain</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Phone</TableCell>
                <TableCell align="left">Contact first name</TableCell>
                <TableCell align="left">Contact last name</TableCell>
                <TableCell align="left">Contact email</TableCell>
                <TableCell align="left">Contact phone</TableCell>
                <TableCell align="left"> <SettingsIcon className={classes.iconSettings}/></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tenants && tenants.map((row) => (
              <TenantRow
                key={row.id}
                row={row}
                iconEdit={classes.iconEdit}
                editOnclick={handleClickEdit}
                history={props.history}
                createDatabase={handleCreateDatabase}
              />))}
            </TableBody>
          </Table>
        </TableContainer>
        <CreateTenantForm
          openForm={openForm}
          handleCloseForm={handleCloseForm}
          form={form}
          classes={classes}
          changeForm={handleChangeForm}
          action={handleCreateTenant}
        />
      </div>
      <Loading/>
    </>
  );
};

export default Tenants;
