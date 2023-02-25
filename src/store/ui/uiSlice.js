import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'dark',
  userId: '63701cc1f03239b7f700000e',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,

  reducers: {
    onSetMode: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSetMode } = uiSlice.actions;
