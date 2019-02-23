// @flow

import { LOGIN_START, LOGIN_TOKEN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_RESET } from '~actions/loginActions';

import type { UserType } from '~types/User';
import { STATUS_START, STATUS_LOADING, STATUS_FAILURE, STATUS_SUCCESS, type Status } from '~types/Status';

export type State = {
  user: UserType,
  token: ?string,
  status: Status,
  error: ?string
};

const initialState: State = {
  user: {
    email: ''
  },
  token: null,
  error: null,
  status: STATUS_START
};

export default function(state: State = initialState, action: any): State {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        status: STATUS_LOADING
      };
    case LOGIN_TOKEN_START:
      return {
        ...state,
        status: STATUS_LOADING
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        status: STATUS_SUCCESS
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        token: initialState.token,
        user: initialState.user,
        status: STATUS_FAILURE
      };
    case LOGIN_RESET:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
}
