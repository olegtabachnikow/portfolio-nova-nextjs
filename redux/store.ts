import { configureStore } from '@reduxjs/toolkit';
import { interfaceSlice } from './interface-slice';
import { novaSlice } from './nova-slice';

export const store = configureStore({
  reducer: {
    interface: interfaceSlice.reducer,
    nova: novaSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
