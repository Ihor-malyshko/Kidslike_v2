import { createReducer } from '@reduxjs/toolkit';
import actions from './giftActions';

const userGiftsInitialState = [];

const userGifts = createReducer(userGiftsInitialState, {
  [actions.getAllGiftsSuccess]: (_, { payload }) => {
    return payload;
  },

  [actions.createGiftSuccess]: (state, { payload }) => [
    ...state, payload
  ],

  [actions.updateGiftSuccess]: (state, { payload }) =>
    state.map(el => (el._id === payload._id ? (el = payload) : el)),
  
  [actions.deleteGiftSuccess]: (state, { payload }) =>
  {const gifts = state.filter(el => el._id !== payload)
  return [...gifts]
  }
});
export { userGifts };
