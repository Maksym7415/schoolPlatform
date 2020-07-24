import React, { useState, useEffect } from 'react';
import {
  List, ListItem, ListItemIcon, ListItemText, Checkbox, Paper, Typography, TextField, Button,
} from '@material-ui/core';
import useStyles from './styles';
import { handleSearch } from './helpers';

const TransferList = ({
  checked, handleCheck, allSubjects, selectedSubjects, handleCheckedRight, handleCheckedLeft,
}) => {
  const classes = useStyles();
  const [search, setSearch] = useState({
    allSubjects: '',
    selectedSubjects: '',
  });
  const [leftSide, setLeftSide] = useState([]);
  const [rightSide, setRightSide] = useState([]); // localState for data to handle searching of items

  const handleChange = (event) => {
    event.persist();
    const { value, name } = event.target;
    if (name === 'allSubjects') {
      setSearch((prev) => ({ ...prev, [name]: value }));
      if (!value) return setLeftSide([...allSubjects]);
      setLeftSide((prev) => ([...handleSearch(allSubjects, value)]));
    }
    if (name === 'selectedSubjects') {
      setSearch((prev) => ({ ...prev, [name]: value }));
      if (!value) return setRightSide([...selectedSubjects]);
      setRightSide((prev) => ([...handleSearch(selectedSubjects, value)]));
    }
  };

  useEffect(() => {
    setLeftSide([...allSubjects]);
  }, [allSubjects]);

  useEffect(() => {
    setRightSide([...selectedSubjects]);
  }, [selectedSubjects]);

  const customList = (items, isRightSide) => (
    <Paper elevation={0} className={classes.transferListItem}>
      <List dense component="div" role="list">
        {!!items.length && items.map((value) => (
            <ListItem classes={{ root: classes.listItem }} key={value.id} role="listitem" button onClick={isRightSide ? handleCheck(value, true) : handleCheck(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={(isRightSide ? checked[`s.${value.id}`] : checked[value.id]) || false}
                  tabIndex={-1}
                  disableRipple
                  color='primary'
                  // inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText primary={value.name} />
            </ListItem>
        ))}
        <ListItem />
      </List>
    </Paper>
  );

  return (
    <div className='new-course__transfer-list-container'>
      <div className='new-course__all-teachers'>
        <div className='new-course__all-teachers-head'>
          <Typography classes={{ root: classes.selectTeachersTitle }}>All Teachers</Typography>
          <TextField
            variant='outlined'
            label='Search'
            size='small'
            name='allSubjects'
            value={search.allSubjects}
            onChange={handleChange}
          />
        </div>
        {customList(leftSide)}
      </div>
      <div className='new-course__transfer-list-buttons'>
        <Button
          variant="outlined"
          size="small"
          className={classes.transferButtons}
          onClick={() => {
            handleCheckedRight();
            setLeftSide([...allSubjects]);
            setSearch({ allSubjects: '', selectedSubjects: '' });
          }}
          disabled={leftSide.length === 0}
          aria-label="move selected right"
        >
          &gt;
        </Button>
        <Button
          variant="outlined"
          size="small"
          className={classes.transferButtons}
          onClick={() => {
            handleCheckedLeft();
            setRightSide([...selectedSubjects]);
            setSearch({ allSubjects: '', selectedSubjects: '' });
          }}
          disabled={rightSide.length === 0}
          aria-label="move selected left"
        >
          &lt;
        </Button>
      </div>
      <div className='new-course__selected-teachers'>
        <div className='new-course__selected-teachers-head'>
          <Typography classes={{ root: classes.selectTeachersTitle }}>Selected Teachers</Typography>
          <TextField
            variant='outlined'
            label='Search'
            size='small'
            name='selectedSubjects'
            value={search.selectedSubjects}
            onChange={handleChange}
          />
        </div>
        {customList(rightSide, true)}
      </div>
    </div>
  );
};

export default TransferList;
