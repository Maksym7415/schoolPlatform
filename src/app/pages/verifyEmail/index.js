import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../components/loading';
import dive from '../../functions/dive';
import * as actions from '../../redux/authorization/constants/actionConstants';

const VerifyEmail = (props) => {
  const dispatch = useDispatch();
  const [urlParams] = useState(props.match.params.email);
  const verifyResponse = useSelector(({ authReducer }) => dive`${authReducer}verifyEmail`);
  const authData = useSelector(({ authReducer }) => dive`${authReducer}token.data`);

  useEffect(() => {
    if (!authData && window.location.search.includes('=')) dispatch(actions.authVerifyEmail(window.location.search.split('=')[1]));
  }, [urlParams]);

  useEffect(() => {
    verifyResponse && props.history.push('/');
  }, [verifyResponse]);

  if (authData || !window.location.search.includes('=')) {
    props.history.push('/');
    return null;
  }

  return (
    <>
      <Loading />
    </>
  );
};

export default VerifyEmail;
