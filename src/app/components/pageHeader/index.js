import React, { useState } from 'react';
import {
  Typography, ButtonGroup, Button,
} from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './styles/styles';
import DatePicker from './components/datePicker';
import './styles/styles.scss';

const PageHeader = (props) => {
  const {
    title, subTitle, handleFilterWeek, handleFilterMonth, handleFilter3Months, handleImport, handleExport, newItemButtonName, handleNewItem,
  } = props;
  const classes = useStyles();
  const [date, changeDate] = useState([null, null]);
  const [activeButton, setActiveButton] = useState({
    week: false,
    month: false,
    months: false,
  });

  const handleSetActiveButton = (button) => setActiveButton((prev) => {
    const prevKeys = Object.keys(prev);
    const result = {};
    const startDate = new Date();
    const daysMinus = {
      week: 7,
      month: 30,
      months: 90,
    };
    const date = {
      week: [new Date(), new Date(startDate.setDate(startDate.getDate() - daysMinus[button]))],
    };
    prevKeys.forEach((key) => {
      result[key] = false;
    });
    changeDate(date.week);
    return { ...result, [button]: !prev[button] };
  });

  const handleDisactivateButtons = () => setActiveButton({
    week: false,
    month: false,
    months: false,
  });

  return (
    <div className='page-header__container'>
      <div className='page-header__title-container'>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.subTitle}>{subTitle}</Typography>
      </div>
      <div className='page-header__filters-container'>
        <ButtonGroup className={classes.buttonGroup} variant='outlined'>
          <Button onClick={() => handleSetActiveButton('week')} classes={activeButton.week ? { root: classes.activeButton } : { root: classes.button }}>7 Days</Button>
          <Button onClick={() => handleSetActiveButton('month')} classes={activeButton.month ? { root: classes.activeButton } : { root: classes.button }}>1 Month</Button>
          <Button onClick={() => handleSetActiveButton('months')} classes={activeButton.months ? { root: classes.activeButton } : { root: classes.button }}>3 Months</Button>
        </ButtonGroup>
      </div>
      <div className='page-header__date-picker-container'>
        <img style={{ height: '18px' }} src='../../../../images/calendar.svg' alt='calendar' />
        <DatePicker date={date} handleDisactivateButtons={handleDisactivateButtons} changeDate={changeDate} />
      </div>
      <div className='page-header__buttons-container'>
        <Button
          classes={{ root: classes.buttonNew }}
          variant='contained'
          color='secondary'
          onClick={handleNewItem}
        >
          {`New ${newItemButtonName}`}
        </Button>
        <Button
          classes={{ root: classes.importExportButtons }}
          variant='contained'
          color='primary'
          onClick={handleImport}
          startIcon={<img className='page-header__import-export-icon' src='../../../../images/upload.svg' alt='import icon' />}
        >
          Import
        </Button>
        <Button
          classes={{ root: classes.importExportButtons }}
          variant='contained'
          color='primary'
          onClick={handleExport}
          startIcon={<img className='page-header__import-export-icon' src='../../../../images/download.svg' alt='export icon' />}
        >
          Export
        </Button>
        <img className='page-header__refresh-icon' src='../../../../images/refresh-cw.svg' alt='export icon' />
      </div>
    </div>
  );
};

export default PageHeader;
