import { configureStore } from '@reduxjs/toolkit';
import { cameraPosition } from './nova-position-slice';
import { isCameraMoving } from './nova-is-moving-slice';
import { isStarted } from './is-user-started-slice';
import { cardPage } from './card-page-slice';

export const store = configureStore({
  reducer: {
    cameraPosition: cameraPosition.reducer,
    isCameraMoving: isCameraMoving.reducer,
    isStarted: isStarted.reducer,
    cardPage: cardPage.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
