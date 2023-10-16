import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface StartedState {
  isStarted: boolean;
}

const initialState: StartedState = {
  isStarted: false,
};

export const isStarted = createSlice({
  name: 'isStarted',
  initialState,
  reducers: {
    setIsStarted: (state, action: PayloadAction<StartedState>) => {
      return (state = action.payload);
    },
  },
});

export const { setIsStarted } = isStarted.actions;

export default isStarted.reducer;
