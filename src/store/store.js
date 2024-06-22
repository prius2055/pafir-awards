import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './menuSlice';
const store = configureStore({
  reducer: {
    menuDisplay: modalReducer,
  },
});

export default store;
