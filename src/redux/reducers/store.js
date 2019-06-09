import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from '~reducers/index';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['login', 'register', 'form']
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
