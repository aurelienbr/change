// @flow
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import locale from 'reducers/localeReducer';
import login from 'reducers/loginReducer';
import register from 'reducers/registerReducer';

const loginPersistConfig = {
  key: 'login',
  storage,
  whitelist: ['token']
};

export default combineReducers({
  locale,
  login: persistReducer(loginPersistConfig, login),
  register
});
