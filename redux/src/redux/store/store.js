import { configureStore } from '@reduxjs/toolkit';
import numberSliceReducer from '../slices/numberSlice';

export const store = configureStore({
  reducer: {
    number: numberSliceReducer,
  },
});