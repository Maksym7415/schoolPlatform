import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { TabPanel } from '../../components/tabPanel';
import StepsList from './components/stepsList';
import UploadLogo from './components/logoUpload';
import Subscriptions from './components/subscriptions';
import InviteAdmins from './components/inviteAdmins';
import BulkImport from './components/bulkImport';
import { authValidateEmail } from '../../redux/authorization/constants/actionConstants';
import { showMessage } from '../../redux/theme/constants/actionConstants';
import * as actions from '../../redux/tenants/constants/actionConstants';
import { actionGetSubscriptions } from '../../redux/subscriptions/constants/actionConstants';
import useStyles from './styles/styles';
import isEmailUsed from '../../functions/emailUrlParser';
import './styles/styles.scss';
import dive from '../../functions/dive';
import { defaultForm } from './config';

const GetStarted = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [form, setForm] = useState(defaultForm);
  const dispatch = useDispatch();
  const logo = useSelector(({ syncReducer }) => syncReducer.dropZone.logo);
  const emailValidation = useSelector(({ authReducer }) => dive`${authReducer}emailValidation.config.url`);
  const emailValidationError = useSelector(({ authReducer }) => dive`${authReducer}emailValidation.error.config.url`);
  const inviteAdminsResponse = useSelector(({ tenentsReducer }) => dive`${tenentsReducer}inviteAdmin.data`);
  const [validation, setValidation] = useState({
    logo: false,
    adminEmail1: false,
    adminEmail2: false,
    adminEmail3: false,
    adminEmail4: false,
    email: false,
  });

  const handleCahnge = (event) => {
    event.persist();
    const { name, value } = event.target;
    if (name.includes('adminEmail') && value.length > 5 && value.includes('@')) dispatch(authValidateEmail(value));
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeIndex = (index) => {
    const validate = { ...validation };
    if (value === 0 && index > value) {
      logo && dispatch(actions.actionUploadLogo({ file: logo[0] }));
    }
    if (value === 2 && index > value) {
      if (validate.adminEmail1 || validate.adminEmail2 || validate.adminEmail3 || validate.adminEmail4) validate.email = true;
      else validate.email = false;
      setValidation((prev) => ({ ...prev, ...validate }));
      if (validate.email) return;
      if (form.adminEmail1 || form.adminEmail2 || form.adminEmail3 || form.adminEmail4) dispatch(actions.actionInviteAdmin(Object.values(form).filter((email) => email !== '')));
    }
    setValue(index);
  };

  const handleSubmit = () => {
    dispatch(showMessage({
      message: 'Your settings saved',
      variant: 'success',
    }));
    props.history.push('/');
  };

  useEffect(() => {
    if (emailValidation) {
      Object.keys(validation).forEach((key) => {
        if (key.includes('adminEmail')) {
          isEmailUsed(emailValidation, form[key]) && setValidation((prev) => ({ ...prev, [key]: false }));
        }
      });
    }
    if (emailValidationError) {
      Object.keys(validation).forEach((key) => {
        if (key.includes('adminEmail')) {
          isEmailUsed(emailValidationError, form[key]) && setValidation((prev) => ({ ...prev, [key]: true }));
        }
      });
    }
  }, [emailValidationError, emailValidation]);

  useEffect(() => {
    if (inviteAdminsResponse) setForm(defaultForm);
  }, [inviteAdminsResponse]);

  useEffect(() => {
    dispatch(actionGetSubscriptions());
  }, []);

  return (
    <div className='starting-form__container'>
      <div className='starting-form__steps-container'>
        <StepsList handleChangeIndex={handleChangeIndex} position={value} />
      </div>
      <div className='starting-form__contnet-container'>
        <Typography className={classes.title}>Get Started</Typography>
        <Typography className={classes.subTitle}>Quickly Setup your platform the way you want.</Typography>
        <div className='starting-form__content'>
          <SwipeableViews
            disabled
            className='w-full'
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            containerStyle={{ height: '100%', display: 'flex', alignItems: 'center' }}
          >
            <TabPanel className='flex justify-center' value={value} index={0} dir={theme.direction}>
              <UploadLogo validation={validation} clickNext={() => handleChangeIndex(1)} />
            </TabPanel>
            <TabPanel className='flex justify-center' value={value} index={1} dir={theme.direction}>
              <Subscriptions validation={validation} clickNext={() => handleChangeIndex(2)} clickBack={() => handleChangeIndex(0)} />
            </TabPanel>
            <TabPanel className='flex justify-center' value={value} index={2} dir={theme.direction}>
              <InviteAdmins emailValidationError={emailValidationError} form={form} onChange={handleCahnge} validation={validation} clickNext={() => handleChangeIndex(3)} clickBack={() => handleChangeIndex(1)} />
            </TabPanel>
            <TabPanel className='flex justify-center' value={value} index={3} dir={theme.direction}>
              <BulkImport submit={handleSubmit} validation={validation} clickBack={() => handleChangeIndex(2)} />
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
