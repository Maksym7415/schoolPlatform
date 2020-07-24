import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  cardContainer: {
    width: '100%',
    backgroundColor: '#fbfdff',
    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
  },
  link: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
    width: '100px',
  },
  button: {
    marginTop: '40px',
    textTransform: 'none',
    backgroundColor: '#64c8bc',
    color: '#ffffff',
    minHeight: '40px',
    width: '100px',
    '&:hover': {
      backgroundColor: '#64c8bc',
    },
  },
}));
