import React, { Component, Suspense } from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import routes from '../routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NotFound from '../components/NotFound/NotFound';
import { CustomLoader } from './UIcomponents/CustomLoader/CustomLoader';
import Header from './Header/Header';
import Logo from './Logo/Logo';
import UserInfo from './UserInfo/UserInfo';
import Navigation from './Navigation/Navigation';
import Layout from './Layout/Layout';
import ChildTaskPage from './ChildTaskPage/ChildTaskPage';
import HabitsList from './HabitsList/HabitsList';
import { ModalTest } from './ModalTest';
import authSelectors from '../redux/auth/authSelectors';
import { connect } from 'react-redux';

class App extends Component {
  /*
   *temporary state for leftSideBar.
   */
  state = {
    family: true,
  };
  /*
   *temporary method for leftSideBar.
   */
  familyRender = () => {
    this.setState({ family: !this.state.family });
  };
  familyRenderAnotherLinks = () => {
    this.setState({ family: false });
  };

  render() {
    return (
      <BrowserRouter>
        <Header privatePage={this.props.isAuthenticated}>
          <Logo privatePage={this.props.isAuthenticated} />
          {this.props.isAuthenticated && (
            <Navigation
              familyRender={this.familyRender}
              familyRenderAnotherLinks={this.familyRenderAnotherLinks}
              family={this.state.family}
            />
          )}
          {this.props.isAuthenticated && <UserInfo />}
        </Header>
        <Layout>
          <Suspense fallback={<CustomLoader />}>
            <Switch>
              {routes.map(route =>
                route.private ? (
                  <PrivateRoute
                    key={route.label}
                    {...route}
                    family={this.state.family}
                  />
                ) : (
                  <PublicRoute key={route.label} {...route} />
                ),
              )}
              <Route component={NotFound} />
              <Redirect to="/home" />
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(App);

// export default App;
