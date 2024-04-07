import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CardPageType } from '@/types/types';

interface InterfaceState {
  opacity: number;
  isBurgerMenuOpen: boolean;
  isStarted: boolean;
  cardPage: CardPageType;
  cardHeight: number;
  cardHeaderMoved: boolean;
}

const initialState: InterfaceState = {
  opacity: 1,
  isBurgerMenuOpen: false,
  isStarted: false,
  cardPage: 'About',
  cardHeight: 450,
  cardHeaderMoved: false,
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
    setCardHeight: (state, action: PayloadAction<number>) => {
      return (state = { ...state, cardHeight: action.payload });
    },
    setIsCardHeaderMoved: (state, action: PayloadAction<boolean>) => {
      return (state = { ...state, cardHeaderMoved: action.payload });
    },
  },
});

export const {
  setOpacity,
  setIsBurgerMenuOpen,
  setIsStarted,
  setCardPage,
  setCardHeight,
  setIsCardHeaderMoved,
} = interfaceSlice.actions;

export default interfaceSlice.reducer;
