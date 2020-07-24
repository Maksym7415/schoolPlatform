import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyTable from '../../components/table';
import useStyles from './styles/styles';
import tableConfig from './components/tableConfig';
import CoursesRow from './components/tableRow';
import PageHeader from '../../components/pageHeader';
import { actionGetParents } from '../../redux/tenants/constants/actionConstants';
import './styles/styles.scss';

const Parents = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const parents = useSelector(({ tenentsReducer }) => tenentsReducer.parents.data);

  useEffect(() => {
    dispatch(actionGetParents());
  }, []);

  return (
    <div className='parents__container w-full'>
      <PageHeader
        title='Parents'
        subTitle='List of all Parents.'
        newItemButtonName='Parent'
      />
      <MyTable config={tableConfig}>
        {
          parents.map((item) => <CoursesRow row={item} />)
        }
      </MyTable>
    </div>
  );
};

export default Parents;
