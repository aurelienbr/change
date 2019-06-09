// @flow
import type { Action as localeAction } from '~types/actions/localeActions';
import type { State as localeState } from '~reducers/localeReducer';

export type StateType = {
  locale: localeState
};

export type ActionType = localeAction;
export type DispatchType = (action: ActionType) => any;
