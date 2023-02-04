import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import wishReducer from '../features/wishSlice';

export const store = configureStore({
  reducer: {
    user : userReducer,
    wish : wishReducer,
  },
});
