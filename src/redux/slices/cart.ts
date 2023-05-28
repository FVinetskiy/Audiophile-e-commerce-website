import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store'

export type TypeCategory = {
    totalPrice: number
    grandPrice: number
    nds: number
    items: []
    delivery: number
}

const initialState:TypeCategory = {
  totalPrice: 0,
  grandPrice: 0,
  items: [],
  nds: 0,
  delivery: 50
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0
      state.grandPrice = 0
    },
    countingNds(state) {
        state.nds = state.totalPrice / 5
    },
    countingGrandPrice(state) {
        state.grandPrice = state.grandPrice + state.nds  +state.delivery;
    }
  },
});

export const {clearItem , countingGrandPrice} = cartSlice.actions;
export default cartSlice.reducer;
export const stateCart = (state: RootState ) => state.cartSlice;
