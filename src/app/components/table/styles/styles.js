import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  iconSettings: {
    width: '20px',
    height: '20px',
  },
  headerCell: {
    color: '#344563',
  },
  contentCell: {
    color: '#5E6C84',
    whiteSpace: 'nowrap',
  },
  actionCellContent: {
    marginRight: '10px',
  },
  actionsCell: {
    display: 'flex',
  },
  pointer: {
    cursor: 'pointer',
  },
}));
