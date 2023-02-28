import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { uiSlice } from './ui/uiSlice';
import { api } from './api/apiSlice';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    auth: authSlice.reducer,

    // RTK Query:
    [api.reducerPath]: api.reducer,
  },

  // Middleware en el store
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
