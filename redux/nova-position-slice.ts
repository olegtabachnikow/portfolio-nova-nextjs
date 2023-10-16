import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface PositionState {
  x: number;
  y: number;
  z: number;
}

const initialState: PositionState = {
  x: 0,
  y: 0,
  z: 0,
};

export const cameraPosition = createSlice({
  name: 'cameraPosition',
  initialState,
  reducers: {
    setCameraPosition: (state, action: PayloadAction<PositionState>) => {
      return (state = action.payload);
    },
  },
});

export const { setCameraPosition } = cameraPosition.actions;

export default cameraPosition.reducer;
