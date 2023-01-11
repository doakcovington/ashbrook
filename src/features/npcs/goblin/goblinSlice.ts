import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Root } from 'react-dom/client';
import { RootState } from '../../../app/store';

export interface GoblinState {
  name: string;
  health: number;
  attack: number;
}

const initialState: GoblinState = {
  name: 'Goblin',
  health: 5,
  attack: 1,
}

export const goblinSlice = createSlice({
  name: 'goblin',
  initialState,
  reducers: {
    decrementGoblinHealth: (state, action: PayloadAction<number>) => {
      state.health -= action.payload;
    }
  }
})

export const {decrementGoblinHealth} = goblinSlice.actions;

export const selectHealth = (state: RootState) => state.goblin.health;
export const selectAttack = (state: RootState) => state.goblin.attack;
export const selectName = (state: RootState) => state.goblin.name;

export default goblinSlice.reducer;