import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { TabPanel } from '../../../components/tabPanel';
import { useStyles } from './styles';
import FirstStep from './forms/firstStep';
import SecondStep from './forms/secondStep';
import ThirdStep from './forms/thirdStep';
import FourthStep from './forms/fourthStep';
import FifthStep from './forms/fifthStep';
import FormTopCircles from './topCircles';
import * as actions from '../../../redux/authorization/constants/actionConstants';
import './styles.scss';
import dive from '../../../functions/dive';
import formData from './formData';


const SignUp = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [form, setForm] = useState(formData);
  const [validation, setValidation] = useState({});
  const subdomainValidation = useSelector(({ authReducer }) => dive`${authReducer}subdomainValidation.status`);
  const subdomainValidationError = useSelector(({ authReducer }) => dive`${authReducer}subdomainValidation.error.status`);
  const emailValidation = useSelector(({ authReducer }) => dive`${authReducer}emailValidation.status`);
  const emailValidationError = useSelector(({ authReducer }) => dive`${authReducer}emailValidation.error.status`);
  const signUp = useSelector(({ authReducer }) => dive`${authReducer}signUp.data`);
  const schoolTypes = useSelector(({ authReducer }) => dive`${authReducer}schoolTypes.data`);

  const schoolNameRegEx = new RegExp(/^[0-9A-Za-z\s]{4,}$/);
  const subdomainRegEx = new RegExp(/^[0-9a-z]{4,}$/);
  const passwordRegex = new RegExp(/(?=.*[0-9])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{6,}/);

  const handleChangeIndex = (index) => {
    const validate = validation;
    if (value === 0) {
      validate.schoolName = !schoolNameRegEx.test(form.schoolName);
      validate.schoolType = !form.schoolType;
      setValidation((prev) => ({ ...prev, ...validate }));
      if (validate.schoolName || validate.schoolType) return;
    }
    if (value === 1 && index > value) {
      !subdomainValidation || subdomainValidation !== 200 ? validate.subdomain = true : validate.subdomain = false;
      validate.subdomain = !subdomainRegEx.test(form.subdomain);
      setValidation((prev) => ({ ...prev, ...validate }));
      if (validate.subdomain) return;
    }
    if (value === 2 && index > value) {
      validate.adminPassword = !passwordRegex.test(form.adminPassword);
      setValidation((prev) => ({ ...prev, ...validate }));
      if (validate.adminPassword) return;
    }
    if (value === 3 && index > value) {
      validate.contactNumber = !form.contactNumber;
      !emailValidation || emailValidation !== 200 ? validate.schoolEmail = true : validate.schoolEmail = false;
      validate.schoolEmail = form.schoolEmail.length < 6 || form.schoolEmail.length > 250 || !form.schoolEmail.includes('@');
      setValidation((prev) => ({ ...prev, ...validate }));
      if (validate.contactNumber || validate.schoolEmail) return;
    }
    setValue(index);
  };

  const handleSubmitForm = () => {
    const validate = validation;
    validate.primaryContactFirstName = !form.primaryContactFirstName;
    validate.primaryContactLastName = !form.primaryContactLastName;
    setValidation((prev) => ({ ...prev, ...validate }));
    if (validate.primaryContactFirstName || validate.primaryContactLastName) return;
    dispatch(actions.authSignUp(form));
  };

  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    if (name === 'subdomain' && value.length > 5) dispatch(actions.authValidateSubdomain(value));
    if (name === 'schoolEmail' && value.length > 5 && value.includes('@')) dispatch(actions.authValidateEmail(value));
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const validation = {};
    Object.keys(form).forEach((key) => {
      validation[key] = false;
    });
    setValidation(validation);
  }, []);

  useEffect(() => {
    if (signUp) {
      props.history.push('/');
      dispatch(actions.authDeleteData('signUp'));
    }
  }, [signUp]);

  useEffect(() => {
    dispatch(actions.authGetSchoolTypes());
  }, []);

  return (
    <div className={classes.container}>
      <FormTopCircles position={value} />
      <SwipeableViews
        disabled
        className='w-full'
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        containerStyle={{ display: 'flex', alignItems: 'center' }}
      >
        <TabPanel className='flex justify-center' value={value} index={0} dir={theme.direction}>
          <FirstStep data={schoolTypes} form={form} validation={validation} handleChange={handleChange} onClick={() => handleChangeIndex(1)} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <SecondStep subdomainValidationError={subdomainValidationError} form={form} validation={validation} handleChange={handleChange} clickNext={() => handleChangeIndex(2)} clickBack={() => handleChangeIndex(0)} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <ThirdStep form={form} validation={validation} handleChange={handleChange} clickNext={() => handleChangeIndex(3)} clickBack={() => handleChangeIndex(1)} />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <FourthStep emailValidationError={emailValidationError} form={form} validation={validation} handleChange={handleChange} clickNext={() => handleChangeIndex(4)} clickBack={() => handleChangeIndex(2)} />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <FifthStep handleSubmit={handleSubmitForm} form={form} validation={validation} handleChange={handleChange} clickBack={() => handleChangeIndex(3)} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default SignUp;
