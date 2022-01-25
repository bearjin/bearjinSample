import { createSlice } from '@reduxjs/toolkit';

const initialState = { number: 0 }

export const numberSlice = createSlice({
  name: 'number',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.number = action;
    },
  }
});

export default numberSlice.reducer;
export const { increment } = numberSlice.actions;