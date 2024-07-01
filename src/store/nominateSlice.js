import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postNomination = createAsyncThunk(
  'post/nomination',
  async (details, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/nominations`,
        details,
        {
          headers: {
            'content-type': 'application/json',
          },
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

const initialState = {
  nominationsArray: [],
  isLoading: false,
  loadingError: false,
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
      });
    // .addCase(getContent.pending, (state) => {
    //   state.isLoading = true;
    //   state.loadingError = false;
    // })
    // .addCase(getContent.fulfilled, (state, { payload }) => {
    //   state.post = payload;
    //   state.isLoading = false;
    //   state.loadingError = false;
    // })
    // .addCase(getContent.rejected, (state) => {
    //   state.loadingError = true;
    //   state.isLoading = false;
    // });
  },
});

export default nominateSlice.reducer;
