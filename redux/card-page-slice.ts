import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CardPageType } from '@/types/types';

type StateType = {
  cardPage: CardPageType;
};

const initialState: StateType = {
  cardPage: 'About',
};

export const cardPage = createSlice({
  name: 'cardPage',
  initialState,
  reducers: {
    setCardPage: (state, action: PayloadAction<StateType>) => {
      return (state = action.payload);
    },
  },
});

export const { setCardPage } = cardPage.actions;

export default cardPage.reducer;
