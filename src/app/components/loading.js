import React, { useState, useEffect } from 'react';
import { Typography, LinearProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

const Loading = () => {
  const isLoading = useSelector(({ themeReducer }) => themeReducer.isLoading);
  const [display, setDisplay] = useState('none');

  useEffect(() => {
    isLoading ? setDisplay('flex') : setDisplay('none');
  });

  return (
        <div className='preloader' style={{ display }}>
            <Typography className="text-20 mb-16 text-white">Loading...</Typography>
            <LinearProgress className="w-200" color="primary"/>
        </div>
  );
};

export default Loading;
