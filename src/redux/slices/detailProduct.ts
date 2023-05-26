import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';


export type TypeIncludes = {
  item:string
  quantity:string
}

export type TypeDetailProduct = {
  id?:string
  image?: {
    desktop:string
  }
  name?:string
  new?: boolean
  description?: string
  price?:number
  features?:string
  includes?: TypeIncludes[]
  gallery?:object
  others?: {
    id?:number
    image: {
      desktop: string
      mobile: string
      tablet: string
    }
    name:string
    slug:string
  }[]

}

export type SearchProductParams = {
  id?: string
}

export const fetchProduct = createAsyncThunk<TypeDetailProduct, SearchProductParams>(
  'app/fetchProduct',
  async (params) => {
    const { id } = params;
    const { data } = await axios.get<TypeDetailProduct>(
      `http://localhost:3001/data/${id}`
    );
    return data;
  }
  
);

interface ProductState {
  product:  TypeDetailProduct
  status: 'loading' | 'success' | 'error'
}

const initialState : ProductState = {
  product: {},
  status: 'loading'
};

export const detailProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state ) => { 
      state.status = 'loading';
      state.product = {};
    })
    builder.addCase(fetchProduct.fulfilled, (state , action) => { 
      state.status = 'success';
      state.product = action.payload;
    })
    builder.addCase(fetchProduct.rejected, (state ) => { 
      state.product = {};
      state.status = 'error';
    })
  }
});

export default detailProductSlice.reducer;
export const selectProduct = (state: RootState) => state.detailProductSlice;