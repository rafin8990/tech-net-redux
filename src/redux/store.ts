import { configureStore } from '@reduxjs/toolkit';
import cartSlices from './features/cart/cartSlices';

export const store = configureStore({
  reducer: {
    cart: cartSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
