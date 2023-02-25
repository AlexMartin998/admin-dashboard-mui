import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { uiSlice } from './ui/uiSlice';
import { api } from './api/apiSlice';

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    [api.reducerPath]: api.reducer,
  },

  // Middleware en el store
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),

  // error serializar la fecha:
  // getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
});

setupListeners(store.dispatch);
