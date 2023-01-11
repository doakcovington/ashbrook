import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CartographerState {
  name: string;
  health: number;
}

const initialState: CartographerState = {
  name: 'Bok',
  health: 10,
} 

export const cartographerSlice = createSlice({
  name: 'cartographer',
  initialState,
  reducers: {
    decrementHealth: (state, action: PayloadAction<number>) => {
      state.health -= action.payload;
    }
  }
});

export const {decrementHealth} = cartographerSlice.actions;

export const selectHealth = (state: RootState) => state.cartographer.health;
export const selectName = (state: RootState) => state.cartographer.name;

export default cartographerSlice.reducer;