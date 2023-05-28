import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import categorySlice from './slices/category';
import  detailProductSlice from './slices/detailProduct';
import modalSlice from './slices/modal';
import cartSlice from './slices/cart';



export const store = configureStore({
  reducer: {
    categorySlice,
    detailProductSlice,
    modalSlice,
    cartSlice
  },
});

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()