import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: theme.spacing(2),
  },
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
  iconEdit: {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
  },
  iconSettings: {
    width: '20px',
    height: '20px',
  },
  formFields: {
    marginBottom: theme.spacing(2),
  },
}));
