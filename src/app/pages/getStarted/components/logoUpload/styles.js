import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  chipButton: {
    backgroundColor: 'transparent',
    position: 'absolute',
    paddingRight: '10px',
    // left: '50%',
    // transform: 'translate(-50%, 0)',
    width: '30px',
    height: '30px',
    top: '-10px',
    right: '0px',
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
  button: {
    marginTop: '75px',
    '@media (max-height:650px)': {
      marginTop: '55px',
    },
    textTransform: 'none',
    backgroundColor: '#64c8bc',
    color: '#ffffff',
    minHeight: '40px',
    width: '120px',
    '&:hover': {
      backgroundColor: '#64c8bc',
    },
  },
  errorMessage: {
    position: 'absolute',
    top: 0,
    paddingTop: '5px',
    color: 'red',
  },
}));
