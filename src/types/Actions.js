// @flow
import type { State as localeState } from 'reducers/localeReducer';
import type { Action as localeAction } from 'actions/localeActions';

import type { State as loginState } from 'reducers/loginReducer';
import type { Action as loginAction } from 'actions/loginActions';

import type { State as registerState } from 'reducers/registerReducer';
import type { Action as registerAction } from 'actions/registerActions';

export type StateType = {
  locale: localeState,
  login: loginState,
  register: registerState
};

export type ActionType = localeAction | loginAction | registerAction;
export type DispatchType = (action: ActionType) => any;
