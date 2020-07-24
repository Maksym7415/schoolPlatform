import React from 'react';
import Box from '@material-ui/core/Box';

const TabPanel = (props) => {
  const {
    children, value, index, width, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box style={{ padding: '0', width: width || '100%' }} p={3}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index) => ({
  id: `full-width-tab-${index}`,
  'aria-controls': `full-width-tabpanel-${index}`,
});

export { TabPanel, a11yProps };
