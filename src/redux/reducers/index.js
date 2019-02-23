// @flow
import { type Reducer, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import locale from '~reducers/localeReducer';
import login from '~reducers/loginReducer';
import register from '~reducers/registerReducer';
import type { StateType, ActionType } from '~types/Actions';

const loginPersistConfig = {
  key: 'login',
  storage,
  whitelist: ['token']
};

const persistedLogin: any = persistReducer(loginPersistConfig, login);

const combinedReducers: Reducer<StateType, ActionType> = combineReducers({
  locale,
  login: persistedLogin,
  register
});

export default combinedReducers;
