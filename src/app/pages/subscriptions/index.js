import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useStyles } from './styles';
import Loading from '../../components/loading';
import MyTable from '../../components/table';
import SubscriptionsRow from './components/tableRow';
import * as actions from '../../redux/subscriptions/constants/actionConstants';
import DialogForm from '../../components/dialogForm';
import tableConfig from './components/tableConfig';
import dialogConfig from './components/dialogConfig';
import dive from '../../functions/dive';

const Subscriptions = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [form, setForm] = useState();
  const subscriptions = useSelector(({ subscriptionsReducer }) => dive`${subscriptionsReducer}subscriptions.data`);
  const subscriptionCreated = useSelector(({ subscriptionsReducer }) => dive`${subscriptionsReducer}createSubscription.data`);
  const updateSubscription = useSelector(({ subscriptionsReducer }) => dive`${subscriptionsReducer}updateSubscription.data`);

  const handleChangeForm = (event) => {
    event.persist();
    const { name, value } = event.target;
    if (name === 'price') return setForm((prev) => ({ ...prev, [name]: +value }));
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleOpenAddForm = () => setIsOpenForm(true);
  const handleCloseForm = () => setIsOpenForm(false);
  const handleCreateSubscription = () => {
    if ('id' in form) return dispatch(actions.actionUpdateSubscription({ form }));
    dispatch(actions.actionCreateSubscription(form));
  };
  const handleEdit = (data) => {
    setIsOpenForm(true);
    setForm(data);
  };

  useEffect(() => {
    const form = { currency: '' };
    dialogConfig.map((item) => {
      form[item.name] = '';
    });
    setForm(form);
  }, []);

  useEffect(() => {
    if (!isOpenForm) {
      const form = { currency: '' };
      dialogConfig.map((item) => {
        form[item.name] = '';
      });
      setForm(form);
    }
  }, [isOpenForm]);

  useEffect(() => {
    if (subscriptionCreated || updateSubscription) setIsOpenForm(false);
  }, [subscriptionCreated, updateSubscription]);

  useEffect(() => {
    dispatch(actions.actionGetSubscriptions());
  }, []);

  return (
    <>
      <div className='flex flex-col w-full pt-25 px-10'>
        <div className={classes.headerContainer}>
        <Typography className={classes.title}>Subscriptions</Typography>
        <AddIcon onClick={handleOpenAddForm} className={classes.iconAdd} />
        </div>
        <MyTable
          config={tableConfig}
        >
          {subscriptions && subscriptions.map((item) => (
              <SubscriptionsRow
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
                    classes={classes}
                    changeForm={handleChangeForm}
                    setForm={setForm}
                    action={handleCreateSubscription}
                  />
        }
      </div>
      <Loading />
    </>
  );
};

export default Subscriptions;
