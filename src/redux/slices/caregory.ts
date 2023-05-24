import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

export type TypeCategory = {
  id:number
  new: boolean,
  categoryImage: {
    desktop:string
  },
  name:string,
  description:string,
}

export type SearchProductParams = {
  category: string;
}

export const fetchProduct = createAsyncThunk<TypeCategory[], SearchProductParams>(
  'app/fetchCategory',
  async (params) => {
    const { category } = params;
    const { data } = await axios.get<TypeCategory[]>(
      `http://localhost:3001/data?category=${category}`
    );
    return data;
  }
  
);

interface ProductState {
  categories:  TypeCategory[]
  status: 'loading' | 'success' | 'error'
}

const initialState : ProductState = {
  categories: [],
  status: 'loading'
};

export const categorySlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state ) => { 
      state.status = 'loading';
      state.categories = [];
    })
    builder.addCase(fetchProduct.fulfilled, (state , action) => { 
      state.status = 'success';
      state.categories = action.payload;
    })
    builder.addCase(fetchProduct.rejected, (state ) => { 
      state.categories = [];
      state.status = 'error';
    })
  }
});

export default categorySlice.reducer;
export const selectCategory = (state: RootState) => state.categorySlice;