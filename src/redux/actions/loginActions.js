// @flow

import type { UserType } from '~types/User';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_TOKEN_START = 'LOGIN_TOKEN_START';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_RESET = 'LOGIN_RESET';

export function loginUser(email: string, password: string) {
  return {
    type: LOGIN_START,
    payload: {
      email,
      password
    }
  };
}

export function loginUserWithToken(token: string) {
  return {
    type: LOGIN_TOKEN_START,
    payload: { token }
  };
}

export function userLoginSuccess(user: UserType, token: string) {
  return {
    type: LOGIN_SUCCESS,
    payload: { user, token }
  };
}

export function userLoginFailed(error: string) {
  return {
    type: LOGIN_FAILURE,
    payload: { error }
  };
}

export function resetLogin() {
  return {
    type: LOGIN_RESET
  };
}
