// @flow

import type { UserType } from 'types/User';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_TOKEN_START = 'LOGIN_TOKEN_START';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_RESET = 'LOGIN_RESET';

export type LOGIN_START_ACTION = {
  type: 'LOGIN_START',
  payload: {
    email: string,
    password: string
  }
};

export type LOGIN_TOKEN_START_ACTION = {
  type: 'LOGIN_TOKEN_START',
  payload: {
    token: string
  }
};

export type LOGIN_FAILURE_ACTION = {
  type: 'LOGIN_FAILURE',
  payload: {
    error: string
  }
};

export type LOGIN_SUCCESS_ACTION = {
  type: 'LOGIN_SUCCESS',
  payload: {
    user: UserType,
    token: string
  }
};

export type LOGIN_RESET_ACTION = {
  type: 'LOGIN_RESET'
};

export type Action = LOGIN_START_ACTION | LOGIN_TOKEN_START_ACTION | LOGIN_SUCCESS_ACTION | LOGIN_FAILURE_ACTION | LOGIN_RESET_ACTION;

export function loginUser(email: string, password: string): LOGIN_START_ACTION {
  return {
    type: LOGIN_START,
    payload: {
      email,
      password
    }
  };
}

export function loginUserWithToken(token: string): LOGIN_TOKEN_START_ACTION {
  return {
    type: LOGIN_TOKEN_START,
    payload: { token }
  };
}

export function userLoginSuccess(user: UserType, token: string): LOGIN_SUCCESS_ACTION {
  return {
    type: LOGIN_SUCCESS,
    payload: { user, token }
  };
}

export function userLoginFailed(error: string): LOGIN_FAILURE_ACTION {
  return {
    type: LOGIN_FAILURE,
    payload: { error }
  };
}

export function resetLogin(): LOGIN_RESET_ACTION {
  return {
    type: LOGIN_RESET
  };
}
