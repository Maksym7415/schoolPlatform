import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import TransferList from './transferList';
import { handleMoveItem } from './helpers';
import useStyles from './styles';

const ThirdStep = ({ onClick }) => {
  const classes = useStyles();
  const [checked, setChecked] = useState({});
  const [students] = useState([
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
  ]);
  const [allStudents, setAllStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);

  const handleCheckItem = (value, isRightSide) => () => {
    const key = isRightSide ? `s.${value.id}` : value.id; // setting prefix to key name, cause items in both sides are the same and have same id's. I've added '.' for split() it in the underneath function
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCheckedRight = () => handleMoveItem(setAllStudents, setSelectedStudents, allStudents, checked);

  const handleCheckedLeft = () => handleMoveItem(setAllStudents, setSelectedStudents, selectedStudents, checked, true);

  useEffect(() => {
    if (students) {
      setAllStudents([...students]);
    }
  }, [students]);

  useEffect(() => {
    if (allStudents.length) {
      const result = {};
      allStudents.forEach((item) => {
        result[item.id] = false;
      });
      setChecked((prev) => ({ ...prev, ...result }));
    }
    if (selectedStudents.length) {
      const result = {};
      selectedStudents.forEach((item) => {
        result[`s.${item.id}`] = false;
      });
      setChecked((prev) => ({ ...prev, ...result }));
    }
  }, [allStudents, selectedStudents]); // after each this arrays transform I've set for all checkboxes false value

  return (
    <div className='new-course__select-students-container'>
      <TransferList
        allSubjects={allStudents}
        selectedSubjects={selectedStudents}
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
        onClick={() => onClick(3, selectedStudents)}
      >
        Next
      </Button>
    </div>
  );
};

export default ThirdStep;
