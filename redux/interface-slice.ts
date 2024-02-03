import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CardPageType } from '@/types/types';

interface InterfaceState {
  opacity: number;
  isBurgerMenuOpen: boolean;
  isStarted: boolean;
  cardPage: CardPageType;
}

const initialState: InterfaceState = {
  opacity: 1,
  isBurgerMenuOpen: false,
  isStarted: false,
  cardPage: 'About',
};

export const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
    setOpacity: (state, action: PayloadAction<number>) => {
      return (state = { ...state, opacity: action.payload });
    },
    setIsBurgerMenuOpen: (state, action: PayloadAction<boolean>) => {
      return (state = { ...state, isBurgerMenuOpen: action.payload });
    },
    setIsStarted: (state, action: PayloadAction<boolean>) => {
      return (state = { ...state, isStarted: action.payload });
    },
    setCardPage: (state, action: PayloadAction<CardPageType>) => {
      return (state = { ...state, cardPage: action.payload });
    },
  },
});

export const { setOpacity, setIsBurgerMenuOpen, setIsStarted, setCardPage } =
  interfaceSlice.actions;

export default interfaceSlice.reducer;
