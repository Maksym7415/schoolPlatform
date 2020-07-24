import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './styles/styles.scss';
import CheckCurrency from './components/currencyCheck';
import Period from './components/period';
import useStyles from './styles/styles';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ ref } { ...props } />);

const DialogForm = (props) => {
  const classes = useStyles();
  const {
    isOpenForm, fields, form, changeForm, handleCloseForm, action, setForm, children, title, actionButtons, fullWidth, style,
  } = props;

  return (
    <Dialog
        className={classes.container}
        open={ isOpenForm }
        TransitionComponent={ Transition }
        keepMounted
        onClose={ handleCloseForm }
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        fullWidth={fullWidth}
        maxWidth="sm"

    >
        <DialogTitle classes={{ root: classes.title }} id="alert-dialog-slide-title">
            {title || 'Please fill form'}
        </DialogTitle>
        <DialogContent className={style}>
            {
              !props.children
                ? fields.map((field) => {
                  if (field.type === 'currency') {
                    return (
                      <CheckCurrency
                        key={field.name}
                        className={props.classes.formFields}
                        label={field.label}
                        name={field.name}
                        form={form}
                        onChange={changeForm}
                        setForm={setForm}
                        variant="outlined"
                        fullWidth
                      />
                    );
                  }
                  if (field.type === 'period') {
                    return (
                          <Period
                            key={field.name}
                            value={form[field.name]}
                            onChange={changeForm}
                            name={field.name}
                          />
                    );
                  }
                  return (
                      <TextField
                        key={field.name}
                        className={props.classes.formFields}
                        label={field.label}
                        name={field.name}
                        value={form[field.name]}
                        onChange={changeForm}
                        variant="outlined"
                        fullWidth
                        size='small'
                    />
                  );
                })
                : <>{children}</>
            }
        </DialogContent>
        {
          actionButtons && <DialogActions>
              <Button
                  onClick={ handleCloseForm }
              >
                  Cancel
              </Button>
              <Button
                  onClick={ action }
              >
                  Confirm
              </Button>
            </DialogActions>
        }
    </Dialog>
  );
};

export default DialogForm;
