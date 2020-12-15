import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
    <>
      <Route
        {...routeProps}
        render={props =>
          isAuthenticated ? <Redirect to="/home" /> : <Component {...props}  />
        }
      />
    </>
  );

export default PublicRoute;
