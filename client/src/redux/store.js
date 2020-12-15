import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from '../redux/auth/authReducer';
import childrenReducer from '../redux/children/childrenReducer';
import habbitReducer from '../redux/habbit/habbitReducer';
import taskReducer from '../redux/tasks/taskReducer';


import storage from 'redux-persist/lib/storage';
import { userGifts } from './gifts/giftReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'refreshToken'],
};

// const childrenPersistConfig = {
//   key: 'children',
//   storage,
// };

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    // user: persistReducer(authPersistConfig, authReducer),
    children: childrenReducer,
    habbits: habbitReducer,
    tasks: taskReducer,
    gifts: userGifts,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
