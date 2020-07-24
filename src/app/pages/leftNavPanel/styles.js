import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  naviTitle: {
    fontSize: '0.8rem',
    color: '#7a8596',
    padding: '10px 0 5px 20px',
  },
  icons: {
    minWidth: '40px',
    color: '#7a8596',
  },
  userMenu: {
    position: 'absolute',
    right: '0',
    backgroundColor: 'white',
    borderRadius: '4px',
    width: '100%',
    top: '60px',
    zIndex: '1',
    boxShadow: '0px 0px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 0px 1px -1px rgba(0,0,0,0.12)',
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
    // boxShadow: 'none',
  },
  userIcon: {
    width: '30px',
    height: '20px',
  },
  tenantName: {
    fontWeight: 'bold',
    lineHeight: 1,
  },
  tenantType: {
    fontSize: '0.8rem',
    color: '#7a8596',
  },
  listItem: {
    padding: '8px 16px',
    '@media (max-width:1400px)': {
      padding: '6px 16px',
    },
    '@media (max-height:650px)': {
      padding: '4px 16px',
    },
  },
  shadow: {
    boxShadow: '0px 0px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 0px 1px -1px rgba(0,0,0,0.12)',
  },
  peopleMenu: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '40px',
  },
  peopleMenuListItem: {
    padding: '4px 16px',
    '@media (max-width:1400px)': {
      padding: '2px 16px',
    },
  },
}));
