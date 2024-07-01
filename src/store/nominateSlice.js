import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

export const postNomination = createAsyncThunk(
  'post/nomination',
  async (details) => {
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
      const nomination = await response.data;
      return nomination;
    } catch (error) {
        if(error){
            throw error
        }
        return isRejectedWithValue(error.response.data);
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

  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(getAllContent.pending, (state) => {
  //         state.isLoading = true;
  //         state.loadingError = false;
  //       })
  //       .addCase(getAllContent.fulfilled, (state, { payload }) => {
  //         state.postsArray = payload;
  //         state.isLoading = false;
  //         state.loadingError = false;
  //       })
  //       .addCase(getAllContent.rejected, (state) => {
  //         state.loadingError = true;
  //         state.isLoading = false;
  //       })
  //       .addCase(getContent.pending, (state) => {
  //         state.isLoading = true;
  //         state.loadingError = false;
  //       })
  //       .addCase(getContent.fulfilled, (state, { payload }) => {
  //         state.post = payload;
  //         state.isLoading = false;
  //         state.loadingError = false;
  //       })
  //       .addCase(getContent.rejected, (state) => {
  //         state.loadingError = true;
  //         state.isLoading = false;
  //       });
  //   },
});

export default nominateSlice.reducer;
