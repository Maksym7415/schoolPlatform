import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import clsx from 'clsx';
import TransferList from './transferList';
import { handleMoveItem } from './helpers';
import useStyles from './styles';

const SecondStep = ({ onClick, form }) => {
  const classes = useStyles();
  const [checked, setChecked] = useState({});
  const [teachers] = useState([
    {
      id: 1,
      name: 'Peter Smith',
    },
    {
      id: 2,
      name: 'Jone Dow',
    },
    {
      id: 3,
      name: 'Alan Walker',
    },
    {
      id: 4,
      name: 'Sam Parker',
    },
    {
      id: 5,
      name: 'Sam Parker',
    },
    {
      id: 6,
      name: 'Sam Parker',
    },
  ]);
  const [allTeachers, setAllTeachers] = useState([]);
  const [selectedTeachers, setSelectedTeachers] = useState([]);

  const handleCheckItem = (value, isRightSide) => () => {
    const key = isRightSide ? `s.${value.id}` : value.id; // setting prefix to key name, cause items in both sides are the same and have same id's. I've added '.' for split() it in the underneath function
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCheckedRight = () => handleMoveItem(setAllTeachers, setSelectedTeachers, allTeachers, checked);

  const handleCheckedLeft = () => handleMoveItem(setAllTeachers, setSelectedTeachers, selectedTeachers, checked, true);

  useEffect(() => {
    if (teachers) {
      setAllTeachers([...teachers]);
    }
  }, [teachers]);

  useEffect(() => {
    if (form.teachers) setSelectedTeachers([...form.teachers]);
  }, [form]);

  useEffect(() => {
    if (allTeachers.length) {
      const result = {};
      allTeachers.forEach((item) => {
        result[item.id] = false;
      });
      setChecked((prev) => ({ ...prev, ...result }));
    }
    if (selectedTeachers.length) {
      const result = {};
      selectedTeachers.forEach((item) => {
        result[`s.${item.id}`] = false;
      });
      setChecked((prev) => ({ ...prev, ...result }));
    }
  }, [allTeachers, selectedTeachers]); // after each this arrays transform I've set for all checkboxes false value

  return (
    <div className='new-course__select-teachers-container'>
      <TransferList
        allSubjects={allTeachers}
        selectedSubjects={selectedTeachers}
        handleCheck={handleCheckItem}
        checked={checked}
        handleCheckedRight={handleCheckedRight}
        handleCheckedLeft={handleCheckedLeft}
      />
      <Button
        className={classes.buttonSecondStep}
        fullWidth
        color='primary'
        variant='contained'
        onClick={() => onClick(2, selectedTeachers)}
      >
        Next
      </Button>
    </div>
  );
};

export default SecondStep;
