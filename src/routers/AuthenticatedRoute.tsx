import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store';


const AuthenticatedRoute = ({ ...rest }: any) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user.authentication)

  if (isLoggedIn) {
    return <Route {...rest} />;
  } else if (isLoggedIn === false) {
    return (
      <Redirect
        to={`/sign-in`}
      />
    );
  } else {
    return null;
  }
};

export default AuthenticatedRoute;
