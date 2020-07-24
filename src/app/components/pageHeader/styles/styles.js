import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  title: {
    color: '#344563',
    fontSize: '1.4rem',
    fontWeight: '700',
  },
  subTitle: {
    fontSize: '0.8rem',
    color: '#5E6C84',
  },
  buttonGroup: {
    height: '30px',
    backgroundColor: '#feffff',
    marginRight: '10px',
  },
  button: {
    color: '#344563',
    padding: '5px 15px',
    '@media (max-width:1400px)': {
      padding: '5px 5px',
    },
  },
  buttonNew: {
    color: '#344563',
    height: '30px',
    marginRight: '10px',
  },
  activeButton: {
    color: '#796ac8',
    padding: '5px 15px',
    '@media (max-width:1400px)': {
      padding: '5px 5px',
    },
  },
  buttonActive: {
    color: '#7869c8',
  },
  importExportButtons: {
    color: '#feffff',
    marginRight: '10px',
    height: '30px',
  },
}));
