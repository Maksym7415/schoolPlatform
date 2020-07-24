import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  userMenuContainer: {
    position: 'relative',
    cursor: 'pointer',
  },
  userMenu: {
    position: 'absolute',
    right: '0',
    backgroundColor: 'white',
    borderRadius: '5px',
    width: '100%',
    // bottom: '0',
  },
  userMenuList: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '600px',

  },
  userMenuItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: 'none',
  },
  userIcon: {
    width: '30px',
    height: '20px',
  },
  userMenuArrow: {
    color: '#344563',
  },
}));
