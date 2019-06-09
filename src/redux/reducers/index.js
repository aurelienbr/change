// @flow
import { type Reducer, combineReducers } from 'redux';

import locale from '~reducers/localeReducer';
import type { StateType, ActionType } from '~types/Actions';

const combinedReducers: Reducer<StateType, ActionType> = combineReducers({
  locale
});

export default combinedReducers;
