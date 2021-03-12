import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSelector } from 'react-redux';
import SuperAdmin from './privateRouting/superAdmin';
import Admin from './privateRouting/admin';
import Header from '../pages/header';
import SignIn from '../pages/auth/signIn';
import Theme from '../theme';
import Message from '../components/message';
import Tenants from '../pages/tenants';
import Profile from '../pages/profile';
import LeftNavbar from '../pages/leftNavPanel';
import SignUp from '../pages/auth/signUp';
import GetStarted from '../pages/getStarted';
import ForgotPassword from '../pages/auth/forgotPassword';
import TenentsItem from '../pages/tenants/tenetsItem';
import Subscriptions from '../pages/subscriptions';
import VerifyEmail from '../pages/verifyEmail';
import VerifyInviteAdmin from '../pages/verifyInvite';
import Staff from '../pages/staff';
import Courses from '../pages/courses';
import Students from '../pages/students';
import Teachers from '../pages/teachers';
import Parents from '../pages/parents';
import dive from '../functions/dive';
import Loading from '../components/loading';

function Router(props) {
  const signed = useSelector(({ authReducer }) => dive`${authReducer}token.payload`);

  return (
        <Fragment>
          <Theme>
            <CssBaseline />
            <Header/>
            <div style={signed ? { paddingTop: '70px' } : null} className='drawer-content-container'>
              <LeftNavbar/>
              <div className={signed ? 'switch-container pl-300' : 'switch-container'}>
              <Switch>
                <Route component = {SignIn} exact path = '/'/>
                <Route component = {VerifyEmail} exact path = '/verify-email'/>
                <Route component = {VerifyInviteAdmin} exact path = '/verify-invite'/>
                <Route component = {SignUp} exact path = '/register'/>
                <Route component = {ForgotPassword} exact path = '/forgot-passw'/>
                <SuperAdmin fallback='/' component = {Tenants} exact path = '/tenants'/>
                <SuperAdmin fallback='/' component = {TenentsItem} exact path = '/tenants/:id' />
                <SuperAdmin fallback='/' component = {Subscriptions} exact path = '/subscriptions' />
                <Admin fallback='/' component = {Profile} exact path = '/profile'/>
                {/* <Admin fallback='/' component = {GetStarted} exact path = '/get-started'/> */}
                <Route component={GetStarted} exact path = '/get-started'/>
                <Admin fallback='/' component = {Staff} exact path = '/staff'/>
                <Admin fallback='/' component = {Courses} exact path = '/courses'/>
                <Admin fallback='/' component = {Students} exact path = '/students'/>
                <Admin fallback='/' component = {Teachers} exact path = '/teachers'/>
                <Admin fallback='/' component = {Parents} exact path = '/parents'/>
                <Route component = {() => <div>not found</div>} />
              </Switch>
              </div>
            </div>
            <Message/>
          </Theme>
        </Fragment>
  );
}


export default Router;
