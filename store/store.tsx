import { configureStore } from '@reduxjs/toolkit';
import portfolioDataReducer from '../features/portfolioData';

export const store = configureStore({
  reducer: {
    portfolioData: portfolioDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
