import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ICheck {
    active: boolean
}

const initialState : ICheck = {
    active: false
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    reverseBool: (state , action) => {
        state.active = action.payload
    },
  },
});

export const { reverseBool } = modalSlice.actions
export default modalSlice.reducer;
export const ModalStatus = (state: RootState) => state.modalSlice;