import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '70px',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: '20px',
  },
  logo: {
    cursor: 'pointer',
    paddingLeft: '62px',
    fontSize: '24px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
  },
  signContainer: {
    marginLeft: 'auto',
  },
  signInLink: {
    color: '#758095',
    cursor: 'pointer',
    marginRight: '10px',
  },
  signUpLink: {
    color: '#758095',
    cursor: 'pointer',
  },
  image: {
    width: '60px',
    height: '40px',
  },
}));
