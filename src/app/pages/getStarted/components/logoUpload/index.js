import React from 'react';
import { Button, Typography } from '@material-ui/core';
import DropZone from '../../../../components/dropZone';
import useStyles from './styles';
import './styles.scss';

const UploadLogo = ({ clickNext }) => {
  const classes = useStyles();

  return (
    <div className='upload__container'>
      <DropZone styles='upload__drop-zone' name='logo' quantity={1} type='image' />
      <div className='upload__button-container'>
      <Button
        className={classes.button}
        onClick={clickNext }
      >
        Next
      </Button>
      </div>

    </div>
  );
};

export default UploadLogo;
