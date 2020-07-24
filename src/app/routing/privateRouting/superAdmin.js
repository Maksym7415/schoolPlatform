import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import dive from '../../functions/dive';

const SuperAdmin = (props) => (
    <Route {...props}
        component = {(newProps) => {
          const PageComponent = props.component;
          if (props.data === 'SA') {
            return (
          <PageComponent {...newProps}/>
            );
          }
          return (
          <Redirect to = {props.fallBack}/>
          );
        }}
    />
);
export default connect(
  ({ authReducer }) => ({ data: dive`${authReducer}token.payload.role` }),
)(SuperAdmin);
