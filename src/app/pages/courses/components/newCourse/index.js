import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import useStyles from '../styles/styles';
import DialogForm from '../../../../components/dialogForm';
import { TabPanel } from '../../../../components/tabPanel';
import FirstStep from './components/firstStep';
import SecondStep from './components/secondStep';
import ThirdStep from './components/thirdStep';
import FourthStep from './components/fourthStep';
import { defaultForm, initialValidation } from './constants';
import FormCircles from './components/bottomCircles';
import { actionCreateCourse } from '../../../../redux/tenants/constants/actionConstants';
import { showMessage } from '../../../../redux/theme/constants/actionConstants';
import '../styles/styles.scss';

const NewCourse = ({
  isOpenForm, handleCloseForm, title, course,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [validation, setValidation] = useState(initialValidation);
  const [form, setForm] = useState(defaultForm);

  const handleChangeIndex = (index, data) => {
    const validate = { ...validation };
    if (index === 1) {
      validate.courseName = !form.courseName;
      validate.courseCrn = !form.courseCrn;
    }
    if (index === 2) {
      if (!data.length) return dispatch(showMessage({ message: "You don't check any teacher", variant: 'error' }));
      setForm((prev) => ({ ...prev, teachers: [...data] }));
    }
    if (index === 3) {
      if (!data.length) return dispatch(showMessage({ message: "You don't check any student", variant: 'error' }));
      setForm((prev) => ({ ...prev, teachers: [...data] }));
    }
    if (Object.values(validate).includes(true)) return setValidation(validate);
    setValidation(validate);
    setValue(index);
  };

  const handleCreateCourse = () => dispatch(actionCreateCourse(form));

  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  console.log(validation);

  useEffect(() => {
    if (Object.keys(course).length) {
      const form = {
        courseCrn: course.crn,
        courseName: course.name,
        teachers: course.teachers,
        courseDescription: course.description,
        dateFrom: null,
        dateTo: null,
      };
      setForm(form);
    } else setForm(defaultForm);
  }, [course]);

  return (
    <DialogForm
      isOpenForm={isOpenForm}
      handleCloseForm={() => {
        setValue(0);
        handleCloseForm();
        setValidation(initialValidation);
      }}
      title={title}
      style={classes.dialogContentConteiner}
    >
      <SwipeableViews
        disabled
        className='w-full'
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        containerStyle={{ display: 'flex', alignItems: 'center' }}
      >
        <TabPanel className='flex justify-center' value={value} index={0} dir={theme.direction}>
          <FirstStep form={form} setForm={setForm} validation={validation} handleChange={handleChange} onClick={() => handleChangeIndex(1)} />
        </TabPanel>
        <TabPanel className='flex justify-center' value={value} index={1} dir={theme.direction}>
          <SecondStep form={form} validation={validation} handleChange={handleChange} onClick={handleChangeIndex} />
        </TabPanel>
        <TabPanel className='flex justify-center' value={value} index={2} dir={theme.direction}>
          <ThirdStep form={form} validation={validation} handleChange={handleChange} onClick={handleChangeIndex} />
        </TabPanel>
        <TabPanel className='flex justify-center' value={value} index={3} dir={theme.direction}>
          <FourthStep form={form} validation={validation} handleChange={handleChange} onClick={() => handleCreateCourse()} />
        </TabPanel>
      </SwipeableViews>
      <FormCircles position={value} />
    </DialogForm>
  );
};

export default NewCourse;
