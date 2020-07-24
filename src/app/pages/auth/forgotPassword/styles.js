import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fafafb'
  },
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
  StepFieldsContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '30%',
    padding: '0 5px',
    justifyContent: 'center',
    width: '100%',
  },
  stepField: {
    marginTop: '20px',
  },
  button: {
    marginTop: '10%',
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
    paddingTop: '10%',
  },
  links: {
    fontSize: '0.7rem',
    color: '#000000',
  },
  input: {
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  errorText: {
    fontSize: '0.75rem',
    color: '#f44336',
    margin: '3px 14px 0 14px',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
  copyright: {
    justifyContent: 'center',
    display: 'flex',
    fontSize: '0.7rem',
  },
  iconButton: {
    padding: '0px',
  },
  passwordDivider: {
    marginTop: '15px',
    width: '100%',
    height: '8px',
    backgroundColor: '#fb0200',
  },
  strongPasswprdIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginTop: '15px',
    color: '#868686',
  },
  lockIcon: {
    height: '20px',
    width: '20px',
    color: '#000000',
    // backgroundColor: '#ffcd3c',
  },
}));
