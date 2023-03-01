import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',

  initialState: {
    status: 'checking', // 'authenticated', 'not-authenticated'
    user: {},
    errorMessage: undefined,
    isLoadingLogin: false,
  },

  reducers: {
    onChecking: state => {
      // state.status = 'checking';
      state.user = {};
      state.errorMessage = undefined;
      state.isLoadingLogin = true;
    },
    onLogin: (state, { payload }) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessage = undefined;
      state.isLoadingLogin = false;
    },
    onLogout: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.user = {};
      state.errorMessage = payload;
      state.isLoadingLogin = false;
    },
    clearErrorMessage: state => {
      state.errorMessage = undefined;
    },
    onSetErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
    onSetIsLoadingAuth: (state, { payload }) => {
      state.isLoadingLogin = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onChecking,
  onLogin,
  onLogout,
  clearErrorMessage,
  onSetErrorMessage,
  onSetIsLoadingAuth,
} = authSlice.actions;
