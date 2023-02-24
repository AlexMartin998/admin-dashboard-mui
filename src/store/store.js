import { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from './ui/uiSlice';


export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },

  // Middleware en el store - error serializar la fecha
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
