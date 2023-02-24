import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'dark',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,

  reducers: {
    setMode: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMode } = uiSlice.actions;
