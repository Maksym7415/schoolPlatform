import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10%',
  },
  stepContainer: {
    width: '350px',
    margin: '10px auto 0 auto',
    height: '60vh',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    maxHeight: '400px',
  },
  field: {
    marginTop: '10px',
  },
  fieldError: {
    marginTop: 3,
  },
  input: {
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  button: {
    marginTop: '50px',
    textTransform: 'none',
    backgroundColor: '#64c8bc',
    color: '#ffffff',
    minHeight: '40px',
    width: '100%',
    '&:hover': {
      backgroundColor: '#64c8bc',
    },
  },
  bottomLinks: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: '15%',
  },
  links: {
    fontSize: '0.7rem',
    color: '#000000',
  },
  copyright: {
    justifyContent: 'center',
    display: 'flex',
    fontSize: '0.7rem',
  },
}));
