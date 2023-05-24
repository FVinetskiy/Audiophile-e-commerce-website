import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './slices/caregory';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    categorySlice
  },
});

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()