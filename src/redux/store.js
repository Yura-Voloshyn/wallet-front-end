import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import statisticsSlice from './statistics/statisticsSlice';

import categoriesReducer from './categories/categories-slice';

import authReducer from './auth/authSlice';
import transactionsSlice from './transaction/transactionSlice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);
const statisticsReducer = persistReducer(persistConfig, statisticsSlice);
const transactionReducer = persistReducer(persistConfig, transactionsSlice);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,

    statistics: statisticsReducer,

    categories: categoriesReducer,
    transactions: transactionReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          'statistics/transactions/fulfilled',
          'transactions/fulfilled',
        ],
      },
    }),
});

export const persistor = persistStore(store);
