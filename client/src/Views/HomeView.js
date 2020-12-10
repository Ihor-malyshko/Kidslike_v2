import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LeftSideBar from '../components/LeftSideBar/LeftSideBar';
import GiftsView from './GiftsView';
import ChildTaskPage from '../components/ChildTaskPage/ChildTaskPage';
import HabitsList from '../components/HabitsList/HabitsList';
import TaskList from '../components/TaskList/TaskList';
import Container from '../components/Container/Container';

class HomeView extends Component {
  render() {
    const { match } = this.props;
    console.log(match);
    return (
      <>
        <h2>Home</h2>
        <LeftSideBar />
        <Container>
          <Route path={`${match.path}`} exact>
            <HabitsList />
            <TaskList />
          </Route>
          <Route path={`${match.path}/Gifts`} component={GiftsView} />
          <Route path={`${match.path}/child`}>
            <ChildTaskPage />
          </Route>
        </Container>
        {/* <Route path={`${match.path}`} exact>
            <HabitsList />
            <TaskList />
        </Route>
        <Route path={`${match.path}/Gifts`} component={GiftsView} />
        <Route path={`${match.path}/child`}>
          <ChildTaskPage />
        </Route> */}
      </>
    );
  }
}

export default HomeView;
