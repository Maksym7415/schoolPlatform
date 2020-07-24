import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { TabPanel, a11yProps } from '../../../components/tabPanel';
import GeneralInfo from '../../tenants/tenetsItem/item/generalInfo';
import dive from '../../../functions/dive';
import AdminSubscriptions from './items/subscriptions';
import AdminsList from './items/admins';


const AdminProfile = (props) => {
  const [value, setValue] = useState(1);
  const tenentId = useSelector(({ authReducer }) => dive`${authReducer}token.payload.tenant_id`);

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
          {...a11yProps(2)}
        />
        <Tab
          value={3}
          label="Subscriptions"
          {...a11yProps(3)}
        />
      </Tabs>
      <TabPanel value={value} index={1}>
        {!!tenentId && <GeneralInfo id={tenentId} {...props} />}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AdminsList />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AdminSubscriptions />
      </TabPanel>
    </div>
  );
};

export default AdminProfile;
