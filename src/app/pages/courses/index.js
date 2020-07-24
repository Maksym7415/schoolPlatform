import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyTable from '../../components/table';
import useStyles from './styles/styles';
import tableConfig from './components/tableConfig';
import CoursesRow from './components/tableRow';
import PageHeader from '../../components/pageHeader';
import NewCourse from './components/newCourse';
import { actionGetCourses } from '../../redux/tenants/constants/actionConstants';
import Loading from '../../components/loading';
import './styles/styles.scss';

const Courses = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const courses = useSelector(({ tenentsReducer }) => tenentsReducer.courses.data);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [editData, setEditData] = useState({});

  const handleOpenForm = () => setIsOpenForm(true);
  const handleCloseForm = () => {
    setIsOpenForm(false);
    setEditData({});
  };

  useEffect(() => {
    dispatch(actionGetCourses());
  }, []);

  const handleEdit = (data) => {
    setIsOpenForm(true);
    setEditData({ ...data });
  };

  return (
    <div className='courses__container w-full'>
      <PageHeader
        title='Courses'
        newItemButtonName='Course'
        subTitle='List of all Courses.'
        handleNewItem={handleOpenForm}
      />
      <MyTable config={tableConfig}>
        {
          courses.map((course) => <CoursesRow key={course.id} handleEdit={handleEdit} data={course} />)
        }
      </MyTable>
      <NewCourse
        isOpenForm={isOpenForm}
        handleCloseForm={handleCloseForm}
        title='New Course'
        course={editData}
      />
       <Loading/>
    </div>
  );
};

export default Courses;
