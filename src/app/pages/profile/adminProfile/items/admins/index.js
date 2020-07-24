import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';
import Loading from '../../../../../components/loading';
import MyTable from '../../../../../components/table';
import AdminsListRow from './components/tableRow';
import * as actions from '../../../../../redux/tenants/constants/actionConstants';
import { actionUpdateUser, actionCreateUser } from '../../../../../redux/user/constants/actionConstants';
import DialogForm from '../../../../../components/dialogForm';
import tableConfig from './components/tableConfig';
import { addForm, editForm } from './components/dialogConfig';
import dive from '../../../../../functions/dive';

const AdminsList = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [dialogConfig, setDialogConfig] = useState(addForm);
  const [form, setForm] = useState();
  const [isOpenForm, setIsOpenForm] = useState(false);
  const tenantId = useSelector(({ authReducer }) => dive`${authReducer}token.payload.tenant_id`);
  const admins = useSelector(({ tenentsReducer }) => tenentsReducer.getAdmins.data);
  const updateUser = useSelector(({ userReducer }) => dive`${userReducer}updateUser.data`);
  const createUser = useSelector(({ userReducer }) => dive`${userReducer}createUser.data`);

  const handleChangeForm = (event) => {
    event.persist();
    const { name, value } = event.target;
    if (name === 'price') return setForm((prev) => ({ ...prev, [name]: +value }));
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleOpenAddForm = () => {
    setIsOpenForm(true);
  };
  const handleCloseForm = () => setIsOpenForm(false);
  const handleAddAdmin = () => {
    const tenant_id = props.id ? +props.id : +tenantId;
    if ('id' in form) return dispatch(actionUpdateUser({ form, tenant_id }));
    dispatch(actionCreateUser({ tenant_id, ...form }));
  };
  const handleEdit = (data) => {
    const form = { id: +data.user_id };
    setIsOpenForm(true);
    editForm.forEach((item) => {
      if (item.name === 'role') {
        form.role = data.role;
      } else {
        form[item.name] = data.user[item.name] || '';
      }
    });
    setDialogConfig(editForm);
    setForm(form);
  };

  useEffect(() => {
    const form = {};
    addForm.forEach((item) => {
      if (item.name !== 'password') form[item.name] = '';
    });
    setForm(form);
  }, []);

  useEffect(() => {
    if (!isOpenForm) {
      const form = {};
      addForm.forEach((item) => {
        form[item.name] = '';
      });
      setDialogConfig(addForm);
      setForm(form);
    }
  }, [isOpenForm]);

  useEffect(() => {
    if (createUser || updateUser) setIsOpenForm(false);
  }, [createUser, updateUser]);

  useEffect(() => {
    tenantId && dispatch(actions.actionGetAdmins(tenantId));
    props.id && dispatch(actions.actionGetAdmins(+props.id));
  }, [tenantId, props.id]);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.headerContainer}>
        <Typography className={classes.title}>Admins</Typography>
        <AddIcon onClick={handleOpenAddForm} className={classes.iconAdd} />
        </div>
        <MyTable
          config={tableConfig}
        >
          {admins.map((item) => (
              <AdminsListRow
                key={item.id}
                row={item}
                handleEdit={handleEdit}
                classes={classes}
              />
          ))}
        </MyTable>
        {
          form && <DialogForm
                    isOpenForm={isOpenForm}
                    handleCloseForm={handleCloseForm}
                    form={form}
                    fields={dialogConfig}
                    actionButtons
                    classes={classes}
                    changeForm={handleChangeForm}
                    action={handleAddAdmin}
                  />
        }
      </div>
      <Loading />
    </>
  );
};

export default AdminsList;
