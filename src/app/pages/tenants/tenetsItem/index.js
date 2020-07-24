import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { TabPanel, a11yProps } from '../../../components/tabPanel';
import GeneralInfo from './item/generalInfo';
import AdminsList from '../../profile/adminProfile/items/admins';


const TenentsItem = (props) => {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='w-full'>
      <Tabs value={value} onChange={handleChange}>
        <Tab
          value={1}
          label="General Info"
          {...a11yProps(1)}
        />
        <Tab
          value={2}
          label="Admins"
          {...a11yProps(2)} />
        {/* <Tab value={3} label="Item Three" {...a11yProps('three')} /> */}
      </Tabs>
      <TabPanel value={value} index={1}>
        <GeneralInfo {...props} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AdminsList id={props.match.params.id} />
      </TabPanel>
    </div>
  );
};

export default TenentsItem;
