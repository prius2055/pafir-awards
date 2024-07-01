import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './menuSlice';
import nominateReducer from './nominateSlice';
const store = configureStore({
  reducer: {
    menuDisplay: modalReducer,
    nominations: nominateReducer,
  },
});

export default store;
