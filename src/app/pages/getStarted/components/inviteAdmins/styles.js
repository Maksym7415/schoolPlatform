import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  inputs: {
    marginBottom: '23px',
  },
  inputsError: {
    marginBottom: '0',
  },
  input: {
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  button: {
    marginTop: '30px',
    textTransform: 'none',
    backgroundColor: '#64c8bc',
    color: '#ffffff',
    minHeight: '40px',
    width: '100px',
    '&:hover': {
      backgroundColor: '#64c8bc',
    },
  },
  errorMessage: {
    position: 'absolute',
    margin: '0 auto',
    bottom: 50,
    paddingTop: '10px',
    color: 'red',
  },
}));
