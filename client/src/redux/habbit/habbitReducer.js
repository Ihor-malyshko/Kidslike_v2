import { createReducer } from '@reduxjs/toolkit';
import actions from './habbitActions';

const userHabitsInitialState = [
  // {
  // _id: '5fd16a4cf5208f36bc9ca42b',
  // name: 'Test Habit #1',
  // childId: '5fd16a4cf5208f36bc9ca42b',
  // points: 5,
  // daysToComplete: [true, true, false, false, null, null, null, null, null, null],
  // createdAt: '2020-12-10T09:47:43.152+00:00',
  // updatedAt: '2020-12-12T10:41:05.180+00:00',
  // }
];

const userHabits = createReducer(userHabitsInitialState, {
  [actions.getAllHabitsSuccess]: (_, { payload }) => {
    return payload;
  },

  [actions.createHabbitSuccess]: (state, { payload }) => [...state, payload],

  [actions.updateHabbitSuccess]: (state, { payload }) =>
    state.map(el => (el._id === payload._id ? (el = payload) : el)),

  [actions.checkHabbitSuccess]: (state, { payload }) =>
    state.map(el => (el._id === payload._id ? (el = payload) : el)),

  [actions.deleteHabbitSuccess]: (state, { payload }) =>
    state.filter(el => el._id !== payload),
});
export default userHabits;
