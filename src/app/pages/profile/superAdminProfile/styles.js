import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    padding: '25px 10px 0 10px',
  },
  title: {
    fontSize: '20px',
    fontWeight: '500',
    marginBottom: '10px',
  },
  gridContainer: {
    marginBottom: theme.spacing(0.5),
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    marginLeft: '20px',
  },
  button: {
    width: '40px',
    marginTop: '20px',
  },
}));
