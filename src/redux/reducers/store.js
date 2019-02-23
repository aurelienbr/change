import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'remote-redux-devtools';

import reducers from '~reducers/index';
import rootSaga from '~sagas/root';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['login', 'register', 'form']
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
