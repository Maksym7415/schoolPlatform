import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  stepContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10px',
    width: '450px',
  },
  StepFieldsContainer: {
    width: '300px',
    height: '320px',
  },
  descriptionTitle: {
    fontSize: '0.8rem',
    fontWeight: '500',
    color: '#344563',
  },
  descriptionContainer: {
    border: '1px solid #d4d4d4',
    borderRadius: '4px',
    width: '100%',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    padding: '10px',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  field: {
    marginBottom: '20px',
  },
  fieldError: {
    marginBottom: '10px',
  },
  input: {
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  button: {
    color: '#feffff',
  },
  buttonFirstStep: {
    color: '#feffff',
    marginTop: '5px',
    width: '300px',
  },
  buttonSecondStep: {
    color: '#feffff',
    width: '300px',
    margin: '0 auto',
  },
  buttonFourthStep: {
    color: '#feffff',
    width: '300px',
    margin: '50px auto 0px auto',
  },
  dateContainer: {
    marginBottom: '20px',
  },
  transferListItem: {
    overflowX: 'hidden',
    overFlowY: 'auto',
    maxHeight: '195px',
  },
  selectTeachersTitle: {
    fontSize: '0.8rem',
    fontWeight: '500',
    color: '#344563',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
  },
  listItem: {
    padding: '0px',
  },
  transferButtons: {
    color: '#344563',
    marginBottom: '10px',
  },
}));
