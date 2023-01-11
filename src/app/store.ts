import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartographerReducer from '../features/cartographer/cartographerSlice';
import goblinReducer from '../features/npcs/goblin/goblinSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cartographer: cartographerReducer,
    goblin: goblinReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
