import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '20px',
    fontWeight: '500',
    marginBottom: '10px',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconAdd: {
    marginLeft: 'auto',
    marginRight: '30px',
    color: '#ffffff',
    width: '30px',
    height: '30px',
    border: '1px solid blue',
    borderRadius: '5px',
    backgroundColor: 'blue',
    cursor: 'pointer',
  },
  formFields: {
    marginBottom: theme.spacing(2),
  },
  iconEdit: {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
  },
  iconSettings: {
    width: '20px',
    height: '20px',
  },
}));
