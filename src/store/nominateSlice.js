import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postNomination = createAsyncThunk(
  'post/nomination',
  async (details, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://pafir-awards-backend.vercel.app/api/nominations`,
        details,
        {
          headers: {
            'content-type': 'application/json',
          },
          withCredentials: true,
        }
      );
      const nomination = response.data;
      return nomination;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data); // Return the error payload
      } else {
        return rejectWithValue({ msg: 'An unexpected error occurred.' });
      }
    }
  }
);

export const getAllNominations = createAsyncThunk(
  'get/nominations',
  async () => {
    const response = await axios.get(
      `https://pafir-awards-backend.vercel.app/api/nominations`,
      {
        headers: {
          'content-type': 'application/json',
        },
      }
    );
    const nominations = response.data;
    return nominations;
  }
);

const initialState = {
  nominationsArray: null,
  isLoading: false,
  error: false,
};

const nominateSlice = createSlice({
  name: 'nomination',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(postNomination.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(postNomination.fulfilled, (state, { payload }) => {
        state.nominationsArray = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(postNomination.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(getAllNominations.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getAllNominations.fulfilled, (state, { payload }) => {
        state.nominationsArray = payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(getAllNominations.rejected, (state, { payload }) => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export default nominateSlice.reducer;
