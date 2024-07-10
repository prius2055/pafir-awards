import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const userLogin = createAsyncThunk(
  'login/user',
  async (details, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://pafir-awards-backend.vercel.app/api/admin/login`,
        details,
        {
          headers: {
            'content-type': 'application/json',
          },
          withCredentials: true,
        }
      );
      const user = response.data;
      return user;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ msg: 'An unexpected error occurred.' });
      }
    }
  }
);
export const userRegister = createAsyncThunk(
  'register/user',
  async (details, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://pafir-awards-backend.vercel.app/api/admin/register',
        details,
        {
          headers: {
            'content-type': 'application/json',
          },
          withCredentials: true,
        }
      );
      const user = response.data;
      return user;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ msg: 'An unexpected error occurred.' });
      }
    }
  }
);

const initialState = {
  userDetail: null,
  isLoading: false,
  loadingError: false,
};

const userSlice = createSlice({
  name: 'nomination',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.userDetail = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;
