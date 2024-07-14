/* eslint-disable global-require */
/* eslint-disable no-undef */
import logger from 'redux-logger';
import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../slice/authSlice';
import loginSlice from '../slice/loginSlice';
import movieSlice from '../slice/movieSlice';

export const store = configureStore({
  reducer: {
    requestToken: authSlice,
    validateLogin: loginSlice,
    movies: movieSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
