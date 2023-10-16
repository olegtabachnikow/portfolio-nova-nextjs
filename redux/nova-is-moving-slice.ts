import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CameraMoving {
  isMoving: boolean;
}

const initialCameraState: CameraMoving = {
  isMoving: false,
};

export const isCameraMoving = createSlice({
  name: 'isCameraMoving',
  initialState: initialCameraState,
  reducers: {
    setIsCameraMoving: (state, action: PayloadAction<CameraMoving>) => {
      return (state = action.payload);
    },
  },
});

export const { setIsCameraMoving } = isCameraMoving.actions;

export default isCameraMoving.reducer;
