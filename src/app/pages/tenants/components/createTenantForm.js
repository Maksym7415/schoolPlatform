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

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ ref } { ...props } />);

const CreateTenantForm = (props) => (
    <Dialog
                        open={ props.openForm }
                        TransitionComponent={ Transition }
                        keepMounted
                        onClose={ props.handleCloseForm }
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                        fullWidth
                        maxWidth="sm"
                    >
                        <DialogTitle id="alert-dialog-slide-title">
                            Please fill form
                        </DialogTitle>
                        <DialogContent>
                            <TextField
                                className={props.classes.formFields}
                                label="Name"
                                type="text"
                                name="name"
                                value={props.form.name}
                                onChange={props.changeForm}
                                variant="outlined"
                                fullWidth
                                size='small'
                            />
                            <TextField
                                className={props.classes.formFields}
                                label="Subdomain name"
                                type="text"
                                name="subdomain"
                                value={props.form.subdomain}
                                onChange={props.changeForm}
                                variant="outlined"
                                fullWidth
                                size='small'
                            />
                            <TextField
                                className={props.classes.formFields}
                                label="School email"
                                type="text"
                                name="school_email"
                                value={props.form.school_email}
                                onChange={props.changeForm}
                                variant="outlined"
                                fullWidth
                                size='small'
                            />
                            <TextField
                                className={props.classes.formFields}
                                label="School contact phone"
                                type="text"
                                name="school_contact_phone"
                                value={props.form.school_contact_phone}
                                onChange={props.changeForm}
                                variant="outlined"
                                fullWidth
                                size='small'
                            />
                            <TextField
                                className={props.classes.formFields}
                                label="Primary contact first name"
                                type="text"
                                name="primary_contact_first_name"
                                value={props.form.primary_contact_first_name}
                                onChange={props.changeForm}
                                variant="outlined"
                                fullWidth
                                size='small'
                            />
                            <TextField
                                className={props.classes.formFields}
                                label="Primary contact last name"
                                type="text"
                                name="primary_contact_last_name"
                                value={props.form.primary_contact_last_name}
                                onChange={props.changeForm}
                                variant="outlined"
                                fullWidth
                                size='small'
                            />
                            <TextField
                                className={props.classes.formFields}
                                label="Primary contact email"
                                type="text"
                                name="primary_contact_email"
                                value={props.form.primary_contact_email}
                                onChange={props.changeForm}
                                variant="outlined"
                                fullWidth
                                size='small'
                            />
                            <TextField
                                className={props.classes.formFields}
                                label="Primary contact phone"
                                type="text"
                                name="primary_contact_phone"
                                value={props.form.primary_contact_phone}
                                onChange={props.changeForm}
                                variant="outlined"
                                fullWidth
                                size='small'
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button
                                onClick={ props.handleCloseForm }
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={ props.action }
                            >
                                Confirm
                            </Button>
                        </DialogActions>
                    </Dialog>
);

export default CreateTenantForm;
