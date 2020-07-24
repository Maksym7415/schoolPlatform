import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  // '@global': {
  //   ul: {
  //     margin: 0,
  //     padding: 0,
  //     listStyle: 'none',
  //   },
  // },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    padding: theme.spacing(2),
  },
  card: {
    width: 250,
    height: 300,
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.7s',
    '&:hover': {
      transform: 'scale(1.1,1.1)',
    },
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
}));
