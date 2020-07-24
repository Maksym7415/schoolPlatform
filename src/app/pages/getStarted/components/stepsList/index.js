import React from 'react';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Typography } from '@material-ui/core';
import useStyles from './styles';
import './styles.scss';

const StepsList = ({ position, handleChangeIndex }) => {
  const classes = useStyles();

  return (
    <div className='get-started-steps__container'>
      <div className='get-started-steps__step'>
        <div className='get-started-steps__circle'></div>
        <Typography style={position === 0 ? { fontWeight: '500' } : {}} onClick={() => handleChangeIndex(0)} className={classes.title}>Logo Upload</Typography>
      </div>
      <div className='get-started-steps__step'>
        <div className='get-started-steps__circle'></div>
        <Typography style={position === 1 ? { fontWeight: '500' } : {}} onClick={() => handleChangeIndex(1)} className={classes.title}>Subscription</Typography>
      </div>
      <div className='get-started-steps__step'>
        <div className='get-started-steps__circle'></div>
        <Typography style={position === 2 ? { fontWeight: '500' } : {}} onClick={() => handleChangeIndex(2)} className={classes.title}>Invite Admins</Typography>
      </div>
      <div className='get-started-steps__step'>
        <div className='get-started-steps__circle'></div>
        <Typography style={position === 3 ? { fontWeight: '500' } : {}} onClick={() => handleChangeIndex(3)} className={classes.title}>Bulk Import</Typography>
      </div>
      <div className='get-started-steps__need-help'>
        <HelpOutlineIcon className={classes.helpIcon}/>
        <Typography className={classes.needHelpTitle}>Need Help?</Typography>
      </div>
    </div>
  );
};
export default StepsList;
