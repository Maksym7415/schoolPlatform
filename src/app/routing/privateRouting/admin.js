import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import dive from '../../functions/dive';
import { groupRoles } from '../roles';

const Admin = (props) => (
    <Route {...props}
        component = {(newProps) => {
          const PageComponent = props.component;
          if (groupRoles.admin.includes(props.data)) {
            return (
          <PageComponent {...newProps}/>
            );
          }
          return (
          <Redirect to ={props.fallBack} />
          );
        }}
    />
);
export default connect(
  ({ authReducer }) => ({ data: dive`${authReducer}token.payload.role` }),
)(Admin);
