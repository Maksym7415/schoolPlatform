import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyTable from '../../components/table';
import useStyles from './styles/styles';
import tableConfig from './components/tableConfig';
import StudentsRow from './components/tableRow';
import PageHeader from '../../components/pageHeader';
import { actionGetStudents } from '../../redux/tenants/constants/actionConstants';
import './styles/styles.scss';

const Students = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const students = useSelector(({ tenentsReducer }) => tenentsReducer.students.data);

  useEffect(() => {
    dispatch(actionGetStudents());
  }, []);

  return (
    <div className='students__container w-full'>
      <PageHeader
        title='Students'
        newItemButtonName='Student'
        subTitle='List of all Students.'
      />
      <MyTable config={tableConfig}>
        <StudentsRow students={students} />
      </MyTable>
    </div>
  );
};

export default Students;
