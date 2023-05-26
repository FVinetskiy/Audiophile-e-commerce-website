import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './slices/category';
import  detailProductSlice from './slices/detailProduct';
import { useDispatch } from 'react-redux';


export const store = configureStore({
  reducer: {
    categorySlice,
    detailProductSlice
  },
});

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()