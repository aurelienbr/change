// @flow
import type { State as localeState } from 'reducers/localeReducer';

import type { State as loginState } from 'reducers/loginReducer';

import type { State as registerState } from 'reducers/registerReducer';

export type StateType = {
  locale: localeState,
  login: loginState,
  register: registerState
};

export type ActionType = any;
export type DispatchType = (action: ActionType) => any;
