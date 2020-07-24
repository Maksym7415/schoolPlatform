import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import CloseIcon from '@material-ui/icons/Close';

const DatePicker = (props) => {
  const { date, changeDate, handleDisactivateButtons } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (isOpen) => {
    handleDisactivateButtons();
    setIsOpen(isOpen);
  };

  return (
    <>
      <DateRangePicker
        className='page-header__date-range-picker'
        onChange={changeDate}
        isOpen={isOpen}
        format='MMM dd, yyyy'
        yearPlaceholder='year'
        monthPlaceholder='Month'
        dayPlaceholder='dd'
        clearIcon={(Array.isArray(date) && !date[0] && !date[1]) || !date ? isOpen ? <ArrowDropUpIcon onClick={() => handleOpen(false)} /> : <ArrowDropDownIcon onClick={() => handleOpen(true)} /> : <CloseIcon style={{ height: '15px' }} onClick={() => handleOpen(false)} />}
        calendarIcon={null}
        value={date}
      />
    </>
  );
};

export default DatePicker;
