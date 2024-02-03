import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface NovaState {
  isMoving: boolean;
  position: PositionState;
}

interface PositionState {
  x: number;
  y: number;
  z: number;
}

const initialNovaState: NovaState = {
  isMoving: false,
  position: {
    x: 0,
    y: 0,
    z: 0,
  },
};

export const novaSlice = createSlice({
  name: 'nova',
  initialState: initialNovaState,
  reducers: {
    setIsCameraMoving: (state, action: PayloadAction<boolean>) => {
      return (state = { ...state, isMoving: action.payload });
    },
    setCameraPosition: (state, action: PayloadAction<PositionState>) => {
      return (state = { ...state, position: action.payload });
    },
  },
});

export const { setIsCameraMoving, setCameraPosition } = novaSlice.actions;

export default novaSlice.reducer;
