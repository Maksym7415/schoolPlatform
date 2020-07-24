import React from 'react';
import MyTable from '../../components/table';
import useStyles from './styles/styles';
import tableConfig from './components/tableConfig';
import CoursesRow from './components/tableRow';
import PageHeader from '../../components/pageHeader';
import './styles/styles.scss';

const Teachers = (props) => {
  const classes = useStyles();

  return (
    <div className='teachers__container w-full'>
      <PageHeader
        title='Teachers'
        subTitle='List of all Teachers.'
        newItemButtonName='Teacher'
      />
      <MyTable config={tableConfig}>
        <CoursesRow />
      </MyTable>
    </div>
  );
};

export default Teachers;
