import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store'
import { calkTotalPrice } from '../../utils/calkTotalPrice';

export type CartItemType = {
  id: number
  src: string
  name: string
  price: number
  count: number
} 

export type TypeCategory = {
    totalPrice: number
    grandPrice: number
    nds: number
    items: CartItemType[]
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
      state.nds = 0
    },
    addItem(state, action: PayloadAction<CartItemType>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calkTotalPrice(state.items)
      state.nds = state.totalPrice / 5
      state.grandPrice = state.totalPrice + state.nds + state.delivery
    },
    incItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count++;
      }
      state.totalPrice = calkTotalPrice(state.items);
      state.nds = state.totalPrice / 5
      state.grandPrice = state.totalPrice + state.nds + state.delivery
    },
    decItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if ( findItem?.count === 1) {
        state.items = state.items.filter(i=> i.id !== findItem.id )
      } 
      else if  (findItem) {
        findItem.count--;
      }
      state.totalPrice = calkTotalPrice(state.items);
      state.nds = state.totalPrice / 5
      state.grandPrice = state.totalPrice + state.nds + state.delivery
    }
  },
});

export const {clearItem , addItem , incItem , decItem} = cartSlice.actions;
export default cartSlice.reducer;
export const stateCart = (state: RootState ) => state.cartSlice;
