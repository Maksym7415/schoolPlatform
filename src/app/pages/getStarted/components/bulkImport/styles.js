import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  links: {
    cursor: 'pointer',
  },
  button: {
    textTransform: 'none',
    backgroundColor: '#64c8bc',
    color: '#ffffff',
    minHeight: '40px',
    width: '120px',
    '&:hover': {
      backgroundColor: '#64c8bc',
    },
  },
}));
