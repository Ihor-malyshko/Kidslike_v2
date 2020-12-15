import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from '../redux/auth/authSelectors';

const PrivateRoute = ({
  family,
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated ? <Component {...props} family={family} /> : <Redirect to="/" />
      }
    />
  );

// export default PrivateRoute;

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);