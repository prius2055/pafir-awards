import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import nominateReducer from './nominateSlice';
const store = configureStore({
  reducer: {
    user: userReducer,
    nominations: nominateReducer,
  },
});

export default store;
