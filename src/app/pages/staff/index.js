import React from 'react';
import MyTable from '../../components/table';
import useStyles from './styles/styles';
import tableConfig from './components/tableConfig';
import StuffRow from './components/tableRow';
import PageHeader from '../../components/pageHeader';
import './styles/styles.scss';

const Staff = (props) => {
  const classes = useStyles();

  return (
    <div className='staff__container w-full'>
      <PageHeader
        title='Staff'
        subTitle='List of all Staff.'
        newItemButtonName='Staff'
      />
      <MyTable config={tableConfig}>
        <StuffRow />
      </MyTable>
    </div>
  );
};

export default Staff;
