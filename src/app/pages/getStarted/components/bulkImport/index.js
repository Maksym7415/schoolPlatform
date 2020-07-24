import React, { useState } from 'react';
import {
  Button, Typography, useTheme,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { TabPanel } from '../../../../components/tabPanel';
import useStyles from './styles';
import DropZone from '../../../../components/dropZone';
import './styles.scss';

const BulkImport = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className='get-started-bulk-import__container'>
      <div className='get-started-bulk-import__upload-container'>
        <div className='get-started-bulk-import__upload-links'>
          <Typography className={classes.links} style={value === 0 ? { color: theme.palette.primary.main } : {}} onClick={() => handleChangeIndex(0)}>Students</Typography>
          <Typography className={classes.links} style={value === 1 ? { color: theme.palette.primary.main } : {}} onClick={() => handleChangeIndex(1)}>Teachers</Typography>
          <Typography className={classes.links} style={value === 2 ? { color: theme.palette.primary.main } : {}} onClick={() => handleChangeIndex(2)}>Courses</Typography>
        </div>
        <div className='get-started-bulk-import__drop-zone-container'>
          <SwipeableViews
            disabled
            className='w-full'
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            containerStyle={{ display: 'flex', alignItems: 'center' }}
          >
            <TabPanel className='flex justify-center' value={value} width={'auto'} index={0} dir={theme.direction}>
              <DropZone styles='get-started-bulk-import__drop-zone' name='students' type='sheet' />
            </TabPanel>
            <TabPanel className='flex justify-center' value={value} width={'auto'} index={1} dir={theme.direction}>
              <DropZone styles='get-started-bulk-import__drop-zone' name='teachers' type='sheet' />
            </TabPanel>
            <TabPanel className='flex justify-center' value={value} width={'auto'} index={2} dir={theme.direction}>
              <DropZone styles='get-started-bulk-import__drop-zone' name='courses' type='sheet' />
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
      <div className='get-started-bulk-import__button'>
        <Button
          className={classes.button}
          onClick={props.submit }
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default BulkImport;
