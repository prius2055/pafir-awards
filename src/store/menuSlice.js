import { createSlice } from '@reduxjs/toolkit';

const initialState = { isMenuOpen: false };

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    showMenu: (state) => {
      state.isMenuOpen = true;
    },
    hideMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { showMenu, hideMenu } = menuSlice.actions;

export default menuSlice.reducer;
